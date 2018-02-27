<template lang="pug">
  .box
    .top
      .search
        form#form( name="sea")
          input(type='text' placeholder="搜索教程~" name='seas')
          a.sea(href='#')
      .data
        .data-left
          <!--BMR(男)=(13.7×体重(公斤))+(5.0×身高(厘米))-(6.8×年龄)+66 BMR(女)=(9.6×体重(公斤))+(1.8×身高(厘米))-(4.7×年龄)+655-->
          .data-rightMI 代谢指数 1800kcal
        .data-center
          p 总运动
          h3 128 #[span min]
          p 共40天
        .data-right
          <!--体脂% = (1.20 × BMI) + (0.23 × 年龄) − (10.8 × 性别) − 5.4-->
          .data-rightBMI 体脂率 21%
            <!--体重指数BMI = 体重（公斤） 除 身高（米）的平方 kg/m2-->
          .data-rightBMR 健康指数 70分
    .content
      h3 热门训练
      ul
        li(v-for="(banner,index) in [1,2,3,4]" )
          router-link(:to="{ name: 'trainvideo',params: { active:hot ,actives:index }}" v-if="index %2 == 0" :style="{'backgroundImage':imgdata[index].shouye}").bannerOdd
            .Mask
            h3 {{imgdata[index].h3text}}
            p
              span {{imgdata[index].timek}}
              span {{imgdata[index].people}}
          router-link(:to="{  name: 'trainvideo',params: { active:hot ,actives:index }}" v-else :style="{'backgroundImage':imgdata[index].shouye}").bannerOdd.bannerEven
            .Mask
            h3 {{imgdata[index].h3text}}
            p
              span {{imgdata[index].timek}}
              span {{imgdata[index].people}}
</template>

<script>

    export default {
        name: "index",
      beforeRouteEnter (to, from, next) {
        next(vm => {
          vm.$parent.shows=true
        })
      },
      beforeRouteLeave (to, from , next) {
        this.$parent.shows=false
        next(

        )
      },
      data(){
        return{
          imgdata: this.$config.Banner,
          hot:'hot'
        }
      }
    }
</script>

<style scoped lang="less">
@import "./../../static/css/reset.less";
.box{
  .wh100;
  position: relative;
  .top{
    width: 750px;
    height: 448px;
    background: url("./../../static/img/img/indextop.png") no-repeat center center;
    background-size: 100%;
    position: relative;
    .search{
      position: absolute;
      top: 54px;
      left: 54px;
      width: 641px;
      height: 80px;
      border: 1px solid rgba(255,255,255,0.4);
      background-color: rgba(0,0,0,0.4);
      input{
        width: 601px;
        height: 60px;
        padding: 10px 20px;
        background: none;
        font-size: 24px;
        color: #fff;
      }
      input:focus{
        border-color: #fff;
        outline: 0;
        box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(255,255,255,.6);
      }
      a.sea{
        display: inline-block;
        width:40px ;
        height: 40px;
        background: url("./../../static/img/icon/sea.png");
        position: absolute;
        top: 20px;
        right: 34px;
      }
    }
    .data{
      position: absolute;
      bottom: 0;
      width: 750px;
      height: 278px;
      color: #fff;
      .data-left{
        width: 223px;
        height: 100%;
        position: absolute;
        .data-rightMI{
          width: 200px;
          height: 32px;
          color: #fff;
          background: rgba(248,87,27,0.3) no-repeat right 0;
          border-radius: 0 16px 16px 0;
          position: absolute;
          bottom: 32px;
          line-height: 32px;
          text-align: right;
          padding-right: 20px;
        }
      }
      .data-center{
        width: 268px;
        margin: 0 auto;
        text-align: center;
        padding-top: 54px;
        font-size: 24px;
        p:last-child{
          font-size: 30px;
        }
        h3{
          margin: 25px 0;
          font-size: 80px;
          padding: 0;
          position: relative;
          span{
            font-size: 24px;
            position: absolute;
            right: 4px;
            bottom: 3px;
          }
        }
      }
      .data-right{
        width: 223px;
        height: 86%;
        position: absolute;
        right: 0;
        bottom: 0;
        .data-rightBMI,.data-rightBMR{
          width: 141px;
          height: 32px;
          color: #fff;
          background: rgba(248,87,27,0.3) no-repeat right 0;
          border-radius: 16px 0 0 16px;
          position: absolute;
          top: 0;
          right: 0;
          line-height: 32px;
          text-align: left;
          padding-left: 20px;
        }
        .data-rightBMR{
          top: 52px;
          width: 165px;
        }
      }
    }
  }
  .content{
    margin-top: 20px;
    background-color: #fff;
    h3{
      padding: 23px;
      padding-bottom: 3px;
      font-size: 30px;
      font-weight: 700;
    }
    ul li{
      margin-top: 20px;
      .bannerOdd{
        display: inline-block;
        width: 100%;
        height: 198px;
        position: relative;
        color: #fff;
        font-size: 20px;
        .Mask{
          .wh100;
          background-color: rgba(233,233,233,0.1);
        }
        h3{
          position: absolute;
          top: 40px;
          right: 43px;
        }
        p{
          position: absolute;
          bottom: 32px;
          right: 40px;
          width: 340px;
          span{
            float: left;
          }
          span:last-child{
            float: right;
          }
        }
      }
      .bannerEven{
        h3 {
          position: absolute;
          top: 40px;
          left: 43px;
        }
        p{
          position: absolute;
          bottom: 32px;
          left: 40px;
          width: 340px;
        }
      }
    }
  }
}
</style>
