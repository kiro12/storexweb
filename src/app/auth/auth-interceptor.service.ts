import {catchError, exhaustMap, take} from 'rxjs/operators';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import {HttpInterceptor, HttpHandler, HttpRequest, HttpParams, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from "rxjs";
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})


  export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService, private _snackBar: MatSnackBar) {}
  private handleAuthError(err: HttpErrorResponse): Observable<any> {
    if (err.status ) {
      this._snackBar.open(err.error.message, 'error');
    }
    return throwError(err);
  }
  intercept(request: HttpRequest<any>, next: HttpHandler) {
    if (this.authService.isLoggedIn()) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
    } else {
      request = request.clone({});
      return next.handle(request);
    }
    return next.handle(request).pipe(catchError(x => this.handleAuthError(x)));

  }
}
