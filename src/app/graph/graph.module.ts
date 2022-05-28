import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GraphRoutingModule } from './graph-routing.module';
import { GraphMainComponent } from './graph-main/graph-main.component';


@NgModule({
  declarations: [
    GraphMainComponent
  ],
  imports: [
    CommonModule,
    GraphRoutingModule
  ]
})
export class GraphModule { }
