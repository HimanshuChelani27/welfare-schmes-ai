import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { query } from '@angular/animations';
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient ) { }

  chatBot(query: any): any{
    return this.http.post( 'http://localhost:5000' +'/question', query);
  }



}
