(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{586:function(i,e,t){},640:function(i,e,t){"use strict";t(586)},663:function(i,e,t){"use strict";t.r(e);var s={name:"video-page",components:{},data:function(){return{dialogViewVisible:!0,videos:[{index:1,title:"",src:"/assets/box/video/253203465-1-208.mp4"},{index:2,title:"",src:"/assets/box/video/133956117-1-208.mp4"}]}},created:function(){},computed:{},methods:{actionVideo:function(i){this.curVideo=this.videos[i-1]}}},o=(t(640),t(2)),n=Object(o.a)(s,(function(){var i=this,e=i.$createElement,t=i._self._c||e;return t("div",[t("el-dialog",{attrs:{title:"FUN VIDEO",fullscreen:"","show-close":!1,"close-on-click-modal":!1,"close-on-press-escape":!1,visible:i.dialogViewVisible,"append-to-body":""},on:{"update:visible":function(e){i.dialogViewVisible=e}}},[t("div",{attrs:{id:"main"}},[t("video",{attrs:{id:"media",width:"75%",controls:"",autoplay:""}},[t("source",{attrs:{src:i.$withBase(this.videos[0].src),type:"video/mp4"}})]),i._v(" "),t("div",{staticClass:"video-list"},i._l(i.videos,(function(e){return t("div",{key:e.index,staticClass:"video-item",on:{click:function(t){return i.actionVideo(e.index)}}},[t("video",{attrs:{id:"media",width:"100%"}},[t("source",{attrs:{src:i.$withBase(e.src),type:"video/mp4"}})])])})),0)])])],1)}),[],!1,null,"266eaa66",null);e.default=n.exports}}]);