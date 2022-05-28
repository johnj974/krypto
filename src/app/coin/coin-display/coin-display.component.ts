import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
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
    private router: Router,
    private coinService: CoinService
  ) {}

  toGraph() {
    console.log('working');
    this.router.navigate(['graph', this.selectedCoin.id]);
  }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.coinService.getSingleCoin(data.id).subscribe((coin) => {
        this.selectedCoin = coin;
        console.log(this.selectedCoin);
      });
    });
  }
}
