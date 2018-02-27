<template lang="pug">
  .boxtrainlist
    .header {{listtitle}}
    ul
      li(v-for="( listdatavideos , index ) in listdatavideo" :style="{'backgroundImage':listdatavideos.url}")
        router-link(:to="{ name:'trainvideo',params: { active: $route.params.active ,actives:index}}" )
</template>

<script>
    export default {
        name: "trainlist",
      data(){
          return{
            listtitle:this.$route.params.active,
            listdatas:this.$config.listdata,
            listdatavideo:{}
          }
      },
      mounted(){
          switch (this.listtitle){
            case 'comprehensive':this.listdatavideo=this.listdatas.comprehensive.video;this.listtitle="综合训练";break;
            case 'part':this.listdatavideo=this.listdatas.part.video;this.listtitle="部位特训";break;
            case 'hiit':this.listdatavideo=this.listdatas.hiit.video;this.listtitle="全力减脂";break;
            case 'yoga':this.listdatavideo=this.listdatas.yoga.video;this.listtitle="瑜伽舞蹈";break;
          }
      }
    }
</script>

<style scoped lang="less">
  .boxtrainlist{
    .header{
      width: 750px;
      height: 98px;
      line-height: 98px;
      text-align: center;
      font-size: 40px;
      background-color: #f8571b;
    }
    ul li{
      display: inline-block;
      width: 750px;
      margin: 25px 0;
      background:no-repeat ;
      height: 270px;
      a{
        display: inline-block;
        width: 100%;
        height: 100%;
      }
    }
  }
</style>
