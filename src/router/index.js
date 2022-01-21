// 这里面负责写路由映射，便于管理
// 引入路由模块并使用它
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const router = new VueRouter({
  routes: [{
    path: '/home', component: require('../components/Home.vue')
  },
  {
    path: '*', redirect: '/home'
  }]
})
// 输出router
export default router
