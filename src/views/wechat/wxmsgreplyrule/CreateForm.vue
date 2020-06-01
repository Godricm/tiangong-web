<template>
  <a-modal
    :title="title"
    :width="640"
    :visible="visible"
    :confirmLoading="confirmLoading"
    @ok="handleSubmit"
    @cancel="handleCancel"
  >
    <a-spin :spinning="confirmLoading">
      <a-form :form="form" :layout="inline">
        <a-form-item><a-input type="hidden" v-decorator="['ruleId', {rules: [{required: false}]}]" /></a-form-item>
        <a-form-item
          label="规则名称"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol">
          <a-input v-decorator="['ruleName', {rules: [{required: true}]}]" />
        </a-form-item>

        <a-form-item
          label="匹配关键词"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol">
          <div>
            <template v-for="(tag) in tags">
              <a-tooltip v-if="tag.length > 20" :key="tag" :title="tag">
                <a-tag
                  :key="tag"
                  :closable="true"
                  :close="() => handleTagClose(tag)"
                >{{ `${tag.slice(0, 20)}...` }}</a-tag>
              </a-tooltip>
              <a-tag
                v-else
                :key="tag"
                :closable="true"
                :close="() => handleTagClose(tag)"
              >{{ tag }}</a-tag>
            </template>
            <a-input
              v-if="tagInputVisible"
              ref="tagInput"
              type="text"
              size="small"
              :style="{ width: '78px' }"
              :value="tagInputValue"
              @change="handleInputChange"
              @blur="handleTagInputConfirm"
              @keyup.enter="handleTagInputConfirm"
            ></a-input>
            <a-tag v-else @click="showTagInput" style="background: #fff; borderStyle: dashed;">
              <a-icon type="plus"/>New Tag
            </a-tag>
          </div>
        </a-form-item>

        <a-form-item
          label="精确匹配"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol">
          <a-switch default-checked @change="onExactMatchChange" />
        </a-form-item>

        <a-form-item
          label="回复消息类型"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol">
          <div>
            <template>
              <a-select defaultValue="text" style="100%" @change="handleReplyTypeChange">
                <a-select-option v-for="d in replyTypes" :key="d.value">
                  {{ d.text }}
                </a-select-option>
              </a-select>
            </template>
          </div>
        </a-form-item>

        <a-form-item
          label="是否有效"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol">
          <a-switch default-checked @change="onStatusChange" />
        </a-form-item>

        <a-form-item
          label="回复消息内容"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol">
          <a-input v-decorator="['replyContent', {rules: [{required: false}]}]" />
        </a-form-item>

        <a-form-item
          label="生效时间"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol">
          <a-time-picker :default-open-value="moment('00:00:00', 'HH:mm:ss')" placeholder="请选择生效时间" @change="onTimeStartChange" />
        </a-form-item>

        <a-form-item
          label="失效时间"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol">
          <a-time-picker :default-open-value="moment('00:00:00', 'HH:mm:ss')" placeholder="请选择失效时间" @change="onTimeEndChange" />
        </a-form-item>

        <a-form-item
          label="规则优先级"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol">
          <a-input v-decorator="['priority', {rules: [{required: false}]}]" />
        </a-form-item>

        <a-form-item
          label="备注说明"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol">
          <a-textarea
            rows="2"
            v-decorator="[
              'desc',
              {rules: [{ required: false}]}
            ]" />
        </a-form-item>
      </a-form>
    </a-spin>
  </a-modal>
</template>

<script>

import AFormItem from 'ant-design-vue/es/form/FormItem'
import { getWxMsgReplyRuleInfo } from '@/api/wechat/wxmsgreplyrule'
import moment from 'moment'
export default {
  components: { AFormItem },
  data () {
    return {
      tags: ['很有想法的', '专注设计', '辣~', '大长腿', '川妹子', '海纳百川'],
      replyTypes: [{
          value: 'text',
          text: '文字消息'
      },
      {
         value: 'image',
          text: '图片消息'
      },
      {
         value: 'voice',
          text: '录音消息'
      },
      {
         value: 'video',
          text: '视频消息'
      },
      {
         value: 'music',
          text: '音乐消息'
      },
      {
         value: 'news',
          text: '图文消息'
      },
      {
         value: 'mpnews',
          text: '公众号文章消息'
      },
      {
         value: 'wxcard',
          text: '卡券消息'
      },
      {
         value: 'miniprogrampage',
          text: '小程序消息'
      },
      {
         value: 'msgmenu',
          text: '菜单消息'
      }],
      tagInputVisible: false,
      tagInputValue: '',
      labelCol: {
        xs: { span: 12 },
        sm: { span: 7 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 13 }
      },
      visible: false,
      confirmLoading: false,
      title: ''
    }
  },
  beforeCreate () {
    this.form = this.$form.createForm(this)
  },
  methods: {
    moment,
    add () {
      this.title = '新建自动回复规则'
      this.visible = true
    },
    edit (record) {
      this.title = '编辑自动回复规则'
      this.visible = true

      getWxMsgReplyRuleInfo(record.ruleId).then(res => {
        const data = res.data
        this.form.setFieldsValue({ ...data })
      })
    },
    handleTagColse (removeTag) {
      const tags = this.tags.filter(tag => tag !== removeTag)
      this.tags = tags
    },
    handleSubmit () {
      const { form: { validateFields } } = this
      this.confirmLoading = true
      validateFields((errors, values) => {
        if (!errors) {
          console.log('values', values)
          setTimeout(() => {
            this.visible = false
            this.confirmLoading = false
            if (values.ruleId) {
              this.$emit('edit', values)
            } else {
              this.$emit('add', values)
            }
            this.form.resetFields()
          }, 500)
        } else {
          this.confirmLoading = false
        }
      })
    },
    handleCancel () {
      this.visible = false
      this.form.resetFields()
    },
    showTagInput () {
      this.tagInputVisible = true
      this.$nextTick(() => {
        this.$refs.tagInput.focus()
      })
    },
    handleInputChange (e) {
      this.tagInputValue = e.target.value
    },

    handleTagInputConfirm () {
      const inputValue = this.tagInputValue
      let tags = this.tags
      if (inputValue && !tags.includes(inputValue)) {
        tags = [...tags, inputValue]
      }

      Object.assign(this, {
        tags,
        tagInputVisible: false,
        tagInputValue: ''
      })
    },
    onExactMatchChange (checked) {
      console.log(`a-switch to ${checked}`)
    },
    handleReplyTypeChange (value) {
      console.log(`selected ${value}`)
    },
    onStatusChange (checked) {
      console.log(`a-switch to ${checked}`)
    },
    onTimeStartChange (time, timeString) {
      console.log(time, timeString)
    },
    onTimeEndChange (time, timeString) {
      console.log(time, timeString)
    }
  }
}
</script>
