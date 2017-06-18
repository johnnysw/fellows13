<template>
  <div class="header">
    <button @click="aa">首页</button>
    <h2>movie</h2>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title:'22222222222222'

    }
  },
  methods:{
      aa:function(){
          console.log(11111);
      }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  @import "../../assets/css/reset.css";
  .header{
    display: flex;
    height: 1rem;
    color: #fff;
    background: rgb(33, 150, 243);
  }
  .header button{
    width: 1rem;
    height: 1rem;
    color: #fff;
  }
  .header h2{
    flex: 1;
    text-align: center;
    text-indent: -1rem;
    line-height: 1rem;
  }

</style>
