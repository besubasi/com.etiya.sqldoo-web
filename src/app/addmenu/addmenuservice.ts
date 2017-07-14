import { Injectable } from '@angular/core';
import { Menu } from './addmenu'
import { MenuList } from './addmenulist';
import { Http, Response } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { Tab } from "app/tabpanel/Tab";
import { TabpanelService } from "app/tabpanel/tabpanel.service";
import { TAB_LIST } from "app/tabpanel/tablist";
import { Car } from "app/domain/car";
import { SelectItem } from '../domain/api';
import { OverlayPanelModule } from 'primeng/primeng';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Message } from '../../../node_modules/primeng/components/common/api';
import { ReactiveFormsModule } from '@angular/forms';
import { Observable } from "rxjs/Observable";
//import {Menus} from '../domain/menu';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class MenuService{
    Menus: Menu[];
    menu: Menu;
    pmenuId: number;
    msgs: Message[] = [];
    userform: FormGroup;
    submitted: boolean;
    genders: SelectItem[];
    description: string;
    display:boolean = false;
    constructor(private fb: FormBuilder, private http: Http){
          
    ;}
    
     newDialog() {
        this.display = true;
    }

    hideDialog() {
        this.display = false;
    }

addToMenuList(menu:Menu):void{
    var addedMenu = new Menu;
    menu.menuId = 1;
    MenuList.push(menu);
    /*var addedMenu = MenuList.find(t => t.menuId==menu.menuId);
    MenuList.forEach(t=>{
        if(t.menuId==menu.menuId){
            addedMenu=t;
        }
        else{
            console.log("Menu EKLENEMEDİ !");
        }
        if (addedMenu){
            console.log(addedMenu.MenuName+" zaten var !");
        }
        else{
            console.log(addedMenu.MenuName+" yeni Menu ekleniyor.");
            MenuList.push(menu);
        }
    })
    */
}

CreateMenu(){
    console.log("Add Menu Create Menu Fonksiyonunun İçinde !");
     this.userform = this.fb.group({
            'firstname': new FormControl('', Validators.required),
            'lastname': new FormControl('', Validators.required),
            'password': new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)])),
            'description': new FormControl('')});
    }
        onSubmit(value: string) {
        this.submitted = true;
        this.msgs = [];
        this.msgs.push({severity:'info', summary:'Success', detail:'Form Submitted'});
    }
        get diagnostic() { return JSON.stringify(this.userform.value); }


}