import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/primeng';

import { Tab } from "app/tabpanel/tab";
//import { MenuService } from "app/menu/menu.service";
import { TabpanelService } from "app/tabpanel/tabpanel.service";


@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css'],
    providers: [TabpanelService]

})
export class MenuComponent implements OnInit {

    items: MenuItem[];

    constructor(private tabpanelService: TabpanelService) {

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
        this.items = [
            {
                label: 'File',
                icon: 'fa-file-o',
                expanded: true, separator: true,
                items: [
                    {
                        label: 'Project', command: (event) => {
                            let tt = new Tab();
                            tt.menuId = 1;
                            tt.menuName = event.item.label;
                            tt.content = "Detail of " + event.item.label;
                            tt.isClosable = true;
                            tt.isSelected = true;

                            this.tabpanelService.addToTabList(tt);
                        }
                    },
                    {
                        label: 'Plcy Rule', command: (event) => {
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
                        label: 'Prod', command: (event) => {
                            let ttt = new Tab();
                            ttt.menuId = 3;
                            ttt.menuName = event.item.label;
                            ttt.content = "Detail of " + event.item.label;
                            ttt.isClosable = true;
                            ttt.isSelected = true;
                            this.tabpanelService.addToTabList(ttt);

                        }
                    },
                    {
                        label: 'Prod Rel', command: (event) => {

                            var t = "";
                            var o = event.item;
                            for (var q in o) t += o[q] instanceof Function ? q + " = function{}\n" : q + " = " + o[q] + "\n";

                            alert(t);



                            let ttt = new Tab();
                            ttt.menuId = 4;
                            ttt.menuName = event.item.label;
                            ttt.content = "Detail of " + event.item.label;
                            ttt.isClosable = true;
                            ttt.isSelected = true;
                            this.tabpanelService.addToTabList(ttt);

                        }
                    },


                    { label: 'Open' },
                    { separator: true },
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
        
        ];


    }
}