import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { FormControl, ReactiveFormsModule } from "@angular/forms";
import { FormkitControlClasses } from '../../config/formkit-config.service';

@Component({
  selector: 'CheckboxField',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  template: `
    <input
      *ngIf="control"
      type="checkbox"
      [id]="name"
      [formControl]="control"
      [attr.dir]="dir"
      [ngClass]="classes?.input"
    />
  `,
})
export class CheckboxField {
  @Input() control!: FormControl;
  @Input() name!: string;
  @Input() dir?: 'ltr' | 'rtl';
  @Input() classes?: FormkitControlClasses;
}
