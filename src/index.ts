import { Component, html, TranslationService, Router, Route, Ref, useRef } from "plumejs";
import { registerToggleComponent, registerMultiSelectComponent } from 'plumejs-ui';
import locale_en from './i18n/en';
import locale_fr from './i18n/fr';

registerToggleComponent();
registerMultiSelectComponent();

@Component({
	selector: "app-root",
	styleUrl: "styles.scss",
	root: true
})
export class AppComponent {
	constructor(
		private router: Router, 
		private translations: TranslationService,
	) {
		Router.registerRoutes(this.routes);
		translations.setTranslate(locale_en, "en");
		translations.setTranslate(locale_fr, "fr");
		translations.setDefaultLanguage("en");		
	}

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

	render() {
		return html`
		<nav class="navbar navbar-expand-lg navbar-light bg-light">
			<a class="navbar-brand" href="#" onclick=${(e: Event) => { this.navigate(e, '/home') }}>PlumeJS</a>
			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav mr-auto">
					<li class="nav-item active">
						<a
							class="nav-link"
							href="#"
							onclick=${(e: Event) => {
				this.navigate(e, "/home");
			}}
							>Home
						</a>
					</li>
					<li class="nav-item active">
						<a
							class="nav-link"
							href="#"
							onclick=${(e: Event) => {
				this.navigate(e, "/controls");
			}}
							>UI Controls
						</a>
					</li>
					<li class="nav-item active">
						<a
							class="nav-link"
							href="#"
							onclick=${(e: Event) => {
				this.navigate(e, "/persons/123");
			}}
							>Persons</a
						>
					</li>
					<li class="nav-item active">
						<a
							class="nav-link"
							href="#"
							onclick=${(e: Event) => {
				this.navigate(e, "/form");
			}}
							>Sample Form</a
						>
					</li>
					<li class="nav-item dropdown">
						<select
							class="form-control"
							onchange=${(e: any) => {
				this.translations.setDefaultLanguage(e.target.value);
			}}
						>
							<option value="en">EN</option>
							<option value="fr">FR</option>
						</select>
					</li>
				</ul>
			</div>
		</nav>
		<div class="container">	
			<h1 class="title">Hello world</h1>	
			<router-outlet></router-outlet>
		</div>
    `;
	}
}

