(self.webpackChunkplumejs_example_repo=self.webpackChunkplumejs_example_repo||[]).push([[629],{629:(e,l,a)=>{"use strict";a.r(l);var t=a(298);(0,t.wA)({selector:"sample-form"})(["Renderer",class{constructor(e){this.renderer=e,this.multiSelectOptions={data:["option1","option2","option3","option4"],multiple:!0,onchange:e=>{this.multiSelectChangehandler({target:{value:e}})},buttonText:e=>0===e.length?"None selected":e.length>3?e.length+" selected":e.join(", ")}}beforeMount(){const{formFields:e,createChangeHandler:l}=(0,t.uA)({email:"",password:"",checkme:!1,option:"",options:[],gender:""});this.sampleformFields=e,this.createChangeHandler=l,this.multiSelectChangehandler=this.createChangeHandler("options")}submitForm(e){e.preventDefault(),console.log(this.sampleformFields),this.renderer.update()}render(){return t.dy`
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
						<select value=${this.sampleformFields.option} onchange=${this.createChangeHandler("option")}>
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
						</select>
					</div>
					<div>
					<label>plumejs multi select</label>
					<multi-select class="d-inline-block" multiSelectOptions=${this.multiSelectOptions}></multi-select>
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
				</form>
			</div>
			<pre>
				<code>
					${JSON.stringify(this.sampleformFields,null,"\t")}
				</code>
			</pre>
		`}}])}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZm9ybS9zYW1wbGUtZm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOlsicmVuZGVyZXIiLCJtdWx0aVNlbGVjdE9wdGlvbnMiLCJkYXRhIiwibXVsdGlwbGUiLCJvbmNoYW5nZSIsIm9wdGlvbnNBcnIiLCJ0aGlzIiwibXVsdGlTZWxlY3RDaGFuZ2VoYW5kbGVyIiwidGFyZ2V0IiwidmFsdWUiLCJidXR0b25UZXh0Iiwib3B0aW9ucyIsImxlbmd0aCIsImpvaW4iLCJmb3JtRmllbGRzIiwiY3JlYXRlQ2hhbmdlSGFuZGxlciIsImVtYWlsIiwicGFzc3dvcmQiLCJjaGVja21lIiwib3B0aW9uIiwiZ2VuZGVyIiwic2FtcGxlZm9ybUZpZWxkcyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJ1cGRhdGUiLCJzdWJtaXRGb3JtIiwiSlNPTiIsInN0cmluZ2lmeSJdLCJtYXBwaW5ncyI6IjZMQUdBLE1BNkJDLFlBQW9CQSxHQUFBLEtBQUFBLFdBdEJwQixLQUFBQyxtQkFBMEMsQ0FDekNDLEtBQU0sQ0FBQyxVQUFXLFVBQVcsVUFBVyxXQUN4Q0MsVUFBVSxFQUNWQyxTQUFXQyxJQUNWQyxLQUFLQyx5QkFBeUIsQ0FDN0JDLE9BQVEsQ0FDUEMsTUFBT0osTUFJVkssV0FBYUMsR0FDVyxJQUFuQkEsRUFBUUMsT0FDSixnQkFFQ0QsRUFBUUMsT0FBUyxFQUNsQkQsRUFBUUMsT0FBUyxZQUVqQkQsRUFBUUUsS0FBSyxPQU92QixjQUNDLE1BQU0sV0FBRUMsRUFBVSxvQkFBRUMsSUFBd0IsUUFBYyxDQUN6REMsTUFBTyxHQUNQQyxTQUFVLEdBQ1ZDLFNBQVMsRUFDVEMsT0FBUSxHQUNSUixRQUFTLEdBQ1RTLE9BQVEsS0FFVGQsS0FBS2UsaUJBQW1CUCxFQUN4QlIsS0FBS1Msb0JBQXNCQSxFQUMzQlQsS0FBS0MseUJBQTJCRCxLQUFLUyxvQkFBb0IsV0FHMUQsV0FBV08sR0FDVkEsRUFBRUMsaUJBQ0ZDLFFBQVFDLElBQUluQixLQUFLZSxrQkFDakJmLEtBQUtOLFNBQVMwQixTQUdmLFNBQ0MsT0FBTyxJQUFJOzs7Z0JBR0lKLElBQ2JoQixLQUFLcUIsV0FBV0w7Ozs7Ozs7Ozs7ZUFXTGhCLEtBQUtlLGlCQUFpQkw7a0JBQ25CVixLQUFLUyxvQkFBb0I7Ozs7Ozs7Ozs7Ozs7ZUFhNUJULEtBQUtlLGlCQUFpQko7a0JBQ25CWCxLQUFLUyxvQkFBb0I7Ozs7Ozs7O2lCQVExQlQsS0FBS2UsaUJBQWlCSDtrQkFDckJaLEtBQUtTLG9CQUFvQjs7Ozs7Ozs7c0JBUXJCVCxLQUFLZSxpQkFBaUJGLG1CQUFtQmIsS0FBS1Msb0JBQW9COzs7Ozs7Ozs7K0RBU3pCVCxLQUFLTDs7Ozs7Ozs7a0JBUWxESyxLQUFLUyxvQkFBb0I7Ozs7Ozs7O2tCQVF6QlQsS0FBS1Msb0JBQW9COzs7Ozs7Ozs7T0FTcENhLEtBQUtDLFVBQVV2QixLQUFLZSxpQkFBa0IsS0FBTSIsImZpbGUiOiI2MjkuY2h1bmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIGh0bWwsIElIb29rcywgUmVuZGVyZXIsIHVzZUZvcm1GaWVsZHMgfSBmcm9tIFwiQHBsdW1lanMvY29yZVwiO1xyXG5pbXBvcnQgeyBJTXVsdGlTZWxlY3RPcHRpb25zIH0gZnJvbSAnQHBsdW1lanMvdWknO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwic2FtcGxlLWZvcm1cIlxyXG59KVxyXG5jbGFzcyBTYW1wbGVGb3JtIGltcGxlbWVudHMgSUhvb2tzIHtcclxuXHRzYW1wbGVmb3JtRmllbGRzOiBhbnk7XHJcblx0Y3JlYXRlQ2hhbmdlSGFuZGxlcjogYW55O1xyXG5cdG11bHRpU2VsZWN0Q2hhbmdlaGFuZGxlcjogYW55O1xyXG5cdG11bHRpU2VsZWN0T3B0aW9uczogSU11bHRpU2VsZWN0T3B0aW9ucyA9IHtcclxuXHRcdGRhdGE6IFsnb3B0aW9uMScsICdvcHRpb24yJywgJ29wdGlvbjMnLCAnb3B0aW9uNCddLFxyXG5cdFx0bXVsdGlwbGU6IHRydWUsXHJcblx0XHRvbmNoYW5nZTogKG9wdGlvbnNBcnI6IHN0cmluZ1tdKSA9PiB7XHJcblx0XHRcdHRoaXMubXVsdGlTZWxlY3RDaGFuZ2VoYW5kbGVyKHtcclxuXHRcdFx0XHR0YXJnZXQ6IHtcclxuXHRcdFx0XHRcdHZhbHVlOiBvcHRpb25zQXJyXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH0sXHJcblx0XHRidXR0b25UZXh0OiAob3B0aW9uczogQXJyYXk8c3RyaW5nPikgPT4ge1xyXG5cdFx0XHRpZiAob3B0aW9ucy5sZW5ndGggPT09IDApIHtcclxuXHRcdFx0XHRyZXR1cm4gJ05vbmUgc2VsZWN0ZWQnO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKG9wdGlvbnMubGVuZ3RoID4gMykge1xyXG5cdFx0XHRcdHJldHVybiBvcHRpb25zLmxlbmd0aCArICcgc2VsZWN0ZWQnO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJldHVybiBvcHRpb25zLmpvaW4oJywgJyk7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0fVxyXG5cclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcikgeyB9XHJcblxyXG5cdGJlZm9yZU1vdW50KCkge1xyXG5cdFx0Y29uc3QgeyBmb3JtRmllbGRzLCBjcmVhdGVDaGFuZ2VIYW5kbGVyIH0gPSB1c2VGb3JtRmllbGRzKHtcclxuXHRcdFx0ZW1haWw6IFwiXCIsXHJcblx0XHRcdHBhc3N3b3JkOiBcIlwiLFxyXG5cdFx0XHRjaGVja21lOiBmYWxzZSxcclxuXHRcdFx0b3B0aW9uOiAnJyxcclxuXHRcdFx0b3B0aW9uczogW10sXHJcblx0XHRcdGdlbmRlcjogXCJcIixcclxuXHRcdH0pO1xyXG5cdFx0dGhpcy5zYW1wbGVmb3JtRmllbGRzID0gZm9ybUZpZWxkcztcclxuXHRcdHRoaXMuY3JlYXRlQ2hhbmdlSGFuZGxlciA9IGNyZWF0ZUNoYW5nZUhhbmRsZXI7XHJcblx0XHR0aGlzLm11bHRpU2VsZWN0Q2hhbmdlaGFuZGxlciA9IHRoaXMuY3JlYXRlQ2hhbmdlSGFuZGxlcignb3B0aW9ucycpO1xyXG5cdH1cclxuXHJcblx0c3VibWl0Rm9ybShlOiBFdmVudCkge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0Y29uc29sZS5sb2codGhpcy5zYW1wbGVmb3JtRmllbGRzKTtcclxuXHRcdHRoaXMucmVuZGVyZXIudXBkYXRlKCk7XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRyZXR1cm4gaHRtbGBcclxuXHRcdFx0PGRpdj5cclxuXHRcdFx0XHQ8Zm9ybVxyXG5cdFx0XHRcdFx0b25zdWJtaXQ9JHsoZTogRXZlbnQpID0+IHtcclxuXHRcdFx0XHR0aGlzLnN1Ym1pdEZvcm0oZSk7XHJcblx0XHRcdH19XHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuXHRcdFx0XHRcdFx0PGxhYmVsIGZvcj1cImV4YW1wbGVJbnB1dEVtYWlsMVwiPkVtYWlsIGFkZHJlc3M8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0XHR0eXBlPVwiZW1haWxcIlxyXG5cdFx0XHRcdFx0XHRcdGNsYXNzPVwiZm9ybS1jb250cm9sXCJcclxuXHRcdFx0XHRcdFx0XHRpZD1cImV4YW1wbGVJbnB1dEVtYWlsMVwiXHJcblx0XHRcdFx0XHRcdFx0YXJpYS1kZXNjcmliZWRieT1cImVtYWlsSGVscFwiXHJcblx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJFbnRlciBlbWFpbFwiXHJcblx0XHRcdFx0XHRcdFx0dmFsdWU9JHt0aGlzLnNhbXBsZWZvcm1GaWVsZHMuZW1haWx9XHJcblx0XHRcdFx0XHRcdFx0b25jaGFuZ2U9JHt0aGlzLmNyZWF0ZUNoYW5nZUhhbmRsZXIoXCJlbWFpbFwiKX1cclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0PHNtYWxsIGlkPVwiZW1haWxIZWxwXCIgY2xhc3M9XCJmb3JtLXRleHQgdGV4dC1tdXRlZFwiXHJcblx0XHRcdFx0XHRcdFx0PldlJ2xsIG5ldmVyIHNoYXJlIHlvdXIgZW1haWwgd2l0aCBhbnlvbmUgZWxzZS48L3NtYWxsXHJcblx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuXHRcdFx0XHRcdFx0PGxhYmVsIGZvcj1cImV4YW1wbGVJbnB1dFBhc3N3b3JkMVwiPlBhc3N3b3JkPC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdFx0dHlwZT1cInBhc3N3b3JkXCJcclxuXHRcdFx0XHRcdFx0XHRjbGFzcz1cImZvcm0tY29udHJvbFwiXHJcblx0XHRcdFx0XHRcdFx0aWQ9XCJleGFtcGxlSW5wdXRQYXNzd29yZDFcIlxyXG5cdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxyXG5cdFx0XHRcdFx0XHRcdHZhbHVlPSR7dGhpcy5zYW1wbGVmb3JtRmllbGRzLnBhc3N3b3JkfVxyXG5cdFx0XHRcdFx0XHRcdG9uY2hhbmdlPSR7dGhpcy5jcmVhdGVDaGFuZ2VIYW5kbGVyKFwicGFzc3dvcmRcIil9XHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIGZvcm0tY2hlY2tcIj5cclxuXHRcdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdFx0dHlwZT1cImNoZWNrYm94XCJcclxuXHRcdFx0XHRcdFx0XHRjbGFzcz1cImZvcm0tY2hlY2staW5wdXRcIlxyXG5cdFx0XHRcdFx0XHRcdGlkPVwiZXhhbXBsZUNoZWNrMVwiXHJcblx0XHRcdFx0XHRcdFx0Y2hlY2tlZD0ke3RoaXMuc2FtcGxlZm9ybUZpZWxkcy5jaGVja21lfVxyXG5cdFx0XHRcdFx0XHRcdG9uY2hhbmdlPSR7dGhpcy5jcmVhdGVDaGFuZ2VIYW5kbGVyKFwiY2hlY2ttZVwiKX1cclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzPVwiZm9ybS1jaGVjay1sYWJlbFwiIGZvcj1cImV4YW1wbGVDaGVjazFcIlxyXG5cdFx0XHRcdFx0XHRcdD5DaGVjayBtZSBvdXQ8L2xhYmVsXHJcblx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgZm9ybS1jaGVja1wiPlxyXG5cdFx0XHRcdFx0XHQ8bGFiZWw+c2luZ2xlIHNlbGVjdDwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdDxzZWxlY3QgdmFsdWU9JHt0aGlzLnNhbXBsZWZvcm1GaWVsZHMub3B0aW9ufSBvbmNoYW5nZT0ke3RoaXMuY3JlYXRlQ2hhbmdlSGFuZGxlcihcIm9wdGlvblwiKX0+XHJcblx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIjFcIj4xPC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIjJcIj4yPC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIjNcIj4zPC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIjRcIj40PC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdDwvc2VsZWN0PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0PGxhYmVsPnBsdW1lanMgbXVsdGkgc2VsZWN0PC9sYWJlbD5cclxuXHRcdFx0XHRcdDxtdWx0aS1zZWxlY3QgY2xhc3M9XCJkLWlubGluZS1ibG9ja1wiIG11bHRpU2VsZWN0T3B0aW9ucz0ke3RoaXMubXVsdGlTZWxlY3RPcHRpb25zfT48L211bHRpLXNlbGVjdD5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgZm9ybS1jaGVja1wiPlxyXG5cdFx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0XHR0eXBlPVwicmFkaW9cIlxyXG5cdFx0XHRcdFx0XHRcdGlkPVwiZ2VuZGVyX21hbGVcIlxyXG5cdFx0XHRcdFx0XHRcdG5hbWU9XCJnZW5kZXJcIlxyXG5cdFx0XHRcdFx0XHRcdHZhbHVlPVwibWFsZVwiXHJcblx0XHRcdFx0XHRcdFx0b25jaGFuZ2U9JHt0aGlzLmNyZWF0ZUNoYW5nZUhhbmRsZXIoXCJnZW5kZXJcIil9XHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDxsYWJlbCBmb3I9XCJnZW5kZXJfbWFsZVwiPk1hbGU8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0XHR0eXBlPVwicmFkaW9cIlxyXG5cdFx0XHRcdFx0XHRcdGlkPVwiZ2VuZGVyX2ZlbWFsZVwiXHJcblx0XHRcdFx0XHRcdFx0bmFtZT1cImdlbmRlclwiXHJcblx0XHRcdFx0XHRcdFx0dmFsdWU9XCJmZW1hbGVcIlxyXG5cdFx0XHRcdFx0XHRcdG9uY2hhbmdlPSR7dGhpcy5jcmVhdGVDaGFuZ2VIYW5kbGVyKFwiZ2VuZGVyXCIpfVxyXG5cdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQ8bGFiZWwgZm9yPVwiZ2VuZGVyX2ZlbWFsZVwiPkZlbWFsZTwvbGFiZWw+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnV0dG9uIGlzLWluZm9cIj5TdWJtaXQ8L2J1dHRvbj5cclxuXHRcdFx0XHQ8L2Zvcm0+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8cHJlPlxyXG5cdFx0XHRcdDxjb2RlPlxyXG5cdFx0XHRcdFx0JHtKU09OLnN0cmluZ2lmeSh0aGlzLnNhbXBsZWZvcm1GaWVsZHMsIG51bGwsIFwiXFx0XCIpfVxyXG5cdFx0XHRcdDwvY29kZT5cclxuXHRcdFx0PC9wcmU+XHJcblx0XHRgO1xyXG5cdH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9