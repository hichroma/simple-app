var __awaiter=this&&this.__awaiter||function(t,e,n,i){return new(n||(n=Promise))(function(r,o){function s(t){try{u(i.next(t))}catch(t){o(t)}}function a(t){try{u(i["throw"](t))}catch(t){o(t)}}function u(t){t.done?r(t.value):new n(function(e){e(t.value)}).then(s,a)}u((i=i.apply(t,e||[])).next())})};var __generator=this&&this.__generator||function(t,e){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},i,r,o,s;return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(t){return function(e){return u([t,e])}}function u(s){if(i)throw new TypeError("Generator is already executing.");while(n)try{if(i=1,r&&(o=s[0]&2?r["return"]:s[0]?r["throw"]||((o=r["return"])&&o.call(r),0):r.next)&&!(o=o.call(r,s[1])).done)return o;if(r=0,o)s=[s[0]&2,o.value];switch(s[0]){case 0:case 1:o=s;break;case 4:n.label++;return{value:s[1],done:false};case 5:n.label++;r=s[1];s=[0];continue;case 7:s=n.ops.pop();n.trys.pop();continue;default:if(!(o=n.trys,o=o.length>0&&o[o.length-1])&&(s[0]===6||s[0]===2)){n=0;continue}if(s[0]===3&&(!o||s[1]>o[0]&&s[1]<o[3])){n.label=s[1];break}if(s[0]===6&&n.label<o[1]){n.label=o[1];o=s;break}if(o&&n.label<o[2]){n.label=o[2];n.ops.push(s);break}if(o[2])n.ops.pop();n.trys.pop();continue}s=e.call(t,n)}catch(t){s=[6,t];r=0}finally{i=o=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};System.register(["./p-d99b9c19.system.js","./p-76deb591.system.js","./p-40fcf55a.system.js","./p-fd4afab3.system.js","./p-e3fa184f.system.js","./p-90888482.system.js","./p-350cb6c0.system.js"],function(t){"use strict";var e,n,i,r,o,s,a,u,c,l,f,h;return{setters:[function(t){e=t.r;n=t.c;i=t.h;r=t.g},function(t){o=t.u;s=t.bP;a=t.bO;u=t.v;c=t.g1;l=t.w;f=t.t},function(){},function(){},function(){},function(t){h=t.az},function(){}],execute:function(){var d=t("yoo_form_timer",function(){function t(t){e(this,t);this.smallWindowSize=false;this.timeCalculated=n(this,"timeCalculated",7)}t.prototype.timeChanged=function(t,e){return __awaiter(this,void 0,void 0,function(){var n,i;return __generator(this,function(r){n=Number(t.detail.split(":")[0]);i=Number(t.detail.split(":")[1]);if(o(n)&&o(i)&&n>=0&&n<=23&&i>=0&&i<=59){if(e==="start"){this.startHour=n;this.startMinute=i}else{this.endTime=s(a(this.endTime?u(this.endTime):new Date,n),i)}}if(this.startHour&&this.startMinute&&this.endTime){this.calculatedTime=this.formatTime(this.calculateTotalTime());this.timeCalculated.emit(this.calculatedTime)}return[2]})})};t.prototype.componentDidLoad=function(){this.resizeComponent();this.resizeListener=c(this.resizeComponent,500).bind(this);window.addEventListener("resize",this.resizeListener)};t.prototype.componentDidUnload=function(){window.removeEventListener("resize",this.resizeListener)};t.prototype.formatTime=function(t){var e=t.split(" ")[1];return e.split(":")[0]+":"+e.split(":")[1]};t.prototype.calculateTotalTime=function(){var t=l(this.endTime,"hours",this.startHour);return l(t,"minutes",this.startMinute).toLocaleString()};t.prototype.resizeComponent=function(){var t=350;var e=h(this.host).width;t>e?this.smallWindowSize=true:this.smallWindowSize=false};t.prototype.render=function(){var t=this;return i("div",{class:"outer-container"},i("div",{class:"column-container"},i("div",{class:"text-container"},f("TIMEIN")),i("yoo-form-input",{type:"time",onInputChanged:function(e){return t.timeChanged(e,"start")}}),this.smallWindowSize?[i("div",{class:"text-container"},"TIME OUT"),i("yoo-form-input",{type:"time",onInputChanged:function(e){return t.timeChanged(e,"end")}})]:null),i("div",{class:"column-container"},i("div",{class:"text-container"},f("TOTALCOMPLETION")),i("div",{class:"text-container"},this.calculatedTime),i("div",{class:"text-container"},f("HOURINITIAL")+" "+f("MINUTEINITIAL"))),this.smallWindowSize?null:i("div",{class:"column-container"},i("div",{class:"text-container"},f("TIMEOUT")),i("yoo-form-input",{type:"time",onInputChanged:function(e){return t.timeChanged(e,"end")}})))};Object.defineProperty(t.prototype,"host",{get:function(){return r(this)},enumerable:true,configurable:true});Object.defineProperty(t,"style",{get:function(){return".iframe-root{top:0;right:0;bottom:0;left:0;position:absolute;color:var(--black);overflow-y:auto;scrollbar-width:none}.iframe-root yoo-app .wrapper{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;height:100%;width:100%}.iframe-root yoo-app .wrapper.center-center{-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%}.iframe-root::-webkit-scrollbar{display:none}:host .outer-container{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:justify;justify-content:space-between;padding:.5rem}:host .outer-container .column-container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center}"},enumerable:true,configurable:true});return t}())}}});