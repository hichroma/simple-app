import{r as s,h as t,g as r}from"./p-0d847530.js";import{t as i,cn as o}from"./p-384bfcf6.js";import"./p-0f3d65ca.js";import"./p-8cff990b.js";import"./p-0d62bf9d.js";import"./p-d70b188c.js";import"./p-815d6c40.js";const e=class{constructor(t){s(this,t),this.mainText=""}render(){return t("div",{class:"container"},t("h1",{class:"text"},this.user?i("HELLO_USER",{day_period:i(o()),user_firstname:this.user.firstName?this.user.firstName:this.user.username}):i(this.mainText)),this.subText?t("h3",{class:"sub-text"},i(this.subText)," "):null)}get host(){return r(this)}static get style(){return".iframe-root{top:0;right:0;bottom:0;left:0;position:absolute;color:var(--black);overflow-y:auto;scrollbar-width:none}.iframe-root yoo-app .wrapper{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;height:100%;width:100%}.iframe-root yoo-app .wrapper.center-center{-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%}.iframe-root::-webkit-scrollbar{display:none}:host{--text-font:var(--font-size-05,1.25rem);--sub-text-font:var(--font-size-03,1rem)}:host .container{padding:.5rem 1rem 0 1rem}:host .container .text{font-size:var(--text-font)}:host .container .sub-text,:host .container .text{font-weight:var(--font-weight-01,300);-webkit-margin-before:0;margin-block-start:0;-webkit-margin-after:0;margin-block-end:0}:host .container .sub-text{color:var(--stable,#adadad);font-size:var(--sub-text-font)}:host(.padding) .container{padding:2.4rem 1rem .4rem 1rem}:host(.padding) .container .text{font-size:var(--font-size-07,1.75rem)}"}};export{e as yoo_welcome_banner};