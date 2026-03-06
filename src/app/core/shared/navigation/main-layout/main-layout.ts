import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { Breadcrumb } from "../breadcrumb/breadcrumb";
import { Auth } from '../../../auth/auth';

@Component({
  selector: 'app-main-layout',
  imports: [
    RouterOutlet,
    RouterLink,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    Breadcrumb
],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css',
})
export class MainLayout {
  authService = inject(Auth);
  constructor(private router: Router) {}

  onLogout() {
    console.log('User logged out');
    localStorage.removeItem('token');
    this.authService.isLoggedIn.set(false);
    this.router.navigate(['/auth/login']);
  }
}
