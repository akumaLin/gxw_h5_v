<template>
  <div class="my-prize-four">
    <p class="p-title">我邀请的用户</p>
    <a class="sort-more" v-if="!shareUser[0].new_user_id" style="display: inline-block" @touchstart="toShare">去分享></a>
    <a class="sort-more"  v-else @touchstart="more" style="display: inline-block" >更多></a>
    <ul class="my-user">
      <li v-for="item in  shareUser" :class="{bigwidh:!shareUser[0].new_user_id}">
        <div class="user-head" style="background-size: 100% 100%" :style="{backgroundImage: 'url(' + item.avatar + ')'}" v-if="item.avatar"></div>
        <div class="user-head null_people" v-if="!item.avatar"></div>
        <span class="name">{{item.username}}</span>
      </li>
    </ul>
  </div>
</template>
<script type="text/ecmascript-6">
  import axios from 'axios';
    export default {
        name: 'myPrizeFour',
        props:["shareUser","app_num_index","id_num"],
         data(){
            return{
                my_code:""
            }
         },
         created(){
         /*  let myhref=window.location.href
             if(this.getCookie("GXW_code")!=0||this.getCookie("GXW_code")!=null){
               this.code_id=this.getCookie("GXW_code")
             } else if(myhref.indexOf("code_id")!=-1){
                let code_id=myhref.substring(myhref.indexOf("code_id")+8)
                this.code_id=code_id
           }else{

           }*/
           var nowThis=this
           axios.get(nowThis.hostUrl+'/Shop/Loves/is_user_pass?query={"user_id":' + this.id_num + '}')
             .then(function (res) {
               nowThis.my_code=res.data.code
             })


         },
       methods:{
            more(){
              if(window.O2OHome){
                O2OHome.myRequest ()
              }else {
                top.location.href=this.hostUrl+"mobile/index.php?r=user"//更多邀请要跳转的绝对路径
              }
            },
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


            toShare(){
              if(window.O2OHome){
                  if(this.app_num_index==1){
                    O2OHome.share([this.hostUrl+"/love/images/520.a2822b5.png",this.hostUrl+"/love/cn/active_homepage.html?code="+this.my_code,"赶快加入我们活动吧"])
                  }else {
                    O2OHome.share(this.hostUrl+"/love/images/520.a2822b5.png",this.hostUrl+"/love/cn/active_homepage.html?code="+this.my_code,"赶快加入我们活动吧")
                  }

              }else {
               /* window.location.href="http://www.baidu.com"//去分享要跳转的绝对路径*/
                this.$emit('a_app', true);
              }
            }
       }
    }
</script>
<style lang="scss" rel="stylesheet/scss">
  @import "my-prize-four.scss";
.bigwidh{
  width: 100%!important;
}

</style>
