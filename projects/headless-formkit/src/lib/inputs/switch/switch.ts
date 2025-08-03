import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { FormControl, ReactiveFormsModule } from "@angular/forms";
import { FormkitControlClasses } from '../../config/formkit-config.service';

@Component({
  selector: 'SwitchField',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  template: `
    <input
      *ngIf="control"
      type="checkbox"
      role="switch"
      [id]="name"
      [formControl]="control"
      [attr.dir]="dir"
      [attr.aria-checked]="control.value"
      [ngClass]="classes?.input"
    />
  `,
})
export class SwitchField {
  @Input() control!: FormControl;
  @Input() name!: string;
  @Input() dir?: 'ltr' | 'rtl';
  @Input() classes?: FormkitControlClasses;
}
