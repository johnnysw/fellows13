<template>
  <ul id="nav">
    <li>top250</li>
    <li>正在热映</li>
    <li>即将上映</li>
  </ul>
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
  #nav{
    height: 1rem;
    display: flex;
    background: rgb(33, 150, 243);
  }
  #nav li{
    flex: 1;
    color: #ccc;
    text-align: center;
    line-height: 1rem;
  }
</style>
