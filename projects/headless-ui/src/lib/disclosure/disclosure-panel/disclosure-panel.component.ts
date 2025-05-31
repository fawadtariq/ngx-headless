import {
  Component,
  Input,
  HostBinding
} from '@angular/core';
import { DisclosureContextService } from '../disclosure-context.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'DisclosurePanel',
  standalone: true,
  imports: [CommonModule],
  template: `<ng-content *ngIf="context.isOpen()" />`
})
export class DisclosurePanelComponent {
  @Input() class = '';

  @HostBinding('class')
  get hostClass() {
    return this.class;
  }

  constructor(public context: DisclosureContextService) {}
}
