import { Injectable } from '@angular/core';
import { FilterList } from '../addfilter/addfilterlist';
import { FilterService } from '../addfilter/addfilter.service';
import { Filtre } from '../addfilter/addfilter'
import { Tab } from "./tab";
import { TAB_LIST } from "./tablist";
import { Http, Response } from '@angular/http';
import { Car } from '../domain/car';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {OverlayPanelModule} from 'primeng/primeng';
export class CarService {
  dynamicColumns: any[];
  loadedData: {};
  display:boolean=false;
  private baseUrl: string = 'https://www.primefaces.org/primeng/assets/showcase/data/cars-medium.json';
  constructor(private http: Http) {

    ;
  }
}


@Injectable()
export class TabpanelService {
  dynamicColumns: any[];
  loadedData: {};
  display: boolean = false;
  private baseUrl: string = 'https://www.primefaces.org/primeng/assets/showcase/data/cars-medium.json';
  constructor(private http: Http) {

    ;
  }
  showDialog() {
        this.display = true;
    }

    hideDialog() {
        this.display = false;
    }

  getSmallCars() {
    return this.http.get('https://www.primefaces.org/primeng/assets/showcase/data/cars-medium.json')
                    .toPromise()
                    .then(res => <Car[]> res.json().data)
                    .then(data => { return data; });
                    

  }
  getHeaders() {
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }


  /*
  mapCar(response:Response): Car[]{
    // The response of the API has a results
    // property with the actual results
    return response.json().results.map(this.toCar)
 }
 toCar(r:any): Car{
   let araba = <Car>({
     vin: this.extractId(r),
     year: r.url,
     brand: r.name,
     color: Number.parseInt(r.mass),
      });
   console.log('Parsed person:', araba);
   return araba;
 }
 */
  extractId(personData: any) {
    let extractedId = personData.url.replace('https://www.primefaces.org/primeng/assets/showcase/data/cars-medium.json', '').replace('/', '');
    return parseInt(extractedId);
  }
  /* return this.http.get('https://www.primefaces.org/primeng/assets/showcase/data/cars-medium.json')
   .map(response=>response.json())*/

  /* return this.http.get("https://www.primefaces.org/primeng/assets/showcase/data/cars-medium.json")
     .map(response=>response.json())
     .subscribe(araba=>this.loadedData=araba);
     
     
 }*/


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
  getMenuId(tab:Tab): number {
    return tab.menuId;
  }
  getTabList(): Tab[] {
    return TAB_LIST;
  }

  clearTabList(): void {
    TAB_LIST.splice(0, TAB_LIST.length);
  }

 removeByIndexId(index: number) {
    var deletedTab = TAB_LIST[index];
    //deletedTab.isSelected=false;
    console.log("index : " + index + " için " + deletedTab.menuName + " siliniyor. deletedTab.isSelected=" + deletedTab.isSelected);
    //  var deneme=TAB_LIST[index];
    //  console.log("yeni menu at index: "+deneme.menuName+" "+index);
    /*var tt ;
    this.addToTabList(tt);
    console.log("index : "+index+" için yeni tab "+tt.menuName );
*/
    var dumy = TAB_LIST[index];
    if (deletedTab.isSelected) {
      // var selectedTab2=TAB_LIST[index-1];
      // selectedTab2.isSelected=false;o
      console.log("TAB_LIST length : " + TAB_LIST.length);
      TAB_LIST[index - 1].isSelected = true;
      TAB_LIST.splice(index, 1);
      console.log("TAB_LIST length : " + TAB_LIST.length);
    }
    else {

      //TAB_LIST[index-1].isSelected=true;
      // index=index-1;
      //  var selectedTab = TAB_LIST[index-1];
      //  selectedTab.isSelected=true;
      console.log("TAB_LIST length : " + TAB_LIST.length);
      dumy.isSelected = true;
      TAB_LIST.splice(index, 1);
      console.log("TAB_LIST length : " + TAB_LIST.length);
      //  console.log("index : "+index+" için yeni selected tab "+selectedTab.menuName +" oldu");
    }
  };
  public refreshGrid(menuId: number): any[] {
    var aydi = menuId;
    if (aydi == 1) {
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

 /* public addFilter(menuId: number): any[]{
    var aydi=menuId;
    if(aydi==1){

    }
  }*/

}
