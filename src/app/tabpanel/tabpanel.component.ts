import { Component, OnInit } from '@angular/core';

import { Tab} from "app/tabpanel/Tab";
import { TabpanelService } from "app/tabpanel/tabpanel.service";
import { TAB_LIST } from "app/tabpanel/tablist";

@Component({
  selector: 'app-tabpanel',
  templateUrl: './tabpanel.component.html',
  styleUrls: ['./tabpanel.component.css'],
  providers: [TabpanelService]
})
export class TabpanelComponent implements OnInit {

  tabs: Tab[];

  constructor(private tabpanelService:TabpanelService) { 
    this.tabs = this.tabpanelService.getTabList();
  }

  ngOnInit() {
    
    let dashbord = new Tab();
    dashbord.menuId = 0;
    dashbord.menuName = 'Dashbord';
    dashbord.isSelected=true;
    dashbord.isClosable = false;
    dashbord.content = 'Selam bebek';

    this.tabpanelService.addToTabList(dashbord);
    //this.tabs = this.tabpanelService.getTabList();
  }

  onTabClose(event){
    this.tabpanelService.removeByIndexId(event.index);
  }


  onTabChange(event){

    var t = "";
    var o = event;
    for (var q in o) t += o[q] instanceof Function ? q + " = function{}\n" : q + " = " + o[q] + "\n";
    
    alert(t);
    
      
  }

}
