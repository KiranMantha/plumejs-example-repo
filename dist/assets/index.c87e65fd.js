var g=Object.defineProperty;var P=(e,t,o)=>t in e?g(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var i=(e,t,o)=>(P(e,typeof t!="symbol"?t+"":t,o),o);import{C as c,h as p,I as d,a as m}from"./vendor.b39eeca7.js";var $=Object.defineProperty,_=Object.getOwnPropertyDescriptor,w=(e,t,o,r)=>{for(var s=r>1?void 0:r?_(t,o):t,n=e.length-1,l;n>=0;n--)(l=e[n])&&(s=(r?l(t,o,s):l(s))||s);return r&&s&&$(t,o,s),s};let v=class{render(){return p`<p>my styles are emulated</p>`}};v=w([c({selector:"emulated-styles",styles:`
    :host(.color-1) p { color: green; }
    :host(.color-2) p { color: blue; }
    :host(.color-3) p { color: red; }
  `})],v);var O=Object.defineProperty,R=Object.getOwnPropertyDescriptor,a=(e,t,o,r)=>{for(var s=r>1?void 0:r?R(t,o):t,n=e.length-1,l;n>=0;n--)(l=e[n])&&(s=(r?l(t,o,s):l(s))||s);return r&&s&&O(t,o,s),s};let u=class{testMeth(){console.log("testmethod in sample service")}};u=a([d()],u);let h=class{constructor(e){this.sampleSrvc=e}testMeth(){this.sampleSrvc.testMeth()}getUsers(){return fetch("https://api.github.com/users?since=135")}};h=a([d({deps:[u]})],h);let b=class{constructor(e,t){i(this,"test");i(this,"outCount");i(this,"props");i(this,"inputField");i(this,"testEleRef");this.testSrvc=e,this.renderer=t,this.test="sample 123",this.props={name:this.test}}beforeMount(){console.log("before mounting...")}mount(){console.log("component loaded"),console.log(this.inputField),this.testSrvc.testMeth(),this.testEleRef.setProps({testprops:this.props})}unmount(){console.log("component unloaded")}enablePersonsRoute(){window.localStorage.setItem("@plumejs/core","now persons route is activated")}disablePersonsRoute(){window.localStorage.removeItem("@plumejs/core")}updateProps(){this.testEleRef.setProps({testprops:this.props})}count(e){this.test=e,this.props.name=e,this.renderer.update(),this.testEleRef.setProps({testprops:this.props})}getRef(){console.log(this.inputField)}render(){return p`
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
      ${[1,2,3].map(e=>p`<emulated-styles class="color-${e}"></emulated-styles>`)}
    `}};b=a([c({selector:"sample-ele",deps:[h,m]})],b);var S=Object.defineProperty,j=Object.getOwnPropertyDescriptor,E=(e,t,o,r)=>{for(var s=r>1?void 0:r?j(t,o):t,n=e.length-1,l;n>=0;n--)(l=e[n])&&(s=(r?l(t,o,s):l(s))||s);return r&&s&&S(t,o,s),s};let f=class{constructor(e){i(this,"ObservedProperties",["testprops"]);i(this,"testprops");this.renderer=e}render(){return this.testprops?p`
        <div>
          testing web component2 ${this.testprops.name}
          <button onclick=${()=>this.counts()}>hi</button>
          <input
            value=${this.testprops.name}
            oninput=${e=>{this.change(e.target.value),e.target.focus()}}
          />
          <slot>testing slots</slot>
        </div>
      `:p``}counts(){this.renderer.emitEvent("count","testing from click")}change(e){this.renderer.emitEvent("count",e)}mount(){console.log("component loaded"),console.log("props: ",this.testprops)}unmount(){console.log("component unloaded")}};f=E([c({selector:"test-ele",deps:[m]})],f);
