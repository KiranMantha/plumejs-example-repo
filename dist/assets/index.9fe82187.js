var v=Object.defineProperty;var f=(e,s,r)=>s in e?v(e,s,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[s]=r;var l=(e,s,r)=>(f(e,typeof s!="symbol"?s+"":s,r),r);import{C as u,h as a,I as m,R as D,r as P}from"./vendor.75761d15.js";var _=Object.defineProperty,g=Object.getOwnPropertyDescriptor,$=(e,s,r,n)=>{for(var t=n>1?void 0:n?g(s,r):s,o=e.length-1,i;o>=0;o--)(i=e[o])&&(t=(n?i(s,r,t):i(t))||t);return n&&t&&_(s,r,t),t};let c=class{constructor(){l(this,"ObservedProperties",["userDetails"]);l(this,"userDetails")}render(){return this.userDetails&&this.userDetails.name?a`
        <strong>Person Details</strong>
        <div>Name: ${this.userDetails.name}</div>
        <div>Company: ${this.userDetails.company.name}</div>
      `:a`<div></div>`}};c=$([u({selector:"person-details"})],c);var O=`.test {
  list-style: none;
  margin: 0;
  padding: 0;
}
.test li {
  color: #000;
}`,R=Object.defineProperty,j=Object.getOwnPropertyDescriptor,d=(e,s,r,n)=>{for(var t=n>1?void 0:n?j(s,r):s,o=e.length-1,i;o>=0;o--)(i=e[o])&&(t=(n?i(s,r,t):i(t))||t);return n&&t&&R(s,r,t),t};let p=class{getPersons(){return fetch("https://jsonplaceholder.typicode.com/users").then(e=>e.json())}};p=d([m()],p);let h=class{constructor(e,s){l(this,"persondetails",{});l(this,"update");l(this,"usersListRef");l(this,"personDetailsRef");this.personSrvc=e,this.router=s,console.log("current route ",this.router.getCurrentRoute())}mount(){this.personSrvc.getPersons().then(e=>{this.renderUsers(e)})}alertName(e){this.persondetails=e,this.personDetailsRef.setProps({userDetails:e})}renderUsers(e){const s=e.map(r=>a`
        <li
          class="pointer"
          onclick=${()=>{this.alertName(r)}}
        >
          ${r.name}
        </li>
      `);P(this.usersListRef,a`${s}`)}render(){return a`
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
    `}};h=d([u({selector:"persons-list",styles:O,deps:[p,D]})],h);
