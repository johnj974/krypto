import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CoinInterface } from 'src/app/models/coin.interface';
import { CoinService } from 'src/app/services/coin.service';

@Component({
  selector: 'app-coin-display',
  templateUrl: './coin-display.component.html',
  styleUrls: ['./coin-display.component.scss'],
})
export class CoinDisplayComponent implements OnInit {
  //.
  selectedCoin;
  constructor(
    private route: ActivatedRoute,
    private coinService: CoinService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.coinService.getSingleCoin(data.id).subscribe((coin) => {
        this.selectedCoin = coin;
        console.log(this.selectedCoin);
      });
    });
  }
}
