import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FilterService } from './addfilter/addfilter.service'
import { AddFilterComponent } from './addfilter/addfilter.component'
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TabpanelComponent } from './tabpanel/tabpanel.component';
import { TabpanelService } from "./tabpanel/tabpanel.service";
//import {OverlayPanelModule} from 'primeng/components/overlaypanel';
import { FilterComponent } from "./Filter/filter.component"
import { GetFilterService } from "./filter/filter.service";
import { MenuService} from "./addmenu/addmenuservice";
import { AddMenuComponent } from './addmenu/addmenucomponent';
import {GetMenuService} from './menu/menu.service';
import {
  PanelMenuModule, SplitButtonModule, InputTextModule, PanelModule, Fieldset, TabViewModule, DialogModule, FieldsetModule,
  ToolbarModule, DropdownModule, GrowlModule, ButtonModule, DataTableModule, SharedModule,
} from 'primeng/primeng';


const appRoutes: Routes = [
  {
    path: "",
    redirectTo: "app",
    pathMatch: "full"
  },
  {
    path: "app",
    component: AppComponent
  },
  {
    path: "menu",
    component: MenuComponent
  },
  {
    path: "tabpanel",
    component: TabpanelComponent
  },
  {
    path: "addfilter",
    component: AddFilterComponent
  },
  {
    path: "filter",
    component: FilterComponent
  },
  {
    path: "addmenu",
    component: AddMenuComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    MenuComponent,
    TabpanelComponent,
    AddFilterComponent,
    AddMenuComponent
  ],
  imports: [
    BrowserModule,
    DialogModule,
    SplitButtonModule,
    GrowlModule,
    DropdownModule,
    CommonModule,
    InputTextModule,
    FieldsetModule,
    PanelModule,
    BrowserAnimationsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    PanelMenuModule,
    TabViewModule,
    FieldsetModule,
    ToolbarModule,
    ButtonModule,
    DataTableModule, SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    TabpanelService,
    FilterService,
    GetFilterService,
    MenuService,
    GetMenuService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
