"use strict";(self.webpackChunkplumejs_example_repo=self.webpackChunkplumejs_example_repo||[]).push([[385],{385:function(e,t,s){s.d(t,{wA:function(){return g},B_:function(){return y},GS:function(){return f},Th:function(){return l},kI:function(){return w},dy:function(){return i},uA:function(){return S}});const n=new class{map=new WeakMap;register(e,t){if(this.map.get(e))throw Error(`${e} is already registered service.`);this.map.set(e,t)}getService(e){const t=this.map.get(e);if(t)return t;throw Error(`${e} is not a registered provider.`)}clear(){this.map=new WeakMap}},r=(e,t,s)=>{if(t.length){const r=[];for(const e of t)e.__metadata__?r.push(s):r.push(n.getService(e));return new e(...r)}return new e},o=new class{globalStyles;style_registry;isRootNodeSet;globalStyleTag;constructor(){try{this.globalStyles=new CSSStyleSheet}catch(e){this.globalStyles=""}this.isRootNodeSet=!1,this.globalStyleTag=null}getComputedCss=(e="",t)=>{let s=[];const n=new CSSStyleSheet;if(n.insertRule(":host { display: block; }"),s=t?[n]:[this.globalStyles,n],e){const t=new CSSStyleSheet;t.replace(e),s.push(t)}return s}},{html:i,render:a}=(()=>{const e=/([^\s\\>"'=]+)\s*=\s*(['"]?)$/,t=/<[a-z][^>]+$/i,s=/^attr([^ ]+)/,n=/^insertNode([^ ]+)/,r=e=>{const t={"&":"&amp;","<":"&lt;",">":"&gt;","(":"%28",")":"%29"};let s=JSON.stringify(e);const n=e=>t[e]||e;return s=(e=>e.replace(/[&<>\(\)]/g,n))(s),JSON.parse(s)},o=(e,t)=>{const s=e.options,n=Array.isArray(t)?t:[t];let r,o,i=s.length;for(;i--;){o=s[i];const e=o.getAttribute("value")??(o.textContent.match(/[^\x20\t\r\n\f]+/g)||[]).join(" ");(o.selected=n.indexOf(e)>-1)&&(r=!0)}r||(e.selectedIndex=-1)},i=e=>3===e.nodeType?"text":8===e.nodeType?"comment":e.tagName.toLowerCase(),a=e=>e.childNodes&&e.childNodes.length>0?null:e.textContent,l=(e,t)=>{const s=t?Array.from(t.childNodes):[],n=e?Array.from(e.childNodes):[];let r=s.length-n.length;if(r>0)for(;r>0;r--)s[s.length-r].parentNode.removeChild(s[s.length-r]);n.forEach(((e,n)=>{const r=s[n];if(((e,t)=>{if(!e||!t||1!==e.nodeType||1!==t.nodeType)return;const s=e.attributes,n=t.attributes;for(const{name:r,value:o}of s)/class/.test(r)?Array.from(e.classList).every((e=>{t.classList.contains(e)||t.classList.add(e)})):n[r]&&n[r]===o||t.setAttribute(r,o);for(const{name:r}of n)/class/.test(r)?Array.from(t.classList).every((s=>{e.classList.contains(s)||t.classList.remove(s)})):s[r]||t.removeAttribute(r)})(e,r),!r)return void(t&&t.appendChild(e));if(i(e)!==i(r))return void r.replaceWith(e);const o=a(e);if(o&&o!==a(r))r.textContent=o;else if(r.childNodes.length>0&&e.childNodes.length<1)r.innerHTML="";else{if(r.childNodes.length<1&&e.childNodes.length>0){const t=document.createDocumentFragment();return l(e,t),void r.appendChild(t)}e.childNodes.length>0&&l(e,r)}}))};return{html:(i,...a)=>{let l="";const{length:c}=i;for(let s=1;s<c;s++){const n=a[s-1];let r=!1;l+=i[s-1],e.test(l)&&t.test(l)&&(l=l.replace(e,((e,t,n)=>`attr${s-1}=${n||'"'}${t}${n?"":'"'}`)),r=!0),r||(Array.isArray(n)||n instanceof DocumentFragment?l+=`\x3c!--insertNode${s-1}--\x3e`:l+=n)}l+=i[c-1];const d=(e=>{const t=document.createElement("template");return t.innerHTML=e,t.content})(l.trim());return((e,t)=>{const n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,null);let i=n.nextNode();for(;i;){if(i.eventSubscriptions=[],i.hasAttributes()){const e=Array.from(i.attributes).filter((e=>s.test(e.nodeName)));for(const{nodeName:n,nodeValue:a}of e){const e=s.exec(n)[1];switch(!0){case/^on+/.test(a):{const s=a.slice(2).toLowerCase();i.removeEventListener(s,t[e]),"bindprops"!==s?i.addEventListener(s,t[e]):i.addEventListener(s,(s=>{s.detail.setProps(t[e]())}));break}case/ref/.test(a):i.tagName.includes("-")?i.addEventListener("load",(s=>{t[e](s.detail)})):t[e](i);break;case/^data-+/.test(a):i.setAttribute(`data-${a}`,r(t[e]));break;case/^aria-+/.test(a):i.setAttribute(`aria-${a}`,r(t[e]));break;case/class/.test(a):t[e]?i.classList.add(...t[e].split(" ")):i.setAttribute("class","");break;case/value/.test(a):"select"===i.nodeName.toLowerCase()?o(i,t[e]):i.value=r(t[e]);break;case/disabled/.test(a):case/checked/.test(a):t[e]?i.setAttribute(a,t[e]):i.removeAttribute(a);break;default:i.setAttribute(a,r(t[e]))}i.removeAttribute(n)}}i=n.nextNode()}})(d,a),((e,t)=>{const s=document.createTreeWalker(e,NodeFilter.SHOW_COMMENT,null);let r,o=s.nextNode();for(;o;){if(r=n.exec(o.data)){const n=Array.isArray(t[r[1]])?t[r[1]]:[t[r[1]]];o.replaceWith(...n),s.currentNode=e}o=s.nextNode()}})(d,a),d},render:(e,t)=>{e.children.length?l(t,e):(e.innerHTML="",e.appendChild(t))}}})();class l{shadowRoot;update;emitEvent;static get __metadata__(){return{name:"Renderer"}}}Symbol("klass");const c=(()=>{try{return new CSSStyleSheet,!1}catch(e){return!0}})(),d=(e,t,s,n=!1)=>(e.addEventListener(t,s,n),()=>{e.removeEventListener(t,s,n)}),h={selector:"",root:!1,styles:"",deps:[],standalone:!1},u=(e,t=null)=>{const s=document.createElement("style");return s.innerHTML=e,t&&t.appendChild(s),s},m=(e,t)=>{if((e={...h,...e}).styles=e.styles.toString(),e.root&&!o.isRootNodeSet)o.isRootNodeSet=!0,e.styles&&(o.globalStyleTag=u(e.styles,document.head),o.globalStyles.replace(e.styles));else if(e.root&&o.isRootNodeSet)throw Error("Cannot register duplicate root component in "+e.selector+" component");window.customElements.define(e.selector,class extends HTMLElement{klass;shadow;componentStyleTag=null;eventSubscriptions=[];static get observedAttributes(){return t.observedAttributes||[]}constructor(){if(super(),this.shadow=this.attachShadow({mode:"open"}),!c){const t=o.getComputedCss(e.styles,e.standalone);this.shadow.adoptedStyleSheets=t}this.getInstance=this.getInstance.bind(this)}emulateComponent(){c&&e.styles&&(this.componentStyleTag=u(e.styles))}update(){a(this.shadow,(()=>this.klass.render())()),c&&(e.styles&&this.shadow.insertBefore(this.componentStyleTag,this.shadow.childNodes[0]),o.globalStyleTag&&!e.standalone&&this.shadow.insertBefore(document.importNode(o.globalStyleTag,!0),this.shadow.childNodes[0]))}emitEvent(e,t,s=!0){const n=new CustomEvent(e,{detail:t,bubbles:s});this.dispatchEvent(n)}setProps(e){for(const[t,s]of Object.entries(e))this.klass[t]=s;this.klass.onPropsChanged?.(),this.update()}getInstance(){return this.klass}connectedCallback(){if(this.isConnected){this.emitEvent("load",this),this.emulateComponent();const s=new l;s.update=()=>{this.update()},s.shadowRoot=this.shadow,s.emitEvent=(e,t)=>{this.emitEvent(e,t)},this.klass=r(t,e.deps,s),this.klass.beforeMount&&this.klass.beforeMount(),this.update(),this.klass.mount&&this.klass.mount(),this.emitEvent("bindprops",{setProps:e=>{this.setProps(e)}},!1),this.eventSubscriptions.push(d(window,"onLanguageChange",(()=>{this.update()})))}}attributeChangedCallback(e,t,s){this.klass.onNativeAttributeChanges?.(e,t,s)}disconnectedCallback(){if(this.componentStyleTag&&this.componentStyleTag.remove(),this.klass.unmount?.(),this.eventSubscriptions?.length)for(const e of this.eventSubscriptions)e()}})},p={deps:[]},g=e=>t=>{if(e.selector.indexOf("-")<=0)throw new Error("You need at least 1 dash in the custom element name!");window.customElements.get(e.selector)||(Object.defineProperty(t.prototype,"selector",{get:()=>e.selector}),m(e,t))},f=(e={})=>t=>{e={...p,...e};const s=r(t,e.deps);n.register(t,s)};var b=s(655);let y=class{transition="";constructor(){this.whichTransitionEnd()}onTransitionEnd(e,t,s){let n=!1,r=null;const o=()=>{n||(n=!0,t&&t(),r(),r=null)};r=d(e,this.transition,(()=>{o()})),setTimeout(o,s)}animationsComplete(e){return e.getAnimations?Promise.allSettled(e.getAnimations().map((e=>e.finished))):Promise.allSettled([!0])}whichTransitionEnd(){const e=document.createElement("div").style,t={transition:"transitionend",WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"otransitionend"};for(const s in t)if(void 0!==e[s]){this.transition=t[s];break}}};y=(0,b.gn)([f(),(0,b.w6)("design:paramtypes",[])],y);class v{_initialValues;_controls;_errors=new Map;constructor(e,t){this._initialValues=e,this._controls=t}get errors(){return this._errors}get valid(){return this._checkValidity(),!this._errors.size}get value(){const e={};for(const[t,s]of Object.entries(this._controls))e[t]=s.value;return e}get(e){return this._controls[e]}reset(e={}){for(const t in this._controls)this._controls[t].value=e[t]||this._initialValues[t];this._errors.clear()}_checkValidity(){this._errors.clear();for(const e in this._controls){const t=this._controls[e].value,s=this._controls[e].validators;this._controls[e].errors=null;for(const n of s){const s=n(t);null!==s&&(this._errors.has(e)?(this._errors.set(e,{...this._errors.get(e),...s}),this._controls[e].errors={...this._controls[e].errors,...s}):(this._errors.set(e,s),this._controls[e].errors=s))}}}}const S=e=>{const t={},s={};for(const[n,r]of Object.entries(e)){const e=Array.isArray(r)?r:[r];t[n]={value:e.shift(),validators:e,errors:null},s[n]=t[n].value}const n=new v(s,t);return[n,e=>t=>{const s=(e=>{let t;switch(e.nodeName&&e.nodeName.toLowerCase()){case"input":case"textarea":t=["radio","checkbox"].includes(e.type)?!!e.checked&&(null===e.value||"on"===e.value||e.value):e.value;break;case"select":{const s="select-one"===e.type,n=[...Array.from(e.options)].filter((e=>e.selected)).map((e=>e.value??(e.textContent.match(/[^\x20\t\r\n\f]+/g)||[]).join(" ")));t=s?n[0]:n;break}default:t=e.value}return t})(t.target);n.get(e).value=s},()=>{n.reset()}]};class w{static required(e){return e.length?null:{required:!0}}static min(e){return t=>t.length>=e?null:{minLength:{requiredLength:e}}}static max(e){return t=>t.length<=e?null:{maxLength:{requiredLength:e}}}static pattern(e){return t=>new RegExp(e).test(t)?null:{pattern:!0}}}}}]);
//# sourceMappingURL=../sourcemaps/385.js.map