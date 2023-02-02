var m=Object.defineProperty;var b=(o,e,t)=>e in o?m(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var l=(o,e,t)=>(b(o,typeof e!="symbol"?e+"":e,t),t);import{_ as a,C as c,h as r,a as v}from"./index-3ba15bc1.js";import{M as h,r as f,N as O,a as p}from"./index-3c220a8d.js";const w=()=>a(()=>import("./modal.component-cd4aceae.js"),["./modal.component-cd4aceae.js","./index-3ba15bc1.js","./index-6cb93aa4.css","./Subject-fba9fde8.js","./modal.component-d429fd03.css"],import.meta.url),_=()=>(a(()=>import("./notification-container.component-b86c4937.js"),["./notification-container.component-b86c4937.js","./index-3ba15bc1.js","./index-6cb93aa4.css","./Subject-fba9fde8.js","./notification-container.component-83f94f01.css"],import.meta.url),a(()=>import("./notification.component-0b8da360.js"),["./notification.component-0b8da360.js","./index-3ba15bc1.js","./index-6cb93aa4.css","./index-3c220a8d.js","./index-69d6c02a.css","./notification.component-8ab15ce5.css"],import.meta.url)),P=()=>a(()=>import("./index-3c220a8d.js").then(o=>o.t),["./index-3c220a8d.js","./index-3ba15bc1.js","./index-6cb93aa4.css","./index-69d6c02a.css"],import.meta.url);var M=Object.defineProperty,$=Object.getOwnPropertyDescriptor,D=(o,e,t,s)=>{for(var n=s>1?void 0:s?$(e,t):e,i=o.length-1,d;i>=0;i--)(d=o[i])&&(n=(s?d(e,t,n):d(n))||n);return s&&n&&M(e,t,n),n};let u=class{constructor(o){l(this,"ObservedProperties",["nestedModalData"]);l(this,"nestedModalData");l(this,"dropdownOptions",{options:[{label:"Option 1",value:"o1"},{label:"Option 2",value:"o2"},{label:"Option 3",value:"o3"},{label:"Option 4",value:"o4"}],multiple:!1,buttonText:o=>o.length===0?"None selected":o.length>3?o.length+" selected":o.map(e=>e.label).join(", ")});this.modalsrvc=o}openAnotherModal(){const o=this.modalsrvc.show({renderTemplate:()=>r`<div>i'm nested modal</div>`,modalTitle:"nested modal",modalClass:"nested-class"});o.onOpen.subscribe(()=>{console.log("nested modal open")}),o.onClose.subscribe(()=>{console.log("nested modal closed")})}render(){return this.nestedModalData?r`
        <div>sample modal</div>
        <div>${this.nestedModalData.message}</div>
        <ui-dropdown
          onbindprops=${()=>({dropdownOptions:this.dropdownOptions})}
          onoptionselected=${o=>{console.log(o.detail)}}
        ></ui-dropdown>
        <button
          onclick=${()=>{this.openAnotherModal()}}
        >
          open another modal
        </button>
      `:r``}};u=D([c({selector:"nested-modal",deps:[h]})],u);var T=Object.defineProperty,C=Object.getOwnPropertyDescriptor,I=(o,e,t,s)=>{for(var n=s>1?void 0:s?C(e,t):e,i=o.length-1,d;i>=0;i--)(d=o[i])&&(n=(s?d(e,t,n):d(n))||n);return s&&n&&T(e,t,n),n};w();_();P();f();let g=class{constructor(o,e,t){l(this,"toggleInput",{onText:"ON",offText:"OFF"});l(this,"toggleProps",{onText:"",offText:""});l(this,"dropdownOptions",{options:[{label:"Option 1",value:"o1"},{label:"Option 2",value:"o2"},{label:"Option 3",value:"o3"},{label:"Option 4",value:"o4"}],multiple:!1,buttonText:o=>o.length===0?"None selected":o.length>3?o.length+" selected":o.map(e=>e.label).join(", ")});l(this,"nestedModalRef");l(this,"dropdownRef");this.router=o,this.modalsrvc=e,this.notifySrvc=t}enableMultiselect(o){this.dropdownOptions.multiple=o,this.dropdownOptions.resetDropdown=!0,this.dropdownRef.setProps({dropdownOptions:this.dropdownOptions})}disableDropdown(o){this.dropdownOptions.disable=o,this.dropdownOptions.resetDropdown=!0,this.dropdownRef.setProps({dropdownOptions:this.dropdownOptions})}enableFilter(o){this.dropdownOptions.enableFilter=o,this.dropdownOptions.resetDropdown=!0,this.dropdownRef.setProps({dropdownOptions:this.dropdownOptions})}mount(){console.log(this.router.getCurrentRoute())}openModal(){const o=this.modalsrvc.show({renderTemplate:()=>r`<nested-modal
          ref=${e=>{this.nestedModalRef=e}}
        ></nested-modal>`,modalTitle:"testing modal",modalClass:"sample-class"});o.onOpen.subscribe(()=>{console.log("main modal open",o.Id),this.nestedModalRef.setProps({nestedModalData:{message:"Hello World"}})}),o.onClose.subscribe(()=>{console.log("main modal closed")})}notify(){this.notifySrvc.sendMessage("hello world",p.Info)}notifyWithAutoHide(){this.notifySrvc.sendMessage("hello world",p.Info,!0)}onToggleChange(o){console.log(o)}render(){return r`
      <div>
        <h2>Plumejs UI Control Collection</h2>
        <div class="mb-20">
          <h5>Modal</h5>
          <button
            class="button is-small is-info"
            onclick=${()=>{this.openModal()}}
          >
            Open Modal
          </button>
        </div>
        <div class="mb-20">
          <h5>Notification</h5>
          <button
            onclick=${()=>{this.notify()}}
          >
            Notify with action
          </button>
          <button
            onclick=${()=>{this.notifyWithAutoHide()}}
          >
            Notify with auto hide
          </button>
        </div>
        <div class="mb-20">
          <h5>Toggle Button</h5>
          <ui-toggle-button
            onbindprops=${()=>({toggleOptions:this.toggleInput})}
            ontogglechange=${o=>{this.onToggleChange(o.detail)}}
          ></ui-toggle-button>
        </div>
        <div class="mb-20">
          <h5>Multi select</h5>
          <div>
            <div class="d-flex mb-20">
              <span>enable multi select</span>
              <ui-toggle-button
                onbindprops=${()=>({toggleOptions:{...this.toggleProps}})}
                ontogglechange=${o=>{this.enableMultiselect(o.detail)}}
              ></ui-toggle-button>
            </div>
            <div class="d-flex mb-20">
              <span>disable dropdown</span>
              <ui-toggle-button
                onbindprops=${()=>({toggleOptions:{...this.toggleProps}})}
                ontogglechange=${o=>{this.disableDropdown(o.detail)}}
              ></ui-toggle-button>
            </div>
            <div class="d-flex mb-20">
              <span>enable filtering</span>
              <ui-toggle-button
                onbindprops=${()=>({toggleOptions:{...this.toggleProps}})}
                ontogglechange=${o=>{this.enableFilter(o.detail)}}
              ></ui-toggle-button>
            </div>
          </div>
          <div>
            <ui-dropdown
              ref=${o=>{this.dropdownRef=o}}
              onbindprops=${()=>({dropdownOptions:this.dropdownOptions})}
              onoptionselected=${o=>{console.log(o.detail)}}
            ></ui-dropdown>
          </div>
        </div>
      </div>
    `}};g=I([c({selector:"plume-comp",deps:[v,h,O]})],g);
