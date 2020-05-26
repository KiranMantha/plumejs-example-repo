(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{52:function(e,a,s){"use strict";s.r(a);var l=s(0),r=s(1);(()=>{let e=class SampleForm{constructor(){const{formFields:e,createChangeHandler:a}=Object(r.useFormFields)({email:"",password:"",checkme:!1});this.sampleformFields=e,this.createChangeHandler=a}submitForm(e){e.preventDefault(),console.log(this.sampleformFields),this.update()}render(){return r.html`
			<div>
				<form onsubmit=${e=>{this.submitForm(e)}}>
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
					<button type="submit" class="button is-info">Submit</button>
				</form>
			</div>
			<pre>
				<code>
					${JSON.stringify(this.sampleformFields,null,"\t")}
				</code>
			</pre>
		`}};e=Object(l.__decorate)([Object(r.Component)({selector:"sample-form"}),Object(l.__metadata)("design:paramtypes",[])],e)})()}}]);