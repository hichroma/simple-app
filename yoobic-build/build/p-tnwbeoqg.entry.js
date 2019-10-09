import{r as s,c as t,h as i,H as o,g as n}from"./p-0d847530.js";import{cZ as e,cH as a,cz as r,q as c,ak as h,i as l}from"./p-384bfcf6.js";import"./p-0f3d65ca.js";import"./p-8cff990b.js";import"./p-0d62bf9d.js";import{aO as d,j as u}from"./p-d70b188c.js";import"./p-815d6c40.js";const p=class{constructor(i){s(this,i),this.bottomActionClicked=t(this,"bottomActionClicked",7),this.viewMoreToggled=t(this,"viewMoreToggled",7)}isAnswer(){return this.host.classList.contains("questionsAnswers")}renderCardImage(){return this.entry&&this.entry.imgSrc&&i("yoo-img",{type:"image",allowOrientation:!0,src:e(this.entry.imgSrc),onClick:()=>a(this.entry.imgSrc,this.entry.description?this.entry.description:null,!0)})}renderFile(){return i("div",{class:"feed-document-container"},i("yoo-form-document",{showDialog:!0,showActionSheet:l(),document:this.entry.document}))}renderMediaOverlay(){return this.entry?[this.entry.topLeftBadge?i("div",{class:"badge-top-left"},i("yoo-badge",{text:this.entry.topLeftBadge,class:this.host.className+"transparent round"})):null,this.entry.topRightBadge?i("div",{class:"badge-top-right"},i("yoo-badge",{text:this.entry.topRightBadge,class:this.host.className+"transparent round"})):null,this.entry.bottomLeftBadge?i("div",{class:"badge-bottom-left"},i("yoo-badge",{text:this.entry.bottomLeftBadge,class:this.host.className+"transparent round"})):null,this.entry.bottomRightBadge?i("div",{class:"badge-bottom-right"},i("yoo-badge",{text:this.entry.bottomRightBadge,class:this.host.className+"transparent round"})):null,this.entry.bottomLeftIcon?i("span",{class:"bottom-left-icon inner-icon"},i("yoo-icon",{class:this.entry.bottomLeftIcon})):null,this.entry.bottomRightIcon?i("span",{class:"bottom-right-icon inner-icon"},i("yoo-icon",{class:this.entry.bottomRightIcon})):null,this.entry.topLeftIcon?i("span",{class:"top-left-icon inner-icon"},i("yoo-icon",{class:this.entry.topLeftIcon})):null,this.entry.topRightIcon?i("span",{class:"top-right-icon inner-icon"},i("yoo-icon",{class:this.entry.topRightIcon})):null]:null}renderVideoContainerContent(){return i("yoo-videoplayer-core",Object.assign({},{videoPlayerCoreParameters:{source:this.entry.videoSrc,simpleMode:!0}}))}renderEntryDescription(){let s=!this.entry||this.entry.imgSrc||this.entry.document?2:5;return this.entry.mentions&&this.entry.mentions.length>0?i("yoo-mention-tag",{allowTruncate:!1,mentionedList:this.entry.mentions,description:d(this.entry.description)}):i("div",{class:"description"+(this.isAnswer()?" answer":"")},i("yoo-text-truncate",{maxLine:s,content:d(this.entry.description),onToggled:s=>this.viewMoreToggled.emit(s.detail),hideMoreButton:!1}))}renderQuestionTags(){return i("div",{class:"hashtags"},this.entry&&this.entry.tags&&this.entry.tags.map(s=>s&&i("span",{class:"hashtag",innerHTML:`#${s.toLowerCase()} `})))}renderTopActions(){return i("div",{class:"top-actions"},this.entry.topActions.map(s=>i("span",{class:s.textClass,onClick:t=>r(t,s.handler)},s.text)))}renderBottomActions(){return i("div",{class:"bottom-actions"},this.entry.bottomActions.map(s=>i("div",{class:s.cssClass,onClick:t=>r(t,s.handler)},s.icon&&i("yoo-icon",{class:s.icon+" "+s.iconClass}),s.text&&i("span",{class:`icon-text ${s.textClass||""}`},s.text))))}renderTopIcons(){return this.entry.icons.map(s=>i("span",{class:"top-icon "+(s.text?"text":""),onClick:t=>r(t,s.handler)},i("yoo-icon",{class:s.icon}),s.text&&i("span",{class:"icon-text"},s.text)))}onShowActions(s){s.stopPropagation(),s.preventDefault(),this.entry&&this.entry.actions&&this.entry.actions.length>0&&c(this.entry.actions)}renderTop(){return i("div",{class:"top"},i("yoo-avatar",{class:"list-m",avatarIconSize:"m",imgSrc:this.entry?this.entry.icon:null,user:this.entry?this.entry.user:null}),i("div",{class:"heading"},this.entry.headings?this.entry.headings.map(s=>i("span",null,s)):i("span",null,this.entry.heading||"")),!this.isAnswer()&&i("div",{class:"top-icons"+(this.entry.imgSrc?"":" no-img")},this.entry.icons&&this.entry.icons.length&&this.renderTopIcons()),!this.isAnswer()&&this.entry.topActions&&this.renderTopActions())}renderMedia(){if(this.entry.videoSrc||this.entry.imgSrc){let s=u(this.entry.videoSrc||this.entry.imgSrc);return i("div",{class:"image-container",onClick:s=>{s.stopPropagation()}},"video"===s?this.renderVideoContainerContent():this.renderCardImage(),this.renderMediaOverlay())}return null}render(){return i(o,{class:h()},i("div",{class:"outer-container"},this.renderTop(),i("div",{class:"content-container"},this.renderMedia(),this.entry&&i("div",{class:"under-img"+(this.entry.imgSrc?"":" no-img")},this.entry.description&&this.renderEntryDescription(),this.entry.document&&this.renderFile(),i("div",{class:"bottom-container"},this.entry.subheadings.map(s=>i("div",{class:"subheading"},s)),this.entry.bottomActions&&this.renderBottomActions()),this.entry.tags&&this.renderQuestionTags()))))}get host(){return n(this)}static get style(){return".iframe-root{top:0;right:0;bottom:0;left:0;position:absolute;color:var(--black);overflow-y:auto;scrollbar-width:none}.iframe-root yoo-app .wrapper{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;height:100%;width:100%}.iframe-root yoo-app .wrapper.center-center{-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%}.iframe-root::-webkit-scrollbar{display:none}:host{--border-bottom-content-container:1px solid var(--item-separator,hsla(0,0%,81.6%,0.4));--video-height:230px;display:block;border-bottom:1px solid var(--item-separator,hsla(0,0%,81.6%,.4));cursor:pointer}:host .outer-container{padding-bottom:.5rem}:host .outer-container .top{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center}:host .outer-container .top yoo-avatar{display:-ms-flexbox;display:flex;-ms-flex-pack:start;justify-content:flex-start;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}:host .outer-container .top .heading{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;padding:0 .5rem;color:var(--dark,#2b3648);font-size:var(--font-size-02,.875rem);font-weight:var(--font-weight-01,300);line-height:1.25}:host .outer-container .top .heading span:last-child{color:var(--stable,#adadad)}:host .outer-container .content-container .image-container{position:relative;margin:.5rem 0;color:var(--always-black,#000)}:host .outer-container .content-container .image-container .image{width:100%;height:100%;border-radius:5px;background:var(--stable-light,#f1f1f1);-webkit-box-shadow:0 2px 4px 0 rgba(40,47,54,.08);box-shadow:0 2px 4px 0 rgba(40,47,54,.08)}:host .outer-container .content-container .image-container .inner-icon{padding:.2em .45em;border-radius:50%;background-color:var(--always-light,#fff)}:host .outer-container .content-container .image-container .bottom-left-icon{bottom:.9375rem;left:.9375rem;position:absolute;z-index:2;-webkit-box-shadow:var(--attachment-icon-shadow,0 6px 18px 0 rgba(40,47,54,.08));box-shadow:var(--attachment-icon-shadow,0 6px 18px 0 rgba(40,47,54,.08))}:host .outer-container .content-container .image-container .bottom-right-icon{bottom:.9375rem;right:.9375rem;position:absolute;z-index:2}:host .outer-container .content-container .image-container .top-left-icon{top:.9375rem;left:.9375rem;position:absolute;z-index:2}:host .outer-container .content-container .image-container .top-right-icon{top:.9375rem;right:.9375rem;position:absolute;z-index:2}:host .outer-container .content-container .image-container .badge-bottom-left{bottom:.9375rem;left:.9375rem;position:absolute;z-index:2}:host .outer-container .content-container .image-container .badge-bottom-right{bottom:.9375rem;right:.9375rem;position:absolute;z-index:2}:host .outer-container .content-container .image-container .badge-top-left{top:.9375rem;left:.9375rem;position:absolute;z-index:2}:host .outer-container .content-container .image-container .badge-top-right{top:.9375rem;right:.9375rem;position:absolute;z-index:2}:host .outer-container .content-container .image-container .bottom-left-icon,:host .outer-container .content-container .image-container .bottom-right-icon,:host .outer-container .content-container .image-container .top-left-icon,:host .outer-container .content-container .image-container .top-right-icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:1.875rem;height:1.875rem;padding:0}:host .outer-container .content-container .content-container{padding:0}:host .outer-container .content-container .under-img{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;font-size:var(--font-size-03,1rem);line-height:2.25}:host .outer-container .content-container .under-img .bottom-container{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center}:host .outer-container .content-container .under-img .bottom-container .subheading{padding-right:.75rem;color:var(--black,#000);font-size:var(--font-size-02,.875rem)}:host .outer-container .content-container .under-img .bottom-container .subheading:first-child{color:var(--stable,#adadad)}:host .outer-container .content-container .under-img .description{position:relative;color:var(--dark,#2b3648);font-size:var(--font-size-03,1rem);line-height:normal;white-space:normal;overflow:hidden}:host .outer-container .content-container .under-img .description:not(.answer){font-weight:var(--font-weight-03,700)}:host .outer-container .content-container .under-img .description.photos{color:var(--stable,#adadad)}:host .outer-container .content-container .under-img .description.short-text .description-content .text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding-right:2.5rem}:host .outer-container .content-container .under-img .description.short-text .description-content .ellipsis{display:none}:host .outer-container .content-container .under-img .description.short-text .description-content .more-button{display:block;position:absolute;right:0;bottom:0;width:2.5rem;padding-left:2px;background-color:var(--light,#fff);color:var(--text-color,#807f83);font-size:var(--font-size-02,.875rem)}:host .outer-container .content-container .under-img .description.short-text-no-img{height:96px;max-height:96px}:host .outer-container .content-container .under-img .description.short-text-no-img .description-content{max-height:inherit;color:inherit;line-height:inherit;text-overflow:ellipsis;white-space:normal;overflow:hidden}:host .outer-container .content-container .under-img .description.short-text-no-img .description-content .text{max-height:inherit}:host .outer-container .content-container .under-img .description.short-text-no-img .description-content .ellipsis{display:block;position:absolute;right:0;bottom:0;width:1rem;padding-right:2.5rem;padding-left:.3125rem;background-color:var(--light,#fff)}:host .outer-container .content-container .under-img .description.short-text-no-img .description-content .more-button{display:block;position:absolute;right:0;bottom:0;width:2.5rem;padding-left:2px;background-color:var(--light,#fff);color:var(--text-color,#807f83);font-size:var(--font-size-02,.875rem)}:host .outer-container .content-container .under-img .description.long-text .description-content .more-button{color:var(--text-color,#807f83)}:host .outer-container .content-container .hashtags{font-size:var(--font-size-02,.875rem);line-height:1.2rem}:host .outer-container .content-container .hashtags .hashtag{margin-left:2px}:host .outer-container .content-container .bottom-actions{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:end;justify-content:flex-end;font-size:var(--font-size-02,.875rem)}:host .outer-container .content-container .bottom-actions div{padding:0 .625rem}:host .outer-container .content-container .bottom-actions div.reply{padding-left:0;color:var(--danger-light,#f46885)}:host .outer-container .content-container .bottom-actions div.verified{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding-left:0}:host .outer-container .content-container .bottom-actions div.verified yoo-icon{color:var(--danger-light,#f46885)}:host .outer-container .content-container .bottom-actions div.verified .icon-text{color:var(--black,#000)}:host .outer-container .content-container .bottom-actions div.like{margin-right:0;margin-left:auto;padding:0}:host .outer-container .content-container .bottom-actions div.more{margin-left:0;padding-right:0}:host .outer-container .content-container .bottom-actions div .icon-text{padding:0 .3125rem}:host .outer-container .content-container .bottom-actions div:last-child{margin-right:0}:host .top-icons{display:-ms-flexbox;display:flex;padding-top:.625rem;padding-bottom:.625rem}:host .top-icons .top-icon{padding-top:.2rem;padding-right:.75rem;color:var(--black,#000)}:host .top-icons .top-icon yoo-icon{font-size:var(--font-size-04,1.125rem)}:host .top-icons .top-icon.text{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-pack:end;justify-content:flex-end;margin-right:0;padding-right:var(--padding-5,.3125rem);font-size:var(--font-size-01,.75rem)}:host .top-icons .top-icon.text .icon-text{-ms-flex-item-align:center;align-self:center;padding-right:var(--padding-5,.3125rem)}:host .top-icons .top-icon.text yoo-icon{font-size:var(--font-size-05,1.25rem)}:host .top-actions{color:var(--dark,#2b3648)}:host .top-actions span{padding-top:var(--padding-5,.3125rem);padding-bottom:var(--padding-5,.3125rem);font-size:var(--font-size-03,1rem)}:host(.questions) .outer-container .content-container .under-img,:host(.questions) .outer-container .top{padding-right:var(--padding-15,.9375rem);padding-left:var(--padding-15,.9375rem)}:host(.questions) .outer-container .content-container .image-container{height:100%;margin:0;padding-top:var(--padding-15,.9375rem)}:host(.questions) .outer-container .content-container .image-container yoo-videoplayer-core{height:var(--video-height)}:host(.questions) .outer-container .content-container .image-container .image{border-radius:none}:host(.questions) .outer-container .content-container .under-img{padding-top:var(--padding-15,.9375rem)}:host(.questions) .outer-container .content-container .under-img .bottom-container yoo-icon.yo-check{padding-right:var(--padding-5,.3125rem);color:var(--danger-light,#f46885)}:host(.questions) .outer-container .content-container .under-img .bottom-container yoo-icon.yo-like{position:absolute;right:var(--padding-30,1.875rem);color:var(--black,#000);font-size:var(--font-size-04,1.125rem)}:host(.questionsAnswers){--border-bottom-content-container:0px}:host(.questionsAnswers) .outer-container{padding-bottom:.75rem}:host(.questionsAnswers) .outer-container .top .heading{font-size:var(--font-size-02,.875rem)}:host(.questionsAnswers) .outer-container .content-container{padding-top:.625rem}:host(.questionsAnswers) .outer-container .content-container .under-img{line-height:1}:host(.questionsAnswers) .outer-container .content-container .under-img .description{margin-bottom:.625rem}:host(.questionsAnswers) .outer-container .content-container .under-img .bottom-container{padding:.25rem 0;font-size:var(--font-size-02,.875rem)}:host(.questionsAnswers) .outer-container .content-container .under-img .bottom-container yoo-icon{font-size:var(--font-size-04,1.125rem)}:host(.questionsAnswers) .outer-container .content-container .under-img .bottom-container .subheading{padding-right:1rem}:host(.questionsAnswers) .outer-container .content-container .under-img .bottom-container .bottom-actions{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}:host(.questionsAnswers) .outer-container .content-container .under-img .bottom-container .bottom-actions .reply{-ms-flex:1;flex:1;color:var(--danger-light,#f46885)}:host(.questionsAnswers) .outer-container .content-container .under-img .bottom-container .bottom-actions .like{display:-ms-flexbox;display:flex;-ms-flex-pack:distribute;justify-content:space-around;color:var(--dark,#2b3648)}:host(.questionsAnswers) .outer-container .content-container .under-img .bottom-container .bottom-actions .like .icon-text{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding:0 .5rem;font-size:var(--font-size-03,1rem)}:host(.questionsAnswers) .outer-container .content-container .under-img .bottom-container .bottom-actions .more{display:-ms-flexbox;display:flex;-ms-flex:0.125;flex:0.125;-ms-flex-pack:center;justify-content:center}:host(.boost) .hashtags{color:var(--danger-light,#f46885)}:host(.operations) .hashtags{color:var(--success,#04cc99)}:host(.offline) .outer-container{opacity:.7}:host(.offline):after,:host(.offline):before{content:\"\";position:absolute;top:0;right:0;border-color:transparent;border-style:solid}:host(.offline):after{border-width:.5em;border-right-color:var(--energized,#fed05b);border-top-color:var(--energized,#fed05b)}"}};export{p as yoo_card_question};