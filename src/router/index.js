
const routers = [
    {
        path:'/',
        redirect:'/list'
    },
    {
        path:'/list',
        meta:{
            title:'首页',
            navShow:true
        },
        component:(resolve)=>require(['../components/list/list.vue'],resolve),
    },
    {
       path:'/classify',
       meta:{
           title:'分类',
           navShow:true
       },
       component:(resolve)=>require(['../components/classify/classify.vue'],resolve)
    },
    {
      path:'/find',
      meta:{
          title:'发现',
          navShow:true
      },
      component:(resolve)=>require(['../components/find/find.vue'],resolve)
    },
    {
      path:'/cart',
      meta:{
          title:'购物车',
          navShow:true
      },
      component:(resolve)=>require(['../components/cart/cart.vue'],resolve)
    },
    {
      path:'/my',
      meta:{
          title:'我的',
          navShow:true
      },
      component:(resolve)=>require(['../components/my/my.vue'],resolve)
    },
    {
        path:'/login',
        meta:{
            title:'登录',
            navShow:false
        },
        component:(resolve)=>require(['../components/login/login.vue'],resolve)
      },
      {
          path:'/news',
          meta:{
              title:'消息',
              navShow:false
          },
          component:(resolve)=>require(['../common/news/news.vue'],resolve)
      },
      {
          path:'/personaldata',
          meta:{
              title:'个人资料',
              navShow:false
          },
          component:(resolve)=>require(['../components/personaldata/personaldata.vue'],resolve)
      },
      {
          path:'/register',
          meta:{
              title:'登录',
              navShow:false
          },
          component:(resolve)=>require(['../components/register/register.vue'],resolve)
      },
      {
          path:'/member',
          meta:{
              title:'会员',
              navShow:false
          },
          component:(resolve)=>require(['../common/member/member.vue'],resolve)
      },
      {
          path:'/phone/:id',
          meta:{
              title:"商品详情",
              navShow:false
          },
          component:(resolve)=>require(['../common/phone/phone.vue'],resolve)
      },
      {
          path:'/order',
          meta:{
              title:"我的订单",
              navShow:false
          },
          component:(resolve)=>require(['../common/order/order.vue'],resolve)
      },
      {
          path:'/function',
          meta:{
              title:"功能",
              navShow:false
          },
          component:(resolve)=>require(['../components/function/function.vue'],resolve)
      },
      {
          path:'/goods/:id',
          meta:{
              title:'商品详情',
              navShow:false
          },
          component:(resolve)=>require(['../common/goods/goods.vue'],resolve)
      }
];
export default routers;