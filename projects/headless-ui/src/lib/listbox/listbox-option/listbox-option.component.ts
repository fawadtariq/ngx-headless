import { Component, HostBinding, HostListener, inject, Input, Output, EventEmitter } from '@angular/core';
import { ListboxContextService } from '../listbox-context.service';

@Component({
  selector: 'ListboxOption, [ngxListboxOption], ngx-headlessui-listbox-option',
  standalone: true,
  exportAs: 'ngxListboxOption',
  template: `<ng-content />`
})
export class ListboxOptionComponent {
  private ctx = inject(ListboxContextService);

  @Input() class = '';
  @Input() value: any;
  @Input() disabled = false;
  @Output() selected = new EventEmitter<any>();

  @HostBinding('class') get hostClass() { return this.class; }
  @HostBinding('attr.role') role = 'option';
  @HostBinding('attr.tabindex') tabindex = '-1';
  @HostBinding('attr.aria-disabled') get ariaDisabled() {
    return this.disabled ? 'true' : undefined;
  }
  @HostBinding('attr.aria-selected') get ariaSelected() {
    return this.ctx.selectedValue() === this.value;
  }

  @HostListener('click')
  onClick() {
    if (!this.disabled) {
      this.selected.emit(this.value);
      this.ctx.selectValue(this.value);
    }
  }

  isSelected() {
    return this.ctx.selectedValue() === this.value;
  }
}
