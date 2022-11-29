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
  },
  {
    path: 'igreja',
    loadChildren: () => import('./conheca-fg/igreja/igreja.module').then( m => m.IgrejaPageModule)
  },
  {
    path: 'igreja-p',
    loadChildren: () => import('./conheca-fg/igreja/igrejaJesusSalvador/igreja-p.module').then( m => m.IgrejaPPageModule)
  },
  {
    path: 'praca',
    loadChildren: () => import('./conheca-fg/praca/praca.module').then( m => m.PracaPageModule)
  },
  {
    path: 'orla',
    loadChildren: () => import('./conheca-fg/orla/orla.module').then( m => m.OrlaPageModule)
  },
  {
    path: 'sobre',
    loadChildren: () => import('./conheca-fg/sobre/sobre.module').then( m => m.SobrePageModule)
  },
  {
    path: 'hotel',
    loadChildren: () => import('./hotelaria/hotel/hotel.module').then( m => m.HotelPageModule)
  },
  {
    path: 'pousada',
    loadChildren: () => import('./hotelaria/pousada/pousada.module').then( m => m.PousadaPageModule)
  },
  {
    path: 'kitnet',
    loadChildren: () => import('./hotelaria/kitnet/kitnet.module').then( m => m.KitnetPageModule)
  },
  {
    path: 'restaurante',
    loadChildren: () => import('./gastronomia/restaurante/restaurante.module').then( m => m.RestaurantePageModule)
  },
  {
    path: 'padaria',
    loadChildren: () => import('./gastronomia/padaria/padaria.module').then( m => m.PadariaPageModule)
  },
  {
    path: 'supermecado',
    loadChildren: () => import('./comercio/supermecado/supermecado.module').then( m => m.SupermecadoPageModule)
  },
  {
    path: 'construcao',
    loadChildren: () => import('./comercio/construcao/construcao.module').then( m => m.ConstrucaoPageModule)
  },
  {
    path: 'farmacia',
    loadChildren: () => import('./comercio/farmacia/farmacia.module').then( m => m.FarmaciaPageModule)
  },
  {
    path: 'roupa',
    loadChildren: () => import('./comercio/roupa/roupa.module').then( m => m.RoupaPageModule)
  },
  {
    path: 'mecanica',
    loadChildren: () => import('./comercio/mecanica/mecanica.module').then( m => m.MecanicaPageModule)
  },
  {
    path: 'lavagem',
    loadChildren: () => import('./comercio/lavagem/lavagem.module').then( m => m.LavagemPageModule)
  },
  {
    path: 'bicicleta',
    loadChildren: () => import('./comercio/bicicleta/bicicleta.module').then( m => m.BicicletaPageModule)
  },
  {
    path: 'rio-mar',
    loadChildren: () => import('./hotelaria/hotel/rio-mar/rio-mar.module').then( m => m.RioMarPageModule)
  },
  {
    path: 'hotel-mais',
    loadChildren: () => import('./hotelaria/hotel/hotel-mais/hotel-mais.module').then( m => m.HotelMaisPageModule)
  },
  {
    path: 'lima',
    loadChildren: () => import('./hotelaria/pousada/lima/lima.module').then( m => m.LimaPageModule)
  }












];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
