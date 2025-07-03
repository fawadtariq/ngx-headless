import { Component, ElementRef, HostListener, HostBinding, inject, Input } from '@angular/core';
import { PopoverContextService } from '../popover-context.service';

@Component({
  selector: 'Popover, [ngxPopover], ngx-headlessui-popover',
  standalone: true,
  providers: [
    PopoverContextService
  ],
  exportAs: 'ngxPopover',
  template: `<ng-content />`
})
export class PopoverComponent {

  private ctx = inject(PopoverContextService);

  constructor() {}

  @Input() class = '';

  @HostBinding('class') get hostClass() { return this.class; }

  private el = inject(ElementRef<HTMLElement>);

  @HostListener('document:click', ['$event'])
  handleClickOutside(event: MouseEvent) {
    if (!this.el.nativeElement.contains(event.target as Node)) {
      this.ctx.close();
    }
  }

  @HostListener('document:keydown.escape')
  handleEscape() {
    this.ctx.close();
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
