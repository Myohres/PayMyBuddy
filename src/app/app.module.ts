import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {TestComponentComponent} from "../test-component/test-component.component";
import {HttpClientModule} from "@angular/common/http";
import {AuthenticationComponent} from "./authentication/authentication.component";
import {AppRoutingModule} from "./app-routing-module";
import {MenuComponent} from "./menu/menu.component";
import { SubscriptionComponent } from './subscription/subscription.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    MenuComponent,
    TestComponentComponent,
    SubscriptionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
