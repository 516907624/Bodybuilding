<template lang="pug">
  .hello
    .chushi(v-show="lmsgs" @click="noNes")
    .jiazai(v-show="msg" @click="playPause")
    video#video(width="750px" @click="playPause" ref="video" controls="controls")
      source(:src="listdatas" type="video/mp4")
    .fujixiang(:style="{'backgroundImage':listdatass}")
</template>

<script>
  export default {
    name: 'HelloWorld',
    mounted(){
      switch (this.urlactive){
        case "comprehensive":
          this.listdatass=this.listdatas.comprehensive.video[this.urlactives].fujixiang;
          this.listdatas=this.listdatas.comprehensive.video[this.urlactives].video;
          break;
        case "part":
          this.listdatass=this.listdatas.comprehensive.video[this.urlactives].fujixiang;
          this.listdatas=this.listdatas.comprehensive.video[this.urlactives].video;
          break;
        case "hiit":
          this.listdatass=this.listdatas.comprehensive.video[this.urlactives].fujixiang;
          this.listdatas=this.listdatas.comprehensive.video[this.urlactives].video;
          break;
        case "yoga":
          this.listdatass=this.listdatas.comprehensive.video[this.urlactives].fujixiang;
          this.listdatas=this.listdatas.comprehensive.video[this.urlactives].video;
          break;
        case "hot":
          this.listdatass=this.listdatas.hot.video[this.urlactives].fujixiang;
          this.listdatas=this.listdatas.hot.video[this.urlactives].video;
          break;
      }
    },
    data () {
      return {
        msg: true,
        lmsgs:true,
        urlactive:this.$route.params.active,
        urlactives:this.$route.params.actives,
        listdatas:this.$config.listdata,
        listdatass:{},
      }
    },
    methods:{
      noNes(){
        this.lmsgs=false;
      },
      playPause(){
        this.lmsgs=false;
        if (this.$refs.video.paused){
          this.msg=false;
          this.$refs.video.play();
        }else{
          this.$refs.video.pause()
          this.msg=true;
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  h1, h2 {
    font-weight: normal;
  }
  .hello{
    position: relative;
    width: 750px;
    height: 412px;
    .chushi{
      width: 750px;
      height: 375px;
      background:url("./../../static/img/img/fuji.png") no-repeat 0 0;
      position: absolute;
    }
    .jiazai{
      width: 100px;
      height: 100px;
      background:url("./../../static/img/icon/no.png") no-repeat 0 0;
      background-size: contain;
      position: absolute;
      top: 50%;
      left: 50%;
      margin-top: -50px;
      margin-left: -50px;
    }
    .fujixiang{
      width: 750px;
      height: 918px;
      margin-top: -4px;
    }
  }
</style>
