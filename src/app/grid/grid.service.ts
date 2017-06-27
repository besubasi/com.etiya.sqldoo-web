import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Car } from '../domain/car';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';



@Injectable()
export class GridService {


  constructor(private http: Http) { }

  getCarsSmall(): Observable<Car[]> {

    //.map(response=>response.json())
    return this.http.get('https://www.primefaces.org/primeng/assets/showcase/data/cars-medium.json').map(response=>response.json())
/*
    return this.http.get('https://www.primefaces.org/primeng/assets/showcase/data/cars-medium.json')
      .map(response=>response.json())
      .then(res => <Car[]>res.json().data)
      .then(data => { return data; });
      */
  }


}
