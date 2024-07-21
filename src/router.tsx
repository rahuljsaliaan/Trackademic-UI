import { createBrowserRouter, RouteObject } from 'react-router-dom';
import { ReactRouter } from '@/types/utility.types';
import App from '@/App';
import Login from '@/pages/auth/Login';
import ForgotPassword from '@/pages/auth/ForgotPassword';
import ForgotResetPassword from '@/pages/auth/ForgotResetPassword';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/'
        // element: <Home/>
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/reset-password',
        element: <ForgotResetPassword />
      },
      {
        path: '/change-password',
        element: <ForgotPassword />
      }
    ]
  }
];

const router: ReactRouter = createBrowserRouter(routes);

export default router;
