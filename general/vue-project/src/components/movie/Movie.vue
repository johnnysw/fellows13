<template>
  <div id="movie">
    <common-header></common-header>
    <movie-nav></movie-nav>
    <movie-list></movie-list>
    <common-footer></common-footer>
  </div>
</template>

<script>
  import CommonHeader from '@/components/common/Header'
  import CommonFooter from '@/components/common/Footer'
  import MovieNav from '@/components/movie/MovieNav'
  import MovieList from '@/components/movie/MovieList'
export default {
  name: 'header',
  data () {
    return {

    }
  },
  components:{
    CommonHeader,
    CommonFooter,
    MovieNav,
    MovieList
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../../assets/css/reset.css';

</style>
