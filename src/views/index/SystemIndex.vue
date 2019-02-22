<template>
  <div class="main">
    <title-bar v-bind:title="nameZh"></title-bar>
    <div class="content">
      <div class="row">
        <div class="card"><img src="../../assets/index/icon-1.png" alt="">
          <div class="p-box">
            <p>今日订单总数</p>
            <p class="number">{{data.todayOrderNum||0}}</p>
          </div>
        </div>
        <div class="card"><img src="../../assets/index/icon-2.png" alt="">
          <div class="p-box">
            <p>今日销售总额</p>
            <p class="number">{{data.todayOrderMoney||0}}</p>
          </div>
        </div>
        <div class="card">
          <img src="../../assets/index/icon-3.png" alt="">
          <div class="p-box">
            <p>昨日销售总额</p>
            <p class="number">{{data.yesterdayOrderMoney||0}}</p>
          </div>
        </div>
        <div class="card" style="margin: 0"><img src="../../assets/index/icon-4.png" alt="">
          <div class="p-box">
            <p>近7天销售总额</p>
            <p class="number">{{data.nearlySevenDaysOrderMoney||0}}</p>
          </div>
        </div>
      </div>
      <table>
        <caption class="table-title">待处理事务</caption>
        <tr>
          <td @click="linkOrder">待付款订单<span>({{data.dfk}})</span></td>
          <td @click="linkOrder">已完成订单<span>({{data.ywc}})</span></td>
          <td @click="linkOrder">待确认退货订单<span>({{data.dqrth}})</span></td>
        </tr>
        <tr>
          <td @click="linkOrder">待发货订单<span>({{data.dfh}})</span></td>
          <td @click="linkOrder">新缺货登记<span>({{0}})</span></td>
          <td @click="linkOrder">待处理退款详情<span>({{data.dcltk}})</span></td>
        </tr>
        <tr>
          <td @click="linkOrder">已发货订单<span>({{data.dsh}})</span></td>
          <td @click="linkOrder">待处理退货订单<span>({{0}})</span></td>
          <td @click="linkAdvertising">广告位即将到期<span>({{0}})</span></td>
        </tr>
      </table>
      <div class="box">
        <div class="box-title">
          运营快捷入口
        </div>
        <div class="box-content">
          <div class="item mw" v-for="(nape, index) in entryList" :key="index" @click="linkUrl(nape.path)">
            <img :src="nape.icon">
            <p>{{nape.text}}</p>
          </div>
        </div>
      </div>
      <div class="overview">
        <div class="box half-box mr-ten-percent">
          <div class="box-title">
            商品总览
          </div>
          <div class="box-content">
            <div class="item">
              <p class="number red">{{goodsData.notPull}}</p>
              <p>已下架</p>
            </div>
            <div class="item">
              <p class="number red">{{goodsData.put}}</p>
              <p>已上架</p>
            </div>
            <div class="item">
              <p class="number red">{{goodsData.count}}</p>
              <p>库存紧张</p>
            </div>
            <div class="item">
              <p class="number red">{{goodsData.all}}</p>
              <p>全部商品</p>
            </div>
          </div>
        </div>
        <div class="box half-box ">
          <div class="box-title">
            用户总览
          </div>
          <div class="box-content">
            <div class="item">
              <p class="number red">{{userData.todayAddUserCount}}</p>
              <p>今日新增</p>
            </div>
            <div class="item">
              <p class="number red">{{userData.yesterdayAddUserCount}}</p>
              <p>昨日新增</p>
            </div>
            <div class="item">
              <p class="number red">{{userData.monthAddUserCount}}</p>
              <p>本月新增</p>
            </div>
            <div class="item">
              <p class="number red">{{userData.allUserCount}}</p>
              <p>会员总数</p>
            </div>
          </div>
        </div>
      </div>
      <div class="box">
        <div class="box-title">
          订单统计
        </div>
        <div class="box-content">
          <div class="aside">
            <div class="aside-item">
              <p>本月订单总数</p>
              <p class="number default">10000</p>
              <p class="compare"><img src="../../assets/common/u1291.png"><span class="green"> 10%</span> 同比上月</p>
            </div>
            <div class="aside-item">
              <p>本周订单总数</p>
              <p class="number default">1000</p>
              <p class="compare"><img src="../../assets/common/u1284.png"><span class="red"> 10%</span> 同比上周</p>
            </div>
          </div>
          <div class="content">
          </div>
        </div>
      </div>
      <div class="box">
        <div class="box-title">
          销售统计
        </div>
        <div class="box-content">
          <div class="aside">
            <div class="aside-item">
              <p>本月销售总额</p>
              <p class="number default">100000</p>
              <p class="compare"><img src="../../assets/common/u1291.png"><span class="green"> 10%</span> 同比上月</p>
            </div>
            <div class="aside-item">
              <p>本周销售总额</p>
              <p class="number default">50000</p>
              <p class="compare"><img src="../../assets/common/u1284.png"><span class="red"> 10%</span> 同比上周</p>
            </div>
          </div>
          <div class="content">
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
  components: { TitleBar },
  data () {
    return {
      nameZh: '系统首页',
      userData: {},
      goodsData: {},
      data: {
        todayOrderNum: 0,
        todayOrderMoney: 0,
        yesterdayOrderMoney: 0,
        nearlySevenDaysOrderMoney: 0
      },
      entryList: [
        {
          icon: require('@/assets/index/icon-5.png'),
          text: '添加商品',
          path: '/goods/addGoods'
        },
        {
          icon: require('@/assets/index/icon-6.png'),
          text: '订单列表',
          path: '/order/orderList'
        },
        {
          icon: require('@/assets/index/icon-7.png'),
          text: '用户管理',
          path: '/user/userList'
        },
        {
          icon: require('@/assets/index/icon-8.png'),
          text: '交易统计',
          path: '/statistics/tranStatistics'
        },
        {
          icon: require('@/assets/index/icon-10.png'),
          text: '广告管理',
          path: '/operation/adList'
        }
      ]
    }
  },
  methods: {
    linkUrl (path) {
      this.$router.push(path)
    },
    linkOrder () {
      this.$router.push('/order/orderList')
    },
    linkAdvertising () {
      this.$router.push('/operation/adList')
    }
  },
  mounted () {
    this.$http.post('merchant_order/getOrderAllCount', {
      merchantId: JSON.parse(this.$store.getters.userInfo).merchantId
    }).then((res) => {
      this.data = res
      console.log(res)
    })
    this.$http.post('merchant/merchant_index').then((res) => {
      this.userData = res
    })
    this.$http.post('merchantGoods/goodsCountStatistics').then((res) => {
      this.goodsData = res
    })
  }
}
</script>

