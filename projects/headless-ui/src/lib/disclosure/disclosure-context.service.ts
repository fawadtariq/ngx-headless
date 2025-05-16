import { Injectable } from '@angular/core';

@Injectable()
export class DisclosureContextService {
  private _open = false;

  isOpen(): boolean {
    return this._open;
  }

  open(): void {
    this._open = true;
  }

  close(): void {
    this._open = false;
  }

  toggle(): void {
    this._open = !this._open;
  }
}
