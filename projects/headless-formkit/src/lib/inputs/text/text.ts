import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { FormControl, ReactiveFormsModule } from "@angular/forms";

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
            class="w-full rounded-md px-3 py-1.5 text-sm outline-2 -outline-offset-1"
            [ngClass]="{
              'cursor-not-allowed' : control.disabled,
                        'border-red-700 outline-red-700 focus:outline-red-700': control.invalid && control.touched,
                        'border-gray-300 outline-transparent focus:outline-adio-600': !(control.invalid && control.touched)
                      }"
  />`,
})

export class TextField {
  @Input() control!: FormControl
  @Input() name!: string;
  @Input() label?: string;
  @Input() value?: any;
  @Input() disabled!: boolean;
  @Input() placeholder?: string;

}