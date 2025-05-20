import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DisclosureContextService } from 'projects/headless-ui/src/lib/disclosure/disclosure-context.service';

@Component({
    selector: 'close-button',
    standalone: true,
    imports: [
        CommonModule
    ],
    template: `<button class="my-4 bg-purple-300 cursor-pointer p-2 rounded-md" (click)="toggleDisclosure()">{{this.disclosureContext.isOpen() ? "Close" : "Open"}}</button>`,
})
export class CloseButtonComponent {

    constructor(public disclosureContext: DisclosureContextService) { }

    toggleDisclosure() {
        this.disclosureContext.toggle();
    }

}
