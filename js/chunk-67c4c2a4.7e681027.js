(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-67c4c2a4"],{"0408":function(t,e,n){"use strict";var r=n("767b"),o=n.n(r);o.a},"0957":function(t,e,n){},"20d0":function(t,e,n){"use strict";var r=n("60a9"),o=n.n(r);o.a},"20ee":function(t,e,n){},"397f":function(t,e,n){"use strict";var r=n("b0e5"),o=n.n(r);o.a},"4d8b":function(t,e,n){"use strict";var r=n("20ee"),o=n.n(r);o.a},"60a9":function(t,e,n){},7265:function(t,e,n){"use strict";var r=n("a47a"),o=n.n(r);o.a},"767b":function(t,e,n){},8119:function(t,e,n){"use strict";var r=n("0957"),o=n.n(r);o.a},"8ed9":function(t,e,n){"use strict";var r=n("d940"),o=n.n(r);o.a},"9daf":function(t,e,n){"use strict";var r=n("8527"),o=n("1968"),i=n("9732"),a=n("1423"),s=n("ad59");e["a"]=Object(a["a"])(r["a"],o["a"]).extend({name:"VLazy",directives:{intersect:i["a"]},props:{options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},tag:{type:String,default:"div"},transition:{type:String,default:"fade-transition"}},computed:{styles(){return{...this.measurableStyles}}},methods:{genContent(){const t=Object(s["r"])(this);if(!this.transition)return t;const e=[];return this.isActive&&e.push(t),this.$createElement("transition",{props:{name:this.transition}},e)},onObserve(t,e,n){this.isActive||(this.isActive=n)}},render(t){return t(this.tag,{staticClass:"v-lazy",attrs:this.$attrs,directives:[{name:"intersect",value:{handler:this.onObserve,options:this.options}}],on:this.$listeners,style:this.styles},[this.genContent()])}})},a47a:function(t,e,n){},b0e5:function(t,e,n){},b9f0:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("raiden-dialog",{staticClass:"channel-deposit",attrs:{visible:t.visible},on:{close:t.cancel}},[r("v-card-title",[r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-col",[t.loading?r("span",[t._v(" "+t._s(t.$t("transfer.steps.deposit.title"))+" ")]):t.done?r("span",[t._v(" "+t._s(t.$t("transfer.steps.deposit-done.title"))+" ")]):r("span",[t._v(" "+t._s(t.$t("transfer.steps.deposit.label"))+" ")])])],1)],1),r("v-card-actions",[t.loading?r("v-row",[r("spinner")],1):t.done?r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-col",{attrs:{cols:"6"}},[r("v-img",{staticClass:"channel-deposit__done",attrs:{src:n("2e1f")}})],1)],1):r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-col",[r("v-form",{on:{submit:function(e){return e.preventDefault(),t.depositTokens()}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[r("amount-input",{attrs:{token:t.token,max:t.token.balance,limit:""},model:{value:t.deposit,callback:function(e){t.deposit=e},expression:"deposit"}}),r("div",{staticClass:"channel-deposit__button"},[r("action-button",{attrs:{id:"confirm-"+t.identifier,enabled:t.valid,text:t.$t("channel-deposit.buttons.confirm"),"full-width":""}})],1)],1)],1)],1)],1),r("v-card-text",[r("v-row",{attrs:{align:"center",justify:"center"}},[t.loading?r("span",[t._v(" "+t._s(t.$t("transfer.steps.deposit.description"))+" ")]):t.done?r("span",[t._v(" "+t._s(t.$t("transfer.steps.deposit-done.description"))+" ")]):t._e()])],1)],1)},o=[],i=n("e921"),a=n("b99a"),s=n("dbe0"),c=n("750b"),u=n("66bc"),l=n("0527"),f=n("a3d5");function p(t){return p="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}function y(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function b(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function d(t,e,n){return e&&b(t.prototype,e),n&&b(t,n),t}function v(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&h(t,e)}function h(t,e){return h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},h(t,e)}function m(t){var e=g();return function(){var n,r=j(t);if(e){var o=j(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return _(this,n)}}function _(t,e){return!e||"object"!==p(e)&&"function"!==typeof e?O(t):e}function O(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function g(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function j(t){return j=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},j(t)}var w=function(t){v(n,t);var e=m(n);function n(){var t;return y(this,n),t=e.apply(this,arguments),t.deposit="",t.valid=!1,t}return d(n,[{key:"onVisibilityChanged",value:function(t){t&&this.updateDeposit()}},{key:"mounted",value:function(){this.updateDeposit()}},{key:"updateDeposit",value:function(){var t;this.deposit=0===(null!==(t=this.token.decimals)&&void 0!==t?t:18)?"0":"0.0"}},{key:"cancel",value:function(){}},{key:"depositTokens",value:function(){var t=f["a"].parse(this.deposit,this.token.decimals);t.isZero()||this.$emit("depositTokens",t)}}]),n}(a["e"]);Object(i["a"])([Object(a["d"])({required:!0})],w.prototype,"identifier",void 0),Object(i["a"])([Object(a["d"])({required:!0,type:Boolean,default:!1})],w.prototype,"visible",void 0),Object(i["a"])([Object(a["d"])({required:!0})],w.prototype,"token",void 0),Object(i["a"])([Object(a["d"])({required:!0})],w.prototype,"loading",void 0),Object(i["a"])([Object(a["d"])({required:!1,default:!1})],w.prototype,"done",void 0),Object(i["a"])([Object(a["f"])("visible")],w.prototype,"onVisibilityChanged",null),Object(i["a"])([Object(a["b"])()],w.prototype,"cancel",null),w=Object(i["a"])([Object(a["a"])({components:{AmountInput:s["a"],ActionButton:c["a"],RaidenDialog:u["a"],Spinner:l["a"]}})],w);var k=w,P=k,C=(n("8ed9"),n("125f")),S=n("834c"),D=n.n(S),x=n("3750"),R=n("fec4"),T=n("4cba"),E=n("1337"),$=n("2f50"),V=Object(C["a"])(P,r,o,!1,null,"21d52549",null);e["a"]=V.exports;D()(V,{VCardActions:x["a"],VCardText:x["b"],VCardTitle:x["c"],VCol:R["a"],VForm:T["a"],VImg:E["a"],VRow:$["a"]})},d940:function(t,e,n){},ded4:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("lazy-route",[n("transfer")],1)},o=[],i=n("e921"),a=n("b99a"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"transfer"},[n("transfer-headers",{staticClass:"transfer__menus",attrs:{token:t.token,capacity:t.capacity}}),n("transfer-inputs",{staticClass:"transfer__inputs",attrs:{token:t.token,capacity:t.capacity}}),n("transaction-list",{staticClass:"transfer__list",attrs:{token:t.token}})],1)},c=[],u=n("7aa1"),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{staticClass:"transfer-menus",attrs:{"no-gutters":""}},[n("div",{staticClass:"transfer-menus__token-select"},[n("span",{on:{click:function(e){t.showTokens=!0}}},[t._v(" "+t._s(t.$t("transfer.transfer-menus.change-token-title"))+" "),n("v-icon",[t._v("mdi-chevron-down")])],1)]),n("div",{staticClass:"transfer-menus__dot-menu"},[n("v-menu",{attrs:{transition:"scale-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[n("v-btn",t._g({staticClass:"transfer-menus__dot-menu__button",attrs:{icon:""}},r),[n("v-icon",[t._v("mdi-dots-vertical")])],1)]}}])},[n("div",{staticClass:"transfer-menus__dot-menu__menu"},[n("v-btn",{staticClass:"transfer-menus__dot-menu__menu__deposit",attrs:{text:"",disabled:t.noChannels},on:{click:function(e){return t.depositDialogOpen()}}},[t._v(" "+t._s(t.$t("transfer.transfer-menus.deposit-button"))+" ")]),n("v-btn",{staticClass:"transfer-menus__dot-menu__menu__channels",attrs:{text:""},on:{click:function(e){return t.navigateToChannels(t.token.address)}}},[t._v(" "+t._s(t.$t("transfer.transfer-menus.channel-button"))+" ")])],1)])],1),t.noChannels?n("span",[t._v(" "+t._s(t.$t("transfer.transfer-menus.no-channels"))+" ")]):n("span",[n("amount-display",{attrs:{"exact-amount":"",amount:t.capacity,token:t.token}})],1),n("token-overlay",{attrs:{show:t.showTokens},on:{cancel:function(e){t.showTokens=!1}}}),n("channel-deposit-dialog",{attrs:{loading:t.loading,done:t.done,token:t.token,visible:t.showDepositDialog,identifier:"0"},on:{depositTokens:function(e){return t.deposit(e)},cancel:function(e){return t.depositDialogClosed()}}}),n("error-dialog",{attrs:{error:t.error},on:{dismiss:function(e){t.error=null}}})],1)},f=[],p=n("4bf2"),y=n.n(p),b=n("152b"),d=n("03af"),v=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-overlay",{staticClass:"token-network-overlay",attrs:{value:t.show,absolute:"",opacity:"1.0"}},[t.show?r("v-container",{staticClass:"token-network__container"},[r("v-row",{attrs:{"no-gutters":"",justify:"end"}},[r("v-btn",{staticClass:"token-network-overlay__close-button",attrs:{icon:""},on:{click:t.cancel}},[r("v-icon",[t._v("mdi-close")])],1)],1),r("v-row",{attrs:{id:"connect-new"}},[r("v-col",{attrs:{cols:"12"}},[r("v-list",{staticClass:"connect-new__item-list"},[r("v-list-item",{on:{click:function(e){return t.navigateToTokenSelect()}}},[r("v-col",{attrs:{cols:"2"}},[r("v-list-item-avatar",[r("v-btn",{staticClass:"mx-2",attrs:{fab:"",dark:"",small:"",color:"primary"}},[r("v-icon",{attrs:{dark:"",large:""}},[t._v("mdi-plus")])],1)],1)],1),r("v-col",{staticClass:"connect-new__connect-new-token",attrs:{cols:"10","align-self":"center"}},[t._v(" "+t._s(t.$t("tokens.connect-new"))+" ")])],1)],1)],1)],1),r("v-row",[r("v-col",{staticClass:"hidden-sm-and-down",attrs:{cols:"2","align-self":"center"}}),r("v-col",{staticClass:"token-network-overlay__header",attrs:{cols:"10","align-self":"center"}},[t._v(" "+t._s(t.$t("tokens.connected.header"))+" ")])],1),r("v-row",{staticClass:"token-list"},[r("v-col",{attrs:{cols:"12"}},t._l(t.tokens,(function(e,o){return r("v-list",{key:o,staticClass:"token-list__item-list"},[r("v-list-item",{key:e.address,on:{click:function(n){return t.handleTokenClick(e.address)}}},[r("v-col",{attrs:{cols:"2"}},[r("v-list-item-avatar",[r("img",{attrs:{src:t.$blockie(e.address),"src-lazy":n("ec79"),alt:t.$t("select-token.tokens.token.blockie-alt")}})])],1),r("v-col",[r("v-list-item-content",[r("v-list-item-title",{staticClass:"token-list__token-title"},[t._v(" "+t._s(t.$t("select-token.tokens.token.token-information",{symbol:e.symbol,name:e.name}))+" ")]),r("v-list-item-subtitle",{staticClass:"token-list__token-address"},[r("address-display",{attrs:{address:e.address}})],1)],1)],1),r("v-col",[r("v-row",{attrs:{justify:"end"}},[r("v-list-item-action-text",[r("amount-display",{staticClass:"token-list__token-balance",attrs:{"exact-amount":"",amount:t.getTokenDetails(e).balance,token:t.getTokenDetails(e)}})],1)],1)],1)],1)],1)})),1)],1)],1):t._e()],1)},h=[],m=n("77fd"),_=n("9302");function O(t){return O="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},O(t)}function g(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function j(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?g(Object(n),!0).forEach((function(e){w(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function w(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function k(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function P(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function C(t,e,n){return e&&P(t.prototype,e),n&&P(t,n),t}function S(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&D(t,e)}function D(t,e){return D=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},D(t,e)}function x(t){var e=E();return function(){var n,r=$(t);if(e){var o=$(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return R(this,n)}}function R(t,e){return!e||"object"!==O(e)&&"function"!==typeof e?T(t):e}function T(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function E(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function $(t){return $=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},$(t)}var V=function(t){S(n,t);var e=x(n);function n(){return k(this,n),e.apply(this,arguments)}return C(n,[{key:"handleTokenClick",value:function(t){var e=this.$route.params.token;e!==t&&this.navigateToSelectTransferTarget(t),this.cancel()}},{key:"getTokenDetails",value:function(t){return this.$store.getters.token(t.address)}},{key:"cancel",value:function(){}}]),n}(Object(a["c"])(m["a"],b["a"]));Object(i["a"])([Object(a["d"])({required:!0,type:Boolean})],V.prototype,"show",void 0),Object(i["a"])([Object(a["b"])()],V.prototype,"cancel",null),V=Object(i["a"])([Object(a["a"])({components:{AddressDisplay:_["a"],AmountDisplay:d["a"]},computed:j({},Object(u["d"])(["tokens","allTokens"]))})],V);var A=V,I=A,q=(n("20d0"),n("125f")),L=n("834c"),B=n.n(L),z=n("985e"),H=n("fec4"),F=n("cf12"),W=n("0d78"),Z=n("29ed"),J=n("aaad"),M=n("6907"),G=n("e54c"),K=n("5384"),N=n("2f50"),Q=Object(q["a"])(I,v,h,!1,null,"64a72ceb",null),U=Q.exports;B()(Q,{VBtn:z["a"],VCol:H["a"],VContainer:F["a"],VIcon:W["a"],VList:Z["a"],VListItem:J["a"],VListItemActionText:M["a"],VListItemAvatar:G["a"],VListItemContent:M["b"],VListItemSubtitle:M["c"],VListItemTitle:M["d"],VOverlay:K["a"],VRow:N["a"]});var X=n("b9f0"),Y=n("8d6f"),tt=n("f30a");function et(t){return et="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},et(t)}function nt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function rt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?nt(Object(n),!0).forEach((function(e){ot(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):nt(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function ot(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function it(t,e,n,r,o,i,a){try{var s=t[i](a),c=s.value}catch(u){return void n(u)}s.done?e(c):Promise.resolve(c).then(r,o)}function at(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){it(i,r,o,a,s,"next",t)}function s(t){it(i,r,o,a,s,"throw",t)}a(void 0)}))}}function st(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function ct(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function ut(t,e,n){return e&&ct(t.prototype,e),n&&ct(t,n),t}function lt(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&ft(t,e)}function ft(t,e){return ft=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},ft(t,e)}function pt(t){var e=dt();return function(){var n,r=vt(t);if(e){var o=vt(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return yt(this,n)}}function yt(t,e){return!e||"object"!==et(e)&&"function"!==typeof e?bt(t):e}function bt(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function dt(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function vt(t){return vt=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},vt(t)}var ht=function(t){lt(n,t);var e=pt(n);function n(){var t;return st(this,n),t=e.apply(this,arguments),t.showTokens=!1,t.showDepositDialog=!1,t.loading=!1,t.done=!1,t.error=null,t}return ut(n,[{key:"depositDialogOpen",value:function(){this.showDepositDialog=!0}},{key:"depositDialogClosed",value:function(){this.showDepositDialog=!1}},{key:"deposit",value:function(){var t=at(y.a.mark((function t(e){return y.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.loading=!0,t.prev=1,t.next=4,this.$raiden.deposit(this.token.address,this.channelWithBiggestCapacity(this.token.address).partner,e);case 4:this.done=!0,this.loading=!1,this.dismissProgress(),t.next=14;break;case 9:t.prev=9,t.t0=t["catch"](1),this.error=t.t0,this.loading=!1,this.showDepositDialog=!1;case 14:case"end":return t.stop()}}),t,this,[[1,9]])})));function e(e){return t.apply(this,arguments)}return e}()},{key:"dismissProgress",value:function(){var t=this;setTimeout((function(){t.done=!1,t.showDepositDialog=!1}),2e3)}},{key:"noChannels",get:function(){return this.capacity===tt["Zero"]}}]),n}(Object(a["c"])(b["a"]));Object(i["a"])([Object(a["d"])({required:!0})],ht.prototype,"token",void 0),Object(i["a"])([Object(a["d"])({required:!0})],ht.prototype,"capacity",void 0),ht=Object(i["a"])([Object(a["a"])({components:{AmountDisplay:d["a"],TokenOverlay:U,ChannelDepositDialog:X["a"],ErrorDialog:Y["a"]},computed:rt({},Object(u["d"])(["channelWithBiggestCapacity"]))})],ht);var mt=ht,_t=mt,Ot=(n("8119"),n("a45a")),gt=Object(q["a"])(_t,l,f,!1,null,"b92f108a",null),jt=gt.exports;B()(gt,{VBtn:z["a"],VIcon:W["a"],VMenu:Ot["a"],VRow:N["a"]});var wt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{staticClass:"transfer-inputs",attrs:{"no-gutters":""}},[n("v-form",{ref:"transfer",staticClass:"transfer-inputs__form",attrs:{autocomplete:"off",novalidate:""},on:{submit:function(e){return e.preventDefault(),t.navigateToTransferSteps(t.target,t.amount)}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[n("v-row",{staticClass:"transfer-inputs__form__heading",attrs:{"no-gutters":""}},[n("span",{staticClass:"transfer-inputs__form__heading--title"},[t._v(" "+t._s(t.$t("transfer.transfer-inputs.title"))+" ")]),n("div",{staticClass:"transfer-inputs__form__heading__errors"},[n("span",[t._v(" "+t._s(t.addressError)+" ")]),n("span",[t._v(" "+t._s(t.amountError)+" ")])])]),n("v-row",{attrs:{"no-gutters":""}},[n("address-input",{staticClass:"transfer-inputs__form__address",attrs:{exclude:[t.token.address,t.defaultAccount],"hide-error-label":"",block:t.blockedHubs},on:{"input-error":function(e){t.addressError=e}},model:{value:t.target,callback:function(e){t.target=e},expression:"target"}})],1),n("v-row",{attrs:{"no-gutters":""}},[n("amount-input",{staticClass:"transfer-inputs__form__amount",attrs:{limit:"","hide-error-label":"",token:t.token,max:t.capacity,placeholder:t.$t("transfer.amount-placeholder")},on:{"input-error":function(e){t.amountError=e}},model:{value:t.amount,callback:function(e){t.amount=e},expression:"amount"}}),n("action-button",{staticClass:"transfer-inputs__form__button",attrs:{enabled:t.valid,text:t.$t("general.buttons.continue")}})],1)],1)],1)},kt=[],Pt=n("6fc3"),Ct=n("dbe0"),St=n("750b"),Dt=n("fb6b"),xt=n("fc09"),Rt=n("f455");function Tt(t){return Tt="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Tt(t)}function Et(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function $t(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Et(Object(n),!0).forEach((function(e){Vt(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Et(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function Vt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function At(t,e,n,r,o,i,a){try{var s=t[i](a),c=s.value}catch(u){return void n(u)}s.done?e(c):Promise.resolve(c).then(r,o)}function It(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){At(i,r,o,a,s,"next",t)}function s(t){At(i,r,o,a,s,"throw",t)}a(void 0)}))}}function qt(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Lt(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function Bt(t,e,n){return e&&Lt(t.prototype,e),n&&Lt(t,n),t}function zt(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Ht(t,e)}function Ht(t,e){return Ht=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},Ht(t,e)}function Ft(t){var e=Jt();return function(){var n,r=Mt(t);if(e){var o=Mt(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Wt(this,n)}}function Wt(t,e){return!e||"object"!==Tt(e)&&"function"!==typeof e?Zt(t):e}function Zt(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Jt(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function Mt(t){return Mt=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},Mt(t)}var Gt=function(t){zt(n,t);var e=Ft(n);function n(){var t;return qt(this,n),t=e.apply(this,arguments),t.valid=!1,t.amount="",t.target="",t.addressError="",t.amountError="",t}return Bt(n,[{key:"onRouteChange",value:function(){var t,e;null===(t=this.$refs)||void 0===t||null===(e=t.transfer)||void 0===e||e.reset()}},{key:"created",value:function(){var t=It(y.a.mark((function t(){var e,n,r,o;return y.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e=this.$route.params.token,n=this.$route.query,r=n.amount,o=n.target,this.amount=Object(Dt["b"])(r),this.target=Object(Dt["a"])(o),xt["a"].checkAddressChecksum(e)){t.next=7;break}return this.navigateToHome(),t.abrupt("return");case 7:return t.next=9,this.$raiden.fetchTokenData([e]);case 9:"number"!==typeof this.token.decimals&&this.navigateToHome(),0===this.token.decimals&&this.amount.indexOf(".")>-1&&(this.amount=this.amount.split(".")[0]);case 11:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"blockedHubs",get:function(){return this.channels(this.token.address).filter((function(t){return t.state!==Rt["b"].open})).map((function(t){return t.partner}))}}]),n}(Object(a["c"])(b["a"]));Object(i["a"])([Object(a["d"])({required:!0})],Gt.prototype,"token",void 0),Object(i["a"])([Object(a["d"])({required:!0})],Gt.prototype,"capacity",void 0),Object(i["a"])([Object(a["f"])("$route",{immediate:!0,deep:!0})],Gt.prototype,"onRouteChange",null),Gt=Object(i["a"])([Object(a["a"])({components:{AddressInput:Pt["a"],AmountInput:Ct["a"],ActionButton:St["a"]},computed:$t($t({},Object(u["f"])(["defaultAccount"])),Object(u["d"])(["channels"]))})],Gt);var Kt=Gt,Nt=Kt,Qt=(n("7265"),n("4cba")),Ut=Object(q["a"])(Nt,wt,kt,!1,null,"2779be79",null),Xt=Ut.exports;B()(Ut,{VForm:Qt["a"],VRow:N["a"]});var Yt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"transaction-history"},[n("v-row",{staticClass:"transaction-history__heading",attrs:{"no-gutters":""}},[t._v(" "+t._s(t.$t("transfer-history.title"))+" ")]),n("v-row",{staticClass:"transaction-history__transactions",attrs:{"no-gutters":""}},[n("v-list",{staticClass:"transaction-history__transactions__list"},t._l(t.orderedTransfers,(function(t,e){return n("div",{key:e,staticClass:"transaction-history__transactions__list__item"},[n("v-lazy",{attrs:{transition:"fade-transition",options:{threshold:.7},"min-height":"74"}},[n("transaction",{attrs:{transfer:t}})],1)],1)})),0)],1)],1)},te=[],ee=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"transaction"},[r("v-row",{staticClass:"transaction__item",attrs:{"no-gutters":""}},[r("v-col",{staticClass:"transaction__item__icon",attrs:{cols:"1"}},["sent"===t.transfer.direction?r("v-img",{attrs:{height:"38px",width:"38px",src:n("2886")}}):r("v-img",{attrs:{height:"38px",width:"38px",src:n("5b9b")}})],1),r("v-col",{staticClass:"transaction__item__details-left"},[r("v-row",{attrs:{"no-gutters":""}},[t._v(" "+t._s("sent"===t.transfer.direction?t.$t("transfer-history.sent-title"):t.$t("transfer-history.received-title"))+" "),r("address-display",{staticClass:"transaction__item__details-left__address",attrs:{address:"sent"===t.transfer.direction?t.transfer.target:t.transfer.initiator}})],1),r("v-row",{staticClass:"transaction__item__details-left__time-stamp",attrs:{"no-gutters":""}},[t._v(" "+t._s(t._f("formatDate")(t.transfer.changedAt))+" ")])],1),r("v-col",{staticClass:"transaction__item__details-right"},[r("v-row",{attrs:{"no-gutters":""}},[r("div",{staticClass:"transaction__item__details-right__amount"},[r("span",{staticClass:"transaction__item__details-right__amount--direction"},[t._v(" "+t._s("sent"===t.transfer.direction?t.$t("transfer-history.sent-symbol"):t.$t("transfer-history.received-symbol"))+" ")]),r("amount-display",{staticClass:"transaction__item__details-right__amount--sum",attrs:{"exact-amount":"",amount:t.transfer.amount,token:t.tokens[t.transfer.token]}})],1)]),r("v-row",{attrs:{"no-gutters":""}},[r("span",{staticClass:"transaction__item__details-right--status"},[void 0===t.transfer.success?r("v-chip",{attrs:{color:"pending-chip","x-small":"","text-color":"pending"}},[t._v(" "+t._s(t.$t("transfer-history.pending-transfer"))+" ")]):t.transfer.success?r("v-chip",{attrs:{color:"success-chip","x-small":"","text-color":"success"}},[t._v(" "+t._s(t.$t("transfer-history.successful-transfer"))+" ")]):r("v-chip",{attrs:{color:"failed-chip","x-small":"","text-color":"failed"}},[t._v(" "+t._s(t.$t("transfer-history.failed-transfer"))+" ")])],1)])],1)],1)],1)},ne=[];function re(t){return re="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},re(t)}function oe(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function ie(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?oe(Object(n),!0).forEach((function(e){ae(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):oe(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function ae(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function se(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function ce(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&ue(t,e)}function ue(t,e){return ue=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},ue(t,e)}function le(t){var e=ye();return function(){var n,r=be(t);if(e){var o=be(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return fe(this,n)}}function fe(t,e){return!e||"object"!==re(e)&&"function"!==typeof e?pe(t):e}function pe(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function ye(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function be(t){return be=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},be(t)}var de=function(t){ce(n,t);var e=le(n);function n(){return se(this,n),e.apply(this,arguments)}return n}(a["e"]);Object(i["a"])([Object(a["d"])({required:!0})],de.prototype,"transfer",void 0),de=Object(i["a"])([Object(a["a"])({components:{AddressDisplay:_["a"],AmountDisplay:d["a"]},computed:ie({},Object(u["f"])(["tokens"]))})],de);var ve=de,he=ve,me=(n("397f"),n("cb6d")),_e=n("1337"),Oe=Object(q["a"])(he,ee,ne,!1,null,"15001de0",null),ge=Oe.exports;function je(t){return je="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},je(t)}function we(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function ke(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?we(Object(n),!0).forEach((function(e){Pe(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):we(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function Pe(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Ce(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Se(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function De(t,e,n){return e&&Se(t.prototype,e),n&&Se(t,n),t}function xe(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Re(t,e)}function Re(t,e){return Re=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},Re(t,e)}function Te(t){var e=Ve();return function(){var n,r=Ae(t);if(e){var o=Ae(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Ee(this,n)}}function Ee(t,e){return!e||"object"!==je(e)&&"function"!==typeof e?$e(t):e}function $e(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Ve(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function Ae(t){return Ae=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},Ae(t)}B()(Oe,{VChip:me["a"],VCol:H["a"],VImg:_e["a"],VRow:N["a"]});var Ie=function(t){xe(n,t);var e=Te(n);function n(){return Ce(this,n),e.apply(this,arguments)}return De(n,[{key:"filteredTransfersForToken",get:function(){var t=this,e=Object.values(this.transfers);return void 0!==this.token?e.filter((function(e){return e.token===t.token.address})):e}},{key:"orderedTransfers",get:function(){return this.filteredTransfersForToken.sort((function(t,e){return e.changedAt-t.changedAt}))}}]),n}(a["e"]);Object(i["a"])([Object(a["d"])()],Ie.prototype,"token",void 0),Ie=Object(i["a"])([Object(a["a"])({components:{Transaction:ge},computed:ke({},Object(u["f"])(["transfers"]))})],Ie);var qe=Ie,Le=qe,Be=(n("0408"),n("9daf")),ze=Object(q["a"])(Le,Yt,te,!1,null,"6e158aa8",null),He=ze.exports;function Fe(t){return Fe="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Fe(t)}function We(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function Ze(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?We(Object(n),!0).forEach((function(e){Je(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):We(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function Je(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Me(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Ge(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function Ke(t,e,n){return e&&Ge(t.prototype,e),n&&Ge(t,n),t}function Ne(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Qe(t,e)}function Qe(t,e){return Qe=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},Qe(t,e)}function Ue(t){var e=tn();return function(){var n,r=en(t);if(e){var o=en(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Xe(this,n)}}function Xe(t,e){return!e||"object"!==Fe(e)&&"function"!==typeof e?Ye(t):e}function Ye(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function tn(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function en(t){return en=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},en(t)}B()(ze,{VLazy:Be["a"],VList:Z["a"],VRow:N["a"]});var nn=function(t){Ne(n,t);var e=Ue(n);function n(){return Me(this,n),e.apply(this,arguments)}return Ke(n,[{key:"token",get:function(){var t=this.$route.params.token;return this.$store.getters.token(t)||{address:t}}},{key:"capacity",get:function(){var t=this.channelWithBiggestCapacity(this.token.address);return t?t.capacity:tt["Zero"]}}]),n}(a["e"]);nn=Object(i["a"])([Object(a["a"])({components:{TransferHeaders:jt,TransferInputs:Xt,TransactionList:He},computed:Ze({},Object(u["d"])(["channelWithBiggestCapacity"]))})],nn);var rn=nn,on=rn,an=(n("4d8b"),Object(q["a"])(on,s,c,!1,null,"11e21a85",null)),sn=an.exports;B()(an,{VContainer:F["a"]});var cn=n("f931");function un(t){return un="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},un(t)}function ln(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function fn(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&pn(t,e)}function pn(t,e){return pn=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},pn(t,e)}function yn(t){var e=vn();return function(){var n,r=hn(t);if(e){var o=hn(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return bn(this,n)}}function bn(t,e){return!e||"object"!==un(e)&&"function"!==typeof e?dn(t):e}function dn(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function vn(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function hn(t){return hn=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},hn(t)}var mn=function(t){fn(n,t);var e=yn(n);function n(){return ln(this,n),e.apply(this,arguments)}return n}(a["e"]);mn=Object(i["a"])([Object(a["a"])({components:{LazyRoute:cn["a"],Transfer:sn}})],mn);var _n=mn,On=_n,gn=Object(q["a"])(On,r,o,!1,null,"51227951",null);e["default"]=gn.exports}}]);