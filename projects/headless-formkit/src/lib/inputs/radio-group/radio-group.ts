import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { ControlInputOptions, RadioOption } from '../../types/control-inputs';

@Component({
  selector: 'RadioGroupField',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  template: `
    <div *ngIf="options.control" [attr.dir]="options.dir">
      <label 
        *ngFor="let option of radioOptions; trackBy: trackByValue" 
        [ngClass]="options.classes?.label"
      >
        <input
          type="radio"
          [name]="options.name"
          [value]="option.value"
          [formControl]="options.control"
          [disabled]="option.disabled || false"
          [ngClass]="options.classes?.input"
        />
        {{ option.label }}
      </label>
    </div>
  `,
})
export class RadioGroupField {
  @Input() options!: ControlInputOptions;

  get radioOptions(): RadioOption[] {
    return (this.options.options as RadioOption[]) || [];
  }

  trackByValue(index: number, option: RadioOption): any {
    return option.value;
  }
}
