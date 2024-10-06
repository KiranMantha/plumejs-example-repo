"use strict";(self.webpackChunkplumejs_example_repo=self.webpackChunkplumejs_example_repo||[]).push([[325],{325:function(e,t,s){s.r(t);var o=s(674),n=s(968);let r=class{render(){return n.qy`<p>my styles are emulated</p>`}};r=(0,o.Cg)([(0,n.uA)({selector:"emulated-styles",styles:"\n    :host(.color-1) p { color: green; }\n    :host(.color-2) p { color: blue; }\n    :host(.color-3) p { color: red; }\n  "})],r);let l=class{testMeth(){console.log("testmethod in sample service")}};l=(0,o.Cg)([(0,n._q)()],l);let i=class{sampleSrvc;constructor(e){this.sampleSrvc=e}testMeth(){this.sampleSrvc.testMeth()}getUsers(){return fetch("https://api.github.com/users?since=135")}};i=(0,o.Cg)([(0,n._q)({deps:[l]})],i);let c=class{testSrvc;renderer;test;greeting=(0,n.vP)("hello world");outCount;props;inputField;testEleRef;constructor(e,t){this.testSrvc=e,this.renderer=t,this.test="sample 123",this.props={name:this.test}}beforeMount(){console.log("before mounting...")}mount(){console.log("component loaded"),console.log(this.inputField),this.testSrvc.testMeth(),this.testEleRef.setProps({testprops:this.props})}unmount(){console.log("component unloaded")}enablePersonsRoute(){window.localStorage.setItem("@plumejs/core","now persons route is activated")}disablePersonsRoute(){window.localStorage.removeItem("@plumejs/core")}updateProps(){this.testEleRef.setProps({testprops:{name:"sample 123"}})}count(e){this.test=e,this.props.name=e,this.testEleRef.setProps({testprops:this.props})}getRef(){console.log(this.inputField)}render(){return n.qy`
      <p>
        Persons route has <b>canActivate</b> gaurd which check for <i>plumejs</i> key in localstorage. Click enable
        button to navigate to persons route. Click disable button to disable persons route.
      </p>
      <div>
        <button onclick=${this.enablePersonsRoute} title="click persons nav to check persons route">
          Enable Persons route
        </button>
        <button onclick=${this.disablePersonsRoute} title="click persons nav to check persons route">
          Disable Persons route
        </button>
      </div>
      <div class="mt-20">check translation: ${"username.greet".translate({name:"test user"})}</div>
      <p>type in below text box and see magic: ${this.greeting()}</p>
      <input
        type="text"
        ref=${e=>{this.inputField=e}}
        value="${this.greeting()}"
        oninput=${e=>{this.greeting.set(e.target.value)}}
      />
      <button
        onclick=${()=>{this.getRef()}}
      >
        click
      </button>
      <div>
        <h1>Sample two way data binding</h1>
        testing web component1 ${this.test}
        <div>
          <button
            onclick=${()=>{this.updateProps()}}
          >
            change props
          </button>
        </div>
        <test-ele
          ref="${e=>{this.testEleRef=e}}"
          oncount="${e=>{this.count(e.detail)}}"
        >
        </test-ele>
      </div>
      ${[1,2,3].map((e=>n.qy`<emulated-styles class="color-${e}"></emulated-styles>`))}
    `}};c=(0,o.Cg)([(0,n.uA)({selector:"sample-ele",deps:[i,n.A4]})],c);let p=class{renderer;testprops;constructor(e){this.renderer=e}render(){return this.testprops?n.qy`
        <div>
          testing web component2 ${this.testprops.name}
          <button onclick=${()=>this.counts()}>hi</button>
          <input
            value=${this.testprops.name}
            oninput=${e=>{this.change(e.target.value),e.target.focus()}}
          />
          <slot>testing slots</slot>
        </div>
      `:n.qy``}counts(){this.renderer.emitEvent("count","testing from click")}change(e){this.renderer.emitEvent("count",e)}mount(){console.log("component loaded"),console.log("props: ",this.testprops)}unmount(){console.log("component unloaded")}};(0,o.Cg)([(0,n.pd)()],p.prototype,"testprops",void 0),p=(0,o.Cg)([(0,n.uA)({selector:"test-ele",deps:[n.A4]})],p)}}]);
//# sourceMappingURL=../sourcemaps/325.js.map