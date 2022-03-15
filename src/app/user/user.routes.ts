import { Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { ProfileComponent } from './profile.component';

export const userRoutes:Routes = [
    { path: 'profile', component: ProfileComponent },  //   /user/profile
    { path: 'login', component: LoginComponent }  //  (user/login)  
]