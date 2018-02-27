<template lang="pug">
    .boxcirclenearby
      .userdata(v-for=" xun in [0,1]")
        .top
          .left
            .headportrait
              img( src="./../../static/img/img/dog1.jpg" )
            .username 斑大人
            .usertime 10min前
          .follow 关注
        .content
          img( src="./../../static/img/img/bannertrains.png" )
          h2.text 我是奇迹
          .usertraindata
            p.usertraindatatime 完成户外跑步8.0km &nbsp; &nbsp; &nbsp; 用时50min
            p.usertraindatacol 消耗800kcal
        .bottom
          .fabulous(@click="fabulousnumbers")
            img(src="./../../static/img/icon/zhan.png" v-if="!red")
            img(src="./../../static/img/icon/zhanactive.png" v-else)
            span(v-show="fabulousnumbershow") {{fabulousnumbersd}}
          .comment(@click="commentshow")
            img(src="./../../static/img/icon/pin.png")
            span(v-show="commentnumbershow") {{commentnumber}}
        .commentshow(v-show="commentshows")
          ul
            li
              img(src="./../../static/img/img/dog2.jpg")
              span 大叔范：
              span 今天天气真好！！！
          form
            input(type="text" v-model="commenttext.text")
            button(type="button") 评论
</template>

<script>
    export default {
        name: "circlenearby",
      data(){
          return{
            commentshows:false,
            fabulousnumber:5,   //获取点赞初始值
            commentnumber:3,   //获取点赞初始值
            fa:0,
            red:false,
            fabulousnumbersd:5, //获取点赞初始值
            fabulousnumbershow:false,
            commentnumbershow:false,
            commenttext:{
              text:"",
            }
          }
      },
    mounted(){
          if(this.fabulousnumber>0){
            this.fabulousnumbershow=true
          }
          if(this.commentnumber>0){
            this.commentnumbershow=true
          }
    },
      methods:{
        fabulousnumbers(){
          if(this.fa%2==0){
            this.red=true
            this.fabulousnumbersd=this.fabulousnumber+1
            this.fabulousnumbershow=true
          }else{
            this.fabulousnumbersd=this.fabulousnumbersd-1
            this.red=false
            if(this.fabulousnumber>0){
              this.fabulousnumbershow=true
            }else{
              this.fabulousnumbershow=false
            }
          }
          this.fa +=1
        },
        commentshow(){
          this.commentshows=!this.commentshows
        }
      }
    }
</script>

<style scoped lang="less">
  .boxcirclenearby{
    margin-top: 23px;
    .userdata{
      background-color: #fff;
      width: 750px;
      .top{
        overflow: hidden;
        .left{
          width: 60%;
          font-size: 24px;
          line-height: 36px;
          overflow: hidden;
          float: left;
          .headportrait{
            float: left;
            width: 100px;
            height: 100px;
            padding: 25px;
            img{
              width: 100px;
              height: 100px;
            }
          }
          .username{
            padding-top: 25px;
          }
        }
        .follow{
          width: 56px;
          height: 28px;
          line-height: 28px;
          text-align: center;
          background-color:#3ab82c;
          float: right;
          margin-top: 25px;
          margin-right: 25px;
          font-size: 14px;
        }
      }
      .content{
        padding-bottom: 25px;
        img{
          margin-bottom: 25px;
        }
        .text{
          font-size: 40px;
          margin-left: 25px;
        }
        .usertraindata{
          width: 680px;
          margin: 25px;
          background-color: #e5e5e5;
          line-height: 26px;
          font-size: 18px;
          padding: 10px;
          p{
            line-height: 40px;
            font-size: 18px;
          }
        }
      }
      .bottom{
        width: 700px;
        overflow: hidden;
        padding: 25px;
        .fabulous{
          float: right;
          img{
            display: inline-block;
            width: 25px;
            height: 25px;
          }
        }
        .comment{
          float: right;
          img{
            display: inline-block;
            width: 25px;
            height: 25px;
          }
        }
      }
      .commentshow{
        padding: 25px;
        ul{
          li{
            img{
              display: inline-block;
              width: 50px;
              height: 50px;
              vertical-align: middle;
              margin-right: 15px;
            }
          }

        }
        input{
          border: 1px solid #333;
          width: 598px;
          margin-top: 25px;
          margin-right: 10px;
        }
      }
    }
  }
</style>
