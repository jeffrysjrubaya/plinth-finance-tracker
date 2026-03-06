import { CommonModule, CurrencyPipe, PercentPipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-billings',
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatProgressBarModule,
    MatSlideToggleModule,
    MatMenuModule,
  ],
  templateUrl: './billings.html',
  styleUrl: './billings.css',
})
export class Billings {
  upcomingBills = [
    {
      name: 'Rent/Mortgage',
      amount: 1800,
      dueDate: new Date(2026, 2, 1),
      category: 'Housing',
      isAutoPay: true,
      payer: 'Joint Account',
      isOverdue: false,
    },
    {
      name: 'Electric Bill',
      amount: 145.2,
      dueDate: new Date(2026, 2, 5),
      category: 'Utilities',
      isAutoPay: false,
      payer: 'Sarah',
      isOverdue: false,
    },
    {
      name: 'Internet',
      amount: 79.99,
      dueDate: new Date(2026, 1, 28),
      category: 'Utilities',
      isAutoPay: true,
      payer: 'You',
      isOverdue: true,
    },
  ];

  subscriptions = [
    { name: 'Netflix', cost: 15.99, logo: 'assets/netflix.png', active: true },
    { name: 'Spotify Family', cost: 16.99, logo: 'assets/spotify.png', active: true },
    { name: 'Gym Membership', cost: 51.92, logo: 'assets/gym.png', active: false },
  ];
}
