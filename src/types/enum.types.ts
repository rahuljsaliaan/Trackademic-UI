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
  AccentColor = 'var(--accent-color)',
  WarningColor = 'var(--warning-color)'
}

/**
 * Enum for defining route paths in the application.
 * @enum {string}
 */
export enum AppRoute {
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
 * @type {{ [key in UserRole]: AppRoute }}
 */
export const UserRoleRouteMap: { [key in UserRole]: AppRoute } = {
  [UserRole.Student]: AppRoute.DashboardStudent,
  [UserRole.Faculty]: AppRoute.DashboardFaculty,
  [UserRole.HeadOfDepartment]: AppRoute.DashboardHOD,
  [UserRole.Principal]: AppRoute.DashboardPrincipal
};

/**
 * Query keys used in the application.
 * @enum {string}
 */
export enum QueryKeys {
  CurrentUser = 'currentUser',
  StudentAttendance = 'studentAttendance',
  FacultyActiveSubjects = 'facultyActiveSubjects',
  FacultyAttendance = 'facultyAttendance',
  FacultySchedule = 'facultySchedule',
  EnrollmentStudent = 'enrollmentStudent',
  Attendance = 'attendance',
  AddOrUpdateNote = 'addOrUpdateNote',
  AssignedSubject = 'assignedSubject'
}

/**
 * Mutation keys used in the application.
 * @enum {string}
 */
export enum MutationKeys {
  Login = 'login',
  Logout = 'logout',
  AddAttendance = 'addAttendance',
  AddOrUpdateNote = 'addOrUpdateNote'
}

/**
 * Date formats used in the application.
 * @enum {string}
 */
export enum DateFormat {
  Default = 'dd-MM-yyyy'
}
