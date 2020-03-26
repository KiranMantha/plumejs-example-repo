import { Component, Input, html, Injectable, Router } from "plumejs";

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
	styleUrl: 'persons/persons-list.scss'
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
		<div innerHTML='${ '10300'.translate('fr') }'></div>		
			<div>
				<ul class="list-group">
					${this.data.map(
						(user: any) =>
							html`
								<li class="list-group-item"
									onclick=${() => {
										this.alertName(user);
									}}
								>
									${user.name}
								</li>
							`
					)}
				</ul>
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
				<div>Name: ${this.userDetails.name}</div>
				<div>Company: ${this.userDetails.company.name}</div>
			`;
		} else {
			return html`<div></div>`;
		}
	}
}
