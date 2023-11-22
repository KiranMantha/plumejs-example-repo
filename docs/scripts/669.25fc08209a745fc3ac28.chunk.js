"use strict";(self.webpackChunkplumejs_example_repo=self.webpackChunkplumejs_example_repo||[]).push([[669],{7880:function(n,o,t){var i=t(7537),A=t.n(i),e=t(3645),a=t.n(e)()(A());a.push([n.id,".modalDialog{position:fixed;top:0;bottom:0;left:0;right:0;z-index:1000;width:100%;height:100%;overflow-x:hidden;overflow-y:auto;background:rgba(0,0,0,.52);animation:modalIn .5s}.modalDialog .modalDialog-content{font-size:inherit;font-family:inherit;color:inherit;position:static;background:#fff;z-index:1;width:auto;max-width:100%;margin:.5rem;box-shadow:0 5px 15px rgba(0,0,0,.5);border:1px solid rgba(0,0,0,.2);border-radius:2px;padding:10px}.modalDialog .modalDialog-content.out{transition:opacity .3s ease-out}.modalDialog .modalDialog-content.out:not(.in){opacity:0}.modalDialog .modalDialog-content .modalDialog-header{display:flex;justify-content:space-between;align-items:flex-start}.modalDialog .modalDialog-content .modalDialog-header .btn-close{margin:0;margin-left:10px;padding:0;display:inline;width:auto;color:inherit;cursor:pointer;border:none;outline:none;background:#fff;font-weight:600;font-size:1.5rem;line-height:1}@keyframes modalIn{from{opacity:0}to{opacity:1}}:host{width:100%}@media(min-width: 577px){.modalDialog .modalDialog-content{max-width:600px;margin:1.75rem auto}}","",{version:3,sources:["webpack://./../plumejs-ui/dist/src/ui/modal/modal-component/modal.component.scss","webpack://./../plumejs-ui/dist/src/_mixins.scss"],names:[],mappings:"AAEA,aACE,cAAA,CACA,KAAA,CACA,QAAA,CACA,MAAA,CACA,OAAA,CACA,YAAA,CACA,UAAA,CACA,WAAA,CACA,iBAAA,CACA,eAAA,CACA,0BAAA,CACA,qBAAA,CAEA,kCACE,iBAAA,CACA,mBAAA,CACA,aAAA,CACA,eAAA,CACA,eAAA,CACA,SAAA,CACA,UAAA,CACA,cAAA,CACA,YAAA,CACA,oCAAA,CACA,+BAAA,CACA,iBAAA,CACA,YAAA,CAEA,sCACE,+BAAA,CAEA,+CACE,SAAA,CAIJ,sDACE,YAAA,CACA,6BAAA,CACA,sBAAA,CAEA,iEACE,QAAA,CACA,gBAAA,CACA,SAAA,CACA,cAAA,CACA,UAAA,CACA,aAAA,CACA,cAAA,CACA,WAAA,CACA,YAAA,CACA,eAAA,CACA,eAAA,CACA,gBAAA,CACA,aAAA,CAMR,mBACE,KACE,SAAA,CAGF,GACE,SAAA,CAAA,CAIJ,MACE,UAAA,CCjDM,yBDqDN,kCACE,eAAA,CACA,mBAAA,CAAA",sourcesContent:["@import '../../../mixins';\n\n.modalDialog {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  width: 100%;\n  height: 100%;\n  overflow-x: hidden;\n  overflow-y: auto;\n  background: rgba(0, 0, 0, 0.52);\n  animation: modalIn 0.5s;\n\n  .modalDialog-content {\n    font-size: inherit;\n    font-family: inherit;\n    color: inherit;\n    position: static;\n    background: #fff;\n    z-index: 1;\n    width: auto;\n    max-width: 100%;\n    margin: 0.5rem;\n    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);\n    border: 1px solid rgba(0, 0, 0, 0.2);\n    border-radius: 2px;\n    padding: 10px;\n\n    &.out {\n      transition: opacity 0.3s ease-out;\n\n      &:not(.in) {\n        opacity: 0;\n      }\n    }\n\n    .modalDialog-header {\n      display: flex;\n      justify-content: space-between;\n      align-items: flex-start;\n\n      .btn-close {\n        margin: 0;\n        margin-left: 10px;\n        padding: 0;\n        display: inline;\n        width: auto;\n        color: inherit;\n        cursor: pointer;\n        border: none;\n        outline: none;\n        background: #fff;\n        font-weight: 600;\n        font-size: 1.5rem;\n        line-height: 1;\n      }\n    }\n  }\n}\n\n@keyframes modalIn {\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n}\n\n:host {\n  width: 100%;\n}\n\n@include breakpoint-up(md) {\n  .modalDialog .modalDialog-content {\n    max-width: 600px;\n    margin: 1.75rem auto;\n  }\n}\n","@mixin breakpoint($point) {\n    @if $point == sm {\n        @media (max-width: 576px) {\n            @content;\n        }\n    }\n    @else if $point == md {\n        @media (min-width: 577px) and (max-width: 992px) {\n            @content;\n        }\n    }\n    @else if $point == lg {\n        @media (min-width: 993px) and (max-width: 1200px) {\n            @content;\n        }\n    }\n}\n\n@mixin breakpoint-up($point) {\n    @if $point == sm {\n        @media (max-width: 576px) {\n            @content;\n        }\n    }\n    @else if $point == md {\n        @media (min-width: 577px) {\n            @content;\n        }\n    }\n    @else if $point == lg {\n        @media (min-width: 993px) {\n            @content;\n        }\n    }\n}"],sourceRoot:""}]),o.Z=a},5669:function(n,o,t){t.r(o),t.d(o,{ModalComponent:function(){return d}});var i=t(4732),A=t(3069),e=t(6547),a=t(7880);let d=class{domSrvc;static observedProperties=["modalData"];modalData;onClose=new e.x;onOpen=new e.x;modalContentRef;constructor(n){this.domSrvc=n}async mount(){await this.domSrvc.animationsComplete(this.modalContentRef),this.onOpen.next(),this.onOpen.complete()}unmount(){this.onOpen.unsubscribe(),this.onClose.unsubscribe()}async _close(){this.modalContentRef.classList.remove("in"),await this.domSrvc.animationsComplete(this.modalContentRef),this.onClose.next()}_renderModalCloseButton(){return this.modalData.hideDefaultCloseButton?A.dy``:A.dy`
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
          <div class="modalDialog-header">
            <div class="title">${this.modalData?this.modalData.title:null}</div>
            ${this.modalData?this._renderModalCloseButton():null}
          </div>
          <div>${this.modalData?this.modalData.bodyTemplate():null}</div>
        </div>
      </div>
    `}};d=(0,i.gn)([(0,A.wA)({selector:"ui-modal-dialog",standalone:!0,styles:a.Z,deps:[A.B_]}),(0,i.w6)("design:paramtypes",[A.B_])],d)}}]);
//# sourceMappingURL=../sourcemaps/669.js.map