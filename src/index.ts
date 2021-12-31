import { Component, html, Renderer, TranslationService } from '@plumejs/core';
import { Route, Router } from '@plumejs/router';
import locale_en from './i18n/en';
import locale_fr from './i18n/fr';
import globalstyles from './styles.scss';

@Component({
  selector: 'app-root',
  styles: globalstyles,
  root: true,
})
export class AppComponent {
  constructor(
    private router: Router,
    private renderer: Renderer,
    private translations: TranslationService
  ) {
    Router.registerRoutes(this.routes, true);
    translations.setTranslate(locale_en, 'en');
    translations.setTranslate(locale_fr, 'fr');
    translations.setDefaultLanguage('en');
  }

  translation = 'en';

  showNav = false;

  routes: Array<Route> = [
    {
      path: '',
      redirectTo: '/home',
    },
    {
      path: '/home',
      template: `<sample-ele></sample-ele>`,
      templatePath: () => import('./home'),
    },
    {
      path: '/controls',
      template: `<plume-comp></plume-comp>`,
      templatePath: () => import('./ui-controls'),
    },
    {
      path: '/persons/:id',
      template: `<persons-list></persons-list>`,
      templatePath: () => import('./persons'),
      canActivate: () => {
        let key = localStorage.getItem('@plumejs/core');
        if (!key) {
          this.router.navigateTo('/home');
          return false;
        }
        return true;
      },
    },
    {
      path: '/form',
      template: `<sample-form></sample-form>`,
      templatePath: () => import('./form'),
    },
  ];

  navigate = (e: Event, path: string, state?: Record<string, any>) => {
    e.preventDefault();
    this.router.navigateTo(path, state);
  };

  private _displayNav() {
    this.showNav = !this.showNav;
    this.renderer.update();
  }

  render() {
    return html`
      <nav
        class="container-fluid"
        role="navigation"
        aria-label="main navigation"
      >
        <ul>
          <li>
            <a
              href="#"
              onclick=${(e: Event) => {
                this.navigate(e, '/home');
              }}
            >
              <img src="./images/plume-logo.jpg" />
            </a>
          </li>
        </ul>

        <ul class="">
          <li>
            <a
              href="#"
              onclick=${(e: Event) => {
                this.navigate(e, '/home');
              }}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              onclick=${(e: Event) => {
                this.navigate(e, '/controls', { name: 'hello world' });
              }}
            >
              UI Controls
            </a>
          </li>
          <li>
            <a
              href="#"
              onclick=${(e: Event) => {
                this.navigate(e, '/persons/123');
              }}
            >
              Persons
            </a>
          </li>
          <li>
            <a
              href="#"
              onclick=${(e: Event) => {
                this.navigate(e, '/form');
              }}
            >
              Sample Form
            </a>
          </li>
        </ul>
      </nav>
      <main class="container">
        <h1>Hello world</h1>
        <h2>This demo is based on picocss</h2>
        <router-outlet></router-outlet>
      </main>
    `;
  }
}
