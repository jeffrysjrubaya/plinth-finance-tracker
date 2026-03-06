import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule, MatNavList } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ComparisonCard } from "./components/comparison-card/comparison-card";
import { StatCard } from "./components/stat-card/stat-card";

@Component({
  selector: 'app-dashboard',
  imports: [
    CommonModule,
    MatTableModule,
    MatCardModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatDividerModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatSidenavModule,
    CurrencyPipe,
    ComparisonCard,
    StatCard
],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  displayedColumns: string[] = ['user', 'description', 'amount'];

  // Example data showing joint interaction
  transactions = [
    {
      avatar: 'shopping_cart',
      desc: 'Grocery Run (Joint)',
      amount: -85.5,
      date: '2024-06-01',
      category: 'Groceries',
    },
    {
      avatar: 'payment',
      desc: 'Rent Payment',
      amount: -1200.0,
      date: '2024-06-01',
      category: 'Housing',
    },
    {
      avatar: 'attach_money',
      desc: 'Salary Deposit',
      amount: 3500.0,
      date: '2024-06-01',
      category: 'Income',
    },
  ];

  partnerLogs = [
    {
      user: 'Jamilah Anne',
      action: 'flagged a $150 transaction at "Tech Gear Shop" as "Needs Review"',
      time: '12 mins ago',
      icon: 'priority_high',
      type: 'alert',
    },
    {
      user: 'Jamilah Anne',
      action: 'approved the monthly rent payment from the Joint Account',
      time: '2 hours ago',
      icon: 'check_circle',
      type: 'info',
    },
    {
      user: 'Jamilah Anne',
      action: 'updated the "Grocery" budget limit to $600',
      time: '5 hours ago',
      icon: 'edit',
      type: 'info',
    },
    {
      user: 'Jamilah Anne',
      action: 'viewed the "Savings Goals" report',
      time: 'Yesterday',
      icon: 'visibility',
      type: 'info',
    },
    {
      user: 'Jamilah Anne',
      action: 'added a comment to "Electric Bill": "Seems higher than last month?"',
      time: '1 day ago',
      icon: 'chat_bubble_outline',
      type: 'info',
    },
  ];
}
