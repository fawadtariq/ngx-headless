import { signal, computed, Injectable } from '@angular/core';

@Injectable()
export class PopoverContextService {
  private _openState = signal(false);

  readonly isOpen = computed(() => this._openState());

  toggle = () => this._openState.update(v => !v);
  close = () => this._openState.set(false);
  open = () => this._openState.set(true);
}
