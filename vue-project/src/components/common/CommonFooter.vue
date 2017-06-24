<template>
  <div class="footer" :style="{background:$store.state.bgColor}">
    <ul>
      <li @click="changeTitle('movie','rgb(33, 150, 243)')"><router-link to="/movie">电影</router-link></li>
      <li @click="changeTitle('music','rgb(0, 150, 136)')"><router-link to="/music">音乐</router-link></li>
      <li @click="changeTitle('book','rgb(121, 85, 72)')"><router-link to="/book">书籍</router-link></li>
      <li @click="changeTitle('photo','rgb(63, 81, 181)')"><router-link to="/photo">图片</router-link></li>
    </ul>
  </div>
</template>

<script>

export default {
  data() {
    return {

    }
  },
  methods:{
    changeTitle(title,color){
      this.$store.dispatch('changeTitle',title);
      this.$store.dispatch('changeBgColor',color)
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  @import "../../assets/css/reset.css";
  .footer{
    height: 1rem;
    color: #fff;
  }
  .footer ul{
    display: flex;
  }
  .footer ul li{
    flex: 1;
    height: 1rem;
    text-align: center;
    line-height: 1rem;
  }
  .footer{
    position: fixed;
    bottom: 0;
    width: 100%;
  }
  .footer a{
    color: #ccc;
    outline: none;
  }
  .footer a.router-link-active{
    color: #fff;
  }
</style>
