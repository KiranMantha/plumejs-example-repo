import { Component, html, IHooks } from '@plumejs/core';
import { IDropdownOptions, IOption, ModalService } from '@plumejs/ui';

@Component({
  selector: 'nested-modal',
  deps: [ModalService]
})
export class NestedModal implements IHooks {
  static readonly observedProperties = <const>['nestedModalData'];
  nestedModalData: { message: string };

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
    multiple: false,
    buttonText: (options: IOption<string>[]) => {
      if (options.length === 0) {
        return 'None selected';
      } else if (options.length > 3) {
        return options.length + ' selected';
      } else {
        return options.map((i) => i.label).join(', ');
      }
    }
  };

  constructor(private modalsrvc: ModalService) {}

  openAnotherModal() {
    const modal = this.modalsrvc.show({
      renderTemplate: () => html`<div>i'm nested modal</div>`,
      modalTitle: 'nested modal',
      modalClass: 'nested-class'
    });

    modal.onOpen.subscribe(() => {
      console.log('nested modal open');
    });

    modal.onClose.subscribe(() => {
      console.log('nested modal closed');
    });
  }

  render() {
    if (this.nestedModalData) {
      return html`
        <div>sample modal</div>
        <div>${this.nestedModalData.message}</div>
        <ui-dropdown
          data-input=${{ dropdownOptions: this.dropdownOptions }}
          onoptionselected=${(event) => {
            console.log(event.detail);
          }}
        ></ui-dropdown>
        <button
          onclick=${() => {
            this.openAnotherModal();
          }}
        >
          open another modal
        </button>
      `;
    } else {
      return html``;
    }
  }
}
