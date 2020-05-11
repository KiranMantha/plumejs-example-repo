import { Component, html } from "plumejs";

@Component({
  selector: 'emulated-styles',
  styles: '.test-emulation { color: green;}'
})
class EmulatedStylesComp {
  render() {
    return html`<p class='test-emulation'>my styles are emulated</p>`;
  }
}