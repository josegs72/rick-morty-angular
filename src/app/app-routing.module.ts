
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path:'character', loadChildren: () => import('./pages/characters/characters.module').then(m => m.CharactersModule)
  },
  {
    path:'characters/:id', loadChildren: () => import('./pages/character-details/character-details.module').then(m => m.CharacterDetailsModule)
  },
  {
    path:'**', loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule)
  },


  
  
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
