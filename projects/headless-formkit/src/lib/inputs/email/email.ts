import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { FormControl, ReactiveFormsModule } from "@angular/forms";
import { FormkitControlClasses } from '../../config/formkit-config.service';
import { ControlInputOptions } from "../../types/control-inputs";

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
      [attr.autocomplete]="'email'"
      [ngClass]="options.classes?.input"
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

  @Input() options!: ControlInputOptions;
}
