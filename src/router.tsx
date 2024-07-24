import { createBrowserRouter, RouteObject } from 'react-router-dom';
import { ReactRouter } from '@/types/utility.types';
import App from '@/App';
import Login from '@/pages/auth/Login';
import ForgotPassword from '@/pages/auth/ForgotPassword';
import ResetPassword from '@/pages/auth/ResetPassword';
import StudentDashboard from '@/pages/dashboard/StudentDashboard';
import LecturerDashboard from '@/pages/dashboard/LecturerDashboard';
import GetStarted from '@/pages/getStarted/GetStarted';
import NotFoundError from '@/pages/error/NotFoundError';
import { AppRoutes } from '@/types/enum.types';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundError />,
    children: [
      {
        path: AppRoutes.Home,
        element: <GetStarted />
      },
      {
        path: AppRoutes.DashboardStudent,
        element: <StudentDashboard />
      },
      {
        path: AppRoutes.DashboardFaculty,
        element: <LecturerDashboard />
      },
      {
        path: AppRoutes.Login,
        element: <Login />
      },
      {
        path: AppRoutes.ResetPassword,
        element: <ResetPassword />
      },
      {
        path: AppRoutes.ForgotPassword,
        element: <ForgotPassword />
      }
    ]
  }
];

const router: ReactRouter = createBrowserRouter(routes);

export default router;
