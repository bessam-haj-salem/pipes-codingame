import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionDetailsComponent } from './transaction-details.component';
import { By } from '@angular/platform-browser';

describe('TransactionDetailsComponent', () => {
  let component: TransactionDetailsComponent;
  let fixture: ComponentFixture<TransactionDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransactionDetailsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TransactionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display EUR', () => {
    component.currency = 'EUR';
    component.amount = 312.56;
    fixture.detectChanges();
    const amountDiv = fixture.debugElement.query(By.css('#amount'));
    expect(amountDiv.nativeElement.textContent).toEqual('€000,000,312.56');
  });

  it('should display %', () => {
    component.fee = 0.12;
    fixture.detectChanges();
    const amountDiv = fixture.debugElement.query(By.css('#fee'));
    expect(amountDiv.nativeElement.textContent).toEqual('12.00%');
  });

  it('should display date', () => {
    component.timeOfTransaction = new Date(1997, 6, 1, 12, 32, 1);
    fixture.detectChanges();
    const amountDiv = fixture.debugElement.query(By.css('#time'));
    expect(amountDiv.nativeElement.textContent).toEqual('27: 1997 J 01 12-32-01');
  });
});
