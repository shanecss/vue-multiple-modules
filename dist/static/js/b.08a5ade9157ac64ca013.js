webpackJsonp([1],{"5Qk5":function(t,e){},Qc5Y:function(t,e){},gORT:function(t,e,n){"use strict";var s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hello"},[e("h1",[this._v("这里相当于是各个模块要复用的公共组件")]),this._v(" "),e("h2",[this._v(this._s(this.msg))])])},staticRenderFns:[]};var r=n("VU/8")({name:"HelloWorld",data:function(){return{msg:"我是公共组件啊！"}}},s,!1,function(t){n("5Qk5")},"data-v-6f72da43",null);e.a=r.exports},vuiL:function(t,e){},xVcX:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("/5sW"),r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("h2",[this._v(this._s(this.message))]),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var i=n("VU/8")({name:"App",data:function(){return{message:"b模块的内容"}}},r,!1,function(t){n("vuiL")},null,null).exports,a=n("/ocq"),u={name:"b-sub-module1",components:{HelloWorld:n("gORT").a},data:function(){return{}},methods:{},created:function(){}},o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h2",[this._v("这是b模块下受前端路由控制的子模块")]),this._v(" "),e("div",[this._v("这一块的内容才是受前端路由控制的")]),this._v(" "),e("hello-world")],1)},staticRenderFns:[]};var c=n("VU/8")(u,o,!1,function(t){n("Qc5Y")},"data-v-5da1bace",null).exports;s.a.use(a.a);var l=new a.a({routes:[{path:"",redirect:"/sub-module1"},{path:"/sub-module1",name:"subModule1",component:c}]});s.a.config.productionTip=!1,new s.a({el:"#app",router:l,render:function(t){return t(i)}})}},["xVcX"]);
//# sourceMappingURL=b.08a5ade9157ac64ca013.js.map