import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-transactions',
  imports: [
    MatTableModule,
    MatCardModule,
    MatIconModule,
    CommonModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatChipsModule,
    MatTooltipModule,
    MatDividerModule
  ],
  templateUrl: './transactions.html',
  styleUrl: './transactions.css',
})
export class Transactions {
  displayedColumns: string[] = ['partner', 'details', 'amount', 'status', 'actions'];

  dataSource = [
    {
      partnerName: 'Sarah',
      avatar: 'assets/sarah.jpg',
      categoryIcon: 'shopping_cart',
      description: 'Whole Foods Market',
      date: new Date(),
      category: 'Groceries',
      amount: -142.50,
      status: 'Flagged'
    },
    {
      partnerName: 'You',
      avatar: 'assets/me.jpg',
      categoryIcon: 'electric_bolt',
      description: 'Utility Bill - March',
      date: new Date(),
      category: 'Bills',
      amount: -85.00,
      status: 'Synced'
    }
  ];
}
