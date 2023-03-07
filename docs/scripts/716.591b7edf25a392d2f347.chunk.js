"use strict";(self.webpackChunkplumejs_example_repo=self.webpackChunkplumejs_example_repo||[]).push([[716],{716:function(t,e,r){r.r(e),r.d(e,{NestedTable:function(){return d}});var a=r(655),o=r(385);let n=class{renderer;constructor(t){this.renderer=t}users=[];mount(){fetch("https://jsonplaceholder.typicode.com/users").then((t=>t.json())).then((t=>{this.users=t,this.renderer.update()}))}onFormSubmit(t){t.preventDefault();const e=new FormData(t.currentTarget);console.log(JSON.stringify(Object.fromEntries(e.entries()),null,4))}render(){return this.users.length?o.dy`
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
          ${this.users.map((({id:t,name:e,email:r})=>o.dy`
            <tr>
              <td>
                <form method="GET" id="inline-form-${t}" onsubmit=${this.onFormSubmit}></form>
                <input type='hidden' name='id' value='${t}' form='inline-form-${t}'/>
                <input type='text' name='username' value='${e}' form='inline-form-${t}'/>
                </td>
              <td>
                <input type='text' name='email' value='${r}' form='inline-form-${t}'/>
              </td>
              <td>
                <button form='inline-form-${t}'>save</button>
              </td>
            </tr>
        `))}
          
        </tbody>
      </table>
    `:o.dy`Loading`}};n=(0,a.gn)([(0,o.wA)({selector:"app-editable-table",deps:[o.Th]})],n);let s=class{ObservedProperties=["category"];category;nestedRow;toggleNestedTable(){this.nestedRow.classList.toggle("hide-row")}populateNestedTable(){return this.category.questions.length?this.category.questions.map((t=>o.dy`<tr>
          <td>${t.id}</td>
          <td>${t.name}</td>
          <td>${t.type}</td>
        </tr>`)):o.dy`<tr>
        <td colspan="3">Please add a question</td>
      </tr>`}render(){return this.category?o.dy`
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
      `:o.dy``}};s=(0,a.gn)([(0,o.wA)({selector:"app-row-item",styles:":host {\n      display: table-row-group;\n  }\n  .hide-row {\n      display: none;\n  }\n  "})],s);let d=class{categories=[{id:1,name:"category 1",questions:[{id:1,name:"how are you",type:"text"},{id:2,name:"what you do",type:"text"}]},{id:2,name:"category 2",questions:[]}];render(){return o.dy`
      <table>
        <thead>
          <tr>
            <th>Category Id</th>
            <th>Category Name</th>
            <th></th>
          </tr>
        </thead>
        ${this.categories.map((t=>o.dy`<app-row-item onbindprops=${()=>({category:t})}></app-row-item>`))}
      </table>
      <br />
      <br />
      <app-editable-table></app-editable-table>
    `}};d=(0,a.gn)([(0,o.wA)({selector:"app-nested-table"})],d)}}]);
//# sourceMappingURL=../sourcemaps/716.js.map