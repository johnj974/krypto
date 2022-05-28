import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeHomeComponent } from './home/home-home/home-home.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'coin/:id',
    loadChildren: () => import('./coin/coin.module').then((m) => m.CoinModule),
  },
  {
    path: 'graph/:id',
    loadChildren: () =>
      import('./graph/graph.module').then((m) => m.GraphModule),
  },

  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
