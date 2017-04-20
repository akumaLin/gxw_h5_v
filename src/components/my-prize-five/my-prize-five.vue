<template>
  <div class="my-prize-five">
    <p class="p-title">
      我的优惠卷
    </p>
    <span class="sort-more" v-if="false">更多></span>
    <span class="sort-more">去领取></span>
    <div class="coupon get" v-if="false">
      <div class="money">
        ¥<span>20</span>
      </div>
      <div class="m-text">
        <p style="color: #000000">全品类</p>
          <p>满100可用</p>
        <p>有效期：2017.5.20-2017.5.30 </p>
      </div>
      <button class="use" v-if="true">立即使用</button>
    </div>
    <div class="coupon no_things" >
      没有优惠券，快去领取吧！
    </div>
  <!--  <div class="coupon gone">
      <div class="money">
        ¥<span>20</span>
      </div>
      <div class="m-text">
        <p style="color: #000000">全品类</p>
        <p>满100可用</p>
        <p>有效期：2017.5.20-2017.5.30 </p>
      </div>
      <button class="use" v-if="false">立即使用</button>
    </div>-->

   <!--
    <div class="coupon already">
      <div class="money">
        ¥<span>20</span>
      </div>
      <div class="m-text">
        <p style="color: #000000">全品类</p>
        <p>满100可用</p>
        <p>有效期：2017.5.20-2017.5.30 </p>
      </div>
      <button class="use" v-if="false">立即使用</button>
    </div>-->
  </div>
</template>
<script type="text/ecmascript-6">

    export default {
        name: 'myPrizeFive',
        data(){
            return {}
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss">
@import "my-prize-five.scss";
</style>
