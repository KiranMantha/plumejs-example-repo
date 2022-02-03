import { Component, html, IHooks, Renderer } from '@plumejs/core';

@Component({
  selector: 'test-ele',
  deps: [Renderer]
})
export class TestEle implements IHooks {
  readonly ObservedProperties = <const>['testprops'];
  testprops: { name: string };

  constructor(private renderer: Renderer) {}

  render() {
    if (this.testprops) {
      return html`
        <div>
          testing web component2 ${this.testprops.name}
          <button onclick=${() => this.counts()}>hi</button>
          <input
            value=${this.testprops.name}
            oninput=${(e: any) => {
              this.change(e.target.value);
              e.target.focus();
            }}
          />
          <slot>testing slots</slot>
        </div>
      `;
    } else {
      return html``;
    }
  }

  counts() {
    this.renderer.emitEvent('count', 'testing from click');
  }

  change(val: string) {
    this.renderer.emitEvent('count', val);
  }

  mount() {
    console.log('component loaded');
    console.log('props: ', this.testprops);
  }

  unmount() {
    console.log('component unloaded');
  }
}
