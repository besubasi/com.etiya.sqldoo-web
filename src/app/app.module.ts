import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { GridComponent } from './grid/grid.component';

import { TabpanelComponent } from './tabpanel/tabpanel.component';
import { TabpanelService} from "./tabpanel/tabpanel.service";


import { PanelMenuModule, TabViewModule, FieldsetModule, ToolbarModule, ButtonModule, DataTableModule,SharedModule } from 'primeng/primeng';


const appRoutes: Routes = [
  {
    path: "",
    redirectTo:"app",
    pathMatch:"full"
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
    component: TabpanelComponent,
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TabpanelComponent,
    GridComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    PanelMenuModule, 
    TabViewModule,
    FieldsetModule,
    ToolbarModule,
    ButtonModule,
    DataTableModule,SharedModule
  ],
  providers: [
    TabpanelService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
