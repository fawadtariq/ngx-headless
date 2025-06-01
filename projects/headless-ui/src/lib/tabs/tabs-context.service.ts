import { Injectable, Signal, WritableSignal, signal } from '@angular/core';

@Injectable()
export class TabsContextService {
  private _selectedIndex: WritableSignal<number | null> = signal(null);

  get selectedIndex(): Signal<number | null> {
    return this._selectedIndex.asReadonly();
  }

  selectTab(index: number) {
    this._selectedIndex.set(index);
  }
}
