<template>
  <div class="newPeople">
    <ul class="coupon">
      <li v-for="item in bonus_list">
        <div class="coupon_img">
          <p style="color: white">¥ <span class="monney">{{item.type_monney|int_f}}</span></p>
          <p>全品类</p>
          <p>满100可用</p>
        </div>
      </li>
    </ul>
    <button class="btn" @touchstart="write_tel_div=true">完成手机绑定，领取完整188元</button>
    <ul class="bot">
      <li>
        <router-link :to="{name:'myPrize',params:{top:true}}">查看已领优惠券</router-link>
      </li>
      <li><a href="#" @touchstart="showRules=true">规则说明</a></li>
    </ul>
    <div class="Pop-ups" v-if="showRules">
      <div class="img">
        <div class="img_margin">
        <div class="img_rules" @touchstart.stop>
          <h1>新人专享优惠券规则</h1>
          <h2>活动时间：2017.5.20-2017.5.31</h2>
          <p>1)188元红包仅限新用户领取一次此红包。同一登录帐号、同一手机号、同一支付账号、同一IP地址、同一终端设备号或其他合理显示为同一用户的情形，均视同一用户。</p>
          <p>2) 新用户完成短信验证可领取68元组合优惠券，再通过实名认证可领取120元组合优惠券。或新用户登录共享网app直接注册即可一键领取全部188元组合优惠券；</p>
          <p>3)短信验证时，会给当前登录账号所绑定的手机号发送短信，请注意查收。共享网不会以任何方式索要您的银行密码等信息，请注意安全谨防诈骗；</p>
          <p>4)红包内含多张优惠券，过期未使用自动失效，优惠券具体面额及其有效期以实际到账为准；</p>
          <p>5)红包中优惠券在全平台（手机app、PC、微信共享网商城）均可使用，优惠券分为全品类券和限品类券两种。全品类券可用于全部自营商品，限品类券优惠券仅可购买对应分类下指定商品,
            当订单中所购商品总额满足对应优惠券使用限额才能使用；</p>
          <p>6)红包中优惠券的具体使用规则及有效期信息可点击页面“查看已领优惠券”去往我的优惠券中查看，或在客户端内“我的--优惠券”页面查看；如遇发放延迟，请您耐心等待；</p>
          <h2>其他说明：</h2>
          <p>1)活动过程中，凡以不正当手段（作弊、恶意套现、虚假交易、扰乱系统、实施网络攻击等）参与本次活动的用户，共享网有权终止其参与活动，并取消其获券资格； </p>
          <p>
            2)如遇不可抗力（包括但不限于重大灾害事件、活动受政府机关指令需要停止举办或调整的、活动中存在大面积作弊行为、活动遭受严重网络攻击或因系统故障导致活动领券资格大批量出错，活动不能正常进行的），共享网可取消、修改或暂停本活动，则活动主办方可依相关法律法规主张免责；</p>
          <p>3)活动中有任何疑问，即日起可进入共享网客户端“ <span class="red_color">我的--客户服务--智能客服、电话客服、在线客服”咨询反馈”</span>；</p>
          <p>4)共享网保留在法律规定范围内对上述规则进行解释的权利</p>
          </div>
          <div class="close_x" @touchstart="showRules=false"></div>
        </div>
      </div>
    </div>

    <div class="Pop-ups" v-if="write_tel_div" @touchmove.prevent>
      <div class="write_tel">
          <div class="close_x1" @touchstart="write_tel_div=false"></div>
          <div class="w_tel_img"></div>
          <span class="tel_text">绑定手机</span>
          <div class="w_tel_edi">
            <label for="tel_num">手机号</label>
            <input type="text" id="tel_num" class="tel_num" v-model="tel">
          </div>
        <div class="w_tel_edi">
          <label for="tel_code">验证码</label>
          <input type="text" class="tel_code" id="tel_code" >
          <span class="time_late"  @touchstart="getCode" v-text="acode" disabled="disabled"></span>
        </div>
        <div class="w_tel_edi time_late code_center" v-if="true">
          验证码错误
        </div>
        <button class="tel_btn">提交</button>
      </div>
    </div>

  </div>
</template>
<script type="text/ecmascript-6">
  import axios from 'axios';
  export default {
    name: '',
    data(){
      return {
        tel:'',
        code:'',
        acode:"获取验证码",
        write_tel_div:false,
        showRules:false,
        bonus_list: []
      }
    },
    methods:{
      getCode(){
        if ((/^1[3|4|5|7|8][0-9]{9}$/.test(this.tel))) {
          console.log(this.tel)
      /*      this.$http.post('/api/tel', {tel: this.tel}).then(response => {*/
              this.acode = 10;
              let a = this.acode;
             this.acode = "10秒再获取";
              let timer = setInterval(() => {
                a--;
                this.acode = a + "秒再获取";
                if (this.acode == "0秒再获取") {
                  clearInterval(timer);
                  this.acode = "获取验证码";
                }
              }, 1000)
          /*  })*/
        } else {

         /* this.warmTel=true*/
        }
      },
    },
    created(){
      let nowThis = this
      axios.get('/api/bonus_list')
        .then(function (response) {

    console.log(response.data.data)
          nowThis.bonus_list=response.data.data
        })

    }
  }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
  @import "new-people.scss";

</style>
