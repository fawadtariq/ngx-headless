import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { ControlInputOptions, SelectOption } from '../../types/control-inputs';

@Component({
  selector: 'SelectField',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  template: `
    <select
      *ngIf="options.control"
      [id]="options.name"
      [formControl]="options.control"
      [attr.dir]="options.dir"
      [ngClass]="options.classes?.input"
    >
      <option value="" *ngIf="options.placeholder" disabled>{{ options.placeholder }}</option>
      <option 
        *ngFor="let option of selectOptions" 
        [value]="option.value"
        [disabled]="option.disabled"
      >
        {{ option.label }}
      </option>
    </select>
  `,
})
export class SelectField {
  @Input() options!: ControlInputOptions;

  get selectOptions(): SelectOption[] {
    return (this.options.options as SelectOption[]) || [];
  }
}
