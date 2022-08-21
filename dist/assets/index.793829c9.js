import{h as r,C as h}from"./index.adbef661.js";var c=Object.defineProperty,u=Object.getOwnPropertyDescriptor,p=(t,o,a,s)=>{for(var e=s>1?void 0:s?u(o,a):o,d=t.length-1,i;d>=0;d--)(i=t[d])&&(e=(s?i(o,a,e):i(e))||e);return s&&e&&c(o,a,e),e};let l=class{constructor(){this.ObservedProperties=["category"]}toggleNestedTable(){this.nestedRow.classList.toggle("hide-row")}populateNestedTable(){return this.category.questions.length?this.category.questions.map(t=>r`<tr>
          <td>${t.id}</td>
          <td>${t.name}</td>
          <td>${t.type}</td>
        </tr>`):r`<tr>
        <td colspan="3">Please add a question</td>
      </tr>`}render(){return this.category?r`
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
      `:r``}};l=p([h({selector:"app-row-item",styles:`:host {
      display: table-row-group;
  }
  .hide-row {
      display: none;
  }
  `})],l);let n=class{constructor(){this.categories=[{id:1,name:"category 1",questions:[{id:1,name:"how are you",type:"text"},{id:2,name:"what you do",type:"text"}]},{id:2,name:"category 2",questions:[]}]}render(){return r`
      <table>
        <thead>
          <tr>
            <th>Category Id</th>
            <th>Category Name</th>
            <th></th>
          </tr>
        </thead>
        ${this.categories.map(t=>r`<app-row-item onbindprops=${()=>({category:t})}></app-row-item>`)}
      </table>
    `}};n=p([h({selector:"app-nested-table"})],n);export{n as NestedTable};
