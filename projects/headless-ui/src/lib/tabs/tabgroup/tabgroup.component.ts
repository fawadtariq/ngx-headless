import { Component, EventEmitter, Input, Output, inject, effect } from '@angular/core';
import { TabsContextService } from '../tabs-context.service';

@Component({
  selector: 'TabGroup, [ngxTabGroup], ngx-headlessui-tab-group',
  standalone: true,
  exportAs: 'ngxTabGroup',
  providers: [TabsContextService],
  template: `<ng-content></ng-content>`,
})
export class TabGroupComponent {
  @Input() selectedIndex: number | null = null;
  @Input() defaultIndex: number = 0;
  @Output() selectedIndexChange = new EventEmitter<number>();

  private tabsContext = inject(TabsContextService);

  constructor() {
    const initialIndex = this.selectedIndex !== null ? this.selectedIndex : this.defaultIndex;
    this.tabsContext.selectTab(initialIndex);

    effect(() => {
      const currentIndex = this.tabsContext.selectedIndex();
      if (currentIndex !== null && currentIndex !== this.selectedIndex) {
        this.selectedIndexChange.emit(currentIndex);
      }
    });
  }

  getSelectedIndex(): number | null {
    return this.tabsContext.selectedIndex();
  }

  selectTab(index: number) {
    this.tabsContext.selectTab(index);
  }
}
