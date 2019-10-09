import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'exercise01', loadChildren: './pages/exercise01/exercise01.module#Exercise01PageModule' },
  { path: 'exercise02', loadChildren: './pages/exercise02/exercise02.module#Exercise02PageModule' },
  { path: 'exercise03', loadChildren: './pages/exercise03/exercise03.module#Exercise03PageModule' },
  { path: 'exercise04', loadChildren: './pages/exercise04/exercise04.module#Exercise04PageModule' },
  { path: 'exercise05', loadChildren: './pages/exercise05/exercise05.module#Exercise05PageModule' },
  { path: 'exercise06', loadChildren: './pages/exercise06/exercise06.module#Exercise06PageModule' },
  { path: 'exercise07', loadChildren: './pages/exercise07/exercise07.module#Exercise07PageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
