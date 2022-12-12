"use strict";(self.webpackChunkplumejs_example_repo=self.webpackChunkplumejs_example_repo||[]).push([[987],{987:function(t,e,s){s.r(e),s.d(e,{NestedTable:function(){return r}});var a=s(655),o=s(385);let d=class{ObservedProperties=["category"];category;nestedRow;toggleNestedTable(){this.nestedRow.classList.toggle("hide-row")}populateNestedTable(){return this.category.questions.length?this.category.questions.map((t=>o.dy`<tr>
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
          ref=${t=>{this.nestedRow||(this.nestedRow=t)}}
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
      `:o.dy``}};d=(0,a.gn)([(0,o.wA)({selector:"app-row-item",styles:":host {\n      display: table-row-group;\n  }\n  .hide-row {\n      display: none;\n  }\n  "})],d);let r=class{categories=[{id:1,name:"category 1",questions:[{id:1,name:"how are you",type:"text"},{id:2,name:"what you do",type:"text"}]},{id:2,name:"category 2",questions:[]}];render(){return o.dy`
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
    `}};r=(0,a.gn)([(0,o.wA)({selector:"app-nested-table"})],r)}}]);
//# sourceMappingURL=../sourcemaps/987.js.map