"use strict";(self.webpackChunkplumejs_example_repo=self.webpackChunkplumejs_example_repo||[]).push([[143],{143:function(n,i,t){t.r(i),t.d(i,{NotificationContainerComponent:function(){return a}});var e=t(655),s=t(394),o=t(217),r=t(346);let a=class{renderer;_notifications=[];onDismiss=new o.x;constructor(n){this.renderer=n}setNotifications(n){this._notifications.push(n),n.index=this._notifications.length-1,this.renderer.update()}dismiss(n){this._notifications=this._notifications.filter((i=>{if(i.index!==n)return i})),this.renderer.update(),this.onDismiss.next(this._notifications.length)}_renderNotification(n,i){n.setProps({notification:i}),i.message.autoHide&&setTimeout((()=>{i.dismiss()}),2e3)}_renderNotifications(){return this._notifications.length>0?this._notifications.map((n=>{const i={message:n,dismiss:()=>{this.dismiss(n.index)}};return s.dy`
          <ui-notification-message
            onrendered=${n=>{this._renderNotification(n.target,i)}}
          ></ui-notification-message>
        `})):s.dy`<div></div>`}unmount(){this.onDismiss.unsubscribe()}render(){return s.dy` <div class="notifications_wrapper" part="notifications_wrapper">${this._renderNotifications()}</div> `}};a=(0,e.gn)([(0,s.wA)({selector:"ui-notification-container",styles:r.Z,deps:[s.Th]}),(0,e.w6)("design:paramtypes",[s.Th])],a)},346:function(n,i,t){var e=t(537),s=t.n(e),o=t(645),r=t.n(o)()(s());r.push([n.id,".notifications_wrapper{position:fixed;top:3.5rem;right:0;padding:10px}@media(max-width: 576px){.notifications_wrapper{top:0;right:0;left:0;margin:0 auto;display:flex;flex-direction:column;justify-content:center;align-items:center;z-index:100}}","",{version:3,sources:["webpack://./node_modules/@plumejs/ui/dist/mjs/src/ui/notifications/notification-container.component.scss","webpack://./node_modules/@plumejs/ui/dist/mjs/src/_mixins.scss"],names:[],mappings:"AAEA,uBACE,cAAA,CACA,UAAA,CACA,OAAA,CACA,YAAA,CCJM,yBDQN,uBACE,KAAA,CACA,OAAA,CACA,MAAA,CACA,aAAA,CACA,YAAA,CACA,qBAAA,CACA,sBAAA,CACA,kBAAA,CACA,WAAA,CAAA",sourcesContent:["@import '../../mixins';\n\n.notifications_wrapper {\n  position: fixed;\n  top: 3.5rem;\n  right: 0;\n  padding: 10px;\n}\n\n@include breakpoint(sm) {\n  .notifications_wrapper {\n    top: 0;\n    right: 0;\n    left: 0;\n    margin: 0 auto;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    z-index: 100;\n  }\n}\n","@mixin breakpoint($point) {\n    @if $point == sm {\n        @media (max-width: 576px) {\n            @content;\n        }\n    }\n    @else if $point == md {\n        @media (min-width: 577px) and (max-width: 992px) {\n            @content;\n        }\n    }\n    @else if $point == lg {\n        @media (min-width: 993px) and (max-width: 1200px) {\n            @content;\n        }\n    }\n}\n\n@mixin breakpoint-up($point) {\n    @if $point == sm {\n        @media (max-width: 576px) {\n            @content;\n        }\n    }\n    @else if $point == md {\n        @media (min-width: 577px) {\n            @content;\n        }\n    }\n    @else if $point == lg {\n        @media (min-width: 993px) {\n            @content;\n        }\n    }\n}"],sourceRoot:""}]),i.Z=r}}]);
//# sourceMappingURL=../sourcemaps/143.js.map