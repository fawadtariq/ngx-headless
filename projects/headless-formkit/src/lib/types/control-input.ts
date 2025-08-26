import { FormControl } from '@angular/forms';
import { FormkitControlClasses } from '../config/formkit-config.service';

export interface SelectOption {
  label: string;
  value: any;
  disabled?: boolean;
}

export interface RadioOption {
  label: string;
  value: any;
  disabled?: boolean;
}

export interface ControlInputOptions {
  control: FormControl;
  name: string;
  placeholder?: string;
  dir?: 'ltr' | 'rtl';
  classes?: FormkitControlClasses;
  disabled?: boolean;
  value?: any;
  options?: SelectOption[] | RadioOption[];
  autocomplete?: string;
  label?: string;
}
