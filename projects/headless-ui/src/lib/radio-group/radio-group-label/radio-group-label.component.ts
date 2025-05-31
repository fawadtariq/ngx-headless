// radio-group-label.component.ts
import {
  Component,
  ElementRef,
  AfterViewInit,
  inject,
  Input,
  HostBinding,
  ChangeDetectionStrategy,
} from '@angular/core';
import { CommonModule } from '@angular/common';

let nextId = 0;

@Component({
  standalone: true,
  selector: 'RadioGroupLabel, [ngxRadioGroupLabel], ngx-headlessui-radiogroup-label',
  template: `<ng-content></ng-content>`,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadioGroupLabelComponent implements AfterViewInit {
  private el = inject(ElementRef<HTMLElement>);
  private id = typeof crypto !== 'undefined' && crypto.randomUUID
  ? crypto.randomUUID()
  : `radio-group-label-${Math.random().toString(36).slice(2, 10)}`;


  @Input() class = '';
  @HostBinding('class') get hostClass() {
    return this.class;
  }

  ngAfterViewInit() {
    const parent = this.el.nativeElement.closest('[role="radio"], [role="radiogroup"]');
    if (parent) {
      const existing = parent.getAttribute('aria-describedby');
      const updated = existing ? `${existing} ${this.id}` : this.id;

      parent.setAttribute('aria-describedby', updated);
      this.el.nativeElement.setAttribute('id', this.id);
    }
  }
}
