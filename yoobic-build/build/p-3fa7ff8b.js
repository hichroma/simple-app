function t(n){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(n)}function n(t,n,i){return n in t?Object.defineProperty(t,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[n]=i,t}function i(){return(i=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var e in i)Object.prototype.hasOwnProperty.call(i,e)&&(t[e]=i[e])}return t}).apply(this,arguments)}function e(t){for(var i=1;i<arguments.length;i++){var e=null!=arguments[i]?arguments[i]:{},o=Object.keys(e);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.forEach(function(i){n(t,i,e[i])})}return t}function o(t,n){if(null==t)return{};var i,e,o=function(t,n){if(null==t)return{};var i,e,o={},r=Object.keys(t);for(e=0;e<r.length;e++)n.indexOf(i=r[e])>=0||(o[i]=t[i]);return o}(t,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(e=0;e<r.length;e++)n.indexOf(i=r[e])>=0||Object.prototype.propertyIsEnumerable.call(t,i)&&(o[i]=t[i])}return o}function r(t){return!!navigator.userAgent.match(t)}var a=r(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),u=r(/Edge/i),s=r(/firefox/i),l=r(/safari/i)&&!r(/chrome/i)&&!r(/android/i),c=r(/iP(ad|od|hone)/i),f=r(/chrome/i)&&r(/android/i),h={capture:!1,passive:!1};function d(t,n,i){t.addEventListener(n,i,!a&&h)}function v(t,n,i){t.removeEventListener(n,i,!a&&h)}function m(t,n){if(n){if(">"===n[0]&&(n=n.substring(1)),t)try{if(t.matches)return t.matches(n);if(t.msMatchesSelector)return t.msMatchesSelector(n);if(t.webkitMatchesSelector)return t.webkitMatchesSelector(n)}catch(t){return!1}return!1}}function p(t){return t.host&&t!==document&&t.host.nodeType?t.host:t.parentNode}function g(t,n,i,e){if(t){i=i||document;do{if(null!=n&&(">"===n[0]?t.parentNode===i&&m(t,n):m(t,n))||e&&t===i)return t;if(t===i)break}while(t=p(t))}return null}var b,w=/\s+/g;function E(t,n,i){if(t&&n)if(t.classList)t.classList[i?"add":"remove"](n);else{var e=(" "+t.className+" ").replace(w," ").replace(" "+n+" "," ");t.className=(e+(i?" "+n:"")).replace(w," ")}}function y(t,n,i){var e=t&&t.style;if(e){if(void 0===i)return document.defaultView&&document.defaultView.getComputedStyle?i=document.defaultView.getComputedStyle(t,""):t.currentStyle&&(i=t.currentStyle),void 0===n?i:i[n];n in e||-1!==n.indexOf("webkit")||(n="-webkit-"+n),e[n]=i+("string"==typeof i?"":"px")}}function S(t,n){var i="";do{var e=y(t,"transform");e&&"none"!==e&&(i=e+" "+i)}while(!n&&(t=t.parentNode));var o=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix;return o&&new o(i)}function x(t,n,i){if(t){var e=t.getElementsByTagName(n),o=0,r=e.length;if(i)for(;o<r;o++)i(e[o],o);return e}return[]}function T(){return a?document.documentElement:document.scrollingElement}function I(t,n,i,e,o){if(t.getBoundingClientRect||t===window){var r,u,s,l,c,f,h;if(t!==window&&t!==T()?(u=(r=t.getBoundingClientRect()).top,s=r.left,l=r.bottom,c=r.right,f=r.height,h=r.width):(u=0,s=0,l=window.innerHeight,c=window.innerWidth,f=window.innerHeight,h=window.innerWidth),(n||i)&&t!==window&&(o=o||t.parentNode,!a))do{if(o&&o.getBoundingClientRect&&("none"!==y(o,"transform")||i&&"static"!==y(o,"position"))){var d=o.getBoundingClientRect();u-=d.top+parseInt(y(o,"border-top-width")),s-=d.left+parseInt(y(o,"border-left-width")),l=u+r.height,c=s+r.width;break}}while(o=o.parentNode);if(e&&t!==window){var v=S(o||t),m=v&&v.a,p=v&&v.d;v&&(l=(u/=p)+(f/=p),c=(s/=m)+(h/=m))}return{top:u,left:s,bottom:l,right:c,width:h,height:f}}}function M(t,n,i,e){for(var o=C(t,!0),r=(n||I(t))[i];o;){var a=I(o)[e];if(!("top"===e||"left"===e?r>=a:r<=a))return o;if(o===T())break;o=C(o,!1)}return!1}function O(t,n,i){for(var e=0,o=0,r=t.children;o<r.length;){if("none"!==r[o].style.display&&r[o]!==Ot.ghost&&r[o]!==Ot.dragged&&g(r[o],i.draggable,t,!1)){if(e===n)return r[o];e++}o++}return null}function _(t,n){for(var i=t.lastElementChild;i&&(i===Ot.ghost||"none"===y(i,"display")||n&&!m(i,n));)i=i.previousElementSibling;return i||null}function D(t,n){var i=0;if(!t||!t.parentNode)return-1;for(;t=t.previousElementSibling;)"TEMPLATE"===t.nodeName.toUpperCase()||t===Ot.clone||n&&!m(t,n)||i++;return i}function k(t){var n=0,i=0,e=T();if(t)do{var o=S(t);n+=t.scrollLeft*o.a,i+=t.scrollTop*o.d}while(t!==e&&(t=t.parentNode));return[n,i]}function C(t,n){if(!t||!t.getBoundingClientRect)return T();var i=t,e=!1;do{if(i.clientWidth<i.scrollWidth||i.clientHeight<i.scrollHeight){var o=y(i);if(i.clientWidth<i.scrollWidth&&("auto"==o.overflowX||"scroll"==o.overflowX)||i.clientHeight<i.scrollHeight&&("auto"==o.overflowY||"scroll"==o.overflowY)){if(!i.getBoundingClientRect||i===document.body)return T();if(e||n)return i;e=!0}}}while(i=i.parentNode);return T()}function A(t,n){return Math.round(t.top)===Math.round(n.top)&&Math.round(t.left)===Math.round(n.left)&&Math.round(t.height)===Math.round(n.height)&&Math.round(t.width)===Math.round(n.width)}function j(t,n){return function(){if(!b){var i=arguments,e=this;1===i.length?t.call(e,i[0]):t.apply(e,i),b=setTimeout(function(){b=void 0},n)}}}function z(t,n,i){t.scrollLeft+=n,t.scrollTop+=i}function N(t){var n=window.Polymer,i=window.jQuery||window.Zepto;return n&&n.dom?n.dom(t).cloneNode(!0):i?i(t).clone(!0)[0]:t.cloneNode(!0)}var F="Sortable"+(new Date).getTime();var P=[],B={initializeByDefault:!0},H={mount:function(t){for(var n in B)!B.hasOwnProperty(n)||n in t||(t[n]=B[n]);P.push(t)},pluginEvent:function(t,n,i){var o=this;this.eventCanceled=!1;var r=t+"Global";P.forEach(function(a){n[a.pluginName]&&(n[a.pluginName][r]&&(o.eventCanceled=!!n[a.pluginName][r](e({sortable:n},i))),n.options[a.pluginName]&&n[a.pluginName][t]&&(o.eventCanceled=o.eventCanceled||!!n[a.pluginName][t](e({sortable:n},i))))})},initializePlugins:function(t,n,e){for(var o in P.forEach(function(o){var r=o.pluginName;if(t.options[r]||o.initializeByDefault){var a=new o(t,n);a.sortable=t,t[r]=a,i(e,a.options)}}),t.options)if(t.options.hasOwnProperty(o)){var r=this.modifyOption(t,o,t.options[o]);void 0!==r&&(t.options[o]=r)}},getEventOptions:function(t,n){var e={};return P.forEach(function(o){"function"==typeof o.eventOptions&&i(e,o.eventOptions.call(n,t))}),e},modifyOption:function(t,n,i){var e;return P.forEach(function(o){t[o.pluginName]&&o.optionListeners&&"function"==typeof o.optionListeners[n]&&(e=o.optionListeners[n].call(t[o.pluginName],i))}),e}},G=function(t,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=i.evt,a=o(i,["evt"]);H.pluginEvent.bind(Ot)(t,n,e({dragEl:R,parentEl:W,ghostEl:X,rootEl:Y,nextEl:q,lastDownEl:U,cloneEl:V,cloneHidden:Z,dragStarted:ot,putSortable:nt,activeSortable:Ot.active,originalEvent:r,oldIndex:$,oldDraggableIndex:K,newIndex:J,newDraggableIndex:Q,hideGhostForTarget:xt,unhideGhostForTarget:Tt,cloneNowHidden:function(){Z=!0},cloneNowShown:function(){Z=!1},dispatchSortableEvent:function(t){L({sortable:n,name:t,originalEvent:r})}},a))};function L(t){!function(t){var n,i=t.sortable,o=t.rootEl,r=t.name,s=t.targetEl,l=t.cloneEl,c=t.toEl,f=t.fromEl,h=t.oldIndex,d=t.newIndex,v=t.oldDraggableIndex,m=t.newDraggableIndex,p=t.originalEvent,g=t.putSortable,b=t.eventOptions,w=(i=i||o[F]).options,E="on"+r.charAt(0).toUpperCase()+r.substr(1);!window.CustomEvent||a||u?(n=document.createEvent("Event")).initEvent(r,!0,!0):n=new CustomEvent(r,{bubbles:!0,cancelable:!0}),n.to=c||o,n.from=f||o,n.item=s||o,n.clone=l,n.oldIndex=h,n.newIndex=d,n.oldDraggableIndex=v,n.newDraggableIndex=m,n.originalEvent=p,n.pullMode=g?g.lastPutMode:void 0;var y=e({},b,H.getEventOptions(r,i));for(var S in y)n[S]=y[S];o&&o.dispatchEvent(n),w[E]&&w[E].call(i,n)}(e({putSortable:nt,cloneEl:V,targetEl:R,rootEl:Y,oldIndex:$,oldDraggableIndex:K,newIndex:J,newDraggableIndex:Q},t))}if("undefined"==typeof window||!window.document)throw new Error("Sortable.js requires a window with a document");var R,W,X,Y,q,U,V,Z,$,J,K,Q,tt,nt,it,et,ot,rt,at,ut,st,lt=!1,ct=!1,ft=[],ht=!1,dt=!1,vt=[],mt=!1,pt=[],gt=c,bt=u||a?"cssFloat":"float",wt=!f&&!c&&"draggable"in document.createElement("div"),Et=function(){if(a)return!1;var t=document.createElement("x");return t.style.cssText="pointer-events:auto","auto"===t.style.pointerEvents}(),yt=function(t,n){var i=y(t),e=parseInt(i.width)-parseInt(i.paddingLeft)-parseInt(i.paddingRight)-parseInt(i.borderLeftWidth)-parseInt(i.borderRightWidth),o=O(t,0,n),r=O(t,1,n),a=o&&y(o),u=r&&y(r),s=a&&parseInt(a.marginLeft)+parseInt(a.marginRight)+I(o).width,l=u&&parseInt(u.marginLeft)+parseInt(u.marginRight)+I(r).width;return"flex"===i.display?"column"===i.flexDirection||"column-reverse"===i.flexDirection?"vertical":"horizontal":"grid"===i.display?i.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal":o&&"none"!==a.float?!r||"both"!==u.clear&&u.clear!==("left"===a.float?"left":"right")?"horizontal":"vertical":o&&("block"===a.display||"flex"===a.display||"table"===a.display||"grid"===a.display||s>=e&&"none"===i[bt]||r&&"none"===i[bt]&&s+l>e)?"vertical":"horizontal"},St=function(n){function i(t,n){return function(e,o,r,a){if(null==t&&(n||e.options.group.name&&o.options.group.name&&e.options.group.name===o.options.group.name))return!0;if(null==t||!1===t)return!1;if(n&&"clone"===t)return t;if("function"==typeof t)return i(t(e,o,r,a),n)(e,o,r,a);var u=(n?e:o).options.group.name;return!0===t||"string"==typeof t&&t===u||t.join&&t.indexOf(u)>-1}}var e={},o=n.group;o&&"object"==t(o)||(o={name:o}),e.name=o.name,e.checkPull=i(o.pull,!0),e.checkPut=i(o.put),e.revertClone=o.revertClone,n.group=e},xt=function(){!Et&&X&&y(X,"display","none")},Tt=function(){!Et&&X&&y(X,"display","")};document.addEventListener("click",function(t){if(ct)return t.preventDefault(),t.stopPropagation&&t.stopPropagation(),t.stopImmediatePropagation&&t.stopImmediatePropagation(),ct=!1,!1},!0);var It=function(t){if(R){var n=(o=(t=t.touches?t.touches[0]:t).clientX,r=t.clientY,ft.some(function(t){if(!_(t)){var n=I(t),i=t[F].options.emptyInsertThreshold;return i&&o>=n.left-i&&o<=n.right+i&&r>=n.top-i&&r<=n.bottom+i?a=t:void 0}}),a);if(n){var i={};for(var e in t)t.hasOwnProperty(e)&&(i[e]=t[e]);i.target=i.rootEl=n,i.preventDefault=void 0,i.stopPropagation=void 0,n[F]._onDragOver(i)}}var o,r,a},Mt=function(t){R&&R.parentNode[F]._isOutsideThisEl(t.target)};function Ot(t,n){if(!t||!t.nodeType||1!==t.nodeType)throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t));this.el=t,this.options=n=i({},n),t[F]=this;var e,o,r={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(t.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return yt(t,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(t,n){t.setData("Text",n.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:!1!==Ot.supportPointer&&"PointerEvent"in window,emptyInsertThreshold:5};for(var a in H.initializePlugins(this,t,r),r)!(a in n)&&(n[a]=r[a]);for(var u in St(n),this)"_"===u.charAt(0)&&"function"==typeof this[u]&&(this[u]=this[u].bind(this));this.nativeDraggable=!n.forceFallback&&wt,this.nativeDraggable&&(this.options.touchStartThreshold=1),n.supportPointer?d(t,"pointerdown",this._onTapStart):(d(t,"mousedown",this._onTapStart),d(t,"touchstart",this._onTapStart)),this.nativeDraggable&&(d(t,"dragover",this),d(t,"dragenter",this)),ft.push(this.el),n.store&&n.store.get&&this.sort(n.store.get(this)||[]),i(this,(o=[],{captureAnimationState:function(){o=[],this.options.animation&&[].slice.call(this.el.children).forEach(function(t){if("none"!==y(t,"display")&&t!==Ot.ghost){o.push({target:t,rect:I(t)});var n=I(t);if(t.thisAnimationDuration){var i=S(t,!0);i&&(n.top-=i.f,n.left-=i.e)}t.fromRect=n}})},addAnimationState:function(t){o.push(t)},removeAnimationState:function(t){o.splice(function(t,n){for(var i in t)if(t.hasOwnProperty(i))for(var e in n)if(n.hasOwnProperty(e)&&n[e]===t[i][e])return Number(i);return-1}(o,{target:t}),1)},animateAll:function(t){var n=this;if(!this.options.animation)return clearTimeout(e),void("function"==typeof t&&t());var i=!1,r=0;o.forEach(function(t){var e=0,o=t.target,a=o.fromRect,u=I(o),s=o.prevFromRect,l=o.prevToRect,c=t.rect,f=S(o,!0);f&&(u.top-=f.f,u.left-=f.e),o.toRect=u,(M(o,u,"bottom","top")||M(o,u,"top","bottom")||M(o,u,"right","left")||M(o,u,"left","right"))&&(M(o,c,"bottom","top")||M(o,c,"top","bottom")||M(o,c,"right","left")||M(o,c,"left","right"))&&(M(o,a,"bottom","top")||M(o,a,"top","bottom")||M(o,a,"right","left")||M(o,a,"left","right"))||(o.thisAnimationDuration&&A(s,u)&&!A(a,u)&&(c.top-u.top)/(c.left-u.left)==(a.top-u.top)/(a.left-u.left)&&(e=function(t,n,i,e){return Math.sqrt(Math.pow(n.top-t.top,2)+Math.pow(n.left-t.left,2))/Math.sqrt(Math.pow(n.top-i.top,2)+Math.pow(n.left-i.left,2))*e.animation}(c,s,l,n.options)),A(u,a)||(o.prevFromRect=a,o.prevToRect=u,e||(e=n.options.animation),n.animate(o,c,e)),e&&(i=!0,r=Math.max(r,e),clearTimeout(o.animationResetTimer),o.animationResetTimer=setTimeout(function(){o.animationTime=0,o.prevFromRect=null,o.fromRect=null,o.prevToRect=null,o.thisAnimationDuration=null},e),o.thisAnimationDuration=e))}),clearTimeout(e),i?e=setTimeout(function(){"function"==typeof t&&t()},r):"function"==typeof t&&t(),o=[]},animate:function(t,n,i){if(i){y(t,"transition",""),y(t,"transform","");var e=I(t),o=S(this.el),r=(n.left-e.left)/(o&&o.a||1),a=(n.top-e.top)/(o&&o.d||1);t.animatingX=!!r,t.animatingY=!!a,y(t,"transform","translate3d("+r+"px,"+a+"px,0)"),y(t,"transition","transform "+i+"ms"+(this.options.easing?" "+this.options.easing:"")),y(t,"transform","translate3d(0,0,0)"),"number"==typeof t.animated&&clearTimeout(t.animated),t.animated=setTimeout(function(){y(t,"transition",""),y(t,"transform",""),t.animated=!1,t.animatingX=!1,t.animatingY=!1},i)}}}))}function _t(t,n,i,e,o,r,s,l){var c,f,h=t[F],d=h.options.onMove;return!window.CustomEvent||a||u?(c=document.createEvent("Event")).initEvent("move",!0,!0):c=new CustomEvent("move",{bubbles:!0,cancelable:!0}),c.to=n,c.from=t,c.dragged=i,c.draggedRect=e,c.related=o||n,c.relatedRect=r||I(n),c.willInsertAfter=l,c.originalEvent=s,t.dispatchEvent(c),d&&(f=d.call(h,c,s)),f}function Dt(t){t.draggable=!1}function kt(){mt=!1}function Ct(t){for(var n=t.tagName+t.className+t.src+t.href+t.textContent,i=n.length,e=0;i--;)e+=n.charCodeAt(i);return e.toString(36)}function At(t){return setTimeout(t,0)}function jt(t){return clearTimeout(t)}Ot.prototype={constructor:Ot,_isOutsideThisEl:function(t){this.el.contains(t)||t===this.el||(rt=null)},_getDirection:function(t,n){return"function"==typeof this.options.direction?this.options.direction.call(this,t,n,R):this.options.direction},_onTapStart:function(t){if(t.cancelable){var n=this,i=this.el,e=this.options,o=e.preventOnFilter,r=t.type,a=t.touches&&t.touches[0],u=(a||t).target,s=t.target.shadowRoot&&(t.path&&t.path[0]||t.composedPath&&t.composedPath()[0])||u,l=e.filter;if(function(t){pt.length=0;for(var n=t.getElementsByTagName("input"),i=n.length;i--;){var e=n[i];e.checked&&pt.push(e)}}(i),!R&&!(/mousedown|pointerdown/.test(r)&&0!==t.button||e.disabled||s.isContentEditable||(u=g(u,e.draggable,i,!1))&&u.animated||U===u)){if($=D(u),K=D(u,e.draggable),"function"==typeof l){if(l.call(this,t,u,this))return L({sortable:n,rootEl:s,name:"filter",targetEl:u,toEl:i,fromEl:i}),G("filter",n,{evt:t}),void(o&&t.cancelable&&t.preventDefault())}else if(l&&(l=l.split(",").some(function(e){if(e=g(s,e.trim(),i,!1))return L({sortable:n,rootEl:e,name:"filter",targetEl:u,fromEl:i,toEl:i}),G("filter",n,{evt:t}),!0})))return void(o&&t.cancelable&&t.preventDefault());e.handle&&!g(s,e.handle,i,!1)||this._prepareDragStart(t,a,u)}}},_prepareDragStart:function(t,n,i){var e,o=this,r=o.el,l=o.options,c=r.ownerDocument;if(i&&!R&&i.parentNode===r)if(Y=r,W=(R=i).parentNode,q=R.nextSibling,U=i,tt=l.group,Ot.dragged=R,it={target:R,clientX:(n||t).clientX,clientY:(n||t).clientY},this._lastX=(n||t).clientX,this._lastY=(n||t).clientY,R.style["will-change"]="all",e=function(){G("delayEnded",o,{evt:t}),Ot.eventCanceled?o._onDrop():(o._disableDelayedDragEvents(),!s&&o.nativeDraggable&&(R.draggable=!0),o._triggerDragStart(t,n),L({sortable:o,name:"choose",originalEvent:t}),E(R,l.chosenClass,!0))},l.ignore.split(",").forEach(function(t){x(R,t.trim(),Dt)}),d(c,"dragover",It),d(c,"mousemove",It),d(c,"touchmove",It),d(c,"mouseup",o._onDrop),d(c,"touchend",o._onDrop),d(c,"touchcancel",o._onDrop),s&&this.nativeDraggable&&(this.options.touchStartThreshold=4,R.draggable=!0),G("delayStart",this,{evt:t}),!l.delay||l.delayOnTouchOnly&&!n||this.nativeDraggable&&(u||a))e();else{if(Ot.eventCanceled)return void this._onDrop();d(c,"mouseup",o._disableDelayedDrag),d(c,"touchend",o._disableDelayedDrag),d(c,"touchcancel",o._disableDelayedDrag),d(c,"mousemove",o._delayedDragTouchMoveHandler),d(c,"touchmove",o._delayedDragTouchMoveHandler),l.supportPointer&&d(c,"pointermove",o._delayedDragTouchMoveHandler),o._dragStartTimer=setTimeout(e,l.delay)}},_delayedDragTouchMoveHandler:function(t){var n=t.touches?t.touches[0]:t;Math.max(Math.abs(n.clientX-this._lastX),Math.abs(n.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){R&&Dt(R),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var t=this.el.ownerDocument;v(t,"mouseup",this._disableDelayedDrag),v(t,"touchend",this._disableDelayedDrag),v(t,"touchcancel",this._disableDelayedDrag),v(t,"mousemove",this._delayedDragTouchMoveHandler),v(t,"touchmove",this._delayedDragTouchMoveHandler),v(t,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(t,n){n=n||"touch"==t.pointerType&&t,!this.nativeDraggable||n?d(document,this.options.supportPointer?"pointermove":n?"touchmove":"mousemove",this._onTouchMove):(d(R,"dragend",this),d(Y,"dragstart",this._onDragStart));try{document.selection?At(function(){document.selection.empty()}):window.getSelection().removeAllRanges()}catch(t){}},_dragStarted:function(t,n){if(lt=!1,Y&&R){G("dragStarted",this,{evt:n}),this.nativeDraggable&&d(document,"dragover",Mt);var i=this.options;!t&&E(R,i.dragClass,!1),E(R,i.ghostClass,!0),Ot.active=this,t&&this._appendGhost(),L({sortable:this,name:"start",originalEvent:n})}else this._nulling()},_emulateDragOver:function(){if(et){this._lastX=et.clientX,this._lastY=et.clientY,xt();for(var t=document.elementFromPoint(et.clientX,et.clientY),n=t;t&&t.shadowRoot&&(t=t.shadowRoot.elementFromPoint(et.clientX,et.clientY))!==n;)n=t;if(R.parentNode[F]._isOutsideThisEl(t),n)do{if(n[F]&&n[F]._onDragOver({clientX:et.clientX,clientY:et.clientY,target:t,rootEl:n})&&!this.options.dragoverBubble)break;t=n}while(n=n.parentNode);Tt()}},_onTouchMove:function(t){if(it){var n=this.options,i=n.fallbackTolerance,e=n.fallbackOffset,o=t.touches?t.touches[0]:t,r=X&&S(X),a=X&&r&&r.a,u=X&&r&&r.d,s=gt&&st&&k(st),l=(o.clientX-it.clientX+e.x)/(a||1)+(s?s[0]-vt[0]:0)/(a||1),c=(o.clientY-it.clientY+e.y)/(u||1)+(s?s[1]-vt[1]:0)/(u||1),f=t.touches?"translate3d("+l+"px,"+c+"px,0)":"translate("+l+"px,"+c+"px)";if(!Ot.active&&!lt){if(i&&Math.max(Math.abs(o.clientX-this._lastX),Math.abs(o.clientY-this._lastY))<i)return;this._onDragStart(t,!0)}et=o,y(X,"webkitTransform",f),y(X,"mozTransform",f),y(X,"msTransform",f),y(X,"transform",f),t.cancelable&&t.preventDefault()}},_appendGhost:function(){if(!X){var t=this.options.fallbackOnBody?document.body:Y,n=I(R,!0,gt,!0,t),i=this.options;if(gt){for(st=t;"static"===y(st,"position")&&"none"===y(st,"transform")&&st!==document;)st=st.parentNode;st!==document.body&&st!==document.documentElement?(st===document&&(st=T()),n.top+=st.scrollTop,n.left+=st.scrollLeft):st=T(),vt=k(st)}E(X=R.cloneNode(!0),i.ghostClass,!1),E(X,i.fallbackClass,!0),E(X,i.dragClass,!0),y(X,"transition",""),y(X,"transform",""),y(X,"box-sizing","border-box"),y(X,"margin",0),y(X,"top",n.top),y(X,"left",n.left),y(X,"width",n.width),y(X,"height",n.height),y(X,"opacity","0.8"),y(X,"position",gt?"absolute":"fixed"),y(X,"zIndex","100000"),y(X,"pointerEvents","none"),Ot.ghost=X,t.appendChild(X)}},_onDragStart:function(t,n){var i=this,e=t.dataTransfer,o=i.options;G("dragStart",this,{evt:t}),Ot.eventCanceled?this._onDrop():(G("setupClone",this),Ot.eventCanceled||((V=N(R)).draggable=!1,V.style["will-change"]="",this._hideClone(),E(V,this.options.chosenClass,!1),Ot.clone=V),i.cloneId=At(function(){G("clone",i),Ot.eventCanceled||(i.options.removeCloneOnHide||Y.insertBefore(V,R),i._hideClone(),L({sortable:i,name:"clone"}))}),!n&&E(R,o.dragClass,!0),n?(ct=!0,i._loopId=setInterval(i._emulateDragOver,50)):(v(document,"mouseup",i._onDrop),v(document,"touchend",i._onDrop),v(document,"touchcancel",i._onDrop),e&&(e.effectAllowed="move",o.setData&&o.setData.call(i,e,R)),d(document,"drop",i),y(R,"transform","translateZ(0)")),lt=!0,i._dragStartId=At(i._dragStarted.bind(i,n,t)),d(document,"selectstart",i),ot=!0,l&&y(document.body,"user-select","none"))},_onDragOver:function(t){var n,i,o,r,a=this.el,u=t.target,s=this.options,l=s.group,c=Ot.active,f=tt===l,h=s.sort,d=nt||c,v=this,m=!1;if(!mt){if(void 0!==t.preventDefault&&t.cancelable&&t.preventDefault(),u=g(u,s.draggable,a,!0),B("dragOver"),Ot.eventCanceled)return m;if(R.contains(t.target)||u.animated&&u.animatingX&&u.animatingY||v._ignoreWhileAnimating===u)return U(!1);if(ct=!1,c&&!s.disabled&&(f?h||(o=!Y.contains(R)):nt===this||(this.lastPutMode=tt.checkPull(this,c,R,t))&&l.checkPut(this,c,R,t))){if(r="vertical"===this._getDirection(t,u),n=I(R),B("dragOverValid"),Ot.eventCanceled)return m;if(o)return W=Y,H(),this._hideClone(),B("revert"),Ot.eventCanceled||(q?Y.insertBefore(R,q):Y.appendChild(R)),U(!0);var p=_(a,s.draggable);if(!p||function(t,n,i){var e=I(_(i.el,i.options.draggable));return n?t.clientX>e.right+10||t.clientX<=e.right&&t.clientY>e.bottom&&t.clientX>=e.left:t.clientX>e.right&&t.clientY>e.top||t.clientX<=e.right&&t.clientY>e.bottom+10}(t,r,this)&&!p.animated){if(p===R)return U(!1);if(p&&a===t.target&&(u=p),u&&(i=I(u)),!1!==_t(Y,a,R,n,u,i,t,!!u))return H(),a.appendChild(R),W=a,V(),U(!0)}else if(u.parentNode===a){i=I(u);var b,w,S,x=R.parentNode!==a,T=!function(t,n,i){var e=i?t.left:t.top,o=i?n.left:n.top;return e===o||(i?t.right:t.bottom)===(i?n.right:n.bottom)||e+(i?t.width:t.height)/2===o+(i?n.width:n.height)/2}(R.animated&&R.toRect||n,u.animated&&u.toRect||i,r),O=r?"top":"left",k=M(u,null,"top","top")||M(R,null,"top","top"),C=k?k.scrollTop:void 0;if(rt!==u&&(w=i[O],ht=!1,dt=!T&&s.invertSwap||x),0!==(b=function(t,n,i,e,o,r,a,u){var s=e?t.clientY:t.clientX,l=e?i.height:i.width,c=e?i.top:i.left,f=e?i.bottom:i.right,h=!1;if(!a)if(u&&ut<l*o){if(!ht&&(1===at?s>c+l*r/2:s<f-l*r/2)&&(ht=!0),ht)h=!0;else if(1===at?s<c+ut:s>f-ut)return-at}else if(s>c+l*(1-o)/2&&s<f-l*(1-o)/2)return function(t){return D(R)<D(t)?1:-1}(n);return(h=h||a)&&(s<c+l*r/2||s>f-l*r/2)?s>c+l/2?1:-1:0}(t,u,i,r,T?1:s.swapThreshold,null==s.invertedSwapThreshold?s.swapThreshold:s.invertedSwapThreshold,dt,rt===u))){var A=D(R);do{S=W.children[A-=b]}while(S&&("none"===y(S,"display")||S===X))}if(0===b||S===u)return U(!1);rt=u,at=b;var j=u.nextElementSibling,N=!1,P=_t(Y,a,R,n,u,i,t,N=1===b);if(!1!==P)return 1!==P&&-1!==P||(N=1===P),mt=!0,setTimeout(kt,30),H(),N&&!j?a.appendChild(R):u.parentNode.insertBefore(R,N?j:u),k&&z(k,0,C-k.scrollTop),W=R.parentNode,void 0===w||dt||(ut=Math.abs(w-I(u)[O])),V(),U(!0)}if(a.contains(R))return U(!1)}return!1}function B(s,l){G(s,v,e({evt:t,isOwner:f,axis:r?"vertical":"horizontal",revert:o,dragRect:n,targetRect:i,canSort:h,fromSortable:d,target:u,completed:U,onMove:function(i,e){return _t(Y,a,R,n,i,I(i),t,e)},changed:V},l))}function H(){B("dragOverAnimationCapture"),v.captureAnimationState(),v!==d&&d.captureAnimationState()}function U(n){return B("dragOverCompleted",{insertion:n}),n&&(f?c._hideClone():c._showClone(v),v!==d&&(E(R,nt?nt.options.ghostClass:c.options.ghostClass,!1),E(R,s.ghostClass,!0)),nt!==v&&v!==Ot.active?nt=v:v===Ot.active&&nt&&(nt=null),d===v&&(v._ignoreWhileAnimating=u),v.animateAll(function(){B("dragOverAnimationComplete"),v._ignoreWhileAnimating=null}),v!==d&&(d.animateAll(),d._ignoreWhileAnimating=null)),(u===R&&!R.animated||u===a&&!u.animated)&&(rt=null),s.dragoverBubble||t.rootEl||u===document||(R.parentNode[F]._isOutsideThisEl(t.target),!n&&It(t)),!s.dragoverBubble&&t.stopPropagation&&t.stopPropagation(),m=!0}function V(){J=D(R),Q=D(R,s.draggable),L({sortable:v,name:"change",toEl:a,newIndex:J,newDraggableIndex:Q,originalEvent:t})}},_ignoreWhileAnimating:null,_offMoveEvents:function(){v(document,"mousemove",this._onTouchMove),v(document,"touchmove",this._onTouchMove),v(document,"pointermove",this._onTouchMove),v(document,"dragover",It),v(document,"mousemove",It),v(document,"touchmove",It)},_offUpEvents:function(){var t=this.el.ownerDocument;v(t,"mouseup",this._onDrop),v(t,"touchend",this._onDrop),v(t,"pointerup",this._onDrop),v(t,"touchcancel",this._onDrop),v(document,"selectstart",this)},_onDrop:function(t){var n=this.el,i=this.options;J=D(R),Q=D(R,i.draggable),G("drop",this,{evt:t}),J=D(R),Q=D(R,i.draggable),Ot.eventCanceled?this._nulling():(lt=!1,dt=!1,ht=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),jt(this.cloneId),jt(this._dragStartId),this.nativeDraggable&&(v(document,"drop",this),v(n,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),l&&y(document.body,"user-select",""),t&&(ot&&(t.cancelable&&t.preventDefault(),!i.dropBubble&&t.stopPropagation()),X&&X.parentNode&&X.parentNode.removeChild(X),(Y===W||nt&&"clone"!==nt.lastPutMode)&&V&&V.parentNode&&V.parentNode.removeChild(V),R&&(this.nativeDraggable&&v(R,"dragend",this),Dt(R),R.style["will-change"]="",ot&&!lt&&E(R,nt?nt.options.ghostClass:this.options.ghostClass,!1),E(R,this.options.chosenClass,!1),L({sortable:this,name:"unchoose",toEl:W,newIndex:null,newDraggableIndex:null,originalEvent:t}),Y!==W?(J>=0&&(L({rootEl:W,name:"add",toEl:W,fromEl:Y,originalEvent:t}),L({sortable:this,name:"remove",toEl:W,originalEvent:t}),L({rootEl:W,name:"sort",toEl:W,fromEl:Y,originalEvent:t}),L({sortable:this,name:"sort",toEl:W,originalEvent:t})),nt&&nt.save()):J!==$&&J>=0&&(L({sortable:this,name:"update",toEl:W,originalEvent:t}),L({sortable:this,name:"sort",toEl:W,originalEvent:t})),Ot.active&&(null!=J&&-1!==J||(J=$,Q=K),L({sortable:this,name:"end",toEl:W,originalEvent:t}),this.save()))),this._nulling())},_nulling:function(){G("nulling",this),Y=R=W=X=q=V=U=Z=it=et=ot=J=Q=$=K=rt=at=nt=tt=Ot.dragged=Ot.ghost=Ot.clone=Ot.active=null,pt.forEach(function(t){t.checked=!0}),pt.length=0},handleEvent:function(t){switch(t.type){case"drop":case"dragend":this._onDrop(t);break;case"dragenter":case"dragover":R&&(this._onDragOver(t),function(t){t.dataTransfer&&(t.dataTransfer.dropEffect="move"),t.cancelable&&t.preventDefault()}(t));break;case"selectstart":t.preventDefault()}},toArray:function(){for(var t,n=[],i=this.el.children,e=0,o=i.length,r=this.options;e<o;e++)g(t=i[e],r.draggable,this.el,!1)&&n.push(t.getAttribute(r.dataIdAttr)||Ct(t));return n},sort:function(t){var n={},i=this.el;this.toArray().forEach(function(t,e){var o=i.children[e];g(o,this.options.draggable,i,!1)&&(n[t]=o)},this),t.forEach(function(t){n[t]&&(i.removeChild(n[t]),i.appendChild(n[t]))})},save:function(){var t=this.options.store;t&&t.set&&t.set(this)},closest:function(t,n){return g(t,n||this.options.draggable,this.el,!1)},option:function(t,n){var i=this.options;if(void 0===n)return i[t];var e=H.modifyOption(this,t,n);i[t]=void 0!==e?e:n,"group"===t&&St(i)},destroy:function(){G("destroy",this);var t=this.el;t[F]=null,v(t,"mousedown",this._onTapStart),v(t,"touchstart",this._onTapStart),v(t,"pointerdown",this._onTapStart),this.nativeDraggable&&(v(t,"dragover",this),v(t,"dragenter",this)),Array.prototype.forEach.call(t.querySelectorAll("[draggable]"),function(t){t.removeAttribute("draggable")}),this._onDrop(),ft.splice(ft.indexOf(this.el),1),this.el=t=null},_hideClone:function(){if(!Z){if(G("hideClone",this),Ot.eventCanceled)return;y(V,"display","none"),this.options.removeCloneOnHide&&V.parentNode&&V.parentNode.removeChild(V),Z=!0}},_showClone:function(t){if("clone"===t.lastPutMode){if(Z){if(G("showClone",this),Ot.eventCanceled)return;Y.contains(R)&&!this.options.group.revertClone?Y.insertBefore(V,R):q?Y.insertBefore(V,q):Y.appendChild(V),this.options.group.revertClone&&this._animate(R,V),y(V,"display",""),Z=!1}}else this._hideClone()}},d(document,"touchmove",function(t){(Ot.active||lt)&&t.cancelable&&t.preventDefault()}),Ot.utils={on:d,off:v,css:y,find:x,is:function(t,n){return!!g(t,n,t,!1)},extend:function(t,n){if(t&&n)for(var i in n)n.hasOwnProperty(i)&&(t[i]=n[i]);return t},throttle:j,closest:g,toggleClass:E,clone:N,index:D,nextTick:At,cancelNextTick:jt,detectDirection:yt,getChild:O},Ot.mount=function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];n[0].constructor===Array&&(n=n[0]),n.forEach(function(t){if(!t.prototype||!t.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(el));t.utils&&(Ot.utils=e({},Ot.utils,t.utils)),H.mount(t)})},Ot.create=function(t,n){return new Ot(t,n)},Ot.version="1.10.0-rc3";var zt,Nt,Ft,Pt,Bt,Ht,Gt=[],Lt=!1;function Rt(){Gt.forEach(function(t){clearInterval(t.pid)}),Gt=[]}function Wt(){clearInterval(Ht)}var Xt=j(function(t,n,i,e){if(n.scroll){var o,r=n.scrollSensitivity,a=n.scrollSpeed,u=T(),s=!1;Nt!==i&&(Nt=i,Rt(),o=n.scrollFn,!0===(zt=n.scroll)&&(zt=C(i,!0)));var l=0,c=zt;do{var f=c,h=I(f),d=h.top,v=h.bottom,m=h.left,p=h.right,g=h.width,b=h.height,w=void 0,E=void 0,S=f.scrollWidth,x=f.scrollHeight,M=y(f),O=f.scrollLeft,_=f.scrollTop;f===u?(w=g<S&&("auto"===M.overflowX||"scroll"===M.overflowX||"visible"===M.overflowX),E=b<x&&("auto"===M.overflowY||"scroll"===M.overflowY||"visible"===M.overflowY)):(w=g<S&&("auto"===M.overflowX||"scroll"===M.overflowX),E=b<x&&("auto"===M.overflowY||"scroll"===M.overflowY));var D=w&&(Math.abs(p-t.clientX)<=r&&O+g<S)-(Math.abs(m-t.clientX)<=r&&!!O),k=E&&(Math.abs(v-t.clientY)<=r&&_+b<x)-(Math.abs(d-t.clientY)<=r&&!!_);if(!Gt[l])for(var A=0;A<=l;A++)Gt[A]||(Gt[A]={});Gt[l].vx==D&&Gt[l].vy==k&&Gt[l].el===f||(Gt[l].el=f,Gt[l].vx=D,Gt[l].vy=k,clearInterval(Gt[l].pid),0==D&&0==k||(s=!0,Gt[l].pid=setInterval(function(){e&&0===this.layer&&Ot.active._onTouchMove(Bt);var n=Gt[this.layer].vy?Gt[this.layer].vy*a:0,i=Gt[this.layer].vx?Gt[this.layer].vx*a:0;"function"==typeof o&&"continue"!==o.call(Ot.dragged.parentNode[F],i,n,t,Bt,Gt[this.layer].el)||z(Gt[this.layer].el,i,n)}.bind({layer:l}),24))),l++}while(n.bubbleScroll&&c!==u&&(c=C(c,!1)));Lt=s}},30),Yt=function(t){var n=t.originalEvent,i=t.dragEl,e=t.dispatchSortableEvent,o=t.unhideGhostForTarget,r=t.putSortable||t.activeSortable;(0,t.hideGhostForTarget)();var a=document.elementFromPoint(n.clientX,n.clientY);o(),r&&!r.el.contains(a)&&(e("spill"),this.onSpill(i))};function qt(){}function Ut(){}qt.prototype={startIndex:null,dragStart:function(t){this.startIndex=t.oldDraggableIndex},onSpill:function(t){this.sortable.captureAnimationState();var n=O(this.sortable.el,this.startIndex,this.sortable.options);n?this.sortable.el.insertBefore(t,n):this.sortable.el.appendChild(t),this.sortable.animateAll()},drop:Yt},i(qt,{pluginName:"revertOnSpill"}),Ut.prototype={onSpill:function(t){this.sortable.captureAnimationState(),t.parentNode&&t.parentNode.removeChild(t),this.sortable.animateAll()},drop:Yt},i(Ut,{pluginName:"removeOnSpill"}),Ot.mount(new function(){function t(){for(var t in this.options={scroll:!0,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:!0},this)"_"===t.charAt(0)&&"function"==typeof this[t]&&(this[t]=this[t].bind(this))}return t.prototype={dragStarted:function(t){var n=t.originalEvent;this.sortable.nativeDraggable?d(document,"dragover",this._handleAutoScroll):d(document,this.sortable.options.supportPointer?"pointermove":n.touches?"touchmove":"mousemove",this._handleFallbackAutoScroll)},dragOverCompleted:function(t){var n=t.originalEvent;this.sortable.options.dragOverBubble||n.rootEl||this._handleAutoScroll(n)},drop:function(){this.sortable.nativeDraggable?v(document,"dragover",this._handleAutoScroll):(v(document,"pointermove",this._handleFallbackAutoScroll),v(document,"touchmove",this._handleFallbackAutoScroll),v(document,"mousemove",this._handleFallbackAutoScroll)),Wt(),Rt(),clearTimeout(b),b=void 0},nulling:function(){Bt=Nt=zt=Lt=Ht=Ft=Pt=null,Gt.length=0},_handleFallbackAutoScroll:function(t){this._handleAutoScroll(t,!0)},_handleAutoScroll:function(t,n){var i=this,e=t.clientX,o=t.clientY,r=document.elementFromPoint(e,o);if(Bt=t,n||u||a||l){Xt(t,this.options,r,n);var s=C(r,!0);!Lt||Ht&&e===Ft&&o===Pt||(Ht&&Wt(),Ht=setInterval(function(){var r=C(document.elementFromPoint(e,o),!0);r!==s&&(s=r,Rt()),Xt(t,i.options,r,n)},10),Ft=e,Pt=o)}else{if(!this.sortable.options.bubbleScroll||C(r,!0)===T())return void Rt();Xt(t,this.options,C(r,!1),!1)}}},i(t,{pluginName:"scroll",initializeByDefault:!0})}),Ot.mount(Ut,qt);export{Ot as S};