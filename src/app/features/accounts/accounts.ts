import { CommonModule } from '@angular/common';
import { Component, computed, inject, model, OnInit, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { Account, AccountsService } from './services/accounts';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddAccount } from './dialog/add-account/add-account';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonToggle, MatButtonToggleGroup } from '@angular/material/button-toggle';

@Component({
  selector: 'app-accounts',
  imports: [
    MatCardModule,
    MatIconModule,
    CommonModule,
    MatMenuModule,
    MatDividerModule,
    MatButtonModule,
    MatChipsModule,
    MatProgressSpinner,
    MatProgressBarModule,
    MatButtonToggleGroup,
    MatButtonToggle,
  ],
  templateUrl: './accounts.html',
  styleUrl: './accounts.css',
})
export class Accounts implements OnInit {
  readonly animal = signal('');
  readonly name = model('');
  readonly dialog = inject(MatDialog);

  service = inject(AccountsService);
  accounts = signal<Account[]>([]);
  isLoading = true;

  totalAssets: number = 0;
  isSyncing: boolean = false;
  lastSynced: number = Date.now();

  categories: any[] = [];
  filterType = signal('');

  ngOnInit(): void {
    this.service.getAccount().subscribe((result) => {
      this.accounts.set(result);

      this.totalAssets = result.map((item) => item.amount).reduce((sum, price) => sum + price, 0);
      this.categories = [
        ...new Set(result.map((item) => item.accountCategory.accountCategoryName)),
      ];

      this.lastSynced = Date.now();
      this.filterType.set('all');
      this.isLoading = false;
    });
  }

  refreshData() {
    this.ngOnInit();
  }

  // The Computed Signal (The magic happens here)
  filteredAccounts = computed(() => {
    const currentFilter = this.filterType();
    const allAccounts = this.accounts();

    if (currentFilter === 'all') {
      return allAccounts;
    }

    return allAccounts.filter((acc) => acc.accountCategory.accountCategoryName.toLowerCase() === currentFilter.toLowerCase());
  });

  // Method called by your button toggle
  updateFilter(type: string) {
    this.filterType.set(type);
    console.log(type);
  }

  openAddAccountDialog(): void {
    const dialogRef = this.dialog.open(AddAccount, {
      width: '400px',
      disableClose: true, // Prevents closing by clicking outside (good for forms)
      data: { action: 'CREATE' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log(result);
        this.ngOnInit();
      }
    });
  }

  openUpdateAccountDialog(account: Account): void {
    const dialogRef = this.dialog.open(AddAccount, {
      width: '400px',
      disableClose: true, // Prevents closing by clicking outside (good for forms)
      data: { account: account, action: 'UPDATE' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log(result);
        this.ngOnInit();
      }
    });
  }
}
