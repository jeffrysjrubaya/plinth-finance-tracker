import { CommonModule } from '@angular/common';
import { Component, inject, Inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Account, AccountCategory, AccountsService } from '../../services/accounts';
import { DIALOG_DATA } from '@angular/cdk/dialog';
import { Accounts } from '../../accounts';

@Component({
  selector: 'app-add-account',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
  ],
  templateUrl: './add-account.html',
  styleUrl: './add-account.css',
})
export class AddAccount {
  service = inject(AccountsService);
  accountForm!: FormGroup;
  accountcategory: AccountCategory[] = [];

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddAccount>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  ngOnInit(): void {
    console.log(this.data);

    let account = this.data.account;

    if (account != null) {
      this.accountForm = this.fb.group({
        accountId: [account.accountId],
        accountName: [account.accountName, [Validators.required, Validators.minLength(3)]],
        accountCategoryId: [account.accountCategoryId, Validators.required],
        amount: [account.amount, [Validators.required, Validators.min(0)]],
        accountCategory: {},
      });
    } else {
      this.accountForm = this.fb.group({
        accountId: [0],
        accountName: ['', [Validators.required, Validators.minLength(3)]],
        accountCategoryId: [0, Validators.required],
        amount: [0, [Validators.required, Validators.min(0)]],
        accountCategory: {},
      });
    }

    this.service.getAccountCategory().subscribe((result) => {
      this.accountcategory = result;
    });
  }

  onSubmit() {
    if (this.accountForm.valid) {
      let formData = new FormData();
      formData.append('accountId', this.accountForm.value['accountId']);
      formData.append('accountName', this.accountForm.value['accountName']);
      formData.append('accountCategoryId', this.accountForm.value['accountCategoryId']);
      formData.append('amount', this.accountForm.value['amount']);

      // Here is where you would call your FinanceService

      if (this.data.action == 'CREATE') {
        this.service.addAccount(formData).subscribe((result) => {
          if (result) {
            this.dialogRef.close(result);
          }
        });
      } else {
        this.service.updateAccount(formData).subscribe((result) => {
          if (result) {
            this.dialogRef.close(result);
          }
        });
      }
    }
  }

  onCancel() {
    this.dialogRef.close();
  }
}
