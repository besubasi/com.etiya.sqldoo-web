import { EventEmitter } from '@angular/core';
import { MenuItem } from "primeng/primeng";
export class DefaultMenuItem implements MenuItem {
    
    label?: string;
    icon?: string;
    command?: (event?: any) => void;
    url?: string;
    routerLink?: any;
    eventEmitter?: EventEmitter<any>;
    items?: DefaultMenuItem[];
    folder?: boolean;
    expanded?: boolean;
    disabled?: boolean;
    visible?: boolean;
    target?: string;
    routerLinkActiveOptions?: any;
    separator?: boolean;
}
