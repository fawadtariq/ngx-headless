// radio-group-context.service.ts
import { Injectable, Signal, signal } from '@angular/core';

@Injectable()
export class RadioGroupContextService<T = unknown> {
  private _selected = signal<T | null>(null);
  selected = this._selected.asReadonly();

  private _setSelected = (val: T) => this._selected.set(val);
  setSelected = this._setSelected;
}
