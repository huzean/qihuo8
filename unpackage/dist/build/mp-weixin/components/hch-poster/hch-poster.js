(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/hch-poster/hch-poster"],{1095:function(e,t,n){"use strict";n.r(t);var o=n("8718"),i=n("7a84");for(var a in i)"default"!==a&&function(e){n.d(t,e,(function(){return i[e]}))}(a);n("5b06");var s,c=n("f0c5"),r=Object(c["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],s);t["default"]=r.exports},"368d":function(e,t,n){},"5b06":function(e,t,n){"use strict";var o=n("368d"),i=n.n(o);i.a},"704e":function(e,t,n){"use strict";(function(e){function n(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={data:function(){return{}},props:{canvasFlag:{type:Boolean,default:!0},posterObj:{type:Object,default:{url:"",icon:"https://img0.zuipin.cn/mp_zuipin/poster/hch-hyj.png",title:"",discountPrice:"",orignPrice:"",code:"https://img0.zuipin.cn/mp_zuipin/poster/hch-code.png"}}},methods:{roundRect:function(e,t,n,o,i,a,s,c,r){if(e.beginPath(),e.arc(t+a,n+a,a,Math.PI,1.5*Math.PI),e.moveTo(t+a,n),e.lineTo(t+o-a,n),e.arc(t+o-a,n+a,a,1.5*Math.PI,2*Math.PI),e.lineTo(t+o,n+i-a),e.arc(t+o-a,n+i-a,a,0,.5*Math.PI),e.arc(t+a,n+i-a,a,.5*Math.PI,Math.PI),e.lineTo(t,n+a),"btn"==r){var l=e.createLinearGradient(0,0,200,0);l.addColorStop(0,s),l.addColorStop(1,c),e.setFillStyle(l),e.fill()}else s&&(e.setFillStyle(s),e.fill()),c&&(e.setStrokeStyle(c),e.stroke());e.closePath(),e.clip()},canvasMultiLineText:function(e,t,n,o){for(var i=t.split(""),a="",s=[],c=0;c<i.length;c++)e.measureText(a).width<n?a+=i[c]:(c--,s.push(a),a="");if(s.push(a),s.length>o){for(var r=s.slice(0,o),l=r[1],h="",u=[],f=0;f<l.length;f++){if(!(e.measureText(h).width<n))break;h+=l[f]}u.push(h);var p=u[0]+"...";r.splice(o-1,1,p),s=r}return s},codeImg:function(){var t=this;return new Promise((function(o,i){request({method:"get",url:"/spSupport/getwxacodeunlimit",header:{"Content-Type":"application/x-www-form-urlencoded"},data:{version:t.$parent.globalData.version,scene:"sku=".concat(t.sku),page:"pages/product/detail",width:"128px"}}).then((function(t){if(0==t.data.code){var i=wx.getFileSystemManager(),a="tmp_img_src",s="".concat(wx.env.USER_DATA_PATH,"/").concat(a,".jpg");i.writeFile({filePath:s,data:t.data.data,encoding:"binary",success:function(){o(s)},fail:function(){this.canvasFlag=!0,e.showToast({title:"海报生成失败",duration:2e3,icon:"none"})}})}else e.showToast(n({title:t.data.message,icon:"none",duration:2e3},"icon","none"))})).catch((function(){t.canvasFlag=!0,e.showToast({title:"海报生成失败",duration:2e3,icon:"none"})}))}))},createCanvasImage:function(){var t=this;console.log(this.posterObj,"posterObj"),console.log("海报生成中"),wx.showLoading({title:"海报生成中..."});var n=this,o=wx.getSystemInfoSync();this.phoneH=o.windowHeight-150,this.phoneW=o.windowWidth;this.phoneW;var i=this.phoneH/667;console.log(this.phoneH,this.phoneW);var a=wx.createCanvasContext("myCanvas"),s=this.posterObj.url,c=this.posterObj.icon,r=this.posterObj.code,l="https://imgzuipin.oss-cn-hangzhou.aliyuncs.com/mp_zuipin/poster/close_btn.png";console.log(a),console.log(this),a.draw(),a.save(),this.roundRect(a,50,100,this.phoneW-100,this.phoneH-130,10,"#fff","#fff"),a.restore(),a.save(),this.roundRect(a,50,100,this.phoneW-100,370*i,10,"#f7f7f7","#f7f7f7"),a.restore(),wx.getImageInfo({src:s,success:function(e){a.save(),n.roundRect(a,(n.phoneW-(n.phoneW-130))/2,120,n.phoneW-130,230*i,10,"#f7f7f7","#f7f7f7"),a.drawImage(e.path,(n.phoneW-(n.phoneW-130))/2,120,n.phoneW-130,230*i,10),a.restore(),a.draw(!0)},fail:function(){n.canvasFlag=!0,e.showToast({title:"海报生成失败",duration:2e3,icon:"none"})}}),wx.getImageInfo({src:l,success:function(e){a.drawImage(e.path,n.phoneW-100+50+5,100,24,24),a.draw(!0)},fail:function(){n.canvasFlag=!0,e.showToast({title:"海报生成失败",duration:2e3,icon:"none"})}}),setTimeout((function(){a.setGlobalAlpha(1),a.setFillStyle("#1c1c1c"),a.setFontSize(14),a.font="normal bold 14px sans-serif";for(var e=t.posterObj.title,n=t.canvasMultiLineText(a,e,t.phoneW-130,2),o=360,s=65,c=18,r=0;r<n.length;r++)a.fillText(n[r],s,(o+c*r-15)*i+60,t.phoneW-130),a.draw(!0)}),500),wx.getImageInfo({src:c,success:function(e){a.drawImage(e.path,65,460*i,44,15),a.draw(!0)},fail:function(){n.canvasFlag=!0,e.showToast({title:"海报生成失败",duration:2e3,icon:"none"})}}),a.setFontSize(12),a.setFillStyle("#c00000"),a.font="normal 12px sans-serif",a.fillText("￥",110,476*i,60),a.setFontSize(16);var h=this.posterObj.discountPrice,u=this.posterObj.orignPrice,f=a.measureText(h).width;a.fillText(h,120,476*i,f),a.beginPath(),a.setFontSize(10),a.setFillStyle("#999");var p=a.measureText(u).width;a.fillText("￥".concat(u),120+f+5,475*i,p),a.moveTo(120+f+5,470*i),a.lineTo(120+f+5+p,470*i),a.setStrokeStyle("#999"),a.stroke(),a.closePath(),wx.getImageInfo({src:r,success:function(e){a.drawImage(e.path,(n.phoneW-70)/2,490*i,70,70),a.draw(!0)},fail:function(){n.canvasFlag=!0,e.showToast({title:"海报生成失败",duration:2e3,icon:"none"})}}),a.setFontSize(14),a.setFillStyle("#2f1709"),a.font="normal bold 14px sans-serif",a.fillText("小程序的名称",(n.phoneW-90)/2,590*i,90),a.save(),this.roundRect(a,(this.phoneW-160)/2,this.phoneH-55+60,160,36,18,"#ff3600","#ff6a00","btn"),a.restore(),a.setFontSize(14),a.setFillStyle("#fff"),a.font="normal bold 14px sans-serif",a.fillText("保存图片",(n.phoneW-58)/2,this.phoneH-33+60,58),wx.hideLoading()},saveCanvasImage:function(){console.log("点击了保存"),wx.showLoading({title:"保存中..."});var t=this;e.canvasToTempFilePath({x:50,y:40,width:this.phoneW-100,height:this.phoneH-120,destWidth:5*(this.phoneW-100),destHeight:5*(this.phoneH-120),canvasId:"myCanvas",success:function(n){e.saveImageToPhotosAlbum({filePath:n.tempFilePath,success:function(n){wx.hideLoading(),e.showToast({title:"图片保存成功，可以去分享啦~",duration:2e3}),t.canvasCancelEvn()},fail:function(){e.showToast({title:"保存失败，稍后再试",duration:2e3,icon:"none"}),wx.hideLoading()}})},fail:function(){e.showToast({title:"保存失败，稍后再试",duration:2e3,icon:"none"}),wx.hideLoading()}})},canvasCancelEvn:function(){console.log("关闭海报"),this.$emit("cancel",!0)}}};t.default=o}).call(this,n("543d")["default"])},"7a84":function(e,t,n){"use strict";n.r(t);var o=n("704e"),i=n.n(o);for(var a in o)"default"!==a&&function(e){n.d(t,e,(function(){return o[e]}))}(a);t["default"]=i.a},8718:function(e,t,n){"use strict";var o;n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return o}));var i=function(){var e=this,t=e.$createElement;e._self._c},a=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/hch-poster/hch-poster-create-component',
    {
        'components/hch-poster/hch-poster-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("1095"))
        })
    },
    [['components/hch-poster/hch-poster-create-component']]
]);
