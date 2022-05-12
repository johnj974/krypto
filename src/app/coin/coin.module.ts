import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoinRoutingModule } from './coin-routing.module';
import { CoinDisplayComponent } from './coin-display/coin-display.component';
import { CoinMainComponent } from './coin-main/coin-main.component';
import { CoinChartComponent } from './coin-chart/coin-chart.component';


@NgModule({
  declarations: [
    CoinDisplayComponent,
    CoinMainComponent,
    CoinChartComponent
  ],
  imports: [
    CommonModule,
    CoinRoutingModule
  ]
})
export class CoinModule { }
