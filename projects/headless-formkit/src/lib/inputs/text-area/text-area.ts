import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { FormControl, ReactiveFormsModule } from "@angular/forms";

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
            [rows]="rows ||  4"
            class="w-full rounded-md px-3 py-1.5 text-sm outline-2 -outline-offset-1"
            [ngClass]="{
                        'border-red-700 outline-red-700 focus:outline-red-700': control.invalid && control.touched,
                        'border-gray-300 outline-transparent focus:outline-adio-600': !(control.invalid && control.touched)
                      }"
          ></textarea>`,
})

export class TextAreaField {
  @Input() control!: FormControl
  @Input() name!: string;
  @Input() label?: string;
  @Input() placeholder?: string;
  @Input() rows!: number;

}