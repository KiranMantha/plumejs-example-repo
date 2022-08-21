import{_ as r,C as h,h as d,a as c}from"./index.adbef661.js";import{M as g,r as b,N as m,a}from"./index.0b3a9d7d.js";const v=()=>r(()=>import("./modal.component.ef8314c0.js"),["assets/modal.component.ef8314c0.js","assets/index.0b3a9d7d.js","assets/index.477c54d8.css","assets/index.adbef661.js","assets/index.287db537.css","assets/Subject.10e19aa0.js"]),f=()=>(r(()=>import("./notification-container.component.7359b3f9.js"),["assets/notification-container.component.7359b3f9.js","assets/notification-container.component.ee1cac60.css","assets/index.0b3a9d7d.js","assets/index.477c54d8.css","assets/index.adbef661.js","assets/index.287db537.css","assets/Subject.10e19aa0.js"]),r(()=>import("./notification.component.c96d1af7.js"),["assets/notification.component.c96d1af7.js","assets/notification.component.de2a9565.css","assets/index.0b3a9d7d.js","assets/index.477c54d8.css","assets/index.adbef661.js","assets/index.287db537.css"])),O=()=>r(()=>import("./index.0b3a9d7d.js").then(function(o){return o.t}),["assets/index.0b3a9d7d.js","assets/index.477c54d8.css","assets/index.adbef661.js","assets/index.287db537.css"]);var w=Object.defineProperty,_=Object.getOwnPropertyDescriptor,P=(o,e,s,n)=>{for(var t=n>1?void 0:n?_(e,s):e,l=o.length-1,i;l>=0;l--)(i=o[l])&&(t=(n?i(e,s,t):i(t))||t);return n&&t&&w(e,s,t),t};let p=class{constructor(o){this.modalsrvc=o,this.ObservedProperties=["nestedModalData"],this.dropdownOptions={options:[{label:"Option 1",value:"o1"},{label:"Option 2",value:"o2"},{label:"Option 3",value:"o3"},{label:"Option 4",value:"o4"}],multiple:!1,buttonText:e=>e.length===0?"None selected":e.length>3?e.length+" selected":e.map(s=>s.label).join(", ")}}openAnotherModal(){const o=this.modalsrvc.show({renderTemplate:()=>d`<div>i'm nested modal</div>`,modalTitle:"nested modal",modalClass:"nested-class"});o.onOpen.subscribe(()=>{console.log("nested modal open")}),o.onClose.subscribe(()=>{console.log("nested modal closed")})}render(){return this.nestedModalData?d`
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
      `:d``}};p=P([h({selector:"nested-modal",deps:[g]})],p);var $=Object.defineProperty,M=Object.getOwnPropertyDescriptor,T=(o,e,s,n)=>{for(var t=n>1?void 0:n?M(e,s):e,l=o.length-1,i;l>=0;l--)(i=o[l])&&(t=(n?i(e,s,t):i(t))||t);return n&&t&&$(e,s,t),t};v();f();O();b();let u=class{constructor(o,e,s){this.router=o,this.modalsrvc=e,this.notifySrvc=s,this.toggleInput={onText:"ON",offText:"OFF"},this.toggleProps={onText:"",offText:""},this.dropdownOptions={options:[{label:"Option 1",value:"o1"},{label:"Option 2",value:"o2"},{label:"Option 3",value:"o3"},{label:"Option 4",value:"o4"}],multiple:!1,buttonText:n=>n.length===0?"None selected":n.length>3?n.length+" selected":n.map(t=>t.label).join(", ")}}enableMultiselect(o){this.dropdownOptions.multiple=o,this.dropdownOptions.resetDropdown=!0,this.dropdownRef.setProps({dropdownOptions:this.dropdownOptions})}disableDropdown(o){this.dropdownOptions.disable=o,this.dropdownOptions.resetDropdown=!0,this.dropdownRef.setProps({dropdownOptions:this.dropdownOptions})}enableFilter(o){this.dropdownOptions.enableFilter=o,this.dropdownOptions.resetDropdown=!0,this.dropdownRef.setProps({dropdownOptions:this.dropdownOptions})}mount(){console.log(this.router.getCurrentRoute())}openModal(){const o=this.modalsrvc.show({renderTemplate:()=>d`<nested-modal
          ref=${e=>{this.nestedModalRef=e}}
        ></nested-modal>`,modalTitle:"testing modal",modalClass:"sample-class"});o.onOpen.subscribe(()=>{console.log("main modal open",o.Id),this.nestedModalRef.setProps({nestedModalData:{message:"Hello World"}})}),o.onClose.subscribe(()=>{console.log("main modal closed")})}notify(){this.notifySrvc.sendMessage("hello world",a.Info)}notifyWithAutoHide(){this.notifySrvc.sendMessage("hello world",a.Info,!0)}onToggleChange(o){console.log(o)}render(){return d`
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
    `}};u=T([h({selector:"plume-comp",deps:[c,g,m]})],u);
