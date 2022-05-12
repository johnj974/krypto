import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CoinService } from 'src/app/services/coin.service';

@Component({
  selector: 'app-coin-chart',
  templateUrl: './coin-chart.component.html',
  styleUrls: ['./coin-chart.component.scss'],
})
export class CoinChartComponent implements OnInit {
  //.
  constructor(
    private route: ActivatedRoute,
    private coinService: CoinService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      console.log(`chart ${data.id}`);
    });
  }
}
