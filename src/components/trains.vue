<template lang="pug">
    .box
      .banner
        .lebel 课程
        .text
          h3 哑铃全身循环
          p 课时·24&nbsp; 35分钟/次 难度 K3
      ul
        li(v-for="(banner,index) in [1,2,3,4]" )
          router-link(:to="{ name: 'trainlist',params: { active: trainsimgdata[index].name }}"  :style="{'backgroundImage':trainsimgdata[index].url}" v-if='index%2==0' style="marginRight:23px")
          router-link(:to="{ name:'trainlist',params: { active: trainsimgdata[index].name }}"  :style="{'backgroundImage':trainsimgdata[index].url}" v-else)

</template>

<script>
    export default {
        name: "trains",
      data(){
          return {
            trainsimgdata: this.$config.TrainsImgData,
          }
      },
      mounted(){
        console.log(this.$config.TrainsImgData)
      }
    }
</script>

<style scoped lang="less">
  .box{
    width: 100%;
    .banner{
      width: 100%;
      height: 300px;
      background: url("./../../static/img/img/bannertrains.png");
      color: #fff;
      position: relative;
      .lebel{
        width: 70px;
        height: 32px;
        background-color: rgba(248,87,27,0.6);
        border-radius: 0 16px 16px 0;
        position: absolute;
        top: 20px;
        padding-right: 30px;
        text-align: right;
        line-height: 32px;
        font-size: 24px;
      }
      .text{
        position: absolute;
        top: 84px;
        left: 132px;
        h3{
          font-size: 38px;
          padding-bottom: 42px;
        }
        p{
          font-size: 20px;
          line-height: 40px;
          width: 94px;
        }
      }
    }
    ul{
      padding:23px;
      li{
        float: left;
        margin-bottom: 23px;
        a{
          display: inline-block;
          width:340px ;
          height: 445px;
        }
      }
    }
  }
</style>
