import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { FormControl, ReactiveFormsModule } from "@angular/forms";
import { FormkitControlClasses } from '../../config/formkit-config.service';

export interface SelectOption {
  label: string;
  value: any;
  disabled?: boolean;
}

@Component({
  selector: 'SelectField',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  template: `
    <select
      *ngIf="control"
      [id]="name"
      [formControl]="control"
      [attr.dir]="dir"
      [ngClass]="classes?.input"
    >
      <option value="" *ngIf="placeholder" disabled>{{ placeholder }}</option>
      <option 
        *ngFor="let option of options" 
        [value]="option.value"
        [disabled]="option.disabled"
      >
        {{ option.label }}
      </option>
    </select>
  `,
})
export class SelectField {
  @Input() control!: FormControl;
  @Input() name!: string;
  @Input() placeholder?: string;
  @Input() options: SelectOption[] = [];
  @Input() dir?: 'ltr' | 'rtl';
  @Input() classes?: FormkitControlClasses;
}
