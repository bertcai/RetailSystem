<template>
  <div>
    <el-container>
      <el-header height="50px">
        <div class="banner">
          零售
        </div>
        <div class="item" v-for="(item,index) in navItems" :key="index">
          <el-button type="text">{{item}}</el-button>
        </div>
        <div class="action-item">
          <span></span>
          <img src="../assets/nav/u2326.png" alt="退出登录" id="logout" @click="logout">
        </div>
        <div class="action-item">
          <span></span>
          <img src="../assets/nav/u2322.png" id="info">
        </div>
        <div class="action-item">
          <span></span>
          <img src="../assets/nav/u2320.png" id="home" @click="toHome">
        </div>
        <div class="action-item" id="user-info">
          <span></span>
          <img src="../assets/nav/u2318.png" style="border-left: none; height: 30px; margin-right: 10px;">
          admin
        </div>
      </el-header>
      <el-container>
        <div class="side" ref="side">
          <el-aside width="200px">
            <el-menu mode="vertical" background-color="#EAEDF1"
                     text-color="#000"
                     active-text-color="#1ABC9C">
              <el-menu-item-group v-for="(items,index) in menuItems" :key="index">
                <div class="group-title">
                  {{items.name}}
                </div>
                <el-menu-item v-for="(item,index) in items.content" :key="index" :index="item">
                  {{item}}
                </el-menu-item>
              </el-menu-item-group>
            </el-menu>
          </el-aside>
        </div>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'home',
  data () {
    return {
      menuItems: [
        {
          name: '系统首页',
          content: [
            '系统首页',
            '账户设置',
            '系统信息',
            '登录日志'
          ]
        }
      ],
      clientHeight: '',
      navItems: ['首页', '商品', '订单', '库存', '用户', '促销', '运营', '统计', '财务', '设置', '权限']
    }
  },
  methods: {
    logout () {
      this.$router.push('/login')
    },
    toHome () {
      this.$router.push('/home')
    },
    changeFixed (clientHeight) {
      console.log(clientHeight)
      console.log(this.$refs.side.style)
      this.$refs.side.style.height = clientHeight - 50 + 'px'
    }
  },
  mounted () {
    // 获取浏览器可视区域高度
    this.clientHeight = `${document.documentElement.clientHeight}`
    window.onresize = function temp () {
      this.clientHeight = `${document.documentElement.clientHeight}`
    }
  },
  watch: {
    // 如果 `clientHeight` 发生改变，这个函数就会运行
    clientHeight: function () {
      this.changeFixed(this.clientHeight)
    }
  }
}
</script>

<style lang="sass" scoped>
  .el-container
    .el-header
      background-color: rgba(70, 76, 91, 0.898)
      .banner
        line-height: 50px
        float: left
        width: 100px
        height: 50px
        text-align: center
        font-size: 18px
        font-weight: 800
        color: white
      .item
        line-height: 50px
        float: left
        width: 60px
        height: 50px
        text-align: center
        color: white
        font-size: 12px
        .el-button
          font-size: 12px
          color: white
        .el-button:hover
          color: #e4e4e4
      .active
        background-color: rgb(130, 134, 144)
      .action-item
        width: 120px
        height: 50px
        line-height: 50px
        float: right
        text-align: center
        font-size: 12px
        color: white
        img
          display: inline-block
          vertical-align: middle
          border-left: 1px black solid
          padding-left: 20px
          height: 21px
        #logout
          cursor: pointer
        #home
          cursor: pointer
        span
          display: inline-block
          height: 100%
          vertical-align: middle
    .el-container
      .side
        width: 200px
        .el-aside
          height: 100%
          background-color: rgb(234, 237, 241)
          .group-title
            height: 56px
            font-size: 14px
            line-height: 56px
            color: rgb(153, 153, 153)
            background-color: rgb(243, 243, 243)
          .el-menu-item
            font-size: 12px
            height: 40px
            line-height: 40px
          .el-menu-item.is-active
            background-color: #fff !important
          .el-menu-item:before
            content: '• '
          .el-menu-item-group__title
            height: 56px
            font-size: 14px
            line-height: 56px
            color: rgb(153, 153, 153)
            background-color: rgb(243, 243, 243)
</style>
