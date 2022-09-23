import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {AuthGuard} from "./guards/auth.guard";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',

  },
      {
        path: 'home',
        loadChildren: () => import('src/app/home/home.module').then(m => m.HomeModule),
        canActivate: [AuthGuard],
      },
      {
        path: 'auth',
        loadChildren: () => import('src/app/auth/auth.module').then(m => m.AuthModule)
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
