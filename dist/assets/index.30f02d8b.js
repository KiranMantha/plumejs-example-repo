var y=Object.defineProperty;var f=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var h=(i,e,t)=>e in i?y(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,d=(i,e)=>{for(var t in e||(e={}))T.call(e,t)&&h(i,t,e[t]);if(f)for(var t of f(e))x.call(e,t)&&h(i,t,e[t]);return i};var s=(i,e,t)=>(h(i,typeof e!="symbol"?e+"":e,t),t);import{_ as r,I as g,C as O,a as p,b,h as a}from"./vendor.b39eeca7.js";let C=class{constructor(){s(this,"_modalList",new Map)}_addChild(e,t=document.body){t.appendChild(e)}_removeChild(e,t=document.body){t.removeChild(e)}_addModal(e){const t=document.createElement("ui-modal-dialog");this._addChild(t);const o=t,n=o.getInstance(),l=new Date().getTime(),_={onClose:n.onClose,onOpen:n.onOpen,Id:l};return n.onClose.subscribe(()=>{this.close(_)}),o.setProps({modalData:{Id:l,title:e.modalTitle,bodyTemplate:e.renderTemplate(),backdrop:e.backdrop||!1,hideDefaultCloseButton:e.hideDefaultCloseButton||!1}}),e.modalClass&&t.classList.add(e.modalClass),this._modalList.set(l,t),_}show(e){if(!e.renderTemplate)throw Error("Provide renderTemplate function to render html inside modal component.");return this._addModal(e)}close(e){const t=this._modalList.get(e.Id);this._removeChild(t),this._modalList.delete(e.Id)}closeAll(){for(const e of this._modalList.values())this._removeChild(e);this._modalList.clear()}};C=r([g()],C);var c;(function(i){i.Info="info",i.Danger="danger"})(c||(c={}));class M{constructor(e,t=c.Info,o=!1){s(this,"content");s(this,"type");s(this,"index");s(this,"autoHide",!1);this.content=e,this.type=t,this.autoHide=o}}let w=class{constructor(){s(this,"_containerModel")}sendMessage(e,t=c.Info,o=!1){const n=new M(e,t,o);this._addMessage(n)}_addChild(e,t=document.body){t.appendChild(e)}_removeChild(e,t=document.body){t.removeChild(e)}_addMessage(e){let t=document.getElementsByTagName("ui-notification-container")[0];if(t||(t=document.createElement("ui-notification-container"),this._addChild(t)),!this._containerModel){const o=t;this._containerModel=o.getInstance(),this._containerModel.onDismiss.subscribe(n=>{n===0&&(this._removeChild(t),this._containerModel=null)})}this._containerModel.setNotifications(e)}};w=r([g()],w);var S="";const $={onText:"ON",offText:"OFF",isSelected:!1};let m=class{constructor(e){s(this,"renderer");s(this,"ObservedProperties",["toggleOptions"]);s(this,"toggleOptions",d({},$));s(this,"_id",Math.random());this.renderer=e}toggleChange(e){const t=e.target.checked;this.renderer.emitEvent("togglechange",t)}render(){return a`<div class="toggle-container" part="toggle-container">
      <span>${this.toggleOptions.offText.translate()}</span>
      <input
        type="checkbox"
        id="${this._id}"
        checked="${!!this.toggleOptions.isSelected}"
        onchange=${e=>{this.toggleChange(e)}}
      />
      <label for="${this._id}"></label>
      <span>${this.toggleOptions.onText.translate()}</span>
    </div>`}};m=r([O({selector:"ui-toggle-button",styles:S,deps:[p]}),b("design:paramtypes",[p])],m);var P=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",get ToggleComponent(){return m}}),N="";const v={options:[],multiple:!1,defaultText:"Select",buttonText:null,enableFilter:!1,disable:!1,resetDropdown:!1};let u=class{constructor(e){s(this,"renderer");s(this,"ObservedProperties",["dropdownOptions"]);s(this,"dropdownOptions",d({},v));s(this,"_detailsNode");s(this,"_summaryNode");s(this,"_optionsContainerNode");s(this,"_summaryText");s(this,"_isMultiSelect",!1);s(this,"_selectedOptions",[]);this.renderer=e}onPropsChanged(){if(this.dropdownOptions.options.length){this.dropdownOptions=d(d({},v),this.dropdownOptions);const{multiple:e,resetDropdown:t}=this.dropdownOptions;t&&(this._selectedOptions=[],this.dropdownOptions.options=this.dropdownOptions.options.map(o=>(o.selected=!1,o))),this._isMultiSelect=e,this._getSummaryText()}}onOptionSelected(e,t,o){let n="";this._isMultiSelect?(this.dropdownOptions.options[o].selected=e,this._selectedOptions=this.dropdownOptions.options.filter(l=>!!l.selected),this.dropdownOptions.buttonText?n=this.dropdownOptions.buttonText(this._selectedOptions):this._selectedOptions.length?n=this._selectedOptions.map(l=>l.label).join(", "):n=this.dropdownOptions.defaultText):(n=t.label,this._detailsNode.removeAttribute("open")),this._summaryNode.textContent=n,this.renderer.emitEvent("optionselected",{option:this._isMultiSelect?this._selectedOptions:t})}_getSummaryText(){this._selectedOptions=this.dropdownOptions.options.filter(e=>!!e.selected),this._isMultiSelect?this._summaryText=this._selectedOptions.map(e=>e.label).join(",")||this.dropdownOptions.defaultText:this._selectedOptions.length?this._summaryText=this._selectedOptions[0].label:(this.dropdownOptions.options[0].selected=!0,this._summaryText=this.dropdownOptions.options[0].label)}_buildItems(){const e=this.dropdownOptions.options.map((t,o)=>a`
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
      `);if(this.dropdownOptions.enableFilter){const t=a` <li class="filter">
        <input
          type="search"
          oninput=${o=>{this._filterList(o.target.value)}}
        />
      </li>`;e.unshift(t)}return e}_filterList(e){const t=this._optionsContainerNode.querySelectorAll("label");Array.from(t).forEach(o=>{const n=o.textContent||o.innerText;e?n.toLowerCase().indexOf(e)!==-1?o.parentElement.classList.remove("hide-item"):o.parentElement.classList.add("hide-item"):o.parentElement.classList.remove("hide-item")})}render(){return this.dropdownOptions.options.length?a`
        <details
          role="list"
          part="list"
          class="${this.dropdownOptions.disable?"disabled":""}"
          ref=${e=>{this._detailsNode=e}}
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
            ${this._buildItems()}
          </ul>
        </details>
      `:a`<div></div>`}};u=r([O({selector:"ui-dropdown",styles:N,deps:[p]}),b("design:paramtypes",[p])],u);var D=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",get DropdownComponent(){return u}});const A=()=>Promise.resolve().then(function(){return D});export{C as M,w as N,c as a,A as r,P as t};
