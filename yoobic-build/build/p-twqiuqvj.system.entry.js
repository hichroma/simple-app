System.register(["./p-d99b9c19.system.js","./p-76deb591.system.js","./p-40fcf55a.system.js","./p-fd4afab3.system.js","./p-e3fa184f.system.js","./p-90888482.system.js","./p-350cb6c0.system.js"],function(e){"use strict";var i,t,s,n,o;return{setters:[function(e){i=e.r;t=e.c;s=e.h;n=e.g},function(e){o=e.t},function(){},function(){},function(){},function(){},function(){}],execute:function(){var l=e("yoo_user_profile",function(){function e(e){i(this,e);this.clicked=t(this,"clicked",7)}e.prototype.onClicked=function(e){this.clicked.emit(e)};e.prototype.renderLi=function(e){var i=this;return e.isVisible&&!e.isVisible()?null:e.type!=="toggle"?s("li",{class:"profile-links-menu-item "+(e.color||""),onClick:function(){return i.onClicked(e)}},s("div",null,e.icon&&s("yoo-icon",{class:e.icon}),e.title),s("div",{class:"end-container"},e.subtitle?s("div",{class:"subtitle-container",innerHTML:e.subtitle}):null,e.clickable?s("div",null,e.badge?s("yoo-badge",{class:"energized",text:e.badge}):null,s("yoo-icon",{class:"yo-right stable"})):null)):s("li",{class:"profile-links-menu-item "+(e.color||"")},s("div",null,e.icon&&s("yoo-icon",{class:e.icon}),e.title)," ",s("yoo-form-toggle",{class:e.color||"success",value:e.checked,onClick:function(){return i.onClicked(e)}}))};e.prototype.render=function(){var e=this;return s("div",{class:"profile-content"},s("div",{class:"profile-user"},s("yoo-avatar",{class:"xl",avatarIconSize:"xl",user:this.user}),s("div",{class:"profile-user-name"},this.user.firstName," ",this.user.lastName),s("div",{class:"profile-user-role"},o(this.user.role))),this.config&&this.config.links?s("div",{class:"profile-links"},this.config.links.map(function(i){return s("ul",{class:"profile-links-menu"},i.items.map(function(i){return e.renderLi(i)}))})):null)};Object.defineProperty(e.prototype,"host",{get:function(){return n(this)},enumerable:true,configurable:true});Object.defineProperty(e,"style",{get:function(){return".iframe-root{top:0;right:0;bottom:0;left:0;position:absolute;color:var(--black);overflow-y:auto;scrollbar-width:none}.iframe-root yoo-app .wrapper{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;height:100%;width:100%}.iframe-root yoo-app .wrapper.center-center{-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%}.iframe-root::-webkit-scrollbar{display:none}:host{height:100%;font-size:var(--font-size-04,1.125rem);font-weight:var(--font-weight-02,400)}:host .profile-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between}:host .profile-content .profile-user{margin-top:.5rem;margin-bottom:3rem;text-align:center}:host .profile-content .profile-user .profile-user-name{line-height:1.3125rem}:host .profile-content .profile-user .profile-user-role{color:var(--stable,#adadad);font-size:var(--font-size-02,.875rem);font-weight:var(--font-weight-01,300);line-height:1rem}:host .profile-content .profile-links{padding-left:1rem}:host .profile-content .profile-links .profile-links-title{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:100%;height:1.875rem;color:var(--stable,#adadad)}:host .profile-content .profile-links .profile-links-menu{list-style:none outside none;background:none repeat scroll 0 0 transparent;border:0 none;font-size:100%;outline:0 none;vertical-align:baseline;-webkit-tap-highlight-color:transparent;margin:0;padding:0;list-style:none;cursor:pointer}:host .profile-content .profile-links .profile-links-menu .profile-links-menu-item{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;height:2.6875rem;border-bottom:1px solid var(--stable-light,#f1f1f1);font-weight:var(--font-weight-02,400);line-height:36px;cursor:pointer}:host .profile-content .profile-links .profile-links-menu .profile-links-menu-item:last-child{margin-bottom:.5rem;border-bottom:none}:host .profile-content .profile-links .profile-links-menu .profile-links-menu-item .yo-right,:host .profile-content .profile-links .profile-links-menu .profile-links-menu-item yoo-form-toggle,:host .profile-content .profile-links .profile-links-menu .profile-links-menu-item yoo-icon:not(.flag-icon){margin-right:1rem}:host .profile-content .profile-links .profile-links-menu .profile-links-menu-item yoo-badge{padding-right:var(--padding-5,.3125rem)}:host .profile-content .profile-links .profile-links-menu .profile-links-menu-item .end-container{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row}:host .profile-content .profile-links .profile-links-menu .profile-links-menu-item .end-container .subtitle-container{padding-right:var(--padding-10,.625rem)}:host .profile-content .profile-links .profile-links-menu .profile-links-menu-item .end-container .subtitle-container .flag-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:2rem;height:2rem;margin-right:var(--padding-10,.625rem);padding:0;border-radius:1rem;font-size:var(--font-size-09,2.25rem);overflow:hidden}"},enumerable:true,configurable:true});return e}())}}});