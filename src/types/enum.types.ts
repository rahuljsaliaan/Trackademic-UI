/**
 * Enum for socket event types.
 * @enum {string}
 */
export enum SocketEvent {
  CONNECT = 'connect',
  DISCONNECT = 'disconnect'
}

/**
 * Enum for CSS root color variables.
 * @enum {string}
 */
export enum RootColor {
  BACKGROUND_COLOR = 'var(--background-color)',
  PRIMARY_COLOR = 'var(--primary-color)',
  SECONDARY_COLOR = 'var(--secondary-color)',
  TERTIARY_COLOR = 'var(--tertiary-color)',
  TEXT_COLOR = 'var(--text-color)',
  ACCENT_COLOR = 'var(--accent-color)'
}

/**
 * Enum for defining route paths in the application.
 * @enum {string}
 */
export enum Routes {
  HOME = '/',
  LOGIN = '/login',
  RESET_PASSWORD = '/reset-password',
  CHANGE_PASSWORD = '/change-password'
}
