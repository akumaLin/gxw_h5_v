<template>
 <div class="my-price-three">
   <p class="p-title">
     我的集爱排行
   </p>
  <span class="sort-more">查看排行榜</span>
   <div class="sort-tb">
     <table>
     <tr v-if="doGame">
       <td> 01</td>
       <td><div class="head"></div></td>
       <td>alex</td>
       <td> <div class="sort-prize"></div></td>
       <td>收到赞: </td>
       <td>336</td>
       <td>捐献:</td>
       <td>¥3.5</td>
     </tr>
       <tr v-if="!doGame" class="un_do">
         <td>您尚未参加集赞活动哦，快去参加吧</td>
       </tr>
     </table>

   </div>
 </div>
</template>
<script type="text/ecmascript-6">
    export default {
        name: 'myPrizeThree',
        props:["doGame"]

    }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
@import "my-prize-three.scss";

</style>
