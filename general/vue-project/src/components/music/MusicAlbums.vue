<template>
      <ul id="music_albums">
          <li v-for="alb in list">
            <img :src="alb.bg">
          </li>
      </ul>
</template>

<script>
  import CommonHeader from '@/components/common/Header'
  import CommonFooter from '@/components/common/Footer'
  import Axios from 'axios'
export default {
  name: 'header',
  data () {
    return {
      list:[]
    }
  },
  mounted(){
    this.$store.dispatch('changeTitle',['music','rgb(0, 150, 136)']);
    Axios.get('/static/musiclist.json').then((res)=>{
      this.list = res.data.albums;
    });

  },
  components:{
    CommonHeader,
    CommonFooter,

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /*@import '../../assets/css/reset.css';*/
#music_albums{
  margin-top: 1rem;
}
  #music_albums li{
    float: left;
    width: 50%;
    height: 33.33%;
  }

  #music_albums li img{
    width: 100%;
    height: 100%;
  }



</style>
