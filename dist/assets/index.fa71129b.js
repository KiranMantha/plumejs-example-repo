var v=Object.defineProperty;var f=(e,s,r)=>s in e?v(e,s,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[s]=r;var l=(e,s,r)=>(f(e,typeof s!="symbol"?s+"":s,r),r);import{C as c,h as a,I as m,R as P,r as D}from"./vendor.dafb32b6.js";var _=Object.defineProperty,g=Object.getOwnPropertyDescriptor,$=(e,s,r,n)=>{for(var t=n>1?void 0:n?g(s,r):s,o=e.length-1,i;o>=0;o--)(i=e[o])&&(t=(n?i(s,r,t):i(t))||t);return n&&t&&_(s,r,t),t};let u=class{constructor(){l(this,"ObservedProperties",["userDetails"]);l(this,"userDetails")}render(){return this.userDetails&&this.userDetails.name?a`
				<strong>Person Details</strong>
				<div>Name: ${this.userDetails.name}</div>
				<div>Company: ${this.userDetails.company.name}</div>
			`:a`<div></div>`}};u=$([c({selector:"person-details"})],u);var O=`.test {
  list-style: none;
  margin: 0;
  padding: 0;
}
.test li {
  color: #000;
}`,R=Object.defineProperty,b=Object.getOwnPropertyDescriptor,d=(e,s,r,n)=>{for(var t=n>1?void 0:n?b(s,r):s,o=e.length-1,i;o>=0;o--)(i=e[o])&&(t=(n?i(s,r,t):i(t))||t);return n&&t&&R(s,r,t),t};let p=class{getPersons(){return fetch("https://jsonplaceholder.typicode.com/users").then(e=>e.json())}};p=d([m({name:"PersonService"})],p);let h=class{constructor(e,s){l(this,"persondetails",{});l(this,"update");l(this,"usersListRef");l(this,"personDetailsRef");this.personSrvc=e,this.router=s,console.log("current route ",this.router.getCurrentRoute())}mount(){this.personSrvc.getPersons().then(e=>{this.renderUsers(e)})}alertName(e){this.persondetails=e,this.personDetailsRef.setProps({userDetails:e})}renderUsers(e){const s=e.map(r=>a`
        <li
          class="pointer"
          onclick=${()=>{this.alertName(r)}}
        >
          ${r.name}
        </li>
      `);D(this.usersListRef,a`${s}`)}render(){return a`
      <h4>
        Sample service injection with http call and passing data to other
        component
      </h4>
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
    `}};h=d([c({selector:"persons-list",styles:O,deps:[p,P]})],h);
