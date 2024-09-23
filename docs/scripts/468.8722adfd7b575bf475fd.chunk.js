"use strict";(self.webpackChunkplumejs_example_repo=self.webpackChunkplumejs_example_repo||[]).push([[468],{335:function(e,s,t){var r=t(354),n=t.n(r),o=t(314),a=t.n(o)()(n());a.push([e.id,".test{list-style:none;margin:0;padding:0}.test li{color:#000}","",{version:3,sources:["webpack://./src/persons/persons-list.scss"],names:[],mappings:"AAEA,MACE,eAAA,CACA,QAAA,CACA,SAAA,CACA,SACE,UAPG",sourcesContent:["$grey: #000;\n\n.test {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  li {\n    color: $grey;\n  }\n}"],sourceRoot:""}]),s.A=a},468:function(e,s,t){t.r(s);var r=t(674),n=t(968);let o=class{renderer;constructor(e){this.renderer=e}personDetails=(0,n.vP)();onPropertiesChanged(){}sendDataToParent(){this.renderer.emitEvent("userclick",this.personDetails())}render(){return console.log(this.personDetails()),this.personDetails()?.name?n.qy`
        <strong>Person Details</strong>
        <div>Name: ${this.personDetails().name}</div>
        <div>Company: ${this.personDetails().company.name}</div>
        <button
          class="button is-info is-light"
          onclick="${()=>{this.sendDataToParent()}}"
        >
          click me and check console
        </button>
      `:n.qy`<div></div>`}};(0,r.Cg)([(0,n.pd)()],o.prototype,"personDetails",void 0),o=(0,r.Cg)([(0,n.uA)({selector:"person-details",deps:[n.A4]})],o);var a=t(766),i=t(335);let l=class{getPersons(){return fetch("https://jsonplaceholder.typicode.com/users").then((e=>e.json()))}};l=(0,r.Cg)([(0,n._q)()],l);let c=class{personSrvc;router;users=(0,n.vP)([]);selectedPerson=(0,n.vP)({});routeData;constructor(e,s){this.personSrvc=e,this.router=s}mount(){this.personSrvc.getPersons().then((e=>{this.users.set(e)})),this.loadRouteData()}loadRouteData(){this.router.getCurrentRoute().subscribe((e=>{this.routeData={path:e.path,routeParams:Object.fromEntries(e.routeParams),queryParams:Object.fromEntries(e.queryParams),state:e.state}}))}onUserClick(e){console.log("data from app-person-details comp: ",e)}updateUrl(){this.router.navigateTo(`/persons/${Math.random()}/testuser?a=${Math.random()}`)}render(){return n.qy`
      <h3>Persons route</h3>
      <span role="tag">sample tag</span><button onclick=${()=>{this.updateUrl()}}>Update url</button>
      <p>
        Current route data: <pre><code>${JSON.stringify(this.routeData,null,4)}</code></pre>
      </p>
      <ul>
        ${this.users().length?this.users().map((e=>n.qy`
                  <li
                    class="is-clickable"
                    onclick="${()=>{this.selectedPerson.set(e)}}"
                  >
                    ${e.name}
                  </li>
                `)):"loading"}
      </ul>
      <person-details
        data-input=${{personDetails:this.selectedPerson()}}
        onuserclick="${e=>{this.onUserClick(e.detail)}}"
      ></person-details>
    `}};c=(0,r.Cg)([(0,n.uA)({selector:"persons-list",styles:i.A,deps:[l,a.I]})],c)}}]);
//# sourceMappingURL=../sourcemaps/468.js.map