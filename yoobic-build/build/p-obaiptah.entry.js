import{r as s,h as t,H as i,g as a}from"./p-0d847530.js";import{cH as r,t as o}from"./p-384bfcf6.js";import"./p-0f3d65ca.js";import"./p-8cff990b.js";import"./p-0d62bf9d.js";import{dd as c}from"./p-d70b188c.js";import"./p-815d6c40.js";const n=class{constructor(t){s(this,t)}onIconClick(){let s=this.location.imageData;s&&r(s,this.location.title)}renderVipBagde(){return t("div",{class:"top-right-vip"},t("yoo-badge",{iconLeft:"yo-star",class:"round energized icon-only vip-large"}))}renderTags(){return this.location.tags&&t("div",{class:"tags-container"},this.location.tags.slice(0,5).map(s=>t("span",{class:"hashtag",innerHTML:`#${s.toLowerCase()}`})))}render(){return t(i,{class:{vip:this.location.vip}},t("div",{class:"outer-container"},t("div",{class:"image-container",onClick:()=>this.onIconClick()},t("yoo-avatar",{class:"xl",avatarIconSize:"xl",imgSrc:this.location.imageData,icon:"yo-store success"}),this.location.vip&&this.renderVipBagde()),t("div",{class:"text-container"},t("div",{class:"title"},this.location.title),t("div",{class:"address"},t("div",null,this.location.address),this.renderTags()),this.lastVisitDate&&t("div",{class:"last-visit"},t("span",{class:"black"},o("VISIT"),":"),t("span",null," ",c.dateFormat.transform(this.lastVisitDate,"L LT"))),this.location.countVisits&&t("div",{class:"last-visit"},t("span",{class:"black"},o("VISITCOUNT"),":"),t("span",null," ",this.location.countVisits.toString())))))}get host(){return a(this)}static get style(){return".iframe-root{top:0;right:0;bottom:0;left:0;position:absolute;color:var(--black);overflow-y:auto;scrollbar-width:none}.iframe-root yoo-app .wrapper{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;height:100%;width:100%}.iframe-root yoo-app .wrapper.center-center{-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%}.iframe-root::-webkit-scrollbar{display:none}:host .outer-container{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-flow:row wrap;flex-flow:row wrap;-ms-flex-align:stretch;align-items:stretch;padding:.8em 0;padding-bottom:0;background:var(--light,#fff)}:host .outer-container .image-container{display:-ms-flexbox;display:flex;position:relative;-ms-flex:0.4;flex:0.4;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;text-align:center}:host .outer-container .image-container .top-right-vip{position:absolute;top:53%;right:21px;margin-top:-40px}:host .outer-container .image-container .top-right-vip yoo-badge{--inner-container-default-padding:0.3rem 0.3rem;--inner-container-padding:0.3rem;--outer-container-border:2px solid var(--light,#fff);--font-size-inner-container:var(--font-size-03,1rem)}:host .outer-container .large-address{padding-top:1em}:host .outer-container .text-container{-ms-flex:1;flex:1;padding-top:.3rem;padding-right:.5em;font-size:var(--font-size-02,.875rem)}:host .outer-container .text-container .title{color:var(--black,#000);font-size:var(--font-size-04,1.125rem)}:host .outer-container .text-container .black{color:var(--black,#000)}:host .outer-container .text-container .address,:host .outer-container .text-container .last-visit{padding-top:.1em;color:var(--text-color,#807f83)}:host .outer-container .text-container .tags-container{color:var(--success,#04cc99);word-break:break-all}:host .outer-container .text-container .tags-container .hashtag{padding-right:var(--padding-10,.625rem)}:host(.vip) .outer-container .image-container yoo-avatar{--border-initial:2px solid var(--light,#fff);--image-shadow:0 0 0 3px var(--energized,#fed05b)}"}};export{n as yoo_location_heading};