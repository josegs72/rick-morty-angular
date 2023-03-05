
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
    path:'character-list', loadChildren: () => import('./pages/character-list/character-list.module').then(m => m.CharacterListModule)
  },
  {
    path:'characters-detail/:id', loadChildren: () => import('./pages/character-details/character-details.module').then(m => m.CharacterDetailsModule)
  },
 
{
  path: 'create-character',loadChildren: () => import('./pages/create-character/create-character.module').then(m => m.CreateCharacterModule)
  },
  {
  path: 'personajes',
  loadChildren: () => import('./pages/personajes/personajes.module').then(m => m.PersonajesModule)
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
