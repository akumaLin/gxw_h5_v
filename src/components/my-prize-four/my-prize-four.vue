<template>
  <div class="my-prize-four">
    <p class="p-title">我邀请的用户</p>
    <span class="sort-more">更多></span>
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
        data(){
            return {
            }
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss">
  @import "my-prize-four.scss";


</style>
