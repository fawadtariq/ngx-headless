import { CommonModule } from '@angular/common';
import { Component, QueryList, ViewChild, ViewChildren } from '@angular/core';
import {
    RadioGroupComponent,
    RadioGroupDescriptionComponent,
    RadioGroupLabelComponent,
    RadioGroupOptionComponent
} from '@ngx-headless/ui';

@Component({
    selector: 'radio-group-example',
    standalone: true,
    imports: [
        RadioGroupComponent,
        RadioGroupLabelComponent,
        RadioGroupOptionComponent,
        RadioGroupDescriptionComponent,
        CommonModule
    ],
    templateUrl: "./radio-group-example.component.html",
})
export class RadioGroupExampleComponent {

    @ViewChild('group') radioGroup!: RadioGroupComponent;
    @ViewChildren('opt') options!: QueryList<RadioGroupOptionComponent>;

    plans = [
        {
            name: 'Startup',
            ram: '12GB',
            cpus: '6 CPUs',
            disk: '160 GB SSD disk',
        },
        {
            name: 'Business',
            ram: '16GB',
            cpus: '8 CPUs',
            disk: '512 GB SSD disk',
        },
        {
            name: 'Enterprise',
            ram: '32GB',
            cpus: '12 CPUs',
            disk: '1024 GB SSD disk',
        },
    ]

    selectedPlan = null;// this.plans[0];

    selectedLanguage = null;// this.languages[0];

    clear() {
        // this.selectedPlan = this.plans[0];
        // this.selectedLanguage = this.languages[0];
        this.radioGroup.clear();
    }

}
