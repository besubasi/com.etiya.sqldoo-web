import { Component, OnInit } from '@angular/core';

import { TabpanelService } from "app/tabpanel/tabpanel.service";
import { GetMenuService } from "./menu.service";

import { DefaultMenuItem } from "../domain/DefaultMenuItem";
import { Tab } from "app/tabpanel/tab";

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css'],
    providers: [TabpanelService, GetMenuService]

})
export class MenuComponent implements OnInit {

    items: DefaultMenuItem[] = [];
    display: boolean = false;

    constructor(private tabpanelService: TabpanelService, private getMenuService: GetMenuService) {

    }

    /*
        var t = "";
        var o = 
        for (var q in o) t += o[q] instanceof Function ? q + " = function{}\n" : q + " = " + o[q] + "\n";
        
        alert(t);
    */



    ngOnInit() {
        //this.getMenuService.getMenus().then(tt => this.items = tt  );
        this.getMenuService.callDynamicMenuList().then(tt => this.setMenuList(tt));

    }

    setMenuList(menuItemList: DefaultMenuItem[]) {

        for (var i = 0; i < menuItemList.length; i++) {
            this.setCommandAction(menuItemList[i]);
        }

        this.items = menuItemList;
    }

    setCommandAction(menuItem: DefaultMenuItem) {

        if (!menuItem.folder) {
            menuItem.command = (event) => {
                //event.originalEvent: Browser event
                //event.item: menuitem metadata

                let theMenu = event.item;
                console.log("Clict to " + theMenu.label + " , id=" + theMenu.menuId);

                let tab = new Tab();
                tab.menuId = theMenu.menuId;
                tab.menuName = theMenu.label;
                tab.content = "Detail of " + theMenu.label;
                tab.isClosable = true;
                tab.isSelected = true;
                this.tabpanelService.addToTabList(tab);

            }

        }

        if (menuItem.items != null && menuItem.items.length > 0) {
            for (var k = 0; k < menuItem.items.length; k++) {
                this.setCommandAction(menuItem.items[k]);
            }
        }

    }


    newDialog() {
        this.display = true;
    }

}
