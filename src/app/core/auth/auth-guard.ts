import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Auth } from './auth';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(Auth);
  const router = inject(Router);

  // Use the signal we created in the AuthService
  if (authService.isLoggedIn()) {
    return true; // Access granted
  } else {
    // Redirect to login page and keep the attempted URL for later redirection
    return router.parseUrl('/auth/login');
  }
};
