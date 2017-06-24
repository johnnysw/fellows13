<template>
  <div class="header" :style="{background:$store.state.bgColor}">
    <slot>
      <button @click="aa">{{$store.state.nav}}</button>
    </slot>
    <h2>{{$store.state.title}}</h2>
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
          history.go(-1);
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
  .header{
    position: fixed;
    top: 0;
    width: 100%;
  }

</style>
