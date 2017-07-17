import { Injectable } from '@angular/core';
import { Filtre } from './addfilter'
import { FilterList } from './addfilterlist';
import { Component, OnInit } from '@angular/core';
import { TAB_LIST } from "../tabpanel/tablist";
import { Tab } from "../tabpanel/tab"
import { TabpanelService } from "../tabpanel/tabpanel.service"
import {FilterService} from "../filter/filter.service"
@Injectable()
export class AddFilterService {

    pmenuId: number;
    submitted: boolean;
    aa: Filtre[];
    deneme: Tab;
    local: Tab[];
    constructor(private tabpanelservice: TabpanelService,private filterService:FilterService) {


    }

    getFilterList(aa: Filtre[]) {
        this.local = this.tabpanelservice.getTabList();

        console.log(this.pmenuId);

        
        for (var i = 1; i < aa.length; i++) {
            console.log(this.local[i ]);
            var idd = this.local[i].menuId;
            this.pmenuId = idd;
            console.log(this.pmenuId);
            if (aa[i].menuId == this.pmenuId)
                this.addToFiltreList(aa[i]);
            console.log(FilterList);
        }
    }

    addToFiltreList(filtre: Filtre) {
        var addedFiltre = FilterList.find(t => t.menuId == filtre.menuId);

        if (addedFiltre) {
            console.log(addedFiltre.filterName + " zaten var. MenuID = " + addedFiltre.menuId);
            FilterList.pop();
            console.log(FilterList);
        }
        else {
            //if(filtre.menuId == t.menuId)
            console.log(filtre.filterName + " yeni ekleniyor. MenuID = " + filtre.menuId + " Label Name:" + filtre.labelName);
            FilterList.push(filtre);
        }
        console.log(FilterList);
        return FilterList;
    }


    createFilter(menuID?: number) {
        console.log("Creating filter.." + menuID);
        // this.filtre.menuId=menuID;
        this.pmenuId = menuID;
        console.log(this.pmenuId);
    }




}