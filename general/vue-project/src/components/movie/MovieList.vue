<template>
  <div class="movie-list">
      <div class="movie-img">
        <img src="../../assets/logo.png"/>
      </div>
    <div class="movie-title">
      <span>蜘蛛侠</span>
      <p>犯罪 剧情(1994)(平均9.5分)</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../../assets/css/reset.css';
  .movie-list{
    padding: 0.4rem;
    margin: 0.4rem 0;
  }
.movie-list .movie-img{
  width: 0.8rem;
  height: 0.8rem;
  float: left;
}
  .movie-list .movie-title{
    float: left;
    width: 4.0rem;
    margin-left: 0.6rem;
    border-bottom: 1px #ccc solid;
  }
</style>
