var g=Object.defineProperty;var b=(t,e,r)=>e in t?g(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var s=(t,e,r)=>(b(t,typeof e!="symbol"?e+"":e,r),r);import{h as a,C as i}from"./vendor.b39eeca7.js";var u=Object.defineProperty,y=Object.getOwnPropertyDescriptor,h=(t,e,r,d)=>{for(var o=d>1?void 0:d?y(e,r):e,l=t.length-1,n;l>=0;l--)(n=t[l])&&(o=(d?n(e,r,o):n(o))||o);return d&&o&&u(e,r,o),o};let p=class{constructor(){s(this,"ObservedProperties",["category"]);s(this,"category");s(this,"nestedRow")}toggleNestedTable(){this.nestedRow.classList.toggle("hide-row")}populateNestedTable(){return this.category.questions.length?this.category.questions.map(t=>a`<tr>
          <td>${t.id}</td>
          <td>${t.name}</td>
          <td>${t.type}</td>
        </tr>`):a`<tr>
        <td colspan="3">Please add a question</td>
      </tr>`}render(){return this.category?a`
        <tr>
          <td>${this.category.id}</td>
          <td>${this.category.name}</td>
          <td>
            <button
              onclick=${()=>{this.toggleNestedTable()}}
            >
              toggle
            </button>
          </td>
        </tr>
        <tr
          ref=${t=>{this.nestedRow=t}}
          class="hide-row"
        >
          <td colspan="3">
            <table>
              <thead>
                <tr>
                  <th>Question Id</th>
                  <th>Question</th>
                  <th>Type</th>
                </tr>
              </thead>
              <tbody>
                ${this.populateNestedTable()}
              </tbody>
            </table>
          </td>
        </tr>
      `:a``}};p=h([i({selector:"app-row-item",styles:`:host {
      display: table-row-group;
  }
  .hide-row {
      display: none;
  }
  :host > tr > td[colspan] {
      background-color: #eee;
  }
  :host > tr > td[colspan] table {
      background-color: #fff;
      margin-bottom: 0;
  }
  `})],p);let c=class{constructor(){s(this,"categories",[{id:1,name:"category 1",questions:[{id:1,name:"how are you",type:"text"},{id:2,name:"what you do",type:"text"}]},{id:2,name:"category 2",questions:[]}])}render(){return a`
      <table>
        <thead>
          <tr>
            <th>Category Id</th>
            <th>Category Name</th>
            <th></th>
          </tr>
        </thead>
        ${this.categories.map(t=>a`<app-row-item onbindprops=${()=>({category:t})}></app-row-item>`)}
      </table>
    `}};c=h([i({selector:"app-nested-table"})],c);export{c as NestedTable};
