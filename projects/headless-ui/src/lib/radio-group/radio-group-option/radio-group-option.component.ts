// radio-group-option.component.ts
import {
  Component,
  Input,
  HostBinding,
  HostListener,
  inject,
  ElementRef,
  ChangeDetectionStrategy,
} from '@angular/core';
import { RadioGroupContextService } from '../radio-group-context.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'RadioGroupOption, [ngxRadioGroupOption], ngx-headlessui-radiogroup-option',
  template: `<ng-content></ng-content>`,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadioGroupOptionComponent<T = unknown> {
  private ctx = inject(RadioGroupContextService) as RadioGroupContextService<T>;
  private el = inject(ElementRef<HTMLElement>);

  @Input() value!: T;

  @Input() class = '';
  @HostBinding('class') get hostClass() {
    return this.class;
  }

  @HostBinding('attr.role') role = 'radio';

  @HostBinding('attr.aria-checked')
  get checked() {
    return this.ctx.selected() === this.value;
  }

  @HostBinding('attr.tabindex')
  get tabIndex() {
    return this.checked ? 0 : -1;
  }

  @HostListener('click')
  onClick() {
    this.ctx.setSelected(this.value);
  }

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    const keys = ['ArrowRight', 'ArrowDown', 'ArrowLeft', 'ArrowUp'];
    if (!keys.includes(event.key)) return;

    event.preventDefault();

    const parent = this.el.nativeElement.closest('[role="radiogroup"]');
    if (!parent) return;

    const options = Array.from<HTMLElement>(
      parent.querySelectorAll('[role="radio"]')
    );
    const currentIndex = options.indexOf(this.el.nativeElement);
    if (currentIndex === -1) return;

    const delta = event.key === 'ArrowLeft' || event.key === 'ArrowUp' ? -1 : 1;
    const nextIndex = (currentIndex + delta + options.length) % options.length;

    options[nextIndex]?.focus();
  }
}
