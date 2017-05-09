<template>
  <div class="my-prize-five" id="coupon_bot">
    <p class="p-title">
      我的优惠券
    </p>
    <span class="sort-more" v-if="coupon.length>0" @touchstart="moreCoupon">更多></span>
    <span class="sort-more" v-if="coupon.length<=0" id="getCoupon" @touchstart="getCoupon">去领取></span>
    <div class="coupon " v-for="(item,index) in coupon" v-if="coupon.length>0" :style="{background: 'url(' + yhj_bg+ ') no-repeat',backgroundSize:'100% 100%'}">
      <div class="money">
        ¥<span>{{item.type_money|int_f}}</span>
      </div>
      <div class="m-text">
        <p style="color: #000000">{{item.cate}}</p>
          <p>满{{item.min_goods_amount|int_f}}可用</p>
        <p>有效期：{{item.use_start_date|time_f}}-{{item.use_end_date|time_f}} </p>
      </div>
      <span class="use  now_use" id="now_use" v-if="timeout[index]&&(item.order_id==0)"  @touchstart="useCoupon">立即使用</span>
      <div class="coupon_icon" v-if="(!timeout[index])&&(item.order_id==0)" :class="[{gone:item.order_id>0},{already:((!timeout[index])&&(item.order_id==0))}]"></div>
    </div>
    <div class="coupon no_things" v-if="coupon.length<=0">
      没有优惠券，快去领取吧！
    </div>

  </div>
</template>
<script type="text/ecmascript-6">
    export default {
        name: 'myPrizeFive',
        data(){
          return{
              yhj_bg:require("../../assets/images/yhj.png")
          }
        },
        props:["coupon","timeout"],
      methods:{
        getCoupon(){
          if(window.O2OHome){
            O2OHome.gotoTabIndex ('0')
          }else {
      /*      window.location.href="cn/active_homepage.html"//获取优惠卷要跳转的绝对路径*/
          }
        },
        moreCoupon(){
          if(window.O2OHome){
            O2OHome.gotoTabIndex ('0')}
            else {
          /*  window.location.href="http://www.baidu.com"//更多优惠卷要跳转的绝对路径*/
            this.$emit('a_app', true);
          }
        },
        useCoupon(){
          if(window.O2OHome){
            O2OHome.gotoTabIndex ('0')
          }else {
           /* window.location.href="cn/active_homepage.html"//去抽奖要跳转的绝对路径*/
          }
        }
      }
    }

</script>
<style lang="scss" rel="stylesheet/scss">
@import "my-prize-five.scss";
</style>
