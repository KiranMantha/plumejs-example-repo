"use strict";(self.webpackChunkplumejs_example_repo=self.webpackChunkplumejs_example_repo||[]).push([[332],{332:function(t,e,o){o.r(e),o.d(e,{NestedTable:function(){return l}});var a=o(732),n=o(302);let r=class{users=[];mount(){fetch("https://jsonplaceholder.typicode.com/users").then((t=>t.json())).then((t=>{this.users=t,console.log("no renderer")}))}onFormSubmit(t){t.preventDefault();const e=new FormData(t.currentTarget);console.log(JSON.stringify(Object.fromEntries(e.entries()),null,4))}render(){return this.users.length?n.html`
      <table class="table-bordered">
        <caption>Editable table. Edit any row, click on save and check console</caption>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          ${this.users.map((({id:t,name:e,email:o})=>n.html`
            <tr>
              <td>
                <form method="GET" id="inline-form-${t}" onsubmit=${this.onFormSubmit}></form>
                <input type='hidden' name='id' value='${t}' form='inline-form-${t}'/>
                <input type='text' name='username' value='${e}' form='inline-form-${t}'/>
                </td>
              <td>
                <input type='text' name='email' value='${o}' form='inline-form-${t}'/>
              </td>
              <td>
                <button form='inline-form-${t}'>save</button>
              </td>
            </tr>
        `))}
          
        </tbody>
      </table>
    `:n.html`Loading`}};r=(0,a.UN)([(0,n.Component)({selector:"app-editable-table",styles:"\n    td form {\n      display: none;\n    }\n  "})],r);let s=class{static observedProperties=["category"];category;nestedRow;toggleNestedTable(){this.nestedRow.classList.toggle("hide-row")}populateNestedTable(){return this.category.questions.length?this.category.questions.map((t=>n.html`<tr>
          <td>${t.id}</td>
          <td>${t.name}</td>
          <td>${t.type}</td>
        </tr>`)):n.html`<tr>
        <td colspan="3">Please add a question</td>
      </tr>`}render(){return this.category?n.html`
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
      `:n.html``}};s=(0,a.UN)([(0,n.Component)({selector:"app-row-item",styles:":host {\n      display: table-row-group;\n  }\n  .hide-row {\n      display: none;\n  }\n  "})],s);let l=class{categories=[{id:1,name:"category 1",questions:[{id:1,name:"how are you",type:"text"},{id:2,name:"what you do",type:"text"}]},{id:2,name:"category 2",questions:[]}];render(){return n.html`
      <table>
        <thead>
          <tr>
            <th>Category Id</th>
            <th>Category Name</th>
            <th></th>
          </tr>
        </thead>
        ${this.categories.map((t=>n.html`<app-row-item data-input=${{category:t}}></app-row-item>`))}
      </table>
      <br />
      <br />
      <app-editable-table></app-editable-table>
    `}};l=(0,a.UN)([(0,n.Component)({selector:"app-nested-table"})],l)}}]);
//# sourceMappingURL=../sourcemaps/332.js.map