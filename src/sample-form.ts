import { Component, html, useFormFields } from "plumejs";
// https://blog.logrocket.com/forms-in-react-in-2020/

@Component({
	selector: "sample-form",
})
class SampleForm {
	sampleformFields: any;
	createChangeHandler: any;
	update: any;

	constructor() {
		const { formFields, createChangeHandler } = useFormFields({
            email: "",
            password: "",
            checkme: false,
        });
        this.sampleformFields = formFields;
        this.createChangeHandler = createChangeHandler;
    }

	submitForm(e: Event) {
		e.preventDefault();
		console.log(this.sampleformFields);
		this.update();
	}

	render() {
		return html`
			<div>
				<form onsubmit=${(e:Event) => {this.submitForm(e)}}>
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
					${ JSON.stringify(this.sampleformFields, null, '\t') }
				</code>
			</pre>
		`;
	}
}
