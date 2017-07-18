import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TabpanelComponent } from './tabpanel/tabpanel.component';
import { TabpanelService } from "./tabpanel/tabpanel.service";
import { MenuComponent } from './menu/menu.component';
import { MenuService} from './menu/menu.service';

import {
  PanelMenuModule, SplitButtonModule, InputTextModule, PanelModule, Fieldset, TabViewModule, DialogModule, FieldsetModule,
  ToolbarModule, DropdownModule, GrowlModule, ButtonModule, DataTableModule, SharedModule, CheckboxModule,InputTextareaModule
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
  }];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TabpanelComponent
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
    CheckboxModule,
    InputTextareaModule
  ],
  providers: [
    TabpanelService,
    MenuService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
