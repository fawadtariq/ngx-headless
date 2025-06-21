import { Component, EventEmitter, Input, Output, HostBinding, HostListener } from '@angular/core';
import { MenuContextService } from '../menu-context.service';

@Component({
  selector: 'MenuItem, [ngxMenuItem], ngx-headlessui-menu-item',
  standalone: true,
  template: `<ng-content />`
})
export class MenuItemComponent {
  constructor(private ctx: MenuContextService) {}
  @Input() class = '';
  @HostBinding('class') get hostClass() { return this.class; }

  @Input() disabled = false;
  @Output() selected = new EventEmitter<void>();

  @HostBinding('attr.role') role = 'menuitem';
  @HostBinding('attr.tabindex') tabindex = -1;
  @HostBinding('attr.aria-disabled') get ariaDisabled() {
    return this.disabled || null;
  }

  @HostListener('click')
  onSelect() {
    if (!this.disabled) {
      this.selected.emit();
      this.ctx.close();
    }
  }
}
