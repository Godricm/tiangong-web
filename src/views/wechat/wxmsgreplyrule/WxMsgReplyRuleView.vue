<template>
  <div>
    <a-card :bordered="false">
      <div class="table-page-search-wrapper">
        <a-form layout="inline">
          <a-row :gutter="48">
            <a-col :md="5" :sm="24">
              <a-form-item label="规则名称">
                <a-input v-model="queryParam.ruleName" placeholder=""/>
              </a-form-item>
            </a-col>
            <a-col :md="5" :sm="24">
              <a-form-item label="匹配的关键词、事件等">
                <a-input v-model="queryParam.matchValue" placeholder=""/>
              </a-form-item>
            </a-col>
            <a-col :md="5" :sm="24">
              <a-form-item label="是否精确匹配">
                <a-input v-model="queryParam.exactMatch" placeholder=""/>
              </a-form-item>
            </a-col>
            <a-col :md="5" :sm="24">
              <a-form-item label="回复消息类型">
                <a-input v-model="queryParam.replyType" placeholder=""/>
              </a-form-item>
            </a-col>
            <a-col :md="5" :sm="24">
              <a-form-item label="回复消息内容">
                <a-input v-model="queryParam.replyContent" placeholder=""/>
              </a-form-item>
            </a-col>
            <a-col :md="5" :sm="24">
              <a-form-item label="规则是否有效">
                <a-input v-model="queryParam.status" placeholder=""/>
              </a-form-item>
            </a-col>
            <a-col :md="5" :sm="24">
              <a-form-item label="备注说明">
                <a-input v-model="queryParam.desc" placeholder=""/>
              </a-form-item>
            </a-col>
            <a-col :md="5" :sm="24">
              <a-form-item label="生效起始时间">
                <a-input v-model="queryParam.effectTimeStart" placeholder=""/>
              </a-form-item>
            </a-col>
            <a-col :md="5" :sm="24">
              <a-form-item label="生效结束时间">
                <a-input v-model="queryParam.effectTimeEnd" placeholder=""/>
              </a-form-item>
            </a-col>
            <a-col :md="5" :sm="24">
              <a-form-item label="规则优先级">
                <a-input v-model="queryParam.priority" placeholder=""/>
              </a-form-item>
            </a-col>
            <a-col :md="5" :sm="24">
              <a-form-item label="修改时间">
                <a-input v-model="queryParam.updateTime" placeholder=""/>
              </a-form-item>
            </a-col>
            <a-col :md="8" :sm="24">
              <span class="table-page-search-submitButtons">
                <a-button type="primary" @click="$refs.table.refresh(true)">查询</a-button>
                <a-button style="margin-left: 8px" @click="resetSearchForm">重置</a-button>
              </span>
            </a-col>
          </a-row>
        </a-form>
      </div>

      <a-button type="primary" icon="plus" @click="$refs.createModal.add()" v-action:add>新建</a-button>
    </a-card>

    <a-card
      style="margin-top: 10px"
      :bordered="false">
      <s-table
        ref="table"
        size="default"
        rowKey="ruleId"
        :columns="columns"
        :data="loadData"
        :alert="options.alert"
        :rowSelection="options.rowSelection"
      >
        <span slot="action" slot-scope="text, record">
          <template>
            <a @click="handleEdit(record)" v-action:edit>编辑</a>
            <a-divider type="vertical" />
            <a-popconfirm title="确认删除?" @confirm="handleDel(record)" okText="删除" cancelText="取消" v-action:del>
              <a>删除</a>
            </a-popconfirm>
          </template>
        </span>
      </s-table>
      <create-form ref="createModal" @add="handleAddOk" @edit="handleEditOk" />
    </a-card>
  </div>
</template>

<script>
import { STable, Ellipsis } from '@/components'
import CreateForm from './CreateForm'
import { getWxMsgReplyRuleList, addWxMsgReplyRule, editWxMsgReplyRule, delWxMsgReplyRule } from '@/api/wechat/wxmsgreplyrule'

export default {
  name: 'WxMsgReplyRuleView',
  components: {
    STable,
    Ellipsis,
    CreateForm
    // StepByStepModal
  },
  data () {
    return {
      mdl: {},
      // 查询参数
      queryParam: {},
      // 表头
      columns: [
        {
          title: '规则名称',
          dataIndex: 'ruleName'
        },
        {
          title: '匹配的关键词、事件等',
          dataIndex: 'matchValue'
        },
        {
          title: '是否精确匹配',
          dataIndex: 'exactMatch'
        },
        {
          title: '回复消息类型',
          dataIndex: 'replyType'
        },
        {
          title: '回复消息内容',
          dataIndex: 'replyContent'
        },
        {
          title: '规则是否有效',
          dataIndex: 'status'
        },
        {
          title: '备注说明',
          dataIndex: 'desc'
        },
        {
          title: '生效起始时间',
          dataIndex: 'effectTimeStart'
        },
        {
          title: '生效结束时间',
          dataIndex: 'effectTimeEnd'
        },
        {
          title: '规则优先级',
          dataIndex: 'priority'
        },
        {
          title: '修改时间',
          dataIndex: 'updateTime'
        },
        {
          title: '操作',
          dataIndex: 'action',
          width: '150px',
          scopedSlots: { customRender: 'action' }
        }
      ],
      // 加载数据方法 必须为 Promise 对象
      loadData: parameter => {
        return getWxMsgReplyRuleList(Object.assign(parameter, this.queryParam))
          .then(res => {
            return res.data
          })
      },
      selectedRowKeys: [],
      selectedRows: [],

      // custom table alert & rowSelection
      options: {
        alert: { show: false, clear: () => { this.selectedRowKeys = [] } },
        rowSelection: {
          selectedRowKeys: this.selectedRowKeys,
          onChange: this.onSelectChange
        }
      }
    }
  },
  methods: {
    handleEdit (record) {
      this.$refs.createModal.edit(record)
    },
    handleEditOk (values) {
      editWxMsgReplyRule({ ...values }).then(res => {
        this.$message.info('修改成功')
        this.$refs.table.refresh()
      })
    },
    handleDel (record) {
      delWxMsgReplyRule(record.ruleId).then(res => {
        this.$message.info('删除成功')
        this.$refs.table.refresh()
      })
    },
    handleAddOk (values) {
      addWxMsgReplyRule(values).then(res => {
        this.$message.info('添加成功')
        this.$refs.table.refresh(true)
      })
    },
    onSelectChange (selectedRowKeys, selectedRows) {
      this.selectedRowKeys = selectedRowKeys
      this.selectedRows = selectedRows
    },
    resetSearchForm () {
      this.queryParam = {}
      this.$refs.table.refresh(true)
    }
  }
}
</script>
