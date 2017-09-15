<template>
  <div class="photo">
    <common-header></common-header>
    <!--<div :style="obj"></div>-->
      <v-touch class="detail" :style="obj"></v-touch>
  </div>
</template>

<script>
  import CommonHeader from '@/components/common/Header'
//  vue-touch@next
export default {
  name: 'header',
  data () {
    return {
        obj:{
            background:'url('+ this.$store.state.photoData[this.$route.params.index].src +') no-repeat center / contain #000',
        }
    }
  },
  mounted(){
    this.$store.dispatch('changeTitle',['phtot','rgb(63, 81, 181)']);
//    console.log(this.$store.state.photoData);
  },
  components:{
    CommonHeader,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.detail{
  position: absolute;
  top:1rem;
  bottom: 0;
  width: 100%;
}
</style>
