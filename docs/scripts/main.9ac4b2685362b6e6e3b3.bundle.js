"use strict";(self.webpackChunkplumejs_example_repo=self.webpackChunkplumejs_example_repo||[]).push([[179],{401:function(e,n,t){var i=t(537),o=t.n(i),l=t(645),s=t.n(l),r=t(812),a=s()(o());a.i(r.Z),a.push([e.id,'.container{padding:0 .5rem}.mt-20{margin-top:20px}.mb-20{margin-bottom:20px}.mr-10{margin-right:10px}.d-inline-block{display:inline-block}.d-flex{display:flex}.pointer{cursor:pointer}details[role=menu]{border:none;margin:0;padding:0;position:relative}details[role=menu][open] summary{margin:0}details[role=menu][open] summary::before{position:fixed;top:0;right:0;bottom:0;left:0;z-index:80;display:block;cursor:default;content:" ";background:transparent}details[role=menu] summary{list-style:none}details[role=menu] summary::after{display:none}details[role=menu] summary+ul{list-style:none;position:absolute;top:100%;border:1px solid #ccc;border-radius:4px;background:#fff;box-shadow:rgba(140,149,159,.2) 0px 8px 24px 0px;margin:5px auto;padding:0;display:flex;flex-direction:column;align-items:stretch;min-width:300px;z-index:100}',"",{version:3,sources:["webpack://./src/styles/_external.scss","webpack://./src/styles.scss"],names:[],mappings:"AAEQ,WCCN,eAAA,CAGF,OACE,eAAA,CAGF,OACE,kBAAA,CAGF,OACE,iBAAA,CAGF,gBACE,oBAAA,CAGF,QACE,YAAA,CAGF,SACE,cAAA,CAGF,mBACE,WAAA,CACA,QAAA,CACA,SAAA,CACA,iBAAA,CAEA,iCACE,QAAA,CAEA,yCACE,cAAA,CACA,KAAA,CACA,OAAA,CACA,QAAA,CACA,MAAA,CACA,UAAA,CACA,aAAA,CACA,cAAA,CACA,WAAA,CACA,sBAAA,CAIJ,2BACE,eAAA,CAEA,kCACE,YAAA,CAIJ,8BACE,eAAA,CACA,iBAAA,CACA,QAAA,CACA,qBAAA,CACA,iBAAA,CACA,eAAA,CACA,gDAAA,CACA,eAAA,CACA,SAAA,CACA,YAAA,CACA,qBAAA,CACA,mBAAA,CACA,eAAA,CACA,WAAA",sourcesContent:["// @import \"bulma/bulma.sass\";\n// @import \"bulma-block-list/src/block-list.scss\";\n@import '@picocss/pico/css/pico.min.css';\n//@import './_pico';\n//@import './_simplecss';","@import './styles/external';\n\n.container {\n  padding: 0 0.5rem;\n}\n\n.mt-20 {\n  margin-top: 20px;\n}\n\n.mb-20 {\n  margin-bottom: 20px;\n}\n\n.mr-10 {\n  margin-right: 10px;\n}\n\n.d-inline-block {\n  display: inline-block;\n}\n\n.d-flex {\n  display: flex;\n}\n\n.pointer {\n  cursor: pointer;\n}\n\ndetails[role='menu'] {\n  border: none;\n  margin: 0;\n  padding: 0;\n  position: relative;\n\n  &[open] summary {\n    margin: 0;\n\n    &::before {\n      position: fixed;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      z-index: 80;\n      display: block;\n      cursor: default;\n      content: ' ';\n      background: transparent;\n    }\n  }\n\n  summary {\n    list-style: none;\n\n    &::after {\n      display: none;\n    }\n  }\n\n  summary + ul {\n    list-style: none;\n    position: absolute;\n    top: 100%;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    background: #fff;\n    box-shadow: rgba(140, 149, 159, 0.2) 0px 8px 24px 0px;\n    margin: 5px auto;\n    padding: 0;\n    display: flex;\n    flex-direction: column;\n    align-items: stretch;\n    min-width: 300px;\n    z-index: 100;\n  }\n}\n"],sourceRoot:""}]),n.Z=a},801:function(e,n,t){var i=t(655),o=t(376),l=t(719),s={username:{greet:"my name is {name}"}},r={username:{greet:"je m`appelle {name}"}},a=t(401),g=t(949);let p=class{_defaultLanguage="";setTranslate(e,n){(0,g.setTranslate)(e,n)}setDefaultLanguage(e){this._defaultLanguage=e,(0,g.setDefaultLanguage)(e);const n=new CustomEvent("onLanguageChange");window.dispatchEvent(n)}getCurrentLanguage(){return this._defaultLanguage}};p=(0,i.gn)([(0,o.GS)()],p);let A=class{router;renderer;translations;constructor(e,n,t){this.router=e,this.renderer=n,this.translations=t,l.F.registerRoutes(this.routes,!0),t.setTranslate(s,"en"),t.setTranslate(r,"fr"),t.setDefaultLanguage("en")}translation="en";showNav=!1;routes=[{path:"",redirectTo:"/home"},{path:"/home",template:"<sample-ele></sample-ele>",templatePath:()=>t.e(167).then(t.bind(t,167))},{path:"/controls",template:"<plume-comp></plume-comp>",templatePath:()=>Promise.all([t.e(558),t.e(218)]).then(t.bind(t,218))},{path:"/persons/:id",template:"<persons-list></persons-list>",templatePath:()=>t.e(951).then(t.bind(t,951)),canActivate:()=>!!localStorage.getItem("@plumejs/core")||(this.router.navigateTo("/home"),!1)},{path:"/form",template:"<sample-form></sample-form>",templatePath:()=>Promise.all([t.e(558),t.e(629)]).then(t.bind(t,629))},{path:"/nested-table",template:"<app-nested-table></app-nested-table>",templatePath:()=>t.e(728).then(t.bind(t,728))}];navigate=(e,n,t)=>{e.preventDefault(),this.router.navigateTo(n,t)};render(){return o.dy`
      <nav class="container-fluid" role="navigation" aria-label="main navigation">
        <ul>
          <li>
            <details role="menu">
              <summary>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 30 30"
                  height="25px"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <line x1="3" y1="5" x2="21" y2="5"></line>
                  <line x1="3" y1="15" x2="21" y2="15"></line>
                  <line x1="3" y1="25" x2="21" y2="25"></line>
                </svg>
              </summary>
              <ul role="menubar">
                <li>
                  <a
                    href="#"
                    onclick=${e=>{this.navigate(e,"/home")}}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onclick=${e=>{this.navigate(e,"/controls",{name:"hello world"})}}
                  >
                    UI Controls
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onclick=${e=>{this.navigate(e,"/persons/123")}}
                  >
                    Persons
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onclick=${e=>{this.navigate(e,"/form")}}
                  >
                    Sample Form
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onclick=${e=>{this.navigate(e,"/nested-table")}}
                  >
                    Nested Table
                  </a>
                </li>
              </ul>
            </details>
          </li>
        </ul>

        <ul>
          <li>
            <a
              href="#"
              onclick=${e=>{this.navigate(e,"/home")}}
            >
              <img src="./images/plume-logo.jpg" />
            </a>
          </li>
        </ul>

        <ul>
          <li>
            <a href="https://github.com/KiranMantha/plumejs-example-repo/">
              <svg
                aria-hidden="true"
                focusable="false"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 496 512"
                height="25px"
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
      <main class="container">
        <h1>Hello world</h1>
        <h2>This demo is based on picocss</h2>
        <router-outlet></router-outlet>
      </main>
    `}};A=(0,i.gn)([(0,o.wA)({selector:"app-root",styles:a.Z,root:!0,deps:[l.F,o.Th,p]})],A)},138:function(e){e.exports="data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27%23FFF%27 stroke-width=%274%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Cline x1=%275%27 y1=%2712%27 x2=%2719%27 y2=%2712%27%3E%3C/line%3E%3C/svg%3E"},35:function(e){e.exports="data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27%23FFF%27 stroke-width=%274%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Cpolyline points=%2720 6 9 17 4 12%27%3E%3C/polyline%3E%3C/svg%3E"},251:function(e){e.exports="data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27rgba%28115, 130, 140, 0.999%29%27 stroke-width=%274%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Cline x1=%2718%27 y1=%276%27 x2=%276%27 y2=%2718%27%3E%3C/line%3E%3Cline x1=%276%27 y1=%276%27 x2=%2718%27 y2=%2718%27%3E%3C/line%3E%3C/svg%3E"},400:function(e){e.exports="data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27rgba%28162, 175, 185, 0.999%29%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Ccircle cx=%2711%27 cy=%2711%27 r=%278%27%3E%3C/circle%3E%3Cline x1=%2721%27 y1=%2721%27 x2=%2716.65%27 y2=%2716.65%27%3E%3C/line%3E%3C/svg%3E"},487:function(e){e.exports="data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27rgba%28162, 175, 185, 0.999%29%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Ccircle cx=%2712%27 cy=%2712%27 r=%2710%27%3E%3C/circle%3E%3Cpolyline points=%2712 6 12 12 16 14%27%3E%3C/polyline%3E%3C/svg%3E"},990:function(e){e.exports="data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27rgba%28162, 175, 185, 0.999%29%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Cpolyline points=%276 9 12 15 18 9%27%3E%3C/polyline%3E%3C/svg%3E"},615:function(e){e.exports="data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27rgba%28162, 175, 185, 0.999%29%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Crect x=%273%27 y=%274%27 width=%2718%27 height=%2718%27 rx=%272%27 ry=%272%27%3E%3C/rect%3E%3Cline x1=%2716%27 y1=%272%27 x2=%2716%27 y2=%276%27%3E%3C/line%3E%3Cline x1=%278%27 y1=%272%27 x2=%278%27 y2=%276%27%3E%3C/line%3E%3Cline x1=%273%27 y1=%2710%27 x2=%2721%27 y2=%2710%27%3E%3C/line%3E%3C/svg%3E"},758:function(e){e.exports="data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27rgba%28183, 28, 28, 0.999%29%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Ccircle cx=%2712%27 cy=%2712%27 r=%2710%27%3E%3C/circle%3E%3Cline x1=%2712%27 y1=%278%27 x2=%2712%27 y2=%2712%27%3E%3C/line%3E%3Cline x1=%2712%27 y1=%2716%27 x2=%2712.01%27 y2=%2716%27%3E%3C/line%3E%3C/svg%3E"},92:function(e){e.exports="data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27rgba%28198, 40, 40, 0.999%29%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Ccircle cx=%2712%27 cy=%2712%27 r=%2710%27%3E%3C/circle%3E%3Cline x1=%2712%27 y1=%278%27 x2=%2712%27 y2=%2712%27%3E%3C/line%3E%3Cline x1=%2712%27 y1=%2716%27 x2=%2712.01%27 y2=%2716%27%3E%3C/line%3E%3C/svg%3E"},349:function(e){e.exports="data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27rgba%2846, 125, 50, 0.999%29%27 stroke-width=%273%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Cpolyline points=%2720 6 9 17 4 12%27%3E%3C/polyline%3E%3C/svg%3E"},124:function(e){e.exports="data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27rgba%2856, 142, 60, 0.999%29%27 stroke-width=%273%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Cpolyline points=%2720 6 9 17 4 12%27%3E%3C/polyline%3E%3C/svg%3E"},4:function(e){e.exports="data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27rgba%2865, 84, 98, 0.999%29%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Ccircle cx=%2711%27 cy=%2711%27 r=%278%27%3E%3C/circle%3E%3Cline x1=%2721%27 y1=%2721%27 x2=%2716.65%27 y2=%2716.65%27%3E%3C/line%3E%3C/svg%3E"},11:function(e){e.exports="data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27rgba%2865, 84, 98, 0.999%29%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Ccircle cx=%2712%27 cy=%2712%27 r=%2710%27%3E%3C/circle%3E%3Cpolyline points=%2712 6 12 12 16 14%27%3E%3C/polyline%3E%3C/svg%3E"},240:function(e){e.exports="data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27rgba%2865, 84, 98, 0.999%29%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Cpolyline points=%276 9 12 15 18 9%27%3E%3C/polyline%3E%3C/svg%3E"},851:function(e){e.exports="data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27rgba%2865, 84, 98, 0.999%29%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Crect x=%273%27 y=%274%27 width=%2718%27 height=%2718%27 rx=%272%27 ry=%272%27%3E%3C/rect%3E%3Cline x1=%2716%27 y1=%272%27 x2=%2716%27 y2=%276%27%3E%3C/line%3E%3Cline x1=%278%27 y1=%272%27 x2=%278%27 y2=%276%27%3E%3C/line%3E%3Cline x1=%273%27 y1=%2710%27 x2=%2721%27 y2=%2710%27%3E%3C/line%3E%3C/svg%3E"}},function(e){e.O(0,[376,719,39],(function(){return 801,e(e.s=801)})),e.O()}]);
//# sourceMappingURL=../sourcemaps/main.js.map