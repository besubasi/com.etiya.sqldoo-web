import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/primeng';
import { MenuService } from '../addmenu/addmenuservice'
import { Tab } from "app/tabpanel/tab";
//import { MenuService } from "app/menu/menu.service";
import { TabpanelService } from "app/tabpanel/tabpanel.service";
import { Menus } from "../domain/menu";
import { DefaultMenu } from "../domain/defaultmenu";
import { GetMenuService } from "./menu.service";
import { Observable } from "rxjs/Observable";
import { Http, Response } from '@angular/http';
import { DefaultMenuItem } from "../domain/defaultmenuitem";

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css'],
    providers: [TabpanelService]

})
export class MenuComponent implements OnInit {

    items: DefaultMenuItem[];
    display: boolean = false;
    constructor(private tabpanelService: TabpanelService,
        private MenuService: MenuService, private GetMenuService: GetMenuService, private http: Http) {
        /* this.items = [{label: 'adsad'}];
         this.items.push({label: 'adsads Menüler'});
         this.items.push({label: 'adsads'});
         this.items.push({label: 'asdads'});
         this.items.push({label: 'wqeqw'});
*/




    }

    /*
        convertItemToTab(private any): Tab {
            let tab = new Tab();
            tab.menuId = 
    
                                        var t = "";
                                        var o = 
                                        for (var q in o) t += o[q] instanceof Function ? q + " = function{}\n" : q + " = " + o[q] + "\n";
                                        
                                        alert(t);
    
    
        }*/

    ngOnInit() {
        //this.GetMenuService.getMenus().then(items => this.items = items);
        //   this.items=this.GetMenuService.getMenus();


        //this.items = tt);


        /* console.log("Getting Menus");
return this.http.get('http://localhost:8080/loadDynamicMenuList')
               .map((res: Response)=> res.json())
               .subscribe(
               data => { this.items = data},
               err => console.error(err),
               () => console.log("done")  
               );*/




      /*  this.items = [
            {
                label: 'Menüler',
                icon: 'fa-file-o',                
                expanded: true, separator: true,
                items: [
                    {   
                       label: 'Cars', expanded: false, command: (event) => {
                            let ttt = new Tab();
                            ttt.menuId = 1;
                            ttt.menuName = event.item.label;
                            ttt.content = "Detail of " + event.item.label;
                            ttt.isClosable = true;
                            ttt.isSelected = true;
                            this.tabpanelService.addToTabList(ttt);
                        }
                    },
                    {
                        label: 'Computers', expanded: false, command: (event) => {
                            let ttt = new Tab();
                            ttt.menuId = 2;
                            ttt.menuName = event.item.label;
                            ttt.content = "Detail of " + event.item.label;
                            ttt.isClosable = true;
                            ttt.isSelected = true;
                            this.tabpanelService.addToTabList(ttt);

                        }
                    },
                    {
                        label: 'Teams', expanded: false, command: (event) => {
                            let ttt = new Tab();
                            ttt.menuId = 3;
                            ttt.menuName = event.item.label;
                            ttt.content = "Detail of " + event.item.label;
                            ttt.isClosable = true;
                            ttt.isSelected = true;
                            this.tabpanelService.addToTabList(ttt);

                        }
                    },


                    { label: 'Menu' },
                    { separator: true,expanded: true },
                    { label: 'Sub Menu Folder' ,items: [
                            {label: 'Sub Menu 1', icon: 'fa-mail-forward'},
                            {label: 'Sub Menu 2', icon: 'fa-mail-reply'}
                        ]
                    }
                ]
            },
            {
                label: 'Help',
                icon: 'fa-question',
                items: [
                    {
                        label: 'Contents'
                    },
                    {
                        label: 'Search', 
                        icon: 'fa-search', 
                        items: [
                            {
                                label: 'Text', 
                                items: [
                                    {
                                        label: 'Workspace'
                                    }
                                ]
                            },
                            {
                                label: 'File'
                            }
                    ]}
                ]
            },
            {
                label: 'Actions',
                icon: 'fa-gear',
                items: [
                    {
                        label: 'Edit',
                        icon: 'fa-refresh',
                        items: [
                            {label: 'Save', icon: 'fa-save'},
                            {label: 'Update', icon: 'fa-save'},
                        ]
                    },
                    {
                        label: 'Other',
                        icon: 'fa-phone',
                        items: [
                            {label: 'Delete', icon: 'fa-minus'}
                        ]
                    }
                ]
            }
        
        ];*/


        console.log("al veriyi al");
        this.GetMenuService.getMenus().then(tt =>
            (this.loadMenuList(tt)
            )


        );

    }
    newDialog() {
        this.display = true;
    }


    loadMenuList(tt: DefaultMenu[]) {
        console.log(tt);
        this.items = [{ label: "Hoşgeldiniz", folder: true }];

        for (var i = 0; i < tt.length; i++) {
            console.log(tt.length);
            let x = this.convertToMenuItem(tt[i]);
            console.log("For Convert  " + tt[i].name + " = " );
            console.log(x);
            this.items.push(x);
           /* for (var j = 0; j < tt[i].items.length; j++) {

                let y = this.convertToMenuItem(tt[i].items[j]);
                this.items.push(y);

            }*/
        }

    }

    convertToMenuItem(defaultMenu: DefaultMenu): DefaultMenuItem {
        console.log(defaultMenu.name + " converting");
        let defaultMenuItem = new DefaultMenuItem;
        defaultMenuItem.label = defaultMenu.name;
        defaultMenuItem.folder = new Boolean(defaultMenu.folder).valueOf();
        defaultMenuItem.expanded = new Boolean(defaultMenu.expanded).valueOf();
        defaultMenuItem.separator = new Boolean(defaultMenu.active).valueOf();


        if (defaultMenu.items != null && defaultMenu.items.length > 0) {
            console.log(defaultMenu.name + " items.length = " + defaultMenu.items.length)
            let subDefaultMenuItemList: DefaultMenuItem[];
            subDefaultMenuItemList = [];
            //subDefaultMenuItemList = [{label: "Hoşgeldiniz",folder: true}];


            for (var k = 0; k < defaultMenu.items.length; k++) {
                let subDefaultMenuItem = this.convertToMenuItem(defaultMenu.items[k]);
                console.log("subDefaultMenuItem = ");
                console.log(subDefaultMenuItem);

                subDefaultMenuItemList.push(subDefaultMenuItem);


            }
            console.log(defaultMenu.name + " icin subDefaultMenuItemList lentth = " + subDefaultMenuItemList.length);
            console.log(subDefaultMenuItemList);

            defaultMenuItem.items = subDefaultMenuItemList;
        }

        console.log("CONVERT END :" + defaultMenu.name + " = " + defaultMenuItem + " sub items = " + defaultMenuItem.items);


        return defaultMenuItem;
    }



}
