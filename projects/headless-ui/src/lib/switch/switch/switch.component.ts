import {
  Component,
  Input,
  Output,
  EventEmitter,
  HostBinding,
  HostListener,
  booleanAttribute
} from '@angular/core';

@Component({
  selector: 'Switch, [ngxSwitch], ngx-headlessui-switch',
  standalone: true,
  template: '<ng-content></ng-content>',
})
export class SwitchComponent {
  @Input({ transform: booleanAttribute }) checked = false;
  @Input({ transform: booleanAttribute }) disabled = false;
  @Output() checkedChange = new EventEmitter<boolean>();

  @HostBinding('attr.role') role = 'switch';
  @HostBinding('attr.aria-checked') get ariaChecked() {
    return this.checked;
  }
  @HostBinding('attr.aria-disabled') get ariaDisabled() {
    return this.disabled || null;
  }
  @HostBinding('tabindex') get tabindex() {
    return this.disabled ? -1 : 0;
  }

  @HostListener('click')
  onClick() {
    if (this.disabled) return;
    this.checked = !this.checked;
    this.checkedChange.emit(this.checked);
  }

  @HostListener('keydown.space', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    event.preventDefault();
    this.onClick();
  }
}
