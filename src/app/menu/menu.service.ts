import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Menu } from "../domain/Menu";

/*
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { OverlayPanelModule } from 'primeng/primeng';
*/


@Injectable()
export class MenuService {
  private dynamicMenuUrl: string = 'http://localhost:8080/loadDynamicMenuList';
  private addMenuUrl: string = 'http://localhost:8080/addMenu';
  constructor(private http: Http) {
  }


  callDynamicMenuList() {

    return this.http.get(this.dynamicMenuUrl)
      .toPromise()
      .then(res => <Menu[]> res.json());

  }

  postNewMenu(menu:Menu){

    return this.http.post(this.addMenuUrl, menu)
       .map(res =>  res.json()); 


  }

}