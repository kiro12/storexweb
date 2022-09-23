import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  public API_ENDPOINT = 'https://test-api.storexweb.com/api'

  constructor(private http:HttpClient) { }
  getCategories(): Observable<any> {
    return this.http.get(`${this.API_ENDPOINT}/category`).pipe(
      map((response: any) => {
        return response
      }));
  }
  getMovies(id: any): Observable<any> {
    return this.http.get(`${this.API_ENDPOINT}/moviesByCategory/${id}`).pipe(
      map((response: any) => {
        return response
      }));
  }
  getMovieById(id: any): Observable<any> {
    return this.http.get(`${this.API_ENDPOINT}/movies/${id}`).pipe(
      map((response: any) => {
        return response
      }));
  }
  updateMovie(id: any , payload?: any): Observable<any> {
    return this.http.put(`${this.API_ENDPOINT}/movies/${id}`, payload , {observe: 'response'}).pipe(
      map((response: any) => {
        return response
      }));
  }
    deleteMovie(id: any ): Observable<any> {
    return this.http.delete(`${this.API_ENDPOINT}/movies/${id}`).pipe(
      map((response: any) => {
        return response
      }));
  }
  createMovies(payload: any): Observable<any> {
    return this.http.post(`${this.API_ENDPOINT}/movies`, payload , {observe: 'response'}).pipe(
      map((response: any) => {
        return response
      }));
  }
}
