import{r as t,h as s,H as i,g as h}from"./p-0d847530.js";import{cE as o,cZ as n,t as e,ak as r}from"./p-384bfcf6.js";import"./p-0f3d65ca.js";import"./p-8cff990b.js";import"./p-0d62bf9d.js";import"./p-d70b188c.js";import"./p-815d6c40.js";class c{constructor(t,s,i){this.x=t,this.y=s,this.time=i||Date.now()}distanceTo(t){return Math.sqrt(Math.pow(this.x-t.x,2)+Math.pow(this.y-t.y,2))}equals(t){return this.x===t.x&&this.y===t.y&&this.time===t.time}velocityFrom(t){return this.time!==t.time?this.distanceTo(t)/(this.time-t.time):0}}class l{constructor(t,s,i,h,o,n){this.startPoint=t,this.control2=s,this.control1=i,this.endPoint=h,this.startWidth=o,this.endWidth=n}static fromPoints(t,s){const i=this.calculateControlPoints(t[0],t[1],t[2]).c2,h=this.calculateControlPoints(t[1],t[2],t[3]).c1;return new l(t[1],i,h,t[2],s.start,s.end)}static calculateControlPoints(t,s,i){const h=t.x-s.x,o=t.y-s.y,n=s.x-i.x,e=s.y-i.y,r=(t.x+s.x)/2,l=(t.y+s.y)/2,a=(s.x+i.x)/2,u=(s.y+i.y)/2,d=Math.sqrt(h*h+o*o),m=Math.sqrt(n*n+e*e),p=m/(d+m),f=s.x-(a+(r-a)*p),w=s.y-(u+(l-u)*p);return{c1:new c(r+f,l+w),c2:new c(a+f,u+w)}}length(){let t,s,i=0;for(let h=0;h<=10;h+=1){const o=h/10,n=this.point(o,this.startPoint.x,this.control1.x,this.control2.x,this.endPoint.x),e=this.point(o,this.startPoint.y,this.control1.y,this.control2.y,this.endPoint.y);if(h>0){const h=n-t,o=e-s;i+=Math.sqrt(h*h+o*o)}t=n,s=e}return i}point(t,s,i,h,o){return s*(1-t)*(1-t)*(1-t)+3*i*(1-t)*(1-t)*t+3*h*(1-t)*t*t+o*t*t*t}}class a{constructor(t,s={}){this.canvas=t,this.options=s,this._handleMouseDown=t=>{1===t.which&&(this._mouseButtonDown=!0,this._strokeBegin(t))},this._handleMouseMove=t=>{this._mouseButtonDown&&this._strokeMoveUpdate(t)},this._handleMouseUp=t=>{1===t.which&&this._mouseButtonDown&&(this._mouseButtonDown=!1,this._strokeEnd(t))},this._handleTouchStart=t=>{t.preventDefault(),1===t.targetTouches.length&&this._strokeBegin(t.changedTouches[0])},this._handleTouchMove=t=>{t.preventDefault(),this._strokeMoveUpdate(t.targetTouches[0])},this._handleTouchEnd=t=>{t.target===this.canvas&&(t.preventDefault(),this._strokeEnd(t.changedTouches[0]))},this.velocityFilterWeight=s.velocityFilterWeight||.7,this.minWidth=s.minWidth||.5,this.maxWidth=s.maxWidth||2.5,this.throttle="throttle"in s?s.throttle:16,this.minDistance="minDistance"in s?s.minDistance:5,this._strokeMoveUpdate=this.throttle?function(t,s=250){let i,h,o,n=0,e=null;const r=()=>{n=Date.now(),e=null,i=t.apply(h,o),e||(h=null,o=[])};return function(...c){const l=Date.now(),a=s-(l-n);return h=this,o=c,a<=0||a>s?(e&&(clearTimeout(e),e=null),n=l,i=t.apply(h,o),e||(h=null,o=[])):e||(e=window.setTimeout(r,a)),i}}(a.prototype._strokeUpdate,this.throttle):a.prototype._strokeUpdate,this.dotSize=s.dotSize||function(){return(this.minWidth+this.maxWidth)/2},this.penColor=s.penColor||"black",this.backgroundColor=s.backgroundColor||"rgba(0,0,0,0)",this.onBegin=s.onBegin,this.onEnd=s.onEnd,this._ctx=t.getContext("2d"),this.clear(),this.on()}clear(){const t=this._ctx,s=this.canvas;t.fillStyle=this.backgroundColor,t.clearRect(0,0,s.width,s.height),t.fillRect(0,0,s.width,s.height),this._data=[],this._reset(),this._isEmpty=!0}fromDataURL(t,s={},i){const h=new Image,o=s.ratio||window.devicePixelRatio||1,n=s.width||this.canvas.width/o,e=s.height||this.canvas.height/o;this._reset(),h.onload=()=>{this._ctx.drawImage(h,0,0,n,e),i&&i()},h.onerror=t=>{i&&i(t)},h.src=t,this._isEmpty=!1}toDataURL(t="image/png",s){switch(t){case"image/svg+xml":return this._toSVG();default:return this.canvas.toDataURL(t,s)}}on(){this.canvas.style.touchAction="none",this.canvas.style.msTouchAction="none",window.PointerEvent?this._handlePointerEvents():(this._handleMouseEvents(),"ontouchstart"in window&&this._handleTouchEvents())}off(){this.canvas.style.touchAction="auto",this.canvas.style.msTouchAction="auto",this.canvas.removeEventListener("pointerdown",this._handleMouseDown),this.canvas.removeEventListener("pointermove",this._handleMouseMove),document.removeEventListener("pointerup",this._handleMouseUp),this.canvas.removeEventListener("mousedown",this._handleMouseDown),this.canvas.removeEventListener("mousemove",this._handleMouseMove),document.removeEventListener("mouseup",this._handleMouseUp),this.canvas.removeEventListener("touchstart",this._handleTouchStart),this.canvas.removeEventListener("touchmove",this._handleTouchMove),this.canvas.removeEventListener("touchend",this._handleTouchEnd)}isEmpty(){return this._isEmpty}fromData(t){this.clear(),this._fromData(t,({color:t,curve:s})=>this._drawCurve({color:t,curve:s}),({color:t,point:s})=>this._drawDot({color:t,point:s})),this._data=t}toData(){return this._data}_strokeBegin(t){this._data.push({color:this.penColor,points:[]}),this._reset(),this._strokeUpdate(t),"function"==typeof this.onBegin&&this.onBegin(t)}_strokeUpdate(t){const s=this._createPoint(t.clientX,t.clientY),i=this._data[this._data.length-1],h=i.points,o=h.length>0&&h[h.length-1],n=!!o&&s.distanceTo(o)<=this.minDistance,e=i.color;if(!o||!o||!n){const t=this._addPoint(s);o?t&&this._drawCurve({color:e,curve:t}):this._drawDot({color:e,point:s}),h.push({time:s.time,x:s.x,y:s.y})}}_strokeEnd(t){this._strokeUpdate(t),"function"==typeof this.onEnd&&this.onEnd(t)}_handlePointerEvents(){this._mouseButtonDown=!1,this.canvas.addEventListener("pointerdown",this._handleMouseDown),this.canvas.addEventListener("pointermove",this._handleMouseMove),document.addEventListener("pointerup",this._handleMouseUp)}_handleMouseEvents(){this._mouseButtonDown=!1,this.canvas.addEventListener("mousedown",this._handleMouseDown),this.canvas.addEventListener("mousemove",this._handleMouseMove),document.addEventListener("mouseup",this._handleMouseUp)}_handleTouchEvents(){this.canvas.addEventListener("touchstart",this._handleTouchStart),this.canvas.addEventListener("touchmove",this._handleTouchMove),this.canvas.addEventListener("touchend",this._handleTouchEnd)}_reset(){this._lastPoints=[],this._lastVelocity=0,this._lastWidth=(this.minWidth+this.maxWidth)/2,this._ctx.fillStyle=this.penColor}_createPoint(t,s){const i=this.canvas.getBoundingClientRect();return new c(t-i.left,s-i.top,(new Date).getTime())}_addPoint(t){const{_lastPoints:s}=this;if(s.push(t),s.length>2){3===s.length&&s.unshift(s[0]);const t=this._calculateCurveWidths(s[1],s[2]),i=l.fromPoints(s,t);return s.shift(),i}return null}_calculateCurveWidths(t,s){const i=this.velocityFilterWeight*s.velocityFrom(t)+(1-this.velocityFilterWeight)*this._lastVelocity,h=this._strokeWidth(i),o={end:h,start:this._lastWidth};return this._lastVelocity=i,this._lastWidth=h,o}_strokeWidth(t){return Math.max(this.maxWidth/(t+1),this.minWidth)}_drawCurveSegment(t,s,i){const h=this._ctx;h.moveTo(t,s),h.arc(t,s,i,0,2*Math.PI,!1),this._isEmpty=!1}_drawCurve({color:t,curve:s}){const i=this._ctx,h=s.endWidth-s.startWidth,o=2*Math.floor(s.length());i.beginPath(),i.fillStyle=t;for(let t=0;t<o;t+=1){const i=t/o,n=i*i,e=n*i,r=1-i,c=r*r,l=c*r;let a=l*s.startPoint.x;a+=3*c*i*s.control1.x,a+=3*r*n*s.control2.x;let u=l*s.startPoint.y;u+=3*c*i*s.control1.y,u+=3*r*n*s.control2.y,this._drawCurveSegment(a+=e*s.endPoint.x,u+=e*s.endPoint.y,s.startWidth+e*h)}i.closePath(),i.fill()}_drawDot({color:t,point:s}){const i=this._ctx,h="function"==typeof this.dotSize?this.dotSize():this.dotSize;i.beginPath(),this._drawCurveSegment(s.x,s.y,h),i.closePath(),i.fillStyle=t,i.fill()}_fromData(t,s,i){for(const h of t){const{color:t,points:o}=h;if(o.length>1)for(let i=0;i<o.length;i+=1){const h=o[i],n=new c(h.x,h.y,h.time);this.penColor=t,0===i&&this._reset();const e=this._addPoint(n);e&&s({color:t,curve:e})}else this._reset(),i({color:t,point:o[0]})}}_toSVG(){const t=this._data,s=Math.max(window.devicePixelRatio||1,1),i=this.canvas.width/s,h=this.canvas.height/s,o=document.createElementNS("http://www.w3.org/2000/svg","svg");o.setAttribute("width",this.canvas.width.toString()),o.setAttribute("height",this.canvas.height.toString()),this._fromData(t,({color:t,curve:s})=>{const i=document.createElement("path");if(!(isNaN(s.control1.x)||isNaN(s.control1.y)||isNaN(s.control2.x)||isNaN(s.control2.y))){const h=`M ${s.startPoint.x.toFixed(3)},${s.startPoint.y.toFixed(3)} `+`C ${s.control1.x.toFixed(3)},${s.control1.y.toFixed(3)} `+`${s.control2.x.toFixed(3)},${s.control2.y.toFixed(3)} `+`${s.endPoint.x.toFixed(3)},${s.endPoint.y.toFixed(3)}`;i.setAttribute("d",h),i.setAttribute("stroke-width",(2.25*s.endWidth).toFixed(3)),i.setAttribute("stroke",t),i.setAttribute("fill","none"),i.setAttribute("stroke-linecap","round"),o.appendChild(i)}},({color:t,point:s})=>{const i=document.createElement("circle"),h="function"==typeof this.dotSize?this.dotSize():this.dotSize;i.setAttribute("r",h.toString()),i.setAttribute("cx",s.x.toString()),i.setAttribute("cy",s.y.toString()),i.setAttribute("fill",t),o.appendChild(i)});const n='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"'+` viewBox="0 0 ${i} ${h}"`+` width="${i}"`+` height="${h}"`+">";let e=o.innerHTML;if(void 0===e){const t=document.createElement("dummy"),s=o.childNodes;t.innerHTML="";for(let i=0;i<s.length;i+=1)t.appendChild(s[i].cloneNode(!0));e=t.innerHTML}return"data:image/svg+xml;base64,"+btoa(n+e+"</svg>")}}const u=class{constructor(s){t(this,s)}componentWillLoad(){this.localVaule=this.value}componentWillUpdate(){this.isCanvasSetup||(this.isCanvasSetup=!0,this.readonly||this.canvasSetup())}canvasSetup(){if(this.canvasEl&&this.signatureContainerDiv&&(this.canvasEl.width=this.signatureContainerDiv.clientWidth,this.canvasEl.height=this.signatureContainerDiv.clientHeight,this.canvasEl.getContext("2d").scale(1,1),this.signaturePad=new a(this.canvasEl,{backgroundColor:"#ffffff",penColor:"#000000",onBegin:()=>{this.hasContent=!0}}),this.value)){let t=new Image;t.crossOrigin="Anonymous",t.onload=()=>{this.canvasEl&&this.canvasEl.getContext("2d").drawImage(t,0,0,this.canvasEl.width,this.canvasEl.height)},t.src=this.value,this.hasContent=!0}}onCancel(){o(this.value)}isInvalid(){return(!this.signaturePad||this.signaturePad.isEmpty())&&!this.localVaule}onSave(){let t;this.isInvalid()?t=this.isDirty?null:this.value:this.signaturePad?(t=this.signaturePad.toDataURL(),o(t)):o(null)}onClear(){this.signaturePad&&this.signaturePad.clear(),this.hasContent=!1,this.isDirty=!0,this.localVaule=null}renderSignaturePad(){return s("div",{class:"signature-container",ref:t=>this.signatureContainerDiv=t},s("canvas",{ref:t=>this.canvasEl=t}))}renderReadonly(){return this.value?s("yoo-img",{type:"back",class:"image",src:n(this.value,this.host.clientWidth,this.host.clientHeight,null,null,null,null,!0)}):null}renderHeader(){return s("yoo-header",{class:"shadow"},s("yoo-ion-toolbar",{color:"light"},s("yoo-ion-buttons",{slot:"start"},s("yoo-ion-button",{color:"text-color",class:"close button-clear",onClick:()=>this.onCancel()},s("yoo-icon",{slot:"icon-only",class:"yo-close"}))),s("yoo-title",null,e("SIGNATURE")),s("yoo-ion-buttons",{slot:"end",onClick:()=>this.onSave()},s("yoo-ion-button",{color:"success",disabled:this.isInvalid(),class:"button-clear"},e("DONE")))))}renderContent(){return s("div",{class:"signature-pad-dialog"},s("yoo-ion-content",{scrollEnabled:!1,class:"bg-light"},this.readonly?this.renderReadonly():this.renderSignaturePad()))}renderBottom(){return this.readonly?null:s("div",{class:"signature-footer"},s("yoo-button",{text:e("DELETE"),onClick:this.onClear.bind(this),class:"block "+(this.hasContent?"stable-danger":"stable")}))}render(){return s(i,{class:r()},this.renderHeader(),this.renderContent(),this.renderBottom())}get host(){return h(this)}static get style(){return".iframe-root{top:0;right:0;bottom:0;left:0;position:absolute;color:var(--black);overflow-y:auto;scrollbar-width:none}.iframe-root yoo-app .wrapper{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;height:100%;width:100%}.iframe-root yoo-app .wrapper.center-center{-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%}.iframe-root::-webkit-scrollbar{display:none}:host .signature-pad-dialog{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;height:100%}:host .signature-pad-dialog yoo-ion-content{overflow-y:hidden}:host .signature-pad-dialog yoo-ion-content .signature-container,:host .signature-pad-dialog yoo-ion-content .signature-container canvas{height:100%}:host .signature-footer{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:distribute;justify-content:space-around;width:100%;min-height:52px;background:var(--light,#fff);z-index:2}:host .image{width:100%;height:100%;margin-right:auto;margin-left:auto}:host(.iphone-x) .signature-footer{padding-bottom:var(--padding-30,1.875rem)}"}};export{u as yoo_form_signature_pad_dialog};