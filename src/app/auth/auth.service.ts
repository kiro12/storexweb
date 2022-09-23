import { User } from './user.model';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import {throwError, BehaviorSubject, Observable} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import { Router } from '@angular/router';

 export interface AuthResponse{
   kind:string
  email:string,
  expiresIn:string,
  refreshToken:string,
  idToken:string,
  localId:string,
  registered?:boolean;
}
@Injectable({
  providedIn: 'root'
})

export class AuthService {
  public API_ENDPOINT = 'https://test-api.storexweb.com/api'

  constructor(private http:HttpClient ,  private router:Router) { }



  login(body: any): Observable<any> {
    return this.http.post(`${this.API_ENDPOINT}/login`, body).pipe(
      map((response: any) => {
        return response
      }));
  }
  signUp(body: any): Observable<any> {
    return this.http.post(`${this.API_ENDPOINT}/register`, body).pipe(
      map((response: any) => {
        return response
      }));
  }


    // logOut(){
    //   this.user.next(null)
    //   this.router.navigate(['auth'])
    //   localStorage.removeItem('userData')
    // }
  isLoggedIn(){
    if (!localStorage.getItem('token') || localStorage.getItem('token') === 'undefined') {
      localStorage.removeItem('token');
    }
    return !!localStorage.getItem('token');
  }

  }


