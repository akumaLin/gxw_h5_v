<template>
  <div class="hello" style="height: 100vh">
    <div class="tab_wrap">
      <ul>
        <li><a href="cn/active_homepage.html">520狂欢</a></li>
        <li><a href="cn/lovegift_card.html">集爱赠卡</a></li>
        <li><a href="cn/forlove_participate.html">为爱益行</a></li>
        <li>
          <a href="index.html#/hello">我的奖品</a>
          <div class="line_bot_div"></div>
        </li>
      </ul>
    </div>
    <div class="no_div"></div>

  </div>
</template>

<script>

  import axios from "axios"
  export default {
    name: 'hello',

    data () {
      return {
        type:"",
        code:""
      }
    },

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .tab_wrap {
    position:fixed;
    z-index: 9999;
    top: 0;
    transform: translateY(0);
    width: 100%;
    height: 3.519rem;
    background: #E32C2C !important;
 /*   padding-top: 3vw;*/

  }
  .tab_wrap ul{
    overflow: hidden;
   /* margin-top: 5px;*/
    height:3.519rem;
    line-height: 3.519rem;
  }
  .tab_wrap li{
    float: left;
    width: 25%;
    text-align: center;
  }
  .tab_wrap li a{
    font-size: 1.26rem;
    font-weight:bolder;
    font-family: '.PingFangSC-Regular';

    color: #E8E8E8;
    letter-spacing: -0.39px;

  }
  .tab_wrap li:last-child {
    position: relative;

  }

  .line_bot_div{
    height: 0.12rem;
    width: 70%;
    background: white;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    bottom: 0.6rem;
  }
  .no_div {
    height: 3.519rem
  }

  .tab_home {
    background: #E32C2C !important;
    height:2.334rem;
    width: 27rem !important;
    margin: auto;

  }

  .mu-tab-link-highlight {
    background-color: white !important;
  }

  .mu-tab-text {
    font-size: 1.05rem !important;
    white-space: nowrap;
  }

 /* .tab-item-height {
    height: 92.22vh;
    !* height: 85.22vh;*!
    -webkit-overflow-scrolling: touch;
    overflow: scroll;
  }*/
  .my_prize_height{
    height: 85%;
  }
</style>
