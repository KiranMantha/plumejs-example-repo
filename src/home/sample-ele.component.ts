import { Component, ComponentRef, html, Injectable, Renderer } from '@plumejs/core';
import { TestEle } from './test-ele.component';

@Injectable()
class SampleService {
  testMeth() {
    console.log('testmethod in sample service');
  }
}

@Injectable({ deps: [SampleService] })
class TestService {
  constructor(private sampleSrvc: SampleService) {}
  testMeth() {
    this.sampleSrvc.testMeth();
  }

  getUsers() {
    return fetch('https://api.github.com/users?since=135');
  }
}

@Component({
  selector: 'sample-ele',
  deps: [TestService, Renderer]
})
export class SampleEle {
  test: string;
  greeting = 'hello world';
  outCount: () => void;
  props: any;
  inputField: HTMLInputElement;

  private testEleRef: ComponentRef<TestEle>;

  constructor(private testSrvc: TestService, private renderer: Renderer) {
    this.test = 'sample 123';
    this.props = {
      name: this.test
    };
  }

  beforeMount() {
    console.log('before mounting...');
  }

  mount() {
    console.log('component loaded');
    console.log(this.inputField);
    this.testSrvc.testMeth();
    this.testEleRef.setProps({ testprops: this.props });
  }

  unmount() {
    console.log('component unloaded');
  }

  enablePersonsRoute() {
    window.localStorage.setItem('@plumejs/core', 'now persons route is activated');
  }

  disablePersonsRoute() {
    window.localStorage.removeItem('@plumejs/core');
  }

  updateProps() {
    this.testEleRef.setProps({ testprops: { name: 'sample 123' } });
  }

  count(val: string) {
    this.test = val;
    this.props.name = val;
    this.testEleRef.setProps({ testprops: this.props });
  }

  getRef() {
    console.log(this.inputField);
  }

  render() {
    return html`
      <p>
        Persons route has <b>canActivate</b> gaurd which check for <i>plumejs</i> key in localstorage. Click enable
        button to navigate to persons route. Click disable button to disable persons route.
      </p>
      <div>
        <button onclick=${this.enablePersonsRoute} title="click persons nav to check persons route">
          Enable Persons route
        </button>
        <button onclick=${this.disablePersonsRoute} title="click persons nav to check persons route">
          Disable Persons route
        </button>
      </div>
      <div class="mt-20">check translation: ${'username.greet'.translate({ name: 'test user' })}</div>
      <p>type in below text box and see magic: ${this.greeting}</p>
      <input
        type="text"
        ref=${(node) => {
          this.inputField = node;
        }}
        value="${this.greeting}"
        oninput=${(e) => {
          this.greeting = e.target.value;
        }}
      />
      <button
        onclick=${() => {
          this.getRef();
        }}
      >
        click
      </button>
      <div>
        <h1>Sample two way data binding</h1>
        testing web component1 ${this.test}
        <div>
          <button
            onclick=${() => {
              this.updateProps();
            }}
          >
            change props
          </button>
        </div>
        <test-ele
          ref="${(node) => {
            this.testEleRef = node;
          }}"
          oncount="${(e: CustomEvent) => {
            this.count(e.detail);
          }}"
        >
        </test-ele>
      </div>
      ${[1, 2, 3].map((i) => html`<emulated-styles class="color-${i}"></emulated-styles>`)}
    `;
  }
}
