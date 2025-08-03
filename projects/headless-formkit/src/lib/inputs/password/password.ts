import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { FormControl, ReactiveFormsModule } from "@angular/forms";
import { FormkitControlClasses } from '../../config/formkit-config.service';

@Component({
  selector: 'PasswordField',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  template: `
    <div *ngIf="control" [attr.dir]="dir">
      <input
        [id]="name"
        [type]="showPassword ? 'text' : 'password'"
        [formControl]="control"
        [attr.placeholder]="placeholder"
        [attr.dir]="dir"
        [ngClass]="classes?.input"
      />
      <button
        *ngIf="showToggle"
        type="button"
        (click)="togglePasswordVisibility()"
        [attr.aria-label]="showPassword ? 'Hide password' : 'Show password'"
        [ngClass]="classes?.help"
      >
        {{ showPassword ? 'Hide' : 'Show' }}
      </button>
    </div>
  `,
})
export class PasswordField {
  @Input() control!: FormControl;
  @Input() name!: string;
  @Input() placeholder?: string;
  @Input() showToggle: boolean = true;
  @Input() dir?: 'ltr' | 'rtl';
  @Input() classes?: FormkitControlClasses;

  showPassword: boolean = false;

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
}
