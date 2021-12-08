"use strict";(self.webpackChunkplumejs_example_repo=self.webpackChunkplumejs_example_repo||[]).push([[629],{3629:(e,l,t)=>{t.r(l);var a=t(655),s=t(8522);let o=class{renderer;sampleformFields;createChangeHandler;multiSelectChangehandler;resetFormFields;jsonRef;multiSelectOptions={data:["option1","option2","option3","option4"],selectedValues:["option1","option2"],multiple:!0,onchange:e=>{this.multiSelectChangehandler({target:{value:e}})},buttonText:e=>0===e.length?"None selected":e.length>3?e.length+" selected":e.join(", ")};multiSelectRef;constructor(e){this.renderer=e}beforeMount(){[this.sampleformFields,this.createChangeHandler,this.resetFormFields]=(0,s.useFormFields)({email:"",password:"",checkme:!1,option:"",options:[],gender:""}),this.multiSelectChangehandler=this.createChangeHandler("options")}mount(){this.multiSelectRef.setProps({multiSelectOptions:this.multiSelectOptions})}submitForm(e){e.preventDefault(),console.log(this.sampleformFields),this.jsonRef.innerHTML=JSON.stringify(this.sampleformFields,null,4)}resetForm(){this.resetFormFields(),this.renderer.update()}render(){return s.html`
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
            <multi-select
              class="d-inline-block"
              ref=${e=>{this.multiSelectRef=e}}
            ></multi-select>
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
				</code>
			</pre>
    `}};o=(0,a.__decorate)([(0,s.Component)({selector:"sample-form"}),(0,a.__metadata)("design:paramtypes",[s.Renderer])],o)}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0cy82MjkuZDMzYWFhNWY1MTM2YWYyNTRjYmUuY2h1bmsuanMiLCJtYXBwaW5ncyI6InlKQWFBLElBQU1BLEVBQU4sTUErQnNCQyxTQTlCcEJDLGlCQUNBQyxvQkFDQUMseUJBQ0FDLGdCQUNBQyxRQUVBQyxtQkFBMEMsQ0FDeENDLEtBQU0sQ0FBQyxVQUFXLFVBQVcsVUFBVyxXQUN4Q0MsZUFBZ0IsQ0FBQyxVQUFXLFdBQzVCQyxVQUFVLEVBQ1ZDLFNBQVdDLElBQ1RDLEtBQUtULHlCQUF5QixDQUM1QlUsT0FBUSxDQUNOQyxNQUFPSCxNQUliSSxXQUFhQyxHQUNZLElBQW5CQSxFQUFRQyxPQUNILGdCQUNFRCxFQUFRQyxPQUFTLEVBQ25CRCxFQUFRQyxPQUFTLFlBRWpCRCxFQUFRRSxLQUFLLE9BSzFCQyxlQUVBQyxZQUFvQnBCLEdBQUEsS0FBQUEsU0FBQUEsRUFFcEJxQixlQUNHVCxLQUFLWCxpQkFBa0JXLEtBQUtWLG9CQUFxQlUsS0FBS1Isa0JBQ3JELElBQUFrQixlQUFjLENBQ1pDLE1BQU8sR0FDUEMsU0FBVSxHQUNWQyxTQUFTLEVBQ1RDLE9BQVEsR0FDUlYsUUFBUyxHQUNUVyxPQUFRLEtBRVpmLEtBQUtULHlCQUEyQlMsS0FBS1Ysb0JBQW9CLFdBRzNEMEIsUUFDRWhCLEtBQUtPLGVBQWVVLFNBQVMsQ0FDM0J2QixtQkFBb0JNLEtBQUtOLHFCQUk3QndCLFdBQVdDLEdBQ1RBLEVBQUVDLGlCQUNGQyxRQUFRQyxJQUFJdEIsS0FBS1gsa0JBQ2pCVyxLQUFLUCxRQUFROEIsVUFBWUMsS0FBS0MsVUFBVXpCLEtBQUtYLGlCQUFrQixLQUFNLEdBR3ZFcUMsWUFDRTFCLEtBQUtSLGtCQUNMUSxLQUFLWixTQUFTdUMsU0FHaEJDLFNBQ0UsT0FBTyxFQUFBQyxJQUFJOzs7cUJBR09WLElBQ1ZuQixLQUFLa0IsV0FBV0M7Ozs7Ozs7Ozs7c0JBV05uQixLQUFLWCxpQkFBaUJzQjt5QkFDbkJYLEtBQUtWLG9CQUFvQjs7Ozs7Ozs7Ozs7OztzQkFhNUJVLEtBQUtYLGlCQUFpQnVCO3lCQUNuQlosS0FBS1Ysb0JBQW9COzs7Ozs7Ozt3QkFRMUJVLEtBQUtYLGlCQUFpQndCO3lCQUNyQmIsS0FBS1Ysb0JBQW9COzs7Ozs7Ozs7c0JBUzVCVSxLQUFLWCxpQkFBaUJ5Qjt5QkFDbkJkLEtBQUtWLG9CQUFvQjs7Ozs7Ozs7Ozs7OztvQkFhN0J3QyxJQUNMOUIsS0FBS08sZUFBaUJ1Qjs7Ozs7Ozs7O3lCQVViOUIsS0FBS1Ysb0JBQW9COzs7Ozs7Ozt5QkFRekJVLEtBQUtWLG9CQUFvQjs7Ozs7O3NCQU01QixLQUNSVSxLQUFLMEI7Ozs7Ozs7O2dCQVNGSSxJQUNUOUIsS0FBS1AsUUFBVXFDOzs7UUFsS2pCM0MsR0FBVSxrQkFIZixJQUFBNEMsV0FBVSxDQUNUQyxTQUFVLGlCLHFDQWlDb0IsRUFBQUMsWUEvQjFCOUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZm9ybS9zYW1wbGUtZm9ybS5jb21wb25lbnQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBDb21wb25lbnRSZWYsXG4gIGh0bWwsXG4gIElIb29rcyxcbiAgUmVuZGVyZXIsXG4gIHVzZUZvcm1GaWVsZHMsXG59IGZyb20gJ0BwbHVtZWpzL2NvcmUnO1xuaW1wb3J0IHsgSU11bHRpU2VsZWN0T3B0aW9ucywgTXVsdGlTZWxlY3RDb21wb25lbnQgfSBmcm9tICdAcGx1bWVqcy91aSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NhbXBsZS1mb3JtJyxcbn0pXG5jbGFzcyBTYW1wbGVGb3JtIGltcGxlbWVudHMgSUhvb2tzIHtcbiAgc2FtcGxlZm9ybUZpZWxkczogYW55O1xuICBjcmVhdGVDaGFuZ2VIYW5kbGVyOiAoa2V5OiBzdHJpbmcpID0+IChlOiBFdmVudCkgPT4gdm9pZDtcbiAgbXVsdGlTZWxlY3RDaGFuZ2VoYW5kbGVyOiAoZTogYW55KSA9PiB2b2lkO1xuICByZXNldEZvcm1GaWVsZHM6ICgpID0+IHZvaWQ7XG4gIGpzb25SZWY6IEhUTUxFbGVtZW50O1xuXG4gIG11bHRpU2VsZWN0T3B0aW9uczogSU11bHRpU2VsZWN0T3B0aW9ucyA9IHtcbiAgICBkYXRhOiBbJ29wdGlvbjEnLCAnb3B0aW9uMicsICdvcHRpb24zJywgJ29wdGlvbjQnXSxcbiAgICBzZWxlY3RlZFZhbHVlczogWydvcHRpb24xJywgJ29wdGlvbjInXSxcbiAgICBtdWx0aXBsZTogdHJ1ZSxcbiAgICBvbmNoYW5nZTogKG9wdGlvbnNBcnI6IHN0cmluZ1tdKSA9PiB7XG4gICAgICB0aGlzLm11bHRpU2VsZWN0Q2hhbmdlaGFuZGxlcih7XG4gICAgICAgIHRhcmdldDoge1xuICAgICAgICAgIHZhbHVlOiBvcHRpb25zQXJyLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfSxcbiAgICBidXR0b25UZXh0OiAob3B0aW9uczogQXJyYXk8c3RyaW5nPikgPT4ge1xuICAgICAgaWYgKG9wdGlvbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiAnTm9uZSBzZWxlY3RlZCc7XG4gICAgICB9IGVsc2UgaWYgKG9wdGlvbnMubGVuZ3RoID4gMykge1xuICAgICAgICByZXR1cm4gb3B0aW9ucy5sZW5ndGggKyAnIHNlbGVjdGVkJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBvcHRpb25zLmpvaW4oJywgJyk7XG4gICAgICB9XG4gICAgfSxcbiAgfTtcblxuICBtdWx0aVNlbGVjdFJlZjogQ29tcG9uZW50UmVmPE11bHRpU2VsZWN0Q29tcG9uZW50PjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcikge31cblxuICBiZWZvcmVNb3VudCgpIHtcbiAgICBbdGhpcy5zYW1wbGVmb3JtRmllbGRzLCB0aGlzLmNyZWF0ZUNoYW5nZUhhbmRsZXIsIHRoaXMucmVzZXRGb3JtRmllbGRzXSA9XG4gICAgICB1c2VGb3JtRmllbGRzKHtcbiAgICAgICAgZW1haWw6ICcnLFxuICAgICAgICBwYXNzd29yZDogJycsXG4gICAgICAgIGNoZWNrbWU6IGZhbHNlLFxuICAgICAgICBvcHRpb246ICcnLFxuICAgICAgICBvcHRpb25zOiBbXSxcbiAgICAgICAgZ2VuZGVyOiAnJyxcbiAgICAgIH0pO1xuICAgIHRoaXMubXVsdGlTZWxlY3RDaGFuZ2VoYW5kbGVyID0gdGhpcy5jcmVhdGVDaGFuZ2VIYW5kbGVyKCdvcHRpb25zJyk7XG4gIH1cblxuICBtb3VudCgpIHtcbiAgICB0aGlzLm11bHRpU2VsZWN0UmVmLnNldFByb3BzKHtcbiAgICAgIG11bHRpU2VsZWN0T3B0aW9uczogdGhpcy5tdWx0aVNlbGVjdE9wdGlvbnMsXG4gICAgfSk7XG4gIH1cblxuICBzdWJtaXRGb3JtKGU6IEV2ZW50KSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuc2FtcGxlZm9ybUZpZWxkcyk7XG4gICAgdGhpcy5qc29uUmVmLmlubmVySFRNTCA9IEpTT04uc3RyaW5naWZ5KHRoaXMuc2FtcGxlZm9ybUZpZWxkcywgbnVsbCwgNCk7XG4gIH1cblxuICByZXNldEZvcm0oKSB7XG4gICAgdGhpcy5yZXNldEZvcm1GaWVsZHMoKTtcbiAgICB0aGlzLnJlbmRlcmVyLnVwZGF0ZSgpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPGRpdj5cbiAgICAgICAgPGZvcm1cbiAgICAgICAgICBvbnN1Ym1pdD0keyhlOiBFdmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zdWJtaXRGb3JtKGUpO1xuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImV4YW1wbGVJbnB1dEVtYWlsMVwiPkVtYWlsIGFkZHJlc3M8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgaWQ9XCJleGFtcGxlSW5wdXRFbWFpbDFcIlxuICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwiZW1haWxIZWxwXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBlbWFpbFwiXG4gICAgICAgICAgICAgIHZhbHVlPSR7dGhpcy5zYW1wbGVmb3JtRmllbGRzLmVtYWlsfVxuICAgICAgICAgICAgICBvbmNoYW5nZT0ke3RoaXMuY3JlYXRlQ2hhbmdlSGFuZGxlcignZW1haWwnKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8c21hbGwgaWQ9XCJlbWFpbEhlbHBcIiBjbGFzcz1cImZvcm0tdGV4dCB0ZXh0LW11dGVkXCJcbiAgICAgICAgICAgICAgPldlJ2xsIG5ldmVyIHNoYXJlIHlvdXIgZW1haWwgd2l0aCBhbnlvbmUgZWxzZS48L3NtYWxsXG4gICAgICAgICAgICA+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJleGFtcGxlSW5wdXRQYXNzd29yZDFcIj5QYXNzd29yZDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICBpZD1cImV4YW1wbGVJbnB1dFBhc3N3b3JkMVwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxuICAgICAgICAgICAgICB2YWx1ZT0ke3RoaXMuc2FtcGxlZm9ybUZpZWxkcy5wYXNzd29yZH1cbiAgICAgICAgICAgICAgb25jaGFuZ2U9JHt0aGlzLmNyZWF0ZUNoYW5nZUhhbmRsZXIoJ3Bhc3N3b3JkJyl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIGZvcm0tY2hlY2tcIj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY2hlY2staW5wdXRcIlxuICAgICAgICAgICAgICBpZD1cImV4YW1wbGVDaGVjazFcIlxuICAgICAgICAgICAgICBjaGVja2VkPSR7dGhpcy5zYW1wbGVmb3JtRmllbGRzLmNoZWNrbWV9XG4gICAgICAgICAgICAgIG9uY2hhbmdlPSR7dGhpcy5jcmVhdGVDaGFuZ2VIYW5kbGVyKCdjaGVja21lJyl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZm9ybS1jaGVjay1sYWJlbFwiIGZvcj1cImV4YW1wbGVDaGVjazFcIlxuICAgICAgICAgICAgICA+Q2hlY2sgbWUgb3V0PC9sYWJlbFxuICAgICAgICAgICAgPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIGZvcm0tY2hlY2tcIj5cbiAgICAgICAgICAgIDxsYWJlbD5zaW5nbGUgc2VsZWN0PC9sYWJlbD5cbiAgICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgICAgdmFsdWU9JHt0aGlzLnNhbXBsZWZvcm1GaWVsZHMub3B0aW9ufVxuICAgICAgICAgICAgICBvbmNoYW5nZT0ke3RoaXMuY3JlYXRlQ2hhbmdlSGFuZGxlcignb3B0aW9uJyl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxvcHRpb24+c2VsZWN0PC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxXCI+MTwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMlwiPjI8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjNcIj4zPC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI0XCI+NDwvb3B0aW9uPlxuICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbD5wbHVtZWpzIG11bHRpIHNlbGVjdDwvbGFiZWw+XG4gICAgICAgICAgICA8bXVsdGktc2VsZWN0XG4gICAgICAgICAgICAgIGNsYXNzPVwiZC1pbmxpbmUtYmxvY2tcIlxuICAgICAgICAgICAgICByZWY9JHsobm9kZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubXVsdGlTZWxlY3RSZWYgPSBub2RlO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPjwvbXVsdGktc2VsZWN0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIGZvcm0tY2hlY2tcIj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICBpZD1cImdlbmRlcl9tYWxlXCJcbiAgICAgICAgICAgICAgbmFtZT1cImdlbmRlclwiXG4gICAgICAgICAgICAgIHZhbHVlPVwibWFsZVwiXG4gICAgICAgICAgICAgIG9uY2hhbmdlPSR7dGhpcy5jcmVhdGVDaGFuZ2VIYW5kbGVyKCdnZW5kZXInKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiZ2VuZGVyX21hbGVcIj5NYWxlPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICBpZD1cImdlbmRlcl9mZW1hbGVcIlxuICAgICAgICAgICAgICBuYW1lPVwiZ2VuZGVyXCJcbiAgICAgICAgICAgICAgdmFsdWU9XCJmZW1hbGVcIlxuICAgICAgICAgICAgICBvbmNoYW5nZT0ke3RoaXMuY3JlYXRlQ2hhbmdlSGFuZGxlcignZ2VuZGVyJyl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImdlbmRlcl9mZW1hbGVcIj5GZW1hbGU8L2xhYmVsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnV0dG9uIGlzLWluZm9cIj5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbmNsaWNrPSR7KCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLnJlc2V0Rm9ybSgpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGNsYXNzPVwiYnV0dG9uXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBSZXNldFxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxwcmU+XG5cdFx0XHRcdDxjb2RlIHJlZj0keyhub2RlKSA9PiB7XG4gICAgICAgIHRoaXMuanNvblJlZiA9IG5vZGU7XG4gICAgICB9fT5cblx0XHRcdFx0PC9jb2RlPlxuXHRcdFx0PC9wcmU+XG4gICAgYDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlNhbXBsZUZvcm0iLCJyZW5kZXJlciIsInNhbXBsZWZvcm1GaWVsZHMiLCJjcmVhdGVDaGFuZ2VIYW5kbGVyIiwibXVsdGlTZWxlY3RDaGFuZ2VoYW5kbGVyIiwicmVzZXRGb3JtRmllbGRzIiwianNvblJlZiIsIm11bHRpU2VsZWN0T3B0aW9ucyIsImRhdGEiLCJzZWxlY3RlZFZhbHVlcyIsIm11bHRpcGxlIiwib25jaGFuZ2UiLCJvcHRpb25zQXJyIiwidGhpcyIsInRhcmdldCIsInZhbHVlIiwiYnV0dG9uVGV4dCIsIm9wdGlvbnMiLCJsZW5ndGgiLCJqb2luIiwibXVsdGlTZWxlY3RSZWYiLCJjb25zdHJ1Y3RvciIsImJlZm9yZU1vdW50IiwidXNlRm9ybUZpZWxkcyIsImVtYWlsIiwicGFzc3dvcmQiLCJjaGVja21lIiwib3B0aW9uIiwiZ2VuZGVyIiwibW91bnQiLCJzZXRQcm9wcyIsInN1Ym1pdEZvcm0iLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiaW5uZXJIVE1MIiwiSlNPTiIsInN0cmluZ2lmeSIsInJlc2V0Rm9ybSIsInVwZGF0ZSIsInJlbmRlciIsImh0bWwiLCJub2RlIiwiQ29tcG9uZW50Iiwic2VsZWN0b3IiLCJSZW5kZXJlciJdLCJzb3VyY2VSb290IjoiIn0=