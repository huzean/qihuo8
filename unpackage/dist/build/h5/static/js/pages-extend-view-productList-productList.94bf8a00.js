(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-extend-view-productList-productList"],{"0212":function(t,e,i){"use strict";i.r(e);var a=i("444d"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);e["default"]=n.a},"0cb9":function(t,e,i){"use strict";i.r(e);var a=i("3960"),n=i("5d65");for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);i("dcbb");var r=i("2877"),s=Object(r["a"])(n["default"],a["a"],a["b"],!1,null,"577e436e",null);e["default"]=s.exports},"15e6":function(t,e,i){"use strict";i.r(e);var a=i("e03e"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);e["default"]=n.a},"1a8d":function(t,e,i){"use strict";i.r(e);var a=i("2621"),n=i("c374");for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);i("5b64");var r=i("2877"),s=Object(r["a"])(n["default"],a["a"],a["b"],!1,null,"78b08d98",null);e["default"]=s.exports},"200b":function(t,e,i){var a=i("dfd4");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("46667355",a,!0,{sourceMap:!1,shadowMode:!1})},2621:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.visible?i("v-uni-view",{staticClass:"tui-nomore-class tui-loadmore-none"},[i("v-uni-view",{class:[t.isDot?"tui-nomore-dot":"tui-nomore"]},[i("v-uni-view",{class:[t.isDot?"tui-dot-text":"tui-nomore-text"],style:{background:t.bgcolor}},[t._v(t._s(t.isDot?t.dotText:t.text))])],1)],1):t._e()},n=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})},"28b2":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"tui-top-dropdown tui-dropdown-box",class:[t.show?"tui-dropdown-show":""],style:{height:t.height?t.px(t.height):"auto",background:t.bgcolor,paddingBottom:t.px(t.paddingbtm),transform:"translateZ(0) translateY("+(t.show?t.px(t.translatey):"-100%")+")"}},[t._t("default")],2),i("v-uni-view",{staticClass:"tui-dropdown-mask",class:[t.mask&&t.show?"tui-mask-show":""],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleClose.apply(void 0,arguments)}}})],1)},n=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})},"378f":function(t,e,i){"use strict";var a=i("200b"),n=i.n(a);n.a},3960:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.visible?i("v-uni-view",{staticClass:"tui-loadmore"},[i("v-uni-view",{class:["tui-loading-"+t.index,3==t.index&&t.type?"tui-loading-"+t.type:""]}),i("v-uni-view",{staticClass:"tui-loadmore-tips"},[t._v(t._s(t.text))])],1):t._e()},n=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})},"3aec":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"tuiDrawer",props:{visible:{type:Boolean,default:!1},mask:{type:Boolean,default:!0},maskClosable:{type:Boolean,default:!0},mode:{type:String,default:"left"}},methods:{handleMaskClick:function(){this.maskClosable&&this.$emit("close",{})}}};e.default=a},"422b":function(t,e,i){"use strict";var a=i("f77c"),n=i.n(a);n.a},"444d":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("c5f6");var a={name:"tuiTopDropdown",props:{mask:{type:Boolean,default:!0},show:{type:Boolean,default:!1},bgcolor:{type:String,default:"#f2f2f2"},paddingbtm:{type:Number,default:0},height:{type:Number,default:580},translatey:{type:Number,default:0}},methods:{handleClose:function(){this.show&&this.$emit("close",{})},px:function(t){return uni.upx2px(t)+"px"}}};e.default=a},"4e40":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"tuiNomore",props:{visible:{type:Boolean,default:!1},bgcolor:{type:String,default:"#fafafa"},isDot:{type:Boolean,default:!1},text:{type:String,default:"没有更多了"}},data:function(){return{dotText:"●"}}};e.default=a},"5b64":function(t,e,i){"use strict";var a=i("6509"),n=i.n(a);n.a},"5d65":function(t,e,i){"use strict";i.r(e);var a=i("7eb6"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);e["default"]=n.a},6509:function(t,e,i){var a=i("6980");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("76e49f01",a,!0,{sourceMap:!1,shadowMode:!1})},6980:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,'.tui-loadmore-none[data-v-78b08d98]{width:48%;margin:1.5em auto;line-height:1.5em;font-size:%?24?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.tui-nomore[data-v-78b08d98]{width:100%;height:100%;position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;margin-top:%?10?%;padding-bottom:%?6?%}.tui-nomore[data-v-78b08d98]:before{content:" ";position:absolute;border-bottom:%?1?% solid #e5e5e5;-webkit-transform:scaleY(.5);transform:scaleY(.5);width:%?360?%;top:%?18?%;left:0}.tui-nomore-text[data-v-78b08d98]{color:#999;font-size:%?24?%;text-align:center;padding:0 %?18?%;height:%?36?%;line-height:%?36?%;position:relative;z-index:1}.tui-nomore-dot[data-v-78b08d98]{position:relative;text-align:center;-webkit-display:flex;display:-webkit-box;display:flex;-webkit-justify-content:center;-webkit-box-pack:center;justify-content:center;margin-top:%?10?%;padding-bottom:%?6?%}.tui-nomore-dot[data-v-78b08d98]:before{content:"";position:absolute;border-bottom:%?1?% solid #e5e5e5;-webkit-transform:scaleY(.5);transform:scaleY(.5);width:%?360?%;top:%?18?%}.tui-dot-text[data-v-78b08d98]{position:relative;color:#e5e5e5;font-size:10px;text-align:center;width:%?50?%;height:%?36?%;line-height:%?36?%;-webkit-transform:scale(.8);transform:scale(.8);-webkit-transform-origin:center center;transform-origin:center center;z-index:1}',""])},"6c2d":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"tui-drawer-class tui-drawer",class:[t.visible?"tui-drawer-show":"","tui-drawer-"+t.mode]},[t.mask?i("v-uni-view",{staticClass:"tui-drawer-mask",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleMaskClick.apply(void 0,arguments)}}}):t._e(),i("v-uni-view",{staticClass:"tui-drawer-container"},[t._t("default")],2)],1)},n=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})},"6ca2":function(t,e,i){var a=i("db49");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("5bf93040",a,!0,{sourceMap:!1,shadowMode:!1})},7318:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".tui-drawer[data-v-19469a54]{visibility:hidden}.tui-drawer-show[data-v-19469a54]{visibility:visible}.tui-drawer-show .tui-drawer-mask[data-v-19469a54]{display:block;opacity:1}.tui-drawer-show .tui-drawer-container[data-v-19469a54]{opacity:1}.tui-drawer-show.tui-drawer-left .tui-drawer-container[data-v-19469a54],.tui-drawer-show.tui-drawer-right .tui-drawer-container[data-v-19469a54]{-webkit-transform:translate3d(0,-50%,0);transform:translate3d(0,-50%,0)}.tui-drawer-mask[data-v-19469a54]{opacity:0;position:fixed;top:0;left:0;right:0;bottom:0;z-index:8888;background:rgba(0,0,0,.6);-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out}.tui-drawer-container[data-v-19469a54]{position:fixed;left:50%;height:100%;top:0;-webkit-transform:translate3d(-50%,-50%,0);transform:translate3d(-50%,-50%,0);-webkit-transform-origin:center;transform-origin:center;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;z-index:99999;opacity:0;overflow-y:scroll;background:#fff;-webkit-overflow-scrolling:touch;-ms-touch-action:pan-y cross-slide-y;-ms-scroll-chaining:none;-ms-scroll-limit:0 50 0 50}.tui-drawer-left .tui-drawer-container[data-v-19469a54]{left:0;top:50%;-webkit-transform:translate3d(-100%,-50%,0);transform:translate3d(-100%,-50%,0)}.tui-drawer-right .tui-drawer-container[data-v-19469a54]{right:0;top:50%;left:auto;-webkit-transform:translate3d(100%,-50%,0);transform:translate3d(100%,-50%,0)}",""])},"7eb6":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("c5f6");var a={name:"tuiLoadmore",props:{text:{type:String,default:"正在加载..."},visible:{type:Boolean,default:!1},index:{type:Number,default:1},type:{type:String,default:""}}};e.default=a},8633:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"container"},[i("v-uni-view",{staticClass:"tui-header-box"},[i("v-uni-view",{staticClass:"tui-header",style:{width:t.width+"px",height:t.height+"px"}},[i("v-uni-view",{staticClass:"tui-back",style:{marginTop:t.arrowTop+"px"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.back.apply(void 0,arguments)}}},[i("tui-icon",{attrs:{name:"arrowleft",color:"#000"}})],1),i("v-uni-view",{staticClass:"tui-searchbox tui-search-mr",style:{marginTop:t.inputTop+"px"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.search.apply(void 0,arguments)}}},[t.searchKey?t._e():i("v-uni-text",{staticClass:"tui-search-text"},[t._v("搜索商品")]),t.searchKey?i("v-uni-view",{staticClass:"tui-search-key"},[i("v-uni-view",{staticClass:"tui-key-text"},[t._v(t._s(t.searchKey))]),i("tui-icon",{attrs:{name:"shut",size:12,color:"#fff"}})],1):t._e()],1)],1)],1),i("v-uni-view",{staticClass:"tui-header-screen",style:{top:t.height+"px"}},[i("v-uni-view",{staticClass:"tui-screen-top"},[i("v-uni-view",{staticClass:"tui-top-item tui-icon-ml",class:[0==t.tabIndex?"tui-active tui-bold":""],attrs:{"data-index":"0"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.screen.apply(void 0,arguments)}}},[i("v-uni-view",[t._v(t._s(t.selectedName))]),i("tui-icon",{attrs:{name:t.selectH>0?"arrowup":"arrowdown",size:14,color:0==t.tabIndex?"#e41f19":"#444","tui-icon-class":"tui-ml"}})],1),i("v-uni-view",{staticClass:"tui-top-item",class:[1==t.tabIndex?"tui-active tui-bold":""],attrs:{"data-index":"1"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.screen.apply(void 0,arguments)}}},[t._v("销量")]),i("v-uni-view",{staticClass:"tui-top-item",attrs:{"data-index":"2"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.screen.apply(void 0,arguments)}}},[i("tui-icon",{attrs:{name:t.isList?"manage":"listview",size:t.isList?22:18,bold:!t.isList,color:"#333"}})],1),i("v-uni-view",{staticClass:"tui-top-item tui-icon-ml",attrs:{"data-index":"3"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.screen.apply(void 0,arguments)}}},[i("v-uni-text",[t._v("筛选")]),i("tui-icon",{attrs:{name:"screen",size:12,color:"#333","tui-icon-class":"tui-ml",bold:!0}})],1),i("v-uni-view",{staticClass:"tui-dropdownlist",class:[t.selectH>0?"tui-dropdownlist-show":""],style:{height:t.selectH+"rpx"}},t._l(t.dropdownList,function(e,a){return i("v-uni-view",{key:a,staticClass:"tui-dropdownlist-item tui-icon-middle",class:[e.selected?"tui-bold":""],attrs:{"data-index":a},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.dropdownItem.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"tui-ml tui-middle"},[t._v(t._s(e.name))]),e.selected?i("tui-icon",{attrs:{name:"check",size:16,color:"#e41f19",bold:!0,"tui-icon-class":"tui-middle"}}):t._e()],1)}),1),i("v-uni-view",{staticClass:"tui-dropdownlist-mask",class:[t.selectH>0?"tui-mask-show":""],on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.hideDropdownList.apply(void 0,arguments)}}})],1)],1),i("v-uni-view",{staticClass:"tui-product-list",staticStyle:{"margin-top":"125px"}},[i("v-uni-view",{staticClass:"tui-product-container"},[t._l(t.productList,function(e,a){return[i("v-uni-view",{key:a+"_0",staticClass:"tui-pro-item",class:t.isList?"tui-flex-list":"",attrs:{"hover-class":"hover","hover-start-time":150},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.detail(e.goods_id)}}},[i("v-uni-image",{staticClass:"tui-pro-img",class:t.isList?"tui-proimg-list":"",attrs:{src:t.getimg+e.imgs}}),i("v-uni-view",{staticClass:"tui-pro-content"},[i("v-uni-view",{staticClass:"tui-pro-tit"},[t._v(t._s(e.goods_name))]),i("v-uni-view",[i("v-uni-view",{staticClass:"tui-pro-price"},[i("v-uni-text",{staticClass:"tui-sale-price"},[t._v("￥"+t._s(e.price))]),i("v-uni-text",{staticClass:"tui-factory-price"},[t._v("￥"+t._s(e.market_price))])],1),0==e.sales?[i("v-uni-view",{staticClass:"tui-pro-pay"},[t._v("0人付款")])]:[i("v-uni-view",{staticClass:"tui-pro-pay"},[t._v(t._s(e.sales)+"人付款")])]],2)],1)],1)]})],2)],1),i("tui-top-dropdown",{attrs:{bgcolor:"#f7f7f7",show:t.dropScreenShow,paddingbtm:110,translatey:t.dropScreenH},on:{close:function(e){arguments[0]=e=t.$handleEvent(e),t.btnCloseDrop.apply(void 0,arguments)}}},[i("v-uni-scroll-view",{staticClass:"tui-scroll-box",attrs:{"scroll-y":"","scroll-top":t.scrollTop}},[i("v-uni-view",{staticClass:"tui-seizeaseat-20"}),t._l(t.attrData,function(e,a){return i("v-uni-view",{key:a,staticClass:"tui-drop-item tui-icon-middle",class:e.selected?"tui-bold":"",attrs:{"data-index":a},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.btnSelected.apply(void 0,arguments)}}},[e.selected?i("tui-icon",{attrs:{name:"check",size:16,color:"#e41f19",bold:!0,"tui-icon-class":"tui-middle"}}):t._e(),i("v-uni-text",{staticClass:"tui-ml tui-middle"},[t._v(t._s(e.name))])],1)}),i("v-uni-view",{staticClass:"tui-seizeaseat-30"})],2),i("v-uni-view",{staticClass:"tui-drop-btnbox"},[i("v-uni-view",{staticClass:"tui-drop-btn tui-btn-white",attrs:{"hover-class":"tui-white-hover","hover-stay-time":150},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.reset.apply(void 0,arguments)}}},[t._v("重置")]),i("v-uni-view",{staticClass:"tui-drop-btn tui-btn-red",attrs:{"hover-class":"tui-red-hover","hover-stay-time":150},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.btnSure.apply(void 0,arguments)}}},[t._v("确定")])],1)],1),i("tui-drawer",{attrs:{mode:"right",visible:t.drawer},on:{close:function(e){arguments[0]=e=t.$handleEvent(e),t.closeDrawer.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"tui-drawer-box",style:{paddingTop:t.height+"px"}},[i("v-uni-scroll-view",{staticClass:"tui-drawer-scroll",style:{height:t.drawerH+"px"},attrs:{"scroll-y":""}},[i("v-uni-view",{staticClass:"tui-drawer-title"},[i("v-uni-text",{staticClass:"tui-title-bold"},[t._v("分类")])],1),i("v-uni-view",{staticClass:"tui-drawer-content tui-flex-attr"},[i("v-uni-view",{staticClass:"tui-attr-item",class:0==t.currentId?"tui-btmItem-active":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.set_all.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"tui-attr-ellipsis"},[t._v("全部")])],1),t._l(t.flist,function(e,a){return[i("v-uni-view",{key:a+"_0",staticClass:"tui-attr-item",class:t.currentId==e.category_id?"tui-btmItem-active":"",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.tabtap(e)}}},[i("v-uni-view",{staticClass:"tui-attr-ellipsis"},[t._v(t._s(e.category_name))])],1)]})],2),t.currentId>0?[i("v-uni-view",{staticClass:"tui-drawer-title"},[i("v-uni-text",{staticClass:"tui-title-bold"},[t._v("子类")])],1),i("v-uni-view",{staticClass:"tui-drawer-content tui-flex-attr"},[t._l(t.slist,function(e,a){return e.pid==t.currentId?[i("v-uni-view",{key:a+"_0",staticClass:"tui-attr-item",class:e.category_id==t.current_children_id?"tui-btmItem-active":"",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.tab_children(e.category_id)}}},[i("v-uni-view",{staticClass:"tui-attr-ellipsis"},[t._v(t._s(e.category_name))])],1)]:t._e()})],2)]:t._e(),i("v-uni-view",{staticClass:"tui-safearea-bottom"})],2),i("v-uni-view",{staticClass:"tui-attr-btnbox"},[i("v-uni-view",{staticClass:"tui-attr-safearea"},[i("v-uni-view",{staticClass:"tui-drawer-btn tui-drawerbtn-black",attrs:{"hover-class":"tui-white-hover","hover-stay-time":150},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.reset_choose.apply(void 0,arguments)}}},[t._v("重置")]),i("v-uni-view",{staticClass:"tui-drawer-btn tui-drawerbtn-primary",attrs:{"hover-class":"tui-red-hover","hover-stay-time":150},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.closeDrawer.apply(void 0,arguments)}}},[t._v("确定")])],1)],1)],1)],1),i("tui-loadmore",{attrs:{visible:t.loadding,index:3,type:"red"}}),i("tui-nomore",{attrs:{visible:!t.pullUpOn&&t.isList,bgcolor:"#f7f7f7"}})],1)},n=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})},"8be5":function(t,e,i){"use strict";var a=i("bc29"),n=i.n(a);n.a},"9f9f":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,'uni-page-body[data-v-8aac3de6]{background:#f7f7f7}.container[data-v-8aac3de6]{padding-bottom:env(safe-area-inset-bottom)}\n\n/* 隐藏scroll-view滚动条*/[data-v-8aac3de6]::-webkit-scrollbar{width:0;height:0;color:transparent}.tui-header-box[data-v-8aac3de6]{width:100%;background:#fff;position:fixed;z-index:99998;left:0;top:0}.tui-header[data-v-8aac3de6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start}.tui-back[data-v-8aac3de6]{margin-left:%?8?%;height:32px!important;width:32px!important}.tui-searchbox[data-v-8aac3de6]{width:100%;height:30px;margin-right:%?30?%;border-radius:15px;font-size:12px;background:#f7f7f7;padding:3px 10px;box-sizing:border-box;color:#999;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;overflow:hidden}\n\n\n\n.tui-search-text[data-v-8aac3de6]{padding-left:%?16?%}.tui-search-key[data-v-8aac3de6]{max-width:80%;height:100%;padding:0 %?16?%;margin-left:%?12?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border-radius:15px;background:rgba(0,0,0,.5);color:#fff}.tui-key-text[data-v-8aac3de6]{box-sizing:border-box;padding-right:%?12?%;font-size:12px;line-height:12px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\n\n/*screen*/.tui-header-screen[data-v-8aac3de6]{width:100%;box-sizing:border-box;background:#fff;position:fixed;z-index:1000}.tui-screen-bottom[data-v-8aac3de6],.tui-screen-top[data-v-8aac3de6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;font-size:%?28?%;color:#333}.tui-screen-top[data-v-8aac3de6]{height:%?88?%;position:relative;background:#fff}.tui-top-item[data-v-8aac3de6]{height:%?28?%;line-height:%?28?%;-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.tui-topitem-active[data-v-8aac3de6]{color:#e41f19}.tui-screen-bottom[data-v-8aac3de6]{height:%?100?%;padding:0 %?30?%;box-sizing:border-box;font-size:%?24?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;overflow:hidden}.tui-bottom-text[data-v-8aac3de6]{line-height:%?26?%;max-width:82%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tui-bottom-item[data-v-8aac3de6]{-webkit-box-flex:1;-webkit-flex:1;flex:1;width:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding:0 %?12?%;box-sizing:border-box;background:#f7f7f7;margin-right:%?20?%;white-space:nowrap;height:%?60?%;border-radius:%?40?%}.tui-bottom-item[data-v-8aac3de6]:last-child{margin-right:0}.tui-btmItem-active[data-v-8aac3de6]{background:#fcedea!important;color:#e41f19;font-weight:700;position:relative}.tui-btmItem-active[data-v-8aac3de6]:after{content:"";position:absolute;border:%?1?% solid #e41f19;width:100%;height:100%;border-radius:%?40?%;left:0;top:0}.tui-btmItem-tap[data-v-8aac3de6]{position:relative;border-bottom-left-radius:0;border-bottom-right-radius:0}.tui-btmItem-tap[data-v-8aac3de6]:after{content:"";position:absolute;width:100%;height:%?22?%;background:#f7f7f7;left:0;top:%?58?%}.tui-bold[data-v-8aac3de6]{font-weight:700}.tui-active[data-v-8aac3de6]{color:#e41f19}.tui-icon-ml .tui-icon-class[data-v-8aac3de6]{margin-left:%?6?%}.tui-ml[data-v-8aac3de6]{margin-left:%?6?%}.tui-seizeaseat-20[data-v-8aac3de6]{height:%?20?%}.tui-seizeaseat-30[data-v-8aac3de6]{height:%?30?%}.tui-icon-middle .tui-icon-class[data-v-8aac3de6]{vertical-align:middle}.tui-middle[data-v-8aac3de6]{vertical-align:middle}\n\n/*screen*/\n\n/*顶部下拉选择 属性*/.tui-scroll-box[data-v-8aac3de6]{width:100%;height:%?480?%;box-sizing:border-box;position:relative;z-index:99;color:#fff;font-size:%?30?%;word-break:break-all}.tui-drop-item[data-v-8aac3de6]{color:#333;height:%?80?%;font-size:%?28?%;padding:%?20?% %?40?% %?20?% %?40?%;box-sizing:border-box;display:inline-block;width:50%}.tui-drop-btnbox[data-v-8aac3de6]{width:100%;height:%?100?%;position:absolute;left:0;bottom:0;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex}.tui-drop-btn[data-v-8aac3de6]{width:50%;font-size:%?32?%;text-align:center;height:%?100?%;line-height:%?100?%;border:0}.tui-btn-red[data-v-8aac3de6]{background:#e41f19;color:#fff}.tui-red-hover[data-v-8aac3de6]{background:#c51a15!important;color:#e5e5e5}.tui-btn-white[data-v-8aac3de6]{background:#fff;color:#333}.tui-white-hover[data-v-8aac3de6]{background:#e5e5e5;color:#2e2e2e}\n\n/*顶部下拉选择 属性*/\n\n/*顶部下拉选择 综合*/.tui-dropdownlist[data-v-8aac3de6]{width:100%;position:absolute;background:#fff;border-bottom-left-radius:%?24?%;border-bottom-right-radius:%?24?%;overflow:hidden;box-sizing:border-box;padding-top:%?10?%;padding-bottom:%?26?%;left:0;top:%?88?%;visibility:hidden;-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out;z-index:999}.tui-dropdownlist-show[data-v-8aac3de6]{visibility:visible}.tui-dropdownlist-mask[data-v-8aac3de6]{position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,.6);z-index:-1;-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out;opacity:0;visibility:hidden}.tui-mask-show[data-v-8aac3de6]{opacity:1;visibility:visible}.tui-dropdownlist-item[data-v-8aac3de6]{color:#333;height:%?70?%;font-size:%?28?%;padding:0 %?40?%;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}\n\n/*顶部下拉选择 综合*/.tui-drawer-box[data-v-8aac3de6]{width:%?686?%;font-size:%?24?%;overflow:hidden;position:relative;padding-bottom:%?100?%}.tui-drawer-title[data-v-8aac3de6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding:0 %?30?%;box-sizing:border-box;height:%?80?%}.tui-title-bold[data-v-8aac3de6]{font-size:%?26?%;font-weight:700;-webkit-flex-shrink:0;flex-shrink:0}.tui-location[data-v-8aac3de6]{margin-right:%?6?%}.tui-attr-right[data-v-8aac3de6]{width:70%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align:right}.tui-all-box[data-v-8aac3de6]{width:90%;white-space:nowrap;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}.tui-drawer-content[data-v-8aac3de6]{padding:%?16?% %?30?% %?30?% %?30?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;box-sizing:border-box}.tui-input[data-v-8aac3de6]{border:0;height:%?64?%;border-radius:%?32?%;width:45%;background:#f7f7f7;text-align:center;font-size:%?24?%;color:#333}.tui-phcolor[data-v-8aac3de6]{text-align:center;color:#b2b2b2;font-size:%?24?%}.tui-flex-attr[data-v-8aac3de6]{-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start}.tui-attr-item[data-v-8aac3de6]{width:30%;height:%?64?%;background:#f7f7f7;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding:0 %?4?%;box-sizing:border-box;border-radius:%?32?%;margin-right:5%;margin-bottom:5%}.tui-attr-ellipsis[data-v-8aac3de6]{white-space:nowrap;text-overflow:ellipsis;overflow:hidden;width:96%;text-align:center}.tui-attr-item[data-v-8aac3de6]:nth-of-type(3n){margin-right:0}.tui-attr-btnbox[data-v-8aac3de6]{width:100%;position:absolute;left:0;bottom:0;box-sizing:border-box;padding:0 %?30?%;background:#fff}.tui-attr-safearea[data-v-8aac3de6]{height:%?100?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding-bottom:env(safe-area-inset-bottom)}.tui-safearea-bottom[data-v-8aac3de6]{width:100%;height:env(safe-area-inset-bottom)}.tui-attr-btnbox[data-v-8aac3de6]:before{content:"";position:absolute;top:0;right:0;left:0;border-top:%?1?% solid #eaeef1;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.tui-drawer-btn[data-v-8aac3de6]{width:47%;text-align:center;height:%?60?%;border-radius:%?30?%;-webkit-flex-shrink:0;flex-shrink:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;box-sizing:border-box}.tui-drawerbtn-black[data-v-8aac3de6]{border:%?1?% solid #555}.tui-drawerbtn-primary[data-v-8aac3de6]{background:#e41f19;color:#fff}\n\n/* 商品列表*/.tui-product-list[data-v-8aac3de6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;flex-wrap:wrap;box-sizing:border-box}.tui-product-container[data-v-8aac3de6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-flex:1;-webkit-flex:1;flex:1;margin-right:%?10?%}.tui-product-container[data-v-8aac3de6]:last-child{margin-right:0}.tui-pro-item[data-v-8aac3de6]{width:46%;margin:0 2%;margin-bottom:10px;background:#fff;box-sizing:border-box;border-radius:%?12?%;overflow:hidden;-webkit-transition:all .15s ease-in-out;transition:all .15s ease-in-out}.tui-flex-list[data-v-8aac3de6]{display:-webkit-box;display:-webkit-flex;display:flex;width:100%;margin:0 0 5px;padding:10px 0 0 10px}.tui-pro-img[data-v-8aac3de6]{width:100%;height:175px;display:block}.tui-proimg-list[data-v-8aac3de6]{width:%?200?%;height:%?200?%!important;-webkit-flex-shrink:0;flex-shrink:0;border-radius:%?12?%}.tui-pro-content[data-v-8aac3de6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;box-sizing:border-box;padding:%?20?%}.tui-pro-tit[data-v-8aac3de6]{color:#2e2e2e;font-size:%?26?%;height:36px;line-height:18px;word-break:break-all;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2}.tui-pro-price[data-v-8aac3de6]{padding-top:%?18?%}.tui-sale-price[data-v-8aac3de6]{font-size:%?34?%;font-weight:500;color:#e41f19}.tui-factory-price[data-v-8aac3de6]{font-size:%?24?%;color:#a0a0a0;text-decoration:line-through;padding-left:%?12?%}.tui-pro-pay[data-v-8aac3de6]{padding-top:%?10?%;font-size:%?24?%;color:#656565}\n\n/* 商品列表*/body.?%PAGE?%[data-v-8aac3de6]{background:#f7f7f7}',""])},a32a:function(t,e,i){"use strict";i.r(e);var a=i("3aec"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);e["default"]=n.a},bb70:function(t,e,i){"use strict";i.r(e);var a=i("28b2"),n=i("0212");for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);i("378f");var r=i("2877"),s=Object(r["a"])(n["default"],a["a"],a["b"],!1,null,"2ba9b748",null);e["default"]=s.exports},bc29:function(t,e,i){var a=i("7318");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("1537b206",a,!0,{sourceMap:!1,shadowMode:!1})},c374:function(t,e,i){"use strict";i.r(e);var a=i("4e40"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);e["default"]=n.a},c51b:function(t,e,i){"use strict";i.r(e);var a=i("6c2d"),n=i("a32a");for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);i("8be5");var r=i("2877"),s=Object(r["a"])(n["default"],a["a"],a["b"],!1,null,"19469a54",null);e["default"]=s.exports},d9cc:function(t,e,i){"use strict";i.r(e);var a=i("8633"),n=i("15e6");for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);i("422b");var r=i("2877"),s=Object(r["a"])(n["default"],a["a"],a["b"],!1,null,"8aac3de6",null);e["default"]=s.exports},db49:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".tui-loadmore[data-v-577e436e]{width:48%;margin:1.5em auto;line-height:1.5em;font-size:%?24?%;text-align:center}.tui-loading-1[data-v-577e436e]{margin:0 5px;width:20px;height:20px;display:inline-block;vertical-align:middle;-webkit-animation:a-data-v-577e436e 1s steps(12) infinite;animation:a-data-v-577e436e 1s steps(12) infinite;background:transparent url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgxMDB2MTAwSDB6Ii8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTlFOUU5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTMwKSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iIzk4OTY5NyIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgzMCAxMDUuOTggNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjOUI5OTlBIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDYwIDc1Ljk4IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0EzQTFBMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSg5MCA2NSA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNBQkE5QUEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoMTIwIDU4LjY2IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0IyQjJCMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgxNTAgNTQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjQkFCOEI5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDE4MCA1MCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDMkMwQzEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTE1MCA0NS45OCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDQkNCQ0IiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTEyMCA0MS4zNCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNEMkQyRDIiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTkwIDM1IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0RBREFEQSIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgtNjAgMjQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTJFMkUyIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKC0zMCAtNS45OCA2NSkiLz48L3N2Zz4=) no-repeat;background-size:100%}@-webkit-keyframes a-data-v-577e436e{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes a-data-v-577e436e{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.tui-loadmore-tips[data-v-577e436e]{display:inline-block;vertical-align:middle}.tui-loading-2[data-v-577e436e]{width:%?28?%;height:%?28?%;border:1px solid #8f8d8e;border-radius:50%;margin:0 6px;display:inline-block;vertical-align:middle;-webkit-clip-path:polygon(0 0,100% 0,100% 30%,0 30%);clip-path:polygon(0 0,100% 0,100% 30%,0 30%);-webkit-animation:rotate-data-v-577e436e 1s linear infinite;animation:rotate-data-v-577e436e 1s linear infinite}@-webkit-keyframes rotate-data-v-577e436e{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-data-v-577e436e{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.tui-loading-3[data-v-577e436e]{display:inline-block;margin:0 6px;vertical-align:middle;width:%?28?%;height:%?28?%;background:0 0;border-radius:50%;border:2px solid;border-color:#e5e5e5 #e5e5e5 #e5e5e5 #8f8d8e;-webkit-animation:tui-rotate-data-v-577e436e .7s linear infinite;animation:tui-rotate-data-v-577e436e .7s linear infinite}.tui-loading-3.tui-loading-primary[data-v-577e436e]{border-color:#e5e5e5 #e5e5e5 #e5e5e5 #5677fc}.tui-loading-3.tui-loading-green[data-v-577e436e]{border-color:#e5e5e5 #e5e5e5 #e5e5e5 #19be6b}.tui-loading-3.tui-loading-orange[data-v-577e436e]{border-color:#e5e5e5 #e5e5e5 #e5e5e5 #ff7900}.tui-loading-3.tui-loading-red[data-v-577e436e]{border-color:#ededed #ededed #ededed #ed3f14}@-webkit-keyframes tui-rotate-data-v-577e436e{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes tui-rotate-data-v-577e436e{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}",""])},dcbb:function(t,e,i){"use strict";var a=i("6ca2"),n=i.n(a);n.a},dfd4:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".tui-dropdown-box[data-v-2ba9b748]{width:100%;position:fixed;box-sizing:border-box;border-bottom-right-radius:%?24?%;border-bottom-left-radius:%?24?%;-webkit-transform:translateZ(0);transform:translateZ(0);overflow:hidden;visibility:hidden;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;z-index:989;top:0}.tui-dropdown-show[data-v-2ba9b748]{visibility:visible}.tui-dropdown-mask[data-v-2ba9b748]{position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,.6);z-index:986;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;opacity:0;visibility:hidden}.tui-mask-show[data-v-2ba9b748]{opacity:1;visibility:visible}",""])},e03e:function(t,e,i){"use strict";var a=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("f499")),o=a(i("5d73"));i("ac6a");var r=a(i("f8d3")),s=a(i("c51b")),d=a(i("0cb9")),l=a(i("1a8d")),c=a(i("bb70")),u={components:{tuiIcon:r.default,tuiDrawer:s.default,tuiLoadmore:d.default,tuiNomore:l.default,tuiTopDropdown:c.default},data:function(){return{getimg:this.$getimg,currentId:0,current_children_id:0,currentName:"",flist:[],slist:[],category:"",searchKey:"",width:200,height:64,inputTop:0,arrowTop:0,dropScreenH:0,attrData:[],attrIndex:-1,dropScreenShow:!1,scrollTop:0,tabIndex:0,isList:!1,drawer:!1,drawerH:0,selectedName:"综合",selectH:0,dropdownList:[{name:"综合",selected:!0},{name:"价格升序",selected:!1},{name:"价格降序",selected:!1}],attrArr:[{name:"新品",selectedName:"新品",isActive:!1,list:[]}],productList:[],pageIndex:1,loadding:!1,pullUpOn:!0,cid:"",sid:"",ssid:"",is_search:0}},onLoad:function(t){var e=this;t.cid&&(this.cid=t.cid,this.currentId=t.cid,t.sid&&0!=t.sid?(this.sid=t.sid,this.current_children_id=t.sid,console.log("有sid",this.sid),this.get_pro_cate(this.sid)):0==this.cid?(console.log("请求所有商品"),this.get_pro()):(console.log("请求大类商品"),this.get_pro_cate(this.cid))),t.key&&(this.is_search=1,this.get_pro_search(t.key)),this._load(),0==this.is_search&&this.closeDrawer();var i={};uni.getSystemInfo({success:function(a){e.width=i.left||a.windowWidth,e.height=i.top?i.top+i.height+8:a.statusBarHeight+44,e.inputTop=i.top?i.top+(i.height-30)/2:a.statusBarHeight+7,e.arrowTop=i.top?i.top+(i.height-32)/2:a.statusBarHeight+6,e.searchKey=t.searchKey||"",e.dropScreenH=750*e.height/a.windowWidth+186,e.drawerH=a.windowHeight-uni.upx2px(100)-e.height}})},methods:{_load:function(){var t=this;this.tabbar=this.$api.http.get("category/all_category").then(function(e){var i=e.data;i.forEach(function(e){e.pid?t.slist.push(e):t.flist.push(e)})})},get_pro:function(){var t=this;this.$api.http.get("product/get_recent").then(function(e){t.productList=e.data,t.all=e.data,console.log(t.productList)})},get_pro_cate:function(t){var e=this;this.$api.http.get("product/get_cate_pros?id="+t).then(function(t){e.productList=t.data,e.all=t.data,console.log(e.productList)})},get_pro_search:function(t){var e=this;this.$api.http.get("product/search?name="+t).then(function(t){e.productList=t.data,e.all=t.data,console.log(e.productList),e.is_search=0})},tabtap:function(t){this.currentName=t.category_name,this.currentId=t.category_id,this.current_children_id=0},tab_children:function(t){this.current_children_id==t?this.current_children_id=0:this.current_children_id=t},set_all:function(){this.currentId=0,this.current_children_id=0},px:function(t){return uni.upx2px(t)+"px"},btnSelected:function(t){var e=t.currentTarget.dataset.index;this.$set(this.attrData[e],"selected",!this.attrData[e].selected)},reset:function(){var t=this.attrData,e=!0,i=!1,a=void 0;try{for(var n,r=(0,o.default)(t);!(e=(n=r.next()).done);e=!0){var s=n.value;s.selected=!1}}catch(d){i=!0,a=d}finally{try{e||null==r.return||r.return()}finally{if(i)throw a}}this.attrData=t},btnCloseDrop:function(){var t=this;this.scrollTop=1,this.$nextTick(function(){t.scrollTop=0}),this.dropScreenShow=!1,this.attrIndex=-1},btnSure:function(){var t=this.attrIndex,e=this.attrData,i=!1,a="",n=!0,r=!1,s=void 0;try{for(var d,l=(0,o.default)(e);!(n=(d=l.next()).done);n=!0){var c=d.value;c.selected&&(i=!0,a+=a?";"+c.name:c.name)}}catch(b){r=!0,s=b}finally{try{n||null==l.return||l.return()}finally{if(r)throw s}}var u=this.attrArr[t];this.btnCloseDrop(),this.$set(u,"isActive",i),this.$set(u,"selectedName",a)},showDropdownList:function(){this.selectH=246,this.tabIndex=0},hideDropdownList:function(){this.selectH=0},dropdownItem:function(t){for(var e=t.currentTarget.dataset.index,i=this.dropdownList,a=0;a<i.length;a++)i[a].selected=a===e;this.dropdownList=i,this.selectedName=0==e?"综合":"价格",this.selectH=0},screen:function(t){var e=t.currentTarget.dataset.index;0==e?this.showDropdownList():1==e?this.tabIndex=1:2==e?this.isList=!this.isList:3==e&&(this.drawer=!0)},reset_choose:function(){this.currentId=0,this.current_children_id=0},closeDrawer:function(){var t=0;this.sid&&(t=this.sid),this.currentId>0&&(t=this.current_children_id>0?this.current_children_id:this.currentId),console.log("sid:",t),t&&0!=t?(console.log("pp7"),this.get_pro_cate(t)):this.cid?(console.log("cid:",this.cid),this.get_pro_cate(this.cid)):this.get_pro(),this.drawer=!1,this.sid=""},back:function(){this.drawer?this.closeDrawer():uni.navigateBack()},search:function(){uni.redirectTo({url:"../news-search/news-search"})},detail:function(t){uni.navigateTo({url:"/pages/extend-view/productDetail/productDetail?id="+t})}},onPullDownRefresh:function(){this.pageIndex=1,this.pullUpOn=!0,this.loadding=!1,uni.stopPullDownRefresh()},onReachBottom:function(){if(this.pullUpOn)if(this.loadding=!0,4==this.pageIndex)this.loadding=!1,this.pullUpOn=!1;else{var t=JSON.parse((0,n.default)(this.productList));t=t.splice(0,10),1==this.pageIndex&&(t=t.reverse()),this.productList=this.productList.concat(t),this.pageIndex=this.pageIndex+1,this.loadding=!1}}};e.default=u},f77c:function(t,e,i){var a=i("9f9f");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("8d471468",a,!0,{sourceMap:!1,shadowMode:!1})}}]);