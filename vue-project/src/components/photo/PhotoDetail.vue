<template>
  <div class="photo">
    <common-header></common-header>
    <!--<div class="photo-box">-->
      <!--{{$route.params.index}}-->

      <!--<img :src="$store.state.photoList[index].src" alt="">-->
    <!--</div>-->
    <v-touch @tap="back" @swipeleft="next" @swiperight="prev" class="photo-box" :style="bgStyle">
      <!--<img :src="$store.state.photoList[index].src" alt="">-->
    </v-touch>

  </div>
</template>

<script>

  import CommonHeader from '../common/CommonHeader'

export default {
  data() {
    return {
      index:this.$route.params.index,
    }
  },
  components:{
    CommonHeader,
  },
  computed:{
    bgStyle(){
      return {
        background: "url('" + this.$store.state.photoList[this.index].src + "') no-repeat center / contain #000"
      }
    }
  },
  methods:{
    next(){
        this.index++;
    },
    prev(){
        this.index--;
    },
    back(){
        this.$router.push('/photo');
    }
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  @import "../../assets/css/reset.css";
  .photo-box{
    position: absolute;
    top:1rem;
    bottom: 0;
    width: 100%;
  }


</style>
