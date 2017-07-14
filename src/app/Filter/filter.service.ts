import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {OverlayPanelModule} from 'primeng/primeng';
import { FilterService } from '../addfilter/addfilter.service';
import { Filtre } from '../addfilter/addfilter'
import { FilterList } from "../addfilter/addfilterlist";
@Injectable()
export class GetFilterService {
  dynamicColumns: any[];
  loadedData: {};
  display: boolean = false;
  private baseUrl: string = 'http://localhost:8080/listSearchColumn';
  constructor(private http: Http) {

    ;
  }

  getFilters(){
   /* return this.http.get(this.baseUrl)
    .map(this.extractData)
}

private extractData(res: Response)
{
    let body = res.json();
    return body|| {};
}*/

     return this.http.get('http://localhost:8080/listSearchColumn')
                    .toPromise()
                    .then(res => <Filtre[]> res.json())
                    .then(data => { return data; });
                    
  
}

}
