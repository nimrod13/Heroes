import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesResolverService } from './heroes-resolver.service';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: 'heroes',
    loadChildren: () => import('./heroes/heroes.module').then(m => m.HeroesModule),
    resolve: [HeroesResolverService]
  },
  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'detail/:id',
    // loadChildren: './hero-detail/details.module#DetailsModule',
    loadChildren: () => import('./hero-detail/details.module').then(m => m.DetailsModule),
    resolve: [HeroesResolverService]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top',
    useHash: true,
    initialNavigation: 'enabled'
  })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
