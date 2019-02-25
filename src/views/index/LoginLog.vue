<template>
  <div class="main">
    <title-bar :title="'登陆日志'"></title-bar>
    <div class="card">
      <div class="card-title">
        <p><img src="../../assets/index/icon-6.png">数据列表</p>
      </div>
      <div class="card-content">
        <table>
          <thead>
            <tr>
              <th>时间</th>
              <th>IP</th>
              <th>地区</th>
              <th>浏览器</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row,index) in table" :key="index">
              <td>{{row.operateTime}}</td>
              <td>{{row.ip}}</td>
              <td v-if="row.description.data">
                {{row.description.data.country}}-{{row.description.data.region}}-{{row.description.data.city}}
              </td>
              <td v-else></td>
              <td>{{row.pack}}</td>
            </tr>
          </tbody>
        </table>
        <div class="pagination">
          <el-pagination
            background
            layout="total, prev, pager, next, jumper"
            :total=this.total
            @current-change="next"
          >
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TitleBar from '../common/TitleBar'
export default {
  name: 'LoginLog',
  components: { TitleBar },
  data () {
    return {
      table: [],
      currentPage: 1,
      total: 0,
      pageSize: 10
    }
  },
  created () {
    this.getList(1)
  },
  methods: {
    getList (page) {
      let _this = this
      this.$http.post('/merchant/get_merchant_login_info_list', {
        currentPage: page,
        pageSize: this.pageSize,
        orderBy: 'operate_time desc'
      }, {
        type: 'form'
      }).then((res) => {
        this.tableData = res.list
        this.total = res.totalCount
        for (let i = 0; i < res.list.length; i++) {
          if (res.list[i].description !== '' && res.list[i].description !== '成功') {
            res.list[i].description = eval('(' + res.list[i].description + ')')
          }
        }
        _this.table = res.list
      }, (err) => {
        console.log('err: ' + err)
      })
    },
    next (page) {
      this.getList(page)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../assets/css/common";
  .main{
    background-color: $bgColor;
    padding-bottom: 20px;
    .card{
      margin: 20px auto 0;
      width: 70%;
      min-width: 600px;
      border-top: 1px solid $borderGray;
      background-color: #fff;
      .card-title{
        text-align: left;
        height: 44px;
        font-size: 14px;
        line-height: 44px;
        padding-left: 20px;
        background-color: $bgTitleColor;
        p{
          line-height: 44px;
          img{
            vertical-align: middle;
            width: 44px;
          }
        }
      }
      .card-content{
        table{
          width: 100%;
          border-right: 1px solid $borderGray;
          border-bottom: 1px solid $borderGray;
          border-spacing: 0;
          th{
            border-left: 1px solid $borderGray;
            border-top: 1px solid $borderGray;
            background-color: #f9fafc;
          }
          td{
            border-left: 1px solid $borderGray;
            border-top: 1px solid $borderGray;
          }
          tr{
            height: 40px;
          }
        }
        .pagination{
          background-color: $bgColor;
          border: 1px solid $borderGray;
          border-top: none;
          padding-top: 15px;
          height: 40px;
          .el-pagination{
            margin: 0px auto;
          }
        }
      }
    }
  }
</style>
