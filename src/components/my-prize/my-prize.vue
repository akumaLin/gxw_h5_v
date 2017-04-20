<template>
  <div class="my-prize">
    <my-prize-one :wordNum="wordNum"></my-prize-one>
    <my-prize-three :loveTitle="loveTitle"></my-prize-three>
    <div style="position:relative">
      <p class="p-title">
        我的积分卡
      </p>
      <span class="sort-more">去购买></span>
      <ul class="my-tb">
        <li>获取积分卡：{{pointCode}}张</li>
        <li>
          <button class="btn" v-if="pointCode!='0'">兑换14卡</button>
        </li>
        <li>Tips：10张13卡可以兑换一张14卡，不含抽奖抽中的13卡</li>
      </ul>
    </div>
    <my-prize-four :shareUser="shareUser"></my-prize-four>
    <div style="position:relative">
      <p class="p-title">
        我的奖品
      </p>
      <span class="sort-more">去抽奖></span>
      <ul class="my-p">
        <li v-for="item in  prize" v-if="prize.length>0">
          <div class="p-pic" style="background-size: 100% 100%" :style="{backgroundImage: 'url(' + item.image + ')'}"></div>
          <p>{{item.prize_name}}  x{{item.num}}</p>
        </li>
        <li v-if="prize.length<=0" style="text-align: left;color: #888888;margin: 0">
          啊哦～空空如也，快去抽奖吧！
        </li>
      </ul>
    </div>
    <my-prize-five></my-prize-five>

  </div>
</template>
<script type="text/ecmascript-6">
  import axios from 'axios';
  import myPrizeOne from "@/components/my-prize-one/my-prize-one.vue"
  import myPrizeThree from "@/components/my-prize-three/my-prize-three.vue"
  import myPrizeFour from "@/components/my-prize-four/my-prize-four.vue"
  import myPrizeFive from "@/components/my-prize-five/my-prize-five.vue"
  export default {
    name: 'myPrize',
    data(){
      return {

        showRules:false,
        wordNum:{},
        pointCode:{},
        loveTitle:[],
        shareUser:[
          {
            "avatar": "",
            "username":"暂时没有用户"}
        ],
        prize:[]
      }
    },
    created(){
      let nowThis=this
      axios.get('/api/prizes')
        .then(function (response) {
          nowThis.wordNum=response.data.data.list.wordNum;
          nowThis.pointCode=response.data.data.list.pointCode.pointNum
          console.log(response.data.data.list.loveTitle)
          if(response.data.data.list.loveTitle.love_id != 0){
            nowThis.loveTitle = response.data.data.list.loveTitle
          }
          if(response.data.data.list.shareUser.length>0){
            nowThis.shareUser=response.data.data.list.shareUser;
          }
          if(response.data.data.list.prize.length>0){
            nowThis.prize=response.data.data.list.prize;

          }

        })
        .catch(function (error) {
          console.log(error);
        });

    }
    ,
    components: {
      myPrizeOne,
      myPrizeThree,
      myPrizeFour,
      myPrizeFive
    }
  }
</script>
<style lang="scss">
  @import 'my-prize.scss';
</style>
