import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'conheca-fg/:id',
    loadChildren: () => import('./conheca-fg/conheca-fg.module').then( m => m.ConhecaFGPageModule)
  },
  {
    path: 'hotelaria/:id',
    loadChildren: () => import('./hotelaria/hotelaria.module').then( m => m.HotelariaPageModule)
  },
  {
    path: 'gastronomia/:id',
    loadChildren: () => import('./gastronomia/gastronomia.module').then( m => m.GastronomiaPageModule)
  },
  {
    path: 'comercio/:id',
    loadChildren: () => import('./comercio/comercio.module').then( m => m.ComercioPageModule)
  },
  {
    path: 'delivery/:id',
    loadChildren: () => import('./delivery/delivery.module').then( m => m.DeliveryPageModule)
  },
  {
    path: 'utilidade/:id',
    loadChildren: () => import('./utilidade/utilidade.module').then( m => m.UtilidadePageModule)
  },  {
    path: 'igreja',
    loadChildren: () => import('./igreja/igreja.module').then( m => m.IgrejaPageModule)
  },
  {
    path: 'igreja-p',
    loadChildren: () => import('./igreja-p/igreja-p.module').then( m => m.IgrejaPPageModule)
  }



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
