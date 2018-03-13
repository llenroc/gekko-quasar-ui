webpackJsonp([10],{"7YgM":function(t,e){t.exports={name:"gekkomat",version:"0.5.13",description:"Quasar Frontend for Gekko Trading Bot",productName:"Gekko Material UI",cordovaId:"org.cordova.quasar.app",author:"H256 <hansi256@web.de>",scripts:{test:'echo "No test specified" && exit 0'},dependencies:{axios:"^0.17.1","humanize-duration":"^3.12.1",moment:"^2.21.0","vue-i18n":"^7.3.3"},devDependencies:{jade:"^1.11.0",marked:"^0.3.17","quasar-cli":"^0.15.9",superagent:"^3.8.2","superagent-no-cache":"^0.1.1"},engines:{node:">= 8.9.0",npm:">= 5.6.0"},browserslist:["> 1%","last 2 versions","not ie <= 10"]}},"8cOU":function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},lfHO:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("7109"),a="0.5.13",i=n("7YgM"),r={name:"MainLayoutPage",data:function(){return{leftDrawerOpen:!1,version:{gekko:a,ui:i.version}}},methods:{openURL:o.V}},s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-layout",{attrs:{view:"lHh Lpr lFf"}},[n("q-layout-header",[n("q-toolbar",{attrs:{color:"primary"}},[n("q-btn",{attrs:{flat:"",dense:"",round:""},on:{click:function(e){t.leftDrawerOpen=!t.leftDrawerOpen}}},[n("q-icon",{attrs:{name:"menu"}})],1),t._v(" "),n("q-toolbar-title",[t._v("\n        Gekko UI\n      ")])],1),t._v(" "),n("q-tabs",{attrs:{align:"center"}},[n("q-route-tab",{attrs:{slot:"title",default:"",icon:"home",label:"Home",to:"/",exact:""},slot:"title"}),t._v(" "),n("q-route-tab",{attrs:{slot:"title",icon:"cast connected",label:"Live Gekkos",to:"/live-gekkos",exact:""},slot:"title"}),t._v(" "),n("q-route-tab",{attrs:{slot:"title",icon:"timeline",label:"Backtest",to:"/backtest",exact:""},slot:"title"}),t._v(" "),n("q-route-tab",{attrs:{slot:"title",icon:"storage",label:"Data",to:"/data",exact:""},slot:"title"}),t._v(" "),n("q-route-tab",{attrs:{slot:"title",icon:"settings",label:"Config",to:"/config",exact:""},slot:"title"}),t._v(" "),n("q-route-tab",{attrs:{slot:"title",icon:"help",label:"Documentation",to:"/help"},slot:"title"})],1)],1),t._v(" "),n("q-layout-drawer",{attrs:{"content-class":"bg-grey-2"},model:{value:t.leftDrawerOpen,callback:function(e){t.leftDrawerOpen=e},expression:"leftDrawerOpen"}},[n("q-list",{attrs:{"no-border":"",link:"","inset-delimiter":""}},[n("q-list-header",[t._v("Essential Links")]),t._v(" "),n("q-item",{nativeOn:{click:function(e){t.openURL("https://github.com/h256/gekko-quasar-ui")}}},[n("q-item-side",{attrs:{icon:"code"}}),t._v(" "),n("q-item-main",{attrs:{label:"Gekko-Quasar-UI on Github",sublabel:"github.com/h256/gekko-quasar-ui"}})],1),t._v(" "),n("q-item",{nativeOn:{click:function(e){t.openURL("https://github.com/askmike/gekko")}}},[n("q-item-side",{attrs:{icon:"code"}}),t._v(" "),n("q-item-main",{attrs:{label:"Gekko on GitHub",sublabel:"github.com/askmike/gekko"}})],1),t._v(" "),n("q-item",{nativeOn:{click:function(e){t.openURL("https://discord.gg/26wMygt")}}},[n("q-item-side",{attrs:{icon:"chat"}}),t._v(" "),n("q-item-main",{attrs:{label:"Gekko Discord Channel",sublabel:"https://discord.gg/26wMygt"}})],1),t._v(" "),n("q-item",{nativeOn:{click:function(e){t.openURL("https://forum.gekko.wizb.it/")}}},[n("q-item-side",{attrs:{icon:"record_voice_over"}}),t._v(" "),n("q-item-main",{attrs:{label:"Gekko Forum",sublabel:"https://forum.gekko.wizb.it/"}})],1),t._v(" "),n("q-item-separator"),t._v(" "),n("q-list-header",[t._v("Unofficial resources (use at own risk!)")]),t._v(" "),n("q-item",{nativeOn:{click:function(e){t.openURL("https://github.com/gekkowarez/gekkoga")}}},[n("q-item-side",{attrs:{icon:"code"}}),t._v(" "),n("q-item-main",{attrs:{label:"Gekko-GA ",sublabel:"Genetic algorithm for gekko"}})],1),t._v(" "),n("q-item",{nativeOn:{click:function(e){t.openURL("https://github.com/Gab0/japonicus")}}},[n("q-item-side",{attrs:{icon:"code"}}),t._v(" "),n("q-item-main",{attrs:{label:"Japonicus",sublabel:"Genetic algorithm backtester for gekko"}})],1),t._v(" "),n("q-item-separator"),t._v(" "),n("q-list-header",[t._v("Quasar Framework resources")]),t._v(" "),n("q-item",{nativeOn:{click:function(e){t.openURL("http://quasar-framework.org")}}},[n("q-item-side",{attrs:{icon:"school"}}),t._v(" "),n("q-item-main",{attrs:{label:"Quasar Framework",sublabel:"quasar-framework.org"}})],1)],1)],1),t._v(" "),n("q-page-container",[n("router-view")],1),t._v(" "),n("q-layout-footer",[n("q-toolbar",{attrs:{color:"primary"}},[n("q-toolbar-title",[t._v("\n        Gekko Material v "+t._s(t.version.ui)+"\n        "),n("div",{attrs:{slot:"subtitle"},slot:"subtitle"},[t._v("Running on Quasar v"+t._s(t.$q.version))])]),t._v(" "),n("q-toolbar-title",[n("em",[t._v("Use Gekko at your own risk!")]),t._v(" "),n("div",{attrs:{slot:"subtitle"},slot:"subtitle"},[t._v("Using Gekko v "+t._s(t.version.gekko))])])],1)],1)],1)},l=[];s._withStripped=!0;var c=n("XyMi"),u=!1;var k=function(t){u||n("tqQw")},v=Object(c.a)(r,s,l,!1,k,null,null);v.options.__file="src\\layouts\\default.vue";e.default=v.exports},tqQw:function(t,e,n){var o=n("8cOU");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,n("rjj0").default)("1596d77c",o,!1,{})}});