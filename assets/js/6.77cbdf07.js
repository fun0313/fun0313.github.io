(window.webpackJsonp=window.webpackJsonp||[]).push([[6,8,20,21,22,23,24,25],{533:function(t,e,n){},536:function(t,e,n){"use strict";n.r(e);var i={name:"form-list",data:function(){return{}},computed:{},methods:{}},s=n(2),o=Object(s.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("\n    formList\n")])}),[],!1,null,"48354ee8",null);e.default=o.exports},537:function(t,e,n){"use strict";n.r(e);var i={name:"process-list",data:function(){return{}},computed:{},methods:{}},s=n(2),o=Object(s.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("\n    processList\n")])}),[],!1,null,"c7269892",null);e.default=o.exports},538:function(t,e,n){"use strict";n.r(e);var i={name:"page-list",data:function(){return{}},computed:{},methods:{}},s=n(2),o=Object(s.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("\n    pageList\n")])}),[],!1,null,"28e4c1a7",null);e.default=o.exports},539:function(t,e,n){"use strict";n.r(e);var i={name:"web-list",data:function(){return{}},computed:{},methods:{}},s=n(2),o=Object(s.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("\n    webList\n")])}),[],!1,null,"5ba76e52",null);e.default=o.exports},540:function(t,e,n){"use strict";n.r(e);var i={name:"mobile-list",data:function(){return{}},computed:{},methods:{}},s=n(2),o=Object(s.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("\n    mobileList\n")])}),[],!1,null,"5adcdece",null);e.default=o.exports},541:function(t,e,n){"use strict";n.r(e);var i={name:"setting",data:function(){return{}},computed:{},methods:{}},s=n(2),o=Object(s.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("\n    setting\n")])}),[],!1,null,"5e1d0792",null);e.default=o.exports},543:function(t,e,n){"use strict";n(533)},574:function(t,e,n){},580:function(t,e,n){"use strict";n.r(e);var i=n(536),s=n(537),o=n(538),l=n(539),c=n(540),u=n(541),r={name:"design-main",components:{FormList:i.default,ProcessList:s.default,PageList:o.default,WebList:l.default,MobileList:c.default,Setting:u.default},data:function(){return{menus:[{index:"1",icon:"el-icon-s-grid",title:"表单",component:"form-list"},{index:"2",icon:"el-icon-video-play",title:"流程",component:"process-list"},{index:"3",icon:"el-icon-document",title:"微页面",component:"page-list"},{index:"4",icon:"el-icon-monitor",title:"PC端Web设计",component:"web-list"},{index:"5",icon:"el-icon-mobile",title:"Mobile端Web设计",component:"mobile-list"},{index:"6",icon:"el-icon-setting",title:"配置",component:"setting"}],currentMenu:"form-list"}},computed:{currentMenuComponent:function(){return this.currentMenu}},methods:{select:function(t,e){this.currentMenu=this.menus[t-1].component}}},a=(n(543),n(2)),d=Object(a.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-container",{staticClass:"main_container"},[n("el-aside",{attrs:{width:"200px"}},[n("el-menu",{attrs:{"default-active":"1"},on:{select:t.select}},t._l(t.menus,(function(e){return n("el-menu-item",{key:e.index,attrs:{index:e.index}},[n("i",{class:e.icon}),t._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.title))])])})),1)],1),t._v(" "),n("el-container",[n("el-main",[n(t.currentMenuComponent,{tag:"component"})],1),t._v(" "),n("el-footer",[t._v("\n        CopyRight 2021@凡尘古月\n    ")])],1)],1)}),[],!1,null,"6f9b7072",null);e.default=d.exports},621:function(t,e,n){"use strict";n(574)},636:function(t,e,n){"use strict";n.r(e);var i={name:"design-action",components:{DesignMain:n(580).default},data:function(){return{dialogViewVisible:!1}},computed:{},methods:{}},s=(n(621),n(2)),o=Object(s.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("\n  体验功能请点击此处 "),n("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogViewVisible=!0}}},[t._v("在线体验")]),t._v(" "),n("el-dialog",{attrs:{title:"设计Design",fullscreen:"",visible:t.dialogViewVisible,"append-to-body":""},on:{"update:visible":function(e){t.dialogViewVisible=e}}},[n("DesignMain")],1)],1)}),[],!1,null,"9825e8be",null);e.default=o.exports}}]);