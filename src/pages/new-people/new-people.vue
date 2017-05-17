<template>
  <div class="newPeople" :style="{background: 'url(' +my_people_bg+ ') no-repeat',backgroundSize:'100% 100%'}">
  <!-- <div class="newPeople_nav_h5"></div>-->


    <ul class="coupon">
      <li v-for="item in bonus_list">
        <div class="coupon_img" :style="{background: 'url(' +coupon_img_bg+ ') no-repeat',backgroundSize:'100% 100%'}"
             @touchstart="write_tel_div=true">
          <p style="color: white">¥ <span class="monney">{{item.type_money}}</span></p>
          <p>全品类</p>
          <p> {{item.type_name}}</p>
        </div>
      </li>
    </ul>
    <button class="btn" @touchstart="write_tel_div=true">完成手机绑定，领取完整188元</button>
    <ul class="bot">
      <li>
        <a href="javascript:;" @touchstart="go_coupon">查看已领优惠券</a>
      </li>
      <li><a href="#" @touchstart="showRules=true">规则说明</a></li>
    </ul>
    <div class="Pop-ups" v-if="showRules">
      <div class="img">
        <div class="img_margin">
          <div class="img_rules" @touchstart.stop>
            <h1>新人专享优惠券规则</h1>
            <p>188元红包仅限新用户领取一次此红包。同一登录帐号、同一手机号、同一支付账号、同一IP地址、同一终端设备号或其他合理显示为同一用户的情形，均视同一用户。</p>
            <p>2) 新用户登录共享网app直接注册并完成手机验证，即可一键领取全部188元组合优惠券；</p>
            <p>3)短信验证时，会给当前登录账号所绑定的手机号发送短信，请注意查收。共享网不会以任何方式索要您的银行密码等信息，请注意安全谨防诈骗；</p>
            <p>4)红包内含多张优惠券，过期未使用自动失效，优惠券具体面额及其有效期以实际到账为准；</p>
            <p>5)红包中优惠券仅限于共享网app内使用，优惠券分为全品类券和限品类券两种。全品类券可用于全部商品，限品类券仅可购买对应分类下指定商品, 当订单中所购商品总额满足对应优惠券使用限额才能使用；</p>
            <p>6)红包中优惠券的具体使用规则及有效期信息可点击页面“查看已领优惠券”去往我的优惠券中查看，或在客户端内“我的--优惠券”页面查看；如遇发放延迟，请您耐心等待；</p>
            <h2>其他说明：</h2>
            <p>1)活动过程中，凡以不正当手段（作弊、恶意套现、虚假交易、扰乱系统、实施网络攻击等）参与本次活动的用户，共享网有权终止其参与活动，并取消其获券资格；</p>
            <p>
              2)如遇不可抗力（包括但不限于重大灾害事件、活动受政府机关指令需要停止举办或调整的、活动中存在大面积作弊行为、活动遭受严重网络攻击或因系统故障导致活动领券资格大批量出错，活动不能正常进行的），共享网可取消、修改或暂停本活动，则活动主办方可依相关法律法规主张免责；
            </p>
            <p>3)活动中有任何疑问，即日起可进入共享网客户端“ <span class="red_color">个人-客户服务--智能客服、电话客服、在线客服”咨询反馈”</span>；</p>
            <p>4)共享网保留在法律规定范围内对上述规则进行解释的权利；
            </p>
          </div>
          <div class="close_x" @touchstart="showRules=false"
               :style="{background: 'url(' +close_x_bg+ ') no-repeat',backgroundSize:'100% 100%'}"></div>
        </div>
      </div>
    </div>
    <transition name="fade">
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
            <input type="text" class="tel_code" id="tel_code" v-model="s_code">
            <span class="time_late" @touchstart="getCode" v-text="acode" disabled="disabled"></span>
          </div>
          <div class="w_tel_edi time_late code_center" v-if="warminfo" v-text="warmtext">
          </div>
          <button class="tel_btn" @touchstart="rightCode">提交</button>
        </div>
      </div>
    </transition>
    <transition name="fade">
      <div class="confirm_z" @touchmove.prevent v-if="is_confirm">
      </div>
    </transition>
    <transition name="fade">
      <div class="confirm_14" @touchmove.prevent v-if="is_confirm">
        <p>恭喜您成功绑定手机，获得188元大礼包。</p>
        <div class="btn_bot">
          <div class="btn_14" @touchstart="go_coupon">去查看</div>
          <div class="btn_14" @touchstart="go_for_love">暂不查看</div>
        </div>
      </div>
    </transition>

<!--
    <transition name="fade">
      <div class="confirm_z" @touchmove.prevent v-if="isApp">
      </div>
    </transition>
    <transition name="fade">
      <div class="confirm_14" @touchmove.prevent v-if="true">
        <p v-text="not_app"></p>
        <div class="btn_bot">
             <span class="ok" @touchstart="isApp=false">好的</span>
        </div>
      </div>
    </transition>-->

  </div>
