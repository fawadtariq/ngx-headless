import { Component, ElementRef, HostListener, HostBinding, inject, Input, Output, EventEmitter } from '@angular/core';
import { ComboboxContextService } from '../combobox-context.service';

@Component({
  selector: 'Combobox, [ngxCombobox], ngx-headlessui-combobox',
  standalone: true,
  providers: [
    ComboboxContextService
  ],
  exportAs: 'ngxCombobox',
  template: `<ng-content />`
})
export class ComboboxComponent {

  private ctx = inject(ComboboxContextService);

  constructor() {}

  @Input() class = '';
  @Input() modelValue: any = null;
  @Output() modelValueChange = new EventEmitter<any>();

  @HostBinding('class') get hostClass() { return this.class; }
  @HostBinding('attr.role') role = 'combobox';
  @HostBinding('attr.aria-expanded') get expanded() {
    return this.ctx.isOpen() ? true : undefined;
  }
  @HostBinding('attr.aria-haspopup') haspopup = 'listbox';

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

  getInputValue() {
    return this.ctx.inputValue();
  }

  setInputValue(value: string) {
    this.ctx.setInputValue(value);
  }

  getFilteredOptions() {
    return this.ctx.getFilteredOptions();
  }
}
