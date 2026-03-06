import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';
import { PasswordRecovery } from '../password-recovery/password-recovery';
import { Auth } from '../../auth';

@Component({
  selector: 'app-login',
  imports: [
    RouterLink,
    CommonModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInput,
    MatButtonModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  authService = inject(Auth);
  router = inject(Router);

  constructor(private dialog: MatDialog) {}

  hide = true; // For password visibility toggle

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  onLogin() {
    if (this.loginForm.valid) {
      console.log('Form Data:', this.loginForm.value);
      // Proceed with your authentication logic here

      this.authService.isLoggedIn.set(true);
      this.router.navigateByUrl(this.router.parseUrl('/dashboard'));
    }
  }

  openForgotPassword() {
    this.dialog.open(PasswordRecovery, {
      width: '400px',
    });
  }

}
