System.register(["./p-d99b9c19.system.js","./p-76deb591.system.js","./p-40fcf55a.system.js","./p-fd4afab3.system.js","./p-e3fa184f.system.js","./p-90888482.system.js","./p-350cb6c0.system.js"],function(t){"use strict";var e,s,i,n;return{setters:[function(t){e=t.r;s=t.h;i=t.g},function(t){n=t.t},function(){},function(){},function(){},function(){},function(){}],execute:function(){var a=t("yoo_home_widget",function(){function t(t){e(this,t);this.activeIndex=0}t.prototype.componentWillLoad=function(){if(this.definition&&this.definition.tabs.length>0){this.tabs=this.definition.tabs.map(function(t){return{title:n(t.title),value:t.title}});this.selectedTab=this.tabs[this.activeIndex]}};t.prototype.onTabSelected=function(t){this.selectedTab=t.detail};t.prototype.renderTab=function(){var t=this;if(this.selectedTab){var e=this.definition.tabs.find(function(e){return e.title===t.selectedTab.value}).item;if(e){switch(e.type){case"target":return s("div",{class:"target"},e.icon&&s("div",{class:"icon"},s("img",{src:e.icon})),s("div",{class:"value"},e.unit," ",e.value.toLocaleString()),s("div",{class:"subtitle"},n(e.subtitle)));case"rate":return s("div",{class:"rate"},s("div",{class:"progress"},s("yoo-progress-bar-core",{shape:"circle",progressValue:e.value,progressValueFontSize:"extra-large"})),s("div",{class:"subitems"},e.subitems.map(function(t){return s("div",{class:"item"},s("span",{class:"icon"},s("yoo-icon",{class:t.icon})),s("span",{class:"value"},t.value.toLocaleString()),s("span",{class:"unit"},t.unit),s("span",{class:"title"},n(t.title)))})))}}}};t.prototype.render=function(){var t=this;return s("div",{class:"outer-container"},s("yoo-navbar",{class:"items-space-around small",onTabSelected:function(e){return t.onTabSelected(e)},selectedTab:this.selectedTab,withLine:true,tabs:this.tabs}),this.selectedTab&&this.renderTab())};Object.defineProperty(t.prototype,"host",{get:function(){return i(this)},enumerable:true,configurable:true});Object.defineProperty(t,"style",{get:function(){return".iframe-root{top:0;right:0;bottom:0;left:0;position:absolute;color:var(--black);overflow-y:auto;scrollbar-width:none}.iframe-root yoo-app .wrapper{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;height:100%;width:100%}.iframe-root yoo-app .wrapper.center-center{-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%}.iframe-root::-webkit-scrollbar{display:none}:host .outer-container{height:180px;margin:1rem;border-radius:5px;background:var(--light,#fff);-webkit-box-shadow:var(--grid-frame-shadow,0 5px 15px 3px rgba(40,47,54,.15));box-shadow:var(--grid-frame-shadow,0 5px 15px 3px rgba(40,47,54,.15));overflow:hidden}:host .outer-container .target{padding:1rem}:host .outer-container .target .value{font-size:var(--font-size-09,2.25rem)}:host .outer-container .target .subtitle{color:var(--text-color,#807f83)}:host .outer-container .target .icon{margin:1rem;margin-bottom:0;float:right}:host .outer-container .rate{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;padding:var(--padding-20,1.25rem)}:host .outer-container .rate .progress{width:100px;height:150px;margin-right:var(--padding-20,1.25rem)}:host .outer-container .rate .progress yoo-progress-bar-core{display:block}:host .outer-container .rate .subitems{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;height:100%}:host .outer-container .rate .subitems .item:nth-child(0){margin-bottom:var(--padding-20,1.25rem)}:host .outer-container .rate .subitems .item .icon{margin-right:.2rem;font-size:var(--icon-size-02,1.5rem)}:host .outer-container .rate .subitems .item .value{margin-right:.2rem;font-size:var(--font-size-07,1.75rem)}:host .outer-container .rate .subitems .item .unit{margin-right:.2rem}:host .outer-container .rate .subitems .item .title{color:var(--text-color,#807f83)}"},enumerable:true,configurable:true});return t}())}}});