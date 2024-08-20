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
  DashboardHOD = '/dashboard-hod',
  DashboardPrincipal = '/dashboard-principal',
  ForgotPassword = '/forgot-password',
  ResetPassword = '/reset-password',
  ChangePassword = '/change-password',
  AddAttendance = '/add-attendance',
  AttendanceHistory = '/attendance-history',
  AttHistory = '/attHistory',
  ApproveAttendance = '/approve-attendance',
  Profile = '/profile',
  AddAnnouncement = '/add-announcement'
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
  User = 'User',
  StudentAttendance = 'studentAttendance',
  FacultyActiveSubjects = 'facultyActiveSubjects',
  FacultySchedule = 'facultySchedule',
  EnrollmentStudent = 'enrollmentStudent',
  Attendance = 'attendance',
  AttendanceStats = 'attendanceStats',
  AddOrUpdateNote = 'addOrUpdateNote',
  AssignedSubject = 'assignedSubject',
  VerificationToken = 'verificationToken',
  AbsentRecords = 'absentRecords',
  AllAttendance = 'allAttendance',
  AttHistory = 'attHistory',
  AllBatches = 'allBatches',
  Announcements = 'announcements'
}

/**
 * Mutation keys used in the application.
 * @enum {string}
 */
export enum MutationKeys {
  Login = 'login',
  Logout = 'logout',
  AddAttendance = 'addAttendance',
  AddOrUpdateNote = 'addOrUpdateNote',
  ResetPassword = 'resetPassword',
  ForgotPassword = 'forgotPassword',
  VerifyOTP = 'verifyOTP',
  RefreshToken = 'refreshToken',
  Approved = 'approved',
  Announcement = 'announcement'
}

/**
 * Date formats used in the application.
 * @enum {string}
 */
export enum DateFormat {
  Default = 'dd-MM-yyyy'
}
