var c=Object.defineProperty;var f=(e,i,t)=>i in e?c(e,i,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[i]=t;var n=(e,i,t)=>(f(e,typeof i!="symbol"?i+"":i,t),t);import{_ as p,b as m}from"./index.0b3a9d7d.js";import{h as s,C as h,R as o}from"./index.adbef661.js";import{S as u}from"./Subject.10e19aa0.js";var l=(()=>`.notifications_wrapper{position:fixed;top:3.5rem;right:0;padding:10px}@media (max-width: 576px){.notifications_wrapper{top:0;right:0;left:0;margin:0 auto;display:flex;flex-direction:column;justify-content:center;align-items:center;z-index:100}}
`)();let r=class{constructor(i){n(this,"renderer");n(this,"_notifications",[]);n(this,"onDismiss",new u);this.renderer=i}setNotifications(i){this._notifications.push(i),i.index=this._notifications.length-1,this.renderer.update()}dismiss(i){this._notifications=this._notifications.filter(t=>{if(t.index!==i)return t}),this.renderer.update(),this.onDismiss.next(this._notifications.length)}_renderNotification(i,t){i.setProps({notification:t}),t.message.autoHide&&setTimeout(()=>{t.dismiss()},2e3)}_renderNotifications(){return this._notifications.length>0?this._notifications.map(t=>{const a={message:t,dismiss:()=>{this.dismiss(t.index)}};return s`
          <ui-notification-message
            onrendered=${d=>{this._renderNotification(d.target,a)}}
          ></ui-notification-message>
        `}):s`<div></div>`}unmount(){this.onDismiss.unsubscribe()}render(){return s` <div class="notifications_wrapper" part="notifications_wrapper">${this._renderNotifications()}</div> `}};r=p([h({selector:"ui-notification-container",standalone:!0,styles:l,deps:[o]}),m("design:paramtypes",[o])],r);export{r as NotificationContainerComponent};
