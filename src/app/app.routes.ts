import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';

export const routes: Routes = [
    {
        path: '',
        title: 'Accueil',
        component: HomeComponent
    },
    {
        path: '**',
        title: 'introuvable',
        component: NotfoundComponent
    },
];
