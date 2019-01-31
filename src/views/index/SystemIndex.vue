<template>
  <div class="main">
    <title-bar v-bind:title="nameZh"></title-bar>
    <div class="content">
      <div class="row">
        <div class="card"><img src="../../assets/index/icon-1.png" alt="">
          <div class="p-box">
            <p>今日订单总数</p>
            <p class="number">0</p>
          </div>
        </div>
        <div class="card"><img src="../../assets/index/icon-2.png" alt="">
          <div class="p-box">
            <p>今日销售总额</p>
            <p class="number">0</p>
          </div>
        </div>
        <div class="card">
          <img src="../../assets/index/icon-3.png" alt="">
          <div class="p-box">
            <p>昨日销售总额</p>
            <p class="number">0</p>
          </div>
        </div>
        <div class="card" style="margin: 0"><img src="../../assets/index/icon-4.png" alt="">
          <div class="p-box">
            <p>近7天销售总额</p>
            <p class="number">0</p>
          </div>
        </div>
      </div>
      <table>
        <caption class="table-title">待处理事务</caption>
        <tr>
          <td>代付款订单<span>({{0}})</span></td>
          <td>已完成订单<span>({{0}})</span></td>
          <td>待确认退货订单<span>({{0}})</span></td>
        </tr>
        <tr>
          <td>待发货订单<span>({{0}})</span></td>
          <td>新缺货登记<span>({{0}})</span></td>
          <td>待处理退款详情<span>({{0}})</span></td>
        </tr>
        <tr>
          <td>已发货订单<span>({{0}})</span></td>
          <td>待处理退货订单<span>({{0}})</span></td>
          <td>广告位即将到期<span>({{0}})</span></td>
        </tr>
      </table>
      <div class="box">
        <div class="box-title">
          运营快捷入口
        </div>
        <div class="box-content">
          <div class="item">
            <img src="../../assets/index/icon-5.png">
            <p>添加商品</p>
          </div>
          <div class="item">
            <img src="../../assets/index/icon-6.png">
            <p>订单列表</p>
          </div>
          <div class="item">
            <img src="../../assets/index/icon-7.png">
            <p>用户管理</p>
          </div>
          <div class="item">
            <img src="../../assets/index/icon-8.png">
            <p>交易统计</p>
          </div>
          <div class="item">
            <img src="../../assets/index/icon-9.png">
            <p>广告管理</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TitleBar from '../common/TitleBar'

export default {
  name: 'SystemIndex',
  data () {
    return {
      nameZh: '系统首页'
    }
  },
  components: { TitleBar }
}
</script>

<style lang="sass" scoped>
  @import "../../assets/css/common"
  .main
    background-color: $bgColor
    .content
      padding-top: 20px
      width: 80%
      margin: 0 auto
    .row
      display: flex
      height: 100px
      .card
        background-color: white
        flex: 1
        min-width: 248px
        border: 1px solid $borderGray
        margin-right: 20px
        position: relative
        img
          position: absolute
          left: 0
          top: 50%
          transform: translateY(-50%)
          -webkit-transform: translateY(-50%)
        .p-box
          position: absolute
          top: 50%
          transform: translateY(-50%)
          -webkit-transform: translateY(-50%)
          margin-left: 84px
          p
            text-align: left
            font-size: 16px
            color: #999999
          .number
            margin-top: 2px
            color: black
            font-size: 20px
    table
      width: 100%
      min-width: 1060px
      background-color: white
      margin-top: 20px
      height: 198px
      border: 1px solid $borderGray
      padding: 10px
      .table-title
        text-align: left
        height: 43px
        border: 1px solid $borderGray
        border-bottom: none
        line-height: 43px
        font-size: 14px
        color: black
        font-weight: bold
        background-color: $bgTitleColor
        padding-left: 20px
      tr
        td
          cursor: pointer
          border-bottom: 1px solid rgb(242, 242, 242)
          text-align: left
          padding: 10px
        td:hover
          text-decoration: underline
        span
          float: right
          color: red
    .box
      width: 100%
      min-width: 1060px
      background-color: white
      margin-top: 20px
      height: 198px
      border: 1px solid $borderGray
      .box-title
        text-align: left
        height: 44px
        border-bottom: 1px solid $borderGray
        line-height: 44px
        font-size: 14px
        color: black
        font-weight: bold
        background-color: $bgTitleColor
        padding-left: 20px
      .box-content
        display: flex
        .item
          flex: 1
          height: 153px
          max-width: 120px
          display: flex
          flex-direction: column
          justify-content: center
          align-items: center
          cursor: pointer
          border-left: 1px solid white
          border-right: 1px solid white
        .item:first-child
          border-left: none
        .item:hover
          background-color: $bgColor
          border-left: 1px solid $borderGray
          border-right: 1px solid $borderGray
          p
            color: #1ABC9C
        .item:first-child:hover
          background-color: $bgColor
          border-left: none
          border-right: 1px solid $borderGray
          p
            color: #1ABC9C
</style>
