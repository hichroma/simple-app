import{r as t,c as s,h as i,H as o,g as a}from"./p-0d847530.js";import{ak as e}from"./p-384bfcf6.js";import"./p-0f3d65ca.js";import"./p-8cff990b.js";import"./p-0d62bf9d.js";import"./p-d70b188c.js";import"./p-815d6c40.js";const n=class{constructor(i){t(this,i),this.activeIndex=0,this.isBusy=!1,this.tabChanged=s(this,"tabChanged",7),this.currentTabClicked=s(this,"currentTabClicked",7)}async setActiveIcon(t){this.activeIndex=t}onIconClick(t,s){this.isBusy||(this.isBusy=!0,t.handler&&t.handler(),s!==this.activeIndex?(this.tabChanged.emit(t),this.activeIndex=s):this.currentTabClicked.emit(),setTimeout(()=>{this.isBusy=!1},500))}render(){return i(o,{class:e()},i("div",{class:"outer-container",style:{"grid-template-columns":`repeat(auto-fit, minmax(${this.items.length/100}%, 1fr))`}},(this.items||[]).map((t,s)=>{const o="string"==typeof t.notif||"number"==typeof t.notif;return i("yoo-tappable",null,i("div",{class:"item-container "+(s===this.activeIndex?"active":""),onClick:()=>this.onIconClick(t,s)},t.icon?i("div",{class:"icon-container"},i("yoo-icon",{class:s===this.activeIndex&&t.iconActive||t.icon},t.notif?i("yoo-badge",{class:"danger notification-"+(o?"medium":"mini"),text:o?t.notif+"":null}):null)):null,t.text?i("div",{class:"text-container"},i("span",{class:"text"},t.text)):null))})))}get host(){return a(this)}static get style(){return".iframe-root{top:0;right:0;bottom:0;left:0;position:absolute;color:var(--black);overflow-y:auto;scrollbar-width:none}.iframe-root yoo-app .wrapper{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;height:100%;width:100%}.iframe-root yoo-app .wrapper.center-center{-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%}.iframe-root::-webkit-scrollbar{display:none}:host .outer-container{-ms-flex-direction:row;flex-direction:row;height:3rem;background:var(--light-to-dark,#fff);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host .outer-container,:host .outer-container .item-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}:host .outer-container .item-container{position:relative;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:end;justify-content:flex-end;width:100%;min-width:48px;padding-top:.4875rem;color:var(--tab-bar-color,#adadad);overflow:hidden}:host .outer-container .item-container .text-container{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:100%}:host .outer-container .item-container.active .icon-container{-webkit-background-clip:text;background-clip:text;color:var(--success,#04cc99);text-align:center}:host .outer-container .item-container.active .text-container{color:var(--success,#04cc99);text-align:center}:host .outer-container .item-container .icon-container{position:relative;max-height:22px;margin-bottom:-5px}:host .outer-container .item-container .icon-container yoo-icon yoo-badge{position:absolute;top:-5px;right:-8px}:host .outer-container .item-container .icon-container yoo-icon yoo-badge.notification-mini{position:absolute;top:-2px;right:-5px}:host .outer-container .item-container .text{font-size:var(--font-size-01,.75rem)}:host(.iphone-x) .outer-container{-ms-flex-align:start;align-items:flex-start;height:73px!important}:host(.iphone-x) .outer-container .item-container{-ms-flex-pack:initial!important;justify-content:normal!important;height:100%}:host(.iphone-x) .outer-container .item-container .dot{top:35%}:host(.boost) .outer-container .item-container.active .icon-container,:host(.boost) .outer-container .item-container.active .text-container{color:var(--danger-light,#f46885)!important}"}};export{n as yoo_mobile_tabbar};