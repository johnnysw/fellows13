import Vue from 'vue'
import Router from 'vue-router'
import Movie from '@/components/movie/Movie'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/movie'
    },
    {
      path: '/movie',
      name: 'Movie',
      component: Movie
    }
  ]
})
