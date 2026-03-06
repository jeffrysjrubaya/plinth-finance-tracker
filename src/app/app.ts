import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Auth } from './core/auth/auth';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('fta-frontend');

  // Inject the service
  private authService = inject(Auth);

  // Expose the signal to the template if needed
  isLoggedIn = this.authService.isLoggedIn;

  onLogout() {
    this.authService.logout();
  }
}
