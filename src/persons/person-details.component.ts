import { Component, html, IHooks, Renderer } from '@plumejs/core';

@Component({
  selector: 'person-details',
  deps: [Renderer]
})
export class PersonDetails implements IHooks {
  readonly ObservedProperties = <const>['userDetails'];
  userDetails: { name: string; company: { name: string } };

  constructor(private renderer: Renderer) {}

  sendDataToParent() {
    this.renderer.emitEvent('userclick', this.userDetails);
  }

  render() {
    if (this.userDetails && this.userDetails.name) {
      return html`
        <strong>Person Details</strong>
        <div>Name: ${this.userDetails.name}</div>
        <div>Company: ${this.userDetails.company.name}</div>
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
