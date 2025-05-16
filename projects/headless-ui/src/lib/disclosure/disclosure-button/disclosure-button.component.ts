import {
  Component,
  Input,
  HostBinding,
  HostListener
} from '@angular/core';
import { DisclosureContextService } from '../disclosure-context.service';

@Component({
  selector: 'DisclosureButton',
  standalone: true,
  template: `<ng-content />`
})
export class DisclosureButtonComponent {
  @Input() class = '';

  @HostBinding('class')
  get hostClass() {
    return this.class;
  }

  @HostBinding('attr.aria-expanded')
  get ariaExpanded(): boolean {
    return this.context.isOpen();
  }

  @HostListener('click')
  onClick(): void {
    this.context.toggle();
  }

  constructor(private context: DisclosureContextService) {}
}
