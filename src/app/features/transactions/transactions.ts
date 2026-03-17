import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AddTransactions } from './dialog/add-transactions/add-transactions';
import { MatDialog } from '@angular/material/dialog';
import { TransactionsService } from './services/transactions';

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
    MatDividerModule,
  ],
  templateUrl: './transactions.html',
  styleUrl: './transactions.css',
})
export class Transactions implements OnInit {
  dialog = inject(MatDialog);

  service = inject(TransactionsService);

  // Using a Signal for the data (modern approach)
  transactions = signal<any>([]);

  ngOnInit(): void {
    this.service.getTransactions().subscribe((result : any[]) => {
      console.log(result);
      this.transactions.set(result);
    });
  }

  // Define the columns to match the matColumnDef names in HTML
  displayedColumns: string[] = ['date', 'description', 'type', 'account', 'amount', 'status', 'actions'];

  edit(row: any) {}

  delete(row: any) {}

  openAddTransactionDialog() {
    const dialogRef = this.dialog.open(AddTransactions, {
      width: '500px',
      disableClose: true,
      data: { mode: 'create' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        // Call your service to POST the new transaction
        console.log('New Transaction:', result);
      }
    });
  }
}
