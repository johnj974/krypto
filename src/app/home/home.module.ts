import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeBannerComponent } from './home-banner/home-banner.component';
import { HomeTableComponent } from './home-table/home-table.component';
import { HomeHomeComponent } from './home-home/home-home.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [HomeBannerComponent, HomeTableComponent, HomeHomeComponent],
  imports: [CommonModule, HomeRoutingModule, MaterialModule],
})
export class HomeModule {}
