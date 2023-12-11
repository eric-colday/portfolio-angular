import { Routes } from '@angular/router';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';

export const routes: Routes = [
    {
        path: '',
        title: 'Accueil',
        component: HomeComponent
    },
    {
        path: 'products',
        title: 'Produits',
        component: ProductsComponent
    },
    {
        path: 'checkout',
        title: 'Panier',
        component: CheckoutComponent
    },
];
