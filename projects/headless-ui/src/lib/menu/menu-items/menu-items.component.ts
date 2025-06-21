import { Component, computed, inject, Input, HostBinding } from '@angular/core';
import { MenuContextService } from '../menu-context.service';

@Component({
  selector: 'MenuItems, [ngxMenuItems], ngx-headlessui-menu-items',
  standalone: true,
  template: `<ng-content />`
})
export class MenuItemsComponent {
  constructor(private ctx: MenuContextService) {}
  @Input() class = '';
  @HostBinding('class') get hostClass() { return this.class; }

  @HostBinding('attr.role') role = 'menu';
  @HostBinding('hidden') get isHidden() {
    return !this.ctx.isOpen();
  }

}
