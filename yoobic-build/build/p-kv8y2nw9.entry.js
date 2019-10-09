import{r as i,c as t,h as s,H as e,g as n}from"./p-0d847530.js";import{cV as o,dw as c,ar as h,ao as r,dx as a,dz as l,i as d,p,S as u,t as m,ak as v,Z as D}from"./p-384bfcf6.js";import"./p-0f3d65ca.js";import"./p-8cff990b.js";import"./p-0d62bf9d.js";import{cZ as S}from"./p-d70b188c.js";import"./p-815d6c40.js";const f={ionActionSheetDidPresent:"ionViewDidEnter",ionActionSheetWillPresent:"ionViewWillEnter",ionActionSheetWillDismiss:"ionViewWillDismiss",ionActionSheetDidDismiss:"ionViewDidDismiss"},y=p()?"fade":"slide_down",A=class{constructor(s){i(this,s),this.buttons=[],this.overlayId=0,this.preventOverlayClick=!1,this.actionClickDivs=[],this.preventDefault=i=>i.preventDefault(),this.didPresent=t(this,"ionActionSheetDidPresent",7),this.willPresent=t(this,"ionActionSheetWillPresent",7),this.willDismiss=t(this,"ionActionSheetDidDismiss",7),this.didDismiss=t(this,"ionActionSheetWillDismiss",7),this.actionSelected=t(this,"actionSelected",7),this.actionSheetClosed=t(this,"actionSheetClosed",7)}lifecycle(i){o(i,this.usersElement,f)}async present(){return c(this,"actionSheetEnter",()=>(h("background_fade",r(this.host,"div.overlay"),{open:!0,targetOpacity:.7}),h(y,r(this.host,"div.outer-container"),{open:!0}).finished))}async dismiss(i,t,s=!1){return a(this,i,t,s,"actionSheetLeave",()=>h(y,r(this.host,"div.outer-container"),{open:!1,up:!1}).finished)}async onDidDismiss(i){return l(this.host,"ionActionSheetDidDismiss",i)}async onWillDismiss(i){return l(this.host,"ionActionSheetWillDismiss",i)}async onActionSelected(i){return l(this.host,"actionSelected",i)}componentDidLoad(){this.getProperHeight(),this.topContainer&&this.innerDiv.scrollHeight-10<this.topContainer.clientHeight&&this.outerDiv.addEventListener("touchmove",this.preventDefault,!1),this.overlay.addEventListener("touchmove",this.preventDefault,!1)}componentDidUnload(){this.outerDiv&&this.outerDiv.removeEventListener("touchmove",this.preventDefault,!1),this.overlay&&this.overlay.removeEventListener("touchmove",this.preventDefault,!1)}closeActionSheet(i=!1,t=!1){this.dismiss(void 0,t?"cancel":void 0,i),this.actionSheetClosed.emit(!0)}onOverlayClick(){this.preventOverlayClick||this.closeActionSheet(!0)}onButtonClick(i){i.disabled||(this.actionSelected.emit(i),this.closeActionSheet(),i.handler&&i.handler())}onItemTouchStart(i){i.classList.add("tapped"),d()||setTimeout(()=>{i.classList.remove("tapped")},1e3)}onItemTouchEnd(i){i&&i.classList&&i.classList.remove("tapped")}getProperHeight(){let i=window.innerHeight;return{"max-height":Math.round(.8*i)+"px"}}renderLiButton(i,t,e){const n=D(t.text),o=D(t.description),c=n?t.text:o?t.description:"",h=n&&o?t.description:void 0;let r=e===i.length-1;return s("li",{class:{"action-click inner-container ":!0,"icon ":t.icon&&t.icon.length>0,"description ":h&&h.length>0,"first-icon-description ":0===e&&(t.icon||h)&&(t.icon||h).length>0,"icon-no-description":t.icon&&!h,"last ":r&&!(t.icon||h)},onClick:()=>this.onButtonClick(t),ref:i=>this.actionClickDivs[e]=i,onTouchStart:()=>{this.onItemTouchStart(this.actionClickDivs[e])},onTouchEnd:()=>{this.onItemTouchEnd(this.actionClickDivs[e])}},t.icon?s("div",{class:"icon-container "+(t.iconClass||u())},s("yoo-icon",{class:t.icon})):null,s("div",{class:{"text-container":!0,last:e===i.length-1,"icon-no-description":t.icon&&!h,"icon-description":(t.icon||h)&&(t.icon||h).length>0}},s("p",{innerHTML:c}),h&&s("div",{class:"description-container"},h),!r&&s("div",{class:"divider"})),p()&&s("div",{class:"selection-overlay"}))}renderBottomContainer(){return s("div",{class:"bottom-container"},s("div",{class:"cancel-container",onClick:()=>this.closeActionSheet(!1,!0),ref:i=>this.cancelDiv=i,onTouchStart:()=>{this.onItemTouchStart(this.cancelDiv)},onTouchEnd:()=>{this.onItemTouchEnd(this.cancelDiv)}},m("CANCEL")))}renderHeader(){return this.heading||p()?s("div",{class:"heading-container"},p()&&s("yoo-icon",{class:"yo-close",onClick:()=>this.closeActionSheet(!1,!0)}),s("span",null,m(this.heading?this.heading:"ADDANACTIVITY")),p()&&s("div",{class:"spacer"})):null}renderFooter(){return s("div",{class:"footer"},this.footer.text&&s("div",{class:"text"},m(this.footer.text)),this.footer.actionableText&&s("div",{class:"actionable-text",onClick:()=>this.footer.actionableText.handler()},m(this.footer.actionableText.text)))}renderTopContainer(){const i=this.buttons.filter(i=>!i.isVisible||i.isVisible());return s("div",{class:{"top-container":!0,solid:i&&i.length>0&&i[0]&&(i[0].description||i[0].icon)},ref:i=>this.topContainer=i},s("div",{style:this.getProperHeight()},s("ul",{class:"inner",ref:i=>this.innerDiv=i},this.renderHeader(),this.cardHeader&&p()&&s("yoo-card-header",{cardHeader:this.cardHeader}),i.map((t,s)=>this.renderLiButton(i,t,s)),this.footer&&p()&&this.renderFooter())))}render(){return s(e,{class:Object.assign({},S(null,this.cssClass?this.cssClass:""),v(),{"mobile-emulate":!p()&&!d()})},s("div",{class:"full-page-container",ref:i=>this.outerDiv=i},s("div",{ref:i=>this.overlay=i,class:"overlay",onClick:()=>this.onOverlayClick(),style:{"z-index":(2e4+this.overlayId).toString()}}),s("div",{class:"outer-container",style:{"z-index":(20001+this.overlayId).toString()}},this.renderTopContainer(),!p()&&this.renderBottomContainer())))}get host(){return n(this)}static get style(){return".iframe-root{top:0;right:0;bottom:0;left:0;position:absolute;color:var(--black);overflow-y:auto;scrollbar-width:none}.iframe-root yoo-app .wrapper{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;height:100%;width:100%}.iframe-root yoo-app .wrapper.center-center{-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%}.iframe-root::-webkit-scrollbar{display:none}:host{width:100%;font-size:var(--font-size-02,.875rem)}:host .outer-container{position:fixed;right:var(--padding-10,.625rem);bottom:var(--padding-10,.625rem);left:var(--padding-10,.625rem);width:auto}:host .outer-container,:host .top-container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}:host .top-container{-ms-flex-pack:center;justify-content:center;width:100%;padding-bottom:0;border-radius:.8125rem;background-color:var(--stable-light,#f1f1f1);overflow-y:scroll!important;-webkit-overflow-scrolling:touch!important}:host .top-container.solid{background-color:var(--light,#fff)}:host .top-container.solid .inner-container{text-align:left}:host .top-container .height-block{max-height:28rem}:host .top-container .inner{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;margin:0;padding:0;line-height:1.65rem;overflow:auto}:host .top-container .inner,:host .top-container .inner .action-click.tapped{-webkit-transition:background-color .3s ease;transition:background-color .3s ease}:host .top-container .inner .action-click.tapped{background-color:var(--stable-light,#f1f1f1)}:host .top-container .heading-container{padding:.25rem 1rem;height:2.875rem;border-bottom:1px solid var(--stable-40,hsla(0,0%,67.8%,.4));color:var(--success,#04cc99);font-size:var(--font-size-03,1rem)}:host .top-container .heading-container,:host .top-container .inner-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;font-weight:var(--font-weight-02,400)}:host .top-container .inner-container{padding:.25rem 1rem;padding:1rem;border-bottom:1px solid var(--backdrop,rgba(43,54,72,.4));color:var(--dark,#2b3648);font-size:var(--font-size-04,1.125rem);text-align:center}:host .top-container .inner-container.icon{display:-ms-flexbox;display:flex;position:relative;-ms-flex-pack:start;justify-content:flex-start;border:none}:host .top-container .inner-container.description{-ms-flex-align:start;align-items:flex-start;padding:.5rem 1rem 0;border:none}:host .top-container .inner-container.first-icon-description{padding-top:.75rem}:host .top-container .inner-container.last{border:none;border-radius:.8125rem}:host .top-container .inner-container.success{color:var(--success,#04cc99)}:host .top-container .inner-container.danger{color:var(--danger,#ff625f)}:host .top-container .inner-container:last-child{padding-bottom:1rem}:host .top-container .inner-container .icon-container{width:2rem;padding-top:.25rem;font-size:var(--font-size-04,1.125rem)}:host .top-container .inner-container .text-container p{margin:0;font-size:var(--font-size-04,1.125rem)}:host .top-container .inner-container .text-container.icon-description{-ms-flex:1;flex:1}:host .top-container .inner-container .text-container.last{border:none}:host .top-container .inner-container .text-container.icon-no-description .divider{top:auto;right:1rem;bottom:0;left:3rem;position:absolute}:host .top-container .inner-container .text-container .description-container{padding-bottom:.5rem;color:var(--text-color,#807f83);font-size:var(--font-size-02,.875rem);font-weight:var(--font-weight-02,400);line-height:1.2rem}:host .top-container .inner-container .text-container .divider{border-bottom:1px solid var(--stable-light,#f1f1f1)}:host .bottom-container{width:100%;padding-top:.5rem;background-color:transparent}:host .bottom-container .cancel-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;padding:.25rem 1rem;padding:.85rem;border-radius:.8125rem;background-color:var(--light,#fff);color:var(--black,#000);font-size:var(--font-size-04,1.125rem);font-weight:var(--font-weight-02,400)}:host .bottom-container .cancel-container.tapped{-webkit-transition:background-color .3s ease;transition:background-color .3s ease;background-color:var(--stable-light,#f1f1f1)}:host .overlay{position:absolute;top:0;left:0;right:0;bottom:0;background:var(--always-black,#000);opacity:var(--overlay-opacity,.4);z-index:19999}:host(.boost) .outer-container .top-container .heading-container{color:var(--danger-light,#f46885)}:host(.iphone-x) .column{margin-bottom:var(--padding-20,1.25rem)}:host(.iphone-x) .bottom-container{margin-bottom:25px}:host(.mobile-emulate) .outer-container{position:absolute}:host(.web) .full-page-container{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}:host(.web) .height-block{max-height:unset}:host(.web) .outer-container{position:relative;top:4.25rem;width:44%!important;min-width:432px}:host(.web) .outer-container .top-container{max-height:unset;border-radius:.375rem;overflow-y:auto!important}:host(.web) .outer-container .top-container .inner{-ms-flex-align:center;align-items:center}:host(.web) .outer-container .top-container .inner .heading-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;width:calc(100% - 2rem);border-bottom:none;color:var(--black,#000);font-size:var(--font-size-04,1.125rem)}:host(.web) .outer-container .top-container .inner .heading-container yoo-icon{color:var(--text-color,#807f83);font-size:var(--font-size-04,1.125rem)}:host(.web) .outer-container .top-container .inner yoo-card-header{height:290px;margin-bottom:2.1875rem}:host(.web) .outer-container .top-container .inner .footer{display:-ms-flexbox;display:flex;padding:6.25rem 0 var(--padding-20,1.25rem)}:host(.web) .outer-container .top-container .inner .footer .text{color:var(--black,#000)}:host(.web) .outer-container .top-container .inner .footer .actionable-text{padding-left:var(--padding-5,.3125rem);color:var(--success,#04cc99);text-decoration:underline}:host(.web) .outer-container .top-container .inner .action-click{position:relative;-ms-flex-pack:start;justify-content:flex-start;width:400px;padding:.5rem .35rem;border-bottom:1px solid var(--stable-alt,#d0d0d0)}:host(.web) .outer-container .top-container .inner .action-click .text-container span{color:var(--black,#000)}:host(.web) .outer-container .top-container .inner .action-click .selection-overlay{top:0;right:0;bottom:0;left:0;position:absolute;-webkit-transition:.2s;transition:.2s;border-radius:var(--padding-5,.3125rem);background:var(--success,#04cc99);opacity:0;z-index:2}:host(.web) .outer-container .top-container .inner .action-click.icon{padding:.35rem 1rem;border:none}:host(.web) .outer-container .top-container .inner .action-click.icon .selection-overlay{top:-.375rem;bottom:.375rem}:host(.web) .outer-container .top-container .inner .action-click.icon-no-description .selection-overlay{top:0;bottom:0}:host(.web) .outer-container .top-container .inner .action-click.description{border:none}:host(.web) .outer-container .top-container .inner .action-click.last{margin-bottom:1.5rem;border:none}:host(.web) .outer-container .top-container .inner .action-click:hover .selection-overlay{opacity:.1}:host(.web.boost) .outer-container .top-container .inner .action-click .selection-overlay{background:var(--danger-light,#f46885)}"}};export{A as yoo_action_sheet};