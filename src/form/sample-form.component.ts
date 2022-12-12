import { Component, ComponentRef, html, IHooks, Renderer, useFormFields, Form, Validators } from '@plumejs/core';

import { IDropdownOptions, IOption, DropdownComponent, registerUIDropdown } from '@plumejs/ui';

registerUIDropdown();

@Component({
  selector: 'sample-form',
  deps: [Renderer]
})
export class SampleForm implements IHooks {
  sampleform: Form<any>;
  createChangeHandler: (key: string) => (e: Event) => void;
  multiSelectChangehandler: (e: any) => void;
  jsonRef: HTMLElement;
  errorsRef: HTMLElement;

  dropdownOptions: IDropdownOptions<string> = {
    options: [
      {
        label: 'Option 1',
        value: 'o1'
      },
      {
        label: 'Option 2',
        value: 'o2'
      },
      {
        label: 'Option 3',
        value: 'o3'
      },
      {
        label: 'Option 4',
        value: 'o4'
      }
    ],
    multiple: true,
    buttonText: (options: IOption<string>[]): string => {
      if (options.length === 0) {
        return 'None selected';
      } else if (options.length > 3) {
        return options.length + ' selected';
      } else {
        return options.map((item) => item.label).join(', ');
      }
    }
  };

  dropdownRef: ComponentRef<DropdownComponent<string>>;

  constructor(private renderer: Renderer) {}

  beforeMount() {
    [this.sampleform, this.createChangeHandler] = useFormFields({
      email: ['', Validators.required, Validators.pattern(/^[a-z0-9]((\.|\+)?[a-z0-9]){5,}@gmail\.com$/)],
      password: '',
      checkme: false,
      option: '',
      options: [[]],
      gender: ''
    });
    this.multiSelectChangehandler = this.createChangeHandler('options');
  }

  mount() {
    this.dropdownRef.setProps({
      dropdownOptions: this.dropdownOptions
    });
  }

  submitForm(e: Event) {
    e.preventDefault();
    if (this.sampleform.valid) {
      alert('form submitted successfully');
    }
    console.log(this.sampleform);
    this.errorsRef.innerHTML = JSON.stringify(Object.fromEntries(this.sampleform.errors), null, 4);
    this.jsonRef.innerHTML = JSON.stringify(this.sampleform.value, null, 4);
  }

  resetForm() {
    this.sampleform.reset();
    this.renderer.update();
  }

  render() {
    return html`
      <div>
        <form
          onsubmit=${(e: Event) => {
            this.submitForm(e);
          }}
        >
          <div>
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter gmail id"
              value=${this.sampleform.get('email').value}
              onchange=${this.createChangeHandler('email')}
            />
            <small id="emailHelp"> We'll never share your email with anyone else. </small>
          </div>
          <div>
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              id="exampleInputPassword1"
              placeholder="Password"
              value=${this.sampleform.get('password').value}
              onchange=${this.createChangeHandler('password')}
            />
          </div>
          <div>
            <label for="exampleCheck1">
              <input
                type="checkbox"
                id="exampleCheck1"
                checked=${this.sampleform.get('checkme').value}
                onchange=${this.createChangeHandler('checkme')}
              />
              Check me out
            </label>
          </div>
          <div>
            <label>single select</label>
            <select value=${this.sampleform.get('option').value} onchange=${this.createChangeHandler('option')}>
              <option>select</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          <div class="mb-20">
            <label>plumejs multi select</label>
            <ui-dropdown
              ref=${(node) => {
                if (!this.dropdownRef) this.dropdownRef = node;
              }}
              onoptionselected=${(event) => {
                this.multiSelectChangehandler({
                  target: {
                    value: event.detail
                  }
                });
              }}
            ></ui-dropdown>
          </div>
          <div class="mb-20">
            <label for="gender_male">
              <input
                type="radio"
                id="gender_male"
                name="gender"
                value="male"
                onchange=${this.createChangeHandler('gender')}
              />
              Male
            </label>
            <label for="gender_female">
              <input
                type="radio"
                id="gender_female"
                name="gender"
                value="female"
                onchange=${this.createChangeHandler('gender')}
              />
              Female
            </label>
          </div>
          <button type="submit">Submit</button>
          <button
            onclick=${() => {
              this.resetForm();
            }}
          >
            Reset
          </button>
        </form>
      </div>
      <p>Error summary</p>
      <pre>
            <code ref=${(node) => {
        if (!this.errorsRef) this.errorsRef = node;
      }}>
              ${JSON.stringify(Object.fromEntries(this.sampleform.errors), null, 4)}
            </code>
      </pre>
      <p>Form value</p>
      <pre>
				<code ref=${(node) => {
        if (!this.jsonRef) this.jsonRef = node;
      }}>
        ${JSON.stringify(this.sampleform.value, null, 4)}
				</code>
			</pre>
    `;
  }
}
