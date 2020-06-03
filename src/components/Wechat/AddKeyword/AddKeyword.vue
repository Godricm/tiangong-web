<template>
  <a-modal
    :title="title"
    :width="640"
    :visible="visible"
    :confirmLoading="confirmLoading"
    @ok="handleSubmit"
    @cancel="handleCancel"
  >
    <a-form layout="horizontal">
      <a-form-item label="精确匹配" :labelCol="labelCol" :wrapperCol="wrapperCol">
        <a-switch default-checked @change="onExactMatchChange" />
      </a-form-item>
      <a-form-item label="关键字" :labelCol="labelCol" :wrapperCol="wrapperCol">
        <a-input placeholder="关键字，多个关键字请使用逗号隔开" />
      </a-form-item>
    </a-form>
  </a-modal>
</template>
<script>
export default {
  data () {
    return {
      visible: false,
      labelCol: {
        xs: { span: 12 },
        sm: { span: 7 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 13 }
      },
      confirmLoading: false
    }
  },
  created () {},
  methods: {
    add () {
      this.title = '添加关键字'
      this.visible = true
    },
    onExactMatchChange (checked) {
      console.log(`a-switch to ${checked}`)
    },
    handleCancel () {
      this.visible = false
      this.form.resetFields()
    },
    handleSubmit () {
      this.visible = false
    }
  }
}
</script>
