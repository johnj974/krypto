import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CoinInterface } from '../models/coin.interface';

@Injectable({
  providedIn: 'root',
})
export class CoinService {
  //.

  getAllCoins() {
    return this.http.get<CoinInterface>(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&sparkline=false`
    );
  }

  getTrendingCoins() {
    return this.http.get<CoinInterface[]>(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`
    );
  }

  //TOP 7 TRENDING COINS
  // getTrendingCoins() {
  //   return this.http.get<CoinInterface>(
  //     `https://api.coingecko.com/api/v3/search/trending`
  //   );
  // }

  constructor(private http: HttpClient) {}
}
