import { Component, html, IHooks, Renderer } from '@plumejs/core';

@Component({
  selector: 'person-details',
  deps: [Renderer]
})
export class PersonDetails implements IHooks {
  static readonly observedProperties = <const>['personDetails'];
  constructor(private renderer: Renderer) {}

  personDetails: { name: string; company: { name: string } };

  sendDataToParent() {
    this.renderer.emitEvent('userclick', this.personDetails);
  }

  render() {
    if (this.personDetails?.name) {
      return html`
        <strong>Person Details</strong>
        <div>Name: ${this.personDetails.name}</div>
        <div>Company: ${this.personDetails.company.name}</div>
        <button
          class="button is-info is-light"
          onclick="${() => {
            this.sendDataToParent();
          }}"
        >
          click me and check console
        </button>
      `;
    } else {
      return html`<div></div>`;
    }
  }
}
