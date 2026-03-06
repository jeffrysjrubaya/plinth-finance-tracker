import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-forgot-password-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatButtonModule, ReactiveFormsModule],
  template: `
    <h2 mat-dialog-title>Reset Password</h2>
    <mat-dialog-content>
      <p>Enter your email address and we'll send you a link to reset your password.</p>
      <mat-form-field appearance="outline" class="full-width">
        <mat-label>Email Address</mat-label>
        <input matInput [formControl]="emailControl" placeholder="email@example.com">
        <mat-error *ngIf="emailControl.hasError('email')">Invalid email</mat-error>
      </mat-form-field>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button mat-dialog-close>Cancel</button>
      <button mat-flat-button color="primary" [disabled]="emailControl.invalid" (click)="submit()">Send Reset Link</button>
    </mat-dialog-actions>
  `,
  styles: [`.full-width { width: 100%; margin-top: 10px; }`]
})
export class PasswordRecovery {
emailControl = new FormControl('', [Validators.required, Validators.email]);

  constructor(private dialogRef: MatDialogRef<PasswordRecovery>) {}

  submit() {
    if (this.emailControl.valid) {
      console.log('Reset link sent to:', this.emailControl.value);
      this.dialogRef.close();
    }
  }
}
