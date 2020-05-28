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
      <a-form :form="form">
        <a-form-item><a-input type="hidden" v-decorator="['id', {rules: [{required: false}]}]" /></a-form-item>
        <a-form-item
          label="微信用户ID"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol">
          <a-input v-decorator="['openid', {rules: [{required: false}]}]" />
        </a-form-item>

        <a-form-item
          label="消息方向"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol">
          <a-input v-decorator="['inOut', {rules: [{required: false}]}]" />
        </a-form-item>

        <a-form-item
          label="消息类型"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol">
          <a-input v-decorator="['msgType', {rules: [{required: false}]}]" />
        </a-form-item>

        <a-form-item
          label="消息详情"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol">
          <a-input v-decorator="['detail', {rules: [{required: false}]}]" />
        </a-form-item>

        <a-form-item
          label="创建时间"
          :labelCol="labelCol"
          :wrapperCol="wrapperCol">
          <a-input v-decorator="['createTime', {rules: [{required: false}]}]" />
        </a-form-item>

      </a-form>
    </a-spin>
  </a-modal>
</template>

<script>

import AFormItem from 'ant-design-vue/es/form/FormItem'
import { getWxMsgInfo } from '@/api/wechat/wxmsg'

export default {
  components: { AFormItem },
  data () {
    return {
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
    add () {
      this.title = '新建微信消息'
      this.visible = true
    },
    edit (record) {
      this.title = '编辑微信消息'
      this.visible = true

      getWxMsgInfo(record.id).then(res => {
        const data = res.data
        this.form.setFieldsValue({ ...data })
      })
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
            if (values.id) {
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
    }
  }
}
</script>
