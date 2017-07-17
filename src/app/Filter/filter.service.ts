import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Filtre } from '../addfilter/addfilter'


@Injectable()
export class FilterService {

  private filterUrl: string = 'http://localhost:8080/listSearchColumn';
  constructor(private http: Http) {

  }

  getFilters() {

    return this.http.get(this.filterUrl)
      .toPromise()
      .then(res => <Filtre[]>res.json());
    //.then(data => { return data; });


  }

}
