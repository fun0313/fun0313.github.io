(window.webpackJsonp=window.webpackJsonp||[]).push([[6,8,34,35,36,37,38,39,40],{543:function(t,e,n){},546:function(t,e,n){"use strict";n.r(e);var i={name:"form-list",data:function(){return{}},computed:{},methods:{}},o=n(2),s=Object(o.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("\n    formList\n")])}),[],!1,null,"48354ee8",null);e.default=s.exports},547:function(t,e,n){"use strict";n.r(e);var i={name:"process-list",data:function(){return{}},computed:{},methods:{}},o=n(2),s=Object(o.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("\n    processList\n")])}),[],!1,null,"c7269892",null);e.default=s.exports},548:function(t,e,n){"use strict";n.r(e);var i={name:"page-list",data:function(){return{}},computed:{},methods:{}},o=n(2),s=Object(o.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("\n    pageList\n")])}),[],!1,null,"28e4c1a7",null);e.default=s.exports},549:function(t,e,n){"use strict";n.r(e);var i={name:"web-list",data:function(){return{}},computed:{},methods:{}},o=n(2),s=Object(o.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("\n    webList\n")])}),[],!1,null,"5ba76e52",null);e.default=s.exports},550:function(t,e,n){"use strict";n.r(e);var i={name:"mobile-list",data:function(){return{}},computed:{},methods:{}},o=n(2),s=Object(o.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("\n    mobileList\n")])}),[],!1,null,"5adcdece",null);e.default=s.exports},551:function(t,e,n){"use strict";n.r(e);var i={name:"setting",data:function(){return{}},computed:{},methods:{}},o=n(2),s=Object(o.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("\n    setting\n")])}),[],!1,null,"5e1d0792",null);e.default=s.exports},552:function(t,e,n){"use strict";n.r(e);var i={name:"report-list",data:function(){return{}},computed:{},methods:{}},o=n(2),s=Object(o.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("\n    reportList\n")])}),[],!1,null,"0fd71d58",null);e.default=s.exports},565:function(t,e,n){"use strict";n(543)},596:function(t,e,n){},607:function(t,e,n){"use strict";n.r(e);n(38),n(271);var i=n(546),o=n(547),s=n(548),l=n(549),c=n(550),r=n(551),u=n(552),a={name:"design-main",components:{FormList:i.default,ProcessList:o.default,PageList:s.default,WebList:l.default,MobileList:c.default,Setting:r.default,ReportList:u.default},data:function(){return{menus:[{index:"1",icon:"",title:"应用",items:[{index:"1-1",icon:"el-icon-document-copy",title:"报表",component:"report-list"}]},{index:"2",icon:"",title:"设计",items:[{index:"2-1",icon:"el-icon-s-grid",title:"表单",component:"form-list"},{index:"2-2",icon:"el-icon-document-copy",title:"报表",component:"report-list"},{index:"2-3",icon:"el-icon-video-play",title:"流程",component:"process-list"},{index:"2-4",icon:"el-icon-document",title:"微页面",component:"page-list"},{index:"2-5",icon:"el-icon-monitor",title:"PC端Web设计",component:"web-list"},{index:"2-6",icon:"el-icon-mobile",title:"Mobile端Web设计",component:"mobile-list"},{index:"2-7",icon:"el-icon-setting",title:"配置",component:"setting"}]}],currentMenu:"report-list"}},computed:{currentMenuComponent:function(){return this.currentMenu}},methods:{select:function(t,e){var n=t.split("-");this.currentMenu=this.menus[n[0]-1].items[n[1]-1].component}}},d=(n(565),n(2)),m=Object(d.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-container",{staticClass:"main_container"},[n("el-aside",{attrs:{width:"200px"}},[n("el-menu",{attrs:{"default-active":"1-1"},on:{select:t.select}},t._l(t.menus,(function(e){return n("el-submenu",{key:e.index,attrs:{index:e.index}},[n("template",{slot:"title"},[n("i",{class:e.icon}),t._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.title))])]),t._v(" "),t._l(e.items,(function(e){return n("el-menu-item",{key:e.index,attrs:{index:e.index}},[n("i",{class:e.icon}),t._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.title))])])}))],2)})),1)],1),t._v(" "),n("el-container",[n("el-main",[n(t.currentMenuComponent,{tag:"component"})],1),t._v(" "),n("el-footer",[t._v("\n        CopyRight 2021@凡尘古月\n    ")])],1)],1)}),[],!1,null,"1596294c",null);e.default=m.exports},646:function(t,e,n){"use strict";n(596)},678:function(t,e,n){"use strict";n.r(e);var i={name:"design-action",components:{DesignMain:n(607).default},data:function(){return{dialogViewVisible:!0}},created:function(){},computed:{},methods:{}},o=(n(646),n(2)),s=Object(o.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("\n  体验功能请点击此处 "),n("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogViewVisible=!0}}},[t._v("在线体验")]),t._v(" "),n("el-dialog",{attrs:{title:"Happy Design",fullscreen:"","show-close":!1,"close-on-click-modal":!1,"close-on-press-escape":!1,visible:t.dialogViewVisible,"append-to-body":""},on:{"update:visible":function(e){t.dialogViewVisible=e}}},[n("DesignMain")],1)],1)}),[],!1,null,"57c3cd88",null);e.default=s.exports}}]);