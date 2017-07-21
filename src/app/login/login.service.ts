import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Account } from 'app/domain/account';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map'


@Injectable()
export class LoginService {

  private dynamicUserUrl: string = 'http://localhost:8080/authentication';
  constructor(private http: Http) { }


  login(account:Account) {


    console.log(account);

    return this.http.post(this.dynamicUserUrl, account)
      .map(res => res.json())


  }


}
