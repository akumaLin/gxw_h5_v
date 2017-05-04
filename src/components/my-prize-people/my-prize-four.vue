<template>
  <div class="my-prize-four">
    <p class="p-title">我邀请的用户</p>
    <a class="sort-more" v-if="!shareUser[0].new_user_id" style="display: inline-block" @touchstart="toShare">去分享></a>
    <a class="sort-more"  v-else @touchstart="more" style="display: inline-block" >更多></a>
    <ul class="my-user">
      <li v-for="item in  shareUser" :class="{bigwidh:!shareUser[0].new_user_id}">
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
              }else {
                window.location.href="http://192.168.1.10/gxw520/mobile/index.php?r=user"//更多邀请要跳转的绝对路径
              }
            },
            toShare(){
              if(window.O2OHome){
                O2OHome.share('https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=6509514,3865858695&fm=117&gp=0.jpg', 'http://192.168.1.210:8080/#/',"haha")
              }else {
               /* window.location.href="http://www.baidu.com"//去分享要跳转的绝对路径*/
                this.$emit('a_app', true);
              }
            }
       }
    }
</script>
<style lang="scss" rel="stylesheet/scss">
  @import "my-prize-four.scss";
.bigwidh{
  width: 100%!important;
}

</style>
