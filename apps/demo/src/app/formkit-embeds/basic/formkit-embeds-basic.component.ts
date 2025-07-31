import { Component } from '@angular/core';
import { FormkitWrapperComponent, FormkitFieldComponent, TextAreaField } from '@ngx-headless/formkit';
import { CommonModule } from '@angular/common';
import { FormGroup, ValidatorFn, Validators } from '@angular/forms';

@Component({
    selector: 'formkit-embeds-basic',
    standalone: true,
    templateUrl: './formkit-embeds-basic.component.html',
    imports: [CommonModule, FormkitWrapperComponent, FormkitFieldComponent, TextAreaField],
})
export class FormkitEmbedsBasicComponent {
    handleSubmit(form: FormGroup) {
        console.log('Form submitted with:', form.value);
    }

    getValidator(labels: string[]) {
        const validators: ValidatorFn[] = [];
        if (labels.includes('required')) {
            validators.push(Validators.required);
        }
        if (labels.includes('email')) {
            validators.push(Validators.email);
        }
        return validators;
    }
}
