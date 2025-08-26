import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { ControlInputOptions } from '../../types/control-inputs';

@Component({
  selector: 'CheckboxField',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  template: `
    <input
      *ngIf="options.control"
      type="checkbox"
      [id]="options.name"
      [formControl]="options.control"
      [attr.dir]="options.dir"
      [ngClass]="options.classes?.input"
    />
  `,
})
export class CheckboxField {
  @Input() options!: ControlInputOptions;
}
