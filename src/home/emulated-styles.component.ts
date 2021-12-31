import { Component, html } from "@plumejs/core";

@Component({
  selector: 'emulated-styles',
  styles: `
    :host(.color-1) p { color: green; }
    :host(.color-2) p { color: blue; }
    :host(.color-3) p { color: red; }
  `
})
class EmulatedStylesComp {
  constructor() { }
  render() {
    return html`<p>my styles are emulated</p>`;
  }
}