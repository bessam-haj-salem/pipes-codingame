import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TransactionDetailsComponent } from "./transaction-details/transaction-details.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, TransactionDetailsComponent]
})
export class AppComponent {
  title = 'testPipe';

  public getPresetDate(){
    return new Date(1997,6,1,12,32);
  }
}

// import { Component, Input, NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector:'transaction-component',
//   template: `
  
    
//   `
// })
// export class TransactionDetailsComponent {

//   @Input()
//   public currency: string;

//   @Input()
//   public timeOfTransaction: Date;

//   @Input()
//   public amount: number;

//   @Input()
//   public fee: number;
  
// }

// // #region Preview
// @Component({
//     template: `<transaction-component [fee]=0.02 [amount]=123.45 [currency]="'EUR'" [timeOfTransaction]='getPresetDate()'></transaction-component>`
// })
// export class PreviewComponent {
//   public getPresetDate(){
//     return new Date(1997,6,1,12,32);
//   }
//  }
// #endregion Preview

// #region Module declaration - Do not Change
// @NgModule({
//     imports: [CommonModule],
//     declarations: [PreviewComponent, TransactionDetailsComponent],
//     entryComponents: [PreviewComponent]
// })export class PreviewModule { }
// 