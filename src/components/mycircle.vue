<template lang="pug">
  .mycircle
    .box
      router-link(:to="{ name: 'circlehot'}" active-class="router-link-active").hot 热门
      router-link(:to="{ name: 'circlenearby'}" active-class="router-link-active").nearby 附近
      router-link(:to="{ name: 'circlefollow'}" active-class="router-link-active").follow 关注
    router-view
</template>

<script>
    export default {
        name: "mycircle",
      mounted(){
        this.$router.push({ name: 'circlenearby' })
      },
      beforeRouteEnter (to, from, next) {
        next(vm => {
          vm.$parent.shows=true
        })
      },
      beforeRouteLeave (to, from , next) {
        this.$parent.shows=false
        next()
      }
    }
</script>

<style scoped lang="less">
  .box{
    width: 700px;
    height: 62px;
    padding: 26px 25px 0 25px;
    border-bottom: 1px solid #f8571b;
    font-size: 38px;
    a{
      display: inline-block;
      width: 175px;
      height: 58px;
      text-align: center;
      border: none;
      margin: 0 29px;
    }
    .router-link-active{
      border-bottom: 4px solid #f8571b;
    }
  }

</style>
