<template>
  <div id="home">
    <hello class="top_my_prize"></hello>
    <myPrize class="my_prize_height"></myPrize>
    <ul class="toolbar">
      <li>
        <router-link to="/">
          <!--  <p  class="tab_text tab_text_icon"><i class="tab_bot iconfont icon-520"></i></p>-->
          <p class="tab_text tab_text_icon"><img src="../../assets/images/520_icon.png" alt="" class="tc_img"></p>
          <p class="tab_text">520</p>
        </router-link>
      </li>
      <li>
        <a href="https://www.gxw520.com/mobile/index.php?r=site">
          <!--<p  class="tab_text tab_text_icon"><i class="tab_bot iconfont icon-shangcheng"></i></p>-->
          <p class="tab_text tab_text_icon"><img src="../../assets/images/sc.png" alt="" class="tc_img"></p>
          <p class="tab_text">商城</p>
        </a>
      </li>
      <li>
        <a href="https://o.gxw520.com/mobile/index/index">
          <!--  <p  class="tab_text tab_text_icon"><i class="tab_bot iconfont icon-tongcheng"></i></p>-->
          <p class="tab_text tab_text_icon"><img src="../../assets/images/tc.png" alt="" class="tc_img"></p>
          <p class="tab_text">同城</p>
        </a>
      </li>
      <li>
        <a href="https://www.gxw520.com/mobile/index.php?r=user">
          <!--<p  class="tab_text tab_text_icon"><i class="tab_bot iconfont icon-iconfontwode"></i></p>-->
          <p class="tab_text tab_text_icon"><img src="../../assets/images/me.png" alt="" class="tc_img"></p>
          <p class="tab_text">我的</p>
        </a>
      </li>
    </ul>
  </div>
</template>
<script type="text/ecmascript-6">
  import  hello from "./Hello.vue"
  import myPrize from "@/pages/my-prize/my-prize.vue"
  export default {
    name: 'home',
    data(){
      return {
        id_num: "",
      }
    }
    , components: {
        hello
      , myPrize
    },
    created(){
      this.id_num = this.getCookie("GXW_user_id")

        if(this.id_num==null ||this.id_num==0){
       window.location.href=this.gxwloginUrl + 'mobile/index.php?r=user/login&back_act=' + this.hostUrl + 'love/index.html#/home'
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
    }
  }
</script>
<style scoped>
  /*  @font-face {
      font-family: 'iconfont';  !* project id 297323 *!
      src: url('//at.alicdn.com/t/font_3g00avsyif2h85mi.eot');
      src: url('//at.alicdn.com/t/font_3g00avsyif2h85mi.eot?#iefix') format('embedded-opentype'),
      url('//at.alicdn.com/t/font_3g00avsyif2h85mi.woff') format('woff'),
      url('//at.alicdn.com/t/font_3g00avsyif2h85mi.ttf') format('truetype'),
      url('//at.alicdn.com/t/font_3g00avsyif2h85mi.svg#iconfont') format('svg');
    }*/
  .app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  ::-webkit-scrollbar {
    display: none
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: transparent
  }

  ::-webkit-scrollbar-thumb:active {
    background-color: transparent
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
  }

  /*  .top_prize{
      position: fixed;
      bottom: 0;

    }*/


  .toolbar {
    overflow: hidden;
    position: fixed;
    bottom: 0;
    transform: translateY(0);
    z-index: 9999;
    width: 100%;
    border-top: 1px solid #E6E6E6;
    background: white;
  }
.my_prize_height{
  position: absolute;
  top:3.519rem;
  height: 82.5%;
  overflow: scroll;
}
  .toolbar li {
    height: 3.918rem;
    float: left;
    width: 25%;
  }

  .toolbar li a {
    display: block;

    height: 100%;
  }

  .tab_text {
    text-align: center;
    color: #929292;
    font-size: 0.9rem;

  }

  .tab_text_icon {
    margin-bottom: 0.3rem;
  }

  .tab_bot {
    font-size: 1.8rem
  }

  .router-link-active .tab_text {
    color: #E22E2E;
  }

  .tc_img {
    display: block;
    /*height:5.8vw ;
    width: 6vw;*/
    width: 2.1rem;
    height: 5.5vw;
    margin: auto;
    margin-top: 1.8vw;
    margin-bottom: 1vh;
  }
</style>
