System.register(["./p-d99b9c19.system.js"],function(e){"use strict";var t,i,o,n;return{setters:[function(e){t=e.r;i=e.c;o=e.h;n=e.g}],execute:function(){var s=e("yoo_form_radio_group",function(){function e(e){t(this,e);this.values=[];this.multiple=false;this.items=[];this.selectionChanged=i(this,"selectionChanged",7)}e.prototype.componentWillLoad=function(){this.items=this.values};e.prototype.radioReset=function(){this.items=this.items.map(function(e){return{text:e.text,checked:false}})};e.prototype.calculateRadioSelection=function(e){if(this.multiple){this.items[e].checked=!this.items[e].checked}else{var t=this.items[e].checked;this.radioReset();this.items[e].checked=!t}};e.prototype.onRadioClicked=function(e){this.calculateRadioSelection(e);this.selectionChanged.emit(this.items)};e.prototype.render=function(){var e=this;return o("div",{class:"outer-container"},this.items.map(function(t,i){return o("div",{class:"inner-container"},o("yoo-form-radio",{text:t.text,class:e.host.className,state:t.checked?"checked":"unchecked",onRadioClicked:function(){return e.onRadioClicked(i)}}))}))};Object.defineProperty(e.prototype,"host",{get:function(){return n(this)},enumerable:true,configurable:true});Object.defineProperty(e,"style",{get:function(){return".iframe-root{top:0;right:0;bottom:0;left:0;position:absolute;color:var(--black);overflow-y:auto;scrollbar-width:none}.iframe-root yoo-app .wrapper{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;height:100%;width:100%}.iframe-root yoo-app .wrapper.center-center{-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%}.iframe-root::-webkit-scrollbar{display:none}:host .outer-container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}"},enumerable:true,configurable:true});return e}())}}});