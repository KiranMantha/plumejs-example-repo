"use strict";(self.webpackChunkplumejs_example_repo=self.webpackChunkplumejs_example_repo||[]).push([[483],{974:function(e,s,t){var r=t(537),n=t.n(r),o=t(645),i=t.n(o)()(n());i.push([e.id,".test{list-style:none;margin:0;padding:0}.test li{color:#000}","",{version:3,sources:["webpack://./src/persons/persons-list.scss"],names:[],mappings:"AAEA,MACE,eAAA,CACA,QAAA,CACA,SAAA,CACA,SACE,UAPG",sourcesContent:["$grey: #000;\n\n.test {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  li {\n    color: $grey;\n  }\n}"],sourceRoot:""}]),s.Z=i},483:function(e,s,t){t.r(s);var r=t(655),n=t(385);let o=class{renderer;ObservedProperties=["userDetails"];userDetails;constructor(e){this.renderer=e}sendDataToParent(){this.renderer.emitEvent("userclick",this.userDetails)}render(){return this.userDetails&&this.userDetails.name?n.dy`
        <strong>Person Details</strong>
        <div>Name: ${this.userDetails.name}</div>
        <div>Company: ${this.userDetails.company.name}</div>
        <button
          class="button is-info is-light"
          onclick="${()=>{this.sendDataToParent()}}"
        >
          click me and check console
        </button>
      `:n.dy`<div></div>`}};o=(0,r.gn)([(0,n.wA)({selector:"person-details",deps:[n.Th]})],o);var i=t(719),a=t(974);let l=class{getPersons(){return fetch("https://jsonplaceholder.typicode.com/users").then((e=>e.json()))}};l=(0,r.gn)([(0,n.GS)()],l);let c=class{personSrvc;router;renderer;persondetails={};users=[];personDetailsRef;constructor(e,s,t){this.personSrvc=e,this.router=s,this.renderer=t,console.log("current route ",this.router.getCurrentRoute())}mount(){this.personSrvc.getPersons().then((e=>{this.users=e,setTimeout((()=>{this.renderer.update()}),100)}))}loadPersonDetails(e){this.persondetails=e,this.personDetailsRef.setProps({userDetails:e})}loadRouteData(){const e=this.router.getCurrentRoute();return{path:e.path,routeParams:Object.fromEntries(e.routeParams),queryParams:Object.fromEntries(e.queryParams),state:e.state}}onUserClick(e){console.log("data from app-person-details comp: ",e)}render(){return n.dy`
      <h4>Sample service injection with http call and passing data to other component</h4>
      Current route data:
      <pre><code>${JSON.stringify(this.loadRouteData(),null,4)}</code></pre>
      <div class="mt-20 mb-20 content">
        <ul>
          ${this.users.length?this.users.map((e=>n.dy`
                  <li
                    class="is-clickable"
                    onclick="${()=>{this.loadPersonDetails(e)}}"
                  >
                    ${e.name}
                  </li>
                `)):"loading"}
        </ul>
        <person-details
          id="person-details"
          ref="${e=>{this.personDetailsRef||(this.personDetailsRef=e)}}"
          onuserclick="${e=>{this.onUserClick(e.detail)}}"
        ></person-details>
      </div>
    `}};c=(0,r.gn)([(0,n.wA)({selector:"persons-list",styles:a.Z,deps:[l,i.F,n.Th]})],c)}}]);
//# sourceMappingURL=../sourcemaps/483.js.map