import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CoinInterface } from 'src/app/models/coin.interface';
import { CoinService } from 'src/app/services/coin.service';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';

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
    'high_24h',
    'low_24h',
    'price_change_percentage_24h',
  ];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  toCoinDetails(row: CoinInterface) {
    console.log(row);
    this.router.navigate(['coin', row.id]);
  }

  applyFilter(e: Event) {
    const filterValue = (e.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  constructor(private coinService: CoinService, private router: Router) {}

  ngOnInit(): void {
    this.coinService.getAllCoins().subscribe((data: CoinInterface[]) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
}
