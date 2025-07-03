import { Component, HostBinding, inject, Input } from '@angular/core';
import { ListboxContextService } from '../listbox-context.service';

@Component({
  selector: 'ListboxOptions, [ngxListboxOptions], ngx-headlessui-listbox-options',
  standalone: true,
  exportAs: 'ngxListboxOptions',
  template: `<ng-content />`
})
export class ListboxOptionsComponent {
  private ctx = inject(ListboxContextService);

  @Input() class = '';
  @HostBinding('class') get hostClass() { return this.class; }
  @HostBinding('attr.role') role = 'listbox';
  @HostBinding('attr.hidden') get hidden() {
    return !this.ctx.isOpen() ? true : undefined;
  }
}
