import { Component, Input, HostBinding, computed } from '@angular/core';
import { DisclosureContextService } from '../disclosure-context.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'DisclosurePanel, [ngxDisclosurePanel], ngx-headlessui-disclosure-panel',
  imports: [CommonModule],
  standalone: true,
  template: `
    <ng-container *ngIf="isOpen()">
      <ng-content />
    </ng-container>
  `,
})
export class DisclosurePanelComponent {
  constructor(private context: DisclosureContextService) {}

  @Input() class = '';

  @HostBinding('class')
  get hostClass() {
    return this.class;
  }

  isOpen = computed(() => this.context.isOpen());
}
