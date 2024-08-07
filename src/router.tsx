import { createBrowserRouter, RouteObject } from 'react-router-dom';
import { ReactRouter } from '@/types/utility.types';
import { AppRoutes } from '@/types/enum.types';
import App from '@/App';
import Login from '@/pages/auth/Login';
import ForgotPassword from '@/pages/auth/ForgotPassword';
import ResetPassword from '@/pages/auth/ResetPassword';
import StudentDashboard from '@/pages/dashboard/StudentDashboard';
import LecturerDashboard from '@/pages/dashboard/LecturerDashboard';
import StudentAttendance from '@/pages/attendance/StudentAttendance';
import GetStarted from '@/pages/getStarted/GetStarted';
import NotFoundError from '@/pages/error/NotFoundError';
import PersistLogin from '@/features/auth/components/PersistLogin';
import RequireAuth from '@/features/auth/components/RequireAuth';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundError />,
    children: [
      {
        element: <PersistLogin />,
        children: [
          {
            element: <RequireAuth />,
            children: [
              {
                path: AppRoutes.DashboardStudent,
                element: <StudentDashboard />
              },
              {
                path: AppRoutes.AttendanceStudent,
                element: <StudentAttendance />
              },
              {
                path: AppRoutes.DashboardFaculty,
                element: <LecturerDashboard />
              }
            ]
          }
        ]
      },
      {
        path: AppRoutes.Home,
        element: <GetStarted />
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
