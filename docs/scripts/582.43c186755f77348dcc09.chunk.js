"use strict";(self.webpackChunkplumejs_example_repo=self.webpackChunkplumejs_example_repo||[]).push([[582],{1582:function(e,t,r){r.r(t);var l=r(655),s=r(7740),o=Object.defineProperty,a=(e,t,r)=>(((e,t,r)=>{t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r})(e,"symbol"!=typeof t?t+"":t,r),r);class n{constructor(e){a(this,"_initialValues"),a(this,"_controls",Object.create(null)),a(this,"_errors",new Map),this._initialValues=e;for(const[t,r]of Object.entries(e)){const e=[...Array.isArray(r)?r:[r]];this._controls[t]={value:e[0],validators:e.length>1?e[1]:[]}}this.changeHandler=this.changeHandler.bind(this),this.getControl=this.getControl.bind(this),this.reset=this.reset.bind(this)}get errors(){return this._checkValidity(),this._errors}get valid(){return this._checkValidity(),!this._errors.size}get value(){const e={};for(const[t,r]of Object.entries(this._controls))e[t]=r.value;return e}getControl(e){return this._controls[e]}changeHandler(e){return t=>{const r=(e=>{let t;switch(e.nodeName&&e.nodeName.toLowerCase()){case"input":case"textarea":t=["radio","checkbox"].includes(e.type)?!!e.checked&&(null===e.value||"on"===e.value||e.value):e.value;break;case"select":{const r="select-one"===e.type,l=[...Array.from(e.options)].filter((e=>e.selected)).map((e=>e.value??(e.textContent.match(/[^\x20\t\r\n\f]+/g)||[]).join(" ")));t=r?l[0]:l;break}default:t=e.value}return t})(t.target);this.getControl(e).value=r,this._isTouched=!0}}reset(){for(const[e,t]of Object.entries(this._initialValues)){const r=[...Array.isArray(t)?t:[t]];this._controls[e].value=JSON.parse(JSON.stringify(r))[0]}this._errors.clear(),this._isTouched=!1}_checkValidity(){this._errors.clear(),this._isTouched=!0;for(const e in this._controls){const t=this._controls[e].value,r=this._controls[e].validators;this._controls[e].errors=null;for(const l of r){const r=l(t);null!==r&&(this._errors.has(e)?(this._errors.set(e,{...this._errors.get(e),...r}),this._controls[e].errors={...this._controls[e].errors,...r}):(this._errors.set(e,r),this._controls[e].errors=r))}}}}class i{static required(e){return e.length?null:{required:!0}}static min(e){return t=>t.length>=e?null:{minLength:{requiredLength:e}}}static max(e){return t=>t.length<=e?null:{maxLength:{requiredLength:e}}}static pattern(e){return t=>new RegExp(e).test(t)?null:{pattern:!0}}}let h=class{renderer;sampleform;createChangeHandler;multiSelectChangehandler;jsonRef;errorsRef;hasErrors=!1;dropdownOptions={options:[{label:"Option 1",value:"o1"},{label:"Option 2",value:"o2"},{label:"Option 3",value:"o3"},{label:"Option 4",value:"o4"}],multiple:!0,buttonText:e=>0===e.length?"None selected":e.length>3?e.length+" selected":e.map((e=>e.label)).join(", ")};dropdownRef;constructor(e){this.renderer=e}beforeMount(){this.sampleform=new n({email:["",[i.required,i.pattern(/^[a-z0-9]((\.|\+)?[a-z0-9]){5,}@gmail\.com$/)]],password:"",checkme:!1,option:"",options:[[]],gender:""}),this.createChangeHandler=this.sampleform.changeHandler,this.multiSelectChangehandler=this.createChangeHandler("options")}submitForm(e){e.preventDefault(),this.hasErrors=!!this.sampleform.errors.size,this.sampleform.valid&&alert("form submitted successfully"),console.log(this.sampleform)}resetForm(){this.sampleform.reset()}render(){return s.dy`
      <div>
        <form
          onsubmit=${e=>{this.submitForm(e)}}
        >
          <div>
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter gmail id"
              value=${this.sampleform.getControl("email").value}
              oninput=${this.createChangeHandler("email")}
            />
            <small id="emailHelp"> We'll never share your email with anyone else. </small>
          </div>
          <div>
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              id="exampleInputPassword1"
              placeholder="Password"
              value=${this.sampleform.getControl("password").value}
              oninput=${this.createChangeHandler("password")}
            />
          </div>
          <div>
            <label for="exampleCheck1">
              <input
                type="checkbox"
                id="exampleCheck1"
                checked=${this.sampleform.getControl("checkme").value}
                onchange=${this.createChangeHandler("checkme")}
              />
              Check me out
            </label>
          </div>
          <div>
            <label>single select</label>
            <select value=${this.sampleform.getControl("option").value} onchange=${this.createChangeHandler("option")}>
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
              data-input=${{dropdownOptions:this.dropdownOptions}}
              onoptionselected=${e=>{this.multiSelectChangehandler({target:{value:e.detail}})}}
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
            <code ref=${e=>{this.errorsRef=e}}>
              ${this.hasErrors?JSON.stringify(Object.fromEntries(this.sampleform.errors),null,4):null}
            </code>
      </pre>
      <p>Form value</p>
      <pre>
				<code ref=${e=>{this.jsonRef=e}}>
        ${JSON.stringify(this.sampleform.value,null,4)}
				</code>
			</pre>
    `}};h=(0,l.gn)([(0,s.wA)({selector:"sample-form",deps:[s.Th]})],h)}}]);
//# sourceMappingURL=../sourcemaps/582.js.map