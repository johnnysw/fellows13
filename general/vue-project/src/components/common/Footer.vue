<template>
  <ul id="footer">
    <li>电影</li>
    <li>音乐</li>
    <li>书籍</li>
    <li>图片</li>
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
  #footer{
    height: 1rem;
    display: flex;
    background: rgb(33, 150, 243);
    position: fixed;
    bottom: 0;
    width: 100%;
  }
  #footer li{
    flex: 1;
    color: #ccc;
    text-align: center;
    line-height: 1rem;
  }

</style>
