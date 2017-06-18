<template>
  <div class="movie">
    <common-header></common-header>
    <movie-nav></movie-nav>
  </div>
</template>

<script>

  import CommonHeader from '../common/CommonHeader'
  import MovieNav from './MovieNav'

export default {
  data() {
    return {
    }
  },
  components:{
    CommonHeader,
    MovieNav
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  @import "../../assets/css/reset.css";


</style>
