System.register(["./p-d99b9c19.system.js","./p-76deb591.system.js","./p-40fcf55a.system.js","./p-fd4afab3.system.js","./p-e3fa184f.system.js","./p-90888482.system.js","./p-350cb6c0.system.js"],function(t){"use strict";var e,n,i,s,r,o,u,a,c;return{setters:[function(t){e=t.r;n=t.c;i=t.h;s=t.H;r=t.g},function(t){o=t.d5;u=t.al;a=t.dj;c=t.cZ},function(){},function(){},function(){},function(){},function(){}],execute:function(){var l=t("yoo_form_signature_pad",function(){function t(t){e(this,t);this.validators=[];this.validityChanged=n(this,"validityChanged",7);this.inputBlurred=n(this,"inputBlurred",7);this.inputFocused=n(this,"inputFocused",7);this.inputChanged=n(this,"inputChanged",7)}t.prototype.componentWillLoad=function(){o(this)};t.prototype.onShowDialog=function(){var t=this;var e=document.createElement("yoo-form-signature-pad-dialog");e.value=this.value;e.readonly=this.readonly;u(e).then(function(n){if(n){a(n.data,t)}e=null})};t.prototype.renderEditable=function(){var t=this;return i("div",{class:"outer-container"},i("div",{class:"signature-container",onClick:function(e){return t.onShowDialog()}},this.required?i("span",{class:"required"},"*"):null,this.value?i("yoo-img",{type:"back",class:"preview",src:c(this.value,500,500)}):null,this.value?i("div",{class:"overlay"}):null,i("yoo-icon",{class:"yo-signature"+(this.value?" light":" success")})))};t.prototype.renderReadonly=function(){var t=this;return this.value?i("div",{class:"readonly"},i("div",{class:"signature-container",onClick:function(){return t.onShowDialog()}},i("yoo-img",{type:"back",class:"preview",src:c(this.value,500,500)}))):null};t.prototype.render=function(){return i(s,{class:{"swiper-no-swiping":true}},this.readonly?this.renderReadonly():this.renderEditable())};Object.defineProperty(t.prototype,"host",{get:function(){return r(this)},enumerable:true,configurable:true});Object.defineProperty(t,"style",{get:function(){return".iframe-root{top:0;right:0;bottom:0;left:0;position:absolute;color:var(--black);overflow-y:auto;scrollbar-width:none}.iframe-root yoo-app .wrapper{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;height:100%;width:100%}.iframe-root yoo-app .wrapper.center-center{-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%}.iframe-root::-webkit-scrollbar{display:none}:host{display:block}:host .outer-container .signature-container,:host .readonly .signature-container{width:var(--camera-container-height,98px);height:var(--camera-container-height,98px);border:1px solid var(--input-container-border-color,hsla(0,0%,67.8%,.4));border-radius:.5rem;cursor:pointer;position:relative}:host .outer-container .signature-container .required,:host .readonly .signature-container .required{top:auto;right:auto;bottom:auto;left:.625rem;position:absolute;color:var(--success,#04cc99);font-size:var(--font-size-02,.875rem)}:host .outer-container .signature-container yoo-icon,:host .readonly .signature-container yoo-icon{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);font-size:var(--camera-container-size,30px)}:host .outer-container .signature-container yoo-icon.light,:host .readonly .signature-container yoo-icon.light{color:var(--light,#fff)}:host .outer-container .signature-container yoo-icon.success,:host .readonly .signature-container yoo-icon.success{color:var(--success,#04cc99)}:host .outer-container .signature-container .edit,:host .outer-container .signature-container .overlay,:host .outer-container .signature-container .preview,:host .readonly .signature-container .edit,:host .readonly .signature-container .overlay,:host .readonly .signature-container .preview{top:0;right:auto;bottom:auto;left:auto;position:absolute;width:var(--camera-container-height,98px);height:var(--camera-container-height,98px);border-radius:.5rem}:host .outer-container .signature-container .edit.edit,:host .outer-container .signature-container .overlay.edit,:host .outer-container .signature-container .preview.edit,:host .readonly .signature-container .edit.edit,:host .readonly .signature-container .overlay.edit,:host .readonly .signature-container .preview.edit{top:0;right:auto;bottom:auto;left:0;position:absolute;z-index:0}:host .outer-container .signature-container .overlay,:host .readonly .signature-container .overlay{background:var(--dark-two,#212936);opacity:.5}:host .outer-container .signature-container yoo-icon,:host .readonly .signature-container yoo-icon{font-size:var(--font-size-08,2rem)}:host .readonly{padding:.5rem;padding-left:0;padding-bottom:0}:host(.history){margin:0!important;padding:0!important;border:none!important}:host(.history) .readonly{display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-ms-flex-align:center;align-items:center;padding:0;padding-bottom:2px}:host(.history) .readonly .signature-container{width:30px;height:30px;border:none}:host(.history) .readonly .signature-container .preview{width:30px;height:30px;border:1px solid var(--stable,#adadad);border-radius:2px!important}"},enumerable:true,configurable:true});return t}())}}});