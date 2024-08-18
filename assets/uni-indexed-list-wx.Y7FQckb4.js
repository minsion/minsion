import{h as e,o as t,c as s,w as i,b as o,t as l,j as a,N as n,P as d,O as c,a as u,i as h,d as r,n as m,ad as f,z as p,y as x,C as k,x as w,S as _,k as y}from"./index-CE7gXyKD.js";import{_ as v}from"./uni-badge.BSmtmuwp.js";import{r as g}from"./watermark.Dpp_Cumi.js";import{_ as b}from"./uni-icons.tBNBx2EM.js";import{_ as C}from"./_plugin-vue_export-helper.BCo6x5W8.js";const I=C({name:"UniIndexedListWX",components:{indexedListItem:C({name:"UniIndexedListWX",emits:["itemClick"],props:{loaded:{type:Boolean,default:!1},idx:{type:Number,default:0},list:{type:Object,default:()=>({})},showSelect:{type:Boolean,default:!1}},methods:{onClick(e,t){this.$emit("itemClick",{idx:e,index:t})}}},[["render",function(m,f,p,x,k,w){const _=h,y=g(e("uni-icons"),b),v=r;return t(),s(_,null,{default:i((()=>[p.loaded||p.list.itemIndex<15?(t(),s(_,{key:0,class:"xw-book-wrapper"},{default:i((()=>[p.list.items&&p.list.items.length>0?(t(),s(_,{key:0,class:"xw-book-sort"},{default:i((()=>[o(l(p.list.key),1)])),_:1})):a("",!0)])),_:1})):a("",!0),(p.loaded||p.list.itemIndex<15)&&p.list.items&&p.list.items.length>0?(t(),s(_,{key:1,class:"xw-book-userlist"},{default:i((()=>[(t(!0),n(d,null,c(p.list.items,((e,n)=>(t(),s(_,{key:n},{default:i((()=>[u(_,{class:"xw-book-user",onClick:e=>w.onClick(p.idx,n)},{default:i((()=>[p.showSelect?(t(),s(_,{key:0,class:"xw-book-user-checked"},{default:i((()=>[u(y,{type:e.checked?"checkbox-filled":"circle",color:e.checked?"#09C160":"#C0C0C0",size:"28"},null,8,["type","color"])])),_:2},1024)):a("",!0),u(v,{class:"xw-book-user-avatar",src:e.data.avatar,mode:"aspectFill"},null,8,["src"]),u(_,{class:"xw-book-user-name"},{default:i((()=>[o(l(e.data.name),1)])),_:2},1024)])),_:2},1032,["onClick"])])),_:2},1024)))),128))])),_:1})):a("",!0)])),_:1})}],["__scopeId","data-v-7079be9b"]])},emits:["click"],props:{options:{type:Array,default:()=>[]},showSelect:{type:Boolean,default:!1},showAdd:{type:Boolean,default:!0}},data:()=>({lists:[],winHeight:0,itemHeight:0,winOffsetY:0,touchmove:!1,touchmoveIndex:-1,scrollViewId:"",touchmovable:!0,loaded:!1,isPC:!1}),computed:{friendApply(){return this.$store.state.friendApply},addlist(){return[{title:"新的朋友",path:"../../wx/search-friends/index",num:this.$store.state.friendApply.count?this.$store.state.friendApply.count:"",icon:"jiahaoyou",color:"#FB9E3E"},{title:"群聊",path:"../../wx/groupInfo/grouplist",icon:"qunl",num:"",color:"#0ABF62"}]}},watch:{options:{handler:function(){this.setList()},deep:!0}},mounted(){this.isPC=this.IsPC(),setTimeout((()=>{this.setList()}),50),setTimeout((()=>{this.loaded=!0}),300)},methods:{gopath(e){m({url:e.path})},setList(){this.lists=[],this.options.forEach(((e,t)=>{if(0===e.data.length)return;let s=t,i=e.data.map((s=>{let i={};return i.key=e.letter,i.data=s,i.itemIndex=t,t++,i.checked=!!s.checked&&s.checked,i}));this.lists.push({title:e.letter,key:e.letter,items:i,itemIndex:s})})),f().in(this).select("#list").boundingClientRect().exec((e=>{this.winOffsetY=e[0].top,this.winHeight=e[0].height,this.itemHeight=this.winHeight/this.lists.length}))},touchStart(e){this.touchmove=!0;let t=this.isPC?e.pageY:e.touches[0].pageY,s=Math.floor((t-this.winOffsetY)/this.itemHeight);this.lists[s]&&(this.scrollViewId="uni-indexed-list-"+s,this.touchmoveIndex=s)},touchMove(e){let t=this.isPC?e.pageY:e.touches[0].pageY,s=Math.floor((t-this.winOffsetY)/this.itemHeight);if(this.touchmoveIndex===s)return!1;this.lists[s]&&(this.scrollViewId="uni-indexed-list-"+s,this.touchmoveIndex=s)},touchEnd(){this.touchmove=!1},mousedown(e){this.isPC&&this.touchStart(e)},mousemove(e){this.isPC&&this.touchMove(e)},mouseleave(e){this.isPC&&this.touchEnd(e)},IsPC(){var e=navigator.userAgent,t=["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"],s=!0;for(let i=0;i<t.length-1;i++)if(e.indexOf(t[i])>0){s=!1;break}return s},onClick(e){let{idx:t,index:s}=e,i={};for(let l in this.lists[t].items[s])i[l]=this.lists[t].items[s][l];let o=[];this.showSelect&&(this.lists[t].items[s].checked=!this.lists[t].items[s].checked,this.lists.forEach(((e,t)=>{e.items.forEach(((e,s)=>{if(e.checked){let e={};for(let i in this.lists[t].items[s])e[i]=this.lists[t].items[s][i];o.push(e)}}))}))),this.$emit("click",{item:i,select:o})}}},[["render",function(r,m,f,b,C,I){const P=h,S=g(e("uni-badge"),v),M=p("indexed-list-item"),j=_,A=y;return t(),s(P,{class:"uni-indexed-list",ref:"list",id:"list"},{default:i((()=>[u(j,{"scroll-into-view":C.scrollViewId,class:"uni-indexed-list__scroll","scroll-y":""},{default:i((()=>[f.showAdd?(t(),s(P,{key:0,class:"xw-book-add"},{default:i((()=>[(t(!0),n(d,null,c(I.addlist,((e,a)=>(t(),s(P,{class:"xw-book-add-item",key:a,onClick:t=>I.gopath(e)},{default:i((()=>[e.num?(t(),s(S,{key:0,text:e.num+"",absolute:"rightTop"},{default:i((()=>[u(P,{class:"xw-book-add-icon"},{default:i((()=>[u(P,{class:"wxfont jiahaoyou"})])),_:1})])),_:2},1032,["text"])):(t(),s(P,{key:1,class:"xw-book-add-icon",style:x({background:e.color})},{default:i((()=>[u(P,{class:"wxfont jiahaoyou"})])),_:2},1032,["style"])),u(P,{class:"xw-book-add-item-text"},{default:i((()=>[o(l(e.title),1)])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:1})):a("",!0),(t(!0),n(d,null,c(C.lists,((e,o)=>(t(),s(P,{key:o,id:"uni-indexed-list-"+o},{default:i((()=>[u(M,{list:e,loaded:C.loaded,idx:o,showSelect:f.showSelect,onItemClick:I.onClick},null,8,["list","loaded","idx","showSelect","onItemClick"])])),_:2},1032,["id"])))),128))])),_:1},8,["scroll-into-view"]),u(P,{class:"uni-indexed-list__menu",onTouchstart:I.touchStart,onTouchmove:k(I.touchMove,["stop","prevent"]),onTouchend:I.touchEnd,onMousedown:k(I.mousedown,["stop"]),onMousemove:k(I.mousemove,["stop","prevent"]),onMouseleave:k(I.mouseleave,["stop"])},{default:i((()=>[(t(!0),n(d,null,c(C.lists,((e,a)=>(t(),s(P,{key:a,class:w(["uni-indexed-list__menu-item",C.touchmoveIndex==a?"uni-indexed-list__menu--active":""])},{default:i((()=>[u(A,{class:w(["uni-indexed-list__menu-text",C.touchmoveIndex==a?"uni-indexed-list__menu-text--active":""])},{default:i((()=>[o(l(e.key),1)])),_:2},1032,["class"])])),_:2},1032,["class"])))),128))])),_:1},8,["onTouchstart","onTouchmove","onTouchend","onMousedown","onMousemove","onMouseleave"]),C.touchmove?(t(),s(P,{key:0,class:"uni-indexed-list__alert-wrapper"},{default:i((()=>[u(A,{class:"uni-indexed-list__alert"},{default:i((()=>[o(l(C.lists[C.touchmoveIndex].key),1)])),_:1})])),_:1})):a("",!0)])),_:1},512)}],["__scopeId","data-v-5426d5bb"]]);export{I as _};
