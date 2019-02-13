<template>
  <div>
    <el-container>
      <el-header height="50px">
        <div class="banner">
          零售
        </div>
        <div class="item" v-for="(item,index) in nav" :key="index" @click="switchNav(item.path)"
             :class="index === activeNav ? 'active' : ''">
          {{item.title}}
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
        <div class="action-item" id="user-info" v-popover:userInfo>
          <span></span>
          <img src="../assets/nav/u2318.png" style="border-left: none; height: 30px; margin-right: 10px;">
          {{userInfo.merchantName}}
        </div>
        <el-popover placement="bottom" ref="userInfo" trigger="hover" width="360">
          <div class="popover">
            <p class="title">
              <span>
                登录信息
              </span>
              <span class="fr" @click="$router.push('/index/accountSetting')">
                账户设置
              </span>
            </p>
            <p>• 本次登录：{{loginData[0].operateTime}}</p>
            <p>• 登陆地区：XXX(IP: {{loginData[0].ip}})</p>
            <p>• 上次登录：{{loginData[1].operateTime}}</p>
          </div>
        </el-popover>
      </el-header>
      <el-container>
        <el-aside width="200px" :style="{'height':mainHeight + 'px'}">
          <div class="menu">
            <ul class="menu-group" v-for="(items,index) in menu" :key="index">
              <li class="group-title">
                {{items.sub}}
              </li>
              <router-link tag="li" v-for="(child,idx) in items.menu" :key="idx" :to="child.path"
                           active-class="is-active" class="menu-item">
                {{child.name}}
              </router-link>
            </ul>
          </div>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
import nav from '@/js/common/nav.js'
import { mapMutations } from 'vuex'

export default {
  name: 'home',
  data () {
    return {
      nav: nav,
      mainHeight: window.innerHeight - 50,
      loginData: [{}, {}]
    }
  },
  computed: {
    activeNav () {
      return this.$store.getters.activeNav
    },
    menu () {
      return nav[this.$store.getters.activeNav].child
    },
    userInfo () {
      return JSON.parse(this.$store.getters.userInfo)
    }
  },
  methods: {
    logout () {
      this.$router.push('/login')
    },
    toHome () {
      this.$router.push('/index')
      this.setActiveNav('index')
    },
    switchNav (path) {
      const str = path.split('/')[1]
      this.setActiveNav(str)
      this.$router.push(path)
    },
    ...mapMutations({
      setActiveNav: 'SET_ACTIVE_NAV'
    })
  },
  mounted () {
    this.$http.post('merchant/get_merchant_login_info_list', {
      currentPage: 1,
      pageSize: 10,
      orderBy: 'operate_time desc'
    }, { type: 'form' }).then((res) => {
      console.log('home.mounted.res: ', res)
      this.loginData = res.list
    }).catch((error) => {
      console.log('home.mounted.error', error)
    })
  }
}
</script>

<style lang="sass" scoped>
  @import "../assets/css/common"
  .el-container
    overflow: auto
    .el-header
      position: fixed
      z-index: 100
      background-color: rgb(89,94,108)
      min-width: 1300px
      width: 100%
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
        cursor: pointer
      .item:hover
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
      overflow: auto
      margin-top: 50px
      .el-main
        margin: 0 0 0 200px
        padding: 0
      .el-aside
        position: fixed
        border-right: 1px solid rgb(228, 228, 228)
        height: 100%
        background-color: rgb(234, 237, 241)
        .menu
          overflow: auto
          .group-title
            height: 56px
            font-size: 14px
            line-height: 56px
            color: rgb(153, 153, 153)
            background-color: rgb(243, 243, 243)
          .menu-item
            font-size: 12px
            height: 40px
            line-height: 40px
            cursor: pointer
          .menu-item:hover
            color: #1ABC9C
          .is-active
            background-color: #fff
            color: #1ABC9C
          .menu-item:before
            content: '• '
  .el-popover
    .popover
      padding-bottom: 20px
      .title
        padding: 10px
        border-bottom: 1px solid #dddddd
        .fr
          float: right
          color: #1ABC9C
          cursor: pointer
    p:not(:first-child)
      font-size: 14px
      margin-top: 20px
</style>
