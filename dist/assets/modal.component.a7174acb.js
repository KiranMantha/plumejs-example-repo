var d=Object.defineProperty;var r=(e,t,n)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var o=(e,t,n)=>(r(e,typeof t!="symbol"?t+"":t,n),n);import{h as s,_ as m,C as c,D as a,b as h}from"./vendor.b39eeca7.js";import{S as i}from"./Subject.43d35081.js";var u="";let l=class{constructor(t){o(this,"domSrvc");o(this,"ObservedProperties",["modalData"]);o(this,"modalData");o(this,"onClose",new i);o(this,"onOpen",new i);o(this,"modalContentRef");o(this,"transitionDuration",300);this.domSrvc=t}mount(){this.domSrvc.onTransitionEnd(this.modalContentRef,()=>{this.onOpen.next(),this.onOpen.complete()},this.transitionDuration)}unmount(){this.onOpen.unsubscribe(),this.onClose.unsubscribe()}_close(){this.domSrvc.onTransitionEnd(this.modalContentRef,()=>{this.onClose.next(),this.onClose.complete()},this.transitionDuration),this.modalContentRef.classList.remove("in")}_renderModalCloseButton(){return this.modalData.hideDefaultCloseButton?s``:s`
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
          <div class="title">
            ${this.modalData?this.modalData.title:""} ${this.modalData&&this._renderModalCloseButton()}
          </div>
          <div>${this.modalData&&this.modalData.bodyTemplate}</div>
        </div>
      </div>
    `}};l=m([c({selector:"ui-modal-dialog",styles:u,deps:[a]}),h("design:paramtypes",[a])],l);export{l as ModalComponent};
