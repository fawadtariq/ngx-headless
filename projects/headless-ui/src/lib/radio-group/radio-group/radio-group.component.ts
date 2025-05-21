import {
  Component,
  Input,
  Output,
  EventEmitter,
  inject,
  HostBinding,
  ChangeDetectionStrategy,
  signal,
  effect,
  ElementRef,
  OnInit,
} from '@angular/core';
import { RadioGroupContextService } from '../radio-group-context.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'RadioGroup, [ngxRadioGroup], ngx-headlessui-radiogroup',
  template: `<ng-content></ng-content>`,
  providers: [RadioGroupContextService],
  imports: [CommonModule],
  exportAs: 'ngxRadioGroup',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    role: 'radiogroup',
  },
})
export class RadioGroupComponent<T = unknown> implements OnInit {
  private ctx = inject(RadioGroupContextService) as RadioGroupContextService<T>;

  @Input() modelValue!: T;
  @Input() defaultValue?: T;
  @Input() class = '';
  @Output() modelValueChange = new EventEmitter<T>();

  @HostBinding('class') get hostClasses() {
    return this.class;
  }

  ngOnInit() {
    if (this.defaultValue !== undefined && (this.modelValue === undefined || this.modelValue === null)) {
      this.ctx.setSelected(this.defaultValue);
    }
  }

  ngOnChanges() {
    this.ctx.setSelected(this.modelValue);
  }

  constructor() {
    effect(() => {
      const selected = this.ctx.selected();
      if (selected !== this.modelValue) {
        this.modelValueChange.emit(selected as T);
      }
    });
  }

  // ✅ Public API
  select(value: T) {
    this.ctx.setSelected(value);
  }

  clear() {
    this.ctx.setSelected(null as T);
  }

  isSelected(value: T): boolean {
    return this.ctx.selected() === value;
  }

  getSelected(): T | null {
    return this.ctx.selected();
  }

  toggle(value: T) {
    this.isSelected(value) ? this.clear() : this.select(value);
  }
}
