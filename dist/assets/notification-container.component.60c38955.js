var d=Object.defineProperty;var f=(s,i,t)=>i in s?d(s,i,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[i]=t;var e=(s,i,t)=>(f(s,typeof i!="symbol"?i+"":i,t),t);import{h as n,_ as h,C as m,a as o,b as u}from"./vendor.b39eeca7.js";import{S as p}from"./Subject.43d35081.js";var _="";let r=class{constructor(i){e(this,"renderer");e(this,"_notifications",[]);e(this,"onDismiss",new p);this.renderer=i}setNotifications(i){this._notifications.push(i),i.index=this._notifications.length-1,this.renderer.update()}dismiss(i){this._notifications=this._notifications.filter(t=>{if(t.index!==i)return t}),this.renderer.update(),this.onDismiss.next(this._notifications.length)}_renderNotification(i,t){i.setProps({notification:t}),t.message.autoHide&&setTimeout(()=>{t.dismiss()},2e3)}_renderNotifications(){return this._notifications.length>0?this._notifications.map(t=>{const a={message:t,dismiss:()=>{this.dismiss(t.index)}};return n`
          <ui-notification-message
            onrendered=${c=>{this._renderNotification(c.target,a)}}
          ></ui-notification-message>
        `}):n`<div></div>`}unmount(){this.onDismiss.unsubscribe()}render(){return n` <div class="notifications_wrapper" part="notifications_wrapper">${this._renderNotifications()}</div> `}};r=h([m({selector:"ui-notification-container",styles:_,deps:[o]}),u("design:paramtypes",[o])],r);export{r as NotificationContainerComponent};
