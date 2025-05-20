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
  private id = `radio-group-label-${nextId++}`;

  @Input() class = '';
  @HostBinding('class') get hostClass() {
    return this.class;
  }

  ngAfterViewInit() {
    const parent = this.el.nativeElement.closest('[role="radiogroup"]');
    if (parent) {
      parent.setAttribute('aria-labelledby', this.id);
      this.el.nativeElement.setAttribute('id', this.id);
    }
  }
}
