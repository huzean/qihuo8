(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/agent/agent_info"],{"0227":function(t,n,e){"use strict";var u=e("49af"),a=e.n(u);a.a},"49af":function(t,n,e){},a5f5:function(t,n,e){"use strict";(function(t){e("f238");u(e("66fd"));var n=u(e("e0a5"));function u(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},b39d:function(t,n,e){"use strict";e.r(n);var u=e("e85c"),a=e.n(u);for(var i in u)"default"!==i&&function(t){e.d(n,t,(function(){return u[t]}))}(i);n["default"]=a.a},e0a5:function(t,n,e){"use strict";e.r(n);var u=e("e795"),a=e("b39d");for(var i in a)"default"!==i&&function(t){e.d(n,t,(function(){return a[t]}))}(i);e("0227");var r,o=e("f0c5"),f=Object(o["a"])(a["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],r);n["default"]=f.exports},e795:function(t,n,e){"use strict";var u;e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){return u}));var a=function(){var t=this,n=t.$createElement;t._self._c},i=[]},e85c:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u={data:function(){return{agent_info:{},uid:0}},onLoad:function(t){this.uid=t.uid,this.load_data()},computed:{},components:{},methods:{load_data:function(){var t=this;this.$api.CC_request.get_spread_user(this.uid).then((function(n){t.agent_info=n.spread_user}))},confim:function(){var t=this;this.$api.CC_request.edit_spread_user(this.agent_info).then((function(n){t.$api.msg("更新成功")}))}}};n.default=u}},[["a5f5","common/runtime","common/vendor"]]]);