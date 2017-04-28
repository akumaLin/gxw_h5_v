<template>
  <div>
  <div class="my-prize-one">
    <p class="p-title">
      集爱数字卡片
    </p>
    <span class="rules" @touchstart="showRules=true">查看规则</span>
    <carousel-3d ref="carousel"  :minSwipeDistance="2" :animationSpeed="400" :onSlideChange="onSlideChange" :inverse-scaling="1500"  :height="260" :width="244.4" :space="450" >
      <slide  v-for="(slide, i) in slides"  :index="i" :key="i" style="background-size: 100% 100%" :style="{backgroundImage: 'url(' + slide.img + ')'}">

      </slide>
    </carousel-3d>
    <a class="j_card" @touchstart="getCard">去集卡></a>
  </div>

    <div class="my-price-two">
      <div class="s-card" v-for="(value, key, index) in wordNum" @click="$refs.carousel.goSlide(index);showcolor=index" :class="{'red-border':showcolor===index}" >
        <img :src="value==0?slides[index].img_1:slides[index].img" alt="" width="100%"height="100%">
        <span class="card-badge" v-if="value!=0">x{{value}}</span>
      </div>
    </div>
    <div class="Pop-ups"  v-show="showRules" @touchmove.self.prevent>
      <div class="img" >
        <div class="img_margin">
        <div  class="img_rules" >
          <div class="close_x" @touchstart="showRules=false"></div>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { Carousel3d, Slide } from 'vue-carousel-3d';
export default {
  name: 'myPrizeOne',
  props:[
    "wordNum"
  ],
  data () {
    return {
      showRules:false,
      showcolor:0,
      slides:[
          {img:require("../../assets/images/520.png"),img_1:require("../../assets/images/520_gray.png")},
          {img:require("../../assets/images/13.png"),img_1:require("../../assets/images/13_gray@2x.png")},
          {img:require("../../assets/images/14.png"),img_1:require("../../assets/images/14_gray.png")},
          {img:require("../../assets/images/hec.png"),img_1:require("../../assets/images/hec_gray.png")}
       ]

      }

  },
  components:{
    Carousel3d,
    Slide
  },
  methods:{
    onSlideChange:function(index){
      this.showcolor=index;
      },
    getCard(){
            if(window.O2OHome){
              O2OHome.gotoTabIndex ('1')
            }else {
              window.location.href="http://192.168.1.105/dashboard/dist/cn/active_homepage.html"//去集卡要跳转的绝对路径
            }
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" scoped>
 @import "my-prize-one.scss";
 @import "my-prize-two.scss";

</style>

