"use strict";(self.webpackChunkplumejs_example_repo=self.webpackChunkplumejs_example_repo||[]).push([[629],{629:(e,l,a)=>{a.r(l);var t=a(655),o=a(394);(0,a(558).aA)();let i=class SampleForm{renderer;sampleformFields;createChangeHandler;multiSelectChangehandler;resetFormFields;jsonRef;dropdownOptions={options:[{label:"Option 1",value:"o1"},{label:"Option 2",value:"o2"},{label:"Option 3",value:"o3"},{label:"Option 4",value:"o4"}],multiple:!0,buttonText:e=>0===e.length?"None selected":e.length>3?e.length+" selected":e.map((e=>e.label)).join(", ")};dropdownRef;constructor(e){this.renderer=e}beforeMount(){[this.sampleformFields,this.createChangeHandler,this.resetFormFields]=(0,o.uA)({email:"",password:"",checkme:!1,option:"",options:[],gender:""}),this.multiSelectChangehandler=this.createChangeHandler("options")}mount(){this.dropdownRef.setProps({dropdownOptions:this.dropdownOptions})}submitForm(e){e.preventDefault(),console.log(this.sampleformFields),this.jsonRef.innerHTML=JSON.stringify(this.sampleformFields,null,4)}resetForm(){this.resetFormFields(),this.renderer.update()}render(){return o.dy`
      <div>
        <form
          onsubmit=${e=>{this.submitForm(e)}}
        >
          <div>
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              value=${this.sampleformFields.email}
              onchange=${this.createChangeHandler("email")}
            />
            <small id="emailHelp">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div>
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              id="exampleInputPassword1"
              placeholder="Password"
              value=${this.sampleformFields.password}
              onchange=${this.createChangeHandler("password")}
            />
          </div>
          <div>
            <label for="exampleCheck1">
              <input
                type="checkbox"
                id="exampleCheck1"
                checked=${this.sampleformFields.checkme}
                onchange=${this.createChangeHandler("checkme")}
              />
              Check me out
            </label>
          </div>
          <div>
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
          <div class="mb-20">
            <label>plumejs multi select</label>
            <ui-dropdown
              ref=${e=>{this.dropdownRef=e}}
              onoptionselected=${e=>{this.multiSelectChangehandler({target:{value:e.detail}})}}
            ></ui-dropdown>
          </div>
          <div class="mb-20">
            <label for="gender_male">
              <input
                type="radio"
                id="gender_male"
                name="gender"
                value="male"
                onchange=${this.createChangeHandler("gender")}
              />
              Male
            </label>
            <label for="gender_female">
              <input
                type="radio"
                id="gender_female"
                name="gender"
                value="female"
                onchange=${this.createChangeHandler("gender")}
              />
              Female
            </label>
          </div>
          <button type="submit">Submit</button>
          <button
            onclick=${()=>{this.resetForm()}}
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
    `}};i=(0,t.gn)([(0,o.wA)({selector:"sample-form"}),(0,t.w6)("design:paramtypes",[o.Th])],i)}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0cy82MjkuOTZhODUwYzA5YWYwNGQwMmNjMTEuY2h1bmsuanMiLCJtYXBwaW5ncyI6IndKQWdCQSxFLE9BQUEsTUFLQSxJQUFNQSxFQUFOLE1BQU1BLFdBd0NnQkMsU0F2Q3BCQyxpQkFDQUMsb0JBQ0FDLHlCQUNBQyxnQkFDQUMsUUFFQUMsZ0JBQTRDLENBQzFDQyxRQUFTLENBQ1AsQ0FDRUMsTUFBTyxXQUNQQyxNQUFPLE1BRVQsQ0FDRUQsTUFBTyxXQUNQQyxNQUFPLE1BRVQsQ0FDRUQsTUFBTyxXQUNQQyxNQUFPLE1BRVQsQ0FDRUQsTUFBTyxXQUNQQyxNQUFPLE9BR1hDLFVBQVUsRUFDVkMsV0FBYUosR0FDWSxJQUFuQkEsRUFBUUssT0FDSCxnQkFDRUwsRUFBUUssT0FBUyxFQUNuQkwsRUFBUUssT0FBUyxZQUVqQkwsRUFBUU0sS0FBS0MsR0FBU0EsRUFBS04sUUFBT08sS0FBSyxPQUtwREMsWUFFQUMsWUFBb0JqQixHQUFBLEtBQUFBLFNBQUFBLEVBRXBCa0IsZUFDR0MsS0FBS2xCLGlCQUFrQmtCLEtBQUtqQixvQkFBcUJpQixLQUFLZixrQkFDckQsUUFBYyxDQUNaZ0IsTUFBTyxHQUNQQyxTQUFVLEdBQ1ZDLFNBQVMsRUFDVEMsT0FBUSxHQUNSaEIsUUFBUyxHQUNUaUIsT0FBUSxLQUVaTCxLQUFLaEIseUJBQTJCZ0IsS0FBS2pCLG9CQUFvQixXQUczRHVCLFFBQ0VOLEtBQUtILFlBQVlVLFNBQVMsQ0FDeEJwQixnQkFBaUJhLEtBQUtiLGtCQUkxQnFCLFdBQVdDLEdBQ1RBLEVBQUVDLGlCQUNGQyxRQUFRQyxJQUFJWixLQUFLbEIsa0JBQ2pCa0IsS0FBS2QsUUFBUTJCLFVBQVlDLEtBQUtDLFVBQVVmLEtBQUtsQixpQkFBa0IsS0FBTSxHQUd2RWtDLFlBQ0VoQixLQUFLZixrQkFDTGUsS0FBS25CLFNBQVNvQyxTQUdoQkMsU0FDRSxPQUFPLElBQUk7OztxQkFHT1QsSUFDVlQsS0FBS1EsV0FBV0M7Ozs7Ozs7OztzQkFVTlQsS0FBS2xCLGlCQUFpQm1CO3lCQUNuQkQsS0FBS2pCLG9CQUFvQjs7Ozs7Ozs7Ozs7O3NCQVk1QmlCLEtBQUtsQixpQkFBaUJvQjt5QkFDbkJGLEtBQUtqQixvQkFBb0I7Ozs7Ozs7OzBCQVF4QmlCLEtBQUtsQixpQkFBaUJxQjsyQkFDckJILEtBQUtqQixvQkFBb0I7Ozs7Ozs7O3NCQVE5QmlCLEtBQUtsQixpQkFBaUJzQjt5QkFDbkJKLEtBQUtqQixvQkFBb0I7Ozs7Ozs7Ozs7OztvQkFZN0JvQyxJQUNMbkIsS0FBS0gsWUFBY3NCO2lDQUVEQyxJQUNsQnBCLEtBQUtoQix5QkFBeUIsQ0FDNUJxQyxPQUFRLENBQ04vQixNQUFPOEIsRUFBTUU7Ozs7Ozs7Ozs7MkJBYU50QixLQUFLakIsb0JBQW9COzs7Ozs7Ozs7OzJCQVV6QmlCLEtBQUtqQixvQkFBb0I7Ozs7Ozs7c0JBTzlCLEtBQ1JpQixLQUFLZ0I7Ozs7Ozs7Z0JBUUZHLElBQ1RuQixLQUFLZCxRQUFVaUM7VUFFYkwsS0FBS0MsVUFBVWYsS0FBS2xCLGlCQUFrQixLQUFNOzs7UUFuTGhERixHQUFVLFVBSGYsUUFBVSxDQUNUMkMsU0FBVSxpQiw2QkEwQ29CLFFBeEMxQjNDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2Zvcm0vc2FtcGxlLWZvcm0uY29tcG9uZW50LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgQ29tcG9uZW50UmVmLFxuICBodG1sLFxuICBJSG9va3MsXG4gIFJlbmRlcmVyLFxuICB1c2VGb3JtRmllbGRzLFxufSBmcm9tICdAcGx1bWVqcy9jb3JlJztcblxuaW1wb3J0IHtcbiAgSURyb3Bkb3duT3B0aW9ucyxcbiAgSU9wdGlvbixcbiAgRHJvcGRvd25Db21wb25lbnQsXG4gIHJlZ2lzdGVyVUlEcm9wZG93bixcbn0gZnJvbSAnQHBsdW1lanMvdWknO1xuXG5yZWdpc3RlclVJRHJvcGRvd24oKTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2FtcGxlLWZvcm0nLFxufSlcbmNsYXNzIFNhbXBsZUZvcm0gaW1wbGVtZW50cyBJSG9va3Mge1xuICBzYW1wbGVmb3JtRmllbGRzOiBhbnk7XG4gIGNyZWF0ZUNoYW5nZUhhbmRsZXI6IChrZXk6IHN0cmluZykgPT4gKGU6IEV2ZW50KSA9PiB2b2lkO1xuICBtdWx0aVNlbGVjdENoYW5nZWhhbmRsZXI6IChlOiBhbnkpID0+IHZvaWQ7XG4gIHJlc2V0Rm9ybUZpZWxkczogKCkgPT4gdm9pZDtcbiAganNvblJlZjogSFRNTEVsZW1lbnQ7XG5cbiAgZHJvcGRvd25PcHRpb25zOiBJRHJvcGRvd25PcHRpb25zPHN0cmluZz4gPSB7XG4gICAgb3B0aW9uczogW1xuICAgICAge1xuICAgICAgICBsYWJlbDogJ09wdGlvbiAxJyxcbiAgICAgICAgdmFsdWU6ICdvMScsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbDogJ09wdGlvbiAyJyxcbiAgICAgICAgdmFsdWU6ICdvMicsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbDogJ09wdGlvbiAzJyxcbiAgICAgICAgdmFsdWU6ICdvMycsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbDogJ09wdGlvbiA0JyxcbiAgICAgICAgdmFsdWU6ICdvNCcsXG4gICAgICB9LFxuICAgIF0sXG4gICAgbXVsdGlwbGU6IHRydWUsXG4gICAgYnV0dG9uVGV4dDogKG9wdGlvbnM6IElPcHRpb248c3RyaW5nPltdKTogc3RyaW5nID0+IHtcbiAgICAgIGlmIChvcHRpb25zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gJ05vbmUgc2VsZWN0ZWQnO1xuICAgICAgfSBlbHNlIGlmIChvcHRpb25zLmxlbmd0aCA+IDMpIHtcbiAgICAgICAgcmV0dXJuIG9wdGlvbnMubGVuZ3RoICsgJyBzZWxlY3RlZCc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gb3B0aW9ucy5tYXAoKGl0ZW0pID0+IGl0ZW0ubGFiZWwpLmpvaW4oJywgJyk7XG4gICAgICB9XG4gICAgfSxcbiAgfTtcblxuICBkcm9wZG93blJlZjogQ29tcG9uZW50UmVmPERyb3Bkb3duQ29tcG9uZW50PHN0cmluZz4+O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyKSB7fVxuXG4gIGJlZm9yZU1vdW50KCkge1xuICAgIFt0aGlzLnNhbXBsZWZvcm1GaWVsZHMsIHRoaXMuY3JlYXRlQ2hhbmdlSGFuZGxlciwgdGhpcy5yZXNldEZvcm1GaWVsZHNdID1cbiAgICAgIHVzZUZvcm1GaWVsZHMoe1xuICAgICAgICBlbWFpbDogJycsXG4gICAgICAgIHBhc3N3b3JkOiAnJyxcbiAgICAgICAgY2hlY2ttZTogZmFsc2UsXG4gICAgICAgIG9wdGlvbjogJycsXG4gICAgICAgIG9wdGlvbnM6IFtdLFxuICAgICAgICBnZW5kZXI6ICcnLFxuICAgICAgfSk7XG4gICAgdGhpcy5tdWx0aVNlbGVjdENoYW5nZWhhbmRsZXIgPSB0aGlzLmNyZWF0ZUNoYW5nZUhhbmRsZXIoJ29wdGlvbnMnKTtcbiAgfVxuXG4gIG1vdW50KCkge1xuICAgIHRoaXMuZHJvcGRvd25SZWYuc2V0UHJvcHMoe1xuICAgICAgZHJvcGRvd25PcHRpb25zOiB0aGlzLmRyb3Bkb3duT3B0aW9ucyxcbiAgICB9KTtcbiAgfVxuXG4gIHN1Ym1pdEZvcm0oZTogRXZlbnQpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc29sZS5sb2codGhpcy5zYW1wbGVmb3JtRmllbGRzKTtcbiAgICB0aGlzLmpzb25SZWYuaW5uZXJIVE1MID0gSlNPTi5zdHJpbmdpZnkodGhpcy5zYW1wbGVmb3JtRmllbGRzLCBudWxsLCA0KTtcbiAgfVxuXG4gIHJlc2V0Rm9ybSgpIHtcbiAgICB0aGlzLnJlc2V0Rm9ybUZpZWxkcygpO1xuICAgIHRoaXMucmVuZGVyZXIudXBkYXRlKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8ZGl2PlxuICAgICAgICA8Zm9ybVxuICAgICAgICAgIG9uc3VibWl0PSR7KGU6IEV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnN1Ym1pdEZvcm0oZSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiZXhhbXBsZUlucHV0RW1haWwxXCI+RW1haWwgYWRkcmVzczwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgaWQ9XCJleGFtcGxlSW5wdXRFbWFpbDFcIlxuICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwiZW1haWxIZWxwXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBlbWFpbFwiXG4gICAgICAgICAgICAgIHZhbHVlPSR7dGhpcy5zYW1wbGVmb3JtRmllbGRzLmVtYWlsfVxuICAgICAgICAgICAgICBvbmNoYW5nZT0ke3RoaXMuY3JlYXRlQ2hhbmdlSGFuZGxlcignZW1haWwnKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8c21hbGwgaWQ9XCJlbWFpbEhlbHBcIj5cbiAgICAgICAgICAgICAgV2UnbGwgbmV2ZXIgc2hhcmUgeW91ciBlbWFpbCB3aXRoIGFueW9uZSBlbHNlLlxuICAgICAgICAgICAgPC9zbWFsbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImV4YW1wbGVJbnB1dFBhc3N3b3JkMVwiPlBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICBpZD1cImV4YW1wbGVJbnB1dFBhc3N3b3JkMVwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxuICAgICAgICAgICAgICB2YWx1ZT0ke3RoaXMuc2FtcGxlZm9ybUZpZWxkcy5wYXNzd29yZH1cbiAgICAgICAgICAgICAgb25jaGFuZ2U9JHt0aGlzLmNyZWF0ZUNoYW5nZUhhbmRsZXIoJ3Bhc3N3b3JkJyl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiZXhhbXBsZUNoZWNrMVwiPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgIGlkPVwiZXhhbXBsZUNoZWNrMVwiXG4gICAgICAgICAgICAgICAgY2hlY2tlZD0ke3RoaXMuc2FtcGxlZm9ybUZpZWxkcy5jaGVja21lfVxuICAgICAgICAgICAgICAgIG9uY2hhbmdlPSR7dGhpcy5jcmVhdGVDaGFuZ2VIYW5kbGVyKCdjaGVja21lJyl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIENoZWNrIG1lIG91dFxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsPnNpbmdsZSBzZWxlY3Q8L2xhYmVsPlxuICAgICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgICB2YWx1ZT0ke3RoaXMuc2FtcGxlZm9ybUZpZWxkcy5vcHRpb259XG4gICAgICAgICAgICAgIG9uY2hhbmdlPSR7dGhpcy5jcmVhdGVDaGFuZ2VIYW5kbGVyKCdvcHRpb24nKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPG9wdGlvbj5zZWxlY3Q8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjFcIj4xPC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyXCI+Mjwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiM1wiPjM8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjRcIj40PC9vcHRpb24+XG4gICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibWItMjBcIj5cbiAgICAgICAgICAgIDxsYWJlbD5wbHVtZWpzIG11bHRpIHNlbGVjdDwvbGFiZWw+XG4gICAgICAgICAgICA8dWktZHJvcGRvd25cbiAgICAgICAgICAgICAgcmVmPSR7KG5vZGUpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmRyb3Bkb3duUmVmID0gbm9kZTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgb25vcHRpb25zZWxlY3RlZD0keyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubXVsdGlTZWxlY3RDaGFuZ2VoYW5kbGVyKHtcbiAgICAgICAgICAgICAgICAgIHRhcmdldDoge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZXZlbnQuZGV0YWlsLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID48L3VpLWRyb3Bkb3duPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYi0yMFwiPlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImdlbmRlcl9tYWxlXCI+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgaWQ9XCJnZW5kZXJfbWFsZVwiXG4gICAgICAgICAgICAgICAgbmFtZT1cImdlbmRlclwiXG4gICAgICAgICAgICAgICAgdmFsdWU9XCJtYWxlXCJcbiAgICAgICAgICAgICAgICBvbmNoYW5nZT0ke3RoaXMuY3JlYXRlQ2hhbmdlSGFuZGxlcignZ2VuZGVyJyl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIE1hbGVcbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiZ2VuZGVyX2ZlbWFsZVwiPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgIGlkPVwiZ2VuZGVyX2ZlbWFsZVwiXG4gICAgICAgICAgICAgICAgbmFtZT1cImdlbmRlclwiXG4gICAgICAgICAgICAgICAgdmFsdWU9XCJmZW1hbGVcIlxuICAgICAgICAgICAgICAgIG9uY2hhbmdlPSR7dGhpcy5jcmVhdGVDaGFuZ2VIYW5kbGVyKCdnZW5kZXInKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgRmVtYWxlXG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uY2xpY2s9JHsoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMucmVzZXRGb3JtKCk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFJlc2V0XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgICAgPHByZT5cblx0XHRcdFx0PGNvZGUgcmVmPSR7KG5vZGUpID0+IHtcbiAgICAgICAgdGhpcy5qc29uUmVmID0gbm9kZTtcbiAgICAgIH19PlxuICAgICAgICAke0pTT04uc3RyaW5naWZ5KHRoaXMuc2FtcGxlZm9ybUZpZWxkcywgbnVsbCwgNCl9XG5cdFx0XHRcdDwvY29kZT5cblx0XHRcdDwvcHJlPlxuICAgIGA7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJTYW1wbGVGb3JtIiwicmVuZGVyZXIiLCJzYW1wbGVmb3JtRmllbGRzIiwiY3JlYXRlQ2hhbmdlSGFuZGxlciIsIm11bHRpU2VsZWN0Q2hhbmdlaGFuZGxlciIsInJlc2V0Rm9ybUZpZWxkcyIsImpzb25SZWYiLCJkcm9wZG93bk9wdGlvbnMiLCJvcHRpb25zIiwibGFiZWwiLCJ2YWx1ZSIsIm11bHRpcGxlIiwiYnV0dG9uVGV4dCIsImxlbmd0aCIsIm1hcCIsIml0ZW0iLCJqb2luIiwiZHJvcGRvd25SZWYiLCJjb25zdHJ1Y3RvciIsImJlZm9yZU1vdW50IiwidGhpcyIsImVtYWlsIiwicGFzc3dvcmQiLCJjaGVja21lIiwib3B0aW9uIiwiZ2VuZGVyIiwibW91bnQiLCJzZXRQcm9wcyIsInN1Ym1pdEZvcm0iLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiaW5uZXJIVE1MIiwiSlNPTiIsInN0cmluZ2lmeSIsInJlc2V0Rm9ybSIsInVwZGF0ZSIsInJlbmRlciIsIm5vZGUiLCJldmVudCIsInRhcmdldCIsImRldGFpbCIsInNlbGVjdG9yIl0sInNvdXJjZVJvb3QiOiIifQ==