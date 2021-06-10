import { Component, html } from "@plumejs/core";
import { ModalService } from '@plumejs/ui';

@Component({
	selector: "nested-modal"
})
class NestedModal {
	constructor(private modalsrvc: ModalService) { }

	nestedModalData: any = {};

	openAnotherModal() {
		const modal = this.modalsrvc.show({
			renderTemplate: () => html`<div>i'm nested modal</div>`,
			modalTitle: "nested modal",
			modalClass: "nested-class"
		});

		modal.onOpen.subscribe(() => {
			console.log("nested modal open");
		});

		modal.onClose.subscribe(() => {
			console.log("nested modal closed");
		});
	}

	render() {
		return html`
			<div>sample modal</div>
			<div>${this.nestedModalData.message}</div>
			<button
				class="button is-small is-info"
				onclick=${() => {
				this.openAnotherModal();
			}}
			>
				open another modal
			</button>
		`;
	}
}