import { Component, OnInit } from '@angular/core';
import { CoinInterface } from 'src/app/models/coin.interface';
import { CoinService } from 'src/app/services/coin.service';

@Component({
  selector: 'app-home-banner',
  templateUrl: './home-banner.component.html',
  styleUrls: ['./home-banner.component.scss'],
})
export class HomeBannerComponent implements OnInit {
  //.
  topCoins: CoinInterface[];
  constructor(private coinService: CoinService) {}

  ngOnInit(): void {
    this.coinService.getTrendingCoins().subscribe((data) => {
      this.topCoins = data;
      console.log(this.topCoins);
    });
  }
}
