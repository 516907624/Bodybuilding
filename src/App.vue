<template lang="pug">
  #app
    router-view
    v-menu(v-show="shows")
</template>

<script>
import mymenu from './components/mymenu'
export default {
  name: 'App',
  data(){
    return{
      shows:false
    }
  },
  mounted(){
  },
  components:{
    'v-menu':mymenu
  },
}
</script>

<style lang="less">
@import "./../static/css/reset.less";
html{
  .wh(750px,1334px);
  border: 1px solid #000;
  margin:0 auto;
}
#app,body{
  .wh100
}
</style>
