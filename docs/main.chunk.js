(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{10:function(e,a,t){var n=t(11),s=t(45);(a=n(!1)).i(s),a.push([e.i,".container{padding:0 0.5rem}.mt-20{margin-top:20px}.mb-20{margin-bottom:20px}.mr-10{margin-right:10px}\n",""]),e.exports=a},19:function(e,a,t){t(47),e.exports=t(46)},46:function(e,a,t){t.e(0).then(t.t.bind(null,48,7))},47:function(e,a,t){"use strict";t.r(a),t.d(a,"AppComponent",(function(){return m}));var n=t(0),s=t(1),i=t(7);var r={username:{greet:"my name is {name}"}};var o={username:{greet:"je m`appelle {name}"}},l=t(10),p=t.n(l);console.log("styles.scss result using import",p.a),Object(i.registerToggleComponent)(),Object(i.registerMultiSelectComponent)();let m=class AppComponent{constructor(e,a){this.router=e,this.translations=a,this.showNav=!1,this.routes=[{path:"",redirectTo:"/home"},{path:"/home",template:"<sample-ele></sample-ele>",templatePath:()=>t.e(6).then(t.bind(null,50))},{path:"/controls",template:"<plume-comp></plume-comp>",templatePath:()=>t.e(5).then(t.bind(null,53))},{path:"/persons/:id",template:"<persons-list></persons-list>",templatePath:()=>t.e(4).then(t.bind(null,51)),canActivate:()=>!!localStorage.getItem("plumejs")||(this.router.navigateTo("/home"),!1)},{path:"/form",template:"<sample-form></sample-form>",templatePath:()=>t.e(7).then(t.bind(null,52))}],this.navigate=(e,a)=>{e.preventDefault(),this.router.navigateTo(a)},s.Router.registerRoutes(this.routes),a.setTranslate(r,"en"),a.setTranslate(o,"fr"),a.setDefaultLanguage("en")}_displayNav(){this.showNav=!this.showNav,this.update()}render(){return s.html`
			<nav class="navbar is-light" role="navigation" aria-label="main navigation">
				<div class="navbar-brand">
					<a class="navbar-item" href="#" onclick=${e=>{this.navigate(e,"/home")}}>
						<img src='./images/plume-logo.jpg'/>
					</a>
			
					<a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" onclick=${e=>{e.preventDefault(),this._displayNav()}}>
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
					</a>
				</div>
			
				<div id="navbarBasicExample" class="navbar-menu ${this.showNav?"is-active":""}">
					<div class="navbar-start">
						<a class="navbar-item"
							href="#"
							onclick=${e=>{this.navigate(e,"/home")}}>
							Home
						</a>
			
						<a class="navbar-item"
							href="#"
							onclick=${e=>{this.navigate(e,"/controls")}}>
							UI Controls
						</a>
					
						<a class="navbar-item"
							href="#"
							onclick=${e=>{this.navigate(e,"/persons/123")}}>
							Persons
						</a>
					
						<a class="navbar-item"
							href="#"
							onclick=${e=>{this.navigate(e,"/form")}}>
							Sample Form
						</a>
			
						<div class="navbar-item">
							<div class="select">
								<select
									class="form-control"
									onchange=${e=>{this.translations.setDefaultLanguage(e.target.value)}}
									>
									<option value="en">EN</option>
									<option value="fr">FR</option>
								</select>
							</div>
						</div>
					</div>
				</div>
			</nav>	
			<slot></slot>
    `}};m=Object(n.__decorate)([Object(s.Component)({selector:"app-root",styles:p.a,useShadow:!1,root:!0}),Object(n.__metadata)("design:paramtypes",[s.Router,s.TranslationService])],m)}},[[19,2,3]],[0]]);