(self.webpackChunkplumejs_example_repo=self.webpackChunkplumejs_example_repo||[]).push([[167],{167:(e,t,s)=>{"use strict";s.r(t);var o=s(298);(0,o.wA)({selector:"emulated-styles",styles:"\n    :host(.color-1) { color: green; }\n    :host(.color-2) { color: blue; }\n    :host(.color-3) { color: red; }\n  "})([class{constructor(){}render(){return o.dy`<p>my styles are emulated</p>`}}]);(0,o.GS)("SampleService")([class{constructor(){}testMeth(){console.log("testmethod in sample service")}}]);(0,o.GS)("TestService")(["SampleService",class{constructor(e){this.sampleSrvc=e}testMeth(){this.sampleSrvc.testMeth()}getUsers(){return fetch("https://api.github.com/users?since=135")}}]);(0,o.wA)({selector:"sample-ele"})(["TestService","Renderer",class{constructor(e,t){this.testSrvc=e,this.renderer=t,this.test="sample 123",this.props={name:this.test}}beforeMount(){console.log("before mounting...")}mount(){console.log("component loaded"),console.log(this.inputField),this.testSrvc.testMeth(),this.testEleRef.setProps({testprops:this.props})}unmount(){console.log("component unloaded")}enablePersonsRoute(){window.localStorage.setItem("@plumejs/core","now persons route is activated")}disablePersonsRoute(){window.localStorage.removeItem("@plumejs/core")}updateProps(){this.testEleRef.setProps({testprops:this.props})}count(e){this.test=e,this.props.name=e,this.renderer.update(),this.testEleRef.setProps({testprops:this.props})}getRef(){console.log(this.inputField)}render(){return o.dy`
			<p>Persons route has <b>canActivate</b> gaurd which check for <i>plumejs</i> key in localstorage. Click enable button to navigate to persons route. Click disable button to disable persons route. </p>
			<div>
				<button class='button is-small is-info' onclick=${this.enablePersonsRoute} title='click persons nav to check persons route'>Enable Persons route</button>
				<button class='button is-small is-info' style='margin-left: 10px' onclick=${this.disablePersonsRoute} title='click persons nav to check persons route'>Disable Persons route</button>
			</div>
			<div class='mt-20'>check translation: ${"username.greet".translate({name:"test user"})}</div>
			<input type='text' ref=${e=>{this.inputField=e}} /><button class='button is-small is-info' onclick=${()=>{this.getRef()}}>click</button>
			<div>
				<h1>Sample two way data binding</h1>
				testing web component1 ${this.test}
				<div>
					<button onclick=${()=>{this.updateProps()}}>change props</button>
				</div>
				<test-ele ref="${e=>{this.testEleRef=e}}" oncount="${e=>{this.count(e.detail)}}">
					
				</test-ele>
			</div>
			${[1,2,3].map((e=>o.dy`<emulated-styles class="color-${e}"></emulated-styles>`))}
		`}}]);(0,o.wA)({selector:"test-ele"})(["Renderer",class{constructor(e){this.renderer=e,this.ObservedProperties=["testprops"]}render(){return this.testprops?o.dy`
				<div>
					testing web component2 ${this.testprops.name}
					<button class='button is-small is-info' onclick=${e=>this.counts(e)}>hi</button>
					<input
						value=${this.testprops.name}
						oninput=${e=>this.change(e.target.value)}
					/>
					<slot>testing slots</slot>
				</div>
			`:o.dy``}counts(e){this.renderer.emitEvent("count","testing from click")}change(e){this.renderer.emitEvent("count",e)}mount(){console.log("component loaded"),console.log("props: ",this.testprops)}unmount(){console.log("component unloaded")}}])}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaG9tZS9lbXVsYXRlZC1zdHlsZXMuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9ob21lL3NhbXBsZS1lbGUuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9ob21lL3Rlc3QtZWxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwic2FtcGxlU3J2YyIsInRoaXMiLCJ0ZXN0TWV0aCIsImZldGNoIiwidGVzdFNydmMiLCJyZW5kZXJlciIsInRlc3QiLCJwcm9wcyIsIm5hbWUiLCJpbnB1dEZpZWxkIiwidGVzdEVsZVJlZiIsInNldFByb3BzIiwidGVzdHByb3BzIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInJlbW92ZUl0ZW0iLCJ2YWwiLCJ1cGRhdGUiLCJlbmFibGVQZXJzb25zUm91dGUiLCJkaXNhYmxlUGVyc29uc1JvdXRlIiwidHJhbnNsYXRlIiwibm9kZSIsImdldFJlZiIsInVwZGF0ZVByb3BzIiwiZSIsImNvdW50IiwiZGV0YWlsIiwibWFwIiwiaSIsIk9ic2VydmVkUHJvcGVydGllcyIsImNvdW50cyIsImNoYW5nZSIsInRhcmdldCIsInZhbHVlIiwiZW1pdEV2ZW50Il0sIm1hcHBpbmdzIjoic1RBRUEsTUFTRSxlQUNBLFNBQ0UsT0FBTyxJQUFJLHFDLDBCQ1ZmLE1BRUMsZUFDQSxXQUNDQSxRQUFRQyxJQUFJLHFDLHdDQUlkLE1BRUMsWUFBb0JDLEdBQUEsS0FBQUEsYUFDcEIsV0FDQ0MsS0FBS0QsV0FBV0UsV0FHakIsV0FDQyxPQUFPQyxNQUFNLCtDLDJEQUtmLE1BV0MsWUFBb0JDLEVBQStCQyxHQUEvQixLQUFBRCxXQUErQixLQUFBQyxXQUNsREosS0FBS0ssS0FBTyxhQUNaTCxLQUFLTSxNQUFRLENBQ1pDLEtBQU1QLEtBQUtLLE1BSWIsY0FDQ1IsUUFBUUMsSUFBSSxzQkFHYixRQUNDRCxRQUFRQyxJQUFJLG9CQUNaRCxRQUFRQyxJQUFJRSxLQUFLUSxZQUNqQlIsS0FBS0csU0FBU0YsV0FDZEQsS0FBS1MsV0FBV0MsU0FBUyxDQUFFQyxVQUFXWCxLQUFLTSxRQUc1QyxVQUNDVCxRQUFRQyxJQUFJLHNCQUdiLHFCQUNDYyxPQUFPQyxhQUFhQyxRQUFRLGdCQUFpQixrQ0FHOUMsc0JBQ0NGLE9BQU9DLGFBQWFFLFdBQVcsaUJBR2hDLGNBQ0NmLEtBQUtTLFdBQVdDLFNBQVMsQ0FBRUMsVUFBV1gsS0FBS00sUUFHNUMsTUFBTVUsR0FDTGhCLEtBQUtLLEtBQU9XLEVBQ1poQixLQUFLTSxNQUFNQyxLQUFPUyxFQUNsQmhCLEtBQUtJLFNBQVNhLFNBQ2RqQixLQUFLUyxXQUFXQyxTQUFTLENBQUVDLFVBQVdYLEtBQUtNLFFBRzVDLFNBQ0NULFFBQVFDLElBQUlFLEtBQUtRLFlBR2xCLFNBQ0MsT0FBTyxJQUFJOzs7c0RBR3lDUixLQUFLa0I7Z0ZBQ3FCbEIsS0FBS21COzsyQ0FFMUMsaUJBQWlCQyxVQUFVLENBQUViLEtBQU07NEJBQ2pEYyxJQUFXckIsS0FBS1EsV0FBYWEsd0RBQTRELEtBQVFyQixLQUFLc0I7Ozs2QkFHdEd0QixLQUFLSzs7dUJBRVgsS0FBUUwsS0FBS3VCOztxQkFFZEYsSUFBV3JCLEtBQUtTLFdBQWFZLGdCQUFzQkcsSUFBcUJ4QixLQUFLeUIsTUFBTUQsRUFBRUU7Ozs7S0FJdEcsQ0FBQyxFQUFHLEVBQUcsR0FBR0MsS0FBS0MsR0FBTSxJQUFJLGlDQUFpQ0E7b0RDOUZ4RCxNQUlILFlBQW9CeEIsR0FBQSxLQUFBQSxXQUhYLEtBQUF5QixtQkFBNEIsQ0FBQyxhQUt0QyxTQUNJLE9BQUk3QixLQUFLVyxVQUNFLElBQUk7OzhCQUVPWCxLQUFLVyxVQUFVSjt1REFDV2lCLEdBQVd4QixLQUFLOEIsT0FBT047O2NBRWpFeEIsS0FBS1csVUFBVUo7Z0JBQ1ppQixHQUFXeEIsS0FBSytCLE9BQU9QLEVBQUVRLE9BQU9DOzs7O0tBTTlCLElBQUksR0FJbkIsT0FBT1QsR0FDSHhCLEtBQUtJLFNBQVM4QixVQUFVLFFBQVMsc0JBR3JDLE9BQU9sQixHQUNIaEIsS0FBS0ksU0FBUzhCLFVBQVUsUUFBU2xCLEdBR3JDLFFBQ0luQixRQUFRQyxJQUFJLG9CQUNaRCxRQUFRQyxJQUFJLFVBQVdFLEtBQUtXLFdBR2hDLFVBQ0lkLFFBQVFDLElBQUkiLCJmaWxlIjoiMTY3LmNodW5rLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBodG1sIH0gZnJvbSBcIkBwbHVtZWpzL2NvcmVcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZW11bGF0ZWQtc3R5bGVzJyxcclxuICBzdHlsZXM6IGBcclxuICAgIDpob3N0KC5jb2xvci0xKSB7IGNvbG9yOiBncmVlbjsgfVxyXG4gICAgOmhvc3QoLmNvbG9yLTIpIHsgY29sb3I6IGJsdWU7IH1cclxuICAgIDpob3N0KC5jb2xvci0zKSB7IGNvbG9yOiByZWQ7IH1cclxuICBgXHJcbn0pXHJcbmNsYXNzIEVtdWxhdGVkU3R5bGVzQ29tcCB7XHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gaHRtbGA8cD5teSBzdHlsZXMgYXJlIGVtdWxhdGVkPC9wPmA7XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgQ29tcG9uZW50LCBDb21wb25lbnRSZWYsIGh0bWwsIEluamVjdGFibGUsIFJlbmRlcmVyIH0gZnJvbSBcIkBwbHVtZWpzL2NvcmVcIjtcclxuaW1wb3J0IHsgVGVzdEVsZSB9IGZyb20gJy4vdGVzdC1lbGUuY29tcG9uZW50JztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuY2xhc3MgU2FtcGxlU2VydmljZSB7XHJcblx0Y29uc3RydWN0b3IoKSB7IH1cclxuXHR0ZXN0TWV0aCgpIHtcclxuXHRcdGNvbnNvbGUubG9nKFwidGVzdG1ldGhvZCBpbiBzYW1wbGUgc2VydmljZVwiKTtcclxuXHR9XHJcbn1cclxuXHJcbkBJbmplY3RhYmxlKClcclxuY2xhc3MgVGVzdFNlcnZpY2Uge1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc2FtcGxlU3J2YzogU2FtcGxlU2VydmljZSkgeyB9XHJcblx0dGVzdE1ldGgoKSB7XHJcblx0XHR0aGlzLnNhbXBsZVNydmMudGVzdE1ldGgoKTtcclxuXHR9XHJcblxyXG5cdGdldFVzZXJzKCkge1xyXG5cdFx0cmV0dXJuIGZldGNoKFwiaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycz9zaW5jZT0xMzVcIik7XHJcblx0fVxyXG59XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwic2FtcGxlLWVsZVwiXHJcbn0pXHJcbmNsYXNzIFNhbXBsZUVsZSB7XHJcblx0dGVzdDogc3RyaW5nO1xyXG5cdG91dENvdW50OiBGdW5jdGlvbjtcclxuXHRwcm9wczogYW55O1xyXG5cdGlucHV0RmllbGQ6IEhUTUxJbnB1dEVsZW1lbnQ7XHJcblxyXG5cdHByaXZhdGUgdGVzdEVsZVJlZjogQ29tcG9uZW50UmVmPFRlc3RFbGU+O1xyXG5cclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHRlc3RTcnZjOiBUZXN0U2VydmljZSwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIpIHtcclxuXHRcdHRoaXMudGVzdCA9IFwic2FtcGxlIDEyM1wiO1xyXG5cdFx0dGhpcy5wcm9wcyA9IHtcclxuXHRcdFx0bmFtZTogdGhpcy50ZXN0XHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0YmVmb3JlTW91bnQoKSB7XHJcblx0XHRjb25zb2xlLmxvZyhcImJlZm9yZSBtb3VudGluZy4uLlwiKTtcclxuXHR9XHJcblxyXG5cdG1vdW50KCkge1xyXG5cdFx0Y29uc29sZS5sb2coXCJjb21wb25lbnQgbG9hZGVkXCIpO1xyXG5cdFx0Y29uc29sZS5sb2codGhpcy5pbnB1dEZpZWxkKTtcclxuXHRcdHRoaXMudGVzdFNydmMudGVzdE1ldGgoKTtcclxuXHRcdHRoaXMudGVzdEVsZVJlZi5zZXRQcm9wcyh7IHRlc3Rwcm9wczogdGhpcy5wcm9wcyB9KTtcclxuXHR9XHJcblxyXG5cdHVubW91bnQoKSB7XHJcblx0XHRjb25zb2xlLmxvZyhcImNvbXBvbmVudCB1bmxvYWRlZFwiKTtcclxuXHR9XHJcblxyXG5cdGVuYWJsZVBlcnNvbnNSb3V0ZSgpIHtcclxuXHRcdHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnQHBsdW1lanMvY29yZScsICdub3cgcGVyc29ucyByb3V0ZSBpcyBhY3RpdmF0ZWQnKTtcclxuXHR9XHJcblxyXG5cdGRpc2FibGVQZXJzb25zUm91dGUoKSB7XHJcblx0XHR3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ0BwbHVtZWpzL2NvcmUnKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZVByb3BzKCkge1xyXG5cdFx0dGhpcy50ZXN0RWxlUmVmLnNldFByb3BzKHsgdGVzdHByb3BzOiB0aGlzLnByb3BzIH0pO1xyXG5cdH1cclxuXHJcblx0Y291bnQodmFsOiBzdHJpbmcpIHtcclxuXHRcdHRoaXMudGVzdCA9IHZhbDtcclxuXHRcdHRoaXMucHJvcHMubmFtZSA9IHZhbDtcclxuXHRcdHRoaXMucmVuZGVyZXIudXBkYXRlKCk7XHJcblx0XHR0aGlzLnRlc3RFbGVSZWYuc2V0UHJvcHMoeyB0ZXN0cHJvcHM6IHRoaXMucHJvcHMgfSk7XHJcblx0fVxyXG5cclxuXHRnZXRSZWYoKSB7XHJcblx0XHRjb25zb2xlLmxvZyh0aGlzLmlucHV0RmllbGQpO1xyXG5cdH1cclxuXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0cmV0dXJuIGh0bWxgXHJcblx0XHRcdDxwPlBlcnNvbnMgcm91dGUgaGFzIDxiPmNhbkFjdGl2YXRlPC9iPiBnYXVyZCB3aGljaCBjaGVjayBmb3IgPGk+cGx1bWVqczwvaT4ga2V5IGluIGxvY2Fsc3RvcmFnZS4gQ2xpY2sgZW5hYmxlIGJ1dHRvbiB0byBuYXZpZ2F0ZSB0byBwZXJzb25zIHJvdXRlLiBDbGljayBkaXNhYmxlIGJ1dHRvbiB0byBkaXNhYmxlIHBlcnNvbnMgcm91dGUuIDwvcD5cclxuXHRcdFx0PGRpdj5cclxuXHRcdFx0XHQ8YnV0dG9uIGNsYXNzPSdidXR0b24gaXMtc21hbGwgaXMtaW5mbycgb25jbGljaz0ke3RoaXMuZW5hYmxlUGVyc29uc1JvdXRlfSB0aXRsZT0nY2xpY2sgcGVyc29ucyBuYXYgdG8gY2hlY2sgcGVyc29ucyByb3V0ZSc+RW5hYmxlIFBlcnNvbnMgcm91dGU8L2J1dHRvbj5cclxuXHRcdFx0XHQ8YnV0dG9uIGNsYXNzPSdidXR0b24gaXMtc21hbGwgaXMtaW5mbycgc3R5bGU9J21hcmdpbi1sZWZ0OiAxMHB4JyBvbmNsaWNrPSR7dGhpcy5kaXNhYmxlUGVyc29uc1JvdXRlfSB0aXRsZT0nY2xpY2sgcGVyc29ucyBuYXYgdG8gY2hlY2sgcGVyc29ucyByb3V0ZSc+RGlzYWJsZSBQZXJzb25zIHJvdXRlPC9idXR0b24+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPSdtdC0yMCc+Y2hlY2sgdHJhbnNsYXRpb246ICR7J3VzZXJuYW1lLmdyZWV0Jy50cmFuc2xhdGUoeyBuYW1lOiAndGVzdCB1c2VyJyB9KX08L2Rpdj5cclxuXHRcdFx0PGlucHV0IHR5cGU9J3RleHQnIHJlZj0keyhub2RlKSA9PiB7IHRoaXMuaW5wdXRGaWVsZCA9IG5vZGUgfX0gLz48YnV0dG9uIGNsYXNzPSdidXR0b24gaXMtc21hbGwgaXMtaW5mbycgb25jbGljaz0keygpID0+IHsgdGhpcy5nZXRSZWYoKSB9fT5jbGljazwvYnV0dG9uPlxyXG5cdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdDxoMT5TYW1wbGUgdHdvIHdheSBkYXRhIGJpbmRpbmc8L2gxPlxyXG5cdFx0XHRcdHRlc3Rpbmcgd2ViIGNvbXBvbmVudDEgJHt0aGlzLnRlc3R9XHJcblx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdDxidXR0b24gb25jbGljaz0keygpID0+IHsgdGhpcy51cGRhdGVQcm9wcygpOyB9fT5jaGFuZ2UgcHJvcHM8L2J1dHRvbj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8dGVzdC1lbGUgcmVmPVwiJHsobm9kZSkgPT4geyB0aGlzLnRlc3RFbGVSZWYgPSBub2RlOyB9fVwiIG9uY291bnQ9XCIkeyhlOiBDdXN0b21FdmVudCkgPT4geyB0aGlzLmNvdW50KGUuZGV0YWlsKTsgfX1cIj5cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdDwvdGVzdC1lbGU+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQke1sxLCAyLCAzXS5tYXAoKGkpID0+IGh0bWxgPGVtdWxhdGVkLXN0eWxlcyBjbGFzcz1cImNvbG9yLSR7aX1cIj48L2VtdWxhdGVkLXN0eWxlcz5gKX1cclxuXHRcdGA7XHJcblx0fVxyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIGh0bWwsIElIb29rcywgUmVuZGVyZXIgfSBmcm9tICdAcGx1bWVqcy9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwidGVzdC1lbGVcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGVzdEVsZSBpbXBsZW1lbnRzIElIb29rcyB7XHJcbiAgICByZWFkb25seSBPYnNlcnZlZFByb3BlcnRpZXMgPSA8Y29uc3Q+Wyd0ZXN0cHJvcHMnXTtcclxuICAgIHRlc3Rwcm9wczogeyBuYW1lOiBzdHJpbmcgfTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcikgeyB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnRlc3Rwcm9wcykge1xyXG4gICAgICAgICAgICByZXR1cm4gaHRtbGBcclxuXHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0dGVzdGluZyB3ZWIgY29tcG9uZW50MiAke3RoaXMudGVzdHByb3BzLm5hbWV9XHJcblx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzPSdidXR0b24gaXMtc21hbGwgaXMtaW5mbycgb25jbGljaz0keyhlOiBhbnkpID0+IHRoaXMuY291bnRzKGUpfT5oaTwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdHZhbHVlPSR7dGhpcy50ZXN0cHJvcHMubmFtZX1cclxuXHRcdFx0XHRcdFx0b25pbnB1dD0keyhlOiBhbnkpID0+IHRoaXMuY2hhbmdlKGUudGFyZ2V0LnZhbHVlKX1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8c2xvdD50ZXN0aW5nIHNsb3RzPC9zbG90PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRgO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBodG1sYGA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvdW50cyhlOiBhbnkpIHtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLmVtaXRFdmVudCgnY291bnQnLCBcInRlc3RpbmcgZnJvbSBjbGlja1wiKVxyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZSh2YWw6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuZW1pdEV2ZW50KCdjb3VudCcsIHZhbCk7XHJcbiAgICB9XHJcblxyXG4gICAgbW91bnQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjb21wb25lbnQgbG9hZGVkXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicHJvcHM6IFwiLCB0aGlzLnRlc3Rwcm9wcyk7XHJcbiAgICB9XHJcblxyXG4gICAgdW5tb3VudCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImNvbXBvbmVudCB1bmxvYWRlZFwiKTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=