import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AppLayoutComponent } from "./layouts/app-layout/app-layout.component";
import { SimpleLayoutComponent } from "./layouts/simple-layout/simple-layout.component";
import { TestLayoutComponent } from "./layouts/test-layout/test-layout.component";
import { LoginComponent } from "./login/login.component";
import { AuthGuard } from "./shared/guards/auth.guard";
import { RedirectGuard } from "./shared/guards/redirect.guard";

export const routes: Routes = [
    {   path: '', 
        component:SimpleLayoutComponent, 
        children: [
            { path : '', component : LoginComponent, canActivate:[RedirectGuard] },   
            { path : 'login', component : LoginComponent  , canActivate:[RedirectGuard] },   
        ]
    },
    {
        path:'',
        component:TestLayoutComponent,
        canActivate:[AuthGuard],
        children: [
            { path : 'dashboard', component : DashboardComponent },   
            { path:'**',redirectTo:'dashboard',pathMatch:'full'}, 

        ]
    },
  ];

@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports: [ RouterModule ]
  })
  export class AppRoutingModule {}