import { signal, computed, Injectable } from '@angular/core';

@Injectable()
export class ComboboxContextService {
  private _openState = signal(false);
  private _selectedValue = signal<any>(null);
  private _inputValue = signal<string>('');
  private _options = signal<any[]>([]);

  readonly isOpen = computed(() => this._openState());
  readonly selectedValue = computed(() => this._selectedValue());
  readonly inputValue = computed(() => this._inputValue());
  readonly options = computed(() => this._options());

  toggle = () => this._openState.update(v => !v);
  close = () => this._openState.set(false);
  open = () => this._openState.set(true);

  selectValue = (value: any) => {
    this._selectedValue.set(value);
    this._inputValue.set(value?.name || '');
    this.close();
  };

  setInputValue = (value: string) => {
    this._inputValue.set(value);
    if (value && !this.isOpen()) {
      this.open();
    }
  };

  setOptions = (options: any[]) => this._options.set(options);

  getFilteredOptions = () => {
    const input = this.inputValue().toLowerCase();
    if (!input) return this.options();
    return this.options().filter(option => 
      option.name?.toLowerCase().includes(input)
    );
  };
}
