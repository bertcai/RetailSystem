<template>
  <div class="login">
    <div class="bg"></div>
    <div class="login-panel">
      <el-card :body-style="{ padding: '0px' }" class="login-box">
        <div class="top-line"></div>
        <div class="title">后台业务管理系统</div>
        <div class="input-box">
          <el-input placeholder="请输入用户名称" prefix-icon="el-icon-third-user" v-model="username"></el-input>
        </div>
        <div class="input-box">
          <el-input
            placeholder="请输入登录密码"
            prefix-icon="el-icon-third-lock"
            type="password"
            v-model="password"
          ></el-input>
        </div>
        <div class="info">
          <transition name="el-fade-in">
            <div class="info-error" v-show="error">
              <i class="el-icon-info"></i> {{errInfo}}
            </div>
          </transition>
        </div>
        <div>
          <el-button @click="checkLogin" class="submit-btn" type="primary">登录</el-button>
        </div>
      </el-card>
    </div>
  </div>
</template>
<script>
export default {
  name: 'login',
  data () {
    return {
      username: '13932493200',
      password: '000000',
      error: false,
      errInfo: ''
    }
  },
  methods: {
    checkLogin () {
      if (this.username === '') {
        this.error = true
        this.errInfo = '请填写用户名称'
        return
      }
      if (this.password === '') {
        this.error = true
        this.errInfo = '请填写用户密码'
        return
      }
      this.$http.post('merchant/login', { loginName: this.username, loginPassword: this.password }, { type: 'form' }
      ).then((res) => {
        console.log('login/res: ', res)
        this.$store.commit('SET_USER_INFO', JSON.stringify(res))
        this.$message({
          message: '登录成功',
          type: 'success'
        })
        this.$router.push('/index')
        // setTimeout(() => {
        //   this.$router.push('/index')
        // }, 500)
      }).catch((error) => {
        this.error = true
        console.log('login/error: ', error)
        this.errInfo = error.msg
      })
    }
  }
}
</script>
<style lang="sass" scoped>
  .login
    .bg
      position: fixed
      top: 50%
      margin-top: -110px
      background-color: #1ABC9C
      height: 220px
      width: 100%
    .login-panel
      position: fixed
      top: 50%
      margin-top: -210px
      background-color: rgba(0, 0, 0, 0)
      height: 420px
      width: 100%
      z-index: 1000
      .login-box
        width: 350px
        height: 100%
        position: relative
        left: 50%
        margin-left: -175px
        .top-line
          background-color: #1ABC9C
          height: 10px
          width: 100%
        .title
          width: 100%
          height: 47px
          line-height: 47px
          font-size: 24px
          font-weight: 700
          font-family: '微软雅黑 Bold', '微软雅黑 Regular', '微软雅黑'
          font-style: normal
          margin-top: 88px
          color: #1ABC9C
        .input-box
          width: 300px
          height: 50px
          margin: 15px auto 0
        .submit-btn
          width: 300px
          height: 50px
          margin: 0 auto
          font-size: 18px
          font-weight: 400
        .info .info-error
          width: 260px
          height: 40px
          line-height: 40px
          font-size: 12px
          color: #fff
          background-color: rgba(0, 0, 0, 0.498039215686275)
          margin: 0 auto 15px
          text-align: left
          border-radius: 5px
          padding: 0 20px
</style>
