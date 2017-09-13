<template>
  <div id="header">
    <button>首页</button>
    <h2>
      movie
    </h2>
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
  #header{
    height: 1rem;
    display: flex;
    background: rgb(33, 150, 243);
  }
  #header button{
    width: 1rem;
    height: 1rem;
    color: #fff;
  }
  #header h2{
    flex:1;
    height: 1rem;
    color: #fff;
    text-align: center;
    margin-left: -1rem;
  }
</style>
