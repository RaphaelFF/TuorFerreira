import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/folder/home', icon: 'home' },
    { title: 'Conheça Ferreira Gomes', url: '/conheca-fg/:id', icon: 'map' },
    { title: 'Hotelaria', url: '/hotelaria/Hotelaria', icon: 'bed' },
    { title: 'Gastronomia', url: '/gastronomia/Gastronomia', icon: 'restaurant' },
    { title: 'Comércios e Serviços', url: '/comercio/Comércios e Serviços', icon: 'storefront' },
    { title: 'Delivery', url: '/delivery/Delivery', icon: 'fast-food' },
    { title: 'Utilidade Pública', url: '/utilidade/Utilidade Publica', icon: 'call' },
  ];
  
}
