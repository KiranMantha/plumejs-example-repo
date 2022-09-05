var s=Object.defineProperty;var m=(a,o,e)=>o in a?s(a,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[o]=e;var t=(a,o,e)=>(m(a,typeof o!="symbol"?o+"":o,e),e);import{h as i,b as r,C as c,D as n,c as h}from"./index.85d60b15.js";import{S as l}from"./Subject.1fbfb1f9.js";var p=(()=>`.modalDialog{position:fixed;top:0;bottom:0;left:0;right:0;z-index:1000;width:100%;height:100%;overflow-x:hidden;overflow-y:auto;background:rgba(0,0,0,.52);animation:modalIn .5s}.modalDialog .modalDialog-content{font-size:inherit;font-family:inherit;color:inherit;position:static;background:#fff;z-index:1;width:auto;max-width:100%;margin:.5rem;box-shadow:0 5px 15px #00000080;border:1px solid rgba(0,0,0,.2);border-radius:2px;padding:10px}.modalDialog .modalDialog-content.out{transition:opacity .3s ease-out}.modalDialog .modalDialog-content.out:not(.in){opacity:0}.modalDialog .modalDialog-content .modalDialog-header{display:flex;justify-content:space-between;align-items:flex-start}.modalDialog .modalDialog-content .modalDialog-header .btn-close{margin:0 0 0 10px;padding:0;display:inline;width:auto;color:inherit;cursor:pointer;border:none;outline:none;background:#fff;font-weight:600;font-size:1.5rem;line-height:1}@keyframes modalIn{0%{opacity:0}to{opacity:1}}:host{width:100%}@media (min-width: 577px){.modalDialog .modalDialog-content{max-width:600px;margin:1.75rem auto}}
`)();let d=class{constructor(o){t(this,"domSrvc");t(this,"ObservedProperties",["modalData"]);t(this,"modalData");t(this,"onClose",new l);t(this,"onOpen",new l);t(this,"modalContentRef");this.domSrvc=o}async mount(){await this.domSrvc.animationsComplete(this.modalContentRef),this.onOpen.next(),this.onOpen.complete()}unmount(){this.onOpen.unsubscribe(),this.onClose.unsubscribe()}async _close(){this.modalContentRef.classList.remove("in"),await this.domSrvc.animationsComplete(this.modalContentRef),this.onClose.next()}_renderModalCloseButton(){return this.modalData.hideDefaultCloseButton?i``:i`
        <button
          class="btn-close"
          onclick=${()=>{this._close()}}
        >
          &times;
        </button>
      `}render(){return i`
      <div class="modalDialog" part="modalDialog">
        <div
          ref=${o=>{this.modalContentRef=o}}
          class="modalDialog-content in out"
        >
          <div class="modalDialog-header">
            <div class="title">${this.modalData?this.modalData.title:""}</div>
            ${this.modalData&&this._renderModalCloseButton()}
          </div>
          <div>${this.modalData&&this.modalData.bodyTemplate}</div>
        </div>
      </div>
    `}};d=r([c({selector:"ui-modal-dialog",standalone:!0,styles:p,deps:[n]}),h("design:paramtypes",[n])],d);export{d as ModalComponent};
