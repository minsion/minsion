import{n as t,h as s,c as a,w as i,i as r,o as e,a as o}from"./index-CE7gXyKD.js";import{r as n,_ as d}from"./watermark.Dpp_Cumi.js";import{_ as l}from"./uni-indexed-list-wx.Y7FQckb4.js";import{_ as u}from"./top-right-tool-wx.D2Qxchdl.js";import{_ as p}from"./_plugin-vue_export-helper.BCo6x5W8.js";import"./uni-badge.BSmtmuwp.js";import"./uni-icons.tBNBx2EM.js";const c=p({data:()=>({list:[]}),onLoad(){},onShow(){this.getflist(),this.$store.dispatch("tabBarpull")},methods:{bindClick(s){t({url:"../personInfo/detail?param="+s.item.data.userId})},getflist(){this.$http.request({url:"/friend/friendList",method:"POST",data:JSON.stringify({}),success:t=>{if(200==t.data.code){for(var s=t.data.data,a=[],i=0;i<s.length;i++){var r=s[i];"10002"!==r.userId&&"10003"!==r.userId&&a.push({name:r.nickName,avatar:r.portrait,userId:r.userId,userType:r.userType,chatNo:r.chatNo})}this.list=this.$fc.sortList({list:a,key:"name"})}}})}},onNavigationBarButtonTap(s){switch(s.index){case 0:this.$refs.trtw.showTab();break;case 1:t({url:"../search/index"})}}},[["render",function(t,p,c,h,m,f){const w=n(s("watermark"),d),x=n(s("uni-indexed-list-wx"),l),k=n(s("top-right-tool-wx"),u),g=r;return e(),a(g,{class:"xw-book"},{default:i((()=>[o(w),o(x,{options:m.list,onClick:f.bindClick},null,8,["options","onClick"]),o(k,{ref:"trtw"},null,512)])),_:1})}]]);export{c as default};
