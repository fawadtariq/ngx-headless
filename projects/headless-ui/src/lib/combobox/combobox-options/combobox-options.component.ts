import { Component, HostBinding, inject, Input } from '@angular/core';
import { ComboboxContextService } from '../combobox-context.service';

@Component({
  selector: 'ComboboxOptions, [ngxComboboxOptions], ngx-headlessui-combobox-options',
  standalone: true,
  exportAs: 'ngxComboboxOptions',
  template: `<ng-content />`
})
export class ComboboxOptionsComponent {
  private ctx = inject(ComboboxContextService);

  @Input() class = '';
  @HostBinding('class') get hostClass() { return this.class; }
  @HostBinding('attr.role') role = 'listbox';
  @HostBinding('attr.hidden') get hidden() {
    return !this.ctx.isOpen() ? true : undefined;
  }
}
