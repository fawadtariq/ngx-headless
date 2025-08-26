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
import { ControlInputOptions } from '../types/control-input';
import { VALIDATOR_METADATA } from '../types/validator-metadata';

@Component({
  selector: 'FormkitFieldComponent',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, TextAreaField, TextField, SelectField, CheckboxField, RadioGroupField, SwitchField, PasswordField, EmailField, CommonModule],
  template: `
  <div [ngClass]="mergedClasses.wrapper" [attr.dir]="dir">
    <label *ngIf="label" [for]="name" [ngClass]="mergedClasses.label">{{ label }}</label>

    <ng-container [ngSwitch]="type">
      <TextAreaField *ngSwitchCase="'textarea'" [options]="buildControlOptions()" />
      <SelectField *ngSwitchCase="'select'" [options]="buildControlOptions()" />
      <CheckboxField *ngSwitchCase="'checkbox'" [options]="buildControlOptions()" />
      <RadioGroupField *ngSwitchCase="'radio'" [options]="buildControlOptions()" />
      <SwitchField *ngSwitchCase="'switch'" [options]="buildControlOptions()" />
      <PasswordField *ngSwitchCase="'password'" [options]="buildControlOptions()" />
      <EmailField *ngSwitchCase="'email'" [options]="buildControlOptions()" />
      <TextField *ngSwitchDefault [options]="buildControlOptions()" />
    </ng-container>

    <div *ngIf="control?.invalid && control?.touched && inlineErrors" [ngClass]="mergedClasses.error">
      <ng-container *ngFor="let errorKey of getErrorKeys()">
        {{ getValidationMessage(errorKey) || getDefaultValidationMessage(errorKey) }}
      </ng-container>
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

  buildControlOptions(): ControlInputOptions {
    return {
      control: this.control,
      name: this.name,
      placeholder: this.placeholder,
      dir: this.dir,
      classes: this.mergedClasses,
      disabled: this.disabled,
      value: this.value,
      options: this.options,
      autocomplete: this.autocomplete,
      label: this.label
    };
  }

  getErrorKeys(): string[] {
    return this.control?.errors ? Object.keys(this.control.errors) : [];
  }

  getDefaultValidationMessage(ruleName: string): string {
    return VALIDATOR_METADATA[ruleName]?.defaultMessage || 'Invalid input.';
  }

  getValidationMessage(ruleName: string): string | null {
    return this.configService.getValidationMessage(ruleName, {
      name: this.label || this.name,
      value: this.control?.value
    });
  }
}
