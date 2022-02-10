import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HarrypotterDetailComponent } from './components/harrypotter-detail/harrypotter-detail.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'gameofthrones', loadChildren: () => import('./components/gameofthrones/gameofthrones.module').then(m => m.GameofthronesModule) },
  { path: 'harrypotter', loadChildren: () => import('./components/harrypotter/harrypotter.module').then(m => m.HarrypotterModule) },
  { path: 'harrypotter/:id', component: HarrypotterDetailComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
