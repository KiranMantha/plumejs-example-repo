"use strict";(self.webpackChunkplumejs_example_repo=self.webpackChunkplumejs_example_repo||[]).push([[167],{167:(e,t,s)=>{s.r(t);var o=s(655),n=s(394);let r=class EmulatedStylesComp{constructor(){}render(){return n.dy`<p>my styles are emulated</p>`}};r=(0,o.gn)([(0,n.wA)({selector:"emulated-styles",styles:"\n    :host(.color-1) p { color: green; }\n    :host(.color-2) p { color: blue; }\n    :host(.color-3) p { color: red; }\n  "}),(0,o.w6)("design:paramtypes",[])],r);let l=class SampleService{constructor(){}testMeth(){console.log("testmethod in sample service")}};l=(0,o.gn)([(0,n.GS)(),(0,o.w6)("design:paramtypes",[])],l);let i=class TestService{sampleSrvc;constructor(e){this.sampleSrvc=e}testMeth(){this.sampleSrvc.testMeth()}getUsers(){return fetch("https://api.github.com/users?since=135")}};i=(0,o.gn)([(0,n.GS)(),(0,o.w6)("design:paramtypes",[l])],i);let p=class SampleEle{testSrvc;renderer;test;outCount;props;inputField;testEleRef;constructor(e,t){this.testSrvc=e,this.renderer=t,this.test="sample 123",this.props={name:this.test}}beforeMount(){console.log("before mounting...")}mount(){console.log("component loaded"),console.log(this.inputField),this.testSrvc.testMeth(),this.testEleRef.setProps({testprops:this.props})}unmount(){console.log("component unloaded")}enablePersonsRoute(){window.localStorage.setItem("@plumejs/core","now persons route is activated")}disablePersonsRoute(){window.localStorage.removeItem("@plumejs/core")}updateProps(){this.testEleRef.setProps({testprops:this.props})}count(e){this.test=e,this.props.name=e,this.renderer.update(),this.testEleRef.setProps({testprops:this.props})}getRef(){console.log(this.inputField)}render(){return n.dy`
			<p>Persons route has <b>canActivate</b> gaurd which check for <i>plumejs</i> key in localstorage. Click enable button to navigate to persons route. Click disable button to disable persons route. </p>
			<div>
				<button onclick=${this.enablePersonsRoute} title='click persons nav to check persons route'>Enable Persons route</button>
				<button onclick=${this.disablePersonsRoute} title='click persons nav to check persons route'>Disable Persons route</button>
			</div>
			<div class='mt-20'>check translation: ${"username.greet".translate({name:"test user"})}</div>
			<input type='text' ref=${e=>{this.inputField=e}} />
			<button onclick=${()=>{this.getRef()}}>click</button>
			<div>
				<h1>Sample two way data binding</h1>
				testing web component1 ${this.test}
				<div>
					<button onclick=${()=>{this.updateProps()}}>change props</button>
				</div>
				<test-ele ref="${e=>{this.testEleRef=e}}" oncount="${e=>{this.count(e.detail)}}">
				</test-ele>
			</div>
			${[1,2,3].map((e=>n.dy`<emulated-styles class="color-${e}"></emulated-styles>`))}
		`}};p=(0,o.gn)([(0,n.wA)({selector:"sample-ele"}),(0,o.w6)("design:paramtypes",[i,n.Th])],p);let c=class TestEle{renderer;ObservedProperties=["testprops"];testprops;constructor(e){this.renderer=e}render(){return this.testprops?n.dy`
				<div>
					testing web component2 ${this.testprops.name}
					<button onclick=${e=>this.counts(e)}>hi</button>
					<input
						value=${this.testprops.name}
						oninput=${e=>{this.change(e.target.value),e.target.focus()}}
					/>
					<slot>testing slots</slot>
				</div>
			`:n.dy``}counts(e){this.renderer.emitEvent("count","testing from click")}change(e){this.renderer.emitEvent("count",e)}mount(){console.log("component loaded"),console.log("props: ",this.testprops)}unmount(){console.log("component unloaded")}};c=(0,o.gn)([(0,n.wA)({selector:"test-ele"}),(0,o.w6)("design:paramtypes",[n.Th])],c)}}]);
//# sourceMappingURL=../sourcemaps/167.js.map