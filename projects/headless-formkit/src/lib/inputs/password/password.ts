import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { ControlInputOptions } from '../../types/control-inputs';

@Component({
  selector: 'PasswordField',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  template: `
    <div *ngIf="options.control" [attr.dir]="options.dir">
      <input
        [id]="options.name"
        [type]="showPassword ? 'text' : 'password'"
        [formControl]="options.control"
        [attr.placeholder]="options.placeholder"
        [attr.dir]="options.dir"
        [attr.autocomplete]="options.autocomplete || 'current-password'"
        [ngClass]="options.classes?.input"
      />
      <button
        type="button"
        (click)="togglePasswordVisibility()"
        [attr.aria-label]="showPassword ? 'Hide password' : 'Show password'"
        [ngClass]="options.classes?.help"
      >
        {{ showPassword ? 'Hide' : 'Show' }}
      </button>
    </div>
  `,
})
export class PasswordField {
  @Input() options!: ControlInputOptions;

  showPassword: boolean = false;

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
}
