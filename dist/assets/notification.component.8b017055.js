var r=Object.defineProperty;var c=(t,i,e)=>i in t?r(t,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[i]=e;var s=(t,i,e)=>(c(t,typeof i!="symbol"?i+"":i,e),e);import{h as n,_ as d,C as f,a as o,b as m}from"./vendor.75761d15.js";var h="";let a=class{constructor(i){s(this,"renderer");s(this,"ObservedProperties",["notification"]);s(this,"notification");this.renderer=i}mount(){this.renderer.emitEvent("rendered")}onDismiss(i){i.preventDefault(),this.notification.dismiss()}render(){return this.notification&&this.notification.message.content?n`
        <div
          part="notification"
          class="notification ${this.notification.message.type==="info"?"is-info":this.notification.message.type==="danger"?"is-danger":""}"
        >
          ${this.notification.message.content}
          <button
            class="dismiss ${this.notification.message.autoHide?"hide-notify":""}"
            onclick=${i=>{this.onDismiss(i)}}
          >
            &times;
          </button>
        </div>
      `:n`<div></div>`}};a=d([f({selector:"ui-notification-message",styles:h,deps:[o]}),m("design:paramtypes",[o])],a);export{a as NotificationMessage};
