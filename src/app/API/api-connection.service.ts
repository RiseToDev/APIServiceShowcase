import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {LoaderService} from "../services/loader.service";

@Injectable({
  providedIn: 'root',
})
export class ApiConnectionService {
  private apiUrl = window['appConfig'].baseApiUrl;

  constructor(private http: HttpClient, private loaderService: LoaderService) {}

  get = (url) => {
    return this.http.get(this.apiUrl + url);
  };
}
