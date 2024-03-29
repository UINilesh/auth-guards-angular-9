import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
    path:'',  component: HomeComponent, pathMatch:'full', canActivate:[AuthGuard]
  },
  {
    path:'register',component:RegistrationComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'home',component:HomeComponent, canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
