import{C as a,h as i,I as v,R as b}from"./index.85d60b15.js";var f=Object.defineProperty,g=Object.getOwnPropertyDescriptor,P=(e,s,r,o)=>{for(var t=o>1?void 0:o?g(s,r):s,n=e.length-1,l;n>=0;n--)(l=e[n])&&(t=(o?l(s,r,t):l(t))||t);return o&&t&&f(s,r,t),t};let h=class{render(){return i`<p>my styles are emulated</p>`}};h=P([a({selector:"emulated-styles",styles:`
    :host(.color-1) p { color: green; }
    :host(.color-2) p { color: blue; }
    :host(.color-3) p { color: red; }
  `})],h);var $=Object.defineProperty,_=Object.getOwnPropertyDescriptor,u=(e,s,r,o)=>{for(var t=o>1?void 0:o?_(s,r):s,n=e.length-1,l;n>=0;n--)(l=e[n])&&(t=(o?l(s,r,t):l(t))||t);return o&&t&&$(s,r,t),t};let c=class{testMeth(){console.log("testmethod in sample service")}};c=u([v()],c);let p=class{constructor(e){this.sampleSrvc=e}testMeth(){this.sampleSrvc.testMeth()}getUsers(){return fetch("https://api.github.com/users?since=135")}};p=u([v({deps:[c]})],p);let m=class{constructor(e,s){this.testSrvc=e,this.renderer=s,this.test="sample 123",this.props={name:this.test}}beforeMount(){console.log("before mounting...")}mount(){console.log("component loaded"),console.log(this.inputField),this.testSrvc.testMeth(),this.testEleRef.setProps({testprops:this.props})}unmount(){console.log("component unloaded")}enablePersonsRoute(){window.localStorage.setItem("@plumejs/core","now persons route is activated")}disablePersonsRoute(){window.localStorage.removeItem("@plumejs/core")}updateProps(){this.testEleRef.setProps({testprops:{name:"sample 123"}})}count(e){this.test=e,this.props.name=e,this.renderer.update(),this.testEleRef.setProps({testprops:this.props})}getRef(){console.log(this.inputField)}render(){return i`
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
      <input
        type="text"
        ref=${e=>{this.inputField=e}}
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
      ${[1,2,3].map(e=>i`<emulated-styles class="color-${e}"></emulated-styles>`)}
    `}};m=u([a({selector:"sample-ele",deps:[p,b]})],m);var w=Object.defineProperty,O=Object.getOwnPropertyDescriptor,R=(e,s,r,o)=>{for(var t=o>1?void 0:o?O(s,r):s,n=e.length-1,l;n>=0;n--)(l=e[n])&&(t=(o?l(s,r,t):l(t))||t);return o&&t&&w(s,r,t),t};let d=class{constructor(e){this.renderer=e,this.ObservedProperties=["testprops"]}render(){return this.testprops?i`
        <div>
          testing web component2 ${this.testprops.name}
          <button onclick=${()=>this.counts()}>hi</button>
          <input
            value=${this.testprops.name}
            oninput=${e=>{this.change(e.target.value),e.target.focus()}}
          />
          <slot>testing slots</slot>
        </div>
      `:i``}counts(){this.renderer.emitEvent("count","testing from click")}change(e){this.renderer.emitEvent("count",e)}mount(){console.log("component loaded"),console.log("props: ",this.testprops)}unmount(){console.log("component unloaded")}};d=R([a({selector:"test-ele",deps:[b]})],d);
