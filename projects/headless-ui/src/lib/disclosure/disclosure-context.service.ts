import { Injectable, signal } from '@angular/core';

@Injectable()
export class DisclosureContextService {
  isOpen = signal(false);

  toggle = () => this.isOpen.update(v => !v);
  close = () => this.isOpen.set(false);
  open = () => this.isOpen.set(true);
}
