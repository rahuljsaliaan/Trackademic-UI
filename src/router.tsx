import { createBrowserRouter, RouteObject } from 'react-router-dom';
import Login from './pages/auth/Login';
import ForgotPassword from '@/pages/auth/ForgotPassword';
import ForgotResetPassword from '@/pages/auth/ForgotResetPassword';
import App from './App';

 const routes:RouteObject[] = [
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        // element: <Home/>
      },  
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/reset_password',
        element: <ForgotResetPassword />
      },
      {
        path: '/change_password',
        element: <ForgotPassword />
      },
    ]
  }
];

export const router = createBrowserRouter(routes);