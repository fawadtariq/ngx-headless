import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators, ValidatorFn } from '@angular/forms';
import { CommonModule, NgIf } from '@angular/common';
import { TextAreaField } from '../inputs/text-area/text-area';
import { TextField } from "../inputs/text/text"; // adjust path as needed

@Component({
  selector: 'FormkitFieldComponent',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, TextAreaField, TextField, CommonModule],
  template: `
  <div class="space-y-1" [attr.dir]="dir">
    <label *ngIf="label" [for]="name" class="block text-sm/6 font-medium text-gray-600">{{ label }}</label>

    <ng-container *ngIf="type === 'textarea'; else notTextArea">
      <TextAreaField 
      [control]="control" 
      [name]="name" [placeholder]="placeholder" [dir]="dir"/>
    </ng-container>


    <ng-template #notTextArea>
    <ng-container *ngIf="type === 'input'; else defaultInput">
      <TextField 
      [disabled]="disabled == true ? true : false"
      [value]="value"
      [control]="control" 
      [name]="name" [placeholder]="placeholder" [dir]="dir" />
    </ng-container>
    </ng-template>
    

    <ng-template #defaultInput>
      <input
        [id]="name"
        [type]="type"
        [formControl]="control"
        [attr.placeholder]="placeholder"
        [attr.autocomplete]="autocomplete"
        [attr.dir]="dir"
        class="w-full rounded-md border px-3 py-2 text-sm shadow-sm focus:outline-none"
      />
    </ng-template>

    <div *ngIf="control?.invalid && control?.touched && inlineErrors" class="text-red-700 text-xs">
      <ng-container *ngIf="control.errors?.['required']">This field is required.</ng-container>
      <ng-container *ngIf="control.errors?.['email']">Invalid email format.</ng-container>
      <ng-container *ngIf="control.errors?.['minlength']">Too short.</ng-container>
      <ng-container *ngIf="control.errors?.['maxlength']">Too long.</ng-container>
    </div>
  </div>
  `,
})
export class FormkitFieldComponent {
  form!: FormGroup;
  @Input() name!: string;
  @Input() type: 'input' | 'textarea' | 'radio' = 'input';
  @Input() label?: string;
  @Input() placeholder?: string;
  @Input() inlineErrors?: boolean;
  @Input() validators?: ValidatorFn[];
  @Input() value?: any;
  @Input() disabled?: boolean;
  @Input() options?: { label: string; value: any }[];
  @Input() autocomplete: string = 'on';
  @Input() dir?: 'ltr' | 'rtl';


  get control(): FormControl {
    var ctrl = this.form?.get?.(this.name) as FormControl ?? null;
    if (this.disabled == true)
      ctrl.disable();

    if (this.value) {
      ctrl.setValue(this.value)
    }

    return ctrl;
  }

  ngOnInit(): void {
    if (this.inlineErrors === undefined || this.inlineErrors === null) {
      this.inlineErrors = true;
    }
    if (this.disabled === undefined || this.disabled === null) {
      this.disabled = false;
    }
  }
}