</template>
<script type="text/ecmascript-6">
  import axios from 'axios';
  export default {
    name: '',
    data(){
      return {
        is_confirm:false,
        not_app:"恭喜您成功绑定手机，优惠券已发放到您的账号上，请下载app查看。",
        id_num: "",
        close_x_bg: require("../../assets/images/x@2x.png"),
        my_people_bg: require("../../assets/images/newPeople@2x.png"),
        coupon_img_bg: require("../../assets/images/coupon.png"),
        tel: '',
        code: '',
        s_code: "",
        acode: "获取验证码",
        reload_isapp:"",
        write_tel_div: false,
        showRules: false,
        bonus_list: [
          {type_money: "10", type_name: "全场通用劵"},
          {type_money: "10", type_name: "满99可用"},
          {type_money: "15", type_name: "满199可用"},
          {type_money: "20", type_name: "满199可用"},
          {type_money: "20", type_name: "满200可用"},
          {type_money: "25", type_name: "满299可用"},
          {type_money: "28", type_name: "满399可用"},
          {type_money: "30", type_name: "满399可用"},
          {type_money: "30", type_name: "满499可用"}

        ],
        checke: true,
        warminfo: false,
        warmtext: "请填写11位的正确手机号"
      }
    },
    methods: {
      getCookie: function (GXW_user_id) {
        if (document.cookie.length > 0) {
          var c_start = document.cookie.indexOf(GXW_user_id + "=")
          if (c_start != -1) {
            c_start = c_start + GXW_user_id.length + 1
            var c_end = document.cookie.indexOf(";", c_start)
            if (c_end == -1) c_end = document.cookie.length
            return unescape(document.cookie.substring(c_start, c_end))
          }
        }
        return null
      },
      getCode(){
        if (this.checke == true) {
          if ((/^1[3|4|5|7|8|6][0-9]{9}$/.test(this.tel))) {
            this.checke = false;
            this.warminfo = false
            this.acode = 60;
            let a = this.acode;
            this.acode = "60秒再获取";
            let timer = setInterval(() => {
              a--;
              this.acode = a + "秒再获取";
              if (this.acode == "0秒再获取") {
                clearInterval(timer);
                this.acode = "获取验证码";
                this.checke = true;
              }
            }, 1000)

            axios.post('https://m.gxw520.com/user/sms/send?query={"mobile":' + '"' + this.tel + '"' + "," + '"flag":"login"' + "}").then(response => {

            })
          } else {
            this.warminfo = true
          }
        }
      },

      rightCode(){
        var nowThis = this
        if ((/^1[3|4|5|7|8][0-9]{9}$/.test(this.tel))) {
          axios.post('https://m.gxw520.com/user/index/changephone?query={"userid":' + '"' + this.id_num + '"' + "," + '"tel":' + '"' + this.tel + '"' + "," + '"smscode":' + '"' + this.s_code + '"' + "}")
            .then(function (response) {
              if (response.data.result == true) {
                nowThis.write_tel_div = false
                nowThis.is_confirm = true
                axios.get('https://m.gxw520.com/user/index/getXinBonus?query={"user_id":' + '"' + nowThis.id_num + '"'+ "}")
                  .then(function (res) {
                             if(res.data.result==true){

                             }else {

                             }
                  })
              } else {
                nowThis.warminfo = true
                /* nowThis.warmtext = response.data.message*/
                if (response.data.message == "请先完成实名认证!") {
                  nowThis.warmtext = "您的手机号已经绑定过了！"
                } else {
                  nowThis.warmtext = response.data.message
                }

              }
            })
        } else {

          nowThis.warminfo = true
          nowThis.warmtext = "请输入正确的手机号码!";
        }
      },
      go_coupon(){
        if (window.O2OHome) {
          O2OHome.myCoupon()
        }else{
             window.location.href="https://www.gxw520.com/mobile/download.php"
        }
      },
      go_for_love(){
        window.location.href="cn/forlove_participate.html?"+this.reload_isapp
      }
    },

    created(){
      let nowThis = this
      let my_href = window.location.href
      let reload_isapp_index = my_href.lastIndexOf("?")
               if(reload_isapp_index >-1){
                 let reload_isapp=my_href.substring(reload_isapp_index+ 1)
                 this.reload_isapp=reload_isapp  //获取？后面所以参数
               }
      let url_index = my_href.lastIndexOf("&")
      if (url_index > -1) {
        let user_id = my_href.substring(url_index + 1)
        let id_num_index = user_id.lastIndexOf("=")
        let id_num = user_id.substring(id_num_index + 1)
        this.id_num = id_num
      } else {
        this.id_num = this.getCookie("GXW_user_id")
      }

      document.title = "新人专享页"
      /* axios.get('http://192.168.1.10/gxw_mobile3/user/index/bonusList?query={"type":"2"}')
       /!* axios.get('/api/bonus_list')*!/
       .then(function (response) {
       nowThis.bonus_list = response.data.bonus_list
       })*/

    }
  }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
  @import "new-people.scss";

</style>
