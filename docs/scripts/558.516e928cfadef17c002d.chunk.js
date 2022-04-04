"use strict";(self.webpackChunkplumejs_example_repo=self.webpackChunkplumejs_example_repo||[]).push([[558],{558:function(e,t,o){o.d(t,{Z7:function(){return r},gq:function(){return d},k$:function(){return A},aA:function(){return c},t1:function(){return s},b8:function(){return a},su:function(){return p}});var n=o(655),i=o(366);let r=class{_modalList=new Map;_addChild(e,t=document.body){t.appendChild(e)}_removeChild(e,t=document.body){t.removeChild(e)}_addModal(e){const t=document.createElement("ui-modal-dialog");this._addChild(t);const o=t,n=o.getInstance(),i=(new Date).getTime(),r={onClose:n.onClose,onOpen:n.onOpen,Id:i};return n.onClose.subscribe((()=>{this.close(r)})),o.setProps({modalData:{Id:i,title:e.modalTitle,bodyTemplate:e.renderTemplate(),backdrop:e.backdrop||!1,hideDefaultCloseButton:e.hideDefaultCloseButton||!1}}),e.modalClass&&t.classList.add(e.modalClass),this._modalList.set(i,t),r}show(e){if(!e.renderTemplate)throw Error("Provide renderTemplate function to render html inside modal component.");return this._addModal(e)}close(e){const t=this._modalList.get(e.Id);this._removeChild(t),this._modalList.delete(e.Id)}closeAll(){for(const e of this._modalList.values())this._removeChild(e);this._modalList.clear()}};r=(0,n.gn)([(0,i.GS)()],r);const s=()=>Promise.all([o.e(516),o.e(486)]).then(o.bind(o,486));var A;!function(e){e.Info="info",e.Danger="danger"}(A||(A={}));class l{content;type;index;autoHide=!1;constructor(e,t=A.Info,o=!1){this.content=e,this.type=t,this.autoHide=o}}let d=class{_containerModel;sendMessage(e,t=A.Info,o=!1){const n=new l(e,t,o);this._addMessage(n)}_addChild(e,t=document.body){t.appendChild(e)}_removeChild(e,t=document.body){t.removeChild(e)}_addMessage(e){let t=document.getElementsByTagName("ui-notification-container")[0];if(t||(t=document.createElement("ui-notification-container"),this._addChild(t)),!this._containerModel){const e=t;this._containerModel=e.getInstance(),this._containerModel.onDismiss.subscribe((e=>{0===e&&(this._removeChild(t),this._containerModel=null)}))}this._containerModel.setNotifications(e)}};d=(0,n.gn)([(0,i.GS)()],d);const a=()=>(Promise.all([o.e(516),o.e(143)]).then(o.bind(o,143)),o.e(522).then(o.bind(o,522)));o(784);const p=()=>Promise.resolve().then(o.bind(o,784));o(575);const c=()=>Promise.resolve().then(o.bind(o,575))},575:function(e,t,o){o.r(t),o.d(t,{DropdownComponent:function(){return A}});var n=o(655),i=o(366),r=o(866);const s={options:[],multiple:!1,defaultText:"Select",buttonText:null,enableFilter:!1,disable:!1,resetDropdown:!1};let A=class{renderer;ObservedProperties=["dropdownOptions"];dropdownOptions={...s};_detailsNode;_summaryNode;_optionsContainerNode;_summaryText;_isMultiSelect=!1;_selectedOptions=[];constructor(e){this.renderer=e}onPropsChanged(){if(this.dropdownOptions.options.length){this.dropdownOptions={...s,...this.dropdownOptions};const{multiple:e,resetDropdown:t}=this.dropdownOptions;t&&(this._selectedOptions=[],this.dropdownOptions.options=this.dropdownOptions.options.map((e=>(e.selected=!1,e)))),this._isMultiSelect=e,this.getSummaryText()}}onOptionSelected(e,t,o){let n="";this._isMultiSelect?(this.dropdownOptions.options[o].selected=e,this._selectedOptions=this.dropdownOptions.options.filter((e=>!!e.selected)),n=this.dropdownOptions.buttonText?this.dropdownOptions.buttonText(this._selectedOptions):this._selectedOptions.length?this._selectedOptions.map((e=>e.label)).join(", "):this.dropdownOptions.defaultText):(n=t.label,this._detailsNode.removeAttribute("open")),this._summaryNode.textContent=n,this.renderer.emitEvent("optionselected",{option:this._isMultiSelect?this._selectedOptions:t})}onToggle(){this._optionsContainerNode.removeAttribute("style"),this._optionsContainerNode.classList.remove("top"),this._detailsNode.open&&this.setDropdownPosition()}getSummaryText(){this._selectedOptions=this.dropdownOptions.options.filter((e=>!!e.selected)),this._isMultiSelect?this._summaryText=this._selectedOptions.map((e=>e.label)).join(",")||this.dropdownOptions.defaultText:this._selectedOptions.length?this._summaryText=this._selectedOptions[0].label:(this.dropdownOptions.options[0].selected=!0,this._summaryText=this.dropdownOptions.options[0].label)}buildItems(){const e=this.dropdownOptions.options.map(((e,t)=>i.dy`
        <li>
          <input
            name="select"
            id="id-${t}"
            type="${this._isMultiSelect?"checkbox":"radio"}"
            checked=${!!e.selected}
            onchange=${o=>{this.onOptionSelected(o.target.checked,e,t)}}
          />
          <label for="id-${t}"> ${e.label} </label>
        </li>
      `));if(this.dropdownOptions.enableFilter){const t=i.dy` <li class="filter">
        <input
          type="search"
          oninput=${e=>{this.filterList(e.target.value)}}
        />
      </li>`;e.unshift(t)}return e}filterList(e){const t=this._optionsContainerNode.querySelectorAll("label");Array.from(t).forEach((t=>{const o=t.textContent||t.innerText;e?-1!==o.toLowerCase().indexOf(e)?t.parentElement.classList.remove("hide-item"):t.parentElement.classList.add("hide-item"):t.parentElement.classList.remove("hide-item")}))}setDropdownPosition(){this.isInViewPort(this._optionsContainerNode)?this._optionsContainerNode.classList.contains("top")&&(this._optionsContainerNode.removeAttribute("style"),this._optionsContainerNode.classList.remove("top")):(this._optionsContainerNode.style.bottom=this._detailsNode.getBoundingClientRect().height+"px",this._optionsContainerNode.classList.add("top"))}isInViewPort(e){const t=e.getBoundingClientRect();return t.top>=0&&t.left>=0&&t.right<=(window.innerWidth||document.documentElement.clientWidth)&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)}render(){return this.dropdownOptions.options.length?i.dy`
        <details
          role="list"
          part="list"
          class="${this.dropdownOptions.disable?"disabled":""}"
          ref=${e=>{this._detailsNode=e}}
          ontoggle=${()=>{this.onToggle()}}
        >
          <summary
            aria-haspopup="listbox"
            ref=${e=>{this._summaryNode=e}}
          >
            ${this._summaryText}
          </summary>
          <ul
            role="listbox"
            ref=${e=>{this._optionsContainerNode=e}}
          >
            ${this.buildItems()}
          </ul>
        </details>
      `:i.dy`<div></div>`}};A=(0,n.gn)([(0,i.wA)({selector:"ui-dropdown",styles:r.Z,deps:[i.Th]}),(0,n.w6)("design:paramtypes",[i.Th])],A)},784:function(e,t,o){o.r(t),o.d(t,{ToggleComponent:function(){return A}});var n=o(655),i=o(366),r=o(734);const s={onText:"ON",offText:"OFF",isSelected:!1};let A=class{renderer;ObservedProperties=["toggleOptions"];toggleOptions={...s};_id=Math.random();constructor(e){this.renderer=e}toggleChange(e){const t=e.target.checked;this.renderer.emitEvent("togglechange",t)}render(){return i.dy`<div class="toggle-container" part="toggle-container">
      <span>${this.toggleOptions.offText.translate()}</span>
      <input
        type="checkbox"
        id="${this._id}"
        checked="${!!this.toggleOptions.isSelected}"
        onchange=${e=>{this.toggleChange(e)}}
      />
      <label for="${this._id}"></label>
      <span>${this.toggleOptions.onText.translate()}</span>
    </div>`}};A=(0,n.gn)([(0,i.wA)({selector:"ui-toggle-button",styles:r.Z,deps:[i.Th]}),(0,n.w6)("design:paramtypes",[i.Th])],A)},866:function(e,t,o){var n=o(537),i=o.n(n),r=o(645),s=o.n(r),A=o(667),l=o.n(A),d=new URL(o(240),o.b),a=new URL(o(35),o.b),p=s()(i()),c=l()(d),C=l()(a);p.push([e.id,'details[role=list]{position:relative;margin:0;padding:0;border:none}details[role=list].disabled{cursor:not-allowed}details[role=list].disabled>summary{pointer-events:none;color:rgba(16,16,16,.3)}details[role=list]>summary{list-style:none;cursor:pointer;padding:.5rem 1rem;line-height:1;color:inherit;border:1px solid #ccc;border-radius:2px}details[role=list]>summary::-webkit-details-marker{display:none}details[role=list]>summary::after{content:"";height:20px;width:20px;pointer-events:none;background-image:url('+c+');background-repeat:no-repeat;background-position:center;float:right;transform:rotate(0deg)}details[role=list][open]>summary{border-bottom-left-radius:0;border-bottom-right-radius:0;margin:0}details[role=list][open]>summary::before{position:fixed;top:0;right:0;bottom:0;left:0;z-index:80;display:block;cursor:default;content:" ";background:transparent}details[role=list][open]>summary::after{transform:rotate(180deg)}details[role=list][open]>summary+ul{display:initial}details[role=list] summary+ul{display:none;position:absolute;top:auto;left:0;right:0;border:1px solid #ccc;border-top:none;border-bottom-left-radius:2px;border-bottom-right-radius:2px;background-color:#fff;z-index:100;list-style:none;margin:0;padding:0}details[role=list] summary+ul.top{border-top:1px solid #ccc;border-bottom:none;border-top-left-radius:2px;border-top-right-radius:2px;border-bottom-left-radius:0;border-bottom-right-radius:0}details[role=list] summary+ul li{box-sizing:border-box;padding:0;color:inherit;margin:0}details[role=list] summary+ul li::marker{content:""}details[role=list] summary+ul li.filter{padding:.5rem 1rem;background-color:#eee;border-bottom:1px solid #ccc}details[role=list] summary+ul li.filter input[type=search]{width:100%;padding:4px;margin:0;background-color:#fff}details[role=list] summary+ul li.hide-item{display:none}details[role=list] summary+ul li input[type=radio],details[role=list] summary+ul li input[type=checkbox]{position:absolute;opacity:0}details[role=list] summary+ul li input[type=radio]:checked+label,details[role=list] summary+ul li input[type=checkbox]:checked+label{border-left-color:#3273dc}details[role=list] summary+ul li input[type=checkbox]+label:before{content:"";margin-right:4px;display:inline-block;width:20px;height:20px;background-color:#fff;border:1px solid;vertical-align:text-bottom}details[role=list] summary+ul li input[type=checkbox]:checked+label:before{background-image:url('+C+");background-repeat:no-repeat;background-position:center;background-size:.8rem auto;background-color:#3273dc;border:1px solid #3273dc}details[role=list] summary+ul li label{cursor:pointer;color:inherit;display:block;position:relative;padding:.5rem 1rem;border-left:3px solid transparent;white-space:nowrap;margin:0}details[role=list] summary+ul li label:hover{background-color:#eee}","",{version:3,sources:["webpack://./node_modules/@plumejs/ui/dist/mjs/src/ui/dropdown/dropdown.component.scss"],names:[],mappings:"AAOA,mBACE,iBAAA,CACA,QAAA,CACA,SAAA,CACA,WAAA,CAEA,4BACE,kBAAA,CACA,oCACE,mBAAA,CACA,uBAAA,CAIJ,2BACE,eAAA,CACA,cAAA,CACA,kBAxBK,CAyBL,aAAA,CACA,aAAA,CACA,qBAAA,CACA,iBAAA,CAEA,mDACE,YAAA,CAGF,kCACE,UAAA,CACA,WAAA,CACA,UAAA,CACA,mBAAA,CACA,wDAlCQ,CAmCR,2BAAA,CACA,0BAAA,CACA,WAAA,CACA,sBAAA,CAIJ,iCACE,2BAAA,CACA,4BAAA,CACA,QAAA,CAEA,yCACE,cAAA,CACA,KAAA,CACA,OAAA,CACA,QAAA,CACA,MAAA,CACA,UAAA,CACA,aAAA,CACA,cAAA,CACA,WAAA,CACA,sBAAA,CAEF,wCACE,wBAAA,CAGF,oCACE,eAAA,CAIJ,8BACE,YAAA,CACA,iBAAA,CACA,QAAA,CACA,MAAA,CACA,OAAA,CACA,qBAAA,CACA,eAAA,CACA,6BAAA,CACA,8BAAA,CACA,qBAAA,CACA,WAAA,CACA,eAAA,CACA,QAAA,CACA,SAAA,CAEA,kCACE,yBAAA,CACA,kBAAA,CACA,0BAAA,CACA,2BAAA,CACA,2BAAA,CACA,4BAAA,CAGF,iCACE,qBAAA,CACA,SAAA,CACA,aAAA,CACA,QAAA,CAEA,yCACE,UAAA,CAGF,wCACE,kBA7GC,CA8GD,qBA5Ga,CA6Gb,4BAAA,CAEA,2DACE,UAAA,CACA,WAAA,CACA,QAAA,CACA,qBAAA,CAIJ,2CACE,YAAA,CAGF,yGAEE,iBAAA,CACA,SAAA,CAEA,qIACE,yBAhIM,CAqIR,mEACE,UAAA,CACA,gBAAA,CACA,oBAAA,CACA,UAAA,CACA,WAAA,CACA,qBAAA,CACA,gBAAA,CACA,0BAAA,CAGF,2EACE,wDAhJM,CAiJN,2BAAA,CACA,0BAAA,CACA,0BAAA,CACA,wBArJM,CAsJN,wBAAA,CAIJ,uCACE,cAAA,CACA,aAAA,CACA,aAAA,CACA,iBAAA,CACA,kBAlKC,CAmKD,iCAAA,CACA,kBAAA,CACA,QAAA,CAEA,6CACE,qBAtKW",sourcesContent:["$padder: 0.5rem 1rem;\n$trigger-border-color: #ccc;\n$option-hover-color: #eee;\n$chevron-color: #3273dc;\n$checkmark-url: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23FFF' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E\");\n$chevron-url: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgba(65, 84, 98, 0.999)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\");\n\ndetails[role='list'] {\n  position: relative;\n  margin: 0;\n  padding: 0;\n  border: none;\n\n  &.disabled {\n    cursor: not-allowed;\n    & > summary {\n      pointer-events: none;\n      color: rgba(16, 16, 16, 0.3);\n    }\n  }\n\n  & > summary {\n    list-style: none;\n    cursor: pointer;\n    padding: $padder;\n    line-height: 1;\n    color: inherit;\n    border: 1px solid $trigger-border-color;\n    border-radius: 2px;\n\n    &::-webkit-details-marker {\n      display: none;\n    }\n\n    &::after {\n      content: '';\n      height: 20px;\n      width: 20px;\n      pointer-events: none;\n      background-image: $chevron-url;\n      background-repeat: no-repeat;\n      background-position: center;\n      float: right;\n      transform: rotate(0deg);\n    }\n  }\n\n  &[open] > summary {\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n    margin: 0;\n\n    &::before {\n      position: fixed;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      z-index: 80;\n      display: block;\n      cursor: default;\n      content: ' ';\n      background: transparent;\n    }\n    &::after {\n      transform: rotate(180deg);\n    }\n\n    & + ul {\n      display: initial;\n    }\n  }\n\n  summary + ul {\n    display: none;\n    position: absolute;\n    top: auto;\n    left: 0;\n    right: 0;\n    border: 1px solid $trigger-border-color;\n    border-top: none;\n    border-bottom-left-radius: 2px;\n    border-bottom-right-radius: 2px;\n    background-color: #fff;\n    z-index: 100;\n    list-style: none;\n    margin: 0;\n    padding: 0;\n\n    &.top {\n      border-top: 1px solid $trigger-border-color;\n      border-bottom: none;\n      border-top-left-radius: 2px;\n      border-top-right-radius: 2px;\n      border-bottom-left-radius: 0;\n      border-bottom-right-radius: 0;\n    }\n\n    li {\n      box-sizing: border-box;\n      padding: 0;\n      color: inherit;\n      margin: 0;\n\n      &::marker {\n        content: '';\n      }\n\n      &.filter {\n        padding: $padder;\n        background-color: $option-hover-color;\n        border-bottom: 1px solid $trigger-border-color;\n\n        input[type='search'] {\n          width: 100%;\n          padding: 4px;\n          margin: 0;\n          background-color: #fff;\n        }\n      }\n\n      &.hide-item {\n        display: none;\n      }\n\n      input[type='radio'],\n      input[type='checkbox'] {\n        position: absolute;\n        opacity: 0;\n\n        &:checked + label {\n          border-left-color: $chevron-color;\n        }\n      }\n\n      input[type='checkbox'] {\n        & + label:before {\n          content: '';\n          margin-right: 4px;\n          display: inline-block;\n          width: 20px;\n          height: 20px;\n          background-color: #fff;\n          border: 1px solid;\n          vertical-align: text-bottom;\n        }\n\n        &:checked + label:before {\n          background-image: $checkmark-url;\n          background-repeat: no-repeat;\n          background-position: center;\n          background-size: calc(1rem * 0.8) auto;\n          background-color: $chevron-color;\n          border: 1px solid $chevron-color;\n        }\n      }\n\n      label {\n        cursor: pointer;\n        color: inherit;\n        display: block;\n        position: relative;\n        padding: $padder;\n        border-left: 3px solid transparent;\n        white-space: nowrap;\n        margin: 0;\n\n        &:hover {\n          background-color: $option-hover-color;\n        }\n      }\n    }\n  }\n}\n"],sourceRoot:""}]),t.Z=p},734:function(e,t,o){var n=o(537),i=o.n(n),r=o(645),s=o.n(r)()(i());s.push([e.id,'.toggle-container{display:inline-flex}.toggle-container>input{display:none}.toggle-container>input+label{cursor:pointer;width:2.5rem;height:1.6rem;line-height:1.6rem;background:#909090;border:3px solid #909090;display:inline-block;margin:0 10px;border-radius:50px;position:relative}.toggle-container>input+label:after{content:"";position:absolute;left:0;width:1.3rem;height:100%;background:#fff;border-radius:50%;transition:.3s}.toggle-container>input:checked+label{background-color:#007bff;border-color:#007bff}.toggle-container>input:checked+label:after{left:100%;transform:translateX(-100%)}',"",{version:3,sources:["webpack://./node_modules/@plumejs/ui/dist/mjs/src/ui/toggle/toggle.component.scss"],names:[],mappings:"AAAA,kBACE,mBAAA,CAEA,wBACE,YAAA,CAEA,8BACE,cAAA,CACA,YAAA,CACA,aAAA,CACA,kBAAA,CACA,kBAAA,CACA,wBAAA,CACA,oBAAA,CACA,aAAA,CACA,kBAAA,CACA,iBAAA,CAEA,oCACE,UAAA,CACA,iBAAA,CACA,MAAA,CACA,YAAA,CACA,WAAA,CACA,eAAA,CACA,iBAAA,CACA,cAAA,CAIJ,sCACE,wBAAA,CACA,oBAAA,CAEA,4CACE,SAAA,CACA,2BAAA",sourcesContent:[".toggle-container {\n  display: inline-flex;\n\n  & > input {\n    display: none;\n\n    & + label {\n      cursor: pointer;\n      width: 2.5rem;\n      height: 1.6rem;\n      line-height: 1.6rem;\n      background: #909090;\n      border: 3px solid #909090;\n      display: inline-block;\n      margin: 0 10px;\n      border-radius: 50px;\n      position: relative;\n\n      &:after {\n        content: '';\n        position: absolute;\n        left: 0;\n        width: 1.3rem;\n        height: 100%;\n        background: #fff;\n        border-radius: 50%;\n        transition: 0.3s;\n      }\n    }\n\n    &:checked + label {\n      background-color: rgb(0, 123, 255);\n      border-color: rgb(0, 123, 255);\n\n      &:after {\n        left: 100%;\n        transform: translateX(-100%);\n      }\n    }\n  }\n}\n"],sourceRoot:""}]),t.Z=s}}]);
//# sourceMappingURL=../sourcemaps/558.js.map