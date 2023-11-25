"use strict";(self.webpackChunkplumejs_example_repo=self.webpackChunkplumejs_example_repo||[]).push([[483],{7974:function(e,s,t){var r=t(7537),n=t.n(r),o=t(3645),a=t.n(o)()(n());a.push([e.id,".test{list-style:none;margin:0;padding:0}.test li{color:#000}","",{version:3,sources:["webpack://./src/persons/persons-list.scss"],names:[],mappings:"AAEA,MACE,eAAA,CACA,QAAA,CACA,SAAA,CACA,SACE,UAPG",sourcesContent:["$grey: #000;\n\n.test {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  li {\n    color: $grey;\n  }\n}"],sourceRoot:""}]),s.Z=a},2483:function(e,s,t){t.r(s);var r=t(655),n=t(7740);let o=class{renderer;static observedProperties=["personDetails"];constructor(e){this.renderer=e}personDetails;sendDataToParent(){this.renderer.emitEvent("userclick",this.personDetails)}render(){return this.personDetails?.name?n.dy`
        <strong>Person Details</strong>
        <div>Name: ${this.personDetails.name}</div>
        <div>Company: ${this.personDetails.company.name}</div>
        <button
          class="button is-info is-light"
          onclick="${()=>{this.sendDataToParent()}}"
        >
          click me and check console
        </button>
      `:n.dy`<div></div>`}};o=(0,r.gn)([(0,n.wA)({selector:"person-details",deps:[n.Th]})],o);var a=t(8166),i=t(7974);let l=class{getPersons(){return fetch("https://jsonplaceholder.typicode.com/users").then((e=>e.json()))}};l=(0,r.gn)([(0,n.GS)()],l);let c=class{personSrvc;router;users=[];selectedPerson;constructor(e,s){this.personSrvc=e,this.router=s}mount(){this.personSrvc.getPersons().then((e=>{this.users=e}))}loadRouteData(){const e=this.router.getCurrentRoute();return{path:e.path,routeParams:Object.fromEntries(e.routeParams),queryParams:Object.fromEntries(e.queryParams),state:e.state}}onUserClick(e){console.log("data from app-person-details comp: ",e)}updateUrl(){this.router.navigateTo(`/persons/${Math.random()}/testuser?a=${Math.random()}`)}render(){return n.dy`
      <h3>Persons route</h3>
      <span role="tag">sample tag</span><button onclick=${()=>{this.updateUrl()}}>Update url</button>
      <p>
        Current route data: <pre><code>${JSON.stringify(this.loadRouteData(),null,4)}</code></pre>
      </p>
      <ul>
        ${this.users.length?this.users.map((e=>n.dy`
                  <li
                    class="is-clickable"
                    onclick="${()=>{this.selectedPerson=e}}"
                  >
                    ${e.name}
                  </li>
                `)):"loading"}
      </ul>
      <person-details
        data-input=${{personDetails:this.selectedPerson}}
        onuserclick="${e=>{this.onUserClick(e.detail)}}"
      ></person-details>
    `}};c=(0,r.gn)([(0,n.wA)({selector:"persons-list",styles:i.Z,deps:[l,a.F]})],c)}}]);
//# sourceMappingURL=../sourcemaps/483.js.map