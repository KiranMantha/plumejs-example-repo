"use strict";(self.webpackChunkplumejs_example_repo=self.webpackChunkplumejs_example_repo||[]).push([[184],{184:function(e,l,a){a.r(l);var t=a(732),o=a(302),r=a(404);let n=class{renderer;sampleform;createChangeHandler;multiSelectChangehandler;jsonRef;errorsRef;hasErrors=!1;isSubmitted=!1;dropdownOptions={options:[{label:"Option 1",value:"o1"},{label:"Option 2",value:"o2"},{label:"Option 3",value:"o3"},{label:"Option 4",value:"o4"}],multiple:!0,buttonText:e=>0===e.length?"None selected":e.length>3?e.length+" selected":e.map((e=>e.label)).join(", ")};dropdownRef;constructor(e){this.renderer=e}beforeMount(){this.sampleform=new r.FormBuilder({email:["",[r.Validators.required,r.Validators.pattern(/^[a-z0-9]((\.|\+)?[a-z0-9]){5,}@gmail\.com$/)]],password:"",checkme:!0,option:"1",options:[[]],gender:""}),this.createChangeHandler=this.sampleform.changeHandler,this.multiSelectChangehandler=this.createChangeHandler("options")}submitForm(e){e.preventDefault(),this.hasErrors=!!this.sampleform.errors.size,this.sampleform.valid&&alert("form submitted successfully"),console.log(this.sampleform.value)}resetForm(){this.sampleform.reset()}render(){return o.html`
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
    `}};n=(0,t.UN)([(0,o.Component)({selector:"sample-form",deps:[o.Renderer]})],n)}}]);
//# sourceMappingURL=../sourcemaps/184.js.map