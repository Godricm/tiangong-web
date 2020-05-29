<template>
  <div>
    <a-card :bordered="false">
      <div class="table-page-search-wrapper">
        <a-form layout="inline">
          <a-row :gutter="48">
            <a-col :md="5" :sm="24">
              <a-form-item label="微信用户ID">
                <a-input v-model="queryParam.openid" placeholder=""/>
              </a-form-item>
            </a-col>
            <a-col :md="5" :sm="24">
              <a-form-item label="消息方向">
                <a-input v-model="queryParam.inOut" placeholder=""/>
              </a-form-item>
            </a-col>
            <a-col :md="5" :sm="24">
              <a-form-item label="消息类型">
                <a-input v-model="queryParam.msgType" placeholder=""/>
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

    </a-card>

    <a-card
      style="margin-top: 10px"
      :bordered="false">
      <s-table
        ref="table"
        size="default"
        rowKey="id"
        :columns="columns"
        :data="loadData"
        :alert="options.alert"
        :rowSelection="options.rowSelection"
      >
        <span slot="action" slot-scope="text, record">
          <template>
            <a-divider type="vertical" />
            <a-popconfirm title="确认删除?" @confirm="handleDel(record)" okText="删除" cancelText="取消" v-action:del>
              <a>删除</a>
            </a-popconfirm>
          </template>
        </span>
      </s-table>
    </a-card>
  </div>
</template>

<script>
import { STable, Ellipsis } from '@/components'
import { getWxMsgList, delWxMsg } from '@/api/wechat/wxmsg'

export default {
  name: 'WxMsgView',
  components: {
    STable,
    Ellipsis
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
          title: '微信用户ID',
          dataIndex: 'openid'
        },
        {
          title: '消息方向',
          dataIndex: 'inOut'
        },
        {
          title: '消息类型',
          dataIndex: 'msgType'
        },
        {
          title: '消息详情',
          dataIndex: 'detail'
        },
        {
          title: '创建时间',
          dataIndex: 'createTime'
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
        return getWxMsgList(Object.assign(parameter, this.queryParam))
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
    handleDel (record) {
      delWxMsg(record.id).then(res => {
        this.$message.info('删除成功')
        this.$refs.table.refresh()
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
