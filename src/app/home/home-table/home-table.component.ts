import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CoinInterface } from 'src/app/models/coin.interface';
import { CoinService } from 'src/app/services/coin.service';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-home-table',
  templateUrl: './home-table.component.html',
  styleUrls: ['./home-table.component.scss'],
})
export class HomeTableComponent implements OnInit {
  //.
  dataSource!: MatTableDataSource<any>;
  displayedColumns = [
    'name',
    'current_price',
    'price_change_percentage_24h',
    'market_cap',
  ];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  applyFilter(e: Event) {
    const filterValue = (e.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  constructor(private coinService: CoinService) {}

  ngOnInit(): void {
    this.coinService.getAllCoins().subscribe((data: CoinInterface[]) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
}
