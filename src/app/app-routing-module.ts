import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AuthenticationComponent} from "./authentication/authentication.component";
import {MenuComponent} from "./menu/menu.component";
import {SubscriptionComponent} from "./subscription/subscription.component";




const routes: Routes = [
  { path: '', component: AuthenticationComponent },
  { path:'home', component: MenuComponent },
  { path:'subscription', component: SubscriptionComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule{ }
