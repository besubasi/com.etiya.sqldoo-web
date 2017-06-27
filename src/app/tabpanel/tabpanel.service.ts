import { Injectable } from '@angular/core';

import { Tab } from "./tab";
import { TAB_LIST } from "./tablist";


@Injectable()
export class TabpanelService {

  constructor() { }


  addToTabList(tab: Tab): void {

    var addedTab = TAB_LIST.find(t => t.menuId == tab.menuId);

    TAB_LIST.forEach(t => {
      if (t.menuId == tab.menuId) {
        t.isSelected = true;
        addedTab = t;
      } else {
        t.isSelected = false;
      }
      console.log(t.menuName +" isSelected = "+t.isSelected+" and isClosable:"+t.isClosable);
    });

    if (addedTab) {
      console.log(addedTab.menuName + " zaten var. isSelected = "+addedTab.isSelected+" and isClosable:"+addedTab.isClosable);
      addedTab.isSelected = true;
    }
    else {
      console.log(tab.menuName + " yeni ekleniyor. isSelected = "+tab.isSelected+" and isClosable:"+tab.isClosable);
      TAB_LIST.push(tab);
    }
  }

  getTabList(): Tab[] {
    return TAB_LIST;
  }

  clearTabList(): void {
    TAB_LIST.splice(0, TAB_LIST.length);
  }

  removeByIndexId(index:number){
    
    var deletedTab = TAB_LIST[index];
    console.log("index : "+index+" için "+deletedTab.menuName +" siliniyor. deletedTab.isSelected="+deletedTab.isSelected);

    TAB_LIST.splice(index, 1);

    var tt = TAB_LIST[index];
    console.log("index : "+index+" için yeni tab "+tt.menuName );


    /*
    //
    if(deletedTab.isSelected){
      if(TAB_LIST.length >= index){
        console.log("TAB_LIST length : "+TAB_LIST.length);
        TAB_LIST[index].isSelected=true;
      }else{
        TAB_LIST[index-1].isSelected=true;
        var selectedTab = TAB_LIST[index-1];
        selectedTab.isSelected=true;
        console.log("index : "+index+" için yeni selected tab "+selectedTab.menuName +" oldu");
      }
    }
    */
    
    
  }


}
