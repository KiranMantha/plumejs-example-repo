var m=Object.defineProperty;var h=(r,e,t)=>e in r?m(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var n=(r,e,t)=>(h(r,typeof e!="symbol"?e+"":e,t),t);import{C as p,R as f,h as v}from"./index-3ba15bc1.js";import{r as g}from"./index-3c220a8d.js";const b=r=>{let e;switch(r.nodeName&&r.nodeName.toLowerCase()){case"input":case"textarea":{["radio","checkbox"].includes(r.type)?e=r.checked?r.value!==null&&r.value!=="on"?r.value:!0:!1:e=r.value;break}case"select":{const t=r.type==="select-one",o=[...Array.from(r.options)].filter(l=>l.selected).map(l=>l.value??(l.textContent.match(/[^\x20\t\r\n\f]+/g)||[]).join(" "));e=t?o[0]:o;break}default:{e=r.value;break}}return e};class _{constructor(e,t){n(this,"_initialValues");n(this,"_controls");n(this,"_errors",new Map);this._initialValues=e,this._controls=t}get errors(){return this._errors}get valid(){return this._checkValidity(),!this._errors.size}get value(){const e={};for(const[t,s]of Object.entries(this._controls))e[t]=s.value;return e}get(e){return this._controls[e]}reset(e={}){for(const t in this._controls)this._controls[t].value=e[t]||this._initialValues[t];this._errors.clear()}_checkValidity(){this._errors.clear();for(const e in this._controls){const t=this._controls[e].value,s=this._controls[e].validators;this._controls[e].errors=null;for(const o of s){const l=o(t);l!==null&&(this._errors.has(e)?(this._errors.set(e,{...this._errors.get(e),...l}),this._controls[e].errors={...this._controls[e].errors,...l}):(this._errors.set(e,l),this._controls[e].errors=l))}}}}const y=r=>{const e={},t={};for(const[a,i]of Object.entries(r)){const c=Array.isArray(i)?i:[i];e[a]={value:c.shift(),validators:c,errors:null},t[a]=e[a].value}const s=new _(t,e);return[s,a=>i=>{const c=b(i.target);s.get(a).value=c},()=>{s.reset()}]};class u{static required(e){return e.length?null:{required:!0}}static min(e){return t=>t.length>=e?null:{minLength:{requiredLength:e}}}static max(e){return t=>t.length<=e?null:{maxLength:{requiredLength:e}}}static pattern(e){return t=>new RegExp(e).test(t)?null:{pattern:!0}}}var w=Object.defineProperty,C=Object.getOwnPropertyDescriptor,x=(r,e,t,s)=>{for(var o=s>1?void 0:s?C(e,t):e,l=r.length-1,a;l>=0;l--)(a=r[l])&&(o=(s?a(e,t,o):a(o))||o);return s&&o&&w(e,t,o),o};g();let d=class{constructor(r){n(this,"sampleform");n(this,"createChangeHandler");n(this,"multiSelectChangehandler");n(this,"jsonRef");n(this,"errorsRef");n(this,"dropdownOptions",{options:[{label:"Option 1",value:"o1"},{label:"Option 2",value:"o2"},{label:"Option 3",value:"o3"},{label:"Option 4",value:"o4"}],multiple:!0,buttonText:r=>r.length===0?"None selected":r.length>3?r.length+" selected":r.map(e=>e.label).join(", ")});n(this,"dropdownRef");this.renderer=r}beforeMount(){[this.sampleform,this.createChangeHandler]=y({email:["",u.required,u.pattern(/^[a-z0-9]((\.|\+)?[a-z0-9]){5,}@gmail\.com$/)],password:"",checkme:!1,option:"",options:[[]],gender:""}),this.multiSelectChangehandler=this.createChangeHandler("options")}mount(){this.dropdownRef.setProps({dropdownOptions:this.dropdownOptions})}submitForm(r){r.preventDefault(),this.sampleform.valid&&alert("form submitted successfully"),console.log(this.sampleform),this.errorsRef.innerHTML=JSON.stringify(Object.fromEntries(this.sampleform.errors),null,4),this.jsonRef.innerHTML=JSON.stringify(this.sampleform.value,null,4)}resetForm(){this.sampleform.reset(),this.renderer.update()}render(){return v`
      <div>
        <form
          onsubmit=${r=>{this.submitForm(r)}}
        >
          <div>
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter gmail id"
              value=${this.sampleform.get("email").value}
              onchange=${this.createChangeHandler("email")}
            />
            <small id="emailHelp"> We'll never share your email with anyone else. </small>
          </div>
          <div>
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              id="exampleInputPassword1"
              placeholder="Password"
              value=${this.sampleform.get("password").value}
              onchange=${this.createChangeHandler("password")}
            />
          </div>
          <div>
            <label for="exampleCheck1">
              <input
                type="checkbox"
                id="exampleCheck1"
                checked=${this.sampleform.get("checkme").value}
                onchange=${this.createChangeHandler("checkme")}
              />
              Check me out
            </label>
          </div>
          <div>
            <label>single select</label>
            <select value=${this.sampleform.get("option").value} onchange=${this.createChangeHandler("option")}>
              <option>select</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          <div class="mb-20">
            <label>plumejs multi select</label>
            <ui-dropdown
              ref=${r=>{this.dropdownRef=r}}
              onoptionselected=${r=>{this.multiSelectChangehandler({target:{value:r.detail}})}}
            ></ui-dropdown>
          </div>
          <div class="mb-20">
            <label for="gender_male">
              <input
                type="radio"
                id="gender_male"
                name="gender"
                value="male"
                onchange=${this.createChangeHandler("gender")}
              />
              Male
            </label>
            <label for="gender_female">
              <input
                type="radio"
                id="gender_female"
                name="gender"
                value="female"
                onchange=${this.createChangeHandler("gender")}
              />
              Female
            </label>
          </div>
          <button type="submit">Submit</button>
          <button
            onclick=${()=>{this.resetForm()}}
          >
            Reset
          </button>
        </form>
      </div>
      <p>Error summary</p>
      <pre>
            <code ref=${r=>{this.errorsRef=r}}>
              ${JSON.stringify(Object.fromEntries(this.sampleform.errors),null,4)}
            </code>
      </pre>
      <p>Form value</p>
      <pre>
				<code ref=${r=>{this.jsonRef=r}}>
        ${JSON.stringify(this.sampleform.value,null,4)}
				</code>
			</pre>
    `}};d=x([p({selector:"sample-form",deps:[f]})],d);
