import { Component, Input, HostBinding, HostListener } from '@angular/core';
import { DisclosureContextService } from '../disclosure-context.service';

@Component({
  selector: 'DisclosureButton, [ngxDisclosureButton], ngx-headlessui-disclosure-button',
  standalone: true,
  template: `<ng-content />`,
})
export class DisclosureButtonComponent {
  constructor(private context: DisclosureContextService) {}

  @Input() class = '';

  @HostBinding('class')
  get hostClass() {
    return this.class;
  }

  @HostListener('click')
  onClick() {
    this.context.toggle();
  }
}
