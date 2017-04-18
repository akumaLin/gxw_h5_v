<template>
  <div>
  <div class="my-prize-one">
    <p class="p-title">
      集爱数字卡片
    </p>
    <span class="rules">查看规则</span>
    <carousel-3d ref="carousel" :inverse-scaling="1500"  :height="260" :width="244.4" :space="450" >
      <slide  v-for="(slide, i) in slides" :index="i" :key="i">
        <span class="title">{{slide.a}}</span>
        <p></p>
      </slide>
    </carousel-3d>
    <span class="j_card">去集卡></span>
  </div>

    <div class="my-price-two">
      <div class="s-card" v-for="(value, key, index) in wordNum" @click="$refs.carousel.goSlide(index);showcolor=index" :class="{'red-border':showcolor===index}" >
        <span class="card-badge" v-if="value">x{{value}}</span>
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
      showcolor:0,
      slides:[
          {a:1},
          {a:2},
          {a:3},
          {a:4}
          ],

      }

  },
  components:{
    Carousel3d,
    Slide
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" scoped>
 @import "my-prize-one.scss";
 @import "my-prize-two.scss";

</style>

