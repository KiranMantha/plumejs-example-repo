import { Component, ComponentRef, html, Injectable, Renderer, useSearchParams } from '@plumejs/core';
import { Router } from '@plumejs/router';
import { PersonDetails } from './person-details.component';
import personListStyles from './persons-list.scss';

@Injectable()
class PersonService {
  getPersons() {
    return fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json());
  }
}

@Component({
  selector: 'persons-list',
  styles: personListStyles,
  deps: [PersonService, Router]
})
export class PersonsList {
  persondetails: any = {};
  users = [];
  personDetailsRef: ComponentRef<PersonDetails>;
  seachParams = {};
  updateSearchParams;

  constructor(private personSrvc: PersonService, private router: Router) {
    console.log('current route ', this.router.getCurrentRoute());
    [this.seachParams, this.updateSearchParams] = useSearchParams();
  }

  mount() {
    this.personSrvc.getPersons().then((data) => {
      this.users = data;
    });
  }

  loadPersonDetails(user: any) {
    this.persondetails = user;
    this.personDetailsRef.setProps({ userDetails: user });
  }

  loadRouteData() {
    const route = this.router.getCurrentRoute();
    return {
      path: route.path,
      routeParams: Object.fromEntries(route.routeParams),
      queryParams: Object.fromEntries(route.queryParams),
      state: route.state
    };
  }

  onUserClick(person) {
    console.log('data from app-person-details comp: ', person);
  }

  updateUrl() {
    // const updatedSearchParams = new URLSearchParams(this.seachParams.toString());
    // updatedSearchParams.set('a', Math.random().toString());
    // this.updateSearchParams(updatedSearchParams);
    this.router.navigateTo(`/persons/${Math.random()}/testuser?a=${Math.random()}`);
  }

  render() {
    return html`
      <h4>Sample service injection with http call and passing data to other component</h4>
      <button
        onclick=${() => {
          this.updateUrl();
        }}
      >
        Update url
      </button>
      Current route data:
      <pre><code>${JSON.stringify(this.loadRouteData(), null, 4)}</code></pre>
      <div class="mt-20 mb-20 content">
        <ul>
          ${this.users.length
            ? this.users.map((user) => {
                return html`
                  <li
                    class="is-clickable"
                    onclick="${() => {
                      this.loadPersonDetails(user);
                    }}"
                  >
                    ${user.name}
                  </li>
                `;
              })
            : 'loading'}
        </ul>
        <person-details
          id="person-details"
          ref="${(node) => {
            this.personDetailsRef = node;
          }}"
          onuserclick="${(e) => {
            this.onUserClick(e.detail);
          }}"
        ></person-details>
      </div>
    `;
  }
}
