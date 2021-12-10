import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
 {path:'', redirectTo:'/user/login', pathMatch:'full'},
 {
   path:'user', 
   children:[
     {path:'register',component:RegisterComponent,pathMatch:'full'},
     {path:'login',component:LoginComponent,pathMatch:'full'}
   ]
 },
 {path:'home',component:HomeComponent, canActivate:[AuthGuard], pathMatch:'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
