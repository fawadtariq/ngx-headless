import { FormControl } from "@angular/forms";
import { FormkitControlClasses } from "@ngx-headless/formkit";

export type ControlInputOptions = {

  //shared & common properties
  control: FormControl<any>;
  name: string;
  placeholder: string;
  dir: 'ltr' | 'rtl' | undefined;
  classes?: FormkitControlClasses | undefined;
  disabled?: boolean | undefined;

  //input-specific properties

  //Select, RadioGroup
  options?: { label: string; value: any }[] | undefined;


};