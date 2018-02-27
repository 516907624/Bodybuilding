<template lang="pug">
  .box
    transition(name="fade")
      .welcomepage
        .welcome(@click="IndexPage")

</template>

<script>

export default {
  name: 'welcome',
  data () {
    return {
    }
  },
  mounted(){
    this.timeout()
  },
  methods:{
        IndexPage(){
          this.$router.push({ name: 'index' })
      },
    timeout(){
      setTimeout(() => {
        this.IndexPage();
      }, 3000)
    }
    }
}
</script>
<style scoped lang="less">
  @import "./../../static/css/reset.less";
  .fade-enter-active, .fade-leave-active {
    transition: opacity .8s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
  .welcomepage,.box,.indexpage{
    .wh100;
    .welcome{
      .wh100;
      .backgroundimg('./../../static/img/img/welcome.png')
    }
  }

</style>
