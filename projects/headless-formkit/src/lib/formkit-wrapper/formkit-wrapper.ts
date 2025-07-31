import { AfterContentChecked, Component, ContentChildren, EventEmitter, Input, Output, QueryList } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormkitFieldComponent } from '../formkit-field/formkit-field';
import { ToastService } from '../toast.service';

@Component({
    selector: 'FormkitWrapper',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    template: `
    <form [formGroup]="form" (ngSubmit)="handleSubmit()" class="space-y-4" [ngClass]="class">
      <ng-content></ng-content>
    </form>
  `
})
export class FormkitWrapperComponent implements AfterContentChecked {
    @Input() class: string = '';
    @Output() onSubmit = new EventEmitter<FormGroup>();
    @ContentChildren(FormkitFieldComponent, { descendants: true }) fields!: QueryList<FormkitFieldComponent>;

    form = new FormGroup({});

    constructor(private toast: ToastService) { }

    ngAfterContentChecked() {
        for (const field of this.fields) {
            const control = new FormControl('', field.validators || []);
            this.form.addControl(field.name, control);
            field.form = this.form; // inject form into field
        }
    }
    handleSubmit() {
        if (this.form.valid) {
            this.onSubmit.emit(this.form);
        } else {
            this.form.markAllAsTouched();
            const summary = getFormErrorSummary(this.form);
            this.toast.show(summary);
        }
    }
}


function getFormErrorSummary(form: FormGroup): string {
  const invalidControls = Object.entries(form.controls).filter(([_, control]) => control.invalid);
  const requiredMissing = invalidControls.filter(([_, control]) => control.errors?.['required']);
  const otherErrors = invalidControls.filter(([_, control]) =>
    Object.keys(control.errors || {}).some(e => e !== 'required')
  );

  if (invalidControls.length === 0) return '';

  // One missing required field only
  if (requiredMissing.length === 1 && otherErrors.length === 0) {
    const [fieldName] = requiredMissing[0];
    return `Please fill in the ${toLabel(fieldName)} field.`;
  }

  // Multiple missing required fields only
  if (requiredMissing.length > 1 && otherErrors.length === 0) {
    return `Please fill in all required fields.`;
  }

  // One non-required validation error
  if (otherErrors.length === 1 && requiredMissing.length === 0) {
    const [fieldName, control] = otherErrors[0];
    const errorType = Object.keys(control.errors || {})[0];

    if (errorType === 'minlength') return `${toLabel(fieldName)} is too short.`;
    if (errorType === 'maxlength') return `${toLabel(fieldName)} is too long.`;
    if (errorType === 'email') return `${toLabel(fieldName)} must be a valid email.`;
    if (errorType === 'pattern') return `${toLabel(fieldName)} format is invalid.`;

    return `${toLabel(fieldName)} is invalid.`;
  }

  // Mixed errors or multiple validation issues
  return `Please make sure all fields are filled in properly.`;
}

function toLabel(fieldName: string): string {
    return fieldName.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
}
