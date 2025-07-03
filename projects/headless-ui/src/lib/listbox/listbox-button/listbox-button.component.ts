import { Component, HostBinding, HostListener, inject, Input } from '@angular/core';
import { ListboxContextService } from '../listbox-context.service';

@Component({
  selector: 'ListboxButton, [ngxListboxButton], ngx-headlessui-listbox-button',
  standalone: true,
  exportAs: 'ngxListboxButton',
  template: `<ng-content />`
})
export class ListboxButtonComponent {
  private ctx = inject(ListboxContextService);

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
