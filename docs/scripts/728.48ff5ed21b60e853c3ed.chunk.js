"use strict";(self.webpackChunkplumejs_example_repo=self.webpackChunkplumejs_example_repo||[]).push([[728],{728:function(t,e,a){a.r(e),a.d(e,{NestedTable:function(){return d}});var s=a(655),o=a(376);let r=class{ObservedProperties=["category"];category;nestedRow;toggleNestedTable(){this.nestedRow.classList.toggle("hide-row")}populateNestedTable(){return this.category.questions.length?this.category.questions.map((t=>o.dy`<tr>
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
      `:o.dy``}};r=(0,s.gn)([(0,o.wA)({selector:"app-row-item",styles:":host {\n      display: table-row-group;\n  }\n  .hide-row {\n      display: none;\n  }\n  "})],r);let d=class{categories=[{id:1,name:"category 1",questions:[{id:1,name:"how are you",type:"text"},{id:2,name:"what you do",type:"text"}]},{id:2,name:"category 2",questions:[]}];render(){return o.dy`
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
    `}};d=(0,s.gn)([(0,o.wA)({selector:"app-nested-table"})],d)}}]);
//# sourceMappingURL=../sourcemaps/728.js.map