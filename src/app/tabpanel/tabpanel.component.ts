import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TabpanelService } from "app/tabpanel/tabpanel.service";

import { Tab } from "app/domain/Tab";
import { TAB_LIST } from "app/domain/TabList";
import { Criteria } from 'app/domain/Criteria';
import { CRITERIA_LIST } from 'app/domain/CriteriaList';
import { Car } from "app/domain/Car";




@Component({
  selector: 'app-tabpanel',
  templateUrl: './tabpanel.component.html',
  styleUrls: ['./tabpanel.component.css'],
  providers: [TabpanelService]
})



export class TabpanelComponent implements OnInit {

  tabs: Tab[];
  pmenuId: number;



  columns: Criteria[];

  visibleForm: boolean = false;
  newCriteria: Criteria;


  cols: any[];
  cars: Car[]=[];


  constructor(private tabpanelService: TabpanelService) {

  }

  ngOnInit() {

    let dashbord = new Tab();
    dashbord.menuId = 0;
    dashbord.menuName = 'Dashbord';
    dashbord.isSelected = true;
    dashbord.isClosable = false;
    dashbord.content = 'Stajyerler Ateş Ediyor';
    console.log(dashbord);


    this.tabpanelService.addToTabList(dashbord);

    this.tabs = this.tabpanelService.getTabList();
    this.callSearchColumnList();

  }

  callSearchColumnList(){
        this.tabpanelService.callSearchColumnList().then(tt => this.columns=tt);
  }








  showForm(menuId:number) {
    this.newCriteria = new Criteria();
    this.newCriteria.menuId=menuId;

    this.visibleForm = true;
  }


  save() {
    this.visibleForm = false;

    this.tabpanelService.postNewSearchColumn(this.newCriteria).subscribe(
      res => console.log(res),
      err => console.log(err),
      () => console.log('Request Completed')
    );

  }

  onTabClose(event) {
    this.tabpanelService.removeByIndexId(event.index);
  }


  onTabChange(event) {
    console.log("index = " + event.index);
    var sayi = 0;
    var ct = 0;
    var keepGoing = true;
    TAB_LIST.forEach(element => {
      if (keepGoing) {
        var simdiki = TAB_LIST[event.index];

        if (element.isSelected) {
          if (keepGoing) {
            var IND: number[] = [];
            for (var j = 0; j <= TAB_LIST.length - 1; j++) {
              IND[j] = j;
              console.log(IND[j]);
            } var k = simdiki.menuId;
            // for (var k = simdiki.menuId; k <= TAB_LIST.length-1; k++) {
            var deneme;
            console.log(k);
            for (var i = 1; i <= TAB_LIST.length - 1; i++) {
              if (k == IND[i]) {
                var second = true;
                console.log(k + "için index arrayinde" + IND[i] + " geliyor => bulundu" + second);
                //k++;
                ct = ct + 1;
                break;
              }
              else {
                second = false;
                console.log(k + "için index arrayinde" + IND[i] + "geliyor => bulunamadı");
                sayi++;

              }
              // } 

            }

            console.log(ct + " <<- ct & sayi ->> " + sayi + " i= " + i);

            if (ct + sayi == k) {
              sayi = 0;
              console.log("sayii:  " + sayi);
            }
            console.log("element id : " + element.menuId);
            if (sayi == 0) {
              if (element.menuId == 0) {
                var aaa = element.menuId;
                TAB_LIST[aaa].isSelected = false;
                simdiki.isSelected = true;
                this.refreshGrid(simdiki.menuId);
                keepGoing = false;
                console.log("önceki menu id:" + element.menuId + " " + element.menuName);
                console.log("şimdiki menu id: " + simdiki.menuId + " " + simdiki.menuName);
              } else if (sayi == TAB_LIST.length) {
                var bbb = TAB_LIST[sayi - 1];
                bbb.isSelected = false;
                simdiki.isSelected = true;
                this.refreshGrid(simdiki.menuId);
                keepGoing = false;
                console.log("önceki menu id:" + element.menuId + " " + element.menuName);
                console.log("şimdiki menu id: " + simdiki.menuId + " " + simdiki.menuName);
              } else {
                var aaa = element.menuId - 1;
                TAB_LIST[aaa].isSelected = false;
                simdiki.isSelected = true;
                this.refreshGrid(simdiki.menuId);
                keepGoing = false;
                console.log("önceki menu id:" + element.menuId + " " + element.menuName);
                console.log("şimdiki menu id: " + simdiki.menuId + " " + simdiki.menuName);
              }
            }
            else {
              console.log("element id: " + element.menuId);
              TAB_LIST[element.menuId].isSelected = false;
              simdiki.isSelected = true;
              this.refreshGrid(simdiki.menuId);
              console.log("önceki menu id:" + element.menuId + " " + element.menuName);
              console.log("şimdiki menu id: " + simdiki.menuId + " " + simdiki.menuName);
              keepGoing = false;
            }
          }
        }

      }
    });


  }

  public refreshGrid(menuId?: number) {

    if (menuId) {
      console.log("menu Id var " + menuId);
      this.pmenuId = menuId;
    } else {
      console.log("menu Id yok");
      this.pmenuId = 0;
    }

    this.cols = this.tabpanelService.refreshGrid(this.pmenuId);
    if (this.pmenuId == 2) {
      console.log("get cars");
      this.tabpanelService.getSmallCars().then(cars => this.cars = cars);
    }
  }


}


