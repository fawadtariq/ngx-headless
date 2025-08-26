import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { ControlInputOptions } from '../../types/control-inputs';

@Component({
  selector: 'TextField',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  template: `
  <input
            [value]="options.value"
            *ngIf="options.control"
            type="text"
            [id]="options.name"
            [formControl]="options.control"
            [attr.placeholder]="options.placeholder"
            [attr.dir]="options.dir"
            [disabled]="options.disabled || false"
            [ngClass]="options.classes?.input"
  />`,
})

export class TextField {
  @Input() options!: ControlInputOptions;
}
