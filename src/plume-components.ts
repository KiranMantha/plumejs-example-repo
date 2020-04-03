import { Component, html } from "plumejs";
import { IModal, ModalService, NotificationService, NotificationType, IToggleInput, IMultiSelectOptions } from 'plumejs-ui';
import './nested-modal';

@Component({
    selector: 'plume-comp'
})
class PlumeComponents {
    constructor(
		private modalsrvc: ModalService,
        private notifySrvc: NotificationService
    ) {}
	
	update:any;
    
	toggleInput: IToggleInput = {
		onchange: this.onToggleChange.bind(this),
		onText: 'ON',
		offText: 'OFF'
	}

	multiselectToggles = {
		enableMultiselect: {
			onchange: (_checked: boolean) => {
				this.multiSelectOptions.multiple = _checked;
				this.multiSelectOptions.resetWidget = true;
				this.update();
			}
		},
		disableDropdown: {
			onchange: (_checked: boolean) => {
				this.multiSelectOptions.disableDropdown = _checked;
				this.update();
			}
		}
	}

	multiSelectOptions: IMultiSelectOptions = {
		data: [{
			name: 'option1'
		}, {
            name: 'option2'
        },{
            name: 'option3'
        },{
            name: 'option4'
        },{
            name: 'option5'
        }],
		displayField: 'name',
		multiple: false,
		enableFilter: true,
		disableDropdown: false,
		buttonText: (options:Array<any>) => {
			if (options.length === 0) {
				return 'None selected';
			}
			else if (options.length > 3) {
				return options.length + ' selected';
			} else {
				return options.map(i=>i.name).join(', ');
			}
		},
		onchange: (selectedOption: any) => { console.log(selectedOption); }
	}

  openModal() {
		const modal:IModal = this.modalsrvc.show({
			renderTemplate: () => html`<nested-modal nestedModalData=${{ message: 'Hello World' }}></nested-modal>`,
			modalTitle: "testing modal",
			modalClass: "sample-class",
		});

		modal.onOpen.subscribe(() => {
			console.log("main modal open", modal.Id);
		});

		modal.onClose.subscribe(() => {
			console.log("main modal closed");
		});			
	}

	notify() {
		this.notifySrvc.sendMessage('hello world', NotificationType.Info);
	}

	onToggleChange(_checked: boolean) {
		console.log(_checked);
	}

	render() {
			return html`
					<div>
						<h2 class='mb-20'>Plumejs UI Control Collection</h2>
						<div class='mb-20'>
							<h5>Modal</h5>
							<button
								class="button is-small is-info"
								onclick=${() => {
									this.openModal();
								}}
							>
								Open Modal
							</button>
						</div>
						<div class='mb-20'>
							<h5>Notification</h5>
							<button class='button is-small is-info' onclick=${() => { this.notify(); }}>Notify</button>
						</div>
						<div class='mb-20'>
							<h5>Toggle Button</h5>
							<toggle-button toggleOptions=${ this.toggleInput }></toggle-button>
						</div>
						<div class='mb-20'>
							<h5>Multi select</h5>
							<div style='width: 500px'>
								<div class='d-flex mb-20'>
									<span>enable multi select</span> <toggle-button toggleOptions=${this.multiselectToggles.enableMultiselect}></toggle-button>
								</div>
								<div class='d-flex mb-20'>
									<span>disable dropdown</span> <toggle-button toggleOptions=${this.multiselectToggles.disableDropdown}></toggle-button>
								</div>
							</div>
							<div style='width: 300px'>
								<multi-select multiSelectOptions=${ this.multiSelectOptions }></multi-select>
							</div>
						</div>
					</div>
			`;
	}
}