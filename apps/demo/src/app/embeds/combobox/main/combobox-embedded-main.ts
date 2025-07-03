import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

import {
  ComboboxComponent,
  ComboboxInputComponent,
  ComboboxButtonComponent,
  ComboboxOptionsComponent,
  ComboboxOptionComponent
} from '@ngx-headless/ui';

const slideDown = trigger('slideDown', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(-10px)' }),
    animate('150ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
  ]),
  transition(':leave', [
    animate('100ms ease-in', style({ opacity: 0, transform: 'translateY(-10px)' }))
  ])
]);

@Component({
  selector: 'combobox-embedded-main',
  standalone: true,
  animations: [slideDown],
  imports: [CommonModule, ComboboxComponent, ComboboxInputComponent, ComboboxButtonComponent, ComboboxOptionsComponent, ComboboxOptionComponent],
  templateUrl: './combobox-embedded-main.html',
})
export class ComboboxEmbeddedMainComponent {
  @ViewChild('combobox') combobox!: ComboboxComponent;

  selectedPerson: any = null;
  query = '';

  people = [
    { id: 1, name: 'Wade Cooper' },
    { id: 2, name: 'Arlene Mccoy' },
    { id: 3, name: 'Devon Webb' },
    { id: 4, name: 'Tom Cook' },
    { id: 5, name: 'Tanya Fox' },
    { id: 6, name: 'Hellen Schmidt' },
    { id: 7, name: 'Caroline Schultz' },
    { id: 8, name: 'Mason Heaney' },
    { id: 9, name: 'Claudie Smitham' },
    { id: 10, name: 'Emil Schaefer' },
  ];

  get filteredPeople() {
    return this.query === ''
      ? this.people
      : this.people.filter((person) =>
          person.name
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(this.query.toLowerCase().replace(/\s+/g, ''))
        );
  }

  onInputChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.query = target.value;
    if (this.combobox) {
      this.combobox.setInputValue(target.value);
    }
  }

  onSelectionChange(person: any) {
    this.selectedPerson = person;
    this.query = person?.name || '';
  }
}
