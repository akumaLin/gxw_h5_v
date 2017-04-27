<template>
  <div class="my-prize-header" @touchmove.prevent>


  <mt-navbar v-model="selected" :fixed="true" class="top_bg">
    <mt-tab-item id="1">520狂欢</mt-tab-item>
    <mt-tab-item id="2">集爱活动</mt-tab-item>
    <mt-tab-item id="3">为爱益行</mt-tab-item>
    <mt-tab-item id="4">我的奖品</mt-tab-item>
  </mt-navbar>

    <object classid="clsid:F08DF954-8592-11D1-B16A-00C0F0283628" id="Slider1"
            width="100vw" height="50vh">
      <source src="http://192.168.1.33/gxw_h5/src/cn/active_homepage.html">
    </object>
  </div>
</template>
<script type="text/ecmascript-6">

    export default {
        name: 'myPrizeHeader',
        data(){
            return {selected:3}
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss">
 @import "my-prize-header.scss";
</style>
