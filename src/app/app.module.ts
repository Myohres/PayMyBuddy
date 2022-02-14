import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {TestComponentComponent} from "../test-component/test-component.component";
import {HttpClientModule} from "@angular/common/http";
import {AuthenticationComponent} from "./authentication/authentication.component";
import {AppRoutingModule} from "./app-routing-module";
import {MenuComponent} from "./menu/menu.component";
import { TransactionComponent } from './transaction/transaction.component';


import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";


@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    MenuComponent,
    TestComponentComponent,
    TransactionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,

    MatTableModule,

    MatTableModule,
    MatPaginatorModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
