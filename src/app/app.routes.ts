import { Routes } from '@angular/router';
import { authGuard } from './core/auth/auth-guard';

export const routes: Routes = [
    {
        path: 'auth',
        loadChildren: () => import('./core/auth/auth.route').then((r) => r.AUTH_ROUTES),
        data: { title: 'Authentication' },
    },
    // 2. Protected routes (Inside the Layout)
    {
        path: '',
        canActivate: [authGuard],
        loadComponent: () => import('./core/shared/navigation/main-layout/main-layout').then((m) => m.MainLayout),
        children: [
            {
                path: 'dashboard',
                loadComponent: () => import('./features/dashboard/dashboard').then((m) => m.Dashboard),
                data: { title: 'Dashboard' },
            },
            {
                path: 'transactions',
                loadComponent: () => import('./features/transactions/transactions').then((m) => m.Transactions),
                data: { title: 'Transactions' },
            },
            {
                path: 'accounts',
                loadComponent: () => import('./features/accounts/accounts').then((m) => m.Accounts),
                data: { title: 'Accounts' },
            },
            {
                path: 'budgets',
                loadComponent: () => import('./features/budgets/budgets').then((m) => m.Budgets),
                data: { title: 'Budgets & Goals' },
            },
            {
                path: 'billings',
                loadComponent: () => import('./features/billings/billings').then((m) => m.Billings),
                data: { title: 'Bills & Recurring Payments' },
            },
            {
                path: 'reports',
                loadComponent: () => import('./features/reports/reports').then((m) => m.Reports),
                data: { title: 'Reports & Analytics' }, 
            },
            { 
                path: '', redirectTo: 'dashboard', pathMatch: 'full' 
            },
        ],
    },
];
