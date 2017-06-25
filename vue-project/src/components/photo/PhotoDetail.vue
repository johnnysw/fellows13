<template>
  <div class="photo">
    <common-header></common-header>
    <div class="photo-box">
      {{$route.params.index}}
    </div>

  </div>
</template>

<script>

  import CommonHeader from '../common/CommonHeader'

export default {
  data() {
    return {
      photoList:[]
    }
  },
  components:{
    CommonHeader,
  },
  mounted(){
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  @import "../../assets/css/reset.css";
  .photo-box{
    margin:1rem 0;
  }


</style>
