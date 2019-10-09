import{r as t,c as s,h as i,H as h,g as e}from"./p-0d847530.js";import{aq as n,b8 as r,b9 as o,dj as a,t as c,ak as l}from"./p-384bfcf6.js";import"./p-0f3d65ca.js";import"./p-8cff990b.js";import"./p-0d62bf9d.js";import"./p-d70b188c.js";import"./p-815d6c40.js";const d=class{constructor(i){t(this,i),this.value=null,this.overlapThreshold="50%",this.hoverColor="stable-light",this.colorArray=["warning","accent","royal","info","energized"],this.validityChanged=s(this,"validityChanged",7),this.inputChanged=s(this,"inputChanged",7),this.dragEnded=s(this,"dragEnded",7)}requiredWatch(){this.validate()}async isValid(){return this.validityChanged.emit(this.validity),this.validity}componentWillLoad(){this.dragEnded.emit(!0),this.initUserAnswersArray()}componentDidLoad(){this.getElementsList(),this.getScrollableArea(),this.initItems(),this.initGSAPDraggable(),this.preserveColors()}validate(){return this.checkAnswersValidity()}getBackgroundColorPanel(){return this.colorArray.map(t=>`bg-${t}`)}getElementsList(){this.outerContainerElement&&(this.leftButtonsElements=Array.from(this.innerContainerElement.querySelectorAll("div.draggable")),this.rightButtonsElements=Array.from(this.innerContainerElement.querySelectorAll("div.connectable")))}getScrollableArea(){if(!this.readonly&&this.values&&this.values.length){const t=t=>t.length===this.values[0].length;if(t(this.leftButtonsElements)&&t(this.rightButtonsElements)){const t=this.leftButtonsElements[0].parentElement.clientHeight,s=t*this.values[0].length,i=n(this.host,"yoo-ion-slide");if(i){const h=i.clientHeight-185;if(h<s){const s=Math.floor(.75*h/t)+.4,i=10*Math.round(t*s/10);this.innerContainerElement.style.height=`${i}px`}}}}}preserveColors(){this.value&&this.value.length&&this.value.forEach(t=>{const[s,i]=t;let h,e;const n=(t,s)=>t&&t.find(t=>t.textContent===this.truncateValue(s));if((h=n(this.leftButtonsElements,s))?e=n(this.rightButtonsElements,i):(h=n(this.leftButtonsElements,i),e=n(this.rightButtonsElements,s)),h){let t=this.sourceItems.find(t=>t.element===h);t&&e&&(this.attachConnectable(t,e),this.applyColorChanges())}})}applyCorrections(t,s){if(this.answer&&this.answer.length&&Array.isArray(this.answer)){let i=this.targetItems.find(t=>t.element===s),h=[t.value,i.value].sort(),e=this.answer.find(t=>t[0]===h[0]&&t[1]===h[1]),n=e&&e.length&&Array.isArray(e);n&&(this.sourceItems[t.id].isCorrect=n)}}initUserAnswersArray(){this.userAnswers=[],this.values&&this.values.length&&Array.isArray(this.values[0])&&this.values[0].forEach(t=>{t&&this.userAnswers.push([t,""])})}initItems(){this.leftButtonsElements&&(this.sourceItems=this.leftButtonsElements.map((t,s)=>{const i={};return i.id=s,i.element=t,i.value=this.values[0][s],i.color=this.getBackgroundColorPanel()[s],i.isCorrect=!1,i.connectedItem=null,i.tempConnectable=null,i})),this.rightButtonsElements&&(this.targetItems=this.rightButtonsElements.map((t,s)=>{const i={};return i.element=t,i.value=this.values[1][s],i}))}initGSAPDraggable(){if(this.innerContainerElement){const t=t=>{if(t&&t.target){const s=t.target,i=s.getBoundingClientRect(),h=this.connectableContainerElement.getBoundingClientRect().x;this.rightButtonsElements.forEach(e=>{const n=this.sourceItems.find(t=>t.element===s);if(n)if(i.x+i.width>=h){const s=e.parentElement;t.hitTest(e,this.overlapThreshold)?(n.tempConnectable=e,this.getElementColor(e)||s.classList.add(`bg-${this.hoverColor}`)):s.classList.remove(`bg-${this.hoverColor}`)}else n.tempConnectable=null})}},s=t=>{if(t&&t.target){const s=t.target;let i=this.sourceItems.find(t=>t.element===s);if(i&&i.tempConnectable){const t=i.tempConnectable;let s=this.targetItems.find(s=>s.element===t);t.parentElement.classList.remove(`bg-${this.hoverColor}`),this.attachConnectable(i,t),this.removeOldConnectable(),this.applyColorChanges(),this.autoCompleteLastConnection(),this.userAnswers[i.id]=[i.value,s.value],this.maxClasses=t.classList.length,this.value=this.userAnswers,i.tempConnectable=null,a(this.value,this)}this.releaseElement(s)}};if(!this.readonly)try{r.create(this.leftButtonsElements,{edgeResistance:.5,autoScroll:1,throwProps:!0,onDrag(){t(this)},onDragEnd(){s(this)}})}catch(t){}}}applyColorChanges(){this.sourceItems.forEach(t=>{if(t){let s=t.color,i=t.element;if(t.connectedItem&&t.connectedItem.element){let h=t.connectedItem.element;if(this.readonly){this.applyCorrections(t,h);const s=t.isCorrect?"border-success":"border-danger";i.classList.add(s),h.classList.add(s)}this.getElementColor(h)?this.getElementColor(h)!==s&&this.changeColor(h,s):(this.changeColor(i,s),this.changeColor(h,s))}else this.getElementColor(i)&&i.classList.remove(s)}})}removeOldConnectable(){this.rightButtonsElements.forEach(t=>{if(!this.sourceItems.find(s=>s.connectedItem&&s.connectedItem.element===t)&&this.getElementColor(t)){const s=this.getElementColor(t);t.classList.remove(s)}})}attachConnectable(t,s){let i=this.sourceItems.find(t=>t.connectedItem&&t.connectedItem.element===s);if(i&&i.element!==t.element){let t=i.connectedItem.element;const s=t=>{if(this.getElementColor(t)){const s=this.getElementColor(t);t.classList.remove(s)}};s(i.element),s(t),i.connectedItem=null}this.sourceItems.forEach(i=>{if(i&&i===t){i.element.classList.add(i.color);let t={};t.element=s,i.connectedItem=t}})}checkAnswersValidity(){return this.userAnswers.length===this.answer.length?(this.validity=!Boolean(this.userAnswers.find(t=>""===t[1])),this.validityChanged.emit(this.validity)):(this.validity=!1,this.validityChanged.emit(this.validity)),this.validity}releaseElement(t){t&&o.to(t,.2,{x:0,y:0})}changeColor(t,s){if(t&&this.getElementColor(t)){const i=this.getElementColor(t);t.classList.remove(i),t.classList.add(s)}else t.classList.add(s)}getElementColor(t){let s="";return t.classList.contains(`bg-${this.hoverColor}`)?s=`bg-${this.hoverColor}`:this.getBackgroundColorPanel().forEach(i=>{t.classList.contains(i)&&(s=i)}),s}autoCompleteLastConnection(){const t=this.sourceItems.filter(t=>!t.connectedItem),s=this.rightButtonsElements.filter(t=>t.classList.length!==this.maxClasses);if(1===t.length&&1===s.length){const i=t[0],h=i.color,e=s[0];let n=this.targetItems.find(t=>t.element===e);this.changeColor(i.element,h),this.changeColor(e,h),this.sourceItems[i.id].connectedItem=n,this.userAnswers[i.id]=[i.value,n.value],this.value=this.userAnswers,a(this.value,this)}}cancelConnection(t){if(t&&t.target){const s=t.target&&t.target.parentElement;let i=this.sourceItems.find(t=>t.element===s);if(i&&i.connectedItem){const t=i.color,s=i.element;i.connectedItem.element.classList.remove(t),i.connectedItem=null,s.classList.remove(t),this.userAnswers[i.id]=[i.value,""],this.value=this.userAnswers,a(this.value,this)}}}truncateValue(t){if(t){const s=50;return t.length>s?t.substr(0,s).concat("..."):t}}renderDraggablesContainer(){return i("div",{class:"draggable-container"},this.values[0].map(t=>i("div",{class:"item-container"},i("div",{onClick:t=>this.cancelConnection(t),class:{draggable:!0,"border-stable-light":!this.readonly}},i("div",{class:"value"},this.truncateValue(t))))))}renderConnectablesContainer(){return i("div",{class:"connectable-container",ref:t=>this.connectableContainerElement=t},this.values[1].map(t=>i("div",{class:"item-container"},i("div",{class:{connectable:!0,"border-stable-light":!this.readonly}},i("div",{class:"value"},this.truncateValue(t))))))}render(){return i(h,{class:Object.assign({},l(),{readonly:this.readonly})},i("div",{class:"outer-container",ref:t=>this.outerContainerElement=t},i("div",{class:"description"},c("MATCHWORDS")),i("div",{class:"connect-container",ref:t=>this.innerContainerElement=t},this.values&&this.renderDraggablesContainer(),this.values&&this.renderConnectablesContainer())))}get host(){return e(this)}static get watchers(){return{required:["requiredWatch"]}}static get style(){return".iframe-root{top:0;right:0;bottom:0;left:0;position:absolute;color:var(--black);overflow-y:auto;scrollbar-width:none}.iframe-root yoo-app .wrapper{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;height:100%;width:100%}.iframe-root yoo-app .wrapper.center-center{-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%}.iframe-root::-webkit-scrollbar{display:none}.bg-success{background-color:var(--success,#04cc99)!important}.text-success{color:var(--success,#04cc99)!important}.border-success{border:2px solid var(--success,#04cc99)!important}.bg-danger{background-color:var(--danger,#ff625f)!important}.text-danger{color:var(--danger,#ff625f)!important}.border-danger{border:2px solid var(--danger,#ff625f)!important}.bg-danger-light{background-color:var(--danger-light,#f46885)!important}.text-danger-light{color:var(--danger-light,#f46885)!important}.border-danger-light{border:2px solid var(--danger-light,#f46885)!important}.bg-energized{background-color:var(--energized,#fed05b)!important}.text-energized{color:var(--energized,#fed05b)!important}.border-energized{border:2px solid var(--energized,#fed05b)!important}.bg-royal{background-color:var(--royal,#845cff)!important}.text-royal{color:var(--royal,#845cff)!important}.border-royal{border:2px solid var(--royal,#845cff)!important}.bg-info{background-color:var(--info,#fc459e)!important}.text-info{color:var(--info,#fc459e)!important}.border-info{border:2px solid var(--info,#fc459e)!important}.bg-dark{background-color:var(--dark,#2b3648)!important}.text-dark{color:var(--dark,#2b3648)!important}.border-dark{border:2px solid var(--dark,#2b3648)!important}.bg-text-color{background-color:var(--text-color,#807f83)!important}.text-text-color{color:var(--text-color,#807f83)!important}.border-text-color{border:2px solid var(--text-color,#807f83)!important}.bg-light{background-color:var(--light,#fff)!important}.text-light{color:var(--light,#fff)!important}.border-light{border:2px solid var(--light,#fff)!important}.bg-always-light{background-color:var(--always-light,#fff)!important}.text-always-light{color:var(--always-light,#fff)!important}.border-always-light{border:2px solid var(--always-light,#fff)!important}.bg-light-orange{background-color:var(--light-orange,#fcae49)!important}.text-light-orange{color:var(--light-orange,#fcae49)!important}.border-light-orange{border:2px solid var(--light-orange,#fcae49)!important}.bg-stable-light{background-color:var(--stable-light,#f1f1f1)!important}.text-stable-light{color:var(--stable-light,#f1f1f1)!important}.border-stable-light{border:2px solid var(--stable-light,#f1f1f1)!important}.bg-stable{background-color:var(--stable,#adadad)!important}.text-stable{color:var(--stable,#adadad)!important}.border-stable{border:2px solid var(--stable,#adadad)!important}.bg-warning{background-color:var(--warning,#ff6402)!important}.text-warning{color:var(--warning,#ff6402)!important}.border-warning{border:2px solid var(--warning,#ff6402)!important}.bg-accent{background-color:var(--accent,#1fb6ff)!important}.text-accent{color:var(--accent,#1fb6ff)!important}.border-accent{border:2px solid var(--accent,#1fb6ff)!important}:host{display:block}:host .outer-container .description{padding-right:.5rem;color:var(--stable,#adadad);font-size:var(--font-size-04,1.125rem)}:host .outer-container .connect-container{display:-ms-flexbox;display:flex;-ms-flex-pack:space-evenly;justify-content:space-evenly;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;overflow-y:auto;margin:2rem 0;padding:.5rem;background-color:var(--stable-light-40,hsla(0,0%,94.5%,.4))}:host .outer-container .connect-container [class*=-container]{-ms-flex-preferred-size:100%;flex-basis:100%}:host .outer-container .item-container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:5.75rem}:host .outer-container .item-container .connectable,:host .outer-container .item-container .draggable{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:70%;height:4rem;margin:.5rem;padding:1rem;border-radius:8px;background:var(--light,#fff);font-size:var(--font-size-01,.75rem);text-align:center}:host .outer-container .item-container .connectable[class*=bg-],:host .outer-container .item-container .draggable[class*=bg-]{color:var(--light,#fff)}:host .outer-container .item-container .connectable .value,:host .outer-container .item-container .draggable .value{max-height:3.375rem;overflow:hidden}"}};export{d as yoo_form_connect};