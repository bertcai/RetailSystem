export default {
  index: {
    title: '首页',
    path: '/index/systemIndex',
    child: [
      {
        sub: '系统首页',
        menu: [
          {
            name: '系统首页',
            path: '/index/systemIndex'
          },
          {
            name: '账户设置',
            path: '/index/accountSetting'
          },
          {
            name: '系统信息',
            path: '/index/systemInfo'
          },
          {
            name: '登录日志',
            path: '/index/loginLog'
          }
        ]
      }
    ]
  },
  goods: {
    title: '商品',
    path: '/goods/goodsList',
    child: [
      {
        sub: '商品管理',
        menu: [
          {
            name: '商品列表',
            path: '/goods/goodsList'
          },
          {
            name: '添加商品',
            path: '/goods/addGoods'
          },
          {
            name: '商品回收站',
            path: '/goods/goodsRecycle'
          },
          {
            name: '商品评价',
            path: '/goods/goodsComment'
          }
        ]
      },

      {
        sub: '商品配置',
        menu: [
          {
            name: '商品分类',
            path: '/goods/goodsCategory'
          },
          {
            name: '商品类型',
            path: '/goods/goodsType'
          },
          {
            name: '品牌管理',
            path: '/goods/brandManage'
          },
          {
            name: '图片库管理',
            path: '/goods/imgManage'
          }
        ]
      }
    ]
  },
  order: {
    title: '订单',
    path: '/order/orderList',
    child: [
      {
        sub: '订单管理',
        menu: [
          {
            name: '订单列表',
            path: '/order/orderList'
          },
          {
            name: '确认收货',
            path: '/order/confirm'
          },
          {
            name: '订单设置',
            path: '/order/orderSetting'
          }
        ]
      },
      {
        sub: '退款及退货',
        menu: [
          {
            name: '退货申请处理',
            path: '/order/return'
          },
          {
            name: '退款申请处理',
            path: '/order/refund'
          },
          {
            name: '退货原因设置',
            path: '/order/returnReason'
          }
        ]
      }
    ]
  },
  stock: {
    title: '库存',
    path: '/stock/storage',
    child: [
      {
        sub: '库存记录',
        menu: [
          {
            name: '商品入库',
            path: '/stock/storage'
          },
          {
            name: '商品出库',
            path: '/stock/out'
          }
        ]
      }
    ]
  },
  user: {
    title: '用户',
    path: '/user/userList',
    child: [
      {
        sub: '用户管理',
        menu: [
          {
            name: '用户列表',
            path: '/user/userList'
          }
        ]
      }
    ]
  },
  promotion: {
    title: '促销',
    path: '/promotion/spikeList',
    child: [
      {
        sub: '秒杀专区',
        menu: [
          {
            name: '秒杀活动列表',
            path: '/promotion/spikeList'
          },
          {
            name: '时间段列表',
            path: '/promotion/timeList'
          }
        ]
      }
    ]
  },
  operation: {
    title: '运营',
    path: '/operation/adList',
    child: [
      {
        sub: '广告管理',
        menu: [
          {
            name: '广告列表',
            path: '/operation/adList'
          },
          {
            name: '添加广告',
            path: '/operation/addAd'
          }
        ]
      }
    ]
  },
  statistics: {
    title: '统计',
    path: '/statistics/tranStatistics',
    child: [
      {
        sub: '统计分析',
        menu: [
          {
            name: '交易统计',
            path: '/statistics/tranStatistics'
          },
          {
            name: '商品统计',
            path: '/statistics/goodsStatistics'
          },
          {
            name: '搜索统计',
            path: '/statistics/searchStatistics'
          }
        ]
      }
    ]
  },
  finance: {
    title: '财务',
    path: '/finance/comprehensiveStatistics',
    child: [
      {
        sub: '财务报表',
        menu: [
          {
            name: '综合统计',
            path: '/finance/comprehensiveStatistics'
          },
          {
            name: '销售统计',
            path: '/finance/salesStatistics'
          }
        ]
      },
      {
        sub: '对账管理',
        menu: [
          {
            name: '对账列表',
            path: '/finance/reconciliationList'
          }
        ]
      }
    ]
  },
  settings: {
    title: '设置',
    path: '/settings/logistics',
    child: [
      {
        sub: '基础设置',
        menu: [
          {
            name: '物流追踪',
            path: '/settings/logistics'
          },
          {
            name: '区域设置',
            path: '/settings/areaSetting'
          }
        ]
      }
    ]
  },
  permission: {
    title: '权限',
    path: '/permission/operationLog',
    child: [
      {
        sub: '权限管理',
        menu: [
          {
            name: '操作日志',
            path: '/permission/operationLog'
          }
        ]
      }
    ]
  }
}
