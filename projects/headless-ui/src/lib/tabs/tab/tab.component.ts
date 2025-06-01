import { Component, HostBinding, HostListener, Input } from '@angular/core';
import { TabsContextService } from '../tabs-context.service';
import { inject } from '@angular/core';

@Component({
  selector: 'Tab, [ngxTab], ngx-headlessui-tab',
  standalone: true,
  template: `<ng-content></ng-content>`,
})
export class TabComponent {
  @Input() index!: number;
  @Input() disabled: boolean = false;

  private tabsContext = inject(TabsContextService);

  @HostBinding('attr.role') role = 'tab';
  @HostBinding('attr.aria-selected') get ariaSelected() {
    return this.tabsContext.selectedIndex() === this.index;
  }
  @HostBinding('attr.aria-disabled') get ariaDisabled() {
    return this.disabled;
  }
  @HostBinding('attr.tabindex') get tabindex() {
    return this.tabsContext.selectedIndex() === this.index ? 0 : -1;
  }

  @HostListener('click')
  onClick() {
    if (!this.disabled) {
      this.tabsContext.selectTab(this.index);
    }
  }

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if (this.disabled) {
      return;
    }
    switch (event.key) {
      case 'Enter':
      case ' ':
        event.preventDefault();
        this.tabsContext.selectTab(this.index);
        break;
    }
  }
}
