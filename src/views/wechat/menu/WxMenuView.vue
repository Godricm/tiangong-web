<template>
  <div>
    <a-card :bordered="false">
      <a-button type="primary" icon="plus" v-action:add>新建</a-button>
    </a-card>
  </div>
</template>

<script>
import { getMenu, updateMenu } from '@/api/wechat/menu'
export default {
    name: 'WxMenuView',
    components: {
    },
    data () {
        return {
            // 当前菜单
            menu: { 'buttons': [] },
            // 当前选中菜单索引
            selectedMenuIndex: '',
            // 选中菜单级别
            selectedMenuLevel: 0,
            // 选中的菜单按钮
            selectedButton: ''
        }
    },
    created () {
        this.getWxMenu()
    },
    methods: {
        // 获取微信菜单
        getWxMenu () {
            getMenu().then(res => {
                this.menu = res.data
            })
        },
        // 选中主菜单
        selectMenu (i) {
            this.selectedMenuLevel = 1
            this.selectedSubMenuIndex = ''
            this.selectedMenuIndex = i
            this.selectedButton = this.menu.buttons[i]
        },
        // 选中子菜单
        selectedSubMenu (i) {
            this.selectedMenuLevel = 2
            this.selectedSubMenuIndex = i
            this.selectedButton = this.menu.buttons[this.selectedMenuIndex].subButtons[i]
        },
        // 添加菜单
        addMenu (level) {
            if (level === 1 && this.menu.buttons.length < 3) {
                this.menu.buttons.push({
                    'type': 'view',
                    'name': '菜单名称',
                    'subButtons': [],
                    'url': ''
                })
                this.selectMenu(this.menu.buttons.length - 1)
            }
            if (level === 2 && this.menu.buttons[this.selectedMenuIndex].subButtons.length < 5) {
                this.menu.buttons[this.selectedMenuIndex].subButtons.push({
                    'type': 'view',
                    'name': '子菜单名称',
                    'url': ''
                })
                this.selectSubMenu(this.menu.buttons[this.selectedMenuIndex].subButtons.length - 1)
            }
        },
        // 删除菜单
        delMenu () {
            if (this.selectedMenuLevel === 1 && confirm('删除后菜单下设置的内容将被删除')) {
                this.menu.buttons.splice(this.selectedMenuIndex, 1)
                // 删除主菜单后不选中任何菜单
                this.selectedMenuLevel = 0
                this.selectedMenuIndex = ''
                this.selectedSubMenuIndex = ''
                this.selectedButton = ''
            } else if (this.selectedMenuLevel === 2) {
                this.menu.buttons[this.selectedMenuIndex].subButtons.splice(this.selectedSubMenuIndex, 1)
                // 删除后选中主菜单不选子菜单
                this.selectedMenuLevel = 1
                this.selectedSubMenuIndex = ''
                this.selectedButton = this.menu.buttons[this.selectedMenuIndex]
            }
        },
        updateWxMenu () {
            updateMenu(this.menu).then(res => {
                 this.$message.info('添加成功')
            })
        }
    }
}
</script>
<style scoped>

</style>
