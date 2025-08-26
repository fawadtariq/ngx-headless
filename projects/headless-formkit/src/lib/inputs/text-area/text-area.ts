import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { ControlInputOptions } from '../../types/control-input';

@Component({
  selector: 'TextAreaField',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  template: `
          <textarea
          *ngIf="options.control"
            [id]="options.name"
            [formControl]="options.control"
            [attr.placeholder]="options.placeholder"
            [attr.dir]="options.dir"
            [rows]="4"
            [ngClass]="options.classes?.input"
          ></textarea>`,
})

export class TextAreaField {
  @Input() options!: ControlInputOptions;

}
