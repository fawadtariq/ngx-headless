import { Component, ElementRef, HostListener, HostBinding, inject, Input } from '@angular/core';
import { DialogContextService } from '../dialog-context.service';

@Component({
  selector: 'TestDialog, [ngxTestDialog], ngx-headlessui-test-dialog',
  standalone: true,
  providers: [
    DialogContextService
  ],
  exportAs: 'ngxTestDialog',
  template: `<ng-content />`
})
export class DialogComponent {

  private ctx = inject(DialogContextService);

  constructor() {}

  @Input() class = '';

  @HostBinding('class') get hostClass() { return this.class; }
  @HostBinding('attr.role') role = 'dialog';
  @HostBinding('attr.aria-modal') get ariaModal() {
    return this.ctx.isOpen() ? 'true' : undefined;
  }

  private el = inject(ElementRef<HTMLElement>);

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
