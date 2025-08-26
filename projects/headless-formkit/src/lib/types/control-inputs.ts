import { FormControl } from "@angular/forms";
import { FormkitControlClasses } from "@ngx-headless/formkit";

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

export type ControlInputOptions = {

  //shared & common properties
  control: FormControl<any>;
  name: string;
  placeholder: string;
  dir: 'ltr' | 'rtl' | undefined;
  classes?: FormkitControlClasses | undefined;
  disabled?: boolean | undefined;
  value?: any;
  autocomplete?: string;
  label?: string;

  //input-specific properties

  //Select, RadioGroup
  options?: { label: string; value: any }[] | undefined;


};
