(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{49:function(e,t,s){(t=s(11)(!1)).push([e.i,".test{list-style:none;margin:0;padding:0}.test li{color:#000}\n",""]),e.exports=t},51:function(e,t,s){"use strict";s.r(t);var r=s(0),o=s(1),a=s(49),i=s.n(a);let n=class PersonService{getPersons(){return fetch("https://jsonplaceholder.typicode.com/users").then(e=>e.json())}};n=Object(r.__decorate)([Object(o.Injectable)()],n);let l=class PersonsList{constructor(e,t){this.personSrvc=e,this.router=t,this.data=[],this.persondetails={},console.log("current route ",this.router.getCurrentRoute())}mount(){this.personSrvc.getPersons().then(e=>{this.data=e,this.update()})}alertName(e){this.persondetails=e,this.update()}render(){return o.html`
			<h4>Sample service injection with http call and passing data to other component</h4>
			Current route data: <code>${JSON.stringify(this.router.getCurrentRoute(),null,2)}</code>
			<div class='mt-20 mb-20'>
				<div class="list is-hoverable">
					${this.data.map(e=>o.html`
								<a href='#' class="list-item"
									onclick=${t=>{t.preventDefault(),this.alertName(e)}}
								>
									${e.name}
								</a>
							`)}
				</div>
				<person-details
					id="person-details"
					userDetails=${this.persondetails}
				></person-details>
			</div>
		`}};l=Object(r.__decorate)([Object(o.Component)({selector:"persons-list",styles:i.a,useShadow:!1}),Object(r.__metadata)("design:paramtypes",[n,o.Router])],l);let c=class PersonDetails{constructor(){this.userDetails={}}render(){return console.log("selected: user",this.userDetails),this.userDetails.name?o.html`
				<strong>Person Details</strong>
				<div>Name: ${this.userDetails.name}</div>
				<div>Company: ${this.userDetails.company.name}</div>
			`:o.html`<div></div>`}};Object(r.__decorate)([Object(o.Input)(),Object(r.__metadata)("design:type",Object)],c.prototype,"userDetails",void 0),c=Object(r.__decorate)([Object(o.Component)({selector:"person-details"})],c)}}]);