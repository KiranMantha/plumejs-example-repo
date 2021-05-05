(self.webpackChunkunit_testing_plumejs=self.webpackChunkunit_testing_plumejs||[]).push([[528],{528:(t,e,s)=>{"use strict";s.r(e);var o=s(74);(0,o.wA)({selector:"emulated-styles",styles:".test-emulation { color: green;}"})([class{render(){return o.dy`<p class='test-emulation'>my styles are emulated</p>`}}]);(0,o.GS)("SampleService")([class{constructor(){}testMeth(){console.log("testmethod in sample service")}}]);(0,o.GS)("TestService")(["SampleService",class{constructor(t){this.sampleSrvc=t}testMeth(){this.sampleSrvc.testMeth()}getUsers(){return fetch("https://api.github.com/users?since=135")}}]);(0,o.wA)({selector:"test-ele"})([class{constructor(){this.testprops={}}static get inputProp(){return"testprops"}render(){return o.dy`
			<div>
				testing web component2 ${this.testprops.name}
				<button class='button is-small is-info' onclick=${t=>this.counts(t)}>hi</button>
				<input
					value=${this.testprops.name}
					oninput=${t=>this.change(t.target.value)}
				/>
			</div>
		`}counts(t){this.testprops.oncount("testing from click")}change(t){this.testprops.oncount(t)}mount(){console.log("component loaded"),console.log("props: ",this.testprops)}unmount(){console.log("component unloaded")}inputChanged(t,e){console.log({oldValue:t,newValue:e})}}]);(0,o.wA)({selector:"sample-ele"})(["TestService",class{constructor(t){this.testSrvc=t,this.inputField=(0,o.sO)(null),this.test="sample 123",this.outCount=this.count.bind(this),this.props={oncount:this.outCount,name:this.test}}enablePersonsRoute(){window.localStorage.setItem("@plumejs/core","now persons route is activated")}disablePersonsRoute(){window.localStorage.removeItem("@plumejs/core")}updateProps(){this.props=Object.assign(Object.assign({},this.props),{name:Math.random().toString()}),this.update()}render(){return o.dy`
			<p>Persons route has <b>canActivate</b> gaurd which check for <i>plumejs</i> key in localstorage. Click enable button to navigate to persons route. Click disable button to disable persons route. </p>
			<div>
				<button class='button is-small is-info' onclick=${this.enablePersonsRoute} title='click persons nav to check persons route'>Enable Persons route</button>
				<button class='button is-small is-info' style='margin-left: 10px' onclick=${this.disablePersonsRoute} title='click persons nav to check persons route'>Disable Persons route</button>
			</div>
			<div class='mt-20'>check translation: ${"username.greet".translate({name:"test user"})}</div>
			<input type='text' ref=${this.inputField} /><button class='button is-small is-info' onclick=${()=>{this.getRef()}}>click</button>
			<div>
				<h1>Sample two way data binding</h1>
				testing web component1 ${this.test}
				<div>
					<button onclick=${()=>{this.updateProps()}}>change props</button>
				</div>
				<test-ele testprops=${this.props}></test-ele>
			</div>
			${[1,2,3].map((()=>o.dy`<emulated-styles></emulated-styles>`))}
		`}count(t){this.test=t,this.props.name=t,this.update()}beforeMount(){console.log("before mounting...")}mount(){console.log("component loaded"),console.log(this.inputField),this.testSrvc.testMeth()}unmount(){console.log("component unloaded")}getRef(){console.log(this.inputField)}}])}}]);