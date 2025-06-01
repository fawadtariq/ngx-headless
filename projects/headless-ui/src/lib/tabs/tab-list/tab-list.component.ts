import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'TabList, [ngxTabList], ngx-headlessui-tab-list',
  standalone: true,
  template: `<ng-content></ng-content>`,
})
export class TabListComponent {
    @HostBinding('attr.role') role = 'tablist';
}
// This component serves as a container for tab items in a tab interface.
// It is used to group the tabs together and can be styled or extended as needed.