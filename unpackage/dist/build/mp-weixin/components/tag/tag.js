(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/tag/tag"],{"65bf":function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return a}));var i=function(){var t=this,e=t.$createElement,n=(t._self._c,t.visible?t.getClassName(t.shape,t.plain):null),a=t.visible?t.getTypeClass(t.type,t.plain):null;t.$mp.data=Object.assign({},{$root:{m0:n,m1:a}})},u=[]},"9bf8":function(t,e,n){"use strict";n.r(e);var a=n("f314"),i=n.n(a);for(var u in a)"default"!==u&&function(t){n.d(e,t,(function(){return a[t]}))}(u);e["default"]=i.a},a60b:function(t,e,n){"use strict";n.r(e);var a=n("65bf"),i=n("9bf8");for(var u in i)"default"!==u&&function(t){n.d(e,t,(function(){return i[t]}))}(u);n("a7d0");var l,r=n("f0c5"),f=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],l);e["default"]=f.exports},a7d0:function(t,e,n){"use strict";var a=n("b55a"),i=n.n(a);i.a},b55a:function(t,e,n){},f314:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"tuiTag",props:{type:{type:String,default:"primary"},size:{type:String,default:""},shape:{type:String,default:"square"},plain:{type:Boolean,default:!1},visible:{type:Boolean,default:!0}},methods:{handleClick:function(){this.$emit("click")},getTypeClass:function(t,e){return e?"tui-"+t+"-outline":"tui-"+t},getClassName:function(t,e){var n=e?"tui-tag-outline ":"";return"square"!=t&&("circle"==t?n+=e?"tui-tag-outline-fillet":"tui-tag-fillet":"circleLeft"==t?n+="tui-tag-fillet-left":"circleRight"==t&&(n+="tui-tag-fillet-right")),n}}};e.default=a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/tag/tag-create-component',
    {
        'components/tag/tag-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("a60b"))
        })
    },
    [['components/tag/tag-create-component']]
]);
