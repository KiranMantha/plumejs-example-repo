"use strict";(self.webpackChunkplumejs_example_repo=self.webpackChunkplumejs_example_repo||[]).push([[951],{501:function(e,s,t){var r=t(537),n=t.n(r),i=t(645),o=t.n(i)()(n());o.push([e.id,".test{list-style:none;margin:0;padding:0}.test li{color:#000}","",{version:3,sources:["webpack://./src/persons/persons-list.scss"],names:[],mappings:"AAEA,MACE,eAAA,CACA,QAAA,CACA,SAAA,CACA,SACE,UAPG",sourcesContent:["$grey: #000;\n\n.test {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  li {\n    color: $grey;\n  }\n}"],sourceRoot:""}]),s.Z=o},951:function(e,s,t){t.r(s);var r=t(655),n=t(394);let i=class{ObservedProperties=["userDetails"];userDetails;render(){return this.userDetails&&this.userDetails.name?n.dy`
        <strong>Person Details</strong>
        <div>Name: ${this.userDetails.name}</div>
        <div>Company: ${this.userDetails.company.name}</div>
      `:n.dy`<div></div>`}};i=(0,r.gn)([(0,n.wA)({selector:"person-details"})],i);var o=t(719),l=t(501);let a=class{getPersons(){return fetch("https://jsonplaceholder.typicode.com/users").then((e=>e.json()))}};a=(0,r.gn)([(0,n.GS)()],a);let p=class{personSrvc;router;persondetails={};update;usersListRef;personDetailsRef;constructor(e,s){this.personSrvc=e,this.router=s,console.log("current route ",this.router.getCurrentRoute())}mount(){this.personSrvc.getPersons().then((e=>{this.renderUsers(e)}))}alertName(e){this.persondetails=e,this.personDetailsRef.setProps({userDetails:e})}renderUsers(e){const s=e.map((e=>n.dy`
        <li
          class="pointer"
          onclick=${()=>{this.alertName(e)}}
        >
          ${e.name}
        </li>
      `));(0,n.sY)(this.usersListRef,n.dy`${s}`)}render(){return n.dy`
      <h4>Sample service injection with http call and passing data to other component</h4>
      Current route data:
      <code>${JSON.stringify(this.router.getCurrentRoute(),null,2)}</code>
      <div class="mt-20 mb-20 content">
        <ul
          ref="${e=>{this.usersListRef=e}}"
        ></ul>
        <person-details
          id="person-details"
          ref="${e=>{this.personDetailsRef=e}}"
        ></person-details>
      </div>
    `}};p=(0,r.gn)([(0,n.wA)({selector:"persons-list",styles:l.Z,deps:[a,o.F]})],p)}}]);
//# sourceMappingURL=../sourcemaps/951.js.map