<template lang="pug">
    .nav
      router-link(:to="{ name: 'index'}" active-class="router-link-active").plan
      router-link(:to="{ name: 'train'}" active-class="router-link-active").train
      router-link(:to="{ name: 'mycircle'}" active-class="router-link-active").circle
      router-link(:to="{ name: 'personal'}" active-class="router-link-active").personal
</template>

<script>
    export default {
        name: "mymenu"
    }
</script>

<style scoped lang="less">
  .nav{
    width: 750px;
    height: 94px;
    background-color: #fff;
    position: fixed;
    bottom: 0;
    a{
      display: inline-block;
      width: 57px;
      height: 57px;
      margin: 17px 58px 21px;
      background-color: #000;
    }
    a:first-child{
      margin-left: 87px;
    }
    a:last-child{
      margin-right: 87px;
    }
    a.plan{
      background: url("./../../static/img/icon/plan@2x.png") no-repeat center center;
    }
    a.personal{
      background: url("./../../static/img/icon/personal@2x.png") no-repeat center center;
    }
    a.circle{
      background: url("./../../static/img/icon/circle@2x.png") no-repeat center center;
    }
    a.train{
      background: url("../../static/img/icon/train@2x.png") no-repeat center center;
    }
    .router-link-active.plan{
      background: url("./../../static/img/icon/planactive@2x.png") no-repeat center center;
    }
    .router-link-active.train{
      background: url("./../../static/img/icon/trainactive@2x.png") no-repeat center center;
    }
    .router-link-active.circle{
      background: url("./../../static/img/icon/circleactive@2x.png") no-repeat center center;
    }
    .router-link-active.personal{
      background: url("./../../static/img/icon/personalactive@2x.png") no-repeat center center;
    }
  }
</style>
