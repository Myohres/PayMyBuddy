import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AuthenticationComponent} from "./authentication/authentication.component";
import {MenuComponent} from "./menu/menu.component";




const routes: Routes = [
  { path: '', component: AuthenticationComponent },
  { path:'menu', component: MenuComponent }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule{}

