import{r as s,c as i,h as t,g as n}from"./p-0d847530.js";import{A as e,t as l,cg as a,w as c,N as o,z as r}from"./p-384bfcf6.js";import"./p-0f3d65ca.js";import"./p-8cff990b.js";import"./p-0d62bf9d.js";import{dd as u}from"./p-d70b188c.js";import"./p-815d6c40.js";const h=class{constructor(t){s(this,t),this.selectLocation=i(this,"selectLocation",7),this.selectUser=i(this,"selectUser",7),this.selectValidator=i(this,"selectValidator",7),this.showScoreChart=i(this,"showScoreChart",7)}componentWillLoad(){this.isMobile=e()}onScoreSelect(s){this.showScoreChart.emit(s)}renderPriority(){return this.mission.priority?t("li",{class:"menu-item"},t("div",{class:"menu-left"},t("span",{class:"menu-icon"},t("yoo-icon",{class:"yo-priority"})),t("div",{class:"border"})),t("div",{class:"menu-right"},t("div",{class:"menu-title"},l("PRIORITY")),this.isMobile?t("div",{class:"menu-content"},"P",this.mission.priority):t("yoo-form-star-rating",{value:this.mission.priority,readonly:!0}))):null}renderMissionOwner(){return t("li",{class:"menu-item",onClick:()=>this.selectUser.emit()},t("div",{class:"menu-left"},t("span",{class:"menu-icon"},t("yoo-icon",{class:"yo-user"})),t("div",{class:"border"})),t("div",{class:"menu-right"},t("div",{class:"menu-title"},l("visit"===this.mission.type?"USER":"FINISHEDBY")),t("div",{class:"menu-content menu-author"},this.mission.needsRebooking&&this.mission.assigneeOwnerDisplayName?t("span",{class:"text"},this.mission.assigneeOwnerDisplayName):[this.mission.owner&&t("yoo-avatar",{class:"s",avatarIconSize:"s",user:this.mission.owner}),t("span",{class:"text"},this.mission.ownerDisplayName),this.mission&&this.mission.finishedDate&&t("div",{class:"mission-date"},u.dateFormat.transform(this.mission.finishedDate,"L LT"))])))}renderMissionDuration(){return t("li",{class:"menu-item"},t("div",{class:"menu-left"},t("span",{class:"menu-icon"},t("yoo-icon",{class:"yo-date-time"})),t("div",{class:"border"})),t("div",{class:"menu-right"},t("div",{class:"menu-title"},l("DURATION")),t("div",{class:"menu-content"},a(c(new Date,"minutes",this.mission.actualDuration),!0))))}renderMissionValidator(){return!this.mission.validatedBy||!0!==this.mission.validated&&!1!==this.mission.validated?null:t("li",{class:"menu-item",onClick:()=>this.selectValidator.emit()},t("div",{class:"menu-left"},t("span",{class:"menu-icon"},t("yoo-icon",!1===this.mission.validated?{class:"yo-rejector"}:{class:"yo-validator"})," "),t("div",{class:"border"})),t("div",{class:"menu-right"},t("div",{class:"menu-title"},l(!1===this.mission.validated?"REJECTEDBY":"VALIDATEDBY")),t("div",{class:"menu-content menu-author"},this.mission.validatedByUser?t("yoo-avatar",{class:"s",avatarIconSize:"s",user:this.mission.validatedByUser}):null,t("span",{class:"text"}," ",this.mission.validatedByUser?this.mission.validatedByUser.firstName+" "+this.mission.validatedByUser.lastName:this.mission.validatedBy),this.mission&&this.mission.validatedDate?t("div",{class:"mission-date"},u.dateFormat.transform(this.mission.validatedDate,"L")):null)))}renderMissionLocation(){return t("li",{class:"menu-item",onClick:()=>this.selectLocation.emit()},t("div",{class:"menu-left"},t("span",{class:"menu-icon"},t("yoo-icon",{class:"yo-pin"})),t("div",{class:"border"})),t("div",{class:"menu-right"},t("div",{class:"menu-title"},l("STORE")),t("div",{class:"menu-content"},(this.mission.location?this.mission.location.title:"")||this.mission.address)))}renderVisitDescription(){return t("li",{class:"menu-item"},t("div",{class:"menu-left"},t("span",{class:"menu-icon"},t("yoo-icon",{class:"yo-mission"})),t("div",{class:"border"})),t("div",{class:"menu-right"},t("div",{class:"menu-title"},l("DESCRIPTION")),t("div",{class:"menu-content"},this.mission.visitDescription)))}renderVisitType(){return t("li",{class:"menu-item"},t("div",{class:"menu-left"},t("span",{class:"menu-icon"},t("yoo-icon",{class:"yo-flag"})),t("div",{class:"border"})),t("div",{class:"menu-right"},t("div",{class:"menu-title"},l("VISITTYPE")),t("div",{class:"menu-content",innerHTML:l(this.mission.visitType)})))}renderAudit(){return this.hasAudit?t("li",{class:"menu-item"},t("div",{class:"menu-left"},t("span",{class:"menu-icon"},t("yoo-icon",{class:"yo-step"})),t("div",{class:"border"})),t("div",{class:"menu-right"},t("div",{class:"menu-title"},l("AUDIT")),t("div",{class:"menu-content"},this.satisfactoryCount>0?t("div",{class:"menu-content-scoring success"},t("span",null,o("SATISFACTORY"),":"),t("span",{class:"float"}," ",this.satisfactoryCount)):null,this.unsatisfactoryCount>0?t("div",{class:"menu-content-scoring danger"},t("span",null,o("UNSATISFACTORY"),":"),t("span",{class:"float"}," ",this.unsatisfactoryCount)):null,this.nonapplicableCount>0?t("div",{class:"menu-content-scoring black"},t("span",null,o("NONAPPLICABLE"),":"),t("span",{class:"float"}," ",this.nonapplicableCount)):null))):null}renderUnvalidatedReason(){if(this.mission.unvalidatedReason)return t("li",{class:"menu-item"},t("div",{class:"menu-left"},t("span",{class:"menu-icon"},t("yoo-icon",{class:"yo-reason"})),t("div",{class:"border"})),t("div",{class:"menu-right"},t("div",{class:"menu-title"},l(!1===this.mission.validated?"REASON":"COMMENTNOUN")),t("div",{class:"menu-content",innerHTML:this.mission.unvalidatedReason})))}render(){const s=r().user&&r().user.locationRef&&r().user.locationRef===this.mission.locationRef;return this.mission?t("div",{class:"mission-results"},t("div",{class:"content"},t("yoo-mission-heading",{mission:this.mission}),t("ul",{class:"menu"},s||!this.mission.location&&!this.mission.address?null:this.renderMissionLocation(),this.mission.ownerDisplayName?this.renderMissionOwner():null,this.mission.actualDuration>0?this.renderMissionDuration():null,this.mission.skipValidation?null:this.renderMissionValidator(),this.renderPriority(),"visit"===this.mission.type&&this.mission.visitType?this.renderVisitType():null,"visit"===this.mission.type?this.renderVisitDescription():null,this.renderUnvalidatedReason(),this.renderAudit()),t("yoo-mission-score",{charts:this.charts,networkScore:this.networkScore}))):null}get host(){return n(this)}static get style(){return".iframe-root{top:0;right:0;bottom:0;left:0;position:absolute;color:var(--black);overflow-y:auto;scrollbar-width:none}.iframe-root yoo-app .wrapper{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;height:100%;width:100%}.iframe-root yoo-app .wrapper.center-center{-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%}.iframe-root::-webkit-scrollbar{display:none}:host{height:100%;font-size:var(--font-size-03,1rem);font-weight:var(--font-weight-02,400)}:host .mission-results .content .menu{list-style:none outside none;background:none repeat scroll 0 0 transparent;border:0 none;font-size:100%;margin:0;outline:0 none;vertical-align:baseline;-webkit-tap-highlight-color:transparent;margin-top:1rem;padding:0;list-style:none}:host .mission-results .content .menu .menu-item{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row}:host .mission-results .content .menu .menu-item .menu-left{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center}:host .mission-results .content .menu .menu-item .menu-left .menu-icon{height:1.875rem;width:1.875rem}:host .mission-results .content .menu .menu-item .menu-left .menu-icon yoo-icon{height:1.875rem;width:1.875rem;font-size:var(--font-size-04,1.125rem);display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;background-color:var(--success,#04cc99);color:var(--always-light,#fff);border-radius:50%;line-height:1.875rem;padding:0}:host .mission-results .content .menu .menu-item .menu-left .border{width:1px;height:100%;background-color:var(--stable-alt,#d0d0d0)}:host .mission-results .content .menu .menu-item .menu-right{margin-left:.625rem;width:100%;overflow:hidden}:host .mission-results .content .menu .menu-item .menu-right .menu-title{font-weight:var(--font-weight-03,700);line-height:1.125rem;margin-top:.375rem}:host .mission-results .content .menu .menu-item .menu-right .menu-content{margin-top:.25rem;margin-bottom:1.25rem;color:var(--text-color,#807f83)}:host .mission-results .content .menu .menu-item .menu-right .menu-content a,:host .mission-results .content .menu .menu-item .menu-right .menu-content abbr,:host .mission-results .content .menu .menu-item .menu-right .menu-content acronym,:host .mission-results .content .menu .menu-item .menu-right .menu-content address,:host .mission-results .content .menu .menu-item .menu-right .menu-content applet,:host .mission-results .content .menu .menu-item .menu-right .menu-content big,:host .mission-results .content .menu .menu-item .menu-right .menu-content blockquote,:host .mission-results .content .menu .menu-item .menu-right .menu-content body,:host .mission-results .content .menu .menu-item .menu-right .menu-content caption,:host .mission-results .content .menu .menu-item .menu-right .menu-content cite,:host .mission-results .content .menu .menu-item .menu-right .menu-content code,:host .mission-results .content .menu .menu-item .menu-right .menu-content dd,:host .mission-results .content .menu .menu-item .menu-right .menu-content del,:host .mission-results .content .menu .menu-item .menu-right .menu-content dfn,:host .mission-results .content .menu .menu-item .menu-right .menu-content div,:host .mission-results .content .menu .menu-item .menu-right .menu-content dl,:host .mission-results .content .menu .menu-item .menu-right .menu-content dt,:host .mission-results .content .menu .menu-item .menu-right .menu-content em,:host .mission-results .content .menu .menu-item .menu-right .menu-content fieldset,:host .mission-results .content .menu .menu-item .menu-right .menu-content font,:host .mission-results .content .menu .menu-item .menu-right .menu-content form,:host .mission-results .content .menu .menu-item .menu-right .menu-content h1,:host .mission-results .content .menu .menu-item .menu-right .menu-content h2,:host .mission-results .content .menu .menu-item .menu-right .menu-content h3,:host .mission-results .content .menu .menu-item .menu-right .menu-content h4,:host .mission-results .content .menu .menu-item .menu-right .menu-content h5,:host .mission-results .content .menu .menu-item .menu-right .menu-content h6,:host .mission-results .content .menu .menu-item .menu-right .menu-content html,:host .mission-results .content .menu .menu-item .menu-right .menu-content iframe,:host .mission-results .content .menu .menu-item .menu-right .menu-content img,:host .mission-results .content .menu .menu-item .menu-right .menu-content ins,:host .mission-results .content .menu .menu-item .menu-right .menu-content kbd,:host .mission-results .content .menu .menu-item .menu-right .menu-content label,:host .mission-results .content .menu .menu-item .menu-right .menu-content legend,:host .mission-results .content .menu .menu-item .menu-right .menu-content li,:host .mission-results .content .menu .menu-item .menu-right .menu-content object,:host .mission-results .content .menu .menu-item .menu-right .menu-content ol,:host .mission-results .content .menu .menu-item .menu-right .menu-content p,:host .mission-results .content .menu .menu-item .menu-right .menu-content pre,:host .mission-results .content .menu .menu-item .menu-right .menu-content q,:host .mission-results .content .menu .menu-item .menu-right .menu-content s,:host .mission-results .content .menu .menu-item .menu-right .menu-content samp,:host .mission-results .content .menu .menu-item .menu-right .menu-content small,:host .mission-results .content .menu .menu-item .menu-right .menu-content span,:host .mission-results .content .menu .menu-item .menu-right .menu-content strike,:host .mission-results .content .menu .menu-item .menu-right .menu-content strong,:host .mission-results .content .menu .menu-item .menu-right .menu-content sub,:host .mission-results .content .menu .menu-item .menu-right .menu-content sup,:host .mission-results .content .menu .menu-item .menu-right .menu-content table,:host .mission-results .content .menu .menu-item .menu-right .menu-content tbody,:host .mission-results .content .menu .menu-item .menu-right .menu-content td,:host .mission-results .content .menu .menu-item .menu-right .menu-content tfoot,:host .mission-results .content .menu .menu-item .menu-right .menu-content th,:host .mission-results .content .menu .menu-item .menu-right .menu-content thead,:host .mission-results .content .menu .menu-item .menu-right .menu-content tr,:host .mission-results .content .menu .menu-item .menu-right .menu-content tt,:host .mission-results .content .menu .menu-item .menu-right .menu-content ul,:host .mission-results .content .menu .menu-item .menu-right .menu-content var{margin:0;padding:0;border:0;outline:0;font-weight:inherit;font-style:inherit;font-size:100%;font-family:inherit;vertical-align:baseline;-webkit-margin-before:0;-webkit-margin-after:0;-webkit-margin-start:0;-webkit-margin-end:0}:host .mission-results .content .menu .menu-item .menu-right .menu-title{margin-bottom:.625rem}:host .mission-results .content .menu .menu-item .menu-right .menu-content span{margin-right:1.25rem}:host .mission-results .content .menu .menu-item .menu-right .menu-content yoo-avatar{margin-right:.3125rem}:host .mission-results .content .menu .menu-item .menu-right .menu-content{margin-bottom:var(--padding-15,.9375rem);line-height:1.25rem}:host .mission-results .content .menu .menu-item .menu-right .menu-content .menu-content-scoring{margin-bottom:.8rem;color:var(--dark,#2b3648);line-height:1.125rem}:host .mission-results .content .menu .menu-item .menu-right .menu-content .menu-content-scoring .float{margin-right:0;float:right}:host .mission-results .content .menu .menu-item .menu-right .menu-content .text{-ms-flex:1;flex:1;word-break:break-word}:host .mission-results .content .menu .menu-item .menu-right .menu-content .mission-date{color:var(--text-color,#807f83)}:host .mission-results .content .menu .menu-item .menu-right .menu-author{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row}:host .mission-results .content .menu .menu-item:last-child .menu-left .border{display:none}:host .mission-results .content .menu yoo-mission-contents:last-child{--display-border:none}:host(.inline){display:block;height:auto}"}};export{h as yoo_mission_results};