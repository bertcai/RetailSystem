<template>
  <div class="main">
    <title-bar :title="nameZh"></title-bar>
    <div class="card">
      <div class="card-title">
        账户设置
      </div>
      <div class="card-content">
        <el-upload
          class="avatar-upload"
          action=""
          :http-request="uploadFile"
          :show-file-list="false"
          accept="image/jpeg, image/png"
        >
          <img v-if="avatar" :src="avatar" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
        <!--<span>上传头像</span>-->
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="150px" class="demo_form" required>
          <el-form-item label="用户名" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="旧密码"  prop="oldPassword">
            <el-input type="password" v-model="ruleForm.oldPassword"></el-input>
          </el-form-item>
          <el-form-item label="新密码" prop="newPassword">
            <el-input type="password" v-model="ruleForm.newPassword"></el-input>
          </el-form-item>
          <el-form-item label="确定密码" prop="twicePassword">
            <el-input type="password" v-model="ruleForm.twicePassword"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="update('ruleForm')">提交</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import TitleBar from '../common/TitleBar'
export default {
  name: 'AccountSetting',
  components: { TitleBar },
  created () {
    this.userInfo = JSON.parse(this.$store.getters.userInfo)
    this.ruleForm.name = this.userInfo.merchantName
    this.ruleForm.merchantLogo = this.userInfo.merchantLogo
    this.avatar = this.userInfo.imgUrl + this.userInfo.merchantLogo
  },
  data () {
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (this.ruleForm.newPassword !== this.ruleForm.twicePassword) {
        callback(new Error('两次输入密码不一样'))
      } else {
        callback()
      }
    }
    return {
      nameZh: '账户设置',
      avatar: '',
      ruleForm: {
        name: '',
        oldPassword: '',
        newPassword: '',
        twicePassword: '',
        merchantLogo: ''
      },
      rules: {
        name: [{
          required: true, message: '请输入用户名', trigger: 'blur'
        }],
        oldPassword: [{
          required: true, message: '请输入旧密码', trigger: 'blur'
        }],
        newPassword: [{
          required: true, message: '请输入新密码', trigger: 'blur'
        }],
        twicePassword: [{
          required: true, trigger: 'blur', validator: validatePass2
        }]
      }
    }
  },
  methods: {
    uploadFile (file) {
      let formData = new FormData()
      formData.append('file', file.file)
      this.$http.post('merchant/upload_file', formData, {
        type: 'form',
        file: 'image'
      }).then((res) => {
        this.ruleForm.merchantLogo = res.image
        console.log(this.userInfo)
        this.avatar = this.userInfo.imgUrl + res.image
      })
    },
    update (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$http.post('/merchant/change_password', this.ruleForm, {
            type: 'form'
          }).then(() => {
            this.userInfo.merchantName = this.ruleForm.name
            this.userInfo.merchantLogo = this.ruleForm.merchantLogo
            this.$message('修改成功')
            this.ruleForm.oldPassword = ''
            this.ruleForm.newPassword = ''
            this.ruleForm.twicePassword = ''
            this.$store.commit('SET_USERINFO', JSON.stringify(this.userInfo))
          }, (err) => {
            this.$message(err.msg)
          })
        } else {
          return false
        }
      })
    },
    handleAvatarSuccess (res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2
      if (!isJPG) {
        this.$message.error('上传头像图片只能是JPG格式')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小必须要与2M')
      }
      return isJPG && isLt2M
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../assets/css/common";
  .main {
    background-color: $bgColor;
    padding-bottom: 20px;
    .card{
      margin: 20px auto 0;
      width: 70%;
      min-width: 600px;
      border: 1px solid $borderGray;
      background-color: #fff;
      .card-title{
        border-bottom: 1px solid $borderGray;
        text-align: left;
        height: 44px;
        font-size: 14px;
        line-height: 44px;
        padding-left: 20px;
        background-color: $bgTitleColor;
      }
      .card-content{
        .avatar-upload{
          margin: 20px auto 0;
          border: 1px solid $borderGray;
          -webkit-border-radius: 50%;
          -moz-border-radius: 50%;
          border-radius: 50%;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          width: 100px;
          height: 100px;
        }
        .avatar-uploader-icon {
          font-size: 28px;
          color: #8c939d;
          width: 100px;
          height: 100px;
          line-height: 100px;
          text-align: center;
        }
        .avatar{
          width: 100px;
          height: 100px;
          display: block;
        }
        span{
          text-align: center;
          color: $primary;
        }
        .demo_form{
          margin-left: -120px;
          .el-form-item{
            width: 400px;
            margin: 26px auto;
          }
        }
      }
    }
  }
</style>
