"use strict";(self.webpackChunkplumejs_example_repo=self.webpackChunkplumejs_example_repo||[]).push([[541],{541:function(e,l,t){t.r(l);var r=t(674),o=t(968),s=t(632);let i=class{renderer;sampleform;multiSelectChangehandler;jsonRef;errorsRef;hasErrors=!1;isSubmitted=!1;dropdownOptions={options:[{label:"Option 1",value:"o1"},{label:"Option 2",value:"o2"},{label:"Option 3",value:"o3"},{label:"Option 4",value:"o4"}],multiple:!0,buttonText:e=>0===e.length?"None selected":e.length>3?e.length+" selected":e.map((e=>e.label)).join(", ")};dropdownRef;constructor(e){this.renderer=e}beforeMount(){this.sampleform=new s.ok({email:["",[s.k0.required,s.k0.pattern(/^[a-z0-9]((\.|\+)?[a-z0-9]){5,}@gmail\.com$/)]],password:"",checkme:!0,option:"1",options:[[]],gender:""}),this.multiSelectChangehandler=this.sampleform.register("options").attrs.onchange}submitForm(e){e.preventDefault(),this.hasErrors=!!this.sampleform.errors.size,this.sampleform.valid&&alert("form submitted successfully"),console.log(this.sampleform.value)}resetForm(){this.sampleform.reset()}registerWithoutValue(e){const l=this.sampleform.register(e);return delete l.attrs.value,l}render(){return o.qy`
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
              ${this.sampleform.register("email")}
            />
            <small id="emailHelp"> We'll never share your email with anyone else. </small>
          </div>
          <div>
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              id="exampleInputPassword1"
              placeholder="Password"
              ${this.sampleform.register("password")}
            />
          </div>
          <div>
            <label for="exampleCheck1">
              <input
                type="checkbox"
                id="exampleCheck1"
                ${this.registerWithoutValue("checkme")}
                checked=${this.sampleform.getControl("checkme").value}
              />
              Check me out
            </label>
          </div>
          <div>
            <label>single select</label>
            <select ${this.sampleform.register("option")}>
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
              <input type="radio" id="gender_male" name="gender" value="male" ${this.registerWithoutValue("gender")} />
              Male
            </label>
            <label for="gender_female">
              <input
                type="radio"
                id="gender_female"
                name="gender"
                value="female"
                ${this.registerWithoutValue("gender")}
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
    `}};i=(0,r.Cg)([(0,o.uA)({selector:"sample-form",deps:[o.A4]})],i)}}]);
//# sourceMappingURL=../sourcemaps/541.js.map