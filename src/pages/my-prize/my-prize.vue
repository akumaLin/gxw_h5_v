<template>
  <div class="my-prize" id="my-prize" :class="{margin_top:isApp}">
    <my-prize-one :wordNum="wordNum"></my-prize-one>
    <my-prize-three :loveTitle="loveTitle"></my-prize-three>
    <div style="position:relative">
      <p class="p-title">我的积分卡</p>
      <a class="sort-more" @touchstart="toBuy">去购买></a>
      <ul class="my-tb">
        <li>获取积分卡：<span v-text="pointCode>0?pointCode:0"></span>张</li>
        <li>
          <button class="btn" v-if="pointCode >=10" @touchstart="isTrue">兑换14卡</button>
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
    <my-prize-four :shareUser="shareUser" @a_app="warm_app"></my-prize-four>
    <div style="position:relative">
      <p class="p-title">
        我的奖品
      </p>
      <a class="sort-more" id="sort_more2" @touchstart="toLottery">去抽奖></a>
      <my-real-prize :prize="prize"></my-real-prize>
    </div>
    <my-prize-five :coupon="coupon,timeout" @a_app="warm_app"></my-prize-five>
    <!--  <alert_app></alert_app>-->
    <div class="confirm_z" @touchmove.prevent v-if="alert_app">
    </div>
    <div class="confirm_14" @touchmove.prevent v-if="alert_app">
      <p style="text-align: center">请下载共享网app！</p>
      <div class="btn_bot">
        <div class="btn_14" style="border: none" @touchstart="alert_app=false">确定</div>
      </div>
    </div>
    <transition name="fade">
      <div class="Cover_all" v-if="alert_5">
        <div class="Cover"></div>
        <div class="img" :style="{background: 'url(' +alert_520+ ') no-repeat',backgroundSize:'100% 100%'}">
          <div class="close" @touchstart="alert_5=false"></div>
        </div>
      </div>
    </transition>
    <transition name="fade">
      <div class="Cover_all" v-if="alert_h">
        <div class="Cover"></div>
        <div class="img" :style="{background: 'url(' +alert_hec+ ') no-repeat',backgroundSize:'100% 100%'}">
          <div class="close" @touchstart="alert_h=false"></div>
        </div>
      </div>
    </transition>
    <transition name="fade">
      <div class="d_success" v-if="d_success" v-text="d_success_info"></div>
    </transition>
  </div>

