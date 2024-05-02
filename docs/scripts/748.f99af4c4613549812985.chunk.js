"use strict";(self.webpackChunkplumejs_example_repo=self.webpackChunkplumejs_example_repo||[]).push([[748],{748:function(o,e,t){t.r(e);var l=t(674),n=t(968),s=t(353);let i=class{modalsrvc;static observedProperties=["nestedModalData"];nestedModalData;dropdownOptions={options:[{label:"Option 1",value:"o1"},{label:"Option 2",value:"o2"},{label:"Option 3",value:"o3"},{label:"Option 4",value:"o4"}],multiple:!1,buttonText:o=>0===o.length?"None selected":o.length>3?o.length+" selected":o.map((o=>o.label)).join(", ")};constructor(o){this.modalsrvc=o}openAnotherModal(){const o=this.modalsrvc.show({renderTemplate:()=>n.html`<div>i'm nested modal</div>`,modalTitle:"nested modal",modalClass:"nested-class"});o.onOpen.subscribe((()=>{console.log("nested modal open")})),o.onClose.subscribe((()=>{console.log("nested modal closed")}))}render(){return this.nestedModalData?n.html`
        <div>sample modal</div>
        <div>${this.nestedModalData.message}</div>
        <ui-dropdown
          data-input=${{dropdownOptions:this.dropdownOptions}}
          onoptionselected=${o=>{console.log(o.detail)}}
        ></ui-dropdown>
        <button
          onclick=${()=>{this.openAnotherModal()}}
        >
          open another modal
        </button>
      `:n.html``}};i=(0,l.Cg)([(0,n.Component)({selector:"nested-modal",deps:[s.Bg]})],i);var d=t(766);(0,s.RH)(),(0,s.M6)(),(0,s.nc)(),(0,s.g8)();let a=class{router;modalsrvc;notifySrvc;constructor(o,e,t){this.router=o,this.modalsrvc=e,this.notifySrvc=t}toggleInput={onText:"ON",offText:"OFF"};toggleProps={onText:"",offText:""};dropdownOptions={options:[{label:"Option 1",value:"o1"},{label:"Option 2",value:"o2"},{label:"Option 3",value:"o3"},{label:"Option 4",value:"o4"}],multiple:!1,buttonText:o=>0===o.length?"None selected":o.length>3?o.length+" selected":o.map((o=>o.label)).join(", ")};nestedModalRef;dropdownRef;enableMultiselect(o){this.dropdownOptions.multiple=o,this.dropdownOptions.resetDropdown=!0}disableDropdown(o){this.dropdownOptions.disable=o,this.dropdownOptions.resetDropdown=!0}enableFilter(o){this.dropdownOptions.enableFilter=o,this.dropdownOptions.resetDropdown=!0}mount(){console.log(this.router.getCurrentRoute())}openModal(){const o=this.modalsrvc.show({renderTemplate:()=>n.html`<nested-modal
          ref=${o=>{this.nestedModalRef=o}}
        ></nested-modal>`,modalTitle:"testing modal",modalClass:"sample-class"});o.onOpen.subscribe((()=>{console.log("main modal open",o.Id),this.nestedModalRef.setProps({nestedModalData:{message:"Hello World"}})})),o.onClose.subscribe((()=>{console.log("main modal closed")}))}notify(){this.notifySrvc.sendMessage("hello world",s._n.Info)}notifyWithAutoHide(){this.notifySrvc.sendMessage("hello world",s._n.Info,!0)}onToggleChange(o){console.log(o)}render(){return n.html`
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
                data-input=${{toggleOptions:{...this.toggleProps}}}
                ontogglechange=${o=>{this.enableMultiselect(o.detail)}}
              ></ui-toggle-button>
            </div>
            <div class="d-flex mb-20">
              <span>disable dropdown</span>
              <ui-toggle-button
                data-input=${{toggleOptions:{...this.toggleProps}}}
                ontogglechange=${o=>{this.disableDropdown(o.detail)}}
              ></ui-toggle-button>
            </div>
            <div class="d-flex mb-20">
              <span>enable filtering</span>
              <ui-toggle-button
                data-input=${{toggleOptions:{...this.toggleProps}}}
                ontogglechange=${o=>{this.enableFilter(o.detail)}}
              ></ui-toggle-button>
            </div>
          </div>
          <div>
            <ui-dropdown
              data-input=${{dropdownOptions:this.dropdownOptions}}
              onoptionselected=${o=>{console.log(o.detail)}}
            ></ui-dropdown>
          </div>
        </div>
      </div>
    `}};a=(0,l.Cg)([(0,n.Component)({selector:"plume-comp",deps:[d.I,s.Bg,s.JE]})],a)}}]);
//# sourceMappingURL=../sourcemaps/748.js.map