// radio-group-description.component.ts
import {
    Component,
    ElementRef,
    inject,
    Input,
    HostBinding,
    AfterViewInit,
    ChangeDetectionStrategy,
  } from '@angular/core';
  import { CommonModule } from '@angular/common';
  
  let nextDescId = 0;
  
  @Component({
    standalone: true,
    selector: 'RadioGroupDescription, [ngxRadioGroupDescription], ngx-headlessui-radiogroup-description',
    template: `<ng-content></ng-content>`,
    imports: [CommonModule],
    changeDetection: ChangeDetectionStrategy.OnPush,
  })
  export class RadioGroupDescriptionComponent implements AfterViewInit {
    private el = inject(ElementRef<HTMLElement>);
    private id = typeof crypto !== 'undefined' && crypto.randomUUID
  ? crypto.randomUUID()
  : `radio-group-description-${Math.random().toString(36).slice(2, 10)}`;
  
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
  