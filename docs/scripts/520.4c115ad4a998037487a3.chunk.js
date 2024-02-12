"use strict";(self.webpackChunkplumejs_example_repo=self.webpackChunkplumejs_example_repo||[]).push([[520],{760:function(e,s,t){var r=t(648),n=t.n(r),o=t(312),a=t.n(o)()(n());a.push([e.id,".test{list-style:none;margin:0;padding:0}.test li{color:#000}","",{version:3,sources:["webpack://./src/persons/persons-list.scss"],names:[],mappings:"AAEA,MACE,eAAA,CACA,QAAA,CACA,SAAA,CACA,SACE,UAPG",sourcesContent:["$grey: #000;\n\n.test {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  li {\n    color: $grey;\n  }\n}"],sourceRoot:""}]),s.c=a},520:function(e,s,t){t.r(s);var r=t(732),n=t(302);let o=class{renderer;static observedProperties=["personDetails"];constructor(e){this.renderer=e}personDetails;sendDataToParent(){this.renderer.emitEvent("userclick",this.personDetails)}render(){return this.personDetails?.name?n.html`
        <strong>Person Details</strong>
        <div>Name: ${this.personDetails.name}</div>
        <div>Company: ${this.personDetails.company.name}</div>
        <button
          class="button is-info is-light"
          onclick="${()=>{this.sendDataToParent()}}"
        >
          click me and check console
        </button>
      `:n.html`<div></div>`}};o=(0,r.UN)([(0,n.Component)({selector:"person-details",deps:[n.Renderer]})],o);var a=t(128),i=t(760);let l=class{getPersons(){return fetch("https://jsonplaceholder.typicode.com/users").then((e=>e.json()))}};l=(0,r.UN)([(0,n.Injectable)()],l);let c=class{personSrvc;router;users=[];selectedPerson;routeData;constructor(e,s){this.personSrvc=e,this.router=s}mount(){this.personSrvc.getPersons().then((e=>{this.users=e})),this.loadRouteData()}loadRouteData(){this.router.getCurrentRoute().subscribe((e=>{this.routeData={path:e.path,routeParams:Object.fromEntries(e.routeParams),queryParams:Object.fromEntries(e.queryParams),state:e.state}}))}onUserClick(e){console.log("data from app-person-details comp: ",e)}updateUrl(){this.router.navigateTo(`/persons/${Math.random()}/testuser?a=${Math.random()}`)}render(){return n.html`
      <h3>Persons route</h3>
      <span role="tag">sample tag</span><button onclick=${()=>{this.updateUrl()}}>Update url</button>
      <p>
        Current route data: <pre><code>${JSON.stringify(this.routeData,null,4)}</code></pre>
      </p>
      <ul>
        ${this.users.length?this.users.map((e=>n.html`
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
    `}};c=(0,r.UN)([(0,n.Component)({selector:"persons-list",styles:i.c,deps:[l,a.E]})],c)}}]);
//# sourceMappingURL=../sourcemaps/520.js.map