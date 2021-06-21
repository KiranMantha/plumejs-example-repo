import { Component, ComponentRef, html, IHooks, Renderer } from "@plumejs/core";
import {
	IModal,
	IMultiSelectOptions,
	IToggleInput,
	ModalService, MultiSelectComponent, NotificationService,
	NotificationType,
	ToggleComponent
} from "@plumejs/ui";
import { NestedModal } from "./nested-modal.component";

@Component({
	selector: "plume-comp",
})
class PlumeComponents implements IHooks {
	constructor(private renderer: Renderer, private modalsrvc: ModalService, private notifySrvc: NotificationService) { }

	toggleInput: IToggleInput = {
		onchange: this.onToggleChange.bind(this),
		onText: "ON",
		offText: "OFF",
	};

	multiselectToggles: { [key: string]: IToggleInput } = {
		enableMultiselect: {
			onchange: (_checked: boolean) => {
				this.multiSelectOptions.multiple = _checked;
				this.multiSelectOptions.resetWidget = true;
				this.multiSelectRef.setProps({
					multiSelectOptions: this.multiSelectOptions
				});
			},
		},
		disableDropdown: {
			onchange: (_checked: boolean) => {
				this.multiSelectOptions.disableDropdown = _checked;
				this.multiSelectOptions.resetWidget = true;
				this.multiSelectRef.setProps({
					multiSelectOptions: this.multiSelectOptions
				});
			},
		},
		enableFilter: {
			onchange: (_checked: boolean) => {
				this.multiSelectOptions.enableFilter = _checked;
				this.multiSelectOptions.resetWidget = true;
				this.multiSelectRef.setProps({
					multiSelectOptions: this.multiSelectOptions
				});
			},
		},
	};

	multiSelectOptions: IMultiSelectOptions = {
		data: [
			{
				name: "option1",
			},
			{
				name: "option2",
			},
			{
				name: "option3",
			},
			{
				name: "option4",
			},
			{
				name: "option5",
			},
		],
		selectedValues: [
			{
				name: "option1",
			},
			{
				name: "option2",
			},
		],
		displayField: "name",
		// data: ['option1', 'option2', 'option3', 'option4'],
		// selectedValues: ['option1', 'option2'],
		multiple: false,
		disableDropdown: false,
		buttonText: (options: Array<any>) => {
			if (options.length === 0) {
				return "None selected";
			} else if (options.length > 3) {
				return options.length + " selected";
			} else {
				return options.map((i) => i.name).join(", ");
				//return options.join(', ')
			}
		},
		onchange: (selectedOption: any) => {
			console.log(selectedOption);
		},
	};

	nestedModalRef: ComponentRef<NestedModal>;
	sampleToggleRef: ComponentRef<ToggleComponent>;
	enableMultiselectRef: ComponentRef<ToggleComponent>;
	disableDropdownRef: ComponentRef<ToggleComponent>;
	enableFilterRef: ComponentRef<ToggleComponent>;
	multiSelectRef: ComponentRef<MultiSelectComponent>;

	mount() {
		this.sampleToggleRef.setProps({
			toggleOptions: this.toggleInput
		});

		this.enableMultiselectRef.setProps({
			toggleOptions: this.multiselectToggles.enableMultiselect
		});

		this.disableDropdownRef.setProps({
			toggleOptions: this.multiselectToggles.disableDropdown
		});

		this.enableFilterRef.setProps({
			toggleOptions: this.multiselectToggles.enableFilter
		});

		this.multiSelectRef.setProps({
			multiSelectOptions: this.multiSelectOptions
		});
	}

	openModal() {
		const modal: IModal = this.modalsrvc.show({
			renderTemplate: () =>
				html`<nested-modal
					ref=${(node) => { this.nestedModalRef = node; }}
				></nested-modal>`,
			modalTitle: "testing modal",
			modalClass: "sample-class",
		});

		modal.onOpen.subscribe(() => {
			console.log("main modal open", modal.Id);
			this.nestedModalRef.setProps({
				nestedModalData: { message: "Hello World" }
			});
		});

		modal.onClose.subscribe(() => {
			console.log("main modal closed");
		});
	}

	notify() {
		this.notifySrvc.sendMessage("hello world", NotificationType.Info);
	}

	notifyWithAutoHide() {
		this.notifySrvc.sendMessage("hello world", NotificationType.Info, true);
	}

	onToggleChange(_checked: boolean) {
		console.log(_checked);
	}

	render() {
		return html`
			<div>
				<h2 class="title is-3 mb-20">Plumejs UI Control Collection</h2>
				<div class="mb-20">
					<h5 class="title is-5">Modal</h5>
					<button
						class="button is-small is-info"
						onclick=${() => { this.openModal(); }}
					>
						Open Modal
					</button>
				</div>
				<div class="mb-20">
					<h5 class="title is-5">Notification</h5>
					<button
						class="button is-small is-info mr-10"
						onclick=${() => { this.notify(); }}
					>
						Notify with action
					</button>
					<button
						class="button is-small is-info"
						onclick=${() => { this.notifyWithAutoHide(); }}
					>
						Notify with auto hide
					</button>
				</div>
				<div class="mb-20">
					<h5 class="title is-5">Toggle Button</h5>
					<toggle-button ref=${(node) => { this.sampleToggleRef = node; }}></toggle-button>
				</div>
				<div class="mb-20">
					<h5 class="title is-5">Multi select</h5>
					<div>
						<div class="is-flex mb-20">
							<span>enable multi select</span>
							<toggle-button
								ref=${(node) => { this.enableMultiselectRef = node; }}
							></toggle-button>
						</div>
						<div class="is-flex mb-20">
							<span>disable dropdown</span>
							<toggle-button
								ref=${(node) => { this.disableDropdownRef = node; }}
							></toggle-button>
						</div>
						<div class="is-flex mb-20">
							<span>enable filtering</span>
							<toggle-button
								ref=${(node) => { this.enableFilterRef = node; }}
							></toggle-button>
						</div>
					</div>
					<div class="is-flex">
						<multi-select
							ref=${(node) => { this.multiSelectRef = node; }}
						></multi-select>
					</div>
				</div>
			</div>
		`;
	}
}
