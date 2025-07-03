import { Component, HostBinding, HostListener, inject, Input } from '@angular/core';
import { ComboboxContextService } from '../combobox-context.service';

@Component({
  selector: 'ComboboxButton, [ngxComboboxButton], ngx-headlessui-combobox-button',
  standalone: true,
  exportAs: 'ngxComboboxButton',
  template: `<ng-content />`
})
export class ComboboxButtonComponent {
  private ctx = inject(ComboboxContextService);

  @Input() class = '';
  @HostBinding('class') get hostClass() { return this.class; }
  @HostBinding('attr.role') role = 'button';
  @HostBinding('attr.aria-haspopup') haspopup = 'listbox';
  @HostBinding('attr.aria-expanded') get expanded() {
    return this.ctx.isOpen();
  }
  @HostBinding('attr.tabindex') tabindex = '0';

  @HostListener('click')
  onClick() {
    this.ctx.toggle();
  }

  @HostListener('keydown', ['$event'])
  onKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.ctx.toggle();
    }
  }
}
