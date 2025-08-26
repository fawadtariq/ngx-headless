import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { ControlInputOptions } from '../../types/control-input';

@Component({
  selector: 'EmailField',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  template: `
    <input
      *ngIf="options.control"
      type="email"
      [id]="options.name"
      [formControl]="options.control"
      [attr.placeholder]="options.placeholder"
      [attr.dir]="options.dir"
      [attr.autocomplete]="options.autocomplete || 'email'"
      [ngClass]="options.classes?.input"
    />
  `,
})
export class EmailField {
  @Input() options!: ControlInputOptions;
}
