import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoinRoutingModule } from './coin-routing.module';
import { CoinDisplayComponent } from './coin-display/coin-display.component';
import { CoinMainComponent } from './coin-main/coin-main.component';


@NgModule({
  declarations: [
    CoinDisplayComponent,
    CoinMainComponent
  ],
  imports: [
    CommonModule,
    CoinRoutingModule
  ]
})
export class CoinModule { }
