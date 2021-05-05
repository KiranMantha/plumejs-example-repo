(self.webpackChunkunit_testing_plumejs=self.webpackChunkunit_testing_plumejs||[]).push([[705],{705:(e,t,o)=>{"use strict";o.r(t);var l=o(74),s=o(390);Object.create;Object.create;class i{constructor(e){this.modalsrvc=e,this.nestedModalData={}}static get inputProp(){return"nestedModalData"}openAnotherModal(){const e=this.modalsrvc.show({renderTemplate:()=>l.dy`<div>i'm nested modal</div>`,modalTitle:"nested modal",modalClass:"nested-class"});e.onOpen.subscribe((()=>{console.log("nested modal open")})),e.onClose.subscribe((()=>{console.log("nested modal closed")}))}render(){return l.dy`
			<div>sample modal</div>
			<div>${this.nestedModalData.message}</div>
			<button
				class="button is-small is-info"
				onclick=${()=>{this.openAnotherModal()}}
			>
				open another modal
			</button>
		`}}!function(e,t,o,l){var s,i=arguments.length,n=i<3?t:null===l?l=Object.getOwnPropertyDescriptor(t,o):l;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,o,l);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(i<3?s(n):i>3?s(t,o,n):s(t,o))||n);i>3&&n&&Object.defineProperty(t,o,n)}([function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:type",Object)],i.prototype,"nestedModalData",void 0),(0,l.wA)({selector:"nested-modal"})(["ModalService",i]);(0,l.wA)({selector:"plume-comp"})(["ModalService","NotificationService",class{constructor(e,t){this.modalsrvc=e,this.notifySrvc=t,this.toggleInput={onchange:this.onToggleChange.bind(this),onText:"ON",offText:"OFF"},this.multiselectToggles={enableMultiselect:{onchange:e=>{this.multiSelectOptions.multiple=e,this.multiSelectOptions.resetWidget=!0,this.update()}},disableDropdown:{onchange:e=>{this.multiSelectOptions.disableDropdown=e,this.multiSelectOptions.resetWidget=!0,this.update()}},enableFilter:{onchange:e=>{this.multiSelectOptions.enableFilter=e,this.multiSelectOptions.resetWidget=!0,this.update()}}},this.multiSelectOptions={data:[{name:"option1"},{name:"option2"},{name:"option3"},{name:"option4"},{name:"option5"}],selectedValues:[{name:"option1"},{name:"option2"}],displayField:"name",multiple:!1,disableDropdown:!1,buttonText:e=>0===e.length?"None selected":e.length>3?e.length+" selected":e.map((e=>e.name)).join(", "),onchange:e=>{console.log(e)}}}openModal(){const e=this.modalsrvc.show({renderTemplate:()=>l.dy`<nested-modal
					nestedModalData=${{message:"Hello World"}}
				></nested-modal>`,modalTitle:"testing modal",modalClass:"sample-class"});e.onOpen.subscribe((()=>{console.log("main modal open",e.Id)})),e.onClose.subscribe((()=>{console.log("main modal closed")}))}notify(){this.notifySrvc.sendMessage("hello world",s.k$.Info)}notifyWithAutoHide(){this.notifySrvc.sendMessage("hello world",s.k$.Info,!0)}onToggleChange(e){console.log(e)}render(){return l.dy`
			<div>
				<h2 class="title is-3 mb-20">Plumejs UI Control Collection</h2>
				<div class="mb-20">
					<h5 class="title is-5">Modal</h5>
					<button
						class="button is-small is-info"
						onclick=${()=>{this.openModal()}}
					>
						Open Modal
					</button>
				</div>
				<div class="mb-20">
					<h5 class="title is-5">Notification</h5>
					<button
						class="button is-small is-info mr-10"
						onclick=${()=>{this.notify()}}
					>
						Notify with action
					</button>
					<button
						class="button is-small is-info"
						onclick=${()=>{this.notifyWithAutoHide()}}
					>
						Notify with auto hide
					</button>
				</div>
				<div class="mb-20">
					<h5 class="title is-5">Toggle Button</h5>
					<toggle-button toggleOptions=${this.toggleInput}></toggle-button>
				</div>
				<div class="mb-20">
					<h5 class="title is-5">Multi select</h5>
					<div>
						<div class="is-flex mb-20">
							<span>enable multi select</span>
							<toggle-button
								toggleOptions=${this.multiselectToggles.enableMultiselect}
							></toggle-button>
						</div>
						<div class="is-flex mb-20">
							<span>disable dropdown</span>
							<toggle-button
								toggleOptions=${this.multiselectToggles.disableDropdown}
							></toggle-button>
						</div>
						<div class="is-flex mb-20">
							<span>enable filtering</span>
							<toggle-button
								toggleOptions=${this.multiselectToggles.enableFilter}
							></toggle-button>
						</div>
					</div>
					<div class="is-flex">
						<multi-select
							multiSelectOptions=${this.multiSelectOptions}
						></multi-select>
					</div>
				</div>
			</div>
		`}}])}}]);