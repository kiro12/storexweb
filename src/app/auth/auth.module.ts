import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import {AuthComponent} from "./auth.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthService} from "./auth.service";
import { SignUpComponent } from './sign-up/sign-up.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {AuthInterceptor} from "./auth-interceptor.service";


@NgModule({
  declarations: [AuthComponent, SignUpComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatSnackBarModule
  ],
  providers: [AuthService,
    {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
  },]
})
export class AuthModule { }
