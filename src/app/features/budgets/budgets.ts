import { CommonModule, CurrencyPipe, PercentPipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-budgets',
  imports: [
    CommonModule,
    MatCardModule,
    MatProgressBarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    CurrencyPipe,
    PercentPipe,
  ],
  templateUrl: './budgets.html',
  styleUrl: './budgets.css',
})
export class Budgets {
  savingsGoals = [
    { name: 'First Home', target: 50000, current: 32000, icon: 'home', color: '#6366f1' },
    { name: 'New Car', target: 15000, current: 3190, icon: 'directions_car', color: '#22c55e' },
    { name: 'Vacation', target: 5000, current: 1200, icon: 'flight', color: '#f59e0b' },
  ];

  monthlyBudgets = [
    { category: 'Groceries', limit: 600, spent: 450, icon: 'restaurant', color: '#6366f1' },
    {
      category: 'Entertainment',
      limit: 200,
      spent: 180,
      icon: 'confirmation_number',
      color: '#a855f7',
    },
    { category: 'Utilities', limit: 300, spent: 310, icon: 'bolt', color: '#ef4444' },
  ];
}
