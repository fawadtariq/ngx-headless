import { Component, HostBinding, inject, Input } from '@angular/core';
import { PopoverContextService } from '../popover-context.service';

@Component({
  selector: 'PopoverPanel, [ngxPopoverPanel], ngx-headlessui-popover-panel',
  standalone: true,
  exportAs: 'ngxPopoverPanel',
  template: `<ng-content />`
})
export class PopoverPanelComponent {
  private ctx = inject(PopoverContextService);

  @Input() class = '';
  @HostBinding('class') get hostClass() { return this.class; }
  @HostBinding('attr.hidden') get hidden() {
    return !this.ctx.isOpen() ? true : undefined;
  }
}
