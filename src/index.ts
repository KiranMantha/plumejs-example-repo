import { Component, html, TranslationService, Router, Route, Ref, useRef, IHooks } from "plumejs";
import { registerToggleComponent, registerMultiSelectComponent } from 'plumejs-ui';
import locale_en from './i18n/en';
import locale_fr from './i18n/fr';

registerToggleComponent();
registerMultiSelectComponent();

@Component({
	selector: "app-root",
	styleUrl: "styles.scss",
	useShadow: false,
	root: true
})
export class AppComponent implements IHooks {
	constructor(
		private router: Router, 
		private translations: TranslationService,
	) {
		Router.registerRoutes(this.routes);
		translations.setTranslate(locale_en, "en");
		translations.setTranslate(locale_fr, "fr");
		translations.setDefaultLanguage("en");		
	}

	update: () => void;

	showNav = false;

	routes: Array<Route> = [
		{
			path: '',
			redirectTo: '/home'
		},
		{
			path: '/home',
			template: `<sample-ele></sample-ele>`,
			templatePath: () => import('./sample-ele')
		},
		{
			path: '/controls',
			template: `<plume-comp></plume-comp>`,
			templatePath: () => import('./plume-components')
		},
		{
			path: '/persons/:id',
			template: `<persons-list></persons-list>`,
			templatePath: () => import('./persons/persons-list'),
			canActivate: () => {
				let key = localStorage.getItem('plumejs');
				if (!key) {
					this.router.navigateTo('/home');
					return false;
				}
				return true;
			}
		},
		{
			path: '/form',
			template: `<sample-form></sample-form>`,
			templatePath: () => import('./sample-form')
		}
	]

	navigate = (e: Event, path: string) => {
		e.preventDefault();
		this.router.navigateTo(path);
	}

	private _displayNav() {
		this.showNav = !this.showNav;
		this.update();
	}

	render() {
		return html`
			<nav class="navbar is-light" role="navigation" aria-label="main navigation">
				<div class="navbar-brand">
					<a class="navbar-item" href="#" onclick=${(e: Event) => {
							this.navigate(e, "/home");
						}}>
						<img src='./images/plume-logo.jpg'/>
					</a>
			
					<a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" onclick=${(e:Event) => {
						e.preventDefault();
						this._displayNav();
					}}>
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
					</a>
				</div>
			
				<div id="navbarBasicExample" class="navbar-menu ${ this.showNav ? 'is-active' : '' }">
					<div class="navbar-start">
						<a class="navbar-item"
							href="#"
							onclick=${(e: Event) => {
								this.navigate(e, "/home");
							}}>
							Home
						</a>
			
						<a class="navbar-item"
							href="#"
							onclick=${(e: Event) => {
								this.navigate(e, "/controls");
							}}>
							UI Controls
						</a>
					
						<a class="navbar-item"
							href="#"
							onclick=${(e: Event) => {
								this.navigate(e, "/persons/123");
							}}>
							Persons
						</a>
					
						<a class="navbar-item"
							href="#"
							onclick=${(e: Event) => {
							this.navigate(e, "/form");
						}}>
							Sample Form
						</a>
			
						<div class="navbar-item">
							<div class="select">
								<select
									class="form-control"
									onchange=${(e: any) => {
									this.translations.setDefaultLanguage(e.target.value);
									}}
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
    `;
	}
}

