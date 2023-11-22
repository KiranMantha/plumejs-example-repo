"use strict";(self.webpackChunkplumejs_example_repo=self.webpackChunkplumejs_example_repo||[]).push([[657],{3927:function(e,t,o){var n=o(7537),i=o.n(n),r=o(3645),s=o.n(r)()(i());s.push([e.id,"table.table-bordered tr td div{display:none}table.table-list{border:none;border-spacing:0 15px;margin-top:-15px}table.table-list thead{display:none}table.table-list tr td{text-overflow:ellipsis;overflow:hidden;white-space:nowrap;border-top:1px solid var(--border-color);margin-bottom:10px;vertical-align:bottom;max-width:100%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}table.table-list tr td:first-child{border-left:1px solid var(--border-color);border-top-left-radius:8px;border-bottom-left-radius:8px}table.table-list tr td:last-child{border-right:1px solid var(--border-color);border-top-right-radius:8px;border-bottom-right-radius:8px}table.table-list tr td div{font-size:12px;color:var(--gray-600)}","",{version:3,sources:["webpack://./../plumejs-ui/dist/src/ui/dataGrid/dataGrid.scss"],names:[],mappings:"AAGM,+BACE,YAAA,CAKN,iBACE,WAAA,CACA,qBAAA,CACA,gBAAA,CAEA,uBACE,YAAA,CAGF,uBACE,sBAAA,CACA,eAAA,CACA,kBAAA,CACA,wCAAA,CACA,kBAAA,CACA,qBAAA,CACA,cAAA,CACA,eAAA,CACA,kBAAA,CACA,sBAAA,CAEA,mCACE,yCAAA,CACA,0BAAA,CACA,6BAAA,CAEF,kCACE,0CAAA,CACA,2BAAA,CACA,8BAAA,CAEF,2BACE,cAAA,CACA,qBAAA",sourcesContent:["table {\n  &.table-bordered {\n    tr td {\n      div {\n        display: none;\n      }\n    }\n  }\n\n  &.table-list {\n    border: none;\n    border-spacing: 0 15px;\n    margin-top: -15px;\n  \n    thead {\n      display: none;\n    }\n  \n    tr td {\n      text-overflow: ellipsis;\n      overflow: hidden;\n      white-space: nowrap;\n      border-top: 1px solid var(--border-color);\n      margin-bottom: 10px;\n      vertical-align: bottom;\n      max-width: 100%;\n      overflow: hidden;\n      white-space: nowrap;\n      text-overflow: ellipsis;\n  \n      &:first-child {\n        border-left: 1px solid var(--border-color);\n        border-top-left-radius: 8px;\n        border-bottom-left-radius: 8px;\n      }\n      &:last-child {\n        border-right: 1px solid var(--border-color);\n        border-top-right-radius: 8px;\n        border-bottom-right-radius: 8px;\n      }\n      div {\n        font-size: 12px;\n        color: var(--gray-600);\n      }\n    }\n  }\n}\n"],sourceRoot:""}]),t.Z=s},7310:function(e,t,o){var n=o(7537),i=o.n(n),r=o(3645),s=o.n(r),l=o(1667),A=o.n(l),d=new URL(o(6240),o.b),a=new URL(o(6035),o.b),p=s()(i()),c=A()(d),C=A()(a);p.push([e.id,'details[role=list]{position:relative;margin:0;padding:0;border:none}details[role=list].disabled{cursor:not-allowed}details[role=list].disabled>summary{pointer-events:none;color:rgba(16,16,16,.3)}details[role=list]>summary{list-style:none;cursor:pointer;padding:.5rem 1rem;line-height:1;color:inherit;border:1px solid #ccc;border-radius:2px}details[role=list]>summary::-webkit-details-marker{display:none}details[role=list]>summary::after{content:"";height:20px;width:20px;pointer-events:none;background-image:url('+c+');background-repeat:no-repeat;background-position:center;float:right;transform:rotate(0deg)}details[role=list][open]>summary{border-bottom-left-radius:0;border-bottom-right-radius:0;margin:0}details[role=list][open]>summary::before{position:fixed;top:0;right:0;bottom:0;left:0;z-index:80;display:block;cursor:default;content:" ";background:rgba(0,0,0,0)}details[role=list][open]>summary::after{transform:rotate(180deg)}details[role=list][open]>summary+ul{display:initial}details[role=list][open].top>summary{border-radius:0 0 2px 2px}details[role=list][open].top>summary+ul{border-top:1px solid #ccc;border-bottom:none;border-radius:2px 2px 0 0}details[role=list] summary+ul{display:none;position:absolute;top:auto;left:0;right:0;border:1px solid #ccc;border-top:none;border-bottom-left-radius:2px;border-bottom-right-radius:2px;background-color:#fff;z-index:100;list-style:none;margin:0;padding:0}details[role=list] summary+ul li{box-sizing:border-box;padding:0;color:inherit;margin:0}details[role=list] summary+ul li::marker{content:""}details[role=list] summary+ul li.filter{padding:.5rem 1rem;background-color:#eee;border-bottom:1px solid #ccc}details[role=list] summary+ul li.filter input[type=search]{width:100%;padding:4px;margin:0;background-color:#fff}details[role=list] summary+ul li.hide-item{display:none}details[role=list] summary+ul li input[type=radio],details[role=list] summary+ul li input[type=checkbox]{position:absolute;opacity:0}details[role=list] summary+ul li input[type=radio]:checked+label,details[role=list] summary+ul li input[type=checkbox]:checked+label{border-left-color:#3273dc}details[role=list] summary+ul li input[type=checkbox]+label:before{content:"";margin-right:4px;display:inline-block;width:20px;height:20px;background-color:#fff;border:1px solid;vertical-align:text-bottom}details[role=list] summary+ul li input[type=checkbox]:checked+label:before{background-image:url('+C+");background-repeat:no-repeat;background-position:center;background-size:.8rem auto;background-color:#3273dc;border:1px solid #3273dc}details[role=list] summary+ul li label{cursor:pointer;color:inherit;display:block;position:relative;padding:.5rem 1rem;border-left:3px solid rgba(0,0,0,0);white-space:nowrap;margin:0}details[role=list] summary+ul li label:hover{background-color:#eee}","",{version:3,sources:["webpack://./../plumejs-ui/dist/src/ui/dropdown/dropdown.component.scss"],names:[],mappings:"AAOA,mBACE,iBAAA,CACA,QAAA,CACA,SAAA,CACA,WAAA,CAEA,4BACE,kBAAA,CACA,oCACE,mBAAA,CACA,uBAAA,CAIJ,2BACE,eAAA,CACA,cAAA,CACA,kBAxBK,CAyBL,aAAA,CACA,aAAA,CACA,qBAAA,CACA,iBAAA,CAEA,mDACE,YAAA,CAGF,kCACE,UAAA,CACA,WAAA,CACA,UAAA,CACA,mBAAA,CACA,wDAlCQ,CAmCR,2BAAA,CACA,0BAAA,CACA,WAAA,CACA,sBAAA,CAIJ,iCACE,2BAAA,CACA,4BAAA,CACA,QAAA,CAEA,yCACE,cAAA,CACA,KAAA,CACA,OAAA,CACA,QAAA,CACA,MAAA,CACA,UAAA,CACA,aAAA,CACA,cAAA,CACA,WAAA,CACA,wBAAA,CAEF,wCACE,wBAAA,CAGF,oCACE,eAAA,CAIJ,qCACE,yBAAA,CAEA,wCACE,yBAAA,CACA,kBAAA,CACA,yBAAA,CAIJ,8BACE,YAAA,CACA,iBAAA,CACA,QAAA,CACA,MAAA,CACA,OAAA,CACA,qBAAA,CACA,eAAA,CACA,6BAAA,CACA,8BAAA,CACA,qBAAA,CACA,WAAA,CACA,eAAA,CACA,QAAA,CACA,SAAA,CAEA,iCACE,qBAAA,CACA,SAAA,CACA,aAAA,CACA,QAAA,CAEA,yCACE,UAAA,CAGF,wCACE,kBA9GC,CA+GD,qBA7Ga,CA8Gb,4BAAA,CAEA,2DACE,UAAA,CACA,WAAA,CACA,QAAA,CACA,qBAAA,CAIJ,2CACE,YAAA,CAGF,yGAEE,iBAAA,CACA,SAAA,CAEA,qIACE,yBAjIM,CAsIR,mEACE,UAAA,CACA,gBAAA,CACA,oBAAA,CACA,UAAA,CACA,WAAA,CACA,qBAAA,CACA,gBAAA,CACA,0BAAA,CAGF,2EACE,wDAjJM,CAkJN,2BAAA,CACA,0BAAA,CACA,0BAAA,CACA,wBAtJM,CAuJN,wBAAA,CAIJ,uCACE,cAAA,CACA,aAAA,CACA,aAAA,CACA,iBAAA,CACA,kBAnKC,CAoKD,mCAAA,CACA,kBAAA,CACA,QAAA,CAEA,6CACE,qBAvKW",sourcesContent:["$padder: 0.5rem 1rem;\n$trigger-border-color: #ccc;\n$option-hover-color: #eee;\n$chevron-color: #3273dc;\n$checkmark-url: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23FFF' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E\");\n$chevron-url: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgba(65, 84, 98, 0.999)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\");\n\ndetails[role='list'] {\n  position: relative;\n  margin: 0;\n  padding: 0;\n  border: none;\n\n  &.disabled {\n    cursor: not-allowed;\n    & > summary {\n      pointer-events: none;\n      color: rgba(16, 16, 16, 0.3);\n    }\n  }\n\n  & > summary {\n    list-style: none;\n    cursor: pointer;\n    padding: $padder;\n    line-height: 1;\n    color: inherit;\n    border: 1px solid $trigger-border-color;\n    border-radius: 2px;\n\n    &::-webkit-details-marker {\n      display: none;\n    }\n\n    &::after {\n      content: '';\n      height: 20px;\n      width: 20px;\n      pointer-events: none;\n      background-image: $chevron-url;\n      background-repeat: no-repeat;\n      background-position: center;\n      float: right;\n      transform: rotate(0deg);\n    }\n  }\n\n  &[open] > summary {\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n    margin: 0;\n\n    &::before {\n      position: fixed;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      z-index: 80;\n      display: block;\n      cursor: default;\n      content: ' ';\n      background: transparent;\n    }\n    &::after {\n      transform: rotate(180deg);\n    }\n\n    & + ul {\n      display: initial;\n    }\n  }\n\n  &[open].top > summary {\n    border-radius: 0 0 2px 2px;\n\n    & + ul {\n      border-top: 1px solid $trigger-border-color;\n      border-bottom: none;\n      border-radius: 2px 2px 0 0;\n    }\n  }\n\n  summary + ul {\n    display: none;\n    position: absolute;\n    top: auto;\n    left: 0;\n    right: 0;\n    border: 1px solid $trigger-border-color;\n    border-top: none;\n    border-bottom-left-radius: 2px;\n    border-bottom-right-radius: 2px;\n    background-color: #fff;\n    z-index: 100;\n    list-style: none;\n    margin: 0;\n    padding: 0;\n\n    li {\n      box-sizing: border-box;\n      padding: 0;\n      color: inherit;\n      margin: 0;\n\n      &::marker {\n        content: '';\n      }\n\n      &.filter {\n        padding: $padder;\n        background-color: $option-hover-color;\n        border-bottom: 1px solid $trigger-border-color;\n\n        input[type='search'] {\n          width: 100%;\n          padding: 4px;\n          margin: 0;\n          background-color: #fff;\n        }\n      }\n\n      &.hide-item {\n        display: none;\n      }\n\n      input[type='radio'],\n      input[type='checkbox'] {\n        position: absolute;\n        opacity: 0;\n\n        &:checked + label {\n          border-left-color: $chevron-color;\n        }\n      }\n\n      input[type='checkbox'] {\n        & + label:before {\n          content: '';\n          margin-right: 4px;\n          display: inline-block;\n          width: 20px;\n          height: 20px;\n          background-color: #fff;\n          border: 1px solid;\n          vertical-align: text-bottom;\n        }\n\n        &:checked + label:before {\n          background-image: $checkmark-url;\n          background-repeat: no-repeat;\n          background-position: center;\n          background-size: calc(1rem * 0.8) auto;\n          background-color: $chevron-color;\n          border: 1px solid $chevron-color;\n        }\n      }\n\n      label {\n        cursor: pointer;\n        color: inherit;\n        display: block;\n        position: relative;\n        padding: $padder;\n        border-left: 3px solid transparent;\n        white-space: nowrap;\n        margin: 0;\n\n        &:hover {\n          background-color: $option-hover-color;\n        }\n      }\n    }\n  }\n}\n"],sourceRoot:""}]),t.Z=p},6433:function(e,t,o){var n=o(7537),i=o.n(n),r=o(3645),s=o.n(r)()(i());s.push([e.id,'.stepper{display:flex;flex-direction:column}.stepper .step{position:relative;padding-left:40px;height:100px}.stepper .step:before{content:"";display:inline-block;width:1.5em;height:1.5em;line-height:1.5em;border-radius:100%;background:var(--gray-500);position:absolute;left:0px}.stepper .step:after{content:"";display:inline-block;width:2px;background:var(--gray-500);position:absolute;left:11px;top:0px;bottom:0px}.stepper .step[data-completed=true]:before,.stepper .step[data-completed=true]:after{background:var(--theme)}.stepper .step:last-child{height:auto}.stepper .step:last-child::after{display:none}.stepper .step .title{font-weight:600}.stepper .step .caption{font-size:12px}',"",{version:3,sources:["webpack://./../plumejs-ui/dist/src/ui/stepper/stepper.scss"],names:[],mappings:"AAAA,SACE,YAAA,CACA,qBAAA,CAEA,eACE,iBAAA,CACA,iBAAA,CACA,YAAA,CAEA,sBACE,UAAA,CACA,oBAAA,CACA,WAAA,CACA,YAAA,CACA,iBAAA,CACA,kBAAA,CACA,0BAAA,CACA,iBAAA,CACA,QAAA,CAGF,qBACE,UAAA,CACA,oBAAA,CACA,SAAA,CACA,0BAAA,CACA,iBAAA,CACA,SAAA,CACA,OAAA,CACA,UAAA,CAIA,qFAEE,uBAAA,CAIJ,0BACE,WAAA,CAEA,iCACE,YAAA,CAIJ,sBACE,eAAA,CAGF,wBACE,cAAA",sourcesContent:[".stepper {\n  display: flex;\n  flex-direction: column;\n\n  .step {\n    position: relative;\n    padding-left: 40px;\n    height: 100px;\n\n    &:before {\n      content: '';\n      display: inline-block;\n      width: 1.5em;\n      height: 1.5em;\n      line-height: 1.5em;\n      border-radius: 100%;\n      background: var(--gray-500);\n      position: absolute;\n      left: 0px;\n    }\n\n    &:after {\n      content: '';\n      display: inline-block;\n      width: 2px;\n      background: var(--gray-500);\n      position: absolute;\n      left: 11px;\n      top: 0px;\n      bottom: 0px;\n    }\n\n    &[data-completed='true'] {\n      &:before,\n      &:after {\n        background: var(--theme);\n      }\n    }\n\n    &:last-child {\n      height: auto;\n\n      &::after {\n        display: none;\n      }\n    }\n\n    .title {\n      font-weight: 600;\n    }\n\n    .caption {\n      font-size: 12px;\n    }\n  }\n}\n"],sourceRoot:""}]),t.Z=s},5952:function(e,t,o){var n=o(7537),i=o.n(n),r=o(3645),s=o.n(r)()(i());s.push([e.id,'.toggle-container{display:inline-flex;align-items:center}.toggle-container>input{display:none}.toggle-container>input+label{cursor:pointer;width:2rem;height:1rem;line-height:1rem;background:#909090;border:3px solid #909090;display:inline-block;margin:0 10px;border-radius:50px;position:relative}.toggle-container>input+label:after{content:"";position:absolute;left:0;width:1rem;height:100%;background:#fff;border-radius:50%;transition:.3s}.toggle-container>input:checked+label{background-color:#007bff;border-color:#007bff}.toggle-container>input:checked+label:after{left:100%;transform:translateX(-100%)}',"",{version:3,sources:["webpack://./../plumejs-ui/dist/src/ui/toggle/toggle.component.scss"],names:[],mappings:"AAAA,kBACE,mBAAA,CACA,kBAAA,CAEA,wBACE,YAAA,CAEA,8BACE,cAAA,CACA,UAAA,CACA,WAAA,CACA,gBAAA,CACA,kBAAA,CACA,wBAAA,CACA,oBAAA,CACA,aAAA,CACA,kBAAA,CACA,iBAAA,CAEA,oCACE,UAAA,CACA,iBAAA,CACA,MAAA,CACA,UAAA,CACA,WAAA,CACA,eAAA,CACA,iBAAA,CACA,cAAA,CAIJ,sCACE,wBAAA,CACA,oBAAA,CAEA,4CACE,SAAA,CACA,2BAAA",sourcesContent:[".toggle-container {\n  display: inline-flex;\n  align-items: center;\n\n  & > input {\n    display: none;\n\n    & + label {\n      cursor: pointer;\n      width: 2rem;\n      height: 1rem;\n      line-height: 1rem;\n      background: #909090;\n      border: 3px solid #909090;\n      display: inline-block;\n      margin: 0 10px;\n      border-radius: 50px;\n      position: relative;\n\n      &:after {\n        content: '';\n        position: absolute;\n        left: 0;\n        width: 1rem;\n        height: 100%;\n        background: #fff;\n        border-radius: 50%;\n        transition: 0.3s;\n      }\n    }\n\n    &:checked + label {\n      background-color: rgb(0, 123, 255);\n      border-color: rgb(0, 123, 255);\n\n      &:after {\n        left: 100%;\n        transform: translateX(-100%);\n      }\n    }\n  }\n}\n"],sourceRoot:""}]),t.Z=s},1657:function(e,t,o){o.r(t);var n=o(655),i=o(3069),r=o(4732);let s=class{_modalList=new Map;_addChild(e,t=document.body){t.appendChild(e)}_removeChild(e,t=document.body){t.removeChild(e)}_addModal(e){const t=document.createElement("ui-modal-dialog");this._addChild(t);const o=t,n=o.getInstance(),i=(new Date).getTime(),r={onClose:n.onClose,onOpen:n.onOpen,Id:i};return n.onClose.subscribe((()=>{this.close(r)})),o.setProps({modalData:{Id:i,title:e.modalTitle,bodyTemplate:e.renderTemplate,backdrop:e.backdrop||!1,hideDefaultCloseButton:e.hideDefaultCloseButton||!1}}),e.modalClass&&t.classList.add(e.modalClass),this._modalList.set(i,t),r}show(e){if(!e.renderTemplate)throw Error("Provide renderTemplate function to render html inside modal component.");return this._addModal(e)}close(e){const t=this._modalList.get(e.Id);this._removeChild(t),this._modalList.delete(e.Id)}closeAll(){for(const e of this._modalList.values())this._removeChild(e);this._modalList.clear()}};s=(0,r.gn)([(0,i.GS)()],s);var l=o(4995);class A{content;type;index;autoHide=!1;constructor(e,t=l.k.Info,o=!1){this.content=e,this.type=t||l.k.Info,this.autoHide=o}}let d=class{_containerModel;sendMessage(e,t=l.k.Info,o=!1){const n=new A(e,t,o);this._addMessage(n)}_addChild(e,t=document.body){t.appendChild(e)}_removeChild(e,t=document.body){t.removeChild(e)}_addMessage(e){let t=document.getElementsByTagName("ui-notification-container")[0];if(t||(t=document.createElement("ui-notification-container"),this._addChild(t)),this._containerModel)this._containerModel.setNotifications(e);else{const o=t;setTimeout((()=>{this._containerModel=o.getInstance(),this._containerModel.onDismiss.subscribe((e=>{0===e&&(this._removeChild(t),this._containerModel=null)})),this._containerModel.setNotifications(e)}),0)}}};d=(0,r.gn)([(0,i.GS)()],d),o(2153),o(6462);var a=o(3927);let p=class{renderer;static observedProperties=["gridOptions"];columnHeaders;columnValues;colGroup;rowData;rowActions;tableClassName;variant;gridOptions;constructor(e){this.renderer=e}mount(){this.tableClassName=this.renderer.hostElement.getAttribute("class")}onPropertiesChanged(){console.log(this.gridOptions);const{columns:e,data:t,rowActions:o=[],variant:n="table",colGroup:i=[]}=this.gridOptions;this.columnHeaders=e.map((e=>e.label)),this.columnValues=e.map((e=>e.value)),this.rowData=t,this.rowActions=o,this.variant=n,this.colGroup=i}renderRowActions(e){return this.rowActions.length?i.dy`<td>${this.rowActions.map((t=>t(e)))}</td>`:""}render(){return this.gridOptions?i.dy`
        <table class="${"table"===this.variant?"table-bordered":"table-list table-hover"} ${this.tableClassName}">
          ${this.colGroup.length?i.dy`
                <colgroup>
                  ${this.colGroup.map((e=>i.dy`<col width="${e}"></col>`))}
                </colgroup>
              `:""}
          <thead>
            <tr>
              ${this.columnHeaders.map((e=>i.dy`<th>${e}</th>`))}
              ${this.rowActions.length?i.dy`<th></th>`:""}
            </tr>
          </thead>
          <tbody>
            ${this.rowData.length?this.rowData.map((e=>i.dy`
                    <tr>
                      ${this.columnValues.map(((t,o)=>i.dy`<td title="${e[t]}">
                          <div>${this.columnHeaders[o]}</div>
                          ${e[t]}
                        </td>`))}
                      ${this.renderRowActions(e)}
                    </tr>
                  `)):`<tr><td colspan="${this.columnHeaders.length}" class="center">No Data Found</td></tr>`}
          </tbody>
        </table>
      `:""}};p=(0,r.gn)([(0,i.wA)({selector:"ui-datagrid",styles:a.Z,deps:[i.Th]}),(0,r.w6)("design:paramtypes",[i.Th])],p);var c=o(6433);let C=class{static observedProperties=["stepperOptions","currentStep"];currentStep=1;stepperOptions;render(){return this.stepperOptions?i.dy`<div class="stepper" style="--step: ${this.currentStep}">
        ${this.stepperOptions.steps.map((({title:e,caption:t},o)=>i.dy`<div class="step" data-completed="${this.currentStep>o+1?"true":"false"}">
            <div class="title">${e}</div>
            ${t?i.dy`<div class="caption">${t}</div>`:""}
          </div>`))}
      </div>`:""}};C=(0,r.gn)([(0,i.wA)({selector:"ui-stepper",styles:c.Z})],C);let h=class{modalsrvc;static observedProperties=["nestedModalData"];nestedModalData;dropdownOptions={options:[{label:"Option 1",value:"o1"},{label:"Option 2",value:"o2"},{label:"Option 3",value:"o3"},{label:"Option 4",value:"o4"}],multiple:!1,buttonText:e=>0===e.length?"None selected":e.length>3?e.length+" selected":e.map((e=>e.label)).join(", ")};constructor(e){this.modalsrvc=e}openAnotherModal(){const e=this.modalsrvc.show({renderTemplate:()=>i.dy`<div>i'm nested modal</div>`,modalTitle:"nested modal",modalClass:"nested-class"});e.onOpen.subscribe((()=>{console.log("nested modal open")})),e.onClose.subscribe((()=>{console.log("nested modal closed")}))}render(){return this.nestedModalData?i.dy`
        <div>sample modal</div>
        <div>${this.nestedModalData.message}</div>
        <ui-dropdown
          data-input=${{dropdownOptions:this.dropdownOptions}}
          onoptionselected=${e=>{console.log(e.detail)}}
        ></ui-dropdown>
        <button
          onclick=${()=>{this.openAnotherModal()}}
        >
          open another modal
        </button>
      `:i.dy``}};h=(0,n.gn)([(0,i.wA)({selector:"nested-modal",deps:[s]})],h);var u=o(8166);Promise.all([o.e(547),o.e(669)]).then(o.bind(o,5669)),Promise.all([o.e(547),o.e(407)]).then(o.bind(o,2407)),o.e(580).then(o.bind(o,1580)),Promise.resolve().then(o.bind(o,6462)),Promise.resolve().then(o.bind(o,2153));let g=class{router;modalsrvc;notifySrvc;constructor(e,t,o){this.router=e,this.modalsrvc=t,this.notifySrvc=o}toggleInput={onText:"ON",offText:"OFF"};toggleProps={onText:"",offText:""};dropdownOptions={options:[{label:"Option 1",value:"o1"},{label:"Option 2",value:"o2"},{label:"Option 3",value:"o3"},{label:"Option 4",value:"o4"}],multiple:!1,buttonText:e=>0===e.length?"None selected":e.length>3?e.length+" selected":e.map((e=>e.label)).join(", ")};nestedModalRef;dropdownRef;enableMultiselect(e){this.dropdownOptions.multiple=e,this.dropdownOptions.resetDropdown=!0}disableDropdown(e){this.dropdownOptions.disable=e,this.dropdownOptions.resetDropdown=!0}enableFilter(e){this.dropdownOptions.enableFilter=e,this.dropdownOptions.resetDropdown=!0}mount(){console.log(this.router.getCurrentRoute())}openModal(){const e=this.modalsrvc.show({renderTemplate:()=>i.dy`<nested-modal
          ref=${e=>{this.nestedModalRef=e}}
        ></nested-modal>`,modalTitle:"testing modal",modalClass:"sample-class"});e.onOpen.subscribe((()=>{console.log("main modal open",e.Id),this.nestedModalRef.setProps({nestedModalData:{message:"Hello World"}})})),e.onClose.subscribe((()=>{console.log("main modal closed")}))}notify(){this.notifySrvc.sendMessage("hello world",l.k.Info)}notifyWithAutoHide(){this.notifySrvc.sendMessage("hello world",l.k.Info,!0)}onToggleChange(e){console.log(e)}render(){return i.dy`
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
            ontogglechange=${e=>{this.onToggleChange(e.detail)}}
          ></ui-toggle-button>
        </div>
        <div class="mb-20">
          <h5>Multi select</h5>
          <div>
            <div class="d-flex mb-20">
              <span>enable multi select</span>
              <ui-toggle-button
                data-input=${{toggleOptions:{...this.toggleProps}}}
                ontogglechange=${e=>{this.enableMultiselect(e.detail)}}
              ></ui-toggle-button>
            </div>
            <div class="d-flex mb-20">
              <span>disable dropdown</span>
              <ui-toggle-button
                data-input=${{toggleOptions:{...this.toggleProps}}}
                ontogglechange=${e=>{this.disableDropdown(e.detail)}}
              ></ui-toggle-button>
            </div>
            <div class="d-flex mb-20">
              <span>enable filtering</span>
              <ui-toggle-button
                data-input=${{toggleOptions:{...this.toggleProps}}}
                ontogglechange=${e=>{this.enableFilter(e.detail)}}
              ></ui-toggle-button>
            </div>
          </div>
          <div>
            <ui-dropdown
              data-input=${{dropdownOptions:this.dropdownOptions}}
              onoptionselected=${e=>{console.log(e.detail)}}
            ></ui-dropdown>
          </div>
        </div>
      </div>
    `}};g=(0,n.gn)([(0,i.wA)({selector:"plume-comp",deps:[u.F,s,d]})],g)},6462:function(e,t,o){o.r(t),o.d(t,{DropdownComponent:function(){return l}});var n=o(4732),i=o(3069),r=o(7310);const s={options:[],multiple:!1,defaultText:"Select",buttonText:null,enableFilter:!1,disable:!1,resetDropdown:!1};let l=class{renderer;static observedProperties=["dropdownOptions"];dropdownOptions={...s};_detailsNode;_summaryNode;_optionsContainerNode;_summaryText;_isMultiSelect=!1;_selectedOptions=[];constructor(e){this.renderer=e}onPropertiesChanged(){if(this.dropdownOptions.options.length){this.dropdownOptions={...s,...this.dropdownOptions};const{multiple:e,resetDropdown:t}=this.dropdownOptions;t?(this._optionsContainerNode.innerHTML="",this._selectedOptions=[],this.dropdownOptions.options=this.dropdownOptions.options.map((e=>(e.selected=!1,e)))):this._selectedOptions=this.dropdownOptions.options.filter((e=>!!e.selected)),this._isMultiSelect=e}}onOptionSelected(e,t,o){this._isMultiSelect?(this.dropdownOptions.options[o].selected=e,this._selectedOptions=this.dropdownOptions.options.filter((e=>!!e.selected))):this._selectedOptions=[t],this._summaryNode.textContent=this.getSummaryText(),this.renderer.emitEvent("optionselected",{option:this._isMultiSelect?this._selectedOptions:t})}onToggle(){this._optionsContainerNode.removeAttribute("style"),this._optionsContainerNode.classList.remove("top"),this._detailsNode.open&&this.setDropdownPosition()}getSummaryText(){return this._isMultiSelect?this._selectedOptions.length?this.dropdownOptions.buttonText?.(this._selectedOptions)||this._selectedOptions.map((e=>e.label)).join(","):this.dropdownOptions.defaultText:this._selectedOptions.length?this._selectedOptions[0].label:(this.dropdownOptions.options[0].selected=!0,this.dropdownOptions.options[0].label)}buildItems(){const e=this.dropdownOptions.options.map(((e,t)=>i.dy`
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
      </li>`;e.unshift(t)}return e}filterList(e){const t=this._optionsContainerNode.querySelectorAll("label");Array.from(t).forEach((t=>{const o=t.textContent||t.innerText;e?-1!==o.toLowerCase().indexOf(e)?t.parentElement.classList.remove("hide-item"):t.parentElement.classList.add("hide-item"):t.parentElement.classList.remove("hide-item")}))}setDropdownPosition(){this.isInViewPort(this._optionsContainerNode)?this._detailsNode.classList.contains("top")&&(this._optionsContainerNode.removeAttribute("style"),this._detailsNode.classList.remove("top")):(this._optionsContainerNode.style.bottom=this._detailsNode.getBoundingClientRect().height+"px",this._detailsNode.classList.add("top"))}isInViewPort(e){const t=e.getBoundingClientRect();return t.top>=0&&t.left>=0&&t.right<=(window.innerWidth||document.documentElement.clientWidth)&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)}render(){return this.dropdownOptions.options.length?i.dy`
        <details
          role="list"
          part="list"
          class="${this.dropdownOptions.disable?"disabled":""}"
          data-preserve-attributes="${this._isMultiSelect}"
          ref=${e=>{this._detailsNode=e}}
          ontoggle=${()=>{this.onToggle()}}
        >
          <summary
            aria-haspopup="listbox"
            ref=${e=>{this._summaryNode=e}}
          >
            ${this.getSummaryText()}
          </summary>
          <ul
            role="listbox"
            ref=${e=>{this._optionsContainerNode=e}}
          >
            ${this.buildItems()}
          </ul>
        </details>
      `:i.dy``}};l=(0,n.gn)([(0,i.wA)({selector:"ui-dropdown",styles:r.Z,standalone:!0,deps:[i.Th]}),(0,n.w6)("design:paramtypes",[i.Th])],l)},4995:function(e,t,o){var n;o.d(t,{k:function(){return n}}),function(e){e.Info="info",e.Danger="danger"}(n||(n={}))},2153:function(e,t,o){o.r(t),o.d(t,{ToggleComponent:function(){return l}});var n=o(4732),i=o(3069),r=o(5952);const s={onText:"ON",offText:"OFF",isSelected:!1};let l=class{renderer;static observedProperties=["toggleOptions"];toggleOptions={...s};_id=Math.random();constructor(e){this.renderer=e}onPropertiesChanged(){this.toggleOptions={...s,...this.toggleOptions}}toggleChange(e){const t=e.target.checked;this.renderer.emitEvent("togglechange",t)}render(){return i.dy`<div class="toggle-container" part="toggle-container">
      <span>${this.toggleOptions.offText.translate()}</span>
      <input
        type="checkbox"
        id="${this._id}"
        checked="${!!this.toggleOptions.isSelected}"
        onchange=${e=>{this.toggleChange(e)}}
      />
      <label for="${this._id}"></label>
      <span>${this.toggleOptions.onText.translate()}</span>
    </div>`}};l=(0,n.gn)([(0,i.wA)({selector:"ui-toggle-button",standalone:!0,styles:r.Z,deps:[i.Th]}),(0,n.w6)("design:paramtypes",[i.Th])],l)},6035:function(e){e.exports="data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27%23FFF%27 stroke-width=%274%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Cpolyline points=%2720 6 9 17 4 12%27%3E%3C/polyline%3E%3C/svg%3E"},6240:function(e){e.exports="data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27rgba%2865, 84, 98, 0.999%29%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Cpolyline points=%276 9 12 15 18 9%27%3E%3C/polyline%3E%3C/svg%3E"}}]);
//# sourceMappingURL=../sourcemaps/657.js.map