import { Directive, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: 'SwitchLabel, [ngxSwitchLabel], ngx-headlessui-switch-label',
  standalone: true,
})
export class SwitchLabel {
  constructor() {}

  @HostListener('click', ['$event'])
  onClick(event: Event) {
    event.preventDefault();
    // Let users handle toggle logic via [(checked)] binding
  }
}
