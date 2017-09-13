import Vue from 'vue'
import Router from 'vue-router'
import CommonHeader from '@/components/common/Header'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/movie'
    },
    {
      path: '/movie',
      name: 'CommonHeader',
      component: CommonHeader
    }
  ]
})
