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
html,body{
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    height: 100%;
    width: 100%;
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

  overflow: auto;
  -webkit-overflow-scrolling: touch;
}

  .p-title{
    width:16.56rem;
    height:1.518rem;
    display: block;
    margin: auto;
    background: url("assets/images/title@2x.png")no-repeat;
    background-size: 100% 100%;
    text-align: center;
    margin-top:27px;
    font-family: '.PingFangSC-Semibold';
    font-size:1.5rem;
    color: #FE4744;
  }
  .sort-more{
    font-family: '.PingFangSC-Regular';
    font-size: 1rem;
    color: #FE4744;
    letter-spacing: 0;
    position: absolute;
    right: 0.9rem;
    top: 0.39rem;
    display: block;
  }
</style>
