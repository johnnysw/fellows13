<template>
  <div class="music-list">

  </div>
</template>

<script>

  import CommonHeader from '../common/CommonHeader'
  import CommonFooter from '../common/CommonFooter'
  import Axios from 'axios'

export default {
  data() {
    return {

    }
  },
  components:{

  },
  mounted(){
//      console.log(this.$route.params.id);
      this.$store.dispatch('changeTitle',['music','rgb(0, 150, 136)','<']);
//    Axios.get('../../../static/musiclist.json').then((res)=>{
//      this.albums = res.data.albums;
//  });
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  @import "../../assets/css/reset.css";
  .music-box{
    margin: 1rem 0;
  }
  .music-box li{
      width: 50%;
      float: left;
  }
  .music-box li img{
    width: 100%;
  }

</style>
