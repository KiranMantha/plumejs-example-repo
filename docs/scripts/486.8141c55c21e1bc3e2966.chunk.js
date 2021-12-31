"use strict";(self.webpackChunkplumejs_example_repo=self.webpackChunkplumejs_example_repo||[]).push([[486],{486:(n,o,t)=>{t.r(o),t.d(o,{ModalComponent:()=>d});var i=t(655),A=t(394),e=t(217),a=t(32);let d=class ModalComponent{domSrvc;ObservedProperties=["modalData"];modalData;onClose=new e.x;onOpen=new e.x;modalContentRef;transitionDuration=300;constructor(n){this.domSrvc=n}mount(){this.domSrvc.onTransitionEnd(this.modalContentRef,(()=>{this.onOpen.next(),this.onOpen.complete()}),this.transitionDuration)}unmount(){this.onOpen.unsubscribe(),this.onClose.unsubscribe()}_close(){this.domSrvc.onTransitionEnd(this.modalContentRef,(()=>{this.onClose.next(),this.onClose.complete()}),this.transitionDuration),this.modalContentRef.classList.remove("in")}_renderModalCloseButton(){return this.modalData.hideDefaultCloseButton?A.dy``:A.dy`
        <button
          class="btn-close"
          onclick=${()=>{this._close()}}
        >
          &times;
        </button>
      `}render(){return A.dy`
      <div class="modalDialog" part="modalDialog">
        <div
          ref=${n=>{this.modalContentRef=n}}
          class="modalDialog-content in out"
        >
          <div class="title">
            ${this.modalData?this.modalData.title:""} ${this.modalData&&this._renderModalCloseButton()}
          </div>
          <div>${this.modalData&&this.modalData.bodyTemplate}</div>
        </div>
      </div>
    `}};d=(0,i.gn)([(0,A.wA)({selector:"ui-modal-dialog",styles:a.Z}),(0,i.w6)("design:paramtypes",[A.B_])],d)},32:(n,o,t)=>{t.d(o,{Z:()=>d});var i=t(537),A=t.n(i),e=t(645),a=t.n(e)()(A());a.push([n.id,".modalDialog{position:fixed;top:0;bottom:0;left:0;right:0;z-index:1000;width:100%;height:100%;overflow-x:hidden;overflow-y:auto;background:rgba(0,0,0,.52);animation:modalIn .5s}.modalDialog .modalDialog-content{font-size:inherit;font-family:inherit;color:inherit;position:relative;background:#fff;z-index:1;width:auto;max-width:100%;margin:.5rem;box-shadow:0 5px 15px rgba(0,0,0,.5);border:1px solid rgba(0,0,0,.2);border-radius:2px;padding:10px}.modalDialog .modalDialog-content.out{transition:opacity .3s ease-out}.modalDialog .modalDialog-content.out:not(.in){opacity:0}.modalDialog .modalDialog-content .btn-close{display:inline;width:auto;color:inherit;cursor:pointer;border:none;outline:none;background:#fff;font-weight:600;font-size:1.5rem;line-height:1;position:absolute;right:0;top:0}@keyframes modalIn{from{opacity:0}to{opacity:1}}:host{width:100%}@media(min-width: 577px){.modalDialog .modalDialog-content{max-width:600px;margin:1.75rem auto}}","",{version:3,sources:["webpack://./node_modules/@plumejs/ui/dist/mjs/src/ui/modal/modal-component/modal.component.scss","webpack://./node_modules/@plumejs/ui/dist/mjs/src/_mixins.scss"],names:[],mappings:"AAEA,aACE,cAAA,CACA,KAAA,CACA,QAAA,CACA,MAAA,CACA,OAAA,CACA,YAAA,CACA,UAAA,CACA,WAAA,CACA,iBAAA,CACA,eAAA,CACA,0BAAA,CACA,qBAAA,CAEA,kCACE,iBAAA,CACA,mBAAA,CACA,aAAA,CACA,iBAAA,CACA,eAAA,CACA,SAAA,CACA,UAAA,CACA,cAAA,CACA,YAAA,CACA,oCAAA,CACA,+BAAA,CACA,iBAAA,CACA,YAAA,CAEA,sCACE,+BAAA,CAEA,+CACE,SAAA,CAIJ,6CACE,cAAA,CACA,UAAA,CACA,aAAA,CACA,cAAA,CACA,WAAA,CACA,YAAA,CACA,eAAA,CACA,eAAA,CACA,gBAAA,CACA,aAAA,CACA,iBAAA,CACA,OAAA,CACA,KAAA,CAKN,mBACE,KACI,SAAA,CAGJ,GACI,SAAA,CAAA,CAIN,MACE,UAAA,CC3CM,yBD+CN,kCACE,eAAA,CACA,mBAAA,CAAA",sourcesContent:["@import '../../../mixins';\n\n.modalDialog {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  width: 100%;\n  height: 100%;\n  overflow-x: hidden;\n  overflow-y: auto;\n  background: rgba(0, 0, 0, 0.52);\n  animation: modalIn 0.5s;\n\n  .modalDialog-content {\n    font-size: inherit;\n    font-family: inherit;\n    color: inherit;\n    position: relative;\n    background: #fff;\n    z-index: 1;\n    width: auto;\n    max-width: 100%;\n    margin: 0.5rem;\n    box-shadow: 0 5px 15px rgba(0, 0, 0, .5);\n    border: 1px solid rgba(0, 0, 0, .2);\n    border-radius: 2px;\n    padding: 10px;\n\n    &.out {\n      transition: opacity 0.3s ease-out;\n\n      &:not(.in) {\n        opacity: 0;\n      }\n    }\n\n    .btn-close {\n      display: inline;\n      width: auto;\n      color: inherit;\n      cursor: pointer;\n      border: none;\n      outline: none;\n      background: #fff;\n      font-weight: 600;\n      font-size: 1.5rem;\n      line-height: 1;\n      position: absolute;\n      right: 0;\n      top: 0;\n    }\n  }  \n}\n\n@keyframes modalIn {\n  from {\n      opacity: 0;\n  }\n\n  to {\n      opacity: 1;\n  }\n}\n\n:host {\n  width: 100%;\n}\n\n@include breakpoint-up(md) {\n  .modalDialog .modalDialog-content {\n    max-width: 600px;\n    margin: 1.75rem auto;\n  }\n}\n","@mixin breakpoint($point) {\n    @if $point == sm {\n        @media (max-width: 576px) {\n            @content;\n        }\n    }\n    @else if $point == md {\n        @media (min-width: 577px) and (max-width: 992px) {\n            @content;\n        }\n    }\n    @else if $point == lg {\n        @media (min-width: 993px) and (max-width: 1200px) {\n            @content;\n        }\n    }\n}\n\n@mixin breakpoint-up($point) {\n    @if $point == sm {\n        @media (max-width: 576px) {\n            @content;\n        }\n    }\n    @else if $point == md {\n        @media (min-width: 577px) {\n            @content;\n        }\n    }\n    @else if $point == lg {\n        @media (min-width: 993px) {\n            @content;\n        }\n    }\n}"],sourceRoot:""}]);const d=a}}]);
//# sourceMappingURL=../sourcemaps/486.js.map