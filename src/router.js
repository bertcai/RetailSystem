import Vue from 'vue'
import Router from 'vue-router'

const Login = () => import('@/views/Login')
const Home = () => import('@/views/Home')

const SystemIndex = () => import('@/views/index/SystemIndex')
const AccountSetting = () => import('@/views/index/AccountSetting')
const SystemInfo = () => import('@/views/index/SystemInfo')
const LoginLog = () => import('@/views/index/LoginLog')

const GoodsList = () => import('@/views/goods/GoodsList')
const AddGoods = () => import('@/views/goods/AddGoods')
const GoodsRecycle = () => import('@/views/goods/GoodsRecycle')
const GoodsComment = () => import('@/views/goods/GoodsComment')
const GoodsCategory = () => import('@/views/goods/GoodsCategory')
const GoodsType = () => import('@/views/goods/GoodsType')
const BrandManage = () => import('@/views/goods/BrandManage')
const ImgManage = () => import('@/views/goods/ImgManage')

const OrderList = () => import('@/views/order/OrderList')
const Confirm = () => import('@/views/order/Confirm')
const OrderSetting = () => import('@/views/order/OrderSetting')
const Return = () => import('@/views/order/Return')
const Refund = () => import('@/views/order/Refund')
const ReturnReason = () => import('@/views/order/ReturnReason')

const Storage = () => import('@/views/stock/Storage')
const Out = () => import('@/views/stock/Out')

const UserList = () => import('@/views/user/UserList')

const SpikeList = () => import('@/views/promotion/SpikeList')
const TimeList = () => import('@/views/promotion/TimeList')

const AdList = () => import('@/views/operation/AdList')
const AddAd = () => import('@/views/operation/AddAd')

const TranStatistics = () => import('@/views/statistics/TranStatistics')
const GoodsStatistics = () => import('@/views/statistics/GoodsStatistics')
const SearchStatistics = () => import('@/views/statistics/SearchStatistics')

const ComprehensiveStatistics = () => import('@/views/finance/ComprehensiveStatistics')
const SalesStatistics = () => import('@/views/finance/SalesStatistics')
const ReconciliationList = () => import('@/views/finance/ReconciliationList')

const Logistics = () => import('@/views/settings/Logistics')
const AreaSetting = () => import('@/views/settings/AreaSetting')

const OperationLog = () => import('@/views/permission/OperationLog')

Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: {
        name: 'login'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/index',
      name: 'index',
      component: Home,
      redirect: '/index/systemIndex',
      children: [
        {
          path: '/index/systemIndex',
          name: 'systemIndex',
          component: SystemIndex // 系统首页
        },
        {
          path: '/index/accountSetting',
          name: 'accountSetting',
          component: AccountSetting // 系统设置
        },
        {
          path: '/index/systemInfo',
          name: 'systemInfo',
          component: SystemInfo // 系统信息
        },
        {
          path: '/index/loginLog',
          name: 'loginLog',
          component: LoginLog // 登录日志
        },
        {
          path: '/goods/goodsList',
          name: 'goodList',
          component: GoodsList // 商品列表
        },
        {
          path: '/goods/addGoods',
          name: 'addGoods',
          component: AddGoods // 添加商品
        },
        {
          path: '/goods/goodsRecycle',
          name: 'goodsRecycle',
          component: GoodsRecycle // 商品回收站
        },
        {
          path: '/goods/goodsComment',
          name: 'goodsComment',
          component: GoodsComment // 商品评价
        },
        {
          path: '/goods/goodsCategory',
          name: 'goodsCategory',
          component: GoodsCategory // 商品分类
        },
        {
          path: '/goods/goodsType',
          name: 'goodsType',
          component: GoodsType // 商品类型
        },
        {
          path: '/goods/brandManage',
          name: 'brandManage',
          component: BrandManage // 品牌管理
        },
        {
          path: '/goods/imgManage',
          name: 'imgManage',
          component: ImgManage // 图片库管理
        },
        {
          path: '/order/orderList',
          name: 'orderList',
          component: OrderList // 订单列表
        },
        {
          path: '/order/confirm',
          name: 'confirm',
          component: Confirm // 确认收货
        },
        {
          path: '/order/orderSetting',
          name: 'orderSetting',
          component: OrderSetting // 订单设置
        },
        {
          path: '/order/return',
          name: 'return',
          component: Return // 退货申请处理
        },
        {
          path: '/order/refund',
          name: 'refund',
          component: Refund // 退款申请处理
        },
        {
          path: '/order/returnReason',
          name: 'returnReason',
          component: ReturnReason // 退货原因设置
        },
        {
          path: '/stock/storage',
          name: 'storage',
          component: Storage // 商品入库
        },
        {
          path: '/stock/out',
          name: 'out',
          component: Out // 商品出库
        },
        {
          path: '/user/userList',
          name: 'userList',
          component: UserList // 用户列表
        },
        {
          path: '/promotion/spikeList',
          name: 'spikeList',
          component: SpikeList // 秒杀活动列表
        },
        {
          path: '/promotion/timeList',
          name: 'timeList',
          component: TimeList // 时间段列表
        },
        {
          path: '/operation/adList',
          name: 'adList',
          component: AdList // 广告列表
        },
        {
          path: '/operation/addAd',
          name: 'addAd',
          component: AddAd // 添加广告
        },
        {
          path: '/statistics/tranStatistics',
          name: 'tranStatistics',
          component: TranStatistics // 交易统计
        },
        {
          path: '/statistics/goodsStatistics',
          name: 'goodsStatistics',
          component: GoodsStatistics // 商品统计
        },
        {
          path: '/statistics/searchStatistics',
          name: 'searchStatistics',
          component: SearchStatistics // 搜索统计
        },
        {
          path: '/finance/comprehensiveStatistics',
          name: 'comprehensiveStatistics',
          component: ComprehensiveStatistics // 综合统计
        },
        {
          path: '/finance/salesStatistics',
          name: 'salesStatistics',
          component: SalesStatistics // 销售统计
        },
        {
          path: '/finance/reconciliationList',
          name: 'reconciliationList',
          component: ReconciliationList // 对账列表
        },
        {
          path: '/settings/logistics',
          name: 'logistics',
          component: Logistics // 物流追踪
        },
        {
          path: '/settings/areaSetting',
          name: 'areaSetting',
          component: AreaSetting // 区域设置
        },
        {
          path: '/permission/operationLog',
          name: 'operationLog',
          component: OperationLog // 操作日志
        }
      ]
    }
  ]
})
