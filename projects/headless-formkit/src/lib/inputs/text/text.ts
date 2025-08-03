import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { FormControl, ReactiveFormsModule } from "@angular/forms";
import { FormkitControlClasses } from '../../config/formkit-config.service';

@Component({
  selector: 'TextField',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  template: `
  <input
            [value]="value"
            *ngIf="control"
            type="text"
            [id]="name"
            [formControl]="control"
            [attr.placeholder]="placeholder"
            [attr.dir]="dir"
            [ngClass]="classes?.input"
  />`,
})

export class TextField {
  @Input() control!: FormControl
  @Input() name!: string;
  @Input() label?: string;
  @Input() value?: any;
  @Input() disabled!: boolean;
  @Input() placeholder?: string;
  @Input() dir?: 'ltr' | 'rtl';
  @Input() classes?: FormkitControlClasses;

}
