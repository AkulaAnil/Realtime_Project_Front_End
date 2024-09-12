import { lazy } from 'react';

const LoginComponent = lazy(() => import('./Pages/Login/loginComponent'));
const UsersContainer = lazy(() => import('./Pages/Users/users_container'));

export const routes = [
    {path: '/', component: <LoginComponent />, isAdmin: false, isAuth: false },
    {path: '/users', component: <UsersContainer />, isAdmin: true, isAuth: true }
];