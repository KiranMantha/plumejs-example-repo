var g=Object.defineProperty;var y=(t,e,r)=>e in t?g(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var a=(t,e,r)=>(y(t,typeof e!="symbol"?e+"":e,r),r);import{h as s,C as p}from"./index-3ba15bc1.js";var u=Object.defineProperty,b=Object.getOwnPropertyDescriptor,c=(t,e,r,d)=>{for(var o=d>1?void 0:d?b(e,r):e,l=t.length-1,i;l>=0;l--)(i=t[l])&&(o=(d?i(e,r,o):i(o))||o);return d&&o&&u(e,r,o),o};let n=class{constructor(){a(this,"ObservedProperties",["category"]);a(this,"category");a(this,"nestedRow")}toggleNestedTable(){this.nestedRow.classList.toggle("hide-row")}populateNestedTable(){return this.category.questions.length?this.category.questions.map(t=>s`<tr>
          <td>${t.id}</td>
          <td>${t.name}</td>
          <td>${t.type}</td>
        </tr>`):s`<tr>
        <td colspan="3">Please add a question</td>
      </tr>`}render(){return this.category?s`
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
      `:s``}};n=c([p({selector:"app-row-item",styles:`:host {
      display: table-row-group;
  }
  .hide-row {
      display: none;
  }
  `})],n);let h=class{constructor(){a(this,"categories",[{id:1,name:"category 1",questions:[{id:1,name:"how are you",type:"text"},{id:2,name:"what you do",type:"text"}]},{id:2,name:"category 2",questions:[]}])}render(){return s`
      <table>
        <thead>
          <tr>
            <th>Category Id</th>
            <th>Category Name</th>
            <th></th>
          </tr>
        </thead>
        ${this.categories.map(t=>s`<app-row-item onbindprops=${()=>({category:t})}></app-row-item>`)}
      </table>
    `}};h=c([p({selector:"app-nested-table"})],h);export{h as NestedTable};
