import Vue from 'vue'
import Router from 'vue-router'
import CommonHeader from '@/components/common/CommonHeader'
import Movie from '@/components/movie/Movie'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Movie
    }
  ]
})
