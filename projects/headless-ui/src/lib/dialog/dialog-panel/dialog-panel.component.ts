import { Component, HostBinding, inject, Input } from '@angular/core';
import { DialogContextService } from '../dialog-context.service';

@Component({
  selector: 'DialogPanel, [ngxDialogPanel], ngx-headlessui-dialog-panel',
  standalone: true,
  exportAs: 'ngxDialogPanel',
  template: `<ng-content />`
})
export class DialogPanelComponent {
  private ctx = inject(DialogContextService);

  @Input() class = '';
  @HostBinding('class') get hostClass() { return this.class; }
  @HostBinding('attr.hidden') get hidden() {
    return !this.ctx.isOpen() ? true : undefined;
  }
}
