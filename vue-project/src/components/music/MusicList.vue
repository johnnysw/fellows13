<template>
  <div class="music-list">
    <a-player narrow="false" autoplay="true" showlrc="3" theme="#e6d0b2"
              listmaxheight="513px" mode="random">

    </a-player>
  </div>
</template>

<script>
  //https://www.npmjs.com/package/aplayer
  import Axios from 'axios'
  import APlayer from 'aplayer'

export default {
  data() {
    return {
      musicData:[],
      musicList:[]
    }
  },
  components:{
    APlayer
  },
  mounted(){
//      console.log(this.$route.params.id);
    this.$store.dispatch('changeTitle',['music','rgb(0, 150, 136)','<']);
    Axios.get('static/music-data.json').then((res)=>{
      this.musicData = res.data.musicData;

      for(var i=0;i<this.musicData.length;i++){
        var obj = {};
        obj.title = this.musicData[i].title;
        obj.author = this.musicData[i].author;
        obj.url = this.musicData[i].src;
        obj.pic = this.musicData[i].musicImgSrc;
        obj.lrc = this.musicData[i].lrc;
        this.musicList.push(obj);
      }


  });
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
