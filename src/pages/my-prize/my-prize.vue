<template>
  <div class="my-prize" id="my-prize" :class="{margin_top:isApp}">
    <my-prize-one :wordNum="wordNum"></my-prize-one>
    <my-prize-three :loveTitle="loveTitle"></my-prize-three>
    <div style="position:relative">
      <p class="p-title">我的积分卡</p>
      <a  class="sort-more" @touchstart="toBuy">去购买></a>
      <ul class="my-tb">
        <li>获取积分卡：<span v-text="pointCode>0?pointCode:0"></span>张</li>
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
        loveTitle: {},
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
      axios.get('http://192.168.1.25/gxw_mobile3/Shop/Loves/homeIndex?query={"user_id":"14049"}')
   /*   axios.get('/api/prizes')*/
        .then(function (response) {
          nowThis.wordNum = response.data.list.wordNum;
          nowThis.pointCode = response.data.list.pointCode.pointNum
          if (response.data.list.loveTitle.love_id != 0) {
            nowThis.loveTitle = response.data.list.loveTitle
          }
          if (response.data.list.shareUser.length > 0) {
            nowThis.shareUser = response.data.list.shareUser;
          }
          if (response.data.list.prize.length > 0) {
            nowThis.prize = response.data.list.prize;

          }
          nowThis.coupon = response.data.list.coupon
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
       var a=14049;
        axios.post('http://192.168.1.21/gxw_mobile3/shop/love/exchangeword?query={"user_id":'+a+"}")
          .then(function (response){
               console.log(response.data.result)
            if(response.data.result==true){
              axios.get('http://192.168.1.25/gxw_mobile3/Shop/Loves/homeIndex?query={"user_id":"14049"}')
                .then(function (response) {
                  this.wordNum = response.data.list.wordNum;
                })
            }
          })



      },
      isTrue(){
      this.is_confirm=true
      },
     toBuy(){
       window.location.href="https://www.gxw520.com/mobile/index.php?r=user/index/buy"
       /* if(window.O2OHome){
          O2OHome.gotoTabIndex ('0')
        }else {
          window.location.href="http://192.168.1.33/gxw_h5/src/cn/active_homepage.html?is-app=2&user-id=23200"//去购买要跳转的绝对路径
        }*/
      },
      toLottery(){
        if(window.O2OHome){
          O2OHome.gotoTabIndex ('0')
        }else {
        window.location.href="http://192.168.1.105/dashboard/dist/cn/active_homepage.html "//去抽奖要跳转的绝对路径
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
    }
  }

</script>
<style lang="scss">
  @import 'my-prize.scss';
  .top_tab{
    z-index: 9999;
  }
</style>
