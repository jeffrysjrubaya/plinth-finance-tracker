import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-accounts',
  imports: [MatCardModule, MatIconModule, CommonModule, MatMenuModule, MatDividerModule, MatButtonModule],
  templateUrl: './accounts.html',
  styleUrl: './accounts.css',
})
export class Accounts {
  accounts = [
    {
      name: 'Main Checking',
      type: 'Checking',
      lastFour: '8821',
      balance: 12450.0,
      icon: 'account_balance',
      ownership: 'Joint',
      userPercent: 40,
      partnerPercent: 60,
    },
    {
      name: 'Emergency Fund',
      type: 'Savings',
      lastFour: '0032',
      balance: 25000.0,
      icon: 'savings',
      ownership: 'Joint',
      userPercent: 50,
      partnerPercent: 50,
    },
    {
      name: 'Travel Credit Card',
      type: 'Credit',
      lastFour: '9910',
      balance: -1240.5,
      icon: 'credit_card',
      ownership: 'Personal',
      userPercent: 100,
      partnerPercent: 0,
    },
  ];
}
