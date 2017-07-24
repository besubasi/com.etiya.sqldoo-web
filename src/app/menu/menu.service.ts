import { Injectable } from '@angular/core';
import { Menu } from "app/domain/Menu";
import { CurrentUser } from "app/domain/CurrentUser";


import { Http,  Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class MenuService {
  private listMyMenuUrl: string = 'http://localhost:8080/listMyMenu';
  private addMenuUrl: string = 'http://localhost:8080/addMenu';
  private headers = new Headers({'Content-Type': 'application/json'});



  constructor(private http: Http) {
  }


  listMyMenu(): Observable<Menu[]> {
    let currentUser :CurrentUser;

    if (typeof (Storage) !== 'undefined') {
      currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
    }

    console.log("currentUser="+currentUser);

    return this.http.post(this.listMyMenuUrl, JSON.stringify({userId: currentUser.userId}), {headers: this.headers})
      .map(res => res.json() || {})
      .catch(error => Observable.throw(error.message || error));
  }


  addMenu(menu: Menu) {
    return this.http.post(this.addMenuUrl, menu)
      .map(res => res.json())
      .catch(error => Observable.throw(error.message || error));
  }



}