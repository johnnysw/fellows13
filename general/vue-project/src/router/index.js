import Vue from 'vue'
import Router from 'vue-router'
import Movie from '@/components/movie/Movie'
import MovieTop250 from '@/components/movie/MovieTop250'

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
      component: Movie,
      children: [
        { path: "/movie/top250", component: MovieTop250 }
      ]
    }
  ]
})
