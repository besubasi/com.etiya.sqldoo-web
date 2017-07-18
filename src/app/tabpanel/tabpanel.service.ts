import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { SearchColumn } from 'app/domain/SearchColumn';
import { SEARCH_COLUMN_LIST } from 'app/domain/SearchColumnList';

import { Tab } from "app/domain/Tab";
import { TAB_LIST } from "app/domain/TabList";
import { Car } from '../domain/car';

import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { OverlayPanelModule } from 'primeng/primeng';


@Injectable()
export class TabpanelService {
  dynamicColumns: any[];
  loadedData: {};
  display: boolean = false;
  private carsUrl: string = 'https://www.primefaces.org/primeng/assets/showcase/data/cars-medium.json';
  
  private listUrl: string = 'http://localhost:8080/listSearchColumn';
  private addUrl: string = 'http://localhost:8080/addSearchColumn';

  constructor(private http: Http) {


  }


  getSmallCars() {
    return this.http.get(this.carsUrl)
      .toPromise()
      .then(res => <Car[]>res.json().data)
      .then(data => {console.log(data); return data; });


  }


  // Arama Kriterlerini serverdan alır
  callSearchColumnList() {

    return this.http.get(this.listUrl)
      .toPromise()
      .then(res => <SearchColumn[]>res.json());
  }

  // Yeni arama kriteri eklemek için servera bilgi gönderir
  postNewSearchColumn(searchColumn: SearchColumn) {

    return this.http.post(this.addUrl, searchColumn)
      .map(res => res.json());


  }


  addToTabList(tab: Tab): void {

    var addedTab = TAB_LIST.find(t => t.menuId == tab.menuId);

    TAB_LIST.forEach(t => {
      if (t.menuId == tab.menuId) {
        t.isSelected = true;
        addedTab = t;
      } else {
        t.isSelected = false;
      }
      console.log(t.menuName + " isSelected = " + t.isSelected + " and isClosable:" + t.isClosable);
    });

    if (addedTab) {
      console.log(addedTab.menuName + " zaten var. isSelected = " + addedTab.isSelected + " and isClosable:" + addedTab.isClosable);
      addedTab.isSelected = true;
    }
    else {
      console.log(tab.menuName + " yeni ekleniyor. isSelected = " + tab.isSelected + " and isClosable:" + tab.isClosable);
      TAB_LIST.push(tab);
    }
  }

  getTabList(){
    return TAB_LIST;
  }

  getMenuId(tab: Tab): number {
    return tab.menuId;
  }


  clearTabList(): void {
    TAB_LIST.splice(0, TAB_LIST.length);
  }

  removeByIndexId(index: number) {
    var deletedTab = TAB_LIST[index];
    console.log("index : " + index + " için " + deletedTab.menuName + " siliniyor. deletedTab.isSelected=" + deletedTab.isSelected);

    var dumy = TAB_LIST[index];
    if (deletedTab.isSelected) {

      console.log("TAB_LIST length : " + TAB_LIST.length);
      TAB_LIST[index - 1].isSelected = true;
      TAB_LIST.splice(index, 1);
      console.log("TAB_LIST length : " + TAB_LIST.length);
    }
    else {
      console.log("TAB_LIST length : " + TAB_LIST.length);
      dumy.isSelected = true;
      TAB_LIST.splice(index, 1);
      console.log("TAB_LIST length : " + TAB_LIST.length);

    }
  };

  public refreshGrid(menuId: number): any[] {
    var aydi = menuId;
    if (aydi == 2) {
      this.dynamicColumns = [
        { field: 'vin', header: 'Vin' },
        { field: 'year', header: 'Year' },
        { field: 'brand', header: 'Brand' },
        { field: 'color', header: 'Color' },
        { field: 'price', header: 'Price' }
      ];


    } else if (aydi == 2) {
      this.dynamicColumns = [
        { field: 'vin', header: 'dsfsdf' },
        { field: 'year', header: 'Ysdfdsfear' },
        { field: 'brand', header: 'sdfdsBrand' },
        { field: 'color', header: 'sdfColor' },
        { field: 'price', header: 'sdfPrice' }
      ];


    }
    return this.dynamicColumns;
  }

}
