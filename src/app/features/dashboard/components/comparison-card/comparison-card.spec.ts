import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparisonCard } from './comparison-card';

describe('ComparisonCard', () => {
  let component: ComparisonCard;
  let fixture: ComponentFixture<ComparisonCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComparisonCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComparisonCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
