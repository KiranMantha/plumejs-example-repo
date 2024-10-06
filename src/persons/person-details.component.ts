import { Component, html, IHooks, Renderer, Input, signal } from '@plumejs/core';

@Component({
  selector: 'person-details',
  deps: [Renderer]
})
export class PersonDetails implements IHooks {
  constructor(private renderer: Renderer) {}

  @Input()
  personDetails = signal<{ name: string; company: { name: string } }>();

  onPropertiesChanged() {
    // console.log(this.personDetails);
  }

  sendDataToParent() {
    this.renderer.emitEvent('userclick', this.personDetails());
  }

  render() {
    console.log(this.personDetails());
    if (this.personDetails()?.name) {
      return html`
        <strong>Person Details</strong>
        <div>Name: ${this.personDetails().name}</div>
        <div>Company: ${this.personDetails().company.name}</div>
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
