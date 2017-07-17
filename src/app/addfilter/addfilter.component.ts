import { Component, OnInit } from '@angular/core';
//import { Tab } from "app/tabpanel/Tab";
//import { TabpanelService } from "app/tabpanel/tabpanel.service";
//import { TAB_LIST } from "app/tabpanel/tablist";
//import { Car } from "app/domain/car";
//import { SelectItem } from '../domain/api';
//import { OverlayPanelModule } from 'primeng/primeng';
//import { FilterList } from './addfilterlist';
import { AddFilterService } from './addfilter.service';
import { Filtre } from './addfilter'
//import { Router } from '@angular/router';
//import { LocalStorageModule } from 'angular-2-local-storage';
//import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
//import { Message } from '../../../node_modules/primeng/components/common/api';
@Component({
    selector: 'app-addfilter',
    templateUrl: './addfilter.component.html',
    styleUrls: ['./addfilter.component.css'],
    providers: [AddFilterService]
})

export class AddFilterComponent implements OnInit {
    fisim: string;
    lisim: string;

    constructor(private addfilterService: AddFilterService) {
    }


    ngOnInit() {


    }

    addToFiltreList() {
        var deneme = new Filtre;
        deneme.filterName = this.fisim;
        deneme.labelName = this.lisim;
        console.log(deneme.filterName + "   " + deneme.labelName);
        this.addfilterService.addToFiltreList(deneme);

    }


}