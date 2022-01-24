var d=Object.defineProperty;var p=(e,l,a)=>l in e?d(e,l,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[l]=a;var t=(e,l,a)=>(p(e,typeof l!="symbol"?l+"":l,a),a);import{C as m,a as h,u,h as c}from"./vendor.dafb32b6.js";import{r as f}from"./index.7b5a3c05.js";var b=Object.defineProperty,v=Object.getOwnPropertyDescriptor,g=(e,l,a,r)=>{for(var o=r>1?void 0:r?v(l,a):l,n=e.length-1,i;n>=0;n--)(i=e[n])&&(o=(r?i(l,a,o):i(o))||o);return r&&o&&b(l,a,o),o};f();let s=class{constructor(e){t(this,"sampleformFields");t(this,"createChangeHandler");t(this,"multiSelectChangehandler");t(this,"resetFormFields");t(this,"jsonRef");t(this,"dropdownOptions",{options:[{label:"Option 1",value:"o1"},{label:"Option 2",value:"o2"},{label:"Option 3",value:"o3"},{label:"Option 4",value:"o4"}],multiple:!0,buttonText:e=>e.length===0?"None selected":e.length>3?e.length+" selected":e.map(l=>l.label).join(", ")});t(this,"dropdownRef");this.renderer=e}beforeMount(){[this.sampleformFields,this.createChangeHandler,this.resetFormFields]=u({email:"",password:"",checkme:!1,option:"",options:[],gender:""}),this.multiSelectChangehandler=this.createChangeHandler("options")}mount(){this.dropdownRef.setProps({dropdownOptions:this.dropdownOptions})}submitForm(e){e.preventDefault(),console.log(this.sampleformFields),this.jsonRef.innerHTML=JSON.stringify(this.sampleformFields,null,4)}resetForm(){this.resetFormFields(),this.renderer.update()}render(){return c`
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
              placeholder="Enter email"
              value=${this.sampleformFields.email}
              onchange=${this.createChangeHandler("email")}
            />
            <small id="emailHelp">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div>
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              id="exampleInputPassword1"
              placeholder="Password"
              value=${this.sampleformFields.password}
              onchange=${this.createChangeHandler("password")}
            />
          </div>
          <div>
            <label for="exampleCheck1">
              <input
                type="checkbox"
                id="exampleCheck1"
                checked=${this.sampleformFields.checkme}
                onchange=${this.createChangeHandler("checkme")}
              />
              Check me out
            </label>
          </div>
          <div>
            <label>single select</label>
            <select
              value=${this.sampleformFields.option}
              onchange=${this.createChangeHandler("option")}
            >
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
      <pre>
				<code ref=${e=>{this.jsonRef=e}}>
        ${JSON.stringify(this.sampleformFields,null,4)}
				</code>
			</pre>
    `}};s=g([m({selector:"sample-form",deps:[h]})],s);
