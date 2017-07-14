import { Menus } from "./menu";

export class DefaultMenu implements Menus{

    menuId?: string;
    parentMenuId?: number;
    userId?: number;
    name?: string;
    folder?: boolean;
    expanded?: boolean;   
    active?: boolean;
    items?:  DefaultMenu[];
}