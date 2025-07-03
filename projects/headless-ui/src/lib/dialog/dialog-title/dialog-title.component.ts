import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'DialogTitle, [ngxDialogTitle], ngx-headlessui-dialog-title',
  standalone: true,
  exportAs: 'ngxDialogTitle',
  template: `<ng-content />`
})
export class DialogTitleComponent {
  @Input() class = '';
  @HostBinding('class') get hostClass() { return this.class; }
  @HostBinding('attr.id') id = 'dialog-title';
}
