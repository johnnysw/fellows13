<template>
  <div class="nav">
    <ul>
      <li>top250</li>
      <li>正在热映</li>
      <li>即将上映</li>
    </ul>
  </div>
</template>

<script>


export default {
  data() {
    return {
    }
  }

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  @import "../../assets/css/reset.css";
  .nav{
    height: 1rem;
    color: #fff;
    background: rgb(33, 150, 243);
  }
  .nav ul{
    display: flex;
  }
  .nav ul li{
    flex: 1;
    height: 1rem;
    text-align: center;
    line-height: 1rem;
  }

</style>
