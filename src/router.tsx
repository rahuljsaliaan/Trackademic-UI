import { createBrowserRouter, RouteObject } from 'react-router-dom';
import { ReactRouter } from '@/types/utility.types';
import { AppRoute } from '@/types/enum.types';
import App from '@/App';
import Login from '@/pages/auth/Login';
import ForgotPassword from '@/pages/auth/ForgotPassword';
import ResetPassword from '@/pages/auth/ResetPassword';
import StudentDashboard from '@/pages/dashboard/StudentDashboard';
import FacultyDashboard from '@/pages/dashboard/FacultyDashboard';
import StudentAttendance from '@/pages/attendance/StudentAttendance';
import GetStarted from '@/pages/getStarted/GetStarted';
import NotFoundError from '@/pages/error/NotFoundError';
import { PersistLogin, RequireAuth } from '@/features/auth';
import AddAttendance from '@/pages/attendance/AddAttendance';
import AttendanceHistory from '@/pages/attendance/AttendanceHistory';
import HodDashboard from '@/pages/dashboard/HodDashboard';
import ApproveAttendance from '@/pages/attendance/ApproveAttendance';
import Profile from '@/pages/profile/Profile';
import AddAnnouncement from '@/pages/announcements/AddAnnouncement';
import PrincipalDashboard from '@/pages/dashboard/PrincipalDashboard';

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
                path: AppRoute.DashboardStudent,
                element: <StudentDashboard />
              },
              {
                path: AppRoute.AttendanceStudent,
                element: <StudentAttendance />
              },
              {
                path: AppRoute.DashboardFaculty,
                element: <FacultyDashboard />
              },
              {
                path: AppRoute.AddAttendance,
                element: <AddAttendance />
              },
              {
                path: AppRoute.AttendanceHistory,
                element: <AttendanceHistory />
              },
              {
                path: AppRoute.DashboardHOD,
                element: <HodDashboard />
              },
              {
                path: AppRoute.ApproveAttendance,
                element: <ApproveAttendance />
              },
              {
                path: AppRoute.AddAnnouncement,
                element: <AddAnnouncement />
              },
              {
                path: AppRoute.DashboardPrincipal,
                element: <PrincipalDashboard />
              }
            ]
          }
        ]
      },
      {
        path: AppRoute.Home,
        element: <GetStarted />
      },

      {
        path: AppRoute.Login,
        element: <Login />
      },
      {
        path: AppRoute.ResetPassword,
        element: <ResetPassword />
      },
      {
        path: AppRoute.ForgotPassword,
        element: <ForgotPassword />
      },
      {
        path: AppRoute.Profile,
        element: <Profile />
      }
    ]
  }
];

const router: ReactRouter = createBrowserRouter(routes);

export default router;
