import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

import {
  ListboxComponent,
  ListboxButtonComponent,
  ListboxOptionsComponent,
  ListboxOptionComponent
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
  selector: 'listbox-embedded-main',
  standalone: true,
  animations: [slideDown],
  imports: [CommonModule, ListboxComponent, ListboxButtonComponent, ListboxOptionsComponent, ListboxOptionComponent],
  templateUrl: './listbox-embedded-main.html',
})
export class ListboxEmbeddedMainComponent {
  @ViewChild('listbox') listbox!: ListboxComponent;

  selectedPerson: any = null;

  people = [
    { id: 1, name: 'Wade Cooper', avatar: 'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
    { id: 2, name: 'Arlene Mccoy', avatar: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
    { id: 3, name: 'Devon Webb', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80' },
    { id: 4, name: 'Tom Cook', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
    { id: 5, name: 'Tanya Fox', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80' },
  ];

  ngOnInit() {
    this.selectedPerson = this.people[0];
  }

  onSelectionChange(person: any) {
    this.selectedPerson = person;
  }
}