</template>
<script type="text/ecmascript-6">
  import axios from 'axios';
  import myPrizeOne from "@/components/my-prize-one/my-prize-one.vue"
  import myPrizeThree from "@/components/my-prize-sort/my-prize-three.vue"
  import myPrizeFour from "@/components/my-prize-people/my-prize-four.vue"
  import myPrizeFive from "@/components/my-prize-coupon/my-prize-five.vue"
  import myRealPrize from "@/components/my-real-prize/my-real-prize.vue"
  /*  import alert_app from "@/components/alert_app/alert_app.vue"*/
  export default {
    name: 'myPrize',
    data(){
      return {
        d_success: false,
        d_success_info: "兑换成功",
        alert_5: false,
        alert_5_1: false,
        alert_h_1: false,
        alert_h: false,
        isApp: false,
        alert_520: require("../../assets/images/520_alert.png"),
        alert_hec: require("../../assets/images/hec_alert.png"),
        is_confirm: false,
        showRules: false,
        id_num: 0,
        alert_app: false,
        pointCode: {},
        loveTitle: {},
        wordNum: {
          "word1_num": "0",
          "word2_num": "0",
          "word3_num": "0",
          "word4_num": "0",
        },
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

      let my_href = window.location.href
      let url_index = my_href.lastIndexOf("&")
      if (url_index > -1) {
        let user_id = my_href.substring(url_index + 1)
        let id_num_index = user_id.lastIndexOf("=")
        let id_num = user_id.substring(id_num_index + 1)
        this.id_num = id_num
      }else {

        this.id_num=this.getCookie("GXW_user_id")
        console.log(this.id_num)

      }
            if(this.id_num!=0){
              let nowThis = this
              axios.get('http://192.168.1.25/gxw_mobile3/Shop/Loves/homeIndex?query={"user_id":' + this.id_num + '}')
              /* axios.get('/api/prizes')*/
                .then(function (response) {

                  if (response.data.result == false) {
                  } else {
                    nowThis.wordNum.word1_num = response.data.list.wordNum.word1_num
                    nowThis.wordNum.word2_num = response.data.list.wordNum.word2_num
                    nowThis.wordNum.word3_num = response.data.list.wordNum.word3_num
                    nowThis.wordNum.word4_num = response.data.list.wordNum.word4_num
                    if (response.data.list.wordNum.word1_new == 1) {
                      nowThis.alert_5_1 = true
                    } else {
                      nowThis.alert_5_1 = false
                    }
                    if (response.data.list.wordNum.word4_new == 1) {
                      nowThis.alert_h_1 = true
                    } else {
                      nowThis.alert_h_1 = false
                    }
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
                  }

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
            }

    },
    mounted(){
      this.alert_5 = this.alert_5_1
      this.alert_h = this.alert_h_1
      const nowThis = this
      const obj = nowThis.$el
      if (nowThis.$route.params.top)
        obj.parentNode.scrollTop = (obj.offsetHeight - obj.parentNode.offsetHeight);
    },
    methods: {
      getCookie:function(GXW_user_id){
        if (document.cookie.length>0)
        {
          var c_start=document.cookie.indexOf(GXW_user_id + "=")
          if (c_start!=-1)
          {
            c_start=c_start + GXW_user_id.length+1
            var c_end=document.cookie.indexOf(";",c_start)
            if (c_end==-1) c_end=document.cookie.length
            return unescape(document.cookie.substring(c_start,c_end))
          }
        }
        return null
      },
      make_confirm(){
        var now_this = this
        axios.post('http://192.168.1.25/gxw_mobile3/shop/love/exchangeword?query={"user_id":' + now_this.id_num + "}")
          .then(function (response) {
            if (response.data.result == true) {
              axios.get('http://192.168.1.25/gxw_mobile3/Shop/Loves/homeIndex?query={"user_id":' + now_this.id_num + "}").then(function (res) {
                now_this.wordNum.word1_num = res.data.list.wordNum.word1_num
                now_this.wordNum.word2_num = res.data.list.wordNum.word2_num
                now_this.wordNum.word3_num = res.data.list.wordNum.word3_num
                now_this.wordNum.word4_num = res.data.list.wordNum.word4_num
                now_this.pointCode = res.data.list.pointCode.pointNum
                if (res.data.list.wordNum.word1_new == 1) {
                  now_this.alert_5 = true
                } else {
                  now_this.alert_5 = false
                }
                if (res.data.list.wordNum.word4_new == 1) {
                  now_this.alert_h = true
                } else {
                  now_this.alert_h = false
                }
                now_this.is_confirm = false
                now_this.d_success = true
                setTimeout(function () {
                  now_this.d_success = false
                }, 3000)
              })
            }else {
              now_this.is_confirm = false
              now_this.d_success_info ="账号异常，兑换失败"
              now_this.d_success = true
              setTimeout(function () {
                now_this.d_success = false
              }, 3000)
            }
          })


      },
      warm_app(val){
        this.alert_app = val
      }
      ,
      isTrue(){
        this.is_confirm = true
      },
      toBuy(){
        if (window.O2OHome) {
          if (this.id_num ==0) {
            O2OHome.isLogin()
          } else {
            O2OHome.buyVipCard();
          }

        } else {
          window.location.href = "https://www.gxw520.com/mobile/index.php?r=user/index/buy"//去购买要跳转的绝对路径
        }
      },
      toLottery(){
        if (window.O2OHome) {
          O2OHome.gotoTabIndex('0')
        } else {
          /*  window.location.href="cn/active_homepage.html "//去抽奖要跳转的绝对路径*/
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
      /* alert_app*/
    }
  }

</script>
<style lang="scss">
  @import 'my-prize.scss';

  .top_tab {
    z-index: 9999;
  }
</style>
