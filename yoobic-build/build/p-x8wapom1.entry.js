import{r as t,c as s,h as r,g as i}from"./p-0d847530.js";import{d5 as o}from"./p-384bfcf6.js";import"./p-0f3d65ca.js";import"./p-8cff990b.js";import"./p-0d62bf9d.js";import"./p-d70b188c.js";import"./p-815d6c40.js";const e=class{constructor(r){t(this,r),this.validators=[],this.validityChanged=s(this,"validityChanged",7),this.inputBlurred=s(this,"inputBlurred",7),this.inputFocused=s(this,"inputFocused",7),this.inputChanged=s(this,"inputChanged",7)}componentWillLoad(){o(this)}renderReadonly(){return r("div",{class:"readonly"},this.value)}renderEditable(){return r("div",{class:"outer-container"},this.value)}render(){return this.readonly?this.renderReadonly():this.renderEditable()}get host(){return i(this)}static get style(){return".iframe-root{top:0;right:0;bottom:0;left:0;position:absolute;color:var(--black);overflow-y:auto;scrollbar-width:none}.iframe-root yoo-app .wrapper{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;height:100%;width:100%}.iframe-root yoo-app .wrapper.center-center{-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%}.iframe-root::-webkit-scrollbar{display:none}:host .readonly{padding:.5rem;padding-left:0;padding-bottom:0}"}};export{e as yoo_form_formula};