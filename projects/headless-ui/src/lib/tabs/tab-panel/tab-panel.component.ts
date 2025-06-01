import { Component, HostBinding, Input } from '@angular/core';
import { TabsContextService } from '../tabs-context.service';
import { inject } from '@angular/core';

@Component({
  selector: 'TabPanel, [ngxTabPanel], ngx-headlessui-tab-panel',
  standalone: true,
  template: `<ng-content></ng-content>`,
})
export class TabPanelComponent {
  @Input() index!: number;

  private tabsContext = inject(TabsContextService);

  @HostBinding('attr.role') role = 'tabpanel';
  @HostBinding('attr.aria-labelledby') get ariaLabelledBy() {
    return `tab-${this.index}`;
  }
  @HostBinding('hidden') get hidden() {
    return this.tabsContext.selectedIndex() !== this.index;
  }
}
