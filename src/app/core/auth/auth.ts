import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  // Use a Signal to track login state across the whole app
  isLoggedIn = signal<boolean>(this.hasToken());

  constructor(private router: Router) {}

  private hasToken(): boolean {
    return !!localStorage.getItem('token');
  }

  login(token: string) {
    localStorage.setItem('token', token);
    this.isLoggedIn.set(true);
    this.router.navigate(['/dashboard']);
  }

  logout() {
    console.log('User logged out');
    localStorage.removeItem('token');
    this.isLoggedIn.set(false);
    this.router.navigate(['/auth/login']);
  }
}
