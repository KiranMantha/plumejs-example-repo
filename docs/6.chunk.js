(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{54:function(e,l,a){"use strict";a.r(l);var t=a(0),o=a(1);(()=>{let e=class SampleForm{constructor(){this.multiSelectOptions={data:["option1","option2","option3","option4"],multiple:!0,onchange:e=>{this.multiSelectChangehandler({target:{value:e}})},buttonText:e=>0===e.length?"None selected":e.length>3?e.length+" selected":e.join(", ")};const{formFields:e,createChangeHandler:l}=Object(o.useFormFields)({email:"",password:"",checkme:!1,option:"",options:[],gender:""});this.sampleformFields=e,this.createChangeHandler=l,this.multiSelectChangehandler=this.createChangeHandler("options")}submitForm(e){e.preventDefault(),console.log(this.sampleformFields),this.update()}render(){return o.html`
			<div>
				<form
					onsubmit=${e=>{this.submitForm(e)}}
				>
					<div class="form-group">
						<label for="exampleInputEmail1">Email address</label>
						<input
							type="email"
							class="form-control"
							id="exampleInputEmail1"
							aria-describedby="emailHelp"
							placeholder="Enter email"
							value=${this.sampleformFields.email}
							onchange=${this.createChangeHandler("email")}
						/>
						<small id="emailHelp" class="form-text text-muted"
							>We'll never share your email with anyone else.</small
						>
					</div>
					<div class="form-group">
						<label for="exampleInputPassword1">Password</label>
						<input
							type="password"
							class="form-control"
							id="exampleInputPassword1"
							placeholder="Password"
							value=${this.sampleformFields.password}
							onchange=${this.createChangeHandler("password")}
						/>
					</div>
					<div class="form-group form-check">
						<input
							type="checkbox"
							class="form-check-input"
							id="exampleCheck1"
							checked=${this.sampleformFields.checkme}
							onchange=${this.createChangeHandler("checkme")}
						/>
						<label class="form-check-label" for="exampleCheck1"
							>Check me out</label
						>
					</div>
					<div class="form-group form-check">
						<label>single select</label>
						<select value=${this.sampleformFields.option} onchange=${this.createChangeHandler("option")}>
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
						</select>
					</div>
					<div>
					<label>plumejs multi select</label>
					<multi-select class="d-inline-block" multiSelectOptions=${this.multiSelectOptions}></multi-select>
					</div>
					<div class="form-group form-check">
						<input
							type="checkbox"
							id="gender_male"
							name="gender"
							value="male"
							onchange=${this.createChangeHandler("gender")}
						/>
						<label for="gender_male">Male</label>
						<input
							type="checkbox"
							id="gender_female"
							name="gender"
							value="female"
							onchange=${this.createChangeHandler("gender")}
						/>
						<label for="gender_female">Female</label>
					</div>
					<button type="submit" class="button is-info">Submit</button>
				</form>
			</div>
			<pre>
				<code>
					${JSON.stringify(this.sampleformFields,null,"\t")}
				</code>
			</pre>
		`}};e=Object(t.__decorate)([Object(o.Component)({selector:"sample-form"}),Object(t.__metadata)("design:paramtypes",[])],e)})()}}]);