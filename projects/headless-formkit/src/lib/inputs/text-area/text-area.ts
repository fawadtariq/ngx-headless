import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { FormControl, ReactiveFormsModule } from "@angular/forms";
import { FormkitControlClasses } from '../../config/formkit-config.service';

@Component({
  selector: 'TextAreaField',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  template: `
          <textarea
          *ngIf="control"
            [id]="name"
            [formControl]="control"
            [attr.placeholder]="placeholder"
            [attr.dir]="dir"
            [rows]="rows ||  4"
            [ngClass]="classes?.input"
            
          ></textarea>`,
})

export class TextAreaField {
  // @Input() inValue: any;
  @Input() control!: FormControl
  @Input() name!: string;
  @Input() label?: string;
  @Input() placeholder?: string;
  @Input() rows!: number;
  @Input() dir?: 'ltr' | 'rtl';
  @Input() classes?: FormkitControlClasses;

  value: any;

  // ngOnInit() {
  //   if (this.inValue !== undefined) {
  //     this.value = this.inValue;
  //   } else {
  //     this.value = '';
  //   }
  // }
}
