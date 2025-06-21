import { Component, inject, Input, HostBinding, HostListener } from '@angular/core';
import { MenuContextService } from '../menu-context.service';

@Component({
  selector: 'MenuButton, [ngxMenuButton], ngx-headlessui-menu-button',
  standalone: true,
  template: `<ng-content />`
})
export class MenuButtonComponent {
  constructor(private ctx: MenuContextService) {}

  @Input() class = '';
  @HostBinding('class') get hostClass() { return this.class; }
  @HostBinding('attr.role') role = 'button';
  @HostBinding('attr.aria-haspopup') hasPopup = 'menu';
  @HostBinding('attr.aria-expanded') get expanded() {
    return this.ctx.isOpen();
  }
  @HostBinding('attr.tabindex') tabindex = 0;

  // protected ctx = inject(MenuContextService);

  @HostListener('click')
  onClick() {
    console.log('MenuButton clicked');
    this.ctx.toggle();
  }
}
