import { Component, ElementRef, HostListener, HostBinding, inject, Input, Output, EventEmitter } from '@angular/core';
import { ListboxContextService } from '../listbox-context.service';

@Component({
  selector: 'Listbox, [ngxListbox], ngx-headlessui-listbox',
  standalone: true,
  providers: [
    ListboxContextService
  ],
  exportAs: 'ngxListbox',
  template: `<ng-content />`
})
export class ListboxComponent {

  private ctx = inject(ListboxContextService);

  constructor() {}

  @Input() class = '';
  @Input() modelValue: any = null;
  @Output() modelValueChange = new EventEmitter<any>();

  @HostBinding('class') get hostClass() { return this.class; }
  @HostBinding('attr.role') role = 'listbox';
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

  selectValue(value: any) {
    this.ctx.selectValue(value);
    this.modelValueChange.emit(value);
  }

  getSelectedValue() {
    return this.ctx.selectedValue();
  }
}
