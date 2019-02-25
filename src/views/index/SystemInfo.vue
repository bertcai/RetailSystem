<template>
  <div class="main">
    <title-bar :title="'系统信息'"></title-bar>
    <div class="card">
      <div class="card-title">
        系统信息
      </div>
      <div class="card-content">
        <table>
          <tbody>
          <tr>
            <td>服务器操作系统:</td>
            <td>Linux(114.55.34.251)</td>
            <td>Web 服务器:</td>
            <td>nginx/1.10.2</td>
          </tr>
          <tr>
            <td>PHP版本：</td>
            <td>5.6.30</td>
            <td>MySQL 版本:</td>
            <td>5.5.56</td>
          </tr>
          <tr>
            <td>安全模式:</td>
            <td>否</td>
            <td>安全模式GID:</td>
            <td>否</td>
          </tr>
          <tr>
            <td>Socket 支持:</td>
            <td>是</td>
            <td>时区设置:</td>
            <td>Asia/Shanghai</td>
          </tr>
          <tr>
            <td>GD 版本:</td>
            <td>GD2 ( JPEG GIF PNG)</td>
            <td>Zlib 支持:</td>
            <td>是</td>
          </tr>
          <tr>
            <td>IP 库版本:</td>
            <td>20071024</td>
            <td>文件上传的最大大小:</td>
            <td>40M</td>
          </tr>
          <tr>
            <td>程序版本:</td>
            <td>v2.2.2 RELEASE 20170629</td>
            <td>安装日期:</td>
            <td>2017-05-02</td>
          </tr>
          <tr>
            <td>编码:</td>
            <td>UTF-8</td>
            <td></td>
            <td></td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import TitleBar from '../common/TitleBar'
export default {
  name: 'SystemInfo',
  components: { TitleBar }
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
        table{
          width: 90%;
          margin: 50px auto 60px;
          border-right: 1px solid $borderGray;
          border-bottom: 1px solid $borderGray;
          border-spacing: 0;
        }
        tr{
          height: 60px;
          td{
            border-left: 1px solid $borderGray;
            border-top: 1px solid $borderGray;
          }
          td:nth-child(odd){
            background-color: #f9fafc;
          }
        }
      }
    }
  }
</style>
