import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

export interface Account {
  accountId: number;
  amount: number;
  accountName: string;
  accountCategoryId: number;
  accountCategory: {
    accountCategoryName: string;
  };
}

export interface AccountCategory {
  accountCategoryId: number;
  accountCategoryName: string;
}

@Injectable({
  providedIn: 'root',
})
export class AccountsService {
  private readonly apiUrl = environment.apiUrl;

  http = inject(HttpClient);

  getAccount(): Observable<Account[]> {
    // Returns an Observable so the component can 'subscribe' to the data stream
    return this.http.get<Account[]>(`${this.apiUrl}/accounts`);
  }

  getAccountCategory(): Observable<AccountCategory[]> {
    // Returns an Observable so the component can 'subscribe' to the data stream
    return this.http.get<AccountCategory[]>(`${this.apiUrl}/accountCategory`);
  }

  addAccount(formData: FormData): Observable<boolean> {
    // Returns an Observable so the component can 'subscribe' to the data stream
    return this.http.post<boolean>(`${this.apiUrl}/accounts`, formData);
  }

  updateAccount(formData: FormData): Observable<boolean> {
    // Returns an Observable so the component can 'subscribe' to the data stream
    return this.http.patch<boolean>(`${this.apiUrl}/accounts`, formData);
  }
}
