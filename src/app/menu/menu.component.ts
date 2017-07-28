import { Component, OnInit } from '@angular/core';

import { TabpanelService } from "app/tabpanel/tabpanel.service";
import { MenuService } from "./menu.service";

import { Menu } from "../domain/Menu";
import { Tab } from "app/domain/Tab";
import { SelectItem } from 'primeng/components/common/api';
import { CurrentUser } from "app/domain/CurrentUser";
@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css'],
    providers: [TabpanelService, MenuService]

})
export class MenuComponent implements OnInit {

    items: Menu[] = [];

    newMenu: Menu = new Menu();
    visibleForm: boolean = false;

    itemsParentMenu: SelectItem[] = [];
    selectedParentMenu: Menu = new Menu();



    constructor(private tabpanelService: TabpanelService, private menuService: MenuService) {

    }

    /*
        var t = "";
        var o = 
        for (var q in o) t += o[q] instanceof Function ? q + " = function{}\n" : q + " = " + o[q] + "\n";
        
        alert(t);
    */



    ngOnInit() {
        this.visibleForm = false;
        this.listMyMenu();


    }

    listMyMenu() {
        this.items.splice(0,this.items.length);
        this.itemsParentMenu.splice(0,this.itemsParentMenu.length);

        this.menuService.listMyMenu().subscribe(
            res => this.setMenuList(res),
            error => console.log(error),
            () => console.log('Request Erro')
        );
    }



    setMenuList(menuList: Menu[]) {
        console.log(menuList);

        for (var i = 0; i < menuList.length; i++) {
            this.setCommandAction(menuList[i]);
        }

        this.items = menuList;
    }

    setCommandAction(menu: Menu) {

        if (!menu.folder) {
            menu.command = (event) => {
                //event.originalEvent: Browser event
                //event.item: menuitem metadata

                let theMenu = event.item;
                console.log("Clict to " + theMenu.label + " , id=" + theMenu.menuId);

                let tab = new Tab();
                tab.menuId = theMenu.menuId;
                tab.menuName = theMenu.label;
                tab.content = "Detail of " + theMenu.label + ", tab.menuId =" + tab.menuId;
                tab.isClosable = true;
                tab.isSelected = true;
                this.tabpanelService.addToTabList(tab);

            }

        } else {
            this.itemsParentMenu.push({ label: menu.label, value: menu });
        }

        if (menu.items != null && menu.items.length > 0) {
            for (var k = 0; k < menu.items.length; k++) {
                this.setCommandAction(menu.items[k]);
            }
        }

    }


    showForm() {
        this.visibleForm = true;
    }


    save() {
        this.visibleForm = false;

        console.log("selectedParentMenu = ");
        console.log(this.selectedParentMenu);
let currentUser :CurrentUser;

    if (typeof (Storage) !== 'undefined') {
      currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
    }

        this.newMenu.parentMenuId = this.selectedParentMenu.menuId;
        this.newMenu.userId=currentUser.userId;
        this.menuService.addMenu(this.newMenu).subscribe(
            res => {
                this.newMenu = new Menu();
                this.listMyMenu()
            },
            error => console.log(error),
            () => console.log('Request Completed')
        );

    }



}
