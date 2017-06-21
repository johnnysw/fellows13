<template>
  <div class="top-250">
      <div class="movie-list">
        <div class="movie-img">
          <img src="" alt="">
        </div>
        <div class="movie-title">
          <span>aaaa</span>
          <p>aaaa</p>
        </div>
      </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
    }
  }

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  @import "../../assets/css/reset.css";
  .top-250{
    margin-top: 2rem;
  }
  .movie-list{
    padding: 0.4rem
  }
  .movie-list .movie-img{
    width: 0.8rem;
    height: 0.8rem;
    float: left;
  }
  .movie-list .movie-img img{
    width: 100%;
    height: 100%;
  }
  .movie-list .movie-title{
    float: left;
    width: 4.0rem;
    margin-left: 0.6rem;
    border-bottom: 1px #ccc solid;

  }


</style>
