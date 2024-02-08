var d=Object.defineProperty;var m=(e,t,a)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;var o=(e,t,a)=>(m(e,typeof t!="symbol"?t+"":t,a),a);import{h as s,b as r,C as c,D as n,c as h}from"./index-3ba15bc1.js";import{S as i}from"./Subject-fba9fde8.js";const u="";let l=class{constructor(t){o(this,"domSrvc");o(this,"ObservedProperties",["modalData"]);o(this,"modalData");o(this,"onClose",new i);o(this,"onOpen",new i);o(this,"modalContentRef");this.domSrvc=t}async mount(){await this.domSrvc.animationsComplete(this.modalContentRef),this.onOpen.next(),this.onOpen.complete()}unmount(){this.onOpen.unsubscribe(),this.onClose.unsubscribe()}async _close(){this.modalContentRef.classList.remove("in"),await this.domSrvc.animationsComplete(this.modalContentRef),this.onClose.next()}_renderModalCloseButton(){return this.modalData.hideDefaultCloseButton?s``:s`
        <button
          class="btn-close"
          onclick=${()=>{this._close()}}
        >
          &times;
        </button>
      `}render(){return s`
      <div class="modalDialog" part="modalDialog">
        <div
          ref=${t=>{this.modalContentRef=t}}
          class="modalDialog-content in out"
        >
          <div class="modalDialog-header">
            <div class="title">${this.modalData?this.modalData.title:""}</div>
            ${this.modalData&&this._renderModalCloseButton()}
          </div>
          <div>${this.modalData&&this.modalData.bodyTemplate}</div>
        </div>
      </div>
    `}};l=r([c({selector:"ui-modal-dialog",standalone:!0,styles:u,deps:[n]}),h("design:paramtypes",[n])],l);export{l as ModalComponent};
