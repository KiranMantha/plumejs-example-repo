"use strict";(self.webpackChunkplumejs_example_repo=self.webpackChunkplumejs_example_repo||[]).push([[629],{3629:(e,l,o)=>{o.r(l);var a=o(655),t=o(6394);(0,o(2558).aA)();let s=class SampleForm{renderer;sampleformFields;createChangeHandler;multiSelectChangehandler;resetFormFields;jsonRef;dropdownOptions={options:[{label:"Option 1",value:"o1"},{label:"Option 2",value:"o2"},{label:"Option 3",value:"o3"},{label:"Option 4",value:"o4"}],multiple:!0,buttonText:e=>0===e.length?"None selected":e.length>3?e.length+" selected":e.map((e=>e.label)).join(", ")};dropdownRef;constructor(e){this.renderer=e}beforeMount(){[this.sampleformFields,this.createChangeHandler,this.resetFormFields]=(0,t.uA)({email:"",password:"",checkme:!1,option:"",options:[],gender:""}),this.multiSelectChangehandler=this.createChangeHandler("options")}mount(){this.dropdownRef.setProps({dropdownOptions:this.dropdownOptions})}submitForm(e){e.preventDefault(),console.log(this.sampleformFields),this.jsonRef.innerHTML=JSON.stringify(this.sampleformFields,null,4)}resetForm(){this.resetFormFields(),this.renderer.update()}render(){return t.dy`
      <div>
        <form
          onsubmit=${e=>{this.submitForm(e)}}
        >
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              value=${this.sampleformFields.email}
              onchange=${this.createChangeHandler("email")}
            />
            <small id="emailHelp" class="form-text text-muted"
              >We'll never share your email with anyone else.</small
            >
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              value=${this.sampleformFields.password}
              onchange=${this.createChangeHandler("password")}
            />
          </div>
          <div class="form-group form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
              checked=${this.sampleformFields.checkme}
              onchange=${this.createChangeHandler("checkme")}
            />
            <label class="form-check-label" for="exampleCheck1"
              >Check me out</label
            >
          </div>
          <div class="form-group form-check">
            <label>single select</label>
            <select
              value=${this.sampleformFields.option}
              onchange=${this.createChangeHandler("option")}
            >
              <option>select</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          <div>
            <label>plumejs multi select</label>
            <ui-dropdown
              class="d-inline-block"
              ref=${e=>{this.dropdownRef=e}}
              onoptionselected=${e=>{this.multiSelectChangehandler({target:{value:e.detail}})}}
            ></ui-dropdown>
          </div>
          <div class="form-group form-check">
            <input
              type="radio"
              id="gender_male"
              name="gender"
              value="male"
              onchange=${this.createChangeHandler("gender")}
            />
            <label for="gender_male">Male</label>
            <input
              type="radio"
              id="gender_female"
              name="gender"
              value="female"
              onchange=${this.createChangeHandler("gender")}
            />
            <label for="gender_female">Female</label>
          </div>
          <button type="submit" class="button is-info">Submit</button>
          <button
            onclick=${()=>{this.resetForm()}}
            class="button"
          >
            Reset
          </button>
        </form>
      </div>
      <pre>
				<code ref=${e=>{this.jsonRef=e}}>
        ${JSON.stringify(this.sampleformFields,null,4)}
				</code>
			</pre>
    `}};s=(0,a.gn)([(0,t.wA)({selector:"sample-form"}),(0,a.w6)("design:paramtypes",[t.Th])],s)}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0cy82MjkuMzI1YTI1MjU3ODY3MDMzMzg2NGEuY2h1bmsuanMiLCJtYXBwaW5ncyI6IjBKQWdCQSxFLFFBQUEsTUFLQSxJQUFNQSxFQUFOLE1BQU1BLFdBd0NnQkMsU0F2Q3BCQyxpQkFDQUMsb0JBQ0FDLHlCQUNBQyxnQkFDQUMsUUFFQUMsZ0JBQTRDLENBQzFDQyxRQUFTLENBQ1AsQ0FDRUMsTUFBTyxXQUNQQyxNQUFPLE1BRVQsQ0FDRUQsTUFBTyxXQUNQQyxNQUFPLE1BRVQsQ0FDRUQsTUFBTyxXQUNQQyxNQUFPLE1BRVQsQ0FDRUQsTUFBTyxXQUNQQyxNQUFPLE9BR1hDLFVBQVUsRUFDVkMsV0FBYUosR0FDWSxJQUFuQkEsRUFBUUssT0FDSCxnQkFDRUwsRUFBUUssT0FBUyxFQUNuQkwsRUFBUUssT0FBUyxZQUVqQkwsRUFBUU0sS0FBS0MsR0FBU0EsRUFBS04sUUFBT08sS0FBSyxPQUtwREMsWUFFQUMsWUFBb0JqQixHQUFBLEtBQUFBLFNBQUFBLEVBRXBCa0IsZUFDR0MsS0FBS2xCLGlCQUFrQmtCLEtBQUtqQixvQkFBcUJpQixLQUFLZixrQkFDckQsUUFBYyxDQUNaZ0IsTUFBTyxHQUNQQyxTQUFVLEdBQ1ZDLFNBQVMsRUFDVEMsT0FBUSxHQUNSaEIsUUFBUyxHQUNUaUIsT0FBUSxLQUVaTCxLQUFLaEIseUJBQTJCZ0IsS0FBS2pCLG9CQUFvQixXQUczRHVCLFFBQ0VOLEtBQUtILFlBQVlVLFNBQVMsQ0FDeEJwQixnQkFBaUJhLEtBQUtiLGtCQUkxQnFCLFdBQVdDLEdBQ1RBLEVBQUVDLGlCQUNGQyxRQUFRQyxJQUFJWixLQUFLbEIsa0JBQ2pCa0IsS0FBS2QsUUFBUTJCLFVBQVlDLEtBQUtDLFVBQVVmLEtBQUtsQixpQkFBa0IsS0FBTSxHQUd2RWtDLFlBQ0VoQixLQUFLZixrQkFDTGUsS0FBS25CLFNBQVNvQyxTQUdoQkMsU0FDRSxPQUFPLElBQUk7OztxQkFHT1QsSUFDVlQsS0FBS1EsV0FBV0M7Ozs7Ozs7Ozs7c0JBV05ULEtBQUtsQixpQkFBaUJtQjt5QkFDbkJELEtBQUtqQixvQkFBb0I7Ozs7Ozs7Ozs7Ozs7c0JBYTVCaUIsS0FBS2xCLGlCQUFpQm9CO3lCQUNuQkYsS0FBS2pCLG9CQUFvQjs7Ozs7Ozs7d0JBUTFCaUIsS0FBS2xCLGlCQUFpQnFCO3lCQUNyQkgsS0FBS2pCLG9CQUFvQjs7Ozs7Ozs7O3NCQVM1QmlCLEtBQUtsQixpQkFBaUJzQjt5QkFDbkJKLEtBQUtqQixvQkFBb0I7Ozs7Ozs7Ozs7Ozs7b0JBYTdCb0MsSUFDTG5CLEtBQUtILFlBQWNzQjtpQ0FFREMsSUFDbEJwQixLQUFLaEIseUJBQXlCLENBQzVCcUMsT0FBUSxDQUNOL0IsTUFBTzhCLEVBQU1FOzs7Ozs7Ozs7eUJBWVJ0QixLQUFLakIsb0JBQW9COzs7Ozs7Ozt5QkFRekJpQixLQUFLakIsb0JBQW9COzs7Ozs7c0JBTTVCLEtBQ1JpQixLQUFLZ0I7Ozs7Ozs7O2dCQVNGRyxJQUNUbkIsS0FBS2QsUUFBVWlDO1VBRWJMLEtBQUtDLFVBQVVmLEtBQUtsQixpQkFBa0IsS0FBTTs7O1FBcExoREYsR0FBVSxVQUhmLFFBQVUsQ0FDVDJDLFNBQVUsaUIsNkJBMENvQixRQXhDMUIzQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9mb3JtL3NhbXBsZS1mb3JtLmNvbXBvbmVudC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIENvbXBvbmVudFJlZixcbiAgaHRtbCxcbiAgSUhvb2tzLFxuICBSZW5kZXJlcixcbiAgdXNlRm9ybUZpZWxkcyxcbn0gZnJvbSAnQHBsdW1lanMvY29yZSc7XG5cbmltcG9ydCB7XG4gIElEcm9wZG93bk9wdGlvbnMsXG4gIElPcHRpb24sXG4gIERyb3Bkb3duQ29tcG9uZW50LFxuICByZWdpc3RlclVJRHJvcGRvd24sXG59IGZyb20gJ0BwbHVtZWpzL3VpJztcblxucmVnaXN0ZXJVSURyb3Bkb3duKCk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NhbXBsZS1mb3JtJyxcbn0pXG5jbGFzcyBTYW1wbGVGb3JtIGltcGxlbWVudHMgSUhvb2tzIHtcbiAgc2FtcGxlZm9ybUZpZWxkczogYW55O1xuICBjcmVhdGVDaGFuZ2VIYW5kbGVyOiAoa2V5OiBzdHJpbmcpID0+IChlOiBFdmVudCkgPT4gdm9pZDtcbiAgbXVsdGlTZWxlY3RDaGFuZ2VoYW5kbGVyOiAoZTogYW55KSA9PiB2b2lkO1xuICByZXNldEZvcm1GaWVsZHM6ICgpID0+IHZvaWQ7XG4gIGpzb25SZWY6IEhUTUxFbGVtZW50O1xuXG4gIGRyb3Bkb3duT3B0aW9uczogSURyb3Bkb3duT3B0aW9uczxzdHJpbmc+ID0ge1xuICAgIG9wdGlvbnM6IFtcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6ICdPcHRpb24gMScsXG4gICAgICAgIHZhbHVlOiAnbzEnLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6ICdPcHRpb24gMicsXG4gICAgICAgIHZhbHVlOiAnbzInLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6ICdPcHRpb24gMycsXG4gICAgICAgIHZhbHVlOiAnbzMnLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6ICdPcHRpb24gNCcsXG4gICAgICAgIHZhbHVlOiAnbzQnLFxuICAgICAgfSxcbiAgICBdLFxuICAgIG11bHRpcGxlOiB0cnVlLFxuICAgIGJ1dHRvblRleHQ6IChvcHRpb25zOiBJT3B0aW9uPHN0cmluZz5bXSk6IHN0cmluZyA9PiB7XG4gICAgICBpZiAob3B0aW9ucy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuICdOb25lIHNlbGVjdGVkJztcbiAgICAgIH0gZWxzZSBpZiAob3B0aW9ucy5sZW5ndGggPiAzKSB7XG4gICAgICAgIHJldHVybiBvcHRpb25zLmxlbmd0aCArICcgc2VsZWN0ZWQnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG9wdGlvbnMubWFwKChpdGVtKSA9PiBpdGVtLmxhYmVsKS5qb2luKCcsICcpO1xuICAgICAgfVxuICAgIH0sXG4gIH07XG5cbiAgZHJvcGRvd25SZWY6IENvbXBvbmVudFJlZjxEcm9wZG93bkNvbXBvbmVudDxzdHJpbmc+PjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcikge31cblxuICBiZWZvcmVNb3VudCgpIHtcbiAgICBbdGhpcy5zYW1wbGVmb3JtRmllbGRzLCB0aGlzLmNyZWF0ZUNoYW5nZUhhbmRsZXIsIHRoaXMucmVzZXRGb3JtRmllbGRzXSA9XG4gICAgICB1c2VGb3JtRmllbGRzKHtcbiAgICAgICAgZW1haWw6ICcnLFxuICAgICAgICBwYXNzd29yZDogJycsXG4gICAgICAgIGNoZWNrbWU6IGZhbHNlLFxuICAgICAgICBvcHRpb246ICcnLFxuICAgICAgICBvcHRpb25zOiBbXSxcbiAgICAgICAgZ2VuZGVyOiAnJyxcbiAgICAgIH0pO1xuICAgIHRoaXMubXVsdGlTZWxlY3RDaGFuZ2VoYW5kbGVyID0gdGhpcy5jcmVhdGVDaGFuZ2VIYW5kbGVyKCdvcHRpb25zJyk7XG4gIH1cblxuICBtb3VudCgpIHtcbiAgICB0aGlzLmRyb3Bkb3duUmVmLnNldFByb3BzKHtcbiAgICAgIGRyb3Bkb3duT3B0aW9uczogdGhpcy5kcm9wZG93bk9wdGlvbnMsXG4gICAgfSk7XG4gIH1cblxuICBzdWJtaXRGb3JtKGU6IEV2ZW50KSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuc2FtcGxlZm9ybUZpZWxkcyk7XG4gICAgdGhpcy5qc29uUmVmLmlubmVySFRNTCA9IEpTT04uc3RyaW5naWZ5KHRoaXMuc2FtcGxlZm9ybUZpZWxkcywgbnVsbCwgNCk7XG4gIH1cblxuICByZXNldEZvcm0oKSB7XG4gICAgdGhpcy5yZXNldEZvcm1GaWVsZHMoKTtcbiAgICB0aGlzLnJlbmRlcmVyLnVwZGF0ZSgpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPGRpdj5cbiAgICAgICAgPGZvcm1cbiAgICAgICAgICBvbnN1Ym1pdD0keyhlOiBFdmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zdWJtaXRGb3JtKGUpO1xuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImV4YW1wbGVJbnB1dEVtYWlsMVwiPkVtYWlsIGFkZHJlc3M8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgaWQ9XCJleGFtcGxlSW5wdXRFbWFpbDFcIlxuICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwiZW1haWxIZWxwXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBlbWFpbFwiXG4gICAgICAgICAgICAgIHZhbHVlPSR7dGhpcy5zYW1wbGVmb3JtRmllbGRzLmVtYWlsfVxuICAgICAgICAgICAgICBvbmNoYW5nZT0ke3RoaXMuY3JlYXRlQ2hhbmdlSGFuZGxlcignZW1haWwnKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8c21hbGwgaWQ9XCJlbWFpbEhlbHBcIiBjbGFzcz1cImZvcm0tdGV4dCB0ZXh0LW11dGVkXCJcbiAgICAgICAgICAgICAgPldlJ2xsIG5ldmVyIHNoYXJlIHlvdXIgZW1haWwgd2l0aCBhbnlvbmUgZWxzZS48L3NtYWxsXG4gICAgICAgICAgICA+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJleGFtcGxlSW5wdXRQYXNzd29yZDFcIj5QYXNzd29yZDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICBpZD1cImV4YW1wbGVJbnB1dFBhc3N3b3JkMVwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxuICAgICAgICAgICAgICB2YWx1ZT0ke3RoaXMuc2FtcGxlZm9ybUZpZWxkcy5wYXNzd29yZH1cbiAgICAgICAgICAgICAgb25jaGFuZ2U9JHt0aGlzLmNyZWF0ZUNoYW5nZUhhbmRsZXIoJ3Bhc3N3b3JkJyl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIGZvcm0tY2hlY2tcIj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY2hlY2staW5wdXRcIlxuICAgICAgICAgICAgICBpZD1cImV4YW1wbGVDaGVjazFcIlxuICAgICAgICAgICAgICBjaGVja2VkPSR7dGhpcy5zYW1wbGVmb3JtRmllbGRzLmNoZWNrbWV9XG4gICAgICAgICAgICAgIG9uY2hhbmdlPSR7dGhpcy5jcmVhdGVDaGFuZ2VIYW5kbGVyKCdjaGVja21lJyl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZm9ybS1jaGVjay1sYWJlbFwiIGZvcj1cImV4YW1wbGVDaGVjazFcIlxuICAgICAgICAgICAgICA+Q2hlY2sgbWUgb3V0PC9sYWJlbFxuICAgICAgICAgICAgPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIGZvcm0tY2hlY2tcIj5cbiAgICAgICAgICAgIDxsYWJlbD5zaW5nbGUgc2VsZWN0PC9sYWJlbD5cbiAgICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgICAgdmFsdWU9JHt0aGlzLnNhbXBsZWZvcm1GaWVsZHMub3B0aW9ufVxuICAgICAgICAgICAgICBvbmNoYW5nZT0ke3RoaXMuY3JlYXRlQ2hhbmdlSGFuZGxlcignb3B0aW9uJyl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxvcHRpb24+c2VsZWN0PC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxXCI+MTwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMlwiPjI8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjNcIj4zPC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI0XCI+NDwvb3B0aW9uPlxuICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbD5wbHVtZWpzIG11bHRpIHNlbGVjdDwvbGFiZWw+XG4gICAgICAgICAgICA8dWktZHJvcGRvd25cbiAgICAgICAgICAgICAgY2xhc3M9XCJkLWlubGluZS1ibG9ja1wiXG4gICAgICAgICAgICAgIHJlZj0keyhub2RlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5kcm9wZG93blJlZiA9IG5vZGU7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIG9ub3B0aW9uc2VsZWN0ZWQ9JHsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm11bHRpU2VsZWN0Q2hhbmdlaGFuZGxlcih7XG4gICAgICAgICAgICAgICAgICB0YXJnZXQ6IHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGV2ZW50LmRldGFpbCxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+PC91aS1kcm9wZG93bj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCBmb3JtLWNoZWNrXCI+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgaWQ9XCJnZW5kZXJfbWFsZVwiXG4gICAgICAgICAgICAgIG5hbWU9XCJnZW5kZXJcIlxuICAgICAgICAgICAgICB2YWx1ZT1cIm1hbGVcIlxuICAgICAgICAgICAgICBvbmNoYW5nZT0ke3RoaXMuY3JlYXRlQ2hhbmdlSGFuZGxlcignZ2VuZGVyJyl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImdlbmRlcl9tYWxlXCI+TWFsZTwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgaWQ9XCJnZW5kZXJfZmVtYWxlXCJcbiAgICAgICAgICAgICAgbmFtZT1cImdlbmRlclwiXG4gICAgICAgICAgICAgIHZhbHVlPVwiZmVtYWxlXCJcbiAgICAgICAgICAgICAgb25jaGFuZ2U9JHt0aGlzLmNyZWF0ZUNoYW5nZUhhbmRsZXIoJ2dlbmRlcicpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJnZW5kZXJfZmVtYWxlXCI+RmVtYWxlPC9sYWJlbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ1dHRvbiBpcy1pbmZvXCI+U3VibWl0PC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25jbGljaz0keygpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5yZXNldEZvcm0oKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBjbGFzcz1cImJ1dHRvblwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgUmVzZXRcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgICA8cHJlPlxuXHRcdFx0XHQ8Y29kZSByZWY9JHsobm9kZSkgPT4ge1xuICAgICAgICB0aGlzLmpzb25SZWYgPSBub2RlO1xuICAgICAgfX0+XG4gICAgICAgICR7SlNPTi5zdHJpbmdpZnkodGhpcy5zYW1wbGVmb3JtRmllbGRzLCBudWxsLCA0KX1cblx0XHRcdFx0PC9jb2RlPlxuXHRcdFx0PC9wcmU+XG4gICAgYDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlNhbXBsZUZvcm0iLCJyZW5kZXJlciIsInNhbXBsZWZvcm1GaWVsZHMiLCJjcmVhdGVDaGFuZ2VIYW5kbGVyIiwibXVsdGlTZWxlY3RDaGFuZ2VoYW5kbGVyIiwicmVzZXRGb3JtRmllbGRzIiwianNvblJlZiIsImRyb3Bkb3duT3B0aW9ucyIsIm9wdGlvbnMiLCJsYWJlbCIsInZhbHVlIiwibXVsdGlwbGUiLCJidXR0b25UZXh0IiwibGVuZ3RoIiwibWFwIiwiaXRlbSIsImpvaW4iLCJkcm9wZG93blJlZiIsImNvbnN0cnVjdG9yIiwiYmVmb3JlTW91bnQiLCJ0aGlzIiwiZW1haWwiLCJwYXNzd29yZCIsImNoZWNrbWUiLCJvcHRpb24iLCJnZW5kZXIiLCJtb3VudCIsInNldFByb3BzIiwic3VibWl0Rm9ybSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJpbm5lckhUTUwiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzZXRGb3JtIiwidXBkYXRlIiwicmVuZGVyIiwibm9kZSIsImV2ZW50IiwidGFyZ2V0IiwiZGV0YWlsIiwic2VsZWN0b3IiXSwic291cmNlUm9vdCI6IiJ9