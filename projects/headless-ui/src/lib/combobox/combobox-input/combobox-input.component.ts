import { Component, HostBinding, HostListener, inject, Input } from '@angular/core';
import { ComboboxContextService } from '../combobox-context.service';

@Component({
  selector: 'ComboboxInput, [ngxComboboxInput], ngx-headlessui-combobox-input',
  standalone: true,
  exportAs: 'ngxComboboxInput',
  template: `<input 
    [value]="value"
    [class]="class"
    (input)="onInput($event)"
    (focus)="onFocus()"
    (keydown)="onKeydown($event)"
  />`
})
export class ComboboxInputComponent {
  private ctx = inject(ComboboxContextService);

  @Input() class = '';
  @Input() value = '';
  @HostBinding('class') get hostClass() { return this.class; }
  @HostBinding('attr.role') role = 'combobox';
  @HostBinding('attr.aria-expanded') get expanded() {
    return this.ctx.isOpen();
  }
  @HostBinding('attr.aria-autocomplete') autocomplete = 'list';
  @HostBinding('attr.type') type = 'text';

  @HostListener('input', ['$event'])
  onInput(event: Event) {
    const target = event.target as HTMLInputElement;
    this.ctx.setInputValue(target.value);
  }

  @HostListener('focus')
  onFocus() {
    this.ctx.open();
  }

  @HostListener('keydown', ['$event'])
  onKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      event.preventDefault();
      this.ctx.close();
    } else if (event.key === 'ArrowDown') {
      event.preventDefault();
      this.ctx.open();
    }
  }
}
