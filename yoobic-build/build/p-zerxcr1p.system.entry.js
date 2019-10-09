System.register(["./p-d99b9c19.system.js","./p-76deb591.system.js","./p-40fcf55a.system.js","./p-fd4afab3.system.js","./p-e3fa184f.system.js","./p-90888482.system.js","./p-350cb6c0.system.js"],function(t){"use strict";var e,i,n,s,o,a,l,r,u,c,h,d,v,f,p,m,y;return{setters:[function(t){e=t.r;i=t.c;n=t.h;s=t.H;o=t.g},function(t){a=t.d5;l=t.ak;r=t.f_;u=t.o;c=t.N;h=t.t;d=t.dj;v=t.cI;f=t.f$;p=t.cZ;m=t.bB;y=t.a1},function(){},function(){},function(){},function(){},function(){}],execute:function(){var g=t("yoo_form_choice",function(){function t(t){e(this,t);this.multiple=false;this.values=[];this.validators=[];this.images=[];this.selection=[];this.validityChanged=i(this,"validityChanged",7);this.inputBlurred=i(this,"inputBlurred",7);this.inputFocused=i(this,"inputFocused",7);this.inputChanged=i(this,"inputChanged",7)}t.prototype.componentWillLoad=function(){var t=this;a(this);if(l()["boost"]&&this.images&&this.images.length>0&&this.values){var e=this.images;var i=this.values;if(this.readonly){this.value=this.multiple?this.value.slice():[this.value];var n;var s=this.value.map(function(e){n=t.values.indexOf(e);return{valueItem:e,_downloadURL:t.images[n]._downloadURL}});this.values=s}else{var o=i.map(function(t,i){return{valueItem:t,_downloadURL:e[i]._downloadURL}});this.values=this.values?r(o):[]}}};t.prototype.componentDidLoad=function(){if(!u(this.value)){this.selection=[].concat(this.value)}this.updateShowOther()};t.prototype.validate=function(){var t=true;if(this.required&&!this.value){t=false}if(!this.validity||this.validity!==t){this.validity=t}this.validityChanged.emit(this.validity);return this.validity};t.prototype.calculateColumn=function(t){this.sizeColumn="";if(t===1||this.fullWidth){this.sizeColumn="singleColumn"}else{this.sizeColumn="doubleColumn"}};t.prototype.calculateButton=function(t){this.sizeButton="";this.widthButton={};if(t===1||this.fullWidth){this.sizeButton="large";this.widthButton={width:"100%"}}else{this.widthButton={width:"49%"}}};t.prototype.convertToEntities=function(t){var e=[];if(t.map){t.forEach(function(t){var i={_id:t,title:c(t)};e=e.concat([i])})}return e};t.prototype.convertToChoiceFormat=function(t){var e=[];if(t.map){t.forEach(function(t){var i=t._id;e=e.concat([i])})}return e};t.prototype.getValuesWithOther=function(){var t=this.values.slice();if(this.allowOther&&!this.multiple){t.push(h("OTHER"))}return t};t.prototype.setShowOther=function(t){var e=this;this.showOther=t;setTimeout(function(){if(e.showOther&&e.textareaRef){e.textareaRef.focus()}},50)};t.prototype.updateShowOther=function(){if(this.allowOther&&this.value&&this.values&&this.values.indexOf(this.value)<0){this.setShowOther(true)}};t.prototype.onInput=function(t){t.stopPropagation();this.textareaValue=t.target.value;this.selection=[this.textareaValue];d(this.multiple?this.selection:this.selection.length>0?this.selection[0]:null,this);this.updateShowOther()};t.prototype.onOpenImage=function(t,e){var i=this;var n=this.images.map(function(t,e){t.imageTitle=i.values[e];return t});v(n,e)};t.prototype.onItemSelect=function(t){if(t===h("OTHER")){this.value=null;this.selection=[];this.setShowOther(true)}else{var e=this.selection.indexOf(t);if(this.multiple){if(e>=0){this.selection.splice(e,1);this.selection=this.selection.slice()}else{this.selection=this.selection.concat([t])}}else{if(e>=0){this.selection=[]}else{this.selection=[t]}}d(this.multiple?this.selection:this.selection.length>0?this.selection[0]:null,this);this.setShowOther(false)}};t.prototype.onItemSelectRadio=function(t){if(t===null){this.onItemSelect(t)}else if(this.multiple){this.selection=this.convertToChoiceFormat(t);d(this.selection,this)}else{this.onItemSelect(t._id)}};t.prototype.isSelected=function(t){var e=[].concat(this.selection);var i=f(e,function(e){return y(t,e)});return i>=0};t.prototype.onTextAreaFocused=function(){var t={host:this.textareaRef};this.inputFocused.emit(t)};t.prototype.renderButton=function(){var t=this;var e=this.values.length;this.calculateColumn(e);this.calculateButton(e);return n("div",{class:"grid-container "+this.sizeColumn},this.values.map(function(e){return t.renderItem(e)}))};t.prototype.renderRadio=function(){var t=this;var e=this.getValuesWithOther();var i=this.convertToEntities(e);var s=null;if(this.showOther){s=i.find(function(t){return t._id===h("OTHER")})}else if(this.value){s=this.convertToEntities(!Array.isArray(this.value)?[this.value]:this.value)}return[this.values?n("yoo-grid",{class:"radio-button-choice form-choice no-animation",items:i,initialSelection:s,keepSelection:true,multiple:this.multiple,displayType:"card-list",onSelected:function(e){return t.onItemSelectRadio(e.detail)},hideHeader:true,hideFooter:true,isLocal:true,useTranslate:this.useTranslate,animated:false,valuesColor:this.valuesColor}):null,this.showOther?n("div",{class:"input-zone"},n("textarea",{ref:function(e){return t.textareaRef=e},value:this.textareaValue,onInput:function(e){return t.onInput(e)},onFocus:function(){return t.onTextAreaFocused()}})):null]};t.prototype.getColor=function(t){if(this.valuesColor&&t){if(!this.isSelected(t)){return""}var e=this.valuesColor.find(function(e){return e.key===t});return e&&e.value?e.value:""}};t.prototype.getBackgroundClass=function(t){if(this.valuesColor&&t){var e=this.valuesColor.find(function(e){return e.key===t});if(e&&e.value){return""}}return l()["boost"]?"danger-light":"success"};t.prototype.renderItem=function(t){var e=this;return n("yoo-button",{style:this.widthButton,onClick:function(){return e.onItemSelect(t)},text:this.useTranslate?h(t.toUpperCase()):c(t),class:"btn-form-choice "+this.sizeButton+" "+(this.isSelected(t)?this.getBackgroundClass(t):"outline"),bgColor:this.getColor(t)})};t.prototype.renderChat=function(){var t=this;var e={content:c(this.sentence),isAlternate:false};return n("div",{class:"messages-container"},!this.description&&n("div",{class:"chat-title"},h("THECLIENTASKS")),n("div",{class:"chat-item"},n("yoo-chat-message",{hideEmptyCheckbox:true,message:e})),n("div",{class:"chat-title alternate"},h("WHATSTHECORRECTRESPONSE")),this.values?this.values.map(function(e){var i={content:e,isAlternate:true};return n("yoo-chat-message",{class:t.isSelected(e)?"choice selected":"choice",message:i,onMessageClick:function(e){return t.onItemSelect(e.detail)}})}):null)};t.prototype.renderCard=function(){var t=this;return n("div",{class:"card-container"},this.values.map(function(e){return n("div",{class:{"card-select":true,selected:t.isSelected(e.value)},onClick:function(){return t.onItemSelect(e.value)}},e.icon&&n("div",{class:"card-icon"},n("yoo-icon",{class:e.icon})),n("div",{class:"card-heading"},h(e.title)),n("div",{class:"card-description"},h(e.description)),n("div",{class:"check-container"},n("yoo-icon",{class:"yo-check"})))}))};t.prototype.renderImage=function(){var t=this;var e=this.values.some(function(t){return t&&t.valueItem&&t.valueItem.length>16});if(l()["boost"]){return n("div",{class:"images-container"},this.values?this.values.map(function(i,s){return n("div",{onClick:t.isHistory?function(){t.onOpenImage(i.valueItem,s)}:null,class:{"image-container":true,"twoline-description":e&&!m(),"twoline-description-tablet":e&&m()}},n("div",{class:"image-content",onClick:!t.readonly?function(e){return t.onItemSelect(i.valueItem)}:null},!t.isHistory&&n("div",{onClick:function(){return v(t.values,s)},class:"maximize-container"},n("yoo-icon",{class:"yo-maximize"})),i._downloadURL&&n("yoo-img",{type:"back",class:"image boost-image",src:p(i._downloadURL,98,98,null,null,null,null,true)}),!t.readonly?n("yoo-form-checkbox",{class:"btn-form-choice",value:t.isSelected(i.valueItem)}):null),n("div",{class:"text boost-text"},i.valueItem))}):null)}return n("div",{class:"images-container"},this.values?this.values.map(function(e,i){return n("div",{onClick:t.isHistory?function(){t.onOpenImage(e,i)}:null,class:"image-container"},n("div",{class:"image-content",onClick:!t.readonly?function(i){return t.onItemSelect(e)}:null},t.images[i]&&t.images[i]._downloadURL?n("yoo-img",{type:"back",class:"image",src:p(t.images[i]._downloadURL,98,98,null,null,null,null,true)}):null,!t.readonly?n("yoo-form-checkbox",{class:"btn-form-choice",value:t.isSelected(e)}):null,n("div",{class:"text"},e)),t.isHistory?null:[n("div",{onClick:function(){t.onOpenImage(e,i)},class:"maximize-container"},n("yoo-icon",{class:"yo-maximize"}))])}):null)};t.prototype.renderReadonlyChat=function(){if(this.value){if(this.multiple){return[this.value?this.value.map(function(t){return n("span",null,c(t))}):null]}else{return[n("span",null,c(this.value))]}}};t.prototype.renderReadOnlyImage=function(t){var e=this.images.find(function(e){return e._filename===t});return n("div",{class:"image-container"},n("div",{class:"image-content"},e&&e._downloadURL?n("yoo-img",{type:"back",class:"image",src:p(e._downloadURL,98,98,null,null,null,null,true)}):null))};t.prototype.renderReadonly=function(){var t=this;if(this.type==="chat"){return this.renderReadonlyChat()}else if(this.type==="image"){return this.renderImage()}else{return this.value?[].concat(this.value).map(function(e){var i=t.getColor(e);var s={};if(i){s={color:i}}return n("div",{class:"text",innerHTML:c(e),style:s})}):null}};t.prototype.renderEditable=function(){switch(this.type){case"radio":return this.renderRadio();case"chat":return this.sentence?this.renderChat():null;case"image":return this.renderImage();case"button":return this.renderButton();case"card":return this.renderCard()}};t.prototype.renderTextHistory=function(){var t=this;return this.value?[].concat(this.value).map(function(e,i){var s=t.getColor(e);var o={};if(s){o={color:s}}return n("span",{class:"text",innerHTML:(i!==0?", ":"")+e,style:o})}):null};t.prototype.render=function(){return n(s,{class:Object.assign({"swiper-no-swiping":this.type==="image"},l())},this.readonly?n("div",{class:"readonly "+this.type},this.renderReadonly()):n("div",{class:"outer-container"},this.values&&this.renderEditable()))};Object.defineProperty(t.prototype,"host",{get:function(){return o(this)},enumerable:true,configurable:true});Object.defineProperty(t,"style",{get:function(){return".iframe-root{top:0;right:0;bottom:0;left:0;position:absolute;color:var(--black);overflow-y:auto;scrollbar-width:none}.iframe-root yoo-app .wrapper{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;height:100%;width:100%}.iframe-root yoo-app .wrapper.center-center{-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%}.iframe-root::-webkit-scrollbar{display:none}:host .readonly .item{display:block!important;height:100%;padding:.3rem;padding-left:0;font-size:var(--font-size-03,1rem);cursor:pointer}:host .readonly .item .badge-inner{width:1.25rem;height:1.25rem;margin-top:1px;margin-right:var(--padding-10,.625rem);float:left;border-radius:50%;color:var(--light,#fff);font-size:var(--font-size-01,.75rem);line-height:1.25rem;text-align:center}:host .readonly.chat{display:grid}:host .outer-container.droppable{-ms-touch-action:none;touch-action:none}:host .outer-container .radio-button-choice{margin-top:-.5rem}:host .outer-container .grid-container{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-pack:distribute;justify-content:space-around}:host .outer-container .grid-container.singleColumn{grid-template-columns:90%}:host .outer-container .grid-container.doubleColumn{-ms-flex-pack:justify;justify-content:space-between}:host .outer-container .grid-container yoo-button.btn-form-choice{margin-bottom:.4rem}:host .outer-container .input-zone{position:relative;height:2.375rem;margin-top:.5rem;margin-right:1rem;margin-left:1rem;padding:var(--padding-5,.3125rem);border:1px solid var(--stable,#adadad);border-radius:.3125rem;background-color:var(--light,#fff)}:host .outer-container .input-zone textarea{font-size:var(--font-size-02,.875rem);font-family:Lato;width:100%;height:100%;background-color:var(--light,#fff);color:var(--black,#000);line-height:1rem;border:none;resize:none;display:block;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;outline:none!important;overflow:hidden;overflow-y:scroll!important}:host .outer-container .item{display:block!important;height:100%;padding:.75rem;border-bottom:1px solid var(--stable-40,hsla(0,0%,67.8%,.4));color:var(--dark,#2b3648);font-size:var(--font-size-03,1rem);cursor:pointer}:host .outer-container .item:last-child{border-bottom:none}:host .outer-container .item .badge-inner{width:1.25rem;height:1.25rem;margin-top:3px;margin-right:var(--padding-10,.625rem);float:left;border-radius:50%;color:var(--always-light,#fff);font-size:var(--font-size-01,.75rem);line-height:1.25rem;text-align:center}:host .outer-container .item.drag-target{position:relative;background:var(--light,#fff);-webkit-box-shadow:var(--button-shadow,0 2px 6px rgba(0,0,0,.1));box-shadow:var(--button-shadow,0 2px 6px rgba(0,0,0,.1));z-index:50}:host .outer-container .item.drop-target{background:var(--stable-40,hsla(0,0%,67.8%,.4))}:host .outer-container .messages-container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;padding:0 1rem 1rem 1rem}:host .outer-container .messages-container .chat-title.alternate{text-align:end}:host .outer-container .messages-container .chat-item,:host .outer-container .messages-container .chat-title,:host .outer-container .messages-container yoo-chat-message{margin-bottom:.5rem}:host .outer-container .messages-container yoo-chat-message{display:block}:host .outer-container .card-container{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}:host .outer-container .card-container .card-select{position:relative;width:calc(50% - 1.5625rem);margin:0 var(--padding-20,1.25rem) var(--padding-10,.625rem) 0;border:solid 1px var(--stable-light,#f1f1f1);border-radius:.5rem}:host .outer-container .card-container .card-select .card-description,:host .outer-container .card-container .card-select .card-heading{font-size:var(--font-size-02,.875rem);white-space:normal;word-break:break-word}:host .outer-container .card-container .card-select .card-icon{margin-top:3rem;font-size:var(--font-size-10,2.625rem);text-align:center}:host .outer-container .card-container .card-select .card-heading{padding:var(--padding-20,1.25rem) var(--padding-40,2.5rem) var(--padding-10,.625rem) var(--padding-20,1.25rem)}:host .outer-container .card-container .card-select .card-description{padding:0 var(--padding-20,1.25rem) var(--padding-20,1.25rem);color:var(--text-color,#807f83)}:host .outer-container .card-container .card-select .check-container{top:var(--padding-20,1.25rem);right:var(--padding-20,1.25rem);bottom:auto;left:auto;position:absolute;color:var(--stable,#adadad);font-size:var(--font-size-04,1.125rem)}:host .outer-container .card-container .card-select.selected{border:solid 1px var(--success,#04cc99)}:host .outer-container .card-container .card-select.selected .card-icon,:host .outer-container .card-container .card-select.selected .check-container{color:var(--success,#04cc99)}:host .outer-container .images-container,:host .readonly .images-container{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-line-pack:center;align-content:center;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}:host .outer-container .images-container .image-container,:host .readonly .images-container .image-container{display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:column;flex-direction:column;margin:var(--padding-10,.625rem);margin-top:0}:host .outer-container .images-container .image-container .image-content,:host .readonly .images-container .image-container .image-content{display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:column;flex-direction:column;-ms-flex-line-pack:center;align-content:center;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;cursor:pointer}:host .outer-container .images-container .image-container .image-content .image,:host .readonly .images-container .image-container .image-content .image{width:6.5625rem;height:6.5625rem;border:solid 1px var(--stable-alt,#d0d0d0);border-radius:var(--video-border,8px)}:host .outer-container .images-container .image-container .image-content .boost-image,:host .readonly .images-container .image-container .image-content .boost-image{width:7.1255rem;height:7.1255rem}:host .outer-container .images-container .image-container .image-content yoo-form-checkbox,:host .readonly .images-container .image-container .image-content yoo-form-checkbox{top:0;right:0;bottom:auto;left:auto;position:absolute}:host .outer-container .images-container .image-container .maximize-container,:host .readonly .images-container .image-container .maximize-container{display:-ms-flexbox;display:flex;position:absolute;right:.5rem;bottom:2rem;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:1.875rem;height:1.875rem;border-radius:50%;background:var(--backdrop-black-transparent,rgba(0,0,0,.6));cursor:pointer;z-index:1}:host .outer-container .images-container .image-container .maximize-container .yo-maximize,:host .readonly .images-container .image-container .maximize-container .yo-maximize{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:1.125rem;height:1.125rem;color:var(--light,#fff);-o-object-fit:contain;object-fit:contain}:host .outer-container .images-container .image-container .text,:host .readonly .images-container .image-container .text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:6.5625rem;margin-top:var(--padding-10,.625rem);color:var(--black,#000);font-size:var(--font-size-02,.875rem);line-height:1.0625rem;text-align:center;cursor:pointer}:host .outer-container .images-container .image-container .boost-text,:host .readonly .images-container .image-container .boost-text{display:-webkit-box;height:2.5rem;font-size:var(--font-size-04,1.125rem);line-height:1.2rem;text-align:left;white-space:normal;overflow:hidden;-webkit-line-clamp:2;-webkit-box-orient:vertical}:host .outer-container .images-container .image-container .boost-text:after,:host .readonly .images-container .image-container .boost-text:after{position:absolute;right:0;width:1rem;height:1rem;margin-top:.2rem;background:var(--light,#fff);content:\"\"}:host .readonly{padding:.5rem;padding-left:0;padding-bottom:0}:host .readonly .images-container{-ms-flex-pack:left;justify-content:left}:host(.boost) .outer-container .card-container .card-select.selected{border:solid 1px var(--danger-light,#f46885)}:host(.boost) .outer-container .card-container .card-select.selected .card-icon,:host(.boost) .outer-container .card-container .card-select.selected .check-container{color:var(--danger-light,#f46885)}:host(.boost) .item span{font-size:var(--font-size-04,1.125rem)}:host(.boost) .outer-container .images-container .image-container{margin-bottom:1.5rem}:host(.boost) .outer-container .images-container .image-container .maximize-container,:host(.boost) .readonly .images-container .image-container .maximize-container{top:4.9rem;right:5px;bottom:5px}:host(.boost) .readonly .images-container .image-container.twoline-description-tablet .image-content,:host(.boost) .readonly .images-container .image-container.twoline-description .image-content{display:inline-block;min-height:8.5rem}:host(.boost) .readonly .images-container .image-container.twoline-description{margin-bottom:3rem}:host(.round) .outer-container .grid-container .choice-container{border-radius:.3125rem}:host(.history) .readonly{padding:0!important}:host(.history) .readonly .text{max-width:80px}:host(.history) .readonly .item{width:auto}:host(.history) .readonly .images-container{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}:host(.history) .readonly .images-container .image-container{margin:0}:host(.history) .readonly .images-container .image-container .image-content .image{width:30px;height:30px;margin-right:10px;border-radius:2px}:host(.operations) .outer-container .item .badge-inner,:host(.operations) .readonly .item .badge-inner{background:var(--success,#04cc99)}:host(.operations) .outer-container .messages-container yoo-chat-message{--background-message-content:var(--success,#04cc99)}:host(.operations) .outer-container .images-container .image-container .text.link,:host(.operations) .readonly .images-container .image-container .text.link{color:var(--success,#04cc99)}:host(.boost) .outer-container .item .badge-inner,:host(.boost) .readonly .item .badge-inner{background:var(--danger-light,#f46885)}:host(.boost) .outer-container .messages-container yoo-chat-message{--background-message-content:var(--danger-light,#f46885)}:host(.boost) .outer-container .images-container .image-container .text.link,:host(.boost) .readonly .images-container .image-container .text.link{color:var(--danger-light,#f46885)}"},enumerable:true,configurable:true});return t}())}}});