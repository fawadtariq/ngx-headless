import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { FormControl, ReactiveFormsModule } from "@angular/forms";
import { FormkitControlClasses } from '../../config/formkit-config.service';

export interface RadioOption {
  label: string;
  value: any;
  disabled?: boolean;
}

@Component({
  selector: 'RadioGroupField',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  template: `
    <div *ngIf="control" [attr.dir]="dir">
      <label 
        *ngFor="let option of options; trackBy: trackByValue" 
        [ngClass]="classes?.label"
      >
        <input
          type="radio"
          [name]="name"
          [value]="option.value"
          [formControl]="control"
          [disabled]="option.disabled || false"
          [ngClass]="classes?.input"
        />
        {{ option.label }}
      </label>
    </div>
  `,
})
export class RadioGroupField {
  @Input() control!: FormControl;
  @Input() name!: string;
  @Input() options: RadioOption[] = [];
  @Input() dir?: 'ltr' | 'rtl';
  @Input() classes?: FormkitControlClasses;

  trackByValue(index: number, option: RadioOption): any {
    return option.value;
  }
}
