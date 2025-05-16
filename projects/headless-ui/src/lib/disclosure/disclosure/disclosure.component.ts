import { Component, Input, HostBinding, ContentChild, TemplateRef, ViewContainerRef, OnInit } from '@angular/core';
import { DisclosureContextService } from '../disclosure-context.service';

@Component({
  selector: 'Disclosure, [ngxDisclosure], ngx-headlessui-disclosure',
  standalone: true,
  template: ``,
  providers: [DisclosureContextService],
})
export class DisclosureComponent implements OnInit {
  @Input() class = '';

  @HostBinding('class')
  get hostClass() {
    return this.class;
  }

  @ContentChild(TemplateRef) templateRef!: TemplateRef<any>;

  constructor(
    private viewContainer: ViewContainerRef,
    private context: DisclosureContextService
  ) {}

  ngOnInit(): void {
    if (this.templateRef) {
      this.viewContainer.createEmbeddedView(this.templateRef, {
        open: this.context.isOpen(),
      });

      // Reactively update view context if needed in future (optional)
    }
  }
}
