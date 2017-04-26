<template>
  <div class="my-prize-five" id="coupon_bot">
    <p class="p-title">
      我的优惠卷
    </p>
    <span class="sort-more" v-if="coupon.length>0" @touchstart="moreCoupon">更多></span>
    <span class="sort-more" v-if="coupon.length<=0" @touchstart="getCoupon">去领取></span>
    <div class="coupon get" v-for="(item,index) in coupon" v-if="coupon.length>0" >
      <div class="money">
        ¥<span>{{item.type_money|int_f}}</span>
      </div>
      <div class="m-text">
        <p style="color: #000000">全品类</p>
          <p>满{{item.min_goods_amount|int_f}}可用</p>
        <p>有效期：{{item.use_start_date|time_f}}-{{item.use_end_date|time_f}} </p>
      </div>
      <button class="use" v-if="timeout[index]&&(item.order_id==0)">立即使用</button>
      <div class="coupon_icon" :class="[{gone:item.order_id>0},{already:((!timeout[index])&&(item.order_id==0))}]"></div>
    </div>
    <div class="coupon no_things" v-if="coupon.length<=0">
      没有优惠券，快去领取吧！
    </div>

  </div>
</template>
<script type="text/ecmascript-6">

    export default {
        name: 'myPrizeFive',
        props:["coupon","timeout"],
      methods:{
        getCoupon(){
          if(window.O2OHome){
            O2OHome.gotoTabIndex ('0')
          }
        },
        moreCoupon(){
          if(window.O2OHome){
            O2OHome.myCoupon()
          }
        }
      }
    }

</script>
<style lang="scss" rel="stylesheet/scss">
@import "my-prize-five.scss";
</style>
