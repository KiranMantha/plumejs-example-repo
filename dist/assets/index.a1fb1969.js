import{C as c,h as i,I as d,a as m,r as v}from"./index.85d60b15.js";var f=Object.defineProperty,P=Object.getOwnPropertyDescriptor,D=(e,t,r,o)=>{for(var s=o>1?void 0:o?P(t,r):t,n=e.length-1,a;n>=0;n--)(a=e[n])&&(s=(o?a(t,r,s):a(s))||s);return o&&s&&f(t,r,s),s};let p=class{constructor(){this.ObservedProperties=["userDetails"]}render(){return this.userDetails&&this.userDetails.name?i`
        <strong>Person Details</strong>
        <div>Name: ${this.userDetails.name}</div>
        <div>Company: ${this.userDetails.company.name}</div>
      `:i`<div></div>`}};p=D([c({selector:"person-details"})],p);var O=(()=>`.test{list-style:none;margin:0;padding:0}.test li{color:#000}
`)(),_=Object.defineProperty,g=Object.getOwnPropertyDescriptor,h=(e,t,r,o)=>{for(var s=o>1?void 0:o?g(t,r):t,n=e.length-1,a;n>=0;n--)(a=e[n])&&(s=(o?a(t,r,s):a(s))||s);return o&&s&&_(t,r,s),s};let l=class{getPersons(){return fetch("https://jsonplaceholder.typicode.com/users").then(e=>e.json())}};l=h([d()],l);let u=class{constructor(e,t){this.personSrvc=e,this.router=t,this.persondetails={},console.log("current route ",this.router.getCurrentRoute())}mount(){this.personSrvc.getPersons().then(e=>{this.renderUsers(e)})}alertName(e){this.persondetails=e,this.personDetailsRef.setProps({userDetails:e})}loadRouteData(){const e=this.router.getCurrentRoute();return{path:e.path,routeParams:Object.fromEntries(e.routeParams),queryParams:Object.fromEntries(e.queryParams),state:e.state}}renderUsers(e){const t=e.map(r=>i`
        <li
          class="pointer"
          onclick=${()=>{this.alertName(r)}}
        >
          ${r.name}
        </li>
      `);v(this.usersListRef,i`${t}`)}render(){return i`
      <h4>Sample service injection with http call and passing data to other component</h4>
      Current route data:
      <pre><code>${JSON.stringify(this.loadRouteData(),null,4)}</code></pre>
      <div class="mt-20 mb-20 content">
        <ul
          ref="${e=>{this.usersListRef=e}}"
        ></ul>
        <person-details
          id="person-details"
          ref="${e=>{this.personDetailsRef=e}}"
        ></person-details>
      </div>
    `}};u=h([c({selector:"persons-list",styles:O,deps:[l,m]})],u);
