(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{597:function(t,e,a){},647:function(t,e,a){"use strict";a(597)},672:function(t,e,a){"use strict";a.r(e);a(80),a(37),a(49),a(158),a(159);function n(t){return("00"+t).substr(t.length)}var s={date:1634198567997,poweredBy:"数据来自Funtale量化交易平台"},r={data:function(){return{baseData:s,data:[{index:1,name:"合约-趋势马丁",status:"running",account:{platform:"Okex",count:10,assetWorth:20},totalWorth:10,start:"2021-01-01",end:"至今"},{index:2,name:"现货-动态平衡策略",status:"stop",account:{platform:"Okex",count:10,assetWorth:20},totalWorth:10,start:"2021-01-01",end:"至今"},{index:3,name:"合约-网格+马丁策略",status:"stop",account:{platform:"Okex",count:10,assetWorth:20},totalWorth:10,start:"2021-01-01",end:"至今"}]}},filters:{formatDate:function(t){return function(t,e){/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length)));var a={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds()};for(var s in a)if(new RegExp("(".concat(s,")")).test(e)){var r=a[s]+"";e=e.replace(RegExp.$1,1===RegExp.$1.length?r:n(r))}return e}(new Date(t),"yyyy-MM-dd hh:mm:ss")}}},o=(a(647),a(2)),u=Object(o.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"powered-by"},[a("div",{staticClass:"sync-date"},[t._v("\n            最新同步时间："+t._s(t._f("formatDate")(t.baseData.date))+"\n        ")]),t._v(" "),a("div",{staticClass:"by"},[t._v("\n            ——"+t._s(t.baseData.poweredBy)+"\n        ")])]),t._v(" "),t._l(t.data,(function(e){return a("div",{key:e.index,staticClass:"item"},[t._v("\n        "+t._s(e.name)+"\n    ")])}))],2)}),[],!1,null,"5a6b42d0",null);e.default=u.exports}}]);