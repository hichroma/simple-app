import{r as t,c as s,h as o,g as i}from"./p-0d847530.js";const e=class{constructor(o){t(this,o),this.update=s(this,"update",7)}componentWillLoad(){this.missionState=this.mission}onUpdateTodo(t){t.stopPropagation(),this.missionState.todo.values=t.detail,this.missionState=Object.assign({},this.missionState),this.update.emit(this.missionState)}render(){return this.missionState.todo&&this.missionState.todo.values?o("yoo-form-todo-single",{type:"mission",parentScroll:this.parentScroll,readonly:this.readonly,values:this.missionState.todo.values,onUpdate:t=>this.onUpdateTodo(t)}):null}get host(){return i(this)}static get style(){return".iframe-root{top:0;right:0;bottom:0;left:0;position:absolute;color:var(--black);overflow-y:auto;scrollbar-width:none}.iframe-root yoo-app .wrapper{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;height:100%;width:100%}.iframe-root yoo-app .wrapper.center-center{-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%}.iframe-root::-webkit-scrollbar{display:none}"}};export{e as yoo_mission_todo};