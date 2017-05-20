<template>

  <swiper :options="swiperOption"  class="my-p" :class="{p_height:prize.length>0}">
      <swiper-slide v-for="(item,index) in  prize" v-if="prize.length>0" :key="index">
       <div class="prize-center">
         <div class="p-pic" style="background-size: 100% 100%"
              :style="{backgroundImage: 'url(' + item.image + ')'}"></div>
         <p class="prize_text">{{item.prize_name}} x{{item.num}}</p>
       </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>

    <swiper-slide v-if="prize.length<=0" >
       <p class="kk">啊哦～空空如也，快去抽奖吧！</p>
    </swiper-slide>
    </swiper>
</template>
<script type="text/ecmascript-6">
  import { swiper, swiperSlide, swiperPlugins } from 'vue-awesome-swiper'
    export default {
        name: 'myRealPrize',
        props:["prize"],
        data(){
            return {
              swiperOption: {
                slidesPerView: 2.6,
                paginationClickable: true,
                spaceBetween: 30
              }
            }
        },
      components: {
        swiper,
        swiperSlide
      }
    }
</script>
<style lang="scss" rel="stylesheet/scss">

  .my-p{
    padding-top: 1.8rem;
    padding-bottom: 1.8rem;
    width: 27.66rem;
    margin: auto;
    margin-top:1.2rem;
    border-radius: 0.57rem;
    border: 2px solid #FE4744;
    border-right: none;
    border-left: none;
    background: #FFFFFF;
    color: #FE4744;
    font-size: 1rem;
    box-sizing:border-box;

    white-space: nowrap;
    display: block;
    overflow-y: scroll;
    position: relative;
    z-index:1;

  }
  .p_height{
    height: 13.8rem;
  }
  .p-pic{
    overflow-y: scroll;
   /* margin: 4vw;*/
    display: inline-block;
    height:5.91rem;
    width: 6rem;
    margin-top: 1.56rem;
    border: 1px solid #C7C7C7;
    margin-bottom: 0.6rem;
  }
.kk{
  padding-left:1.2rem;
  color: #9C9C9C ;
}
  .prize_text{
    text-align: center;
    color: red;
  }
  .prize-center{
    text-align: center;
  }
</style>
