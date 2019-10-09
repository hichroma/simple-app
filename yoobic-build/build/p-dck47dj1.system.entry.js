var __awaiter=this&&this.__awaiter||function(t,e,n,i){return new(n||(n=Promise))(function(r,o){function a(t){try{s(i.next(t))}catch(t){o(t)}}function u(t){try{s(i["throw"](t))}catch(t){o(t)}}function s(t){t.done?r(t.value):new n(function(e){e(t.value)}).then(a,u)}s((i=i.apply(t,e||[])).next())})};var __generator=this&&this.__generator||function(t,e){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},i,r,o,a;return a={next:u(0),throw:u(1),return:u(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function u(t){return function(e){return s([t,e])}}function s(a){if(i)throw new TypeError("Generator is already executing.");while(n)try{if(i=1,r&&(o=a[0]&2?r["return"]:a[0]?r["throw"]||((o=r["return"])&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;if(r=0,o)a=[a[0]&2,o.value];switch(a[0]){case 0:case 1:o=a;break;case 4:n.label++;return{value:a[1],done:false};case 5:n.label++;r=a[1];a=[0];continue;case 7:a=n.ops.pop();n.trys.pop();continue;default:if(!(o=n.trys,o=o.length>0&&o[o.length-1])&&(a[0]===6||a[0]===2)){n=0;continue}if(a[0]===3&&(!o||a[1]>o[0]&&a[1]<o[3])){n.label=a[1];break}if(a[0]===6&&n.label<o[1]){n.label=o[1];o=a;break}if(o&&n.label<o[2]){n.label=o[2];n.ops.push(a);break}if(o[2])n.ops.pop();n.trys.pop();continue}a=e.call(t,n)}catch(t){a=[6,t];r=0}finally{i=o=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};System.register(["./p-d99b9c19.system.js","./p-76deb591.system.js","./p-40fcf55a.system.js","./p-fd4afab3.system.js","./p-e3fa184f.system.js","./p-90888482.system.js","./p-350cb6c0.system.js"],function(t){"use strict";var e,n,i,r,o,a,u,s,l;return{setters:[function(t){e=t.r;n=t.c;i=t.h;r=t.g},function(t){o=t.dj;a=t.d5;u=t.g3;s=t.al;l=t.i},function(){},function(){},function(){},function(){},function(){}],execute:function(){var c=t("yoo_form_number_picker",function(){function t(t){e(this,t);this.min=0;this.max=10;this.value=null;this.validators=[];this.placeholder="Choose a number";this.clearable=true;this.selection=null;this.validityChanged=n(this,"validityChanged",7);this.inputBlurred=n(this,"inputBlurred",7);this.inputFocused=n(this,"inputFocused",7);this.inputChanged=n(this,"inputChanged",7)}t.prototype.isValid=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return[2,this.validity]})})};t.prototype.setValue=function(t){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){o(t,this);this.selection=t;return[2]})})};t.prototype.componentWillLoad=function(){a(this)};t.prototype.componentDidLoad=function(){this.keyboard=Keyboard};t.prototype.showContainerDialog=function(){var t=this;this.dialog=document.createElement("yoo-form-number-picker-dialog");this.dialog.values=Array.from(u(this.min,this.max+1));if(this.selection!==null){this.dialog.value=this.selection}s(this.dialog,{half:true},null,"slideYEnterAnimation","slideYLeaveAnimation",true,false).then(function(e){if(e&&!e.overlayDismiss){t.setValue(e.data)}t.dialog=null})};t.prototype.onInputFocused=function(t){t.stopPropagation();t.preventDefault();if(l()){this.keyboard.hide()}this.showContainerDialog()};t.prototype.onIconClicked=function(t){if(t&&t.detail&&t.detail==="clear"){this.setValue(null)}};t.prototype.renderReadonly=function(){return i("div",{class:"input-container noborder"},i("div",{class:"readonly"},this.value))};t.prototype.renderEditable=function(){var t=this;return i("div",{class:"outer-container"},i("yoo-form-input",{class:"number-picker",type:"number",forceValueUpdate:true,value:this.selection?this.selection:this.value,clearable:this.clearable,required:this.required,readonly:this.readonly,validity:this.validity,onIconClicked:function(e){return t.onIconClicked(e)},onInputFocused:function(e){return t.onInputFocused(e)}}))};t.prototype.render=function(){return this.readonly?this.renderReadonly():this.renderEditable()};Object.defineProperty(t.prototype,"host",{get:function(){return r(this)},enumerable:true,configurable:true});Object.defineProperty(t,"style",{get:function(){return""},enumerable:true,configurable:true});return t}())}}});