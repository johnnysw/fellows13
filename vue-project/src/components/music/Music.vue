<template>
  <div class="music">
    <common-header></common-header>

    <common-footer></common-footer>
  </div>
</template>

<script>

  import CommonHeader from '../common/CommonHeader'
  import CommonFooter from '../common/CommonFooter'

export default {
  data() {
    return {

    }
  },
  components:{
    CommonHeader,
    CommonFooter,
  },
  mounted(){
      this.$store.dispatch('changeTitle',['music','rgb(0, 150, 136)','<']);
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  @import "../../assets/css/reset.css";


</style>
