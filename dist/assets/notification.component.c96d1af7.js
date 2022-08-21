var a=Object.defineProperty;var d=(t,i,o)=>i in t?a(t,i,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[i]=o;var n=(t,i,o)=>(d(t,typeof i!="symbol"?i+"":i,o),o);import{_ as c,b as f}from"./index.0b3a9d7d.js";import{h as e,C as m,R as s}from"./index.adbef661.js";var l=(()=>`.notification{font-size:inherit;font-family:inherit;display:flex;justify-content:space-between;align-items:center;position:relative;margin-bottom:10px;right:0;z-index:1000;padding:10px;min-width:15rem;max-width:18rem;border-radius:2px;overflow:hidden;box-shadow:0 .25rem .75rem #0003}.notification.is-info{background-color:#4a89dc}.notification.is-info .dismiss{background-color:#3362cd;border-color:#005cbf}.notification.is-danger{background-color:#da4453}.notification.is-danger .dismiss{background-color:#c82333;border-color:#bd2130}.notification.is-info,.notification.is-danger{color:#fff}.notification .dismiss{outline:0;border:none;cursor:pointer;border-radius:2px;color:#fff;width:auto;padding:4px 8px;line-height:1;margin:0}.notification .dismiss.hide-notify{display:none}
`)();let r=class{constructor(i){n(this,"renderer");n(this,"ObservedProperties",["notification"]);n(this,"notification");this.renderer=i}mount(){this.renderer.emitEvent("rendered")}onDismiss(i){i.preventDefault(),this.notification.dismiss()}render(){return this.notification&&this.notification.message.content?e`
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
      `:e`<div></div>`}};r=c([m({selector:"ui-notification-message",standalone:!0,styles:l,deps:[s]}),f("design:paramtypes",[s])],r);export{r as NotificationMessage};
