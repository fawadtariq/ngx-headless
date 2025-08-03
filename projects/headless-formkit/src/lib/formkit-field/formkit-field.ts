import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators, ValidatorFn } from '@angular/forms';
import { CommonModule, NgIf } from '@angular/common';
import { TextAreaField } from '../inputs/text-area/text-area';
import { TextField } from "../inputs/text/text";
import { SelectField } from '../inputs/select/select';
import { CheckboxField } from '../inputs/checkbox/checkbox';
import { RadioGroupField } from '../inputs/radio-group/radio-group';
import { SwitchField } from '../inputs/switch/switch';
import { PasswordField } from '../inputs/password/password';
import { EmailField } from '../inputs/email/email';
import { ValidationParserService } from '../validation/validation-parser.service';
import { FormkitConfigService, FormkitControlClasses } from '../config/formkit-config.service';

@Component({
  selector: 'FormkitFieldComponent',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, TextAreaField, TextField, SelectField, CheckboxField, RadioGroupField, SwitchField, PasswordField, EmailField, CommonModule],
  template: `
  <div [ngClass]="mergedClasses.wrapper" [attr.dir]="dir">
    <label *ngIf="label" [for]="name" [ngClass]="mergedClasses.label">{{ label }}</label>

    <ng-container [ngSwitch]="type">
      <TextAreaField 
        *ngSwitchCase="'textarea'"
        [control]="control" 
        [name]="name" 
        [placeholder]="placeholder" 
        [dir]="dir"
        [classes]="mergedClasses"
      />
      
      <SelectField 
        *ngSwitchCase="'select'"
        [control]="control" 
        [name]="name" 
        [placeholder]="placeholder" 
        [dir]="dir"
        [options]="options || []"
        [classes]="mergedClasses"
      />
      
      <CheckboxField 
        *ngSwitchCase="'checkbox'"
        [control]="control" 
        [name]="name" 
        [dir]="dir"
        [classes]="mergedClasses"
      />
      
      <RadioGroupField 
        *ngSwitchCase="'radio'"
        [control]="control" 
        [name]="name" 
        [dir]="dir"
        [options]="options || []"
        [classes]="mergedClasses"
      />
      
      <SwitchField 
        *ngSwitchCase="'switch'"
        [control]="control" 
        [name]="name" 
        [dir]="dir"
        [classes]="mergedClasses"
      />
      
      <PasswordField 
        *ngSwitchCase="'password'"
        [control]="control" 
        [name]="name" 
        [placeholder]="placeholder" 
        [dir]="dir"
        [classes]="mergedClasses"
      />
      
      <EmailField 
        *ngSwitchCase="'email'"
        [control]="control" 
        [name]="name" 
        [placeholder]="placeholder" 
        [dir]="dir"
        [classes]="mergedClasses"
      />
      
      <TextField 
        *ngSwitchDefault
        [disabled]="disabled == true ? true : false"
        [value]="value"
        [control]="control" 
        [name]="name" 
        [placeholder]="placeholder" 
        [dir]="dir"
        [classes]="mergedClasses"
      />
    </ng-container>

    <div *ngIf="control?.invalid && control?.touched && inlineErrors" [ngClass]="mergedClasses.error">
      <ng-container *ngIf="control.errors?.['required']">{{ getValidationMessage('required') || 'This field is required.' }}</ng-container>
      <ng-container *ngIf="control.errors?.['email']">{{ getValidationMessage('email') || 'Invalid email format.' }}</ng-container>
      <ng-container *ngIf="control.errors?.['minlength']">{{ getValidationMessage('minlength') || 'Too short.' }}</ng-container>
      <ng-container *ngIf="control.errors?.['maxlength']">{{ getValidationMessage('maxlength') || 'Too long.' }}</ng-container>
      <ng-container *ngIf="control.errors?.['min']">{{ getValidationMessage('min') || 'Value is too small.' }}</ng-container>
      <ng-container *ngIf="control.errors?.['max']">{{ getValidationMessage('max') || 'Value is too large.' }}</ng-container>
      <ng-container *ngIf="control.errors?.['pattern']">{{ getValidationMessage('pattern') || 'Invalid format.' }}</ng-container>
      <ng-container *ngIf="control.errors?.['alpha']">{{ getValidationMessage('alpha') || 'Only alphabetical characters allowed.' }}</ng-container>
      <ng-container *ngIf="control.errors?.['alphanumeric']">{{ getValidationMessage('alphanumeric') || 'Only letters and numbers allowed.' }}</ng-container>
      <ng-container *ngIf="control.errors?.['number']">{{ getValidationMessage('number') || 'Must be a valid number.' }}</ng-container>
      <ng-container *ngIf="control.errors?.['url']">{{ getValidationMessage('url') || 'Must be a valid URL.' }}</ng-container>
    </div>
  </div>
  `,
})
export class FormkitFieldComponent implements OnInit {
  form!: FormGroup;
  @Input() name!: string;
  @Input() type: 'input' | 'textarea' | 'select' | 'checkbox' | 'radio' | 'switch' | 'password' | 'email' = 'input';
  @Input() label?: string;
  @Input() placeholder?: string;
  @Input() inlineErrors?: boolean;
  @Input() validators?: ValidatorFn[];
  @Input() validation?: string;
  @Input() classes?: FormkitControlClasses;
  @Input() value?: any;
  @Input() disabled?: boolean;
  @Input() options?: { label: string; value: any }[];
  @Input() autocomplete: string = 'on';
  @Input() dir?: 'ltr' | 'rtl';

  mergedClasses: FormkitControlClasses = {};

  constructor(
    private validationParser: ValidationParserService,
    private configService: FormkitConfigService
  ) {}


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

    const globalClasses = this.configService.getGlobalClasses();
    const controlClasses = this.configService.getControlClasses(this.type);
    this.mergedClasses = this.configService.mergeClasses(globalClasses, controlClasses, this.classes || {});
  }

  getValidationMessage(ruleName: string): string | null {
    return this.configService.getValidationMessage(ruleName, {
      name: this.label || this.name,
      value: this.control?.value
    });
  }
}
