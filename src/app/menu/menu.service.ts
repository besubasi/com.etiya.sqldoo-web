import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {OverlayPanelModule} from 'primeng/primeng';
import { MenuList } from '../addmenu/addmenulist';
import { MenuService } from '../addmenu/addmenuservice';
import {Menus} from 'app/domain/menu';
import {MenuItem} from 'primeng/primeng'
import { DefaultMenu } from "../domain/defaultmenu";
@Injectable()
export class GetMenuService {
  dynamicColumns: any[];
  loadedData: {};
  display: boolean = false;
  private baseUrl: string = 'http://localhost:8080/loadDynamicMenuList';
  constructor(private http: Http) {

    ;
  }


getMenus(){
   /* return this.http.get(this.baseUrl)
    .map(this.extractData)
}
private extractData(res: Response)
{
    let body = res.json();
    return body|| {};
}*/

     return this.http.get('http://localhost:8080/loadDynamicMenuList')
                    .toPromise()
                    .then(res => <DefaultMenu[]> res.json())
                    .then(data => { return data; });
                    
  
}

}