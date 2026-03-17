import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import { Account } from '../../accounts/services/accounts';

@Injectable({
  providedIn: 'root',
})
export class TransactionsService {
  private readonly apiUrl = environment.apiUrl;

  http = inject(HttpClient);

  getTransactions(): Observable<any[]> {
    // Returns an Observable so the component can 'subscribe' to the data stream
    return this.http.get<any[]>(`${this.apiUrl}/transactions`);
  }

  getTransactionStatus() : Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/transactionStatus`);
  }
}
