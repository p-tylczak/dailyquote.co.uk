(function(e){function t(t){for(var a,r,i=t[0],c=t[1],d=t[2],l=0,h=[];l<i.length;l++)r=i[l],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&h.push(n[r][0]),n[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);u&&u(t);while(h.length)h.shift()();return o.push.apply(o,d||[]),s()}function s(){for(var e,t=0;t<o.length;t++){for(var s=o[t],a=!0,r=1;r<s.length;r++){var c=s[r];0!==n[c]&&(a=!1)}a&&(o.splice(t--,1),e=i(i.s=s[0]))}return e}var a={},n={app:0},o=[];function r(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"474eb415"}[e]+".js"}function i(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.e=function(e){var t=[],s=n[e];if(0!==s)if(s)t.push(s[2]);else{var a=new Promise((function(t,a){s=n[e]=[t,a]}));t.push(s[2]=a);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=r(e);var d=new Error;o=function(t){c.onerror=c.onload=null,clearTimeout(l);var s=n[e];if(0!==s){if(s){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",d.name="ChunkLoadError",d.type=a,d.request=o,s[1](d)}n[e]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(t)},i.m=e,i.c=a,i.d=function(e,t,s){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(s,a,function(t){return e[t]}.bind(null,a));return s},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],d=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=d;o.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"034f":function(e,t,s){"use strict";var a=s("85ec"),n=s.n(a);n.a},3821:function(e,t,s){"use strict";var a=s("6d08"),n=s.n(a);n.a},4678:function(e,t,s){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(e){var t=o(e);return s(t)}function o(e){if(!s.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}n.keys=function(){return Object.keys(a)},n.resolve=o,e.exports=n,n.id="4678"},4982:function(e,t,s){"use strict";var a=s("f33f"),n=s.n(a);n.a},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},o=[],r=(s("034f"),s("2877")),i={},c=Object(r["a"])(i,n,o,!1,null,null,null),d=c.exports,l=(s("d3b7"),s("8c4f")),u=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"home"},[e.quote&&e.quote.text?s("div",[s("div",{staticClass:"top-text-container"},[s("div",{staticClass:"settings-container"},[s("font-awesome-icon",{attrs:{icon:"cog",size:"2x",spin:"",inverse:""},on:{click:function(t){e.isChangingSettings=!0}}}),s("p",{staticClass:"refresh-rate-text"},[e._v(e._s(e.selectedRefreshOption.text))])],1),s("div",{staticClass:"time-text thick"},[e._v(e._s(e.showTime?e.currentMomentData.cTime:""))]),e.showDay&&!e.showDate?s("div",{staticClass:"date-text"},[e._v(e._s(e.currentMomentData.cFullDay))]):s("div",{staticClass:"date-text"},[e._v(e._s(e.showDay?e.currentMomentData.cDay:"")+e._s(e.showDay&&e.showDate?", ":"")+e._s(e.showDate?e.currentMomentData.cDate:""))])]),s("div",{staticClass:"author-text-container"},[s("h6",{staticClass:"author-text"},[e._v("[ "+e._s(e.quote.author)+" ]")])]),s("div",{staticClass:"quote-text-container"},[s("h1",{staticClass:"quote-text thick"},[s("b",[e._v(e._s(e.quote.text))])])])]):s("div",[e._m(0)]),e.isChangingSettings?s("settings-modal",{attrs:{refreshOption:e.selectedRefreshOption,showTime:e.showTime,showDate:e.showDate,showDay:e.showDay},on:{cancel:function(t){e.isChangingSettings=!1},confirm:e.settingsChanged}}):e._e(),s("current-date-time-component",{on:{timeChanged:e.timeChanged}})],1)},h=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"quote-text-container"},[s("div",{staticClass:"quote-text loader"})])}],f=(s("99af"),s("caad"),function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("transition",{attrs:{name:"modal"}},[s("div",{staticClass:"modal-mask"},[s("div",{staticClass:"modal-wrapper"},[s("div",{staticClass:"modal-container"},[s("div",{staticClass:"modal-header"},[e._v("Configuration")]),s("div",{staticClass:"modal-body"},[s("label",{attrs:{for:"refresh-rate-select"}},[e._v("Quote Refresh Rate:")]),s("select",{directives:[{name:"model",rawName:"v-model",value:e.settingsModel.selectedOption,expression:"settingsModel.selectedOption"}],staticClass:"modal-body-child",attrs:{id:"refresh-rate-select"},on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.settingsModel,"selectedOption",t.target.multiple?s:s[0])}}},e._l(e.refreshOptions,(function(t){return s("option",{key:t.value,domProps:{value:t}},[e._v(" "+e._s(t.text)+" ")])})),0),s("span",{staticClass:"modal-body-child"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.settingsModel.showTime,expression:"settingsModel.showTime"}],attrs:{type:"checkbox",id:"time-checkbox"},domProps:{checked:Array.isArray(e.settingsModel.showTime)?e._i(e.settingsModel.showTime,null)>-1:e.settingsModel.showTime},on:{change:function(t){var s=e.settingsModel.showTime,a=t.target,n=!!a.checked;if(Array.isArray(s)){var o=null,r=e._i(s,o);a.checked?r<0&&e.$set(e.settingsModel,"showTime",s.concat([o])):r>-1&&e.$set(e.settingsModel,"showTime",s.slice(0,r).concat(s.slice(r+1)))}else e.$set(e.settingsModel,"showTime",n)}}}),s("label",{attrs:{for:"time-checkbox"}},[e._v("Show Time")])]),s("span",{staticClass:"modal-body-child"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.settingsModel.showDate,expression:"settingsModel.showDate"}],attrs:{type:"checkbox",id:"date-checkbox"},domProps:{checked:Array.isArray(e.settingsModel.showDate)?e._i(e.settingsModel.showDate,null)>-1:e.settingsModel.showDate},on:{change:function(t){var s=e.settingsModel.showDate,a=t.target,n=!!a.checked;if(Array.isArray(s)){var o=null,r=e._i(s,o);a.checked?r<0&&e.$set(e.settingsModel,"showDate",s.concat([o])):r>-1&&e.$set(e.settingsModel,"showDate",s.slice(0,r).concat(s.slice(r+1)))}else e.$set(e.settingsModel,"showDate",n)}}}),s("label",{attrs:{for:"date-checkbox"}},[e._v("Show Date")])]),s("span",{staticClass:"modal-body-child"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.settingsModel.showDay,expression:"settingsModel.showDay"}],attrs:{type:"checkbox",id:"day-checkbox"},domProps:{checked:Array.isArray(e.settingsModel.showDay)?e._i(e.settingsModel.showDay,null)>-1:e.settingsModel.showDay},on:{change:function(t){var s=e.settingsModel.showDay,a=t.target,n=!!a.checked;if(Array.isArray(s)){var o=null,r=e._i(s,o);a.checked?r<0&&e.$set(e.settingsModel,"showDay",s.concat([o])):r>-1&&e.$set(e.settingsModel,"showDay",s.slice(0,r).concat(s.slice(r+1)))}else e.$set(e.settingsModel,"showDay",n)}}}),s("label",{attrs:{for:"day-checkbox"}},[e._v("Show Day of Week")])])]),s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"modal-default-button",on:{click:function(t){return e.$emit("cancel")}}},[e._v("Cancel")]),s("button",{staticClass:"modal-default-button",on:{click:e.confirm}},[e._v("OK")])]),s("p",[s("a",{attrs:{href:"mailto:pavelski.t@gmail.com"}},[s("h6",[e._v("Contact developer")])])])])])])])}),m=[],v={name:"SettingsModal",props:["refreshOption","showTime","showDate","showDay"],created:function(){this.settingsModel.selectedOption=this.refreshOption,this.settingsModel.showTime=this.showTime,this.settingsModel.showDate=this.showDate,this.settingsModel.showDay=this.showDay,this.track()},data:function(){return{refreshOptions:[{text:"refresh every 5 minutes",value:.083334},{text:"refresh every 15 minutes",value:.25},{text:"refresh every 30 minutes",value:.5},{text:"refresh every 1 hour",value:1},{text:"refresh every 2 hours",value:2},{text:"refresh every 4 hours",value:4},{text:"refresh every 6 hours",value:6},{text:"refresh every 12 hours",value:12},{text:"refresh every 24 hours",value:24}],settingsModel:{selectedOption:void 0,showTime:!0,showDay:!0,showDate:!0}}},methods:{confirm:function(){this.$emit("confirm",this.settingsModel)},track:function(){this.$ga.page("/settings-modal")}}},b=v,j=(s("3821"),Object(r["a"])(b,f,m,!1,null,"79b64bd9",null)),p=j.exports,g=s("bc3a"),y=s.n(g),w=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div")},k=[],D=s("c1df"),x=s.n(D),M={name:"CurrentDateTimeComponent",data:function(){return{intervalId:void 0}},created:function(){var e=this;this.refreshDateAndTime(),this.intervalId=setInterval((function(){return e.refreshDateAndTime()}),1e3)},methods:{refreshDateAndTime:function(){this.$emit("timeChanged",{cTime:x()().format("HH:mm:ss"),cDate:x()().format("Do MMM YYYY"),cDay:x()().format("ddd"),cFullDay:x()().format("dddd")})}}},_=M,C=(s("4982"),Object(r["a"])(_,w,k,!1,null,"4df337c6",null)),O=C.exports,I={name:"home",components:{CurrentDateTimeComponent:O,SettingsModal:p},created:function(){var e=this;this.track(),this.retrieveQuoteCount().then((function(t){e.quoteIdMap=e.randomlyAllocatedArray(t.data.ItemCount),e.retrieveQuote(),e.initializeInterval(e.retrieveQuote,e.selectedRefreshOption.value)}))},data:function(){return{apiGatewayUrl:"https://2zztwjimr6.execute-api.eu-west-1.amazonaws.com/prod",quote:void 0,quoteIdMap:void 0,quoteIdIndex:0,intervalId:void 0,isChangingSettings:!1,selectedRefreshOption:{text:"refresh every 24 hours",value:24},currentMomentData:void 0,showTime:!0,showDay:!0,showDate:!0}},methods:{track:function(){this.$ga.page("/")},retrieveQuote:function(){var e=this;y.a.post("".concat(this.apiGatewayUrl,"/quote/").concat(this.quoteIdMap[this.quoteIdIndex]),{},this.config()).then((function(t){e.safeIndexIncrement(),e.quote=t.data.Item}))},retrieveQuoteCount:function(){return y.a.post("".concat(this.apiGatewayUrl,"/quote/count"),{},this.config())},initializeInterval:function(e,t){this.intervalId=setInterval((function(){return e()}),this.toMillis(t))},config:function(){return{headers:{"X-API-KEY":"quvASESLkjh0F0xnsyJV4wFEFqOcIzP5zjbCiOk9"}}},randomlyAllocatedArray:function(e){for(var t,s=[],a=0;a<e;a++){do{t=this.getRandomBetween(1,e)}while(s.length>0&&s.includes(t));s.push(t)}return s},getRandomBetween:function(e,t){return Math.floor(Math.random()*t)+e},safeIndexIncrement:function(){this.quoteIdIndex++,this.quoteIdIndex>=this.quoteIdMap.length&&(this.quoteIdIndex=0)},toMillis:function(e){return 36e5*e},settingsChanged:function(e){this.selectedRefreshOption=e.selectedOption,clearInterval(this.intervalId),this.initializeInterval(this.retrieveQuote,e.selectedOption.value),this.showTime=e.showTime,this.showDate=e.showDate,this.showDay=e.showDay,this.isChangingSettings=!1},timeChanged:function(e){this.currentMomentData=e}}},T=I,z=(s("809a"),Object(r["a"])(T,u,h,!1,null,"6118f292",null)),q=z.exports;a["a"].use(l["a"]);var A=[{path:"/",name:"home",component:q},{path:"/about",name:"about",component:function(){return s.e("about").then(s.bind(null,"f820"))}}],$=new l["a"]({routes:A}),S=$,P=s("ecee"),E=s("c074"),R=s("ad3d"),Q=s("0284"),F=s.n(Q);a["a"].use(F.a,{id:"UA-156327993-1"}),P["c"].add(E["a"]),a["a"].component("font-awesome-icon",R["a"]),a["a"].config.productionTip=!1,new a["a"]({router:S,render:function(e){return e(d)}}).$mount("#app")},"6d08":function(e,t,s){},"809a":function(e,t,s){"use strict";var a=s("82a4"),n=s.n(a);n.a},"82a4":function(e,t,s){},"85ec":function(e,t,s){},f33f:function(e,t,s){}});
//# sourceMappingURL=app.4727bb63.js.map