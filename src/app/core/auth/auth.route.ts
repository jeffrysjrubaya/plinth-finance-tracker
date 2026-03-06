import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { PasswordRecovery } from './pages/password-recovery/password-recovery';


export const AUTH_ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        loadComponent: () => import('./pages/login/login').then(m => m.Login),
        data: { title: 'Login' }
    },
    {
        path: 'register',
        loadComponent: () => import('./pages/register/register').then(m => m.Register),
        data: { title: 'Register' }
    },
    {
        path: "forgot-password",
        loadComponent: () => import('./pages/password-recovery/password-recovery').then(m => m.PasswordRecovery),
        data: { title: 'Forgot Password' }
    }
];  