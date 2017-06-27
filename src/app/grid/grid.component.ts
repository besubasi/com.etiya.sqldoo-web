import { Component, OnInit } from '@angular/core';

import {Car} from '../domain/car';

import { GridService } from "./grid.service";

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
  providers:[GridService]
})
export class GridComponent implements OnInit {

    cars: Car[];
    
    cols: any[];

    constructor(private gridService: GridService) { }

    ngOnInit() {
        this.gridService.getCarsSmall().do(cars => this.cars = cars);
        
        this.cols = [
            {field: 'vin', header: 'Vin'},
            {field: 'year', header: 'Year'},
            {field: 'brand', header: 'Brand'},
            {field: 'color', header: 'Color'}
        ];
    }

}
