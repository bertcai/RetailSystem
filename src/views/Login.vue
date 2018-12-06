<template>
  <div class="login">
    <div class="bg"></div>
    <div class="login-panel">
      <el-card class="login-box" :body-style="{ padding: '0px' }">
        <div class="topline"></div>
        <div class="title">后台业务管理系统</div>
        <div class="input-box">
          <el-input placeholder="请输入用户名称">
            <i slot="prefix" class="iconfont el-icon-user"></i>
          </el-input>
        </div>
        <div class="input-box">
          <el-input placeholder="请输入登录密码">
          </el-input>
        </div>
        <div class="submit-btn"></div>
      </el-card>
    </div>
  </div>
</template>
<script>
export default {
  name: 'login'
}
</script>
<style lang="sass" scoped>
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
  background-color: rgba(0,0,0,0)
  height: 420px
  width: 100%
  z-index: 1000
  .login-box
    width: 350px
    height: 100%
    position: relative
    left: 50%
    margin-left: -175px
    .topline
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
      margin: 15px auto
</style>
