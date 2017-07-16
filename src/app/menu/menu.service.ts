import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { OverlayPanelModule } from 'primeng/primeng';
import { DefaultMenuItem } from "../domain/DefaultMenuItem";


@Injectable()
export class GetMenuService {
  private dynamicMenuUrl: string = 'http://localhost:8080/loadDynamicMenuList';
  constructor(private http: Http) {
  }


  callDynamicMenuList() {

    return this.http.get(this.dynamicMenuUrl)
      .toPromise()
      .then(res => <DefaultMenuItem[]> res.json());

  }

}