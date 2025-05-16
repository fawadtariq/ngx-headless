import {
  Component,
  Input,
  HostBinding,
  ContentChild,
  TemplateRef,
  forwardRef
} from '@angular/core';
import { DisclosureContextService } from '../disclosure-context.service';

@Component({
  selector: 'Disclosure, [ngxDisclosure], ngx-headlessui-disclosure',
  standalone: true,
  template: `<ng-content />`,
  providers: [
    DisclosureContextService,
    {
      provide: 'ngxDisclosure',
      useExisting: forwardRef(() => DisclosureComponent)
    }
  ],
  exportAs: 'ngxDisclosure'
})
export class DisclosureComponent {
  @Input() class = '';
  @Input() defaultOpen = false;

  @HostBinding('class')
  get hostClass() {
    return this.class;
  }

  constructor(private context: DisclosureContextService) {}

  ngOnInit(): void {
    if (this.defaultOpen) {
      this.context.open();
    }
  }

  isOpen(): boolean {
    return this.context.isOpen();
  }

  toggle(): void {
    this.context.toggle();
  }

  open(): void {
    this.context.open();
  }

  close(): void {
    this.context.close();
  }
}
