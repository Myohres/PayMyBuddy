import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AuthenticationComponent} from "./authentication/authentication.component";
import {MenuComponent} from "./menu/menu.component";




const routes: Routes = [
  { path: '', component: AuthenticationComponent },
  { path:'Home', component: MenuComponent },
  { path:'Transfer', component: MenuComponent },
  { path:'Profile', component: MenuComponent },
  { path:'Contact', component: MenuComponent },
  { path:'LogOff', component: MenuComponent }
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

