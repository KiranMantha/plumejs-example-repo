var c=Object.defineProperty;var f=(t,i,e)=>i in t?c(t,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[i]=e;var s=(t,i,e)=>(f(t,typeof i!="symbol"?i+"":i,e),e);import{h as n,b as m,C as d,R as o,c as h}from"./index-3ba15bc1.js";import{a}from"./index-3c220a8d.js";const p="";let r=class{constructor(i){s(this,"renderer");s(this,"ObservedProperties",["notification"]);s(this,"notification");this.renderer=i}mount(){this.renderer.emitEvent("rendered")}onDismiss(i){i.preventDefault(),this.notification.dismiss()}render(){return this.notification&&this.notification.message.content?n`
        <div
          part="notification"
          class="notification ${this.notification.message.type===a.Info?"is-info":this.notification.message.type===a.Danger?"is-danger":""}"
        >
          ${this.notification.message.content}
          <button
            class="dismiss ${this.notification.message.autoHide?"hide-notify":""}"
            onclick=${i=>{this.onDismiss(i)}}
          >
            &times;
          </button>
        </div>
      `:n``}};r=m([d({selector:"ui-notification-message",standalone:!0,styles:p,deps:[o]}),h("design:paramtypes",[o])],r);export{r as NotificationMessage};
