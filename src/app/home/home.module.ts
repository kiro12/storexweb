import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {HomeService} from "./service/home.service";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {AuthInterceptor} from "../auth/auth-interceptor.service";
import { MoviesComponent } from './movies/movies.component';
import { CreateMoviesComponent } from './create-movies/create-movies.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    HomeComponent,
    MoviesComponent,
    CreateMoviesComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    HomeService,

  ]
})
export class HomeModule { }
