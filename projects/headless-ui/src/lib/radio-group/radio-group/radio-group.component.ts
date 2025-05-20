// radio-group.component.ts
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
} from '@angular/core';
import { RadioGroupContextService } from '../radio-group-context.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'RadioGroup, [ngxRadioGroup], ngx-headlessui-radiogroup',
  template: `<ng-content></ng-content>`,
  providers: [RadioGroupContextService],
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    role: 'radiogroup',
  },
})
export class RadioGroupComponent<T = unknown> {
  private ctx = inject(RadioGroupContextService) as RadioGroupContextService<T>;

  @Input() modelValue!: T;
  @Output() modelValueChange = new EventEmitter<T>();

  @Input() class = '';
  @HostBinding('class') get hostClasses() {
    return this.class;
  }

  constructor() {
    effect(() => {
      const selected = this.ctx.selected();
      if (selected !== this.modelValue) {
        this.modelValueChange.emit(selected as T);
      }
    });
  }

  ngOnChanges() {
    this.ctx.setSelected(this.modelValue);
  }
}
