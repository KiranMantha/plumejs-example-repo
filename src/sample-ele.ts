import { Component, Input, html, Injectable, Router, Ref, useRef, IHooks } from "plumejs";
import './emulated-styles.component';

@Injectable()
class SampleService {
	constructor() {}
	testMeth() {
		console.log("testmethod in sample service");
	}
}

@Injectable()
class TestService {
	constructor(private sampleSrvc: SampleService) {}
	testMeth() {
		this.sampleSrvc.testMeth();
	}

	getUsers() {
		return fetch("https://api.github.com/users?since=135");
	}
}

@Component({
	selector: "test-ele"
})
class TestEle implements IHooks {
	update: any;
	@Input()
	testprops: any = {};

	render() {
		return html`
			<div>
				testing web component2 ${this.testprops.name}
				<button class='button is-small is-info' onclick=${(e: any) => this.counts(e)}>hi</button>
				<input
					value=${this.testprops.name}
					oninput=${(e: any) => this.change(e.target.value)}
				/>
			</div>
		`;
	}

	counts(e: any) {
		this.testprops.oncount("testing from click");
	}

	change(val: string) {
		this.testprops.oncount(val);
	}

	mount() {
		console.log("component loaded");
		console.log("props: ", this.testprops);
	}

	unmount() {
		console.log("component unloaded");
	}
}

@Component({
	selector: "sample-ele"
})
class SampleEle {
	test: string;
	outCount: Function;
	update: any;
	props: any;
	inputField: Ref<HTMLInputElement> = useRef(null);
	constructor(private testSrvc: TestService) {
		this.test = "sample 123";
		this.outCount = this.count.bind(this);
		this.props = {
			oncount: this.outCount,
			name: this.test
		};		
	}

	enablePersonsRoute() {
		window.localStorage.setItem('plumejs', 'now persons route is activated');
	}

	disablePersonsRoute() {
		window.localStorage.removeItem('plumejs');
	}

	render() {
		return html`
			<p>Persons route has <b>canActivate</b> gaurd which check for <i>plumejs</i> key in localstorage. Click enable button to navigate to persons route. Click disable button to disable persons route. </p>
			<div>
				<button class='button is-small is-info' onclick=${ this.enablePersonsRoute } title='click persons nav to check persons route'>Enable Persons route</button>
				<button class='button is-small is-info' style='margin-left: 10px' onclick=${ this.disablePersonsRoute } title='click persons nav to check persons route'>Disable Persons route</button>
			</div>
			<div class='mt-20'>check translation: ${ 'username.greet'.translate({ name: 'test user' })}</div>
			<input type='text' ref=${this.inputField} /><button class='button is-small is-info' onclick=${() => { this.getRef() }}>click</button>
			<div>
				<h1>Sample two way data binding</h1>
				testing web component1 ${this.test}
				<test-ele testprops=${this.props}></test-ele>
			</div>
			${
				[1,2,3].map(()=>{
					return html`<emulated-styles></emulated-styles>`
				})
			}
		`;
	}

	count(val: string) {
		this.test = val;
		this.props.name = val;
		this.update();
	}

	beforeMount() {
		console.log("before mounting...");
	}

	mount() {
		console.log("component loaded");
		console.log(this.inputField);
		this.testSrvc.testMeth();
	}

	unmount() {
		console.log("component unloaded");
	}

	getRef() {
		console.log(this.inputField);
	}
}

