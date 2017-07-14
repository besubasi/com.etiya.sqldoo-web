import { Component, OnInit } from '@angular/core';
//import { Tab } from "app/tabpanel/Tab";
//import { TabpanelService } from "app/tabpanel/tabpanel.service";
//import { TAB_LIST } from "app/tabpanel/tablist";
//import { Car } from "app/domain/car";
//import { SelectItem } from '../domain/api';
//import { Router } from '@angular/router';
//import {CommonModule} from '@angular/common'
//import { OverlayPanelModule } from 'primeng/primeng';
import { FilterList } from '../addfilter/addfilterlist';
import { FilterService } from '../addfilter/addfilter.service';
import { Filtre } from '../addfilter/addfilter'
import { GetFilterService } from './filter.service'
//import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
//import { Message } from '../../../node_modules/primeng/components/common/api';
@Component({
    selector: 'app-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.css'],
    providers: [FilterService,GetFilterService]
})

export class FilterComponent implements OnInit {
    filters: Filtre[];
    pmenuId: number = 1;
    // filter:Filtre;
    // submitted: boolean;
    deneme1: string = 'YAZ ARTIK';
    fisim: string;
    lisim: string;
    display: boolean = false;

    constructor(private filterService: FilterService, private getfilterService:GetFilterService) {
            
    }


    ngOnInit() {
        console.log("al veriyi al");
        this.getfilterService.getFilters().then(tt =>
            (this.filterService.getFilterList(tt)
            ) 

        );
        this.filters = FilterList;

      /*  let newFilter = new Filtre()
        newFilter.filterName = "Default";
        newFilter.labelName = "Defaultt";
        newFilter.menuId = 1;
        console.log("default kriter ekleniyor");
        this.filterService.addToFiltreList(newFilter);

        this.filters = this.filterService.getFilterList();
        console.log("filtre listesi");
        console.log(this.filters );
        */
    }

}