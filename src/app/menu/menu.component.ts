import { Component, OnInit } from '@angular/core';

import { TabpanelService } from "app/tabpanel/tabpanel.service";
import { MenuService } from "./menu.service";

import { Menu } from "../domain/Menu";
import { Tab } from "app/domain/tab";

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css'],
    providers: [TabpanelService, MenuService]

})
export class MenuComponent implements OnInit {

    items: Menu[] = [];

    menu: Menu = new Menu();
    visibleForm: boolean = false;


    constructor(private tabpanelService: TabpanelService, private menuService: MenuService) {

    }

    /*
        var t = "";
        var o = 
        for (var q in o) t += o[q] instanceof Function ? q + " = function{}\n" : q + " = " + o[q] + "\n";
        
        alert(t);
    */



    ngOnInit() {
        this.callDynamicMenuList();


    }

    callDynamicMenuList() {
        this.menuService.callDynamicMenuList().then(tt => this.setMenuList(tt));
    }



    setMenuList(menuList: Menu[]) {

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

        this.menuService.postNewMenu(this.menu).subscribe(
            res => this.callDynamicMenuList(),
            err => console.log(err),
            () => console.log('Request Completed')
        );

    }

}
