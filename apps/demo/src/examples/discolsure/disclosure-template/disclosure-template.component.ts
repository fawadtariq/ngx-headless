import { CommonModule } from '@angular/common';
import { Component, QueryList, ViewChild, ViewChildren } from '@angular/core';
import {
    DisclosureComponent,
    DisclosureButtonComponent,
    DisclosurePanelComponent,
} from '@ngx-headless/ui';

@Component({
    selector: 'disclosure-template-reference',
    standalone: true,
    imports: [
        DisclosureComponent,
        DisclosureButtonComponent,
        DisclosurePanelComponent,
        CommonModule
    ],
    templateUrl: "./disclosure-template.component.html",
})
export class DisclorureTemplateComponent {

    faqs = [
        { question: 'What is your return policy?', answer: 'You can return any item within 30 days of purchase.' },
        { question: 'How long does shipping take?', answer: 'Shipping usually takes 5-7 business days.' },
        { question: 'Do you offer international shipping?', answer: 'Yes, we ship to over 100 countries worldwide.' },
        { question: 'How can I track my order?', answer: 'You will receive a tracking number via email once your order has shipped.' },
        { question: 'What payment methods do you accept?', answer: 'We accept all major credit cards, PayPal, and Apple Pay.' },
        { question: 'Can I change or cancel my order?', answer: 'You can change or cancel your order within 24 hours of placing it.' },
    ]

    @ViewChildren('disclosure') disclosureInstances!: QueryList<DisclosureComponent>;

    ngAfterViewInit() {
        // Programmatically open the first disclosure
        this.disclosureInstances.first.open();

        // Log open states
        this.disclosureInstances.forEach((d, i) => {
            console.log(`Disclosure ${i} open?`, d.isOpen());
        });
    }

}
