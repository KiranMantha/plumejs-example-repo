import { Component, html, Injectable } from '@plumejs/core';
import { Router } from '@plumejs/router';
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
  users = [];
  selectedPerson;
  routeData;

  constructor(private personSrvc: PersonService, private router: Router) {}

  mount() {
    this.personSrvc.getPersons().then((users) => {
      this.users = users;
    });
    this.loadRouteData();
  }

  loadRouteData() {
    this.router.getCurrentRoute().subscribe((route) => {
      this.routeData = {
        path: route.path,
        routeParams: Object.fromEntries(route.routeParams),
        queryParams: Object.fromEntries(route.queryParams),
        state: route.state
      };
    });
  }

  onUserClick(person) {
    console.log('data from app-person-details comp: ', person);
  }

  updateUrl() {
    this.router.navigateTo(`/persons/${Math.random()}/testuser?a=${Math.random()}`);
  }

  render() {
    return html`
      <h3>Persons route</h3>
      <span role="tag">sample tag</span><button onclick=${() => {
        this.updateUrl();
      }}>Update url</button>
      <p>
        Current route data: <pre><code>${JSON.stringify(this.routeData, null, 4)}</code></pre>
      </p>
      <ul>
        ${
          this.users.length
            ? this.users.map((user) => {
                return html`
                  <li
                    class="is-clickable"
                    onclick="${() => {
                      this.selectedPerson = user;
                    }}"
                  >
                    ${user.name}
                  </li>
                `;
              })
            : 'loading'
        }
      </ul>
      <person-details
        data-input=${{ personDetails: this.selectedPerson }}
        onuserclick="${(e) => {
          this.onUserClick(e.detail);
        }}"
      ></person-details>
    `;
  }
}
