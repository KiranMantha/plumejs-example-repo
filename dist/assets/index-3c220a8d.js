var C=Object.defineProperty;var w=(i,e,t)=>e in i?C(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var s=(i,e,t)=>(w(i,typeof e!="symbol"?e+"":e,t),t);import{b as a,I as f,C as b,R as r,c as O,h as l,_ as y}from"./index-3ba15bc1.js";let u=class{constructor(){s(this,"_modalList",new Map)}_addChild(e,t=document.body){t.appendChild(e)}_removeChild(e,t=document.body){t.removeChild(e)}_addModal(e){const t=document.createElement("ui-modal-dialog");this._addChild(t);const o=t,n=o.getInstance(),c=new Date().getTime(),m={onClose:n.onClose,onOpen:n.onOpen,Id:c};return n.onClose.subscribe(()=>{this.close(m)}),o.setProps({modalData:{Id:c,title:e.modalTitle,bodyTemplate:e.renderTemplate(),backdrop:e.backdrop||!1,hideDefaultCloseButton:e.hideDefaultCloseButton||!1}}),e.modalClass&&t.classList.add(e.modalClass),this._modalList.set(c,t),m}show(e){if(!e.renderTemplate)throw Error("Provide renderTemplate function to render html inside modal component.");return this._addModal(e)}close(e){const t=this._modalList.get(e.Id);this._removeChild(t),this._modalList.delete(e.Id)}closeAll(){for(const e of this._modalList.values())this._removeChild(e);this._modalList.clear()}};u=a([f()],u);var d;(function(i){i.Info="info",i.Danger="danger"})(d||(d={}));class v{constructor(e,t=d.Info,o=!1){s(this,"content");s(this,"type");s(this,"index");s(this,"autoHide",!1);this.content=e,this.type=t||d.Info,this.autoHide=o}}let g=class{constructor(){s(this,"_containerModel")}sendMessage(e,t=d.Info,o=!1){const n=new v(e,t,o);this._addMessage(n)}_addChild(e,t=document.body){t.appendChild(e)}_removeChild(e,t=document.body){t.removeChild(e)}_addMessage(e){let t=document.getElementsByTagName("ui-notification-container")[0];if(t||(t=document.createElement("ui-notification-container"),this._addChild(t)),!this._containerModel){const o=t;this._containerModel=o.getInstance(),this._containerModel.onDismiss.subscribe(n=>{n===0&&(this._removeChild(t),this._containerModel=null)})}this._containerModel.setNotifications(e)}};g=a([f()],g);const T="",M={onText:"ON",offText:"OFF",isSelected:!1};let p=class{constructor(e){s(this,"renderer");s(this,"ObservedProperties",["toggleOptions"]);s(this,"toggleOptions",{...M});s(this,"_id",Math.random());this.renderer=e}toggleChange(e){const t=e.target.checked;this.renderer.emitEvent("togglechange",t)}render(){return l`<div class="toggle-container" part="toggle-container">
      <span>${this.toggleOptions.offText.translate()}</span>
      <input
        type="checkbox"
        id="${this._id}"
        checked="${!!this.toggleOptions.isSelected}"
        onchange=${e=>{this.toggleChange(e)}}
      />
      <label for="${this._id}"></label>
      <span>${this.toggleOptions.onText.translate()}</span>
    </div>`}};p=a([b({selector:"ui-toggle-button",standalone:!0,styles:T,deps:[r]}),O("design:paramtypes",[r])],p);const E=Object.freeze(Object.defineProperty({__proto__:null,get ToggleComponent(){return p}},Symbol.toStringTag,{value:"Module"})),N="",_={options:[],multiple:!1,defaultText:"Select",buttonText:null,enableFilter:!1,disable:!1,resetDropdown:!1};let h=class{constructor(e){s(this,"renderer");s(this,"ObservedProperties",["dropdownOptions"]);s(this,"dropdownOptions",{..._});s(this,"_detailsNode");s(this,"_summaryNode");s(this,"_optionsContainerNode");s(this,"_summaryText");s(this,"_isMultiSelect",!1);s(this,"_selectedOptions",[]);this.renderer=e}onPropsChanged(){if(this.dropdownOptions.options.length){this.dropdownOptions={..._,...this.dropdownOptions};const{multiple:e,resetDropdown:t}=this.dropdownOptions;t?(this._optionsContainerNode.innerHTML="",this._selectedOptions=[],this.dropdownOptions.options=this.dropdownOptions.options.map(o=>(o.selected=!1,o))):this._selectedOptions=this.dropdownOptions.options.filter(o=>!!o.selected),this._isMultiSelect=e}}onOptionSelected(e,t,o){this._isMultiSelect?(this.dropdownOptions.options[o].selected=e,this._selectedOptions=this.dropdownOptions.options.filter(n=>!!n.selected)):(this._detailsNode.removeAttribute("open"),this._selectedOptions=[t]),this._summaryNode.textContent=this.getSummaryText(),this.renderer.emitEvent("optionselected",{option:this._isMultiSelect?this._selectedOptions:t})}onToggle(){this._optionsContainerNode.removeAttribute("style"),this._optionsContainerNode.classList.remove("top"),this._detailsNode.open&&this.setDropdownPosition()}getSummaryText(){var e,t;return this._isMultiSelect?this._selectedOptions.length?((t=(e=this.dropdownOptions).buttonText)==null?void 0:t.call(e,this._selectedOptions))||this._selectedOptions.map(o=>o.label).join(","):this.dropdownOptions.defaultText:this._selectedOptions.length?this._selectedOptions[0].label:(this.dropdownOptions.options[0].selected=!0,this.dropdownOptions.options[0].label)}buildItems(){const e=this.dropdownOptions.options.map((t,o)=>l`
        <li>
          <input
            name="select"
            id="id-${o}"
            type="${this._isMultiSelect?"checkbox":"radio"}"
            checked=${!!t.selected}
            onchange=${n=>{this.onOptionSelected(n.target.checked,t,o)}}
          />
          <label for="id-${o}"> ${t.label} </label>
        </li>
      `);if(this.dropdownOptions.enableFilter){const t=l` <li class="filter">
        <input
          type="search"
          oninput=${o=>{this.filterList(o.target.value)}}
        />
      </li>`;e.unshift(t)}return e}filterList(e){const t=this._optionsContainerNode.querySelectorAll("label");Array.from(t).forEach(o=>{const n=o.textContent||o.innerText;e?n.toLowerCase().indexOf(e)!==-1?o.parentElement.classList.remove("hide-item"):o.parentElement.classList.add("hide-item"):o.parentElement.classList.remove("hide-item")})}setDropdownPosition(){this.isInViewPort(this._optionsContainerNode)?this._detailsNode.classList.contains("top")&&(this._optionsContainerNode.removeAttribute("style"),this._detailsNode.classList.remove("top")):(this._optionsContainerNode.style.bottom=this._detailsNode.getBoundingClientRect().height+"px",this._detailsNode.classList.add("top"))}isInViewPort(e){const t=e.getBoundingClientRect();return t.top>=0&&t.left>=0&&t.right<=(window.innerWidth||document.documentElement.clientWidth)&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)}render(){return this.dropdownOptions.options.length?l`
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
            ${this.getSummaryText()}
          </summary>
          <ul
            role="listbox"
            ref=${e=>{this._optionsContainerNode=e}}
          >
            ${this.buildItems()}
          </ul>
        </details>
      `:l``}};h=a([b({selector:"ui-dropdown",styles:N,standalone:!0,deps:[r]}),O("design:paramtypes",[r])],h);const S=Object.freeze(Object.defineProperty({__proto__:null,get DropdownComponent(){return h}},Symbol.toStringTag,{value:"Module"})),R=()=>y(()=>Promise.resolve().then(()=>S),void 0,import.meta.url);export{u as M,g as N,d as a,R as r,E as t};
