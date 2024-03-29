import { __decorate } from "tslib";
import { Component, html, Renderer, Subscriptions } from '@plumejs/core';
import { matchPath, Router } from '@plumejs/router';
import locale_en from './i18n/en';
import locale_fr from './i18n/fr';
import globalstyles from './styles.scss';
import { TranslationService } from './translationService';
let AppComponent = class AppComponent {
    router;
    renderer;
    translations;
    routePath = '';
    subscriptions = new Subscriptions();
    constructor(router, renderer, translations) {
        this.router = router;
        this.renderer = renderer;
        this.translations = translations;
        Router.registerRoutes({ routes: this.routes, preloadAllRoutes: true });
        translations.setTranslate(locale_en, 'en');
        translations.setTranslate(locale_fr, 'fr');
        translations.setDefaultLanguage('en');
    }
    translation = 'en';
    showNav = false;
    routes = [
        {
            path: '/',
            redirectTo: '/home'
        },
        {
            path: '/home',
            template: `<sample-ele></sample-ele>`,
            templatePath: () => import('./home')
        },
        {
            path: '/controls',
            template: `<plume-comp></plume-comp>`,
            templatePath: () => import('./ui-controls')
        },
        {
            path: '/persons/:id/:name',
            template: `<persons-list></persons-list>`,
            templatePath: () => import('./persons'),
            canActivate: () => {
                const key = localStorage.getItem('@plumejs/core');
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
            templatePath: () => import('./form')
        },
        {
            path: '/nested-table',
            template: `<app-nested-table></app-nested-table>`,
            templatePath: () => import('./nested-table')
        },
        {
            path: '/experiments',
            template: `<app-experiments></app-experiments>`,
            templatePath: () => import('./experiments')
        }
    ];
    beforeMount() {
        this.subscriptions.add(this.router.onNavigationEnd().subscribe(() => {
            this.router.getCurrentRoute().subscribe((routeInfo) => {
                this.routePath = routeInfo.path;
                console.log('routePath', this.routePath);
            });
        }));
    }
    setNavActive(path) {
        return matchPath(path, this.routePath) ? 'active' : '';
    }
    navigate = (e, path, state) => {
        e.preventDefault();
        this.router.navigateTo(path, state);
    };
    render() {
        return html `
      <div class="layout">
        <header class="layout">
          <nav role="navigation" aria-label="main navigation">
            <ul>
              <li>
                <a
                  href="#"
                  onclick=${(e) => {
            this.navigate(e, '/home');
        }}
                >
                  <img src="./images/plume-logo.jpg" />
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a
                  href="#"
                  class="navlink ${this.setNavActive('/home')}"
                  onclick=${(e) => {
            this.navigate(e, '/home');
        }}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="navlink ${this.setNavActive('/controls')}"
                  onclick=${(e) => {
            this.navigate(e, '/controls');
        }}
                >
                  UI Controls
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="navlink ${this.setNavActive('/persons/:id/:name')}"
                  onclick=${(e) => {
            this.navigate(e, '/persons/123/testuser?a=123', { date: new Date() });
        }}
                >
                  Persons
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="navlink ${this.setNavActive('/form')}"
                  onclick=${(e) => {
            this.navigate(e, '/form');
        }}
                >
                  Sample Form
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="navlink ${this.setNavActive('/nested-table')}"
                  onclick=${(e) => {
            this.navigate(e, '/nested-table');
        }}
                >
                  Nested Table
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="navlink ${this.setNavActive('/experiments')}"
                  onclick=${(e) => {
            this.navigate(e, '/experiments');
        }}
                >
                  Experiments
                </a>
              </li>
              <li>
                <a href="https://github.com/KiranMantha/plumejs-example-repo/">
                  Source code
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 496 512"
                    height="20px"
                    style="margin-left: 10px;"
                  >
                    <path
                      fill="currentColor"
                      d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                    ></path>
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <main class="container">
          <h1>Hello world</h1>
          <h2>This demo is based on minimal css</h2>
          <router-outlet></router-outlet>
        </main>
      </div>
    `;
    }
};
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        styles: globalstyles,
        root: true,
        deps: [Router, Renderer, TranslationService]
    })
], AppComponent);
export { AppComponent };
