<template>
  <div>
    <a-card :bordered="false" :loading="loading" style="height: 200px">
      欢迎您! {{ userName }}
    </a-card>
  </div>
</template>

<script>
import storage from 'store'
import { USER_ID } from '@/store/mutation-types'
import { getUserInfo } from '@/api/user'

export default {
  name: 'Analysis',
  components: {

  },
  data () {
    return {
      loading: true,
      userName: ''
    }
  },
  created () {
    const userId = storage.get(USER_ID)
    getUserInfo(userId).then(res => {
      this.userName = res.data.userName
    })

    setTimeout(() => {
      this.loading = !this.loading
    }, 1000)
  }
}
</script>

<style lang="less" scoped>

</style>
