import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { User } from "app/domain/User";

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map'


@Injectable()
export class LoginService {

  private authenticateUrl: string = 'http://localhost:8080/user/authenticate';
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) { }


  login(userName: string, password: string): Observable<User> {
    console.log(userName +" : "+password);
    return this.http.post(this.authenticateUrl, JSON.stringify({ userName: userName, password: password }), { headers: this.headers })
      .map(res => res.json() || {})
  }


}
