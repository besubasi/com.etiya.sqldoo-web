import { EventEmitter } from '@angular/core';
import { MenuItem } from "primeng/primeng";


export class Menu implements MenuItem {
    
    label?: string;
    icon?: string;
    command?: (event?: any) => void;
    url?: string;
    routerLink?: any;
    eventEmitter?: EventEmitter<any>;
    items?: Menu[];
    folder?: boolean;
    expanded?: boolean;
    disabled?: boolean;
    visible?: boolean;
    target?: string;
    routerLinkActiveOptions?: any;
    separator?: boolean;

    menuId?: string;
    parentMenuId?: number;
    userId?: number;
    select?:string;
    from?:string;
    where?:string;

}
