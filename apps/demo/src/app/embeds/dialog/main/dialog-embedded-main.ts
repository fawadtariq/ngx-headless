import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

import {
  DialogComponent,
  DialogPanelComponent,
  DialogTitleComponent,
  DialogDescriptionComponent
} from '@ngx-headless/ui';

const fadeIn = trigger('fadeIn', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('150ms ease-out', style({ opacity: 1 }))
  ]),
  transition(':leave', [
    animate('100ms ease-in', style({ opacity: 0 }))
  ])
]);

const slideUp = trigger('slideUp', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(4px) scale(0.95)' }),
    animate('150ms ease-out', style({ opacity: 1, transform: 'translateY(0) scale(1)' }))
  ]),
  transition(':leave', [
    animate('100ms ease-in', style({ opacity: 0, transform: 'translateY(4px) scale(0.95)' }))
  ])
]);

@Component({
  selector: 'dialog-embedded-main',
  standalone: true,
  animations: [fadeIn, slideUp],
  imports: [CommonModule, DialogComponent, DialogPanelComponent, DialogTitleComponent, DialogDescriptionComponent],
  templateUrl: './dialog-embedded-main.html',
})
export class DialogEmbeddedMainComponent {
  @ViewChild('dialog') dialog!: DialogComponent;

  openDialog() {
    if (this.dialog) {
      this.dialog.open();
    }
  }

  closeDialog() {
    if (this.dialog) {
      this.dialog.close();
    }
  }

  handleDeactivate() {
    this.closeDialog();
  }
}
