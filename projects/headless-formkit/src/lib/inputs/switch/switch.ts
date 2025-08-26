import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { ControlInputOptions } from '../../types/control-input';

@Component({
  selector: 'SwitchField',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  template: `
    <input
      *ngIf="options.control"
      type="checkbox"
      role="switch"
      [id]="options.name"
      [formControl]="options.control"
      [attr.dir]="options.dir"
      [attr.aria-checked]="options.control.value"
      [ngClass]="options.classes?.input"
    />
  `,
})
export class SwitchField {
  @Input() options!: ControlInputOptions;
}
