
export interface Menus{

    menuId?: string;
    parentMenuId?: number;
    userId?: number;
    name?: string;
    folder?: boolean;
    expanded?: boolean;   
    active?: boolean;
    items?: Menus[];
}