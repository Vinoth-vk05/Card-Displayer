import { Routes } from '@angular/router';
import { Home } from './feature/home/home';

export const routes: Routes = [
    {path:"", redirectTo:"/home-page", pathMatch:'full'},
    {path:"home-page", component: Home, pathMatch:'full'}
];
