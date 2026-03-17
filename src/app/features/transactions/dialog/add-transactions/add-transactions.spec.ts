import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTransactions } from './add-transactions';

describe('AddTransactions', () => {
  let component: AddTransactions;
  let fixture: ComponentFixture<AddTransactions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddTransactions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTransactions);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
