import { Routes } from '@angular/router';
import { HeaderComponent } from '../components/header/header.component';
import { UsersComponent } from '../components/users/users.component';
import { HomeComponent } from '../components/home/home.component';
import { AuthComponent } from '../components/auth/auth.component';

export const routes: Routes = [
    { path: 'header', component: HeaderComponent },
    { path: 'users', component: UsersComponent },
    { path: 'home', component: HomeComponent },
    { path: 'auth', component: AuthComponent },
    { path: '', component: HomeComponent },
];