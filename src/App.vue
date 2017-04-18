<template>
  <div id="app">

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  @import "assets/reset.css";
  html{
    font-size: 1vw;
  }
  ::-webkit-scrollbar{display: none}
  ::-webkit-scrollbar-track{background-color:transparent;}
  ::-webkit-scrollbar-thumb{background-color:transparent;}
  ::-webkit-scrollbar-thumb:hover {background-color:transparent}
  ::-webkit-scrollbar-thumb:active {background-color:transparent}
  a,button,input{
    tap-highlight-color:transparent;
    -webkit-tap-highlight-color:transparent;
    outline: none;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
   width: 100vw;
  padding-bottom: 5vh;
}
  .p-title{
    width:55.2vw;
    height:5.06vw;
    display: block;
    margin: auto;
    background: url("assets/images/title@2x.png")no-repeat;
    background-size: 100% 100%;
    text-align: center;
    margin-top: 27px;
    font-family: '.PingFangSC-Semibold';
    font-size:5rem;
    color: #FE4744;
  }
  .sort-more{
    font-family: '.PingFangSC-Regular';
    font-size: 3rem;
    color: #FE4744;
    letter-spacing: 0;
    position: absolute;
    right: 3vw;
    top: 1.3vw;
  }
</style>
