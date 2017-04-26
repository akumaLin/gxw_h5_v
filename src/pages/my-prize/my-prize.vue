<template>
  <div class="my-prize" id="my-prize">
    <my-prize-one :wordNum="wordNum"></my-prize-one>
    <my-prize-three :loveTitle="loveTitle"></my-prize-three>
    <div style="position:relative">
      <p class="p-title">我的积分卡</p>
      <a href="#" class="sort-more" @touchstart="toBuy">去购买></a>
      <ul class="my-tb">
        <li>获取积分卡：{{pointCode}}张</li>
        <li>
          <button class="btn" v-if="pointCode >=10" @touchstart="isTrue" >兑换14卡</button>
        </li>
        <li>Tips：10张13卡可以兑换一张14卡，不含抽奖抽中的13卡</li>
      </ul>
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
  import { MessageBox } from 'mint-ui';
  import axios from 'axios';
  import myPrizeOne from "@/components/my-prize-one/my-prize-one.vue"
  import myPrizeThree from "@/components/my-prize-three/my-prize-three.vue"
  import myPrizeFour from "@/components/my-prize-four/my-prize-four.vue"
  import myPrizeFive from "@/components/my-prize-five/my-prize-five.vue"
  import myRealPrize from "@/components/my-real-prize/my-real-prize.vue"
  export default {
    name: 'myPrize',
    data(){
      return {

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

    /* loginJudge(function (userId) {

        $.get(url0, function(data) {

        })
      });
*/
       /*var a=getSession()

      alert(a)*/

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
        .catch(function (error) {
        })

    },
    mounted(){
      const nowThis = this
      const obj = nowThis.$el
      if (nowThis.$route.params.top)
        obj.parentNode.scrollTop = (obj.offsetHeight - obj.parentNode.offsetHeight);
    },
    methods:{
      isTrue(){

        MessageBox({
          title: '提示',
          message: '确定执行此操作?',
          closeOnClickModal: false,
          showCancelButton:true
        });
      },
     toBuy(){
        if(window.O2OHome){
          O2OHome.gotoTabIndex ('0')
        }
      },
      toLottery(){
        if(window.O2OHome){
          O2OHome.gotoTabIndex ('0')
        }
      }
    }
    ,
    components: {
      myPrizeOne,
      myPrizeThree,
      myPrizeFour,
      myPrizeFive,
      myRealPrize
    }
  }
/*  function loginJudge(callback) {
    if (getSession) {
      if (getSession()) {
        callback && callback(getSession());
      } else {
        appEvent('isLogin');
      }
    } else if (O2OHome && O2OHome.getSession) {
      if (O2OHome.getSession()) {
        callback && callback(O2OHome.getSession());
      } else {
        appEvent('isLogin');
      }
    }
  }
  function appEvent(obj, data, notApp, judge) {
    // O2OHome = {};
    // O2OHome[obj] = function (data) {
    // 	console.log(obj)
    // 	console.log(data)
    // 	alert(obj)
    // 	alert(JSON.stringify(data))
    // }
    if (O2OHome) {
      if (typeof obj == 'object') {
        if (obj.type == 'login') {
          if (O2OHome.isLogin()) {
            obj.yes && obj.yes();
          } else {
            // userId = (core.lsDel('userId', 'remove'));
            obj.no && obj.no();
          }
        }
      } else {
        if (data) {
          if (typeof data != 'function') {
            (obj == 'payWith' && isApp == 2) && (data = JSON.stringify(data));
            O2OHome[obj] && O2OHome[obj](data);
            notApp && (((typeof notApp == 'function') && judge == true) && notApp());
          } else {
            O2OHome[obj] && O2OHome[obj]();
            (notApp == true) && data();
          }
        } else {
          O2OHome[obj] && O2OHome[obj]();
        }
      }
    } else {
      data && ((typeof data == 'function') && data());
      notApp && notApp();
    }
  }*/
</script>
<style lang="scss">
  @import 'my-prize.scss';
</style>
