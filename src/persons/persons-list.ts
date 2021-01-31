import { Component, Input, html, Injectable } from "@plumejs/core";
import { Router } from '@plumejs/router';
import personListStyles from './persons-list.scss';

@Injectable()
class PersonService {
	getPersons() {
		return fetch("https://jsonplaceholder.typicode.com/users").then(res =>
			res.json()
		);
	}
}

@Component({
	selector: "persons-list",
	styles: personListStyles,
	useShadow: false
})
class PersonsList {
	data: Array<string> = [];
	persondetails: any = {};
	update: any;
	element: any;
	constructor(private personSrvc: PersonService, private router:Router) {
		console.log('current route ', this.router.getCurrentRoute());
	}
	mount() {
		this.personSrvc.getPersons().then(data => {
			this.data = data;
			this.update(); // triggers change detection and update view
		});
	}

	alertName(user: any) {
		this.persondetails = user;
		this.update();
	}

	render() {
		return html`
			<h4>Sample service injection with http call and passing data to other component</h4>
			Current route data: <code>${ JSON.stringify(this.router.getCurrentRoute(), null, 2) }</code>
			<div class='mt-20 mb-20'>
				<div class="list is-hoverable">
					${this.data.map(
						(user: any) =>
							html`
								<a href='#' class="list-item"
									onclick=${(e:Event) => {
										e.preventDefault();
										this.alertName(user);
									}}
								>
									${user.name}
								</a>
							`
					)}
				</div>
				<person-details
					id="person-details"
					userDetails=${this.persondetails}
				></person-details>
			</div>
		`;
	}
}

@Component({
	selector: "person-details"
})
class PersonDetails {
	@Input()
	userDetails: any = {};

	render() {
		console.log("selected: user", this.userDetails);
		if (this.userDetails.name) {
			return html`
				<strong>Person Details</strong>
				<div>Name: ${this.userDetails.name}</div>
				<div>Company: ${this.userDetails.company.name}</div>
			`;
		} else {
			return html`<div></div>`;
		}
	}
}
