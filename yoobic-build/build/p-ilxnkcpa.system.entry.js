System.register(["./p-d99b9c19.system.js","./p-76deb591.system.js","./p-40fcf55a.system.js","./p-fd4afab3.system.js","./p-e3fa184f.system.js","./p-90888482.system.js","./p-350cb6c0.system.js"],function(t){"use strict";var e,n,r,s,o,i,c;return{setters:[function(t){e=t.r;n=t.c;r=t.h;s=t.H;o=t.g},function(t){i=t.t;c=t.ak},function(){},function(){},function(){},function(){},function(){}],execute:function(){var u=t("yoo_count_down",function(){function t(t){e(this,t);this.start=0;this.showGetReady=true;this.finish=n(this,"finish",7)}t.prototype.componentDidLoad=function(){var t=this;this.showGetReady=false;this.countdownInterval=setInterval(function(){t.start--;if(t.start<0){clearInterval(t.countdownInterval);t.finish.emit()}},1e3)};t.prototype.componentDidUnload=function(){clearInterval(this.countdownInterval)};t.prototype.renderGetReady=function(){return r("div",{class:"getready"},i("GETREADY"))};t.prototype.renderTimer=function(){return r("div",{class:"ripple"},r("div",{class:"ripple"},r("div",{class:"timer"},this.start+1)))};t.prototype.render=function(){return r(s,{class:c()},r("div",{class:"outer-container"},this.showGetReady?this.renderGetReady():this.renderTimer()))};Object.defineProperty(t.prototype,"host",{get:function(){return o(this)},enumerable:true,configurable:true});Object.defineProperty(t,"style",{get:function(){return".iframe-root{top:0;right:0;bottom:0;left:0;position:absolute;color:var(--black);overflow-y:auto;scrollbar-width:none}.iframe-root yoo-app .wrapper{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;height:100%;width:100%}.iframe-root yoo-app .wrapper.center-center{-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%}.iframe-root::-webkit-scrollbar{display:none}:host{top:0;right:0;bottom:0;left:0}\@-webkit-keyframes pulse{0%{-webkit-box-shadow:0 0 0 0 rgba(0,0,0,.1);box-shadow:0 0 0 0 rgba(0,0,0,.1)}to{-webkit-box-shadow:0 10px 20px 0 rgba(0,0,0,.1);box-shadow:0 10px 20px 0 rgba(0,0,0,.1)}}\@keyframes pulse{0%{-webkit-box-shadow:0 0 0 0 rgba(0,0,0,.1);box-shadow:0 0 0 0 rgba(0,0,0,.1)}to{-webkit-box-shadow:0 10px 20px 0 rgba(0,0,0,.1);box-shadow:0 10px 20px 0 rgba(0,0,0,.1)}}:host .outer-container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%}:host .outer-container .ripple{padding:1.5625rem;border-radius:100%;background-color:var(--light,#fff);-webkit-animation:pulse 1s infinite;animation:pulse 1s infinite}:host .outer-container .getready{-ms-flex-align:center;align-items:center;color:var(--danger-light,#f46885);font-size:calc(var(--font-size-04, 1.125rem) * 2);font-weight:var(--font-weight-03,700);text-align:center}:host .outer-container .timer{width:9.375rem;height:9.375rem;border-radius:100%;background-color:var(--danger-light,#f46885);color:var(--light,#fff);font-size:calc(var(--font-size-04, 1.125rem) * 4);line-height:9.375rem;text-align:center;-webkit-box-shadow:0 10px 20px 0 rgba(0,0,0,.1);box-shadow:0 10px 20px 0 rgba(0,0,0,.1);-webkit-animation:pulse 1s infinite;animation:pulse 1s infinite}:host(.web) .outer-container{position:absolute;right:0;left:0;background:var(--light,#fff)}"},enumerable:true,configurable:true});return t}())}}});