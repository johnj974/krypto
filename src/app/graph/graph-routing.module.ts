import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraphMainComponent } from './graph-main/graph-main.component';

const routes: Routes = [
  {
    path: '',
    component: GraphMainComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GraphRoutingModule {}
