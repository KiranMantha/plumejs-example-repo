(self.webpackChunkunit_testing_plumejs=self.webpackChunkunit_testing_plumejs||[]).push([[887],{501:(e,t,s)=>{"use strict";s.d(t,{Z:()=>n});var r=s(645),i=s.n(r)()((function(e){return e[1]}));i.push([e.id,".test{list-style:none;margin:0;padding:0}.test li{color:#000}",""]);const n=i},887:(e,t,s)=>{"use strict";s.r(t);var r=s(74),i=(s(447),s(501));(0,r.GS)("PersonService")([class{getPersons(){return fetch("https://jsonplaceholder.typicode.com/users").then((e=>e.json()))}}]);(0,r.wA)({selector:"persons-list",styles:i.Z,useShadow:!1})(["PersonService","Router",class{constructor(e,t){this.personSrvc=e,this.router=t,this.data=[],this.persondetails={},console.log("current route ",this.router.getCurrentRoute())}mount(){this.personSrvc.getPersons().then((e=>{this.data=e,this.update()}))}alertName(e){this.persondetails=e,this.update()}render(){return r.dy`
			<h4>Sample service injection with http call and passing data to other component</h4>
			Current route data: <code>${JSON.stringify(this.router.getCurrentRoute(),null,2)}</code>
			<div class='mt-20 mb-20 content'>
				<ul class="block-list is-small">
					${this.data.map((e=>r.dy`
								<li class='pointer'
									onclick=${t=>{t.preventDefault(),this.alertName(e)}}
								>
									${e.name}
								</li>
							`))}
				</ul>
				<person-details
					id="person-details"
					userDetails=${this.persondetails}
				></person-details>
			</div>
		`}}]);(0,r.wA)({selector:"person-details"})([class{constructor(){this.userDetails={}}static get inputProp(){return"userDetails"}render(){return console.log("selected: user",this.userDetails),this.userDetails.name?r.dy`
				<strong>Person Details</strong>
				<div>Name: ${this.userDetails.name}</div>
				<div>Company: ${this.userDetails.company.name}</div>
			`:r.dy`<div></div>`}}])}}]);