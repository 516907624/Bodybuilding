<template lang="pug">
  .box
    router-link(:to="{ name: 'trains'}" active-class="router-link-active").train 健身
    router-link(:to="{ name: 'trainRun'}" active-class="router-link-active").run 跑步
    router-link(:to="{ name: 'trainWalk'}" active-class="router-link-active").walk 步行
    router-link(:to="{ name: 'trainRiding'}" active-class="router-link-active").riding 骑行
</template>

<script>
    export default {
        name: "train_header"
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
    }
    .router-link-active{
      border-bottom: 4px solid #f8571b;
    }
  }
</style>
