import { CommonModule } from '@angular/common';
import { Component, QueryList, ViewChild, ViewChildren } from '@angular/core';
import {
    RadioGroupComponent,
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
        CommonModule
    ],
    templateUrl: "./radio-group-example.component.html",
})
export class RadioGroupExampleComponent {

languages = [
  { id: 'en', name: 'English' },
  { id: 'fr', name: 'French' },
  { id: 'ur', name: 'Urdu' },
];

selectedLanguage = this.languages[0];


}
