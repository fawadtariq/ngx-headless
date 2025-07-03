import { Component, HostBinding, HostListener, inject, Input } from '@angular/core';
import { PopoverContextService } from '../popover-context.service';

@Component({
  selector: 'PopoverButton, [ngxPopoverButton], ngx-headlessui-popover-button',
  standalone: true,
  exportAs: 'ngxPopoverButton',
  template: `<ng-content />`
})
export class PopoverButtonComponent {
  private ctx = inject(PopoverContextService);

  @Input() class = '';
  @HostBinding('class') get hostClass() { return this.class; }
  @HostBinding('attr.role') role = 'button';
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
