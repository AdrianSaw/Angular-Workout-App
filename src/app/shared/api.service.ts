import { Injectable } from '@angular/core';
import { Headers, Http, RequestMethod, RequestOptions, Response } from '@angular/http';
import { FormGroup } from '@angular/forms';

import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class ApiService {

  private baseUrl: string;

  constructor(private http: Http,
              private authService: AuthService) {
    // this.baseUrl = environment.api_url;
  }

  public delete(path: string, options?: RequestOptions): Observable<Response> {
    return this.request(path, RequestMethod.Delete, options);
  }

  public get(path: string, options?: RequestOptions): Observable<Response> {
    return this.request(path, RequestMethod.Get, options);
  }

  public post(path: string, options?: RequestOptions): Observable<Response> {
    return this.request(path, RequestMethod.Post, options);
  }

  public put(path: string, options: RequestOptions): Observable<Response> {
    return this.request(path, RequestMethod.Put, options);
  }

  public patch(path: string, options: RequestOptions): Observable<Response> {
    return this.request(path, RequestMethod.Patch, options);
  }

  private request(path: string, method: RequestMethod, options?: RequestOptions): Observable<Response> {
    const token = this.authService.getToken();

    options = options || new RequestOptions();
    const headers = options.headers || new Headers();
    headers.append('Content-Type', 'application/json');
    // const token = this.storageService.getItem('token');
    if (token) {
      headers.append('Authorization', 'Bearer ' + token);
    }
    const requestOptions = options.merge({
      method: method,
      headers: headers
    });
    return this.http.request(`${this.baseUrl}${path}`, requestOptions);
  }
}

// NOT USED YET