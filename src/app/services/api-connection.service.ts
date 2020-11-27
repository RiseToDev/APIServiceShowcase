import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiConnectionService {
  private apiUrl = window['appConfig'].baseApiUrl;

  constructor(private http: HttpClient) {}

  get = (url) => {
    return this.http.get(this.apiUrl + url);
  };
}
