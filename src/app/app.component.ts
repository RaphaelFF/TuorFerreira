import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/folder/Ferreira Gomes', icon: 'home' },
    { title: 'Conheça Ferreira Gomes', url: '/folder/Conheça Ferreira Gomes', icon: 'map' },
    { title: 'Hotelaria', url: '/folder/Hotelaria', icon: 'bed' },
    { title: 'Gastronomia', url: '/folder/Gastronomia', icon: 'restaurant' },
    { title: 'Comércios e Serviços', url: '/folder/Comércios e Serviços', icon: 'storefront' },
    { title: 'Delivery', url: '/folder/Delivery', icon: 'fast-food' },
    { title: 'Utilidade Pública', url: '/folder/Utilidade Pública', icon: 'call' },
  ];
  
}
