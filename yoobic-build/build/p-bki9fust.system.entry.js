System.register(["./p-d99b9c19.system.js","./p-76deb591.system.js","./p-40fcf55a.system.js","./p-fd4afab3.system.js","./p-e3fa184f.system.js","./p-90888482.system.js","./p-350cb6c0.system.js"],function(e){"use strict";var t,s,r,i,n,o;return{setters:[function(e){t=e.r;s=e.c;r=e.h},function(e){i=e.t},function(){},function(){},function(){},function(e){n=e.ac;o=e.dd},function(){}],execute:function(){var a=e("yoo_user_detail",function(){function e(e){t(this,e);this.courses=[];this.battles=[];this.courseSelected=s(this,"courseSelected",7);this.badgeSelected=s(this,"badgeSelected",7);this.seeAllCourses=s(this,"seeAllCourses",7);this.seeAllBattles=s(this,"seeAllBattles",7)}e.prototype.onSelectCourse=function(e){e.stopPropagation();this.courseSelected.emit(e.detail)};e.prototype.onSelectBadge=function(e){e.stopPropagation();this.badgeSelected.emit(e.detail)};e.prototype.onSeeAllCourses=function(){this.seeAllCourses.emit(true)};e.prototype.onSeeAllBattles=function(){this.seeAllBattles.emit(true)};e.prototype.getBadgeEntries=function(){var e=this;return Object.keys(n).map(function(t){var s=e.stats&&e.stats.earnedBadges.indexOf(n[t])<0;return{text:i(n[t].toUpperCase()),cssClass:"./assets/badges/"+(s?"locked/":"")+n[t]+(s?"_locked":"")+".svg"}})};e.prototype.renderStats=function(){if(!this.stats){return}return r("div",{class:"points"},r("yoo-icon",{class:"yo-star energized"}),r("span",null,Math.ceil(this.stats.earnedPoints*10)/10,"/",this.stats.availablePoints))};e.prototype.renderHeader=function(){return r("div",{class:{"user-detail":true,"no-padding":this.courses.length<=0}},this.renderStats(),r("div",{class:"description"},this.user["description"]||""))};e.prototype.renderCourseList=function(){var e=this;if(!this.courses.length){return}return r("yoo-grid",{items:this.courses,entityType:"courses",extraClass:"no-background",displayType:"card-sticky",direction:"horizontal",onSelected:function(t){return e.onSelectCourse(t)},isLocal:true,hideHeader:true},r("div",{slot:"header",class:"small-margin-bottom"},r("div",{class:"title"},i("COURSES")),r("div",{class:"total-number"},this.courses.length),r("div",{class:"action",onClick:function(){return e.onSeeAllCourses()}},i("SEEALL"))))};e.prototype.renderBadges=function(){var e=this;return r("yoo-grid",{items:this.getBadgeEntries(),entityType:"badges",displayType:"card-cell",onSelected:function(t){return e.onSelectBadge(t)},isLocal:true,hideHeader:true},r("div",{slot:"header"},r("div",{class:"title"},i("BADGES")),r("div",{class:"total-number"},this.getBadgeEntries().length)))};e.prototype.renderJoined=function(){return r("div",{class:"dates"},r("span",{class:"date-label"},i("JOINEDON")),r("span",null,o.dateFormat.transform(this.user.hiringDate?this.user.hiringDate:this.user._ect,"MMM YYYY")))};e.prototype.render=function(){return[this.renderHeader(),this.renderCourseList(),this.renderBadges(),this.renderJoined()]};Object.defineProperty(e,"style",{get:function(){return".iframe-root{top:0;right:0;bottom:0;left:0;position:absolute;color:var(--black);overflow-y:auto;scrollbar-width:none}.iframe-root yoo-app .wrapper{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;height:100%;width:100%}.iframe-root yoo-app .wrapper.center-center{-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%}.iframe-root::-webkit-scrollbar{display:none}:host .user-detail{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;padding:0 1rem var(--padding-30,1.875rem) 0;text-align:center}:host .user-detail.no-padding{padding-bottom:0}:host .user-detail .points{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;font-size:var(--font-size-02,.875rem)}:host .user-detail .points span{margin-left:5px}:host .user-detail .description{padding:var(--padding-10,.625rem) var(--padding-10,.625rem) 0;font-size:var(--font-size-02,.875rem);font-weight:var(--font-weight-01,300)}:host .section-header div:first-child,:host yoo-grid div:first-child{display:-ms-flexbox;display:flex;font-size:var(--font-size-02,.875rem)}:host .section-header div:first-child .title,:host yoo-grid div:first-child .title{display:-ms-flexbox;display:flex}:host .section-header div:first-child .action,:host yoo-grid div:first-child .action{margin-left:auto;padding-right:1rem;color:var(--stable,#adadad);font-weight:var(--font-weight-01,300)}:host .section-header div:first-child .total-number,:host yoo-grid div:first-child .total-number{padding-left:.2rem;color:var(--stable,#adadad)}:host .section-header div:first-child.small-margin-bottom,:host yoo-grid div:first-child.small-margin-bottom{margin-bottom:-.3125rem}:host .dates{padding:var(--padding-30,1.875rem) 0;color:var(--stable,#adadad);font-size:var(--font-size-02,.875rem);font-weight:var(--font-weight-01,300)}:host .dates span.date-label{margin-right:var(--padding-5,.3125rem);color:var(--black,#000);font-weight:var(--font-weight-01,300)}"},enumerable:true,configurable:true});return e}())}}});