"use strict";(self.webpackChunkplumejs_example_repo=self.webpackChunkplumejs_example_repo||[]).push([[270],{270:function(t,e,a){a.r(e),a.d(e,{NestedTable:function(){return d}});var o=a(674),r=a(968);let n=class{users=(0,r.vP)([]);mount(){fetch("https://jsonplaceholder.typicode.com/users").then((t=>t.json())).then((t=>{this.users.set(t)}))}onFormSubmit(t){t.preventDefault();const e=new FormData(t.currentTarget);console.log(JSON.stringify(Object.fromEntries(e.entries()),null,4))}render(){return this.users().length?r.qy`
      <table class="table-bordered">
        <caption>
          Editable table. Edit any row, click on save and check console
        </caption>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          ${this.users().map((({id:t,name:e,email:a})=>r.qy`
              <tr>
                <td>
                  <form method="GET" id="inline-form-${t}" onsubmit=${this.onFormSubmit}></form>
                  <input type="hidden" name="id" value="${t}" form="inline-form-${t}" />
                  <input type="text" name="username" value="${e}" form="inline-form-${t}" />
                </td>
                <td>
                  <input type="text" name="email" value="${a}" form="inline-form-${t}" />
                </td>
                <td>
                  <button form="inline-form-${t}">save</button>
                </td>
              </tr>
            `))}
        </tbody>
      </table>
    `:r.qy`Loading`}};n=(0,o.Cg)([(0,r.uA)({selector:"app-editable-table",styles:"\n    td form {\n      display: none;\n    }\n  "})],n);let s=class{category=(0,r.vP)();nestedRow;toggleNestedTable(){this.nestedRow.classList.toggle("hide-row")}populateNestedTable(){return this.category().questions.length?this.category().questions.map((t=>r.qy`<tr>
          <td>${t.id}</td>
          <td>${t.name}</td>
          <td>${t.type}</td>
        </tr>`)):r.qy`<tr>
        <td colspan="3">Please add a question</td>
      </tr>`}render(){return this.category()?r.qy`
        <tr>
          <td>${this.category().id}</td>
          <td>${this.category().name}</td>
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
      `:r.qy``}};(0,o.Cg)([(0,r.pd)()],s.prototype,"category",void 0),s=(0,o.Cg)([(0,r.uA)({selector:"app-row-item",styles:"\n    :host {\n      display: table-row-group;\n    }\n    .hide-row {\n      display: none;\n    }\n  "})],s);let d=class{categories=[{id:1,name:"category 1",questions:[{id:1,name:"how are you",type:"text"},{id:2,name:"what you do",type:"text"}]},{id:2,name:"category 2",questions:[]}];render(){return r.qy`
      <table>
        <thead>
          <tr>
            <th>Category Id</th>
            <th>Category Name</th>
            <th></th>
          </tr>
        </thead>
        ${this.categories.map((t=>r.qy`<app-row-item data-input=${{category:t}}></app-row-item>`))}
      </table>
      <br />
      <br />
      <app-editable-table></app-editable-table>
    `}};d=(0,o.Cg)([(0,r.uA)({selector:"app-nested-table"})],d)}}]);
//# sourceMappingURL=../sourcemaps/270.js.map