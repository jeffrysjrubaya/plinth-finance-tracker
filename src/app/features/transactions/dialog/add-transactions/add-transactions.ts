import { Component, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOption, MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Account, AccountsService } from '../../../accounts/services/accounts';
import { TransactionsService } from '../../services/transactions';


@Component({
  selector: 'app-add-transactions',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './add-transactions.html',
  styleUrl: './add-transactions.css',
})
export class AddTransactions implements OnInit{
  private fb = inject(FormBuilder);
  private accountService = inject(AccountsService);
  private transactionService = inject(TransactionsService);

  accounts = signal<Account[]>([]);

  transactionForm = this.fb.group({
    description: ['', [Validators.required, Validators.minLength(3)]],
    amount: [null, [Validators.required]],
    accountId: [null, Validators.required],
    type: ['', Validators.required],
    date: [new Date(), Validators.required],
  });

  ngOnInit(): void {
    this.accountService.getAccount().subscribe((result : Account[]) => {
      console.log(result);
      this.accounts.set(result);
    });

    this.transactionService.getTransactionStatus().subscribe((result : any[]) => {
      console.log(result);
    });
  }


  onSubmit() {
    if (this.transactionForm.valid) {
      const rawValue = this.transactionForm.value;
      // Here you would call your FinanceService.addTransaction(rawValue)
      console.log('Saving Transaction:', rawValue);
    }
  }
}
