import { Component, ComponentRef, html, Injectable, render, Renderer } from '@plumejs/core';
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
  deps: [PersonService, Router, Renderer]
})
export class PersonsList {
  persondetails: any = {};
  users = [];
  personDetailsRef: ComponentRef<PersonDetails>;

  constructor(private personSrvc: PersonService, private router: Router, private renderer: Renderer) {
    console.log('current route ', this.router.getCurrentRoute());
  }

  mount() {
    this.personSrvc.getPersons().then((data) => {
      this.users = data;
      setTimeout(() => {
        this.renderer.update();
      }, 100);
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

  render() {
    return html`
      <h4>Sample service injection with http call and passing data to other component</h4>
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
