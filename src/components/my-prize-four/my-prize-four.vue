<template>
  <div class="my-prize-four">
    <p class="p-title">我邀请的用户</p>
    <a class="sort-more"  v-if="shareUser.length> '0'" style="display: inline-block" @touchstart="toShare">去分享></a>
    <a class="sort-more"  v-if="shareUser.length <='0'" @touchstart="more" style="display: inline-block" >更多></a>
    <ul class="my-user">
      <li v-for="item in  shareUser">
        <div class="user-head" style="background-size: 100% 100%" :style="{backgroundImage: 'url(' + item.avatar + ')'}" v-if="item.avatar"></div>
        <div class="user-head null_people" v-if="!item.avatar"></div>
        <span class="name">{{item.username}}</span>
      </li>
    </ul>
  </div>
</template>
<script type="text/ecmascript-6">

    export default {
        name: 'myPrizeFour',
        props:["shareUser"],
       methods:{
            more(){
              if(window.O2OHome){
                O2OHome.myRequest ()
              }
            },
            toShare(){
              if(window.O2OHome){
                O2OHome.share('https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=6509514,3865858695&fm=117&gp=0.jpg', 'http://192.168.1.210:8080/#/',"haha")
              }
            }
       }
    }
</script>
<style lang="scss" rel="stylesheet/scss">
  @import "my-prize-four.scss";


</style>
