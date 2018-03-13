webpackJsonp([13],{"+nwc":function(n,t){},0:function(n,t,e){n.exports=e("nplA")},"3J1H":function(n,t){},"3Puz":function(n,t){},BrAt:function(n,t){},N12Q:function(n,t){},OKa4:function(n,t){},R58i:function(n,t){},YBjz:function(n,t,e){"use strict";e.d(t,"b",function(){return u}),e.d(t,"a",function(){return i});var r=window.CONFIG.ui,o=r.host+(80===r.port?"":":"+r.port)+r.path,a=void 0,i=void 0,u=void 0;a=r.ssl?"https://"+o:"http://"+o,i=a+"api/",u=r.ssl?"wss://"+o+"/api":"ws://"+o+"/api"},"bKX+":function(n,t){},dadW:function(n,t){},fGeA:function(n,t){},nplA:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={};e.d(r,"syncApiKeys",function(){return $}),e.d(r,"syncExchanges",function(){return T});var o={};e.d(o,"initApiKeys",function(){return W}),e.d(o,"initExchanges",function(){return C});var a={};e.d(a,"addWatcher",function(){return G}),e.d(a,"syncWatchers",function(){return R}),e.d(a,"updateWatcher",function(){return K});var i={};e.d(i,"initWatchers",function(){return H}),e.d(i,"addWatcher",function(){return M}),e.d(i,"updateWatcher",function(){return O});var u={};e.d(u,"addImport",function(){return P}),e.d(u,"syncImports",function(){return q}),e.d(u,"updateImport",function(){return B});var c={};e.d(c,"syncImports",function(){return D}),e.d(c,"updateImport",function(){return F}),e.d(c,"addImport",function(){return U});var s={};e.d(s,"setGlobalWarning",function(){return J});var d={};e.d(d,"setGlobalWarning",function(){return V});var f={};e.d(f,"addStratrunner",function(){return Z}),e.d(f,"syncStratrunners",function(){return nn}),e.d(f,"updateStratrunner",function(){return tn}),e.d(f,"addTradeToStratrunner",function(){return en}),e.d(f,"addRoundtripToStratrunner",function(){return rn});var p={};e.d(p,"syncStratrunners",function(){return on}),e.d(p,"addStratrunner",function(){return an}),e.d(p,"updateStratrunner",function(){return un}),e.d(p,"addTradeToStratrunner",function(){return cn}),e.d(p,"addRoundtripToStratrunner",function(){return sn});var l=e("Dd8w"),h=e.n(l),m=(e("30VO"),e("/5sW")),g=e("7109");m.a.use(g.U,{components:{QAlert:g.c,QBtn:g.d,QCard:g.e,QCardTitle:g.j,QCardMain:g.g,QCardMedia:g.h,QCardSeparator:g.i,QCardActions:g.f,QDatetime:g.k,QField:g.l,QIcon:g.m,QInput:g.n,QItem:g.o,QItemMain:g.p,QItemSeparator:g.q,QItemSide:g.r,QItemTile:g.s,QLayout:g.t,QLayoutDrawer:g.u,QLayoutFooter:g.v,QLayoutHeader:g.w,QList:g.x,QListHeader:g.y,QModal:g.z,QModalLayout:g.A,QOptionGroup:g.B,QPage:g.C,QPageContainer:g.D,QProgress:g.E,QRouteTab:g.F,QSearch:g.G,QSelect:g.H,QSpinner:g.I,QSpinnerBars:g.J,QSpinnerDots:g.K,QSpinnerRadio:g.L,QTab:g.M,QTable:g.N,QTd:g.P,QTr:g.S,QTabs:g.O,QToolbar:g.Q,QToolbarTitle:g.R},directives:{Ripple:g.T},plugins:{Notify:g.b,Dialog:g.a}});e("L4dm"),e("hAPP"),e("3Puz"),e("N12Q");var v=e("M4fF"),k=e.n(v),y=e("YBjz"),S=e("NYxO"),w=e("mtWM"),Q=e.n(w),b={apiKeys:[],exchanges:{},apiBaseUrl:y.a},_=e("bKX+"),$=function(n,t){return m.a.set(n,"apiKeys",t),n},T=function(n,t){return m.a.set(n,"exchanges",t),n},A=e("d7EF"),x=e.n(A),W=function(n,t){(0,n.commit)("syncApiKeys",t)},C=function(n,t){var e;(0,n.commit)("syncExchanges",(e={},t.forEach(function(n){e[n.slug]=e[n.slug]||{markets:{}},n.markets.forEach(function(t){var r=x()(t.pair,2),o=r[0],a=r[1];e[n.slug].markets[o]=e[n.slug].markets[o]||[],e[n.slug].markets[o].push(a)}),"exchangeMaxHistoryAge"in n&&(e[n.slug].exchangeMaxHistoryAge=n.exchangeMaxHistoryAge),e[n.slug].importable=!!n.providesFullHistory,e[n.slug].tradable=!!n.tradable,e[n.slug].requires=n.requires}),e))},I={namespaced:!0,state:b,getters:_,mutations:r,actions:o},E=e("OKa4"),G=function(n,t){return n.watchers.push(t),n},R=function(n,t){return n.watchers=t,n},K=function(n,t){var e=n.watchers.findIndex(function(n){return n.id===t.gekko_id}),r=n.watchers[e];if(!r)return n;var o=m.a.util.extend(r,t.updates);return m.a.set(n.watchers,e,o),n},H=function(n,t){(0,n.commit)("syncWatchers",k.a.filter(t,{type:"watcher"}))},M=function(n,t){(0,n.commit)("addWatcher",t)},O=function(n,t){(0,n.commit)("updateWatcher",t)},N={namespaced:!0,state:{watchers:[]},getters:E,mutations:a,actions:i},L=e("fGeA"),P=function(n,t){return n.imports.push(t),n},q=function(n,t){return n.imports=t,n},B=function(n,t){var e=n.imports.findIndex(function(n){return n.id===t.import_id}),r=n.imports[e];if(!r)return n;var o=m.a.util.extend(r,t.updates);return m.a.set(n.imports,e,o),n},D=function(n,t){(0,n.commit)("syncImports",t)},F=function(n,t){(0,n.commit)("updateImport",t)},U=function(n,t){(0,n.commit)("addImport",t)},j={namespaced:!0,state:{imports:[]},getters:L,mutations:u,actions:c},z=e("BrAt"),J=function(n,t){return n.warnings[t.key]=t.value,n},V=function(n,t){(0,n.commit)("setGlobalWarning",t)},X={namespaced:!0,state:{warnings:{connected:!0}},getters:z,mutations:s,actions:d},Y=e("3J1H"),Z=function(n,t){return n.stratrunners.push(t),n},nn=function(n,t){return n.stratrunners=t,n},tn=function(n,t){var e=n.stratrunners.findIndex(function(n){return n.id===t.gekko_id}),r=n.stratrunners[e];if(!r)return n;var o=m.a.util.extend(r,t.updates);return m.a.set(n.stratrunners,e,o),n},en=function(n,t){var e=n.stratrunners.findIndex(function(n){return n.id===t.gekko_id}),r=n.stratrunners[e];if(!r)return n;var o=m.a.util.extend({},r);return o.trades.push(t.trade),m.a.set(n.stratrunners,e,o),n},rn=function(n,t){var e=n.stratrunners.findIndex(function(n){return n.id===t.gekko_id}),r=n.stratrunners[e];if(!r)return n;var o=m.a.util.extend({},r);return o.roundtrips.push(t.roundtrip),m.a.set(n.stratrunners,e,o),n},on=function(n,t){(0,n.commit)("syncStratrunners",k.a.filter(t,{type:"leech"}))},an=function(n,t){(0,n.commit)("addStratrunner",t)},un=function(n,t){(0,n.commit)("updateStratrunner",t)},cn=function(n,t){(0,n.commit)("addTradeToStratrunner",t)},sn=function(n,t){(0,n.commit)("addRoundtripToStratrunner",t)},dn={namespaced:!0,state:{stratrunners:[]},getters:Y,mutations:f,actions:p};m.a.use(S.a);var fn=new S.a.Store({modules:{config:I,watchers:N,imports:j,warnings:X,stratrunners:dn}}),pn=function(){mn.$off("update"),mn.$off("startAt"),mn.$off("lastCandle"),mn.$off("firstCandle"),mn.$off("apiKeys"),mn.$off("new_gekko"),mn.$off("WS_STATUS_CHANGE"),mn.$off("import_update"),mn.$off("report"),mn.$off("trade"),mn.$off("update"),mn.$off("startAt"),mn.$off("lastCandle"),mn.$off("firstCandle"),mn.$off("roundtrip"),Q.a.get(y.a+"apiKeys").then(function(n){fn.dispatch("config/initApiKeys",n.data)}),Q.a.get(y.a+"exchanges").then(function(n){fn.dispatch("config/initExchanges",n.data)}),mn.$on("apiKeys",function(n){fn.dispatch("config/initApiKeys",n.exchanges)});var n=function(n){fn.dispatch("watchers/updateWatcher",n)};Q.a.get(y.a+"gekkos").then(function(n){var t=k.a.filter(n.data,{type:"watcher"}),e=k.a.filter(n.data,{type:"leech"});fn.dispatch("watchers/initWatchers",t),fn.dispatch("stratrunners/syncStratrunners",e)}),mn.$on("new_gekko",function(n){"watcher"===n.gekko.type&&fn.dispatch("watchers/addWatcher",n.gekko)}),mn.$on("update",n),mn.$on("startAt",n),mn.$on("lastCandle",n),mn.$on("firstCandle",n),Q.a.get(y.a+"imports").then(function(n){fn.dispatch("imports/syncImports",n.data)}),mn.$on("import_update",function(n){fn.dispatch("imports/updateImport",n)}),mn.$on("WS_STATUS_CHANGE",function(n){return fn.dispatch("warnings/setGlobalWarning",{key:"connected",value:n.connected})}),mn.$on("new_gekko",function(n){"leech"===n.gekko.type&&fn.dispatch("stratrunners/addStratrunner",n.gekko)});var t=function(n){fn.dispatch("stratrunners/updateStratrunner",n)};mn.$on("report",t),mn.$on("trade",function(n){fn.dispatch("stratrunners/addTradeToStratrunner",n)}),mn.$on("update",t),mn.$on("startAt",t),mn.$on("lastCandle",t),mn.$on("firstCandle",t),mn.$on("roundtrip",function(n){fn.dispatch("stratrunners/addRoundtripToStratrunner",n)})},ln=function(){pn()},hn=null,mn=new m.a;mn.$on("gekko_update",function(n){return console.log(n)}),mn.$on("gekko_error",function(n){alert("GEKKO ERROR: "+n.error)}),mn.$on("import_update",function(n){return console.log(n)}),mn.$on("import_error",function(n){alert("IMPORT ERROR: "+n.error)});var gn={connected:!1},vn={name:"App",created:function(){this.initStore()},computed:{connected:function(){return!this.$store.state.warnings.warnings.connected}},methods:{initStore:function(){hn=new ReconnectingWebSocket(y.b),setTimeout(function(){gn.connected||(ln(),mn.$emit("WS_STATUS_CHANGE",gn))},500),hn.onopen=function(){gn.connected||(gn.connected=!0,mn.$emit("WS_STATUS_CHANGE",gn),ln())},hn.onclose=function(){gn.connected&&(gn.connected=!1,mn.$emit("WS_STATUS_CHANGE",gn))},hn.onerror=function(){gn.connected&&(gn.connected=!1,mn.$emit("WS_STATUS_CHANGE",gn))},hn.onmessage=function(n){var t=JSON.parse(n.data);mn.$emit(t.type,t)}}}},kn=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{attrs:{id:"q-app"}},[e("router-view"),n._v(" "),e("q-modal",{attrs:{"no-route-dismiss":"","no-esc-dismiss":"","no-backdrop-dismiss":""},model:{value:n.connected,callback:function(t){n.connected=t},expression:"connected"}},[e("div",{staticClass:"q-pa-md"},[e("h2",{staticClass:"text-negative"},[n._v("Disconnected")]),n._v(" "),e("p",[n._v("Something happened to either Gekko or the connection. "),e("br"),n._v("\n        Please check the terminals where Gekko is running "),e("em",[n._v("or")]),n._v(" your network connection.\n      ")]),n._v(" "),e("hr"),n._v(" "),e("p",{staticClass:"text-secondary text-center"},[n._v("I'm trying to re-establish the connection...")]),n._v(" "),e("div",{staticClass:"row justify-center"},[e("q-spinner-radio",{attrs:{color:"secondary",size:"48px"}})],1)])])],1)},yn=[];kn._withStripped=!0;var Sn=e("XyMi"),wn=!1;var Qn=function(n){wn||e("dadW")},bn=Object(Sn.a)(vn,kn,yn,!1,Qn,null,null);bn.options.__file="src\\App.vue";var _n=bn.exports,$n=e("/ocq"),Tn=[{path:"/",component:function(){return e.e(10).then(e.bind(null,"lfHO"))},children:[{path:"",component:function(){return e.e(9).then(e.bind(null,"2NXm"))}},{path:"live-gekkos",component:function(){return e.e(6).then(e.bind(null,"2Akg"))}},{path:"live-gekkos/new",component:function(){return e.e(1).then(e.bind(null,"1b7j"))}},{path:"live-gekkos/stratrunner/:id",component:function(){return e.e(3).then(e.bind(null,"RnLW"))}},{path:"live-gekkos/watcher/:id",component:function(){return e.e(5).then(e.bind(null,"yGPq"))}},{path:"backtest",component:function(){return e.e(0).then(e.bind(null,"uDkr"))}},{path:"data",component:function(){return e.e(4).then(e.bind(null,"+fQO"))}},{path:"data/importer",component:function(){return e.e(2).then(e.bind(null,"doBF"))}},{path:"data/importer/import/:id",component:function(){return e.e(7).then(e.bind(null,"wMo+"))}},{path:"config",component:function(){return e.e(8).then(e.bind(null,"NVsG"))}},{path:"help",beforeEnter:function(n,t,e){window.open("https://gekko.wizb.it/docs/introduction/about_gekko.html","_blank")}}]},{path:"*",component:function(){return e.e(11).then(e.bind(null,"c5Mg"))}}];m.a.use($n.a);var An=new $n.a({mode:"history",base:"/",scrollBehavior:function(){return{y:0}},routes:Tn}),xn=e("TXmL"),Wn={en:{failed:"Action failed",success:"Action was successful"}};m.a.config.productionTip=!1;var Cn=h()({el:"#q-app",router:An,store:fn},_n),In=[];In.push(function(n){var t=n.app;n.Vue.use(xn.a),t.i18n=new xn.a({locale:"en",fallbackLocale:"en",messages:Wn})}),In.push(function(n){n.Vue.prototype.$axios=Q.a}),In.forEach(function(n){return n({app:Cn,router:An,store:fn,Vue:m.a})}),new m.a(Cn)}},[0]);