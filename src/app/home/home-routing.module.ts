import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home.component";
import {MoviesComponent} from "./movies/movies.component";
import {CreateMoviesComponent} from "./create-movies/create-movies.component";

const routes: Routes = [
  {path: '' , component: HomeComponent},
  {path: 'movies/:id' , component: MoviesComponent },
  {path: 'manage' , component: CreateMoviesComponent },
  {path: 'manage/:id' , component: CreateMoviesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
