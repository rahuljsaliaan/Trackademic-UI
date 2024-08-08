import { UserRole } from 'trackademic-schema-toolkit';

/**
 * Enum for socket event types.
 * @enum {string}
 */
export enum SocketEvent {
  Connect = 'connect',
  Disconnect = 'disconnect'
}

/**
 * Enum for CSS root color variables.
 * @enum {string}
 */
export enum RootColor {
  BackgroundColor = 'var(--background-color)',
  PrimaryColor = 'var(--primary-color)',
  SecondaryColor = 'var(--secondary-color)',
  TertiaryColor = 'var(--tertiary-color)',
  TextColor = 'var(--text-color)',
  AccentColor = 'var(--accent-color)'
}

/**
 * Enum for defining route paths in the application.
 * @enum {string}
 */
export enum AppRoutes {
  Home = '/',
  Login = '/login',
  DashboardStudent = '/dashboard-student',
  AttendanceStudent = '/attendance-student',
  DashboardFaculty = '/dashboard-faculty',
  FacultyDashboard = '/faculty-dashboard',
  DashboardHOD = '/dashboard-hod',
  DashboardPrincipal = '/dashboard-principal',
  ForgotPassword = '/forgot-password',
  ResetPassword = '/reset-password',
  ChangePassword = '/change-password',
  AddAttendance = '/add-attendance'
}

/**
 * Maps user roles to dashboard routes.
 *
 * Utilizes `UserRole` enum for keys and `AppRoutes` enum for values to assign
 * dashboard routes based on user roles.
 *
 * @type {{ [key in UserRole]: AppRoutes }}
 */
export const UserRoleRouteMap: { [key in UserRole]: AppRoutes } = {
  [UserRole.Student]: AppRoutes.DashboardStudent,
  [UserRole.Faculty]: AppRoutes.DashboardFaculty,
  [UserRole.HeadOfDepartment]: AppRoutes.DashboardHOD,
  [UserRole.Principle]: AppRoutes.DashboardPrincipal
};

export enum QueryKeys {
  CurrentUser = 'currentUser',
  StudentAttendance = 'studentAttendance',
  FacultyActiveSubjects = 'facultyActiveSubjects',
  FacultyAttendance = 'FacultyAttendance'
}

export enum MutationKeys {
  Login = 'login'
}
