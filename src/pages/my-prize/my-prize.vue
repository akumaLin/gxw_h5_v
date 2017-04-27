<template>
  <div class="my-prize" id="my-prize" :class="{margin_top:isApp}">
   <!-- <my-prize-header></my-prize-header>-->
    <my-prize-one :wordNum="wordNum"></my-prize-one>
    <my-prize-three :loveTitle="loveTitle"></my-prize-three>
    <div style="position:relative">
      <p class="p-title">我的积分卡</p>
      <a  class="sort-more" @touchstart="toBuy">去购买></a>
      <ul class="my-tb">
        <li>获取积分卡：{{pointCode}}张</li>
        <li>
          <button class="btn" v-if="pointCode >=10" @touchstart="isTrue" >兑换14卡</button>
        </li>
        <li>Tips：10张13卡可以兑换一张14卡，不含抽奖抽中的13卡</li>
      </ul>
    </div>
    <div class="confirm_z" @touchmove.prevent v-if="is_confirm">
    </div>
    <div class="confirm_14" @touchmove.prevent v-if="is_confirm">
      <p>确定将10张13卡兑换成1张14卡了吗？换了就不能后悔咯！</p>
      <div class="btn_bot">
      <div class="btn_14" @touchstart="make_confirm">确定兑换</div>
      <div class="btn_14" @touchstart="is_confirm=false">我点错了</div>
      </div>
    </div>
    <my-prize-four :shareUser="shareUser"></my-prize-four>
    <div style="position:relative">
      <p class="p-title">
        我的奖品
      </p>
      <a class="sort-more" @touchstart="toLottery">去抽奖></a>
      <my-real-prize :prize="prize"></my-real-prize>
    </div>
    <my-prize-five :coupon="coupon,timeout"></my-prize-five>
  </div>
</template>
<script type="text/ecmascript-6">
  import axios from 'axios';
  import myPrizeHeader from "@/components/my-prize-header/my-prize-header.vue"
  import myPrizeOne from "@/components/my-prize-one/my-prize-one.vue"
  import myPrizeThree from "@/components/my-prize-sort/my-prize-three.vue"
  import myPrizeFour from "@/components/my-prize-people/my-prize-four.vue"
  import myPrizeFive from "@/components/my-prize-coupon/my-prize-five.vue"
  import myRealPrize from "@/components/my-real-prize/my-real-prize.vue"
  export default {
    name: 'myPrize',
    data(){
      return {
        isApp:false,
        is_confirm:false,
        showRules: false,
        wordNum: {},
        pointCode: {},
        loveTitle: [],
        shareUser: [
          {
            "avatar": "",
            "username": "暂时没有用户"
          }
        ],
        prize: [],
        coupon: [],
        timeout: []
      }
    },
    created(){
      let nowThis = this
      axios.get('/api/prizes')
        .then(function (response) {
          nowThis.wordNum = response.data.data.list.wordNum;
          nowThis.pointCode = response.data.data.list.pointCode.pointNum
          if (response.data.data.list.loveTitle.love_id != 0) {
            nowThis.loveTitle = response.data.data.list.loveTitle
          }
          if (response.data.data.list.shareUser.length > 0) {
            nowThis.shareUser = response.data.data.list.shareUser;
          }
          if (response.data.data.list.prize.length > 0) {
            nowThis.prize = response.data.data.list.prize;

          }
          nowThis.coupon = response.data.data.list.coupon
          let timestamp = Date.parse(new Date());
          timestamp = timestamp / 1000;
          for (let i = 0; i < nowThis.coupon.length; i++) {
            var endtime = nowThis.coupon[i].use_end_date;
            endtime = endtime.replace(/\-/g, "/");
            endtime = Date.parse(endtime);
            endtime = endtime / 1000;
            let boolean = (timestamp < endtime)
            nowThis.timeout.push(boolean)
          }
        })
    },
    mounted(){
      const nowThis = this
      const obj = nowThis.$el
      if (nowThis.$route.params.top)
        obj.parentNode.scrollTop = (obj.offsetHeight - obj.parentNode.offsetHeight);
    },
    methods:{
      make_confirm(){
        this.is_confirm=false
      },
      isTrue(){
      this.is_confirm=true
      },
     toBuy(){
        if(window.O2OHome){
          O2OHome.gotoTabIndex ('0')
        }else {
          window.location.href="http://www.baidu.com"//去购买要跳转的绝对路径
        }
      },
      toLottery(){
        if(window.O2OHome){
          O2OHome.gotoTabIndex ('0')
        }else {
          window.location.href="http://www.baidu.com"//去抽奖要跳转的绝对路径
        }
      }
    }
    ,
    components: {
      myPrizeOne,
      myPrizeThree,
      myPrizeFour,
      myPrizeFive,
      myRealPrize,
      myPrizeHeader
    }
  }

</script>
<style lang="scss">
  @import 'my-prize.scss';
</style>
