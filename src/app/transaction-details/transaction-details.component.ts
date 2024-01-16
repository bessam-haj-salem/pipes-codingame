import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-transaction-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './transaction-details.component.html',
  styleUrl: './transaction-details.component.scss'
})
export class TransactionDetailsComponent {
  @Input()
  public currency!: string;

  @Input()
  public timeOfTransaction!: Date;

  @Input()
  public amount!: number;

  @Input()
  public fee!: number;

}
