import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'DialogDescription, [ngxDialogDescription], ngx-headlessui-dialog-description',
  standalone: true,
  exportAs: 'ngxDialogDescription',
  template: `<ng-content />`
})
export class DialogDescriptionComponent {
  @Input() class = '';
  @HostBinding('class') get hostClass() { return this.class; }
  @HostBinding('attr.id') id = 'dialog-description';
}