<style lang="sass" scoped>
  @import "../../assets/css/common"
  .main
    background-color: $bgColor
    padding-bottom: 20px
    .content
      padding: 20px
      margin: 0 auto
      overflow: auto
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
      min-height: 198px
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
        .mw
          max-width: 120px
          cursor: pointer
        .item
          flex: 1
          height: 153px
          display: flex
          flex-direction: column
          justify-content: center
          align-items: center
          border-left: 1px solid white
          border-right: 1px solid white
        .item:first-child
          border-left: none
        .mw:hover
          background-color: $bgColor
          border-left: 1px solid $borderGray
          border-right: 1px solid $borderGray
          p
            color: #1ABC9C
        .mw:first-child:hover
          background-color: $bgColor
          border-left: none
          border-right: 1px solid $borderGray
          p
            color: #1ABC9C
        .aside
          height: 322px
          flex: 1
          border-right: 1px solid $borderGray
          .aside-item
            margin: 20px 0
            p
              font-size: 12px
              color: #989898
              img
                vertical-align: top
            .compare
              color: #CCCCCC
            .default
              color: #666666
        .content
          margin: 0
          padding: 0
          height: 322px
          flex: 7
    .half-box
      width: 48%
      min-width: 508px
    .mr-ten-percent
      margin-right: 4%

  .overview
    display: flex

  .red
    color: red

  .number
    font-size: 28px !important
    font-weight: 400
    line-height: 36px

  .green
    color: #1ABC9C

  .triangle
    width: 0
    border-top: 12px
</style>
