(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{600:function(t,e,i){},652:function(t,e,i){"use strict";i(600)},684:function(t,e,i){"use strict";i.r(e);i(79);var n=i(233),r=i.n(n),s={name:"demo",data:function(){return{resizeOption:{edges:{left:!0,right:!0,bottom:!0,top:!0}},dragOption:{modifiers:[r.a.modifiers.restrictRect({restriction:"parent",endOnly:!0})]},x:0,y:0,w:200,h:200}},computed:{style:function(){return{height:"".concat(this.h,"px"),width:"".concat(this.w,"px"),transform:"translate(".concat(this.x,"px, ").concat(this.y,"px)")}}},methods:{dragmove:function(t){this.x+=t.dx,this.y+=t.dy},resizemove:function(t){this.w=t.rect.width,this.h=t.rect.height,this.x+=t.deltaRect.left,this.y+=t.deltaRect.top}}},o=(i(652),i(2)),a=Object(o.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("interact",{staticClass:"resize-drag",style:this.style,attrs:{draggable:"",dragOption:this.dragOption,resizable:"",resizeOption:this.resizeOption},on:{dragmove:this.dragmove,resizemove:this.resizemove}},[this._v("\n    Drag and drop, resize from any edge or corner\n  ")])],1)}),[],!1,null,"5e79cfaf",null);e.default=a.exports}}]);