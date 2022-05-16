"use strict";(self.webpackChunkplumejs_example_repo=self.webpackChunkplumejs_example_repo||[]).push([[218],{218:function(o,e,t){t.r(e);var n=t(655),s=t(376),l=t(558);let d=class{modalsrvc;ObservedProperties=["nestedModalData"];nestedModalData;dropdownOptions={options:[{label:"Option 1",value:"o1"},{label:"Option 2",value:"o2"},{label:"Option 3",value:"o3"},{label:"Option 4",value:"o4"}],multiple:!1,buttonText:o=>0===o.length?"None selected":o.length>3?o.length+" selected":o.map((o=>o.label)).join(", ")};constructor(o){this.modalsrvc=o}openAnotherModal(){const o=this.modalsrvc.show({renderTemplate:()=>s.dy`<div>i'm nested modal</div>`,modalTitle:"nested modal",modalClass:"nested-class"});o.onOpen.subscribe((()=>{console.log("nested modal open")})),o.onClose.subscribe((()=>{console.log("nested modal closed")}))}render(){return this.nestedModalData?s.dy`
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
      `:s.dy``}};d=(0,n.gn)([(0,s.wA)({selector:"nested-modal",deps:[l.Z7]})],d);var i=t(719);(0,l.t1)(),(0,l.b8)(),(0,l.su)(),(0,l.aA)();let a=class{router;modalsrvc;notifySrvc;constructor(o,e,t){this.router=o,this.modalsrvc=e,this.notifySrvc=t}toggleInput={onText:"ON",offText:"OFF"};toggleProps={onText:"",offText:""};enableMultiselect(o){this.dropdownOptions.multiple=o,this.dropdownOptions.resetDropdown=!0,this.dropdownRef.setProps({dropdownOptions:this.dropdownOptions})}disableDropdown(o){this.dropdownOptions.disable=o,this.dropdownOptions.resetDropdown=!0,this.dropdownRef.setProps({dropdownOptions:this.dropdownOptions})}enableFilter(o){this.dropdownOptions.enableFilter=o,this.dropdownOptions.resetDropdown=!0,this.dropdownRef.setProps({dropdownOptions:this.dropdownOptions})}dropdownOptions={options:[{label:"Option 1",value:"o1"},{label:"Option 2",value:"o2"},{label:"Option 3",value:"o3"},{label:"Option 4",value:"o4"}],multiple:!1,buttonText:o=>0===o.length?"None selected":o.length>3?o.length+" selected":o.map((o=>o.label)).join(", ")};nestedModalRef;dropdownRef;mount(){console.log(this.router.getCurrentRoute())}openModal(){const o=this.modalsrvc.show({renderTemplate:()=>s.dy`<nested-modal
          ref=${o=>{this.nestedModalRef=o}}
        ></nested-modal>`,modalTitle:"testing modal",modalClass:"sample-class"});o.onOpen.subscribe((()=>{console.log("main modal open",o.Id),this.nestedModalRef.setProps({nestedModalData:{message:"Hello World"}})})),o.onClose.subscribe((()=>{console.log("main modal closed")}))}notify(){this.notifySrvc.sendMessage("hello world",l.k$.Info)}notifyWithAutoHide(){this.notifySrvc.sendMessage("hello world",l.k$.Info,!0)}onToggleChange(o){console.log(o)}render(){return s.dy`
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
    `}};a=(0,n.gn)([(0,s.wA)({selector:"plume-comp",deps:[i.F,l.Z7,l.gq]})],a)}}]);
//# sourceMappingURL=../sourcemaps/218.js.map