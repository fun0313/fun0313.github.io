(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{597:function(t,e,n){},647:function(t,e,n){"use strict";n(597)},672:function(t,e,n){"use strict";n.r(e);n(80),n(37),n(49),n(158),n(159);function a(t){return("00"+t).substr(t.length)}var s={poweredBy:"数据来自Funtale量化交易平台"},r={data:function(){return{syncDate:1635361360695,baseData:s,data:[{index:1,name:"合约-趋势马丁",status:"running",account:{platform:"Okex",count:10,assetWorth:20},totalWorth:10,start:"2021-01-01",end:"至今"},{index:2,name:"现货-动态平衡策略",status:"stop",account:{platform:"Okex",count:10,assetWorth:20},totalWorth:10,start:"2021-01-01",end:"至今"},{index:3,name:"合约-网格+马丁策略",status:"stop",account:{platform:"Okex",count:10,assetWorth:20},totalWorth:10,start:"2021-01-01",end:"至今"}]}},filters:{formatDate:function(t){return function(t,e){/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length)));var n={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds()};for(var s in n)if(new RegExp("(".concat(s,")")).test(e)){var r=n[s]+"";e=e.replace(RegExp.$1,1===RegExp.$1.length?r:a(r))}return e}(new Date(t),"yyyy-MM-dd hh:mm:ss")}}},o=(n(647),n(2)),c=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"powered-by"},[n("div",{staticClass:"sync-date"},[t._v("\n            最新同步时间："+t._s(t._f("formatDate")(t.syncDate))+"\n        ")]),t._v(" "),n("div",{staticClass:"by"},[t._v("\n            ——"+t._s(t.baseData.poweredBy)+"\n        ")])]),t._v(" "),t._l(t.data,(function(e){return n("div",{key:e.index,staticClass:"item"},[t._v("\n        "+t._s(e.name)+"\n    ")])}))],2)}),[],!1,null,"7d2fe2f2",null);e.default=c.exports}}]);