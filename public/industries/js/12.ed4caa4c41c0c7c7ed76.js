webpackJsonp([12],{1044:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("transition",{attrs:{name:"inUp"}},[t("div",{staticClass:"person-sertting"},[t("div",{staticClass:"title"},[t("span",[n._v("设置你的信息")])]),n._v(" "),t("div",{staticClass:"center"},[t("div",{staticClass:"top"},[t("group",[t("popup-picker",{attrs:{title:"性别",placeholder:"请修改",data:n.sexOption},model:{value:n.sex,callback:function(e){n.sex=e},expression:"sex"}}),n._v(" "),t("popup-picker",{attrs:{title:"年龄段",data:n.ageOption,placeholder:"请修改"},model:{value:n.age,callback:function(e){n.age=e},expression:"age"}})],1)],1),n._v(" "),t("div",{staticClass:"bottom"},[t("group",{staticClass:"bottom-group"},[t("popup-picker",{ref:"industryPicker",attrs:{title:"我所在的行业",data:n.industryOption,columns:1,placeholder:"请修改","show-name":""},on:{"on-hide":n.shadeHide},model:{value:n.industry,callback:function(e){n.industry=e},expression:"industry"}}),n._v(" "),t("div",{staticClass:"company-box"},[t("popup-picker",{ref:"companyPicker",attrs:{title:"我的公司",data:n.companyOption,columns:1,placeholder:"请修改","show-name":""},model:{value:n.company,callback:function(e){n.company=e},expression:"company"}}),n._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:n.shade,expression:"shade"}],staticClass:"company-shade",on:{click:n.verify}})],1),n._v(" "),t("popup-picker",{attrs:{title:"我的职务",data:n.jobOption,placeholder:"请修改"},model:{value:n.job,callback:function(e){n.job=e},expression:"job"}})],1)],1)]),n._v(" "),t("div",{staticClass:"footer"},[t("div",{staticClass:"btn",on:{click:n.back}},[n._v("\n          取消\n      ")]),n._v(" "),t("div",{staticClass:"btn",on:{click:function(e){n.isShowConfirm=!0}}},[n._v("\n          保存\n      ")])]),n._v(" "),t("div",[t("alert",{attrs:{title:""},on:{"on-hide":n.onHide},model:{value:n.show,callback:function(e){n.show=e},expression:"show"}},[n._v("请先选择行业")]),n._v(" "),t("confirm",{attrs:{title:"是否修改设置并重新进入"},on:{"on-cancel":function(e){n.isShowConfirm=!1},"on-confirm":n.saveAndEsc},model:{value:n.isShowConfirm,callback:function(e){n.isShowConfirm=e},expression:"isShowConfirm"}})],1)])])},staticRenderFns:[]}},600:function(n,e,t){t(956);var i=t(6)(t(889),t(1044),null,null);n.exports=i.exports},787:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=t(218),o=t.n(i);e.default={name:"confirm",components:{XDialog:o.a},props:{value:{type:Boolean,default:!1},showInput:{type:Boolean,default:!1},placeholder:{type:String,default:""},theme:{type:String,default:"ios"},hideOnBlur:{type:Boolean,default:!1},title:String,confirmText:String,cancelText:String,maskTransition:{type:String,default:"vux-fade"},dialogTransition:{type:String,default:"vux-dialog"},content:String,closeOnConfirm:{type:Boolean,default:!0}},created:function(){this.showValue=this.show,this.value&&(this.showValue=this.value)},watch:{value:function(n){this.showValue=n},showValue:function(n){var e=this;this.$emit("input",n),n&&this.showInput&&(this.msg="",setTimeout(function(){e.$refs.input&&e.$refs.input.focus()},300))}},data:function(){return{msg:"",showValue:!1}},methods:{_onConfirm:function(){this.closeOnConfirm&&(this.showValue=!1),this.$emit("on-confirm",this.msg)},_onCancel:function(){this.showValue=!1,this.$emit("on-cancel")}}}},797:function(n,e,t){e=n.exports=t(586)(),e.push([n.i,'.vux-fade-enter-active,.vux-fade-leave-active{opacity:1;-webkit-transition:opacity .2s linear;transition:opacity .2s linear}.vux-fade-enter,.vux-fade-leave-to{opacity:0}.vux-dialog-enter-active,.vux-dialog-leave-active{opacity:1;-webkit-transition-duration:.4s;transition-duration:.4s;-webkit-transform:translate(-50%,-50%) scale(1)!important;transform:translate(-50%,-50%) scale(1)!important;-webkit-transition-property:opacity,-webkit-transform!important;transition-property:opacity,-webkit-transform!important;transition-property:transform,opacity!important;transition-property:transform,opacity,-webkit-transform!important}.vux-dialog-leave-active{-webkit-transition-duration:.3s;transition-duration:.3s}.vux-dialog-enter{opacity:0;-webkit-transform:translate(-50%,-50%) scale(1.185)!important;transform:translate(-50%,-50%) scale(1.185)!important}.vux-dialog-leave-active{opacity:0;-webkit-transform:translate(-50%,-50%) scale(.85)!important;transform:translate(-50%,-50%) scale(.85)!important}.vux-mask-enter,.vux-mask-leave-active{opacity:0}.vux-mask-enter-active,.vux-mask-leave-active{-webkit-transition:opacity .3s;transition:opacity .3s}.weui-mask{background:rgba(0,0,0,.6)}.weui-mask,.weui-mask_transparent{position:fixed;z-index:1000;top:0;right:0;left:0;bottom:0}.weui-dialog{position:fixed;z-index:5000;width:80%;max-width:8rem;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);background-color:#fff;text-align:center;border-radius:.08rem;overflow:hidden}.weui-dialog__hd{padding:1.3em 1.6em .5em}.weui-dialog__title{font-weight:400;font-size:.48rem}.weui-dialog__bd{padding:0 1.6em .8em;min-height:1.066667rem;font-size:.4rem;line-height:1.3;word-wrap:break-word;word-break:break-all;color:#999}.weui-dialog__bd:first-child{padding:2.7em .533333rem 1.7em;color:#353535}.weui-dialog__ft{position:relative;line-height:1.28rem;font-size:.48rem;display:-webkit-box;display:-webkit-flex;display:flex}.weui-dialog__ft:after{content:" ";position:absolute;left:0;top:0;right:0;height:.026667rem;border-top:.026667rem solid #d5d5d6;color:#d5d5d6;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.weui-dialog__btn{display:block;-webkit-box-flex:1;-webkit-flex:1;flex:1;color:#3cc51f;text-decoration:none;-webkit-tap-highlight-color:rgba(0,0,0,0);position:relative}.weui-dialog__btn:active{background-color:#eee}.weui-dialog__btn:after{content:" ";position:absolute;left:0;top:0;width:.026667rem;bottom:0;border-left:.026667rem solid #d5d5d6;color:#d5d5d6;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scaleX(.5);transform:scaleX(.5)}.weui-dialog__btn:first-child:after{display:none}.weui-dialog__btn_default{color:#353535}.weui-dialog__btn_primary{color:#0bb20c}.weui-skin_android .weui-dialog{text-align:left;box-shadow:0 .16rem .8rem 0 rgba(0,0,0,.1)}.weui-skin_android .weui-dialog__title{font-size:.56rem}.weui-skin_android .weui-dialog__hd{text-align:left}.weui-skin_android .weui-dialog__bd{color:#999;padding:.25em 1.6em 2em;font-size:.453333rem;text-align:left}.weui-skin_android .weui-dialog__bd:first-child{padding:1.6em 1.6em 2em;color:#353535}.weui-skin_android .weui-dialog__ft{display:block;text-align:right;line-height:1.12rem;font-size:.426667rem;padding:0 1.6em .7em}.weui-skin_android .weui-dialog__ft:after{display:none}.weui-skin_android .weui-dialog__btn{display:inline-block;vertical-align:top;padding:0 .8em}.weui-skin_android .weui-dialog__btn:after{display:none}.weui-skin_android .weui-dialog__btn:active,.weui-skin_android .weui-dialog__btn:visited{background-color:rgba(0,0,0,.06)}.weui-skin_android .weui-dialog__btn:last-child{margin-right:-.8em}.weui-skin_android .weui-dialog__btn_default{color:gray}@media screen and (min-width:1024px){.weui-dialog{width:35%}}.vux-prompt{padding-bottom:1.6em}.vux-prompt-msgbox{width:80%;border:.026667rem solid #dedede;border-radius:.133333rem;padding:.106667rem .133333rem;-webkit-appearance:none;appearance:none;outline:none;font-size:.426667rem}',"",{version:3,sources:["/Users/yangran/workspace/industries/node_modules/vux/src/components/confirm/index.vue"],names:[],mappings:"AAAA,8CAEE,UAAW,AACX,sCAAwC,AACxC,6BAAgC,CACjC,AAED,mCAEE,SAAW,CACZ,AAED,kDAEE,UAAW,AACX,gCAAmC,AACnC,wBAA2B,AAC3B,0DAA6D,AAC7D,kDAAqD,AACrD,gEAAkE,AAClE,wDAA0D,AAC1D,gDAAkD,AAClD,iEAAqE,CACtE,AAED,yBACE,gCAAmC,AACnC,uBAA2B,CAC5B,AAED,kBACE,UAAW,AACX,8DAAiE,AACjE,qDAAyD,CAC1D,AAED,yBACE,UAAW,AACX,4DAAgE,AAChE,mDAAwD,CACzD,AAED,uCAEE,SAAW,CACZ,AAED,8CAEE,+BAAkC,AAClC,sBAA0B,CAC3B,AA4ID,WAOE,yBAA+B,CAChC,AAED,kCATE,eAAgB,AAChB,aAAc,AACd,MAAO,AACP,QAAS,AACT,OAAQ,AACR,QAAU,CAWX,AAED,aACE,eAAgB,AAChB,aAAc,AACd,UAAW,AACX,eAAgB,AAChB,QAAS,AACT,SAAU,AACV,uCAAyC,AACzC,+BAAiC,AACjC,sBAA0B,AAC1B,kBAAmB,AACnB,qBAAuB,AACvB,eAAiB,CAClB,AAED,iBACE,wBAA2B,CAC5B,AAED,oBACE,gBAAiB,AACjB,gBAAmB,CACpB,AAED,iBACE,qBAAuB,AACvB,uBAAwB,AACxB,gBAAkB,AAClB,gBAAiB,AACjB,qBAAsB,AACtB,qBAAsB,AACtB,UAAe,CAChB,AAED,6BACE,+BAAiC,AACjC,aAAe,CAChB,AAED,iBACE,kBAAmB,AACnB,oBAAqB,AACrB,iBAAmB,AACnB,oBAAqB,AACrB,qBAAsB,AACtB,YAAc,CACf,AAED,uBACE,YAAa,AACb,kBAAmB,AACnB,OAAQ,AACR,MAAO,AACP,QAAS,AACT,kBAAoB,AACpB,oCAAsC,AACtC,cAAe,AACf,6BAA8B,AAC9B,qBAAsB,AACtB,6BAA+B,AAC/B,oBAAuB,CACxB,AAED,kBACE,cAAe,AACf,mBAAoB,AACpB,eAAgB,AAChB,OAAQ,AACR,cAAe,AACf,qBAAsB,AACtB,0CAA8C,AAC9C,iBAAmB,CACpB,AAED,yBACE,qBAA0B,CAC3B,AAED,wBACE,YAAa,AACb,kBAAmB,AACnB,OAAQ,AACR,MAAO,AACP,iBAAmB,AACnB,SAAU,AACV,qCAAuC,AACvC,cAAe,AACf,6BAA8B,AAC9B,qBAAsB,AACtB,6BAA+B,AAC/B,oBAAuB,CACxB,AAED,oCACE,YAAc,CACf,AAED,0BACE,aAAe,CAChB,AAED,0BACE,aAAe,CAChB,AAED,gCACE,gBAAiB,AACjB,0CAAkD,CACnD,AAED,uCACE,gBAAmB,CACpB,AAED,oCACE,eAAiB,CAClB,AAED,oCACE,WAAe,AACf,wBAA0B,AAC1B,qBAAuB,AACvB,eAAiB,CAClB,AAED,gDACE,wBAAyB,AACzB,aAAe,CAChB,AAED,oCACE,cAAe,AACf,iBAAkB,AAClB,oBAAqB,AACrB,qBAAuB,AACvB,oBAAuB,CACxB,AAED,0CACE,YAAc,CACf,AAED,qCACE,qBAAsB,AACtB,mBAAoB,AACpB,cAAgB,CACjB,AAED,2CACE,YAAc,CACf,AAMD,yFACE,gCAAsC,CACvC,AAED,gDACE,kBAAqB,CACtB,AAED,6CACE,UAAe,CAChB,AAED,qCACE,aACE,SAAW,CACZ,CACF,AAED,YACE,oBAAsB,CACvB,AAED,mBACE,UAAW,AACX,gCAAkC,AAClC,yBAA2B,AAC3B,8BAAiC,AACjC,wBAAyB,AACzB,gBAAiB,AACjB,aAAc,AACd,oBAAuB,CACxB",file:"index.vue",sourcesContent:['.vux-fade-enter-active,\n.vux-fade-leave-active {\n  opacity: 1;\n  -webkit-transition: opacity linear 0.2s;\n  transition: opacity linear 0.2s;\n}\n\n.vux-fade-enter,\n.vux-fade-leave-to {\n  opacity: 0;\n}\n\n.vux-dialog-enter-active,\n.vux-dialog-leave-active {\n  opacity: 1;\n  -webkit-transition-duration: 400ms;\n  transition-duration: 400ms;\n  -webkit-transform: translate(-50%, -50%) scale(1) !important;\n  transform: translate(-50%, -50%) scale(1) !important;\n  -webkit-transition-property: opacity, -webkit-transform!important;\n  transition-property: opacity, -webkit-transform!important;\n  transition-property: transform, opacity!important;\n  transition-property: transform, opacity, -webkit-transform!important;\n}\n\n.vux-dialog-leave-active {\n  -webkit-transition-duration: 300ms;\n  transition-duration: 300ms;\n}\n\n.vux-dialog-enter {\n  opacity: 0;\n  -webkit-transform: translate(-50%, -50%) scale(1.185) !important;\n  transform: translate(-50%, -50%) scale(1.185) !important;\n}\n\n.vux-dialog-leave-active {\n  opacity: 0;\n  -webkit-transform: translate(-50%, -50%) scale(0.85) !important;\n  transform: translate(-50%, -50%) scale(0.85) !important;\n}\n\n.vux-mask-enter,\n.vux-mask-leave-active {\n  opacity: 0;\n}\n\n.vux-mask-leave-active,\n.vux-mask-enter-active {\n  -webkit-transition: opacity 300ms;\n  transition: opacity 300ms;\n}\n\n/**\n* actionsheet\n*/\n\n/**\n* datetime\n*/\n\n/**\n* tabbar\n*/\n\n/**\n* tab\n*/\n\n/**\n* dialog\n*/\n\n/**\n* x-number\n*/\n\n/**\n* checkbox\n*/\n\n/**\n* check-icon\n*/\n\n/**\n* Cell\n*/\n\n/**\n* Mask\n*/\n\n/**\n* Range\n*/\n\n/**\n* Tabbar\n*/\n\n/**\n* Header\n*/\n\n/**\n* Timeline\n*/\n\n/**\n* Switch\n*/\n\n/**\n* Button\n*/\n\n/**\n* swipeout\n*/\n\n/**\n* Cell\n*/\n\n/**\n* Badge\n*/\n\n/**\n* Popover\n*/\n\n/**\n* Button tab\n*/\n\n/* alias */\n\n/**\n* Swiper\n*/\n\n/**\n* checklist\n*/\n\n/**\n* popup-picker\n*/\n\n/**\n* popup\n*/\n\n/**\n* form-preview\n*/\n\n/**\n* load-more\n*/\n\n/**\n* sticky\n*/\n\n/**\n* group\n*/\n\n/**\n* toast\n*/\n\n/**\n* icon\n*/\n\n/**\n* calendar\n*/\n\n/**\n* search\n*/\n\n/**\n* radio\n*/\n\n.weui-mask {\n  position: fixed;\n  z-index: 1000;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.6);\n}\n\n.weui-mask_transparent {\n  position: fixed;\n  z-index: 1000;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n}\n\n.weui-dialog {\n  position: fixed;\n  z-index: 5000;\n  width: 80%;\n  max-width: 8rem;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n  background-color: #FFFFFF;\n  text-align: center;\n  border-radius: 0.08rem;\n  overflow: hidden;\n}\n\n.weui-dialog__hd {\n  padding: 1.3em 1.6em 0.5em;\n}\n\n.weui-dialog__title {\n  font-weight: 400;\n  font-size: 0.48rem;\n}\n\n.weui-dialog__bd {\n  padding: 0 1.6em 0.8em;\n  min-height: 1.066667rem;\n  font-size: 0.4rem;\n  line-height: 1.3;\n  word-wrap: break-word;\n  word-break: break-all;\n  color: #999999;\n}\n\n.weui-dialog__bd:first-child {\n  padding: 2.7em 0.533333rem 1.7em;\n  color: #353535;\n}\n\n.weui-dialog__ft {\n  position: relative;\n  line-height: 1.28rem;\n  font-size: 0.48rem;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n}\n\n.weui-dialog__ft:after {\n  content: " ";\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  height: 0.026667rem;\n  border-top: 0.026667rem solid #D5D5D6;\n  color: #D5D5D6;\n  -webkit-transform-origin: 0 0;\n  transform-origin: 0 0;\n  -webkit-transform: scaleY(0.5);\n  transform: scaleY(0.5);\n}\n\n.weui-dialog__btn {\n  display: block;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n  flex: 1;\n  color: #3CC51F;\n  text-decoration: none;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  position: relative;\n}\n\n.weui-dialog__btn:active {\n  background-color: #EEEEEE;\n}\n\n.weui-dialog__btn:after {\n  content: " ";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 0.026667rem;\n  bottom: 0;\n  border-left: 0.026667rem solid #D5D5D6;\n  color: #D5D5D6;\n  -webkit-transform-origin: 0 0;\n  transform-origin: 0 0;\n  -webkit-transform: scaleX(0.5);\n  transform: scaleX(0.5);\n}\n\n.weui-dialog__btn:first-child:after {\n  display: none;\n}\n\n.weui-dialog__btn_default {\n  color: #353535;\n}\n\n.weui-dialog__btn_primary {\n  color: #0BB20C;\n}\n\n.weui-skin_android .weui-dialog {\n  text-align: left;\n  box-shadow: 0 0.16rem 0.8rem 0 rgba(0, 0, 0, 0.1);\n}\n\n.weui-skin_android .weui-dialog__title {\n  font-size: 0.56rem;\n}\n\n.weui-skin_android .weui-dialog__hd {\n  text-align: left;\n}\n\n.weui-skin_android .weui-dialog__bd {\n  color: #999999;\n  padding: 0.25em 1.6em 2em;\n  font-size: 0.453333rem;\n  text-align: left;\n}\n\n.weui-skin_android .weui-dialog__bd:first-child {\n  padding: 1.6em 1.6em 2em;\n  color: #353535;\n}\n\n.weui-skin_android .weui-dialog__ft {\n  display: block;\n  text-align: right;\n  line-height: 1.12rem;\n  font-size: 0.426667rem;\n  padding: 0 1.6em 0.7em;\n}\n\n.weui-skin_android .weui-dialog__ft:after {\n  display: none;\n}\n\n.weui-skin_android .weui-dialog__btn {\n  display: inline-block;\n  vertical-align: top;\n  padding: 0 .8em;\n}\n\n.weui-skin_android .weui-dialog__btn:after {\n  display: none;\n}\n\n.weui-skin_android .weui-dialog__btn:active {\n  background-color: rgba(0, 0, 0, 0.06);\n}\n\n.weui-skin_android .weui-dialog__btn:visited {\n  background-color: rgba(0, 0, 0, 0.06);\n}\n\n.weui-skin_android .weui-dialog__btn:last-child {\n  margin-right: -0.8em;\n}\n\n.weui-skin_android .weui-dialog__btn_default {\n  color: #808080;\n}\n\n@media screen and (min-width: 1024px) {\n  .weui-dialog {\n    width: 35%;\n  }\n}\n\n.vux-prompt {\n  padding-bottom: 1.6em;\n}\n\n.vux-prompt-msgbox {\n  width: 80%;\n  border: 0.026667rem solid #dedede;\n  border-radius: 0.133333rem;\n  padding: 0.106667rem 0.133333rem;\n  -webkit-appearance: none;\n  appearance: none;\n  outline: none;\n  font-size: 0.426667rem;\n}'],sourceRoot:""}])},829:function(n,e,t){var i=t(797);"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);t(587)("ad9e7e98",i,!0)},836:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("x-dialog",{attrs:{dialogClass:"android"===n.theme?"weui-dialog weui-skin_android":"weui-dialog","mask-transition":n.maskTransition,"dialog-transition":"android"===n.theme?"vux-fade":n.dialogTransition,"hide-on-blur":n.hideOnBlur},on:{"on-hide":function(e){n.$emit("on-hide")},"on-show":function(e){n.$emit("on-show")}},model:{value:n.showValue,callback:function(e){n.showValue=e},expression:"showValue"}},[n.title?t("div",{staticClass:"weui-dialog__hd"},[t("strong",{staticClass:"weui-dialog__title"},[n._v(n._s(n.title))])]):n._e(),n._v(" "),n.showInput?t("div",{staticClass:"vux-prompt"},[t("input",{directives:[{name:"model",rawName:"v-model",value:n.msg,expression:"msg"}],ref:"input",staticClass:"vux-prompt-msgbox",attrs:{placeholder:n.placeholder},domProps:{value:n.msg},on:{input:function(e){e.target.composing||(n.msg=e.target.value)}}})]):t("div",{staticClass:"weui-dialog__bd"},[n._t("default",[t("div",{domProps:{innerHTML:n._s(n.content)}})])],2),n._v(" "),t("div",{staticClass:"weui-dialog__ft"},[t("a",{staticClass:"weui-dialog__btn weui-dialog__btn_default",attrs:{href:"javascript:;"},on:{click:n._onCancel}},[n._v(n._s(n.cancelText||"取消"))]),n._v(" "),t("a",{staticClass:"weui-dialog__btn weui-dialog__btn_primary",attrs:{href:"javascript:;"},on:{click:n._onConfirm}},[n._v(n._s(n.confirmText||"确定"))])])])],1)},staticRenderFns:[]}},841:function(n,e,t){t(829);var i=t(6)(t(787),t(836),null,null);n.exports=i.exports},889:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=t(96),o=t.n(i),a=t(95),r=t.n(a),A=t(67),s=t.n(A),l=t(74),d=t(69),c=t(68),u=t(221),p=t.n(u),C=t(209),m=t.n(C),f=t(224),g=t.n(f),B=t(223),b=t.n(B),w=t(841),h=t.n(w),k=t(70);e.default={name:"personal",props:{},data:function(){return{show:!1,shade:!0,sex:[],sexOption:[["男","女"]],ageOption:[["20岁以下","20-30","30-40","40-50","50-60","60-70","70岁以上"]],age:[],industryOption:[],industry:[],industryId:1,companyOption:[],company:[],companyId:1,jobOption:[["基层","中层","高层"]],job:[],isShowConfirm:!1}},computed:s()({},t.i(c.a)(["userToken"])),components:{Alert:p.a,Group:m.a,XInput:g.a,Confirm:h.a,PopupPicker:b.a},watch:{industry:function(n){var e=this;n=n.toString();var t=this.getId(this.industryOption,n,function(e){return e.value===n});this.industryId=t,this.$nextTick(function(){e._getCompanyList(t)})},company:function(n){n=n.toString();var e=this.getId(this.companyOption,n,function(e){return e.value===n});this.companyId=e}},methods:s()({verify:function(){0===this.industry.length&&(this.show=!0)},back:function(){window.history.back()},onHide:function(){},shadeHide:function(n){n&&(this.shade=!1)},getId:function(n,e,t){return n.find(t).id},_getCompanyList:function(n){var e=this;this.companyOption=[];var i={targetId:n};t.i(k.b)(i).then(function(n){n.code===d.a&&n.list.forEach(function(n){n.parent=0,n.value=n.name,e.companyOption.push(n)})})},_getIndustryList:function(){var n=this;t.i(k.c)().then(function(e){e.code===d.a&&e.list.forEach(function(e){e.parent=0,e.value=e.name,n.industryOption.push(e)})})},entry:function(){this._saveUserSettings()},saveAndEsc:function(){this._saveUserSettings().then(function(){try{l.a.jssdk.closeView({})}catch(n){console.warn(n),window.location.href="http://localhost:7000/"}})},_saveUserSettings:function(){var n=this;return r()(o.a.mark(function e(){var i,a;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return i={sex:n.sex[0],companyid:n.companyId,age:n.age[0],industryid:n.industryId,job:n.job[0],firstlogin:"1235"===n.userToken||!1},e.next=3,t.i(k.d)(i).then(function(n){n.code===d.a&&console.info("设置成功")});case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}},e,n)}))()},_getUserSettings:function(){var n=this;return r()(o.a.mark(function e(){var i;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.i(k.a)().then(function(e){if(e.code===d.a){if("未设置"===e.obj.age)return;if(n.age=[e.obj.age],"未设置"===e.obj.sex)return;n.sex=[e.obj.sex]}return e.obj});case 2:return i=e.sent,e.abrupt("return",i);case 4:case"end":return e.stop()}},e,n)}))()}},t.i(c.c)({setFirstLogin:"SET_FIRST_LOGIN"})),created:function(){this._getIndustryList(),this._getUserSettings()},mounted:function(){}}},922:function(n,e,t){e=n.exports=t(586)(),e.push([n.i,".person-sertting{position:fixed;top:0;bottom:0;left:0;right:0;z-index:50;background:#fff}.person-sertting>.title{width:10rem;height:1.733333333333333rem;color:#429aff;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:.613333333333333rem}.person-sertting>.center{font-size:.4rem}.person-sertting>.center .top{margin-bottom:.346666666666667rem}.person-sertting>.center .company-box{position:relative}.person-sertting>.center .company-box .company-shade{position:absolute;z-index:50;top:0;left:0;right:0;bottom:0}.person-sertting>.center .bottom .bottom-group .weui-label{width:3rem}.person-sertting>.footer{height:5.773333333333333rem;-webkit-justify-content:space-around;justify-content:space-around}.person-sertting>.footer,.person-sertting>.footer>.btn{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.person-sertting>.footer>.btn{width:3.2rem;height:1.066666666666667rem;background:#4799fe;color:#fff;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;border-radius:.266666666666667rem}.person-sertting .vux-cell-box{padding:.2rem 0;border-bottom:.026667rem solid #d9d9d9}.person-sertting .vux-cell-box:before{border:none}.person-sertting .vux-cell-box:nth-child(2),.person-sertting .vux-cell-box:nth-child(3){border-top:none}.inUp-enter-active,.inUp-leave-active{-webkit-transition:all .3s;transition:all .3s}.inUp-enter,.inUp-leave-to{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}","",{version:3,sources:["/Users/yangran/workspace/industries/src/components/personal/personal.vue"],names:[],mappings:"AAAA,iBACE,eAAgB,AAChB,MAAO,AACP,SAAU,AACV,OAAQ,AACR,QAAS,AACT,WAAY,AACZ,eAAiB,CAClB,AAED,wBACE,YAAa,AACb,4BAA6B,AAC7B,cAAe,AACf,oBAAqB,AACrB,qBAAsB,AACtB,aAAc,AACd,wBAAyB,AACzB,+BAAgC,AAChC,uBAAwB,AACxB,yBAA0B,AAC1B,2BAA4B,AAC5B,mBAAoB,AACpB,6BAAgC,CACjC,AAED,yBACE,eAAkB,CACnB,AAED,8BACE,iCAAoC,CACrC,AAED,sCACE,iBAAmB,CACpB,AAED,qDACE,kBAAmB,AACnB,WAAY,AACZ,MAAO,AACP,OAAQ,AACR,QAAS,AACT,QAAU,CACX,AAED,2DACE,UAAY,CACb,AAED,yBACE,4BAA6B,AAI7B,qCAAsC,AACtC,4BAA8B,CAI/B,AAED,uDAVE,oBAAqB,AACrB,qBAAsB,AACtB,aAAc,AAGd,yBAA0B,AAC1B,2BAA4B,AAC5B,kBAAoB,CAkBrB,AAfD,8BACE,aAAc,AACd,4BAA6B,AAC7B,mBAAoB,AACpB,WAAY,AAIZ,wBAAyB,AACzB,+BAAgC,AAChC,uBAAwB,AAIxB,iCAAoC,CACrC,AAED,+BACE,gBAAkB,AAClB,sCAAyC,CAC1C,AAED,sCACE,WAAa,CACd,AAMD,wFACE,eAAiB,CAClB,AAED,sCAEE,2BAA6B,AAC7B,kBAAqB,CACtB,AAED,2BAEE,wCAA2C,AAC3C,+BAAmC,CACpC",file:"personal.vue",sourcesContent:[".person-sertting {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 50;\n  background: #fff;\n}\n\n.person-sertting >.title {\n  width: 10rem;\n  height: 1.733333333333333rem;\n  color: #429aff;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n  justify-content: center;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  align-items: center;\n  font-size: 0.613333333333333rem;\n}\n\n.person-sertting >.center {\n  font-size: 0.4rem;\n}\n\n.person-sertting >.center .top {\n  margin-bottom: 0.346666666666667rem;\n}\n\n.person-sertting >.center .company-box {\n  position: relative;\n}\n\n.person-sertting >.center .company-box .company-shade {\n  position: absolute;\n  z-index: 50;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n\n.person-sertting >.center .bottom .bottom-group .weui-label {\n  width: 3rem;\n}\n\n.person-sertting >.footer {\n  height: 5.773333333333333rem;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-justify-content: space-around;\n  justify-content: space-around;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  align-items: center;\n}\n\n.person-sertting >.footer >.btn {\n  width: 3.2rem;\n  height: 1.066666666666667rem;\n  background: #4799fe;\n  color: #fff;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n  justify-content: center;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  align-items: center;\n  border-radius: 0.266666666666667rem;\n}\n\n.person-sertting .vux-cell-box {\n  padding: 0.2rem 0;\n  border-bottom: 0.026667rem solid #d9d9d9;\n}\n\n.person-sertting .vux-cell-box:before {\n  border: none;\n}\n\n.person-sertting .vux-cell-box:nth-child(2) {\n  border-top: none;\n}\n\n.person-sertting .vux-cell-box:nth-child(3) {\n  border-top: none;\n}\n\n.inUp-enter-active,\n.inUp-leave-active {\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n}\n\n.inUp-enter,\n.inUp-leave-to {\n  -webkit-transform: translate3d(0, 100%, 0);\n  transform: translate3d(0, 100%, 0);\n}"],sourceRoot:""}])},956:function(n,e,t){var i=t(922);"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);t(587)("91837cb8",i,!0)}});
//# sourceMappingURL=12.ed4caa4c41c0c7c7ed76.js.map