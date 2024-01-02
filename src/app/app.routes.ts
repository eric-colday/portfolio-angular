import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { IllustrationsComponent } from './pages/illustrations/illustrations.component';
import { WebsiteComponent } from './pages/website/website.component';
import { DetailsComponent } from './pages/details/details.component';

export const routes: Routes = [
    {
        path: '',
        title: 'Accueil',
        component: HomeComponent
    },
    {
        path: 'portfolio',
        title: 'Portfolio',
        component: PortfolioComponent
    },
    {
        path: 'portfolio/illustrations',
        title: 'Illustrations',
        component: IllustrationsComponent
    },
    {
        path: 'portfolio/websites',
        title: 'Websites',
        component: WebsiteComponent
    },
    {
        path: 'portfolio/websites/:id',
        // path: 'portfolio/websites/details',
        title: 'Details',
        component: DetailsComponent
    },
    {
        path: '**',
        title: 'introuvable',
        component: NotfoundComponent
    },
];
