import { Component, OnInit } from '@angular/core';
import { Tab } from "app/tabpanel/Tab";
import { TabpanelService } from "app/tabpanel/tabpanel.service";
import { TAB_LIST } from "app/tabpanel/tablist";
import { Car } from "app/domain/car";
import { SelectItem } from '../domain/api';
import { OverlayPanelModule } from 'primeng/primeng';
import { MenuList } from './addmenulist';
import { MenuService } from './addmenuservice';
import { Menu } from './addmenu'

import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Message } from '../../../node_modules/primeng/components/common/api';

@Component({
    selector: 'app-addmenu',
    templateUrl: './addmenu.component.html',
    styleUrls: ['./addmenu.component.css'],
    providers: [MenuService, TabpanelService]
})

export class AddMenuComponent implements OnInit {
    menu: Menu[];
    pmenuId: number;
    msgs: Message[] = [];
    userform: FormGroup;
    submitted: boolean;
    genders: SelectItem[];
    description: string;
    users: SelectItem[];
 display:boolean=false;
    constructor(private MenuService: MenuService, private fb: FormBuilder) {

    }


    ngOnInit() {
        this.userform = this.fb.group({
            'firstname': new FormControl('', Validators.required),
            'lastname': new FormControl('', Validators.required),
            'password': new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)])),
            'description': new FormControl(''),    

        });   
        
 
    }
     newDialog() {
        this.display = true;
    }
    onSubmit(value: string) {
        this.submitted = true;
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Success', detail: 'Form Submitted' });
    }
    get diagnostic() { return JSON.stringify(this.userform.value); }

}