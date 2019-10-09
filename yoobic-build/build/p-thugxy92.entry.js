import{r as s,c as t,h as i,H as e,g as h}from"./p-0d847530.js";import{i as n,cJ as o,cw as a,aZ as r,b as d,bl as l,cK as c,cP as u,bB as g,A as p,bs as m,cU as w,q as v,t as b,p as f,al as y,ak as L,br as k,d as E,bq as C}from"./p-384bfcf6.js";import"./p-0f3d65ca.js";import"./p-8cff990b.js";import"./p-0d62bf9d.js";import{di as P,az as I}from"./p-d70b188c.js";import"./p-815d6c40.js";const x=class{constructor(i){s(this,i),this.leftPanelMobileHeaderIcon="./assets/logo/operations_simple.svg",this.leftPanelWebHeaderIcon="./assets/logo/operations_landscape_light.svg",this.videoBackgroundUrl="",this.backgroundColor="dark",this.webTitleText="Operations",this.webSubtitleText=[],this.webLoginFormTitle="",this.showRememberMe=!1,this.leftPanelFooterText="POWEREDBY",this.webLoginFormSubtitle="LOGINSUBTITLE",this.rememberMeText="REMEMBERME",this.forgotPasswordText="HELP",this.emailLabel="EMAIL",this.passwordLabel="PASSWORD",this.magicLinkButtonText="MAGICLINK",this.resetPasswordButtonText="RESETPASSWORD",this.loginButtonText="LOGIN",this.logoSubtitle="GLADTOSEEYOU",this.language="EN",this.passwordInputChanged=!1,this.inputFocused=!1,this.deviceInputFocused=!1,this.showLeftPanel=!0,this.rememberMe=!1,this.emailFocused=!1,this.passwordFocused=!1,this.fullWindowHeight=0,this.loginContainerMobileHeight=0,this.showHeaderFooterOnFocus=!0,this.hideTitleAndFooterForIpadMini=!1,this.emailInputValidators=[{name:"email"},{name:"required"}],this.emailInputUIValidation={valid:!1,invalid:!0},this.passwordInputValidators=[{name:"required"}],this.passwordInputUIValidation={valid:!1,invalid:!1},this.doLogin=t(this,"doLogin",7),this.languageSelectedParent=t(this,"languageSelectedParent",7),this.rememberMeSelected=t(this,"rememberMeSelected",7),this.passwordResetModalRequested=t(this,"passwordResetModalRequested",7),this.magicLinkModalRequested=t(this,"magicLinkModalRequested",7),this.advancedLoginRequested=t(this,"advancedLoginRequested",7)}onLeftPanelChanged(s){s&&(this.updateVideoSrcOnDidUpdate=!0)}async setStatusBarColor(s){s?P.styleLightContent():P.styleDefault()}async getPassword(){return Promise.resolve(this.userPassword)}componentWillLoad(){n()&&(o(Keyboard),this.setStatusBarColor(!0))}componentDidLoad(){this.resizePage(),this.resizeListener=a(this.resizePage,500).bind(this),window.addEventListener("resize",this.resizeListener),this.resizeLanguageSelectorWidth(),this.loginContainerMobileHeight=I(this.loginContainerMobile).height,setTimeout(()=>{n()&&this.loginContainerMobile&&this.loginContainerMobile.setAttribute("style",`height: ${this.loginContainerMobileHeight}px;`)},1e3),this.videoHeaderContainerEl&&(this.focusAnimation=new r,this.focusAnimation.addContainer(this.videoHeaderContainerEl)),(n()&&d()||l())&&this.outerContainerElement&&(this.outerContainerElement.style.height=`${window.innerHeight}px`)}componentDidUpdate(){this.resizeLanguageSelectorWidth(),this.updateVideoSrcOnDidUpdate&&this.loginVideoEl&&(this.loginVideoEl.src=this.videoBackgroundUrl,this.loginVideoEl.play(),this.updateVideoSrcOnDidUpdate=!1),(n()&&d()||l())&&this.outerContainerElement&&(this.outerContainerElement.style.height=`${window.innerHeight}px`)}componentDidUnload(){window.removeEventListener("resize",this.resizeListener),n()&&(c(Keyboard),d()&&this.setStatusBarColor(!1))}hasVideoBackground(){return""!==this.videoBackgroundUrl}hasLoginScreenClass(){return u()}onAlertClosed(){this.error=""}onAlertActionSelected(){this.error="",window.location.href="mailto:support@yoobic.com"}onRadioClicked(s){this.rememberMe="checked"===s.detail}onInputChanged(s,t){this.validateLoginInputs(),"email"===t?this.userEmail=s.detail:"password"===t&&(this.userPassword=s.detail)}onAdvancedLogin(){this.advancedLoginRequested.emit(!0)}onEnterPressed(){this.validateLoginInputs(),this.onLogin()}validateLoginInputs(){this.loginBtnEl&&(this.loginBtnEl.disabled=!(this.emailInputEl&&this.emailInputEl.validity&&this.passwordInputEl&&this.passwordInputEl.validity))}onInputFocused(s){this.error="","password"===s?this.passwordFocused=!0:this.emailFocused=!0,!n()||g()&&!this.hideTitleAndFooterForIpadMini||this.hideTitleAndFooter(),p()&&(this.inputFocused=!0,this.focusAnimation&&this.videoHeaderContainerEl&&this.focusAnimation.playFocus())}onInputBlurred(s){this.validateLoginInputs(),p()&&("password"===s?this.passwordFocused=!1:this.emailFocused=!1,setTimeout(()=>{n()&&this.hideTitleAndFooter()},100),this.inputFocused=!1,this.videoHeaderContainerEl&&this.focusAnimation.playBlur())}onPasswordIconClicked(s){"clear"===s.detail&&this.validateLoginInputs()}hideTitleAndFooter(){if(this.emailFocused||this.passwordFocused){if(this.loginContainerMobile){let s=m()?"75%":"100%";this.loginContainerMobile.setAttribute("style",`height: ${s};`)}this.deviceInputFocused=!0}else this.loginContainerMobile&&this.loginContainerMobile.setAttribute("style",`height: ${this.loginContainerMobileHeight}px;`),this.deviceInputFocused=!1}resizeLanguageSelectorWidth(){this.languageSelectorEl&&this.languageSelectorEl.clientWidth&&this.spaceFillEl.setAttribute("style",`width: ${this.languageSelectorEl.clientWidth}px`),this.language=this.currentLanguage}resizePage(){p()&&(this.fullWindowHeight=window.innerHeight>this.fullWindowHeight?window.innerHeight:this.fullWindowHeight),this.showLeftPanel=window.innerWidth>900,this.showHeaderFooterOnFocus=window.innerHeight>665,this.hideTitleAndFooterForIpadMini=window.innerHeight<1024&&d()}onLogin(){if(this.userEmail&&this.userPassword&&this.loginBtnEl&&!1===this.loginBtnEl.disabled){let s=w(this.host,"input");s&&s.forEach&&s.forEach(s=>s&&s.blur&&s.blur()),this.doLogin.emit({username:this.userEmail,password:this.userPassword}),this.rememberMeSelected.emit(this.rememberMe)}}onForgotPassword(){p()?this.presentActionSheet():this.passwordResetModalRequested.emit(!0)}presentActionSheet(){v([{text:b(this.resetPasswordButtonText),handler:()=>this.passwordResetModalRequested.emit(!0)},{text:b(this.magicLinkButtonText),handler:()=>this.magicLinkModalRequested.emit(!0)}])}showLanguageModal(){let s=Math.floor(this.languageSelectorButtonElement?this.languageSelectorButtonElement.getBoundingClientRect().bottom:0),t=Math.ceil(s)+15,i=document.createElement("yoo-language-selector");i.currentLanguage=this.currentLanguage,i.languages=this.languages,i.topPosition=t,i.rightPosition=f()?1.875:1.75,y(i,null,"fullscreen","fadeEnterAnimation","fadeLeaveAnimation").then(s=>{s&&s.data&&(this.language=s.data,this.languageSelectedParent.emit(s.data)),i=null})}getVideoBackgroundClasses(){if(this.hasVideoBackground()&&!f())return{"no-border":!0,translucent:!0}}renderLoginForm(){return[i("div",{ref:s=>this.loginContainerMobile=s,class:{"login-container-mobile":p(),unfocused:!this.inputFocused,"login-container":!p(),"iphone-se-focus":this.inputFocused&&k()}},p()?null:[i("div",{class:"login-title"},b(this.webLoginFormTitle)),i("div",{class:"login-subtitle"},b(this.webLoginFormSubtitle))],i("yoo-form-input-container",{class:{"login-screen":!f()},field:{title:b(this.emailLabel)},required:!0},i("yoo-form-input",{class:Object.assign({"login-web":f()},this.getVideoBackgroundClasses()),ref:s=>this.emailInputEl=s,id:"email-input",type:"email",validators:this.emailInputValidators,uiValidation:this.emailInputUIValidation,onInputChanged:s=>this.onInputChanged(s,"email"),onInputFocused:()=>this.onInputFocused("email"),onInputBlurred:()=>this.onInputBlurred("email"),onEnterPressed:()=>this.onEnterPressed()})),i("div",{class:"password-container"},i("yoo-form-input-container",{class:{"login-screen":!f()},field:{title:b(this.passwordLabel)},required:!0},i("yoo-form-input",{class:Object.assign({"login-web":f()},this.getVideoBackgroundClasses()),ref:s=>this.passwordInputEl=s,id:"password-input",type:"password",showPasswordToggle:!0,validators:this.passwordInputValidators,uiValidation:this.passwordInputUIValidation,onInputChanged:s=>this.onInputChanged(s,"password"),onInputFocused:()=>this.onInputFocused("password"),onInputBlurred:()=>this.onInputBlurred("password"),onIconClicked:s=>this.onPasswordIconClicked(s),onEnterPressed:()=>this.onEnterPressed()}))),i("div",{class:"inner-container"},i("div",{class:"radio"},this.showRememberMe&&i("yoo-form-radio",{text:b(this.rememberMeText),class:{stable:!0,success:L().operations,"danger-light":L().boost},onRadioClicked:s=>this.onRadioClicked(s)})),i("yoo-button",{id:"forgot-password",text:b(this.forgotPasswordText),onClick:()=>this.onForgotPassword(),class:{"no-min-width medium":!0,"link-translucent":this.hasVideoBackground()&&!f(),"link-transparent-success":f()&&L().operations,"link-transparent-danger-light":f()&&L().boost,"login-screen":this.hasLoginScreenClass()}})),i("div",{class:"login-button "+(n()?"device-padding":"")},i("yoo-button",{ref:s=>this.loginBtnEl=s,id:"login-btn",disabled:!(this.emailInputEl&&this.emailInputEl.validity&&this.passwordInputEl&&this.passwordInputEl.validity),text:b(this.loginButtonText),class:{"full-width":!0,"x-x-medium":f(),success:L().operations,"danger-light":L().boost,large:p(),"login-screen":this.hasLoginScreenClass()},onClick:()=>this.onLogin()})),p()&&this.renderPoweredBy())]}shouldHideHeaderVideo(){return!this.hasVideoBackground()||f()||(m()||k())&&this.error||this.deviceInputFocused&&E()&&!this.showHeaderFooterOnFocus}renderHeaderVideo(){return i("div",{ref:s=>this.videoHeaderContainerEl=s,class:{"video-header-container-mobile":!0,hide:this.shouldHideHeaderVideo()}},i("img",{class:{logo:!0,"auto-margin":!(n()&&E())},src:this.videoHeaderIcon,height:"120",alt:"YOOBIC Logo"}),i("div",{class:{text:!0,"iphone-5":m()||k()}},b(this.logoSubtitle)))}renderLanguageSelector(){return i("yoo-button",{id:"language-selector",ref:s=>this.languageSelectorButtonElement=s,class:{clear:!0,squared:!0,small:!0,"no-shadow":!0,"login-screen":this.hasLoginScreenClass(),translucent:this.hasVideoBackground()&&!f()},onClick:()=>this.showLanguageModal(),text:this.currentLanguage,icon:"yo-down"})}renderPoweredBy(){if(!this.error&&!this.inputFocused||!n()||!E())return[i("div",{class:"powered-by"},b(this.leftPanelFooterText),i("div",{class:"powered-img"},i("img",{src:p()||!this.showLeftPanel?"./assets/logo/yoobic_simple_grey.svg":"./assets/logo/yoobic_simple_white.svg",height:"12.8"})),i("div",{class:"yoobic-text"},"YOOBIC")),this.version&&i("div",{class:"powered-by version"},"v",this.version)]}renderFooter(){return p()?this.hideAdvancedLogin?null:i("yoo-button",{text:b("ADVANCEDLOGIN"),onClick:()=>this.onAdvancedLogin(),class:{block:!0,"login-screen":this.hasLoginScreenClass(),transparent:this.hasVideoBackground()&&!f(),stable:!this.hasVideoBackground()&&f(),medium:f()}}):this.renderPoweredBy()}renderVideo(){return i("video",{ref:s=>this.loginVideoEl=s,class:{android:E()},src:this.videoBackgroundUrl,muted:!0,autoplay:!0,loop:!0,playsinline:!0,"webkit-playsinline":!0})}renderHeader(){return i("div",{class:"header"},p()&&i("div",{class:"space-fill",ref:s=>this.spaceFillEl=s}),i("div",{class:"logo"},i("img",{src:this.leftPanelWebHeaderIcon,height:"50",alt:"YOOBIC Logo"})))}renderPanelBody(s){return"leftPanel"===s?i("div",{class:"content"},this.webSubtitleText.map(s=>i("div",{class:"subtitle-container"},s))):""}renderLeftPanel(){let s;return this.hasVideoBackground()||f()||(s={backgroundImage:`url(${this.backgroundSrc})`}),i("div",{class:"left-panel"},this.backgroundSrc&&s?i("div",{class:"background",style:s}):this.hasVideoBackground()?this.renderVideo():null,i("div",{class:"background-overlay bg-"+(this.backgroundColor||"dark")}),i("div",{class:"content-container"},this.renderHeader(),this.renderPanelBody("leftPanel"),i("div",{class:{footer:!0,android:E()}},this.renderFooter())))}renderErrorBanner(){return i("yoo-banner",{id:"error-alert",animationName:"sticky_up",class:{"danger embedded centered header":!0,android:E()},text:this.error,closeable:!p(),link:p()?"":"NEEDHELP",onAlertActionSelected:()=>this.onAlertActionSelected(),onAlertClosed:()=>this.onAlertClosed()})}renderRightPanel(){return i("div",{class:{"right-panel":!0,ios:n()&&d(),"video-background":this.hasVideoBackground()&&!f()},"justify-content":"flex-start"},this.hasVideoBackground()&&!f()&&this.renderVideo(),this.error&&this.renderErrorBanner(),i("div",{class:"content-container","justify-content":"space-between"},i("div",{id:"header",class:{header:!0,ios:n()&&d(),android:E(),"iphone-x":C(),"no-padding":+this.error&&p()}},p()||!this.showLeftPanel&&[i("div",{class:"space-fill"}),i("div",{class:"logo"},this.hasVideoBackground()&&!f()?null:i("img",{src:this.leftPanelMobileHeaderIcon,height:"25",alt:"YOOBIC Logo"}))],i("div",{class:"language-container"},this.languages&&this.languages.length>1&&this.renderLanguageSelector())),i("div",{class:{content:!0,android:E()&&!this.showHeaderFooterOnFocus},"justify-content":"center"},this.renderHeaderVideo(),this.renderLoginForm()),i("div",{class:{footer:!0,hide:p()&&this.inputFocused,android:E(),"iphone-x":C()}},p()||!this.showLeftPanel?this.renderFooter():this.hideAdvancedLogin?null:i("yoo-button",{text:b("ADVANCEDLOGIN"),onClick:()=>this.onAdvancedLogin(),class:{"login-screen":this.hasLoginScreenClass(),medium:f(),"link-transparent-success":L().operations,"link-transparent-danger-light":L().boost,"iphone-x-padding":C()}}))))}renderLoading(){return i("yoo-loader",{class:"absolute lg backdrop"})}render(){return i(e,{class:Object.assign({},L())},i("div",{ref:s=>this.outerContainerElement=s,class:"outer-container"},this.loading&&this.renderLoading(),f()&&this.showLeftPanel&&this.renderLeftPanel(),this.renderRightPanel()))}get host(){return h(this)}static get watchers(){return{showLeftPanel:["onLeftPanelChanged"]}}static get style(){return".iframe-root{top:0;right:0;bottom:0;left:0;position:absolute;color:var(--black);overflow-y:auto;scrollbar-width:none}.iframe-root yoo-app .wrapper{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;height:100%;width:100%}.iframe-root yoo-app .wrapper.center-center{-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%}.iframe-root::-webkit-scrollbar{display:none}:host .outer-container{top:0;right:0;bottom:0;left:0;position:absolute;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row}:host .outer-container .left-panel,:host .outer-container .right-panel{display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;background-color:var(--light,#fff);overflow:hidden}:host .outer-container .left-panel .content-container,:host .outer-container .right-panel .content-container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;width:-webkit-fill-available;width:-moz-available;width:stretch;height:-webkit-fill-available;height:-moz-available;height:stretch}:host .outer-container .left-panel .content-container .content,:host .outer-container .right-panel .content-container .content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-line-pack:center;align-content:center;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}:host .outer-container .left-panel .content-container .footer,:host .outer-container .left-panel .content-container .header,:host .outer-container .right-panel .content-container .footer,:host .outer-container .right-panel .content-container .header{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:80%;padding:0 2rem}:host .outer-container .left-panel{min-width:25rem}:host .outer-container .left-panel video{position:absolute;min-width:100%;min-height:100%}:host .outer-container .left-panel .content-container{z-index:2}:host .outer-container .left-panel .content-container .header{-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:start;justify-content:flex-start}:host .outer-container .left-panel .content-container .content{color:var(--light,#fff);font-size:var(--font-size-04,1.125rem)}:host .outer-container .left-panel .content-container .content .title-container{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;padding-bottom:1.25rem;font-size:var(--font-size-02,.875rem)}:host .outer-container .left-panel .content-container .content .subtitle-container{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;padding:0 2rem;letter-spacing:.0625rem;text-align:center}:host .outer-container .left-panel .content-container .footer{-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}:host .outer-container .left-panel .content-container .footer .powered-by{color:var(--light,#fff)}:host .outer-container .left-panel .text-container{padding-top:2rem;font-size:var(--font-size-04,1.125rem);font-weight:var(--font-weight-03,700);text-align:center}:host .outer-container .left-panel .background{top:0;right:0;bottom:0;left:0;position:absolute;background-repeat:no-repeat;background-size:cover;z-index:1;background-position-x:50%}:host .outer-container .left-panel .background-overlay{top:0;right:0;bottom:0;left:0;position:absolute;background-color:var(--black,#000);opacity:.5;z-index:2}:host .outer-container .right-panel{width:-webkit-fill-available;width:-moz-available;width:stretch;height:100%;color:var(--text-color,#807f83)}:host .outer-container .right-panel yoo-alert{width:100%}:host .outer-container .right-panel.ios yoo-banner{--margin-top-inner-container:0.6315rem}:host .outer-container .right-panel .content-container .header{-ms-flex-pack:end;justify-content:flex-end}:host .outer-container .right-panel .content-container .header.no-padding{padding-top:.375rem!important}:host .outer-container .right-panel .content-container .header.reset{-ms-flex-pack:justify;justify-content:space-between}:host .outer-container .right-panel .content-container .header.iphone-x{padding-top:3rem!important}:host .outer-container .right-panel .content-container .header .space-fill{width:3.375rem!important}:host .outer-container .right-panel .content-container .header .close{width:1.875rem;height:1.875rem;border:solid .0625rem var(--stable,#adadad);border-radius:var(--padding-15,.9375rem);opacity:0}:host .outer-container .right-panel .content-container .header .close:hover{cursor:pointer}:host .outer-container .right-panel .content-container .header .logo{display:-ms-flexbox;display:flex;padding-right:1rem}:host .outer-container .right-panel .content-container .header .language-container yoo-button{--height-container:1.875rem}:host .outer-container .right-panel .content-container .content{width:100%}:host .outer-container .right-panel .content-container .content .login-title{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;padding-bottom:.5rem;color:var(--dark,#2b3648);font-size:var(--font-size-07,1.75rem);font-weight:var(--font-weight-03,700)}:host .outer-container .right-panel .content-container .content .version{font-size:var(--font-size-01,.75rem)}:host .outer-container .right-panel .content-container .content .login-container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;width:100%;margin:auto}:host .outer-container .right-panel .content-container .content .login-container .password-container{padding:0}:host .outer-container .right-panel .content-container .content .login-container .login-subtitle{padding-bottom:2rem}:host .outer-container .right-panel .content-container .content .login-container .inner-container{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:justify;justify-content:space-between}:host .outer-container .right-panel .content-container .content .login-container .inner-container .radio{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}:host .outer-container .right-panel .content-container .content .login-container .login-button{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:center;justify-content:center}:host .outer-container .right-panel .content-container .content .login-container-mobile{width:calc(100% - 4rem);height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;padding:0 2rem;-webkit-transition:.3s;transition:.3s}:host .outer-container .right-panel .content-container .content .login-container-mobile .powered-by{font-size:var(--font-size-01,.75rem);height:13px;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;color:var(--stable-alt-to-white,#d0d0d0);letter-spacing:.0625rem}:host .outer-container .right-panel .content-container .content .login-container-mobile .powered-by .powered-img{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;padding-left:.3125rem;padding-right:.25rem}:host .outer-container .right-panel .content-container .content .login-container-mobile .version{font-size:var(--font-size-01,.75rem);color:var(--stable,#adadad);margin-top:.5rem;text-align:center}:host .outer-container .right-panel .content-container .content .login-container-mobile.unfocused{margin-top:10%}:host .outer-container .right-panel .content-container .content .login-container-mobile.iphone-se-focus{margin-bottom:10rem}:host .outer-container .right-panel .content-container .content .login-container-mobile yoo-form-input-container{margin-bottom:0}:host .outer-container .right-panel .content-container .content .login-container-mobile .inner-container{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;margin-top:-.75rem}:host .outer-container .right-panel .content-container .content .login-container-mobile .inner-container .radio{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}:host .outer-container .right-panel .content-container .content .login-container-mobile .inner-container.mobile{display:-ms-flexbox;display:flex}:host .outer-container .right-panel .content-container .content .login-container-mobile .inner-container.mobile yoo-button{--padding-value:0 2px 0 var(--padding-10,0.625rem)}:host .outer-container .right-panel .content-container .content .login-container-mobile .login-button{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:center;justify-content:center;margin-top:1.25rem;margin-bottom:var(--padding-15,.9375rem);-webkit-transition:.3s;transition:.3s}:host .outer-container .right-panel .content-container .content .login-container-mobile .login-button.device-padding{margin-top:var(--padding-10,.625rem)}:host .outer-container .right-panel .content-container .content .login-container-mobile .powered-by{padding-bottom:var(--padding-5,.3125rem)}:host .outer-container .right-panel .content-container .footer{width:100%}:host .outer-container .right-panel .content-container .footer .powered-by{font-size:var(--font-size-01,.75rem);height:13px;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;color:var(--stable-alt-to-white,#d0d0d0);letter-spacing:.0625rem}:host .outer-container .right-panel .content-container .footer .powered-by .powered-img{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;padding-left:.3125rem;padding-right:.25rem}:host .outer-container .right-panel .content-container .footer .version{font-size:var(--font-size-01,.75rem);color:var(--stable,#adadad);margin-top:.5rem;text-align:center}:host .outer-container .right-panel .content-container .footer.iphone-x{padding-bottom:var(--padding-20,1.25rem)}:host .outer-container .right-panel.video-background{background-color:var(--black-40,rgba(0,0,0,.4));color:var(--light,#fff)}\@-webkit-keyframes show{0%{opacity:0;visibility:hidden}to{opacity:1;visibility:visible}}\@keyframes show{0%{opacity:0;visibility:hidden}to{opacity:1;visibility:visible}}:host .outer-container .right-panel.video-background video{position:absolute;min-width:100%;min-height:100%;z-index:-100}:host .outer-container .right-panel.video-background video.android{opacity:0;visibility:hidden;-webkit-animation:show .5s forwards;animation:show .5s forwards;-webkit-animation-delay:1s;animation-delay:1s}:host .outer-container .right-panel.video-background .content-container .video-header-container-mobile{display:-ms-flexbox;display:flex;position:relative;-ms-flex-pack:center;justify-content:center;width:80%;padding:0 2rem;text-align:center}:host .outer-container .right-panel.video-background .content-container .video-header-container-mobile.hide{display:none}:host .outer-container .right-panel.video-background .content-container .video-header-container-mobile .auto-margin{margin:auto}:host .outer-container .right-panel.video-background .content-container .video-header-container-mobile .text{position:absolute;top:0;left:2rem;margin-bottom:1.875rem;color:var(--always-light,#fff);font-size:var(--font-size-07,1.75rem);font-weight:var(--font-weight-03,700);letter-spacing:normal;text-align:left;text-transform:none;opacity:0}:host .outer-container .right-panel.video-background .content-container .video-header-container-mobile .text.iphone-5{margin-bottom:0}:host .outer-container .right-panel.video-background .content-container .login-container-mobile yoo-form-input-container yoo-form-input{--input-text-color:cssvar(always-light)!important;--input-icon-color:cssvar(always-light)!important}:host .outer-container .right-panel.video-background .content-container .login-container-mobile yoo-form-input-container yoo-form-input.has-invalid-format{margin-top:0}:host .outer-container .right-panel.video-background .content-container .login-container-mobile .powered-by{color:var(--always-light,#fff)!important}:host .outer-container .right-panel.video-background .content-container .login-container-mobile .version{color:var(--always-light,#fff)!important;font-size:var(--font-size-01,.75rem)!important}:host(.boost) video{bottom:0}:host(.web) .outer-container .left-panel .content-container .footer,:host(.web) .outer-container .left-panel .content-container .header,:host(.web) .outer-container .right-panel .content-container .footer,:host(.web) .outer-container .right-panel .content-container .header{height:6rem}:host(.web) .outer-container .left-panel .content-container .footer,:host(.web) .outer-container .right-panel .content-container .footer{-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;font-size:var(--font-size-02,.875rem)}:host(.web) .outer-container .left-panel .content-container .footer .powered-by{font-size:var(--font-size-01,.75rem);height:13px;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;color:var(--stable-alt-to-white,#d0d0d0);letter-spacing:.0625rem}:host(.web) .outer-container .left-panel .content-container .footer .powered-by .powered-img{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;padding-left:.3125rem;padding-right:.25rem}:host(.web) .outer-container .left-panel .content-container .footer .version{font-size:var(--font-size-01,.75rem);color:var(--stable,#adadad);margin-top:.5rem;text-align:center}:host(.web) .outer-container .right-panel .content-container .content{max-width:25rem}:host(.web) .outer-container .right-panel .content-container .content .login-container{width:100%;margin:auto}:host(.web) .outer-container .right-panel .content-container .content .login-container .inner-container{padding:.5rem 0}:host(.mobile) .outer-container .left-panel .content-container .footer,:host(.mobile) .outer-container .left-panel .content-container .header,:host(.mobile) .outer-container .right-panel .content-container .footer,:host(.mobile) .outer-container .right-panel .content-container .header{padding-top:2rem}:host(.mobile) .outer-container .right-panel yoo-banner{--padding-top-container:1.325rem}:host(.mobile) .outer-container .right-panel yoo-banner:not(.android){margin-bottom:-1rem}:host(.mobile) .outer-container .right-panel .content-container .header:not(.android){padding-top:2rem}:host(.mobile) .outer-container .right-panel .content-container .header.android{padding-top:1rem}:host(.mobile) .outer-container .right-panel .content-container .content{-ms-flex-pack:center;justify-content:center;width:100%;max-width:25rem;height:100%}:host(.mobile) .outer-container .right-panel .content-container .content.android{padding-top:0}:host(.mobile) .outer-container .right-panel .content-container .content .login-title{-ms-flex-align:end;align-items:flex-end;-ms-flex-pack:center;justify-content:center;height:25%}:host(.mobile) .outer-container .right-panel .content-container .content .login-title .inner-title,:host(.mobile) .outer-container .right-panel .content-container .content .version{text-align:center}:host(.mobile) .outer-container .right-panel .content-container .footer .powered-by{font-size:var(--font-size-01,.75rem);height:13px;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;color:var(--stable-alt-to-white,#d0d0d0);letter-spacing:.0625rem}:host(.mobile) .outer-container .right-panel .content-container .footer .powered-by .powered-img{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;padding-left:.3125rem;padding-right:.25rem}:host(.mobile) .outer-container .right-panel .content-container .footer .version{font-size:var(--font-size-01,.75rem);color:var(--stable,#adadad);margin-top:.5rem;text-align:center}:host(.mobile) .outer-container .right-panel .content-container .footer.android{padding-top:0}:host(.mobile) .outer-container .right-panel .content-container .footer.hide{display:none}:host(.mobile) .outer-container .right-panel .content-container .footer:not(.android){padding-bottom:1rem}\@media only screen and (max-width:370px){:host .outer-container .left-panel .header{display:-ms-flexbox!important;display:flex!important;-ms-flex-align:end;align-items:flex-end;padding:29px 8px 8px}:host .outer-container .left-panel .text-container{padding-top:.5rem}:host .outer-container .left-panel .login-container .inner-container{display:-ms-flexbox!important;display:flex!important}:host .outer-container .left-panel .login-container .login-button{-ms-flex-pack:center;justify-content:center}}"}};export{x as yoo_login};