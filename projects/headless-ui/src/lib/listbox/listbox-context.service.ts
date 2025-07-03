import { signal, computed, Injectable } from '@angular/core';

@Injectable()
export class ListboxContextService {
  private _openState = signal(false);
  private _selectedValue = signal<any>(null);
  private _options = signal<any[]>([]);

  readonly isOpen = computed(() => this._openState());
  readonly selectedValue = computed(() => this._selectedValue());
  readonly options = computed(() => this._options());

  toggle = () => this._openState.update(v => !v);
  close = () => this._openState.set(false);
  open = () => this._openState.set(true);

  selectValue = (value: any) => {
    this._selectedValue.set(value);
    this.close();
  };

  setOptions = (options: any[]) => this._options.set(options);
}
