"use strict";(self.webpackChunkplumejs_example_repo=self.webpackChunkplumejs_example_repo||[]).push([[629],{629:function(e,l,a){a.r(l);var t=a(655),r=a(376);(0,a(558).aA)();let o=class{renderer;sampleform;createChangeHandler;multiSelectChangehandler;jsonRef;errorsRef;dropdownOptions={options:[{label:"Option 1",value:"o1"},{label:"Option 2",value:"o2"},{label:"Option 3",value:"o3"},{label:"Option 4",value:"o4"}],multiple:!0,buttonText:e=>0===e.length?"None selected":e.length>3?e.length+" selected":e.map((e=>e.label)).join(", ")};dropdownRef;constructor(e){this.renderer=e}beforeMount(){[this.sampleform,this.createChangeHandler]=(0,r.uA)({email:["",r.kI.required,r.kI.pattern(/^[a-z0-9]((\.|\+)?[a-z0-9]){5,}@gmail\.com$/)],password:"",checkme:!1,option:"",options:[[]],gender:""}),this.multiSelectChangehandler=this.createChangeHandler("options")}mount(){this.dropdownRef.setProps({dropdownOptions:this.dropdownOptions})}submitForm(e){e.preventDefault(),this.sampleform.valid&&alert("form submitted successfully"),console.log(this.sampleform),this.errorsRef.innerHTML=JSON.stringify(Object.fromEntries(this.sampleform.errors),null,4),this.jsonRef.innerHTML=JSON.stringify(this.sampleform.value,null,4)}resetForm(){this.sampleform.reset(),this.renderer.update()}render(){return r.dy`
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
              ref=${e=>{this.dropdownRef=e}}
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
              ${JSON.stringify(Object.fromEntries(this.sampleform.errors),null,4)}
            </code>
      </pre>
      <p>Form value</p>
      <pre>
				<code ref=${e=>{this.jsonRef=e}}>
        ${JSON.stringify(this.sampleform.value,null,4)}
				</code>
			</pre>
    `}};o=(0,t.gn)([(0,r.wA)({selector:"sample-form",deps:[r.Th]})],o)}}]);
//# sourceMappingURL=../sourcemaps/629.js.map