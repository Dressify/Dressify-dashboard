import { Routes } from '@angular/router';
import {ErrorPageComponent} from "../../pages/error-page/error-page.component";

export const full: Routes = [
    {
        path: 'auth',
        loadChildren: () => import('../../pages/auth/auth.module').then(m => m.AuthModule),
    },
    {
        path: '**', component: ErrorPageComponent
    },
];


