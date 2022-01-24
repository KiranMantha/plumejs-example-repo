var m=Object.defineProperty;var c=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var p=(e,o,t)=>o in e?m(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,a=(e,o)=>{for(var t in o||(o={}))v.call(o,t)&&p(e,t,o[t]);if(c)for(var t of c(o))w.call(o,t)&&p(e,t,o[t]);return e};var n=(e,o,t)=>(p(e,typeof o!="symbol"?o+"":o,t),t);import{C as g,h as r,R as O}from"./vendor.dafb32b6.js";import{M as h,r as P,N as R,a as u}from"./index.7b5a3c05.js";const M=()=>import("./modal.component.a2b9dfdf.js"),D=()=>(import("./notification-container.component.32cfd3c0.js"),import("./notification.component.cc67b00a.js")),$=()=>import("./index.7b5a3c05.js").then(function(e){return e.t});var T=Object.defineProperty,C=Object.getOwnPropertyDescriptor,j=(e,o,t,l)=>{for(var s=l>1?void 0:l?C(o,t):o,i=e.length-1,d;i>=0;i--)(d=e[i])&&(s=(l?d(o,t,s):d(s))||s);return l&&s&&T(o,t,s),s};let f=class{constructor(e){n(this,"ObservedProperties",["nestedModalData"]);n(this,"nestedModalData");this.modalsrvc=e}openAnotherModal(){const e=this.modalsrvc.show({renderTemplate:()=>r`<div>i'm nested modal</div>`,modalTitle:"nested modal",modalClass:"nested-class"});e.onOpen.subscribe(()=>{console.log("nested modal open")}),e.onClose.subscribe(()=>{console.log("nested modal closed")})}render(){return this.nestedModalData?r`
        <div>sample modal</div>
        <div>${this.nestedModalData.message}</div>
        <button
          onclick=${()=>{this.openAnotherModal()}}
        >
          open another modal
        </button>
      `:r``}};f=j([g({selector:"nested-modal",deps:[h]})],f);var _=Object.defineProperty,x=Object.getOwnPropertyDescriptor,y=(e,o,t,l)=>{for(var s=l>1?void 0:l?x(o,t):o,i=e.length-1,d;i>=0;i--)(d=e[i])&&(s=(l?d(o,t,s):d(s))||s);return l&&s&&_(o,t,s),s};M();D();$();P();let b=class{constructor(e,o,t){n(this,"toggleInput",{onText:"ON",offText:"OFF"});n(this,"toggleProps",{onText:"",offText:""});n(this,"dropdownOptions",{options:[{label:"Option 1",value:"o1"},{label:"Option 2",value:"o2"},{label:"Option 3",value:"o3"},{label:"Option 4",value:"o4"}],multiple:!1,buttonText:e=>e.length===0?"None selected":e.length>3?e.length+" selected":e.map(o=>o.label).join(", ")});n(this,"nestedModalRef");n(this,"sampleToggleRef");n(this,"enableDropdownRef");n(this,"disableDropdownRef");n(this,"enableFilterRef");n(this,"dropdownRef");this.router=e,this.modalsrvc=o,this.notifySrvc=t}enableMultiselect(e){this.dropdownOptions.multiple=e,this.dropdownOptions.resetDropdown=!0,this.dropdownRef.setProps({dropdownOptions:this.dropdownOptions})}disableDropdown(e){this.dropdownOptions.disable=e,this.dropdownOptions.resetDropdown=!0,this.dropdownRef.setProps({dropdownOptions:this.dropdownOptions})}enableFilter(e){this.dropdownOptions.enableFilter=e,this.dropdownOptions.resetDropdown=!0,this.dropdownRef.setProps({dropdownOptions:this.dropdownOptions})}mount(){console.log(this.router.getCurrentRoute()),this.sampleToggleRef.setProps({toggleOptions:this.toggleInput}),this.enableDropdownRef.setProps({toggleOptions:a({},this.toggleProps)}),this.disableDropdownRef.setProps({toggleOptions:a({},this.toggleProps)}),this.enableFilterRef.setProps({toggleOptions:a({},this.toggleProps)}),this.dropdownRef.setProps({dropdownOptions:this.dropdownOptions})}openModal(){const e=this.modalsrvc.show({renderTemplate:()=>r`<nested-modal
          ref=${o=>{this.nestedModalRef=o}}
        ></nested-modal>`,modalTitle:"testing modal",modalClass:"sample-class"});e.onOpen.subscribe(()=>{console.log("main modal open",e.Id),this.nestedModalRef.setProps({nestedModalData:{message:"Hello World"}})}),e.onClose.subscribe(()=>{console.log("main modal closed")})}notify(){this.notifySrvc.sendMessage("hello world",u.Info)}notifyWithAutoHide(){this.notifySrvc.sendMessage("hello world",u.Info,!0)}onToggleChange(e){console.log(e)}render(){return r`
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
            ref=${e=>{this.sampleToggleRef=e}}
            ontogglechange=${e=>{this.onToggleChange(e.detail)}}
          ></ui-toggle-button>
        </div>
        <div class="mb-20">
          <h5>Multi select</h5>
          <div>
            <div class="d-flex mb-20">
              <span>enable multi select</span>
              <ui-toggle-button
                ref=${e=>{this.enableDropdownRef=e}}
                ontogglechange=${e=>{this.enableMultiselect(e.detail)}}
              ></ui-toggle-button>
            </div>
            <div class="d-flex mb-20">
              <span>disable dropdown</span>
              <ui-toggle-button
                ref=${e=>{this.disableDropdownRef=e}}
                ontogglechange=${e=>{this.disableDropdown(e.detail)}}
              ></ui-toggle-button>
            </div>
            <div class="d-flex mb-20">
              <span>enable filtering</span>
              <ui-toggle-button
                ref=${e=>{this.enableFilterRef=e}}
                ontogglechange=${e=>{this.enableFilter(e.detail)}}
              ></ui-toggle-button>
            </div>
          </div>
          <div>
            <ui-dropdown
              ref=${e=>{this.dropdownRef=e}}
              onoptionselected=${e=>{console.log(e.detail)}}
            ></ui-dropdown>
          </div>
        </div>
      </div>
    `}};b=y([g({selector:"plume-comp",deps:[O,h,R]})],b);
