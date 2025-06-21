import { Component, ElementRef, HostListener, HostBinding, inject, Input } from '@angular/core';
import { MenuContextService } from '../menu-context.service';

@Component({
  selector: 'Menu, [ngxMenu], ngx-headlessui-menu',
  standalone: true,
  providers: [
    MenuContextService
  ],
  exportAs: 'ngxMenu',
  template: `<ng-content />`
})
export class MenuComponent {

  private ctx = inject(MenuContextService);

  constructor() {}

  @Input() class = '';
  @HostBinding('class') get hostClass() { return this.class; }
  @HostBinding('attr.role') role = 'menu';
  @HostBinding('attr.aria-orientation') orientation = 'vertical';
  @HostBinding('attr.aria-expanded') get expanded() {
    return this.ctx.isOpen() ? true : undefined;
  }

  private el = inject(ElementRef<HTMLElement>);


  @HostListener('document:click', ['$event'])
  handleClickOutside(event: MouseEvent) {
    if (!this.el.nativeElement.contains(event.target as Node)) {
      this.ctx.close();
    }
  }

  isOpen() {
    return this.ctx.isOpen();   
  }

  toggle() {
    this.ctx.toggle(); 
  }

  close() {
    this.ctx.close(); 
  }

  open() {
    this.ctx.open(); 
  }
}
