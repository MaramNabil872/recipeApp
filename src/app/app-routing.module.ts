import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./pages/sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'fogot-password',
    loadChildren: () => import('./pages/fogot-password/fogot-password.module').then( m => m.FogotPasswordPageModule)
  },
  {
    path: 'main-menu',
    loadChildren: () => import('./pages/main-menu/main-menu.module').then( m => m.MainMenuPageModule)
  },
  {
    path: 'breakfast',
    loadChildren: () => import('./pages/food/breakfast/breakfast.module').then( m => m.BreakfastPageModule)
  },
  {
    path: 'lunch',
    loadChildren: () => import('./pages/food/lunch/lunch.module').then( m => m.LunchPageModule)
  },
  {
    path: 'dinner',
    loadChildren: () => import('./pages/food/dinner/dinner.module').then( m => m.DinnerPageModule)
  },
  {
    path: 'snacks',
    loadChildren: () => import('./pages/food/snacks/snacks.module').then( m => m.SnacksPageModule)
  },
  {
    path: 'deserts',
    loadChildren: () => import('./pages/food/deserts/deserts.module').then( m => m.DesertsPageModule)
  },
  {
    path: 'drinks',
    loadChildren: () => import('./pages/food/drinks/drinks.module').then( m => m.DrinksPageModule)
  },
  {
    path: 'input',
    loadChildren: () => import('./pages/food/input/input.module').then( m => m.InputPageModule)
  },
  {
    path: 'bacon',
    loadChildren: () => import('./pages/food/bacon/bacon.module').then( m => m.BaconPageModule)
  },
  {
    path: 'pancake',
    loadChildren: () => import('./pages/food/pancake/pancake.module').then( m => m.PancakePageModule)
  },
  {
    path: 'sandwich',
    loadChildren: () => import('./pages/food/sandwich/sandwich.module').then( m => m.SandwichPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./pages/contact/contact.module').then( m => m.ContactPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
