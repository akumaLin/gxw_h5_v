<template>
 <div class="my-price-three">
   <p class="p-title">
     我的集赞排行
   </p>
  <a class="sort-more" @touchstart="sortNum" id="sort-more">查看排行榜</a>
   <div class="sort-tb">
     <table>
     <tr v-if="loveTitle.ranking>0">
       <td> {{loveTitle.ranking}}</td>
       <td><div class="head" style="background-size: 100% 100%" :style="loveTitle.user_img==null?{backgroundImage: 'url(' +sort_user_img + ')'}:{backgroundImage: 'url(' +loveTitle.user_img+ ')'}"></div></td>
       <td class="sort_name_w">{{loveTitle.username}}</td>
       <td> <div class="sort-prize" style="background-size: 100% 100%" :style="loveTitle.imageurl=='null'?{backgroundImage: 'url(' +sort_prize_img + ')'}:{backgroundImage: 'url(' +loveTitle.imageurl + ')'}"></div></td>
       <td style="white-space: nowrap">收到赞: </td>
       <td>{{loveTitle.likes}}</td>
       <td>捐献:</td>
       <td>¥{{loveTitle.money}}</td>
     </tr>
       <tr v-else class="un_do">
         <td>您尚未参加集赞活动哦，快去参加吧</td>
       </tr>
     </table>

   </div>
 </div>
</template>
<script type="text/ecmascript-6">
    export default {
        name: 'myPrizeThree',
        props:["loveTitle"],
        data(){
          return {
              sort_user_img:require("../../assets/images/head_k.png"),
              sort_prize_img:require("../../assets/images/prize_k.png")
          }
        },
         methods:{
           sortNum(){
             if(window.O2OHome){
               O2OHome.gotoTabIndex ('2')
             }else {
               top.location.href="cn/forlove_participate.html"//查看排行要跳转的绝对路径
             }
           }
         }
    }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
@import "my-prize-three.scss";

</style>
