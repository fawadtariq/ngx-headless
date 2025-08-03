import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { FormControl, ReactiveFormsModule } from "@angular/forms";
import { FormkitControlClasses } from '../../config/formkit-config.service';

@Component({
  selector: 'EmailField',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  template: `
    <input
      *ngIf="control"
      type="email"
      [id]="name"
      [formControl]="control"
      [attr.placeholder]="placeholder"
      [attr.dir]="dir"
      [attr.autocomplete]="autocomplete"
      [ngClass]="classes?.input"
    />
  `,
})
export class EmailField {
  @Input() control!: FormControl;
  @Input() name!: string;
  @Input() placeholder?: string;
  @Input() autocomplete: string = 'email';
  @Input() dir?: 'ltr' | 'rtl';
  @Input() classes?: FormkitControlClasses;
}
