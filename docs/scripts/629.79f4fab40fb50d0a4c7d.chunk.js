"use strict";(self.webpackChunkplumejs_example_repo=self.webpackChunkplumejs_example_repo||[]).push([[629],{3629:(e,l,t)=>{t.r(l);var s=t(655),a=t(6394);let o=class SampleForm{renderer;sampleformFields;createChangeHandler;multiSelectChangehandler;resetFormFields;jsonRef;multiSelectOptions={data:["option1","option2","option3","option4"],selectedValues:["option1","option2"],multiple:!0,onchange:e=>{this.multiSelectChangehandler({target:{value:e}})},buttonText:e=>0===e.length?"None selected":e.length>3?e.length+" selected":e.join(", ")};multiSelectRef;constructor(e){this.renderer=e}beforeMount(){[this.sampleformFields,this.createChangeHandler,this.resetFormFields]=(0,a.uA)({email:"",password:"",checkme:!1,option:"",options:[],gender:""}),this.multiSelectChangehandler=this.createChangeHandler("options")}mount(){this.multiSelectRef.setProps({multiSelectOptions:this.multiSelectOptions})}submitForm(e){e.preventDefault(),console.log(this.sampleformFields),this.jsonRef.innerHTML=JSON.stringify(this.sampleformFields,null,4)}resetForm(){this.resetFormFields(),this.renderer.update()}render(){return a.dy`
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
        ${JSON.stringify(this.sampleformFields,null,4)}
				</code>
			</pre>
    `}};o=(0,s.gn)([(0,a.wA)({selector:"sample-form"}),(0,s.w6)("design:paramtypes",[a.Th])],o)}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0cy82MjkuNzlmNGZhYjQwZmI1MGQwYTRjN2QuY2h1bmsuanMiLCJtYXBwaW5ncyI6InlKQWFBLElBQU1BLEVBQU4sTUFBTUEsV0ErQmdCQyxTQTlCcEJDLGlCQUNBQyxvQkFDQUMseUJBQ0FDLGdCQUNBQyxRQUVBQyxtQkFBMEMsQ0FDeENDLEtBQU0sQ0FBQyxVQUFXLFVBQVcsVUFBVyxXQUN4Q0MsZUFBZ0IsQ0FBQyxVQUFXLFdBQzVCQyxVQUFVLEVBQ1ZDLFNBQVdDLElBQ1RDLEtBQUtULHlCQUF5QixDQUM1QlUsT0FBUSxDQUNOQyxNQUFPSCxNQUliSSxXQUFhQyxHQUNZLElBQW5CQSxFQUFRQyxPQUNILGdCQUNFRCxFQUFRQyxPQUFTLEVBQ25CRCxFQUFRQyxPQUFTLFlBRWpCRCxFQUFRRSxLQUFLLE9BSzFCQyxlQUVBQyxZQUFvQnBCLEdBQUEsS0FBQUEsU0FBQUEsRUFFcEJxQixlQUNHVCxLQUFLWCxpQkFBa0JXLEtBQUtWLG9CQUFxQlUsS0FBS1Isa0JBQ3JELFFBQWMsQ0FDWmtCLE1BQU8sR0FDUEMsU0FBVSxHQUNWQyxTQUFTLEVBQ1RDLE9BQVEsR0FDUlQsUUFBUyxHQUNUVSxPQUFRLEtBRVpkLEtBQUtULHlCQUEyQlMsS0FBS1Ysb0JBQW9CLFdBRzNEeUIsUUFDRWYsS0FBS08sZUFBZVMsU0FBUyxDQUMzQnRCLG1CQUFvQk0sS0FBS04scUJBSTdCdUIsV0FBV0MsR0FDVEEsRUFBRUMsaUJBQ0ZDLFFBQVFDLElBQUlyQixLQUFLWCxrQkFDakJXLEtBQUtQLFFBQVE2QixVQUFZQyxLQUFLQyxVQUFVeEIsS0FBS1gsaUJBQWtCLEtBQU0sR0FHdkVvQyxZQUNFekIsS0FBS1Isa0JBQ0xRLEtBQUtaLFNBQVNzQyxTQUdoQkMsU0FDRSxPQUFPLElBQUk7OztxQkFHT1QsSUFDVmxCLEtBQUtpQixXQUFXQzs7Ozs7Ozs7OztzQkFXTmxCLEtBQUtYLGlCQUFpQnFCO3lCQUNuQlYsS0FBS1Ysb0JBQW9COzs7Ozs7Ozs7Ozs7O3NCQWE1QlUsS0FBS1gsaUJBQWlCc0I7eUJBQ25CWCxLQUFLVixvQkFBb0I7Ozs7Ozs7O3dCQVExQlUsS0FBS1gsaUJBQWlCdUI7eUJBQ3JCWixLQUFLVixvQkFBb0I7Ozs7Ozs7OztzQkFTNUJVLEtBQUtYLGlCQUFpQndCO3lCQUNuQmIsS0FBS1Ysb0JBQW9COzs7Ozs7Ozs7Ozs7O29CQWE3QnNDLElBQ0w1QixLQUFLTyxlQUFpQnFCOzs7Ozs7Ozs7eUJBVWI1QixLQUFLVixvQkFBb0I7Ozs7Ozs7O3lCQVF6QlUsS0FBS1Ysb0JBQW9COzs7Ozs7c0JBTTVCLEtBQ1JVLEtBQUt5Qjs7Ozs7Ozs7Z0JBU0ZHLElBQ1Q1QixLQUFLUCxRQUFVbUM7VUFFYkwsS0FBS0MsVUFBVXhCLEtBQUtYLGlCQUFrQixLQUFNOzs7UUFwS2hERixHQUFVLFVBSGYsUUFBVSxDQUNUMEMsU0FBVSxpQiw2QkFpQ29CLFFBL0IxQjFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2Zvcm0vc2FtcGxlLWZvcm0uY29tcG9uZW50LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgQ29tcG9uZW50UmVmLFxuICBodG1sLFxuICBJSG9va3MsXG4gIFJlbmRlcmVyLFxuICB1c2VGb3JtRmllbGRzLFxufSBmcm9tICdAcGx1bWVqcy9jb3JlJztcbmltcG9ydCB7IElNdWx0aVNlbGVjdE9wdGlvbnMsIE11bHRpU2VsZWN0Q29tcG9uZW50IH0gZnJvbSAnQHBsdW1lanMvdWknO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzYW1wbGUtZm9ybScsXG59KVxuY2xhc3MgU2FtcGxlRm9ybSBpbXBsZW1lbnRzIElIb29rcyB7XG4gIHNhbXBsZWZvcm1GaWVsZHM6IGFueTtcbiAgY3JlYXRlQ2hhbmdlSGFuZGxlcjogKGtleTogc3RyaW5nKSA9PiAoZTogRXZlbnQpID0+IHZvaWQ7XG4gIG11bHRpU2VsZWN0Q2hhbmdlaGFuZGxlcjogKGU6IGFueSkgPT4gdm9pZDtcbiAgcmVzZXRGb3JtRmllbGRzOiAoKSA9PiB2b2lkO1xuICBqc29uUmVmOiBIVE1MRWxlbWVudDtcblxuICBtdWx0aVNlbGVjdE9wdGlvbnM6IElNdWx0aVNlbGVjdE9wdGlvbnMgPSB7XG4gICAgZGF0YTogWydvcHRpb24xJywgJ29wdGlvbjInLCAnb3B0aW9uMycsICdvcHRpb240J10sXG4gICAgc2VsZWN0ZWRWYWx1ZXM6IFsnb3B0aW9uMScsICdvcHRpb24yJ10sXG4gICAgbXVsdGlwbGU6IHRydWUsXG4gICAgb25jaGFuZ2U6IChvcHRpb25zQXJyOiBzdHJpbmdbXSkgPT4ge1xuICAgICAgdGhpcy5tdWx0aVNlbGVjdENoYW5nZWhhbmRsZXIoe1xuICAgICAgICB0YXJnZXQ6IHtcbiAgICAgICAgICB2YWx1ZTogb3B0aW9uc0FycixcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgYnV0dG9uVGV4dDogKG9wdGlvbnM6IEFycmF5PHN0cmluZz4pID0+IHtcbiAgICAgIGlmIChvcHRpb25zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gJ05vbmUgc2VsZWN0ZWQnO1xuICAgICAgfSBlbHNlIGlmIChvcHRpb25zLmxlbmd0aCA+IDMpIHtcbiAgICAgICAgcmV0dXJuIG9wdGlvbnMubGVuZ3RoICsgJyBzZWxlY3RlZCc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gb3B0aW9ucy5qb2luKCcsICcpO1xuICAgICAgfVxuICAgIH0sXG4gIH07XG5cbiAgbXVsdGlTZWxlY3RSZWY6IENvbXBvbmVudFJlZjxNdWx0aVNlbGVjdENvbXBvbmVudD47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIpIHt9XG5cbiAgYmVmb3JlTW91bnQoKSB7XG4gICAgW3RoaXMuc2FtcGxlZm9ybUZpZWxkcywgdGhpcy5jcmVhdGVDaGFuZ2VIYW5kbGVyLCB0aGlzLnJlc2V0Rm9ybUZpZWxkc10gPVxuICAgICAgdXNlRm9ybUZpZWxkcyh7XG4gICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgcGFzc3dvcmQ6ICcnLFxuICAgICAgICBjaGVja21lOiBmYWxzZSxcbiAgICAgICAgb3B0aW9uOiAnJyxcbiAgICAgICAgb3B0aW9uczogW10sXG4gICAgICAgIGdlbmRlcjogJycsXG4gICAgICB9KTtcbiAgICB0aGlzLm11bHRpU2VsZWN0Q2hhbmdlaGFuZGxlciA9IHRoaXMuY3JlYXRlQ2hhbmdlSGFuZGxlcignb3B0aW9ucycpO1xuICB9XG5cbiAgbW91bnQoKSB7XG4gICAgdGhpcy5tdWx0aVNlbGVjdFJlZi5zZXRQcm9wcyh7XG4gICAgICBtdWx0aVNlbGVjdE9wdGlvbnM6IHRoaXMubXVsdGlTZWxlY3RPcHRpb25zLFxuICAgIH0pO1xuICB9XG5cbiAgc3VibWl0Rm9ybShlOiBFdmVudCkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnNhbXBsZWZvcm1GaWVsZHMpO1xuICAgIHRoaXMuanNvblJlZi5pbm5lckhUTUwgPSBKU09OLnN0cmluZ2lmeSh0aGlzLnNhbXBsZWZvcm1GaWVsZHMsIG51bGwsIDQpO1xuICB9XG5cbiAgcmVzZXRGb3JtKCkge1xuICAgIHRoaXMucmVzZXRGb3JtRmllbGRzKCk7XG4gICAgdGhpcy5yZW5kZXJlci51cGRhdGUoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxkaXY+XG4gICAgICAgIDxmb3JtXG4gICAgICAgICAgb25zdWJtaXQ9JHsoZTogRXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc3VibWl0Rm9ybShlKTtcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJleGFtcGxlSW5wdXRFbWFpbDFcIj5FbWFpbCBhZGRyZXNzPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgIGlkPVwiZXhhbXBsZUlucHV0RW1haWwxXCJcbiAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cImVtYWlsSGVscFwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgZW1haWxcIlxuICAgICAgICAgICAgICB2YWx1ZT0ke3RoaXMuc2FtcGxlZm9ybUZpZWxkcy5lbWFpbH1cbiAgICAgICAgICAgICAgb25jaGFuZ2U9JHt0aGlzLmNyZWF0ZUNoYW5nZUhhbmRsZXIoJ2VtYWlsJyl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHNtYWxsIGlkPVwiZW1haWxIZWxwXCIgY2xhc3M9XCJmb3JtLXRleHQgdGV4dC1tdXRlZFwiXG4gICAgICAgICAgICAgID5XZSdsbCBuZXZlciBzaGFyZSB5b3VyIGVtYWlsIHdpdGggYW55b25lIGVsc2UuPC9zbWFsbFxuICAgICAgICAgICAgPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiZXhhbXBsZUlucHV0UGFzc3dvcmQxXCI+UGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgaWQ9XCJleGFtcGxlSW5wdXRQYXNzd29yZDFcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgdmFsdWU9JHt0aGlzLnNhbXBsZWZvcm1GaWVsZHMucGFzc3dvcmR9XG4gICAgICAgICAgICAgIG9uY2hhbmdlPSR7dGhpcy5jcmVhdGVDaGFuZ2VIYW5kbGVyKCdwYXNzd29yZCcpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCBmb3JtLWNoZWNrXCI+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNoZWNrLWlucHV0XCJcbiAgICAgICAgICAgICAgaWQ9XCJleGFtcGxlQ2hlY2sxXCJcbiAgICAgICAgICAgICAgY2hlY2tlZD0ke3RoaXMuc2FtcGxlZm9ybUZpZWxkcy5jaGVja21lfVxuICAgICAgICAgICAgICBvbmNoYW5nZT0ke3RoaXMuY3JlYXRlQ2hhbmdlSGFuZGxlcignY2hlY2ttZScpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tY2hlY2stbGFiZWxcIiBmb3I9XCJleGFtcGxlQ2hlY2sxXCJcbiAgICAgICAgICAgICAgPkNoZWNrIG1lIG91dDwvbGFiZWxcbiAgICAgICAgICAgID5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCBmb3JtLWNoZWNrXCI+XG4gICAgICAgICAgICA8bGFiZWw+c2luZ2xlIHNlbGVjdDwvbGFiZWw+XG4gICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgIHZhbHVlPSR7dGhpcy5zYW1wbGVmb3JtRmllbGRzLm9wdGlvbn1cbiAgICAgICAgICAgICAgb25jaGFuZ2U9JHt0aGlzLmNyZWF0ZUNoYW5nZUhhbmRsZXIoJ29wdGlvbicpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8b3B0aW9uPnNlbGVjdDwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMVwiPjE8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjJcIj4yPC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIzXCI+Mzwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNFwiPjQ8L29wdGlvbj5cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWw+cGx1bWVqcyBtdWx0aSBzZWxlY3Q8L2xhYmVsPlxuICAgICAgICAgICAgPG11bHRpLXNlbGVjdFxuICAgICAgICAgICAgICBjbGFzcz1cImQtaW5saW5lLWJsb2NrXCJcbiAgICAgICAgICAgICAgcmVmPSR7KG5vZGUpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm11bHRpU2VsZWN0UmVmID0gbm9kZTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID48L211bHRpLXNlbGVjdD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCBmb3JtLWNoZWNrXCI+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgaWQ9XCJnZW5kZXJfbWFsZVwiXG4gICAgICAgICAgICAgIG5hbWU9XCJnZW5kZXJcIlxuICAgICAgICAgICAgICB2YWx1ZT1cIm1hbGVcIlxuICAgICAgICAgICAgICBvbmNoYW5nZT0ke3RoaXMuY3JlYXRlQ2hhbmdlSGFuZGxlcignZ2VuZGVyJyl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImdlbmRlcl9tYWxlXCI+TWFsZTwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgaWQ9XCJnZW5kZXJfZmVtYWxlXCJcbiAgICAgICAgICAgICAgbmFtZT1cImdlbmRlclwiXG4gICAgICAgICAgICAgIHZhbHVlPVwiZmVtYWxlXCJcbiAgICAgICAgICAgICAgb25jaGFuZ2U9JHt0aGlzLmNyZWF0ZUNoYW5nZUhhbmRsZXIoJ2dlbmRlcicpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJnZW5kZXJfZmVtYWxlXCI+RmVtYWxlPC9sYWJlbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ1dHRvbiBpcy1pbmZvXCI+U3VibWl0PC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25jbGljaz0keygpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5yZXNldEZvcm0oKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBjbGFzcz1cImJ1dHRvblwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgUmVzZXRcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgICA8cHJlPlxuXHRcdFx0XHQ8Y29kZSByZWY9JHsobm9kZSkgPT4ge1xuICAgICAgICB0aGlzLmpzb25SZWYgPSBub2RlO1xuICAgICAgfX0+XG4gICAgICAgICR7SlNPTi5zdHJpbmdpZnkodGhpcy5zYW1wbGVmb3JtRmllbGRzLCBudWxsLCA0KX1cblx0XHRcdFx0PC9jb2RlPlxuXHRcdFx0PC9wcmU+XG4gICAgYDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlNhbXBsZUZvcm0iLCJyZW5kZXJlciIsInNhbXBsZWZvcm1GaWVsZHMiLCJjcmVhdGVDaGFuZ2VIYW5kbGVyIiwibXVsdGlTZWxlY3RDaGFuZ2VoYW5kbGVyIiwicmVzZXRGb3JtRmllbGRzIiwianNvblJlZiIsIm11bHRpU2VsZWN0T3B0aW9ucyIsImRhdGEiLCJzZWxlY3RlZFZhbHVlcyIsIm11bHRpcGxlIiwib25jaGFuZ2UiLCJvcHRpb25zQXJyIiwidGhpcyIsInRhcmdldCIsInZhbHVlIiwiYnV0dG9uVGV4dCIsIm9wdGlvbnMiLCJsZW5ndGgiLCJqb2luIiwibXVsdGlTZWxlY3RSZWYiLCJjb25zdHJ1Y3RvciIsImJlZm9yZU1vdW50IiwiZW1haWwiLCJwYXNzd29yZCIsImNoZWNrbWUiLCJvcHRpb24iLCJnZW5kZXIiLCJtb3VudCIsInNldFByb3BzIiwic3VibWl0Rm9ybSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJpbm5lckhUTUwiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzZXRGb3JtIiwidXBkYXRlIiwicmVuZGVyIiwibm9kZSIsInNlbGVjdG9yIl0sInNvdXJjZVJvb3QiOiIifQ==