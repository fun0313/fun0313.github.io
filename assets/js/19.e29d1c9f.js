(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{586:function(e,i,t){},640:function(e,i,t){"use strict";t(586)},663:function(e,i,t){"use strict";t.r(i);var o={name:"video-page",components:{},data:function(){return{dialogViewVisible:!0,videos:[{index:1,title:"",src:"/assets/box/video/348901536-1-208.mp4"},{index:2,title:"",src:"/assets/box/video/253203465-1-208.mp4"},{index:3,title:"",src:"/assets/box/video/133956117-1-208.mp4"}],curPlay:{index:1,title:"",src:"/assets/box/video/348901536-1-208.mp4"}}},mounted:function(){},created:function(){},computed:{},methods:{actionVideo:function(e){this.curPlay=this.videos[e-1],this.$refs.video.load()}}},s=(t(640),t(2)),n=Object(s.a)(o,(function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",[t("el-dialog",{attrs:{title:"FUN VIDEO",fullscreen:"","show-close":!1,"close-on-click-modal":!1,"close-on-press-escape":!1,visible:e.dialogViewVisible,"append-to-body":""},on:{"update:visible":function(i){e.dialogViewVisible=i}}},[t("div",{attrs:{id:"main"}},[t("video",{ref:"video",attrs:{id:"video",width:"75%",controls:"",autoplay:"",loop:""}},[t("source",{attrs:{src:e.$withBase(this.curPlay.src),type:"video/mp4"}}),e._v("\n            Your browser does not support the video tag.\n          ")]),e._v(" "),t("div",{staticClass:"video-list"},e._l(e.videos,(function(i){return t("div",{key:i.index,staticClass:"video-item",on:{click:function(t){return e.actionVideo(i.index)}}},[t("video",{attrs:{id:"media",width:"100%"}},[t("source",{attrs:{src:e.$withBase(i.src),type:"video/mp4"}})])])})),0)])])],1)}),[],!1,null,"853a3206",null);i.default=n.exports}}]);