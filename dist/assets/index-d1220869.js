var v=Object.defineProperty;var P=(e,s,t)=>s in e?v(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t;var a=(e,s,t)=>(P(e,typeof s!="symbol"?s+"":s,t),t);import{C as h,R as d,h as l,I as D,a as f}from"./index-3ba15bc1.js";var g=Object.defineProperty,b=Object.getOwnPropertyDescriptor,O=(e,s,t,o)=>{for(var r=o>1?void 0:o?b(s,t):s,n=e.length-1,i;n>=0;n--)(i=e[n])&&(r=(o?i(s,t,r):i(r))||r);return o&&r&&g(s,t,r),r};let u=class{constructor(e){a(this,"ObservedProperties",["userDetails"]);a(this,"userDetails");this.renderer=e}sendDataToParent(){this.renderer.emitEvent("userclick",this.userDetails)}render(){return this.userDetails&&this.userDetails.name?l`
        <strong>Person Details</strong>
        <div>Name: ${this.userDetails.name}</div>
        <div>Company: ${this.userDetails.company.name}</div>
        <button
          class="button is-info is-light"
          onclick="${()=>{this.sendDataToParent()}}"
        >
          click me and check console
        </button>
      `:l`<div></div>`}};u=O([h({selector:"person-details",deps:[d]})],u);const _=`.test{list-style:none;margin:0;padding:0}.test li{color:#000}
`;var $=Object.defineProperty,j=Object.getOwnPropertyDescriptor,m=(e,s,t,o)=>{for(var r=o>1?void 0:o?j(s,t):s,n=e.length-1,i;n>=0;n--)(i=e[n])&&(r=(o?i(s,t,r):i(r))||r);return o&&r&&$(s,t,r),r};let c=class{getPersons(){return fetch("https://jsonplaceholder.typicode.com/users").then(e=>e.json())}};c=m([D()],c);let p=class{constructor(e,s,t){a(this,"persondetails",{});a(this,"users",[]);a(this,"personDetailsRef");this.personSrvc=e,this.router=s,this.renderer=t,console.log("current route ",this.router.getCurrentRoute())}mount(){this.personSrvc.getPersons().then(e=>{this.users=e,setTimeout(()=>{this.renderer.update()},100)})}loadPersonDetails(e){this.persondetails=e,this.personDetailsRef.setProps({userDetails:e})}loadRouteData(){const e=this.router.getCurrentRoute();return{path:e.path,routeParams:Object.fromEntries(e.routeParams),queryParams:Object.fromEntries(e.queryParams),state:e.state}}onUserClick(e){console.log("data from app-person-details comp: ",e)}render(){return l`
      <h4>Sample service injection with http call and passing data to other component</h4>
      Current route data:
      <pre><code>${JSON.stringify(this.loadRouteData(),null,4)}</code></pre>
      <div class="mt-20 mb-20 content">
        <ul>
          ${this.users.length?this.users.map(e=>l`
                  <li
                    class="is-clickable"
                    onclick="${()=>{this.loadPersonDetails(e)}}"
                  >
                    ${e.name}
                  </li>
                `):"loading"}
        </ul>
        <person-details
          id="person-details"
          ref="${e=>{this.personDetailsRef=e}}"
          onuserclick="${e=>{this.onUserClick(e.detail)}}"
        ></person-details>
      </div>
    `}};p=m([h({selector:"persons-list",styles:_,deps:[c,f,d]})],p);
