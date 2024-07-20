import winston from 'winston';
import AppConfig from '@/config/AppConfig';

const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4
};

const level = () => {
  return AppConfig.App.IS_DEVELOPMENT ? 'debug' : 'http';
};

const colors = {
  error: 'red',
  warn: 'yellow',
  info: 'cyan',
  http: 'magenta',
  debug: 'green'
};

winston.addColors(colors);

// Custom timestamp format to ensure milliseconds are always three digits
const customTimestampFormat = winston.format((info) => {
  const date = new Date();
  const ms = date.getMilliseconds().toString().padStart(3, '0'); // Pad milliseconds with leading zeros
  const timestamp = `${date.getFullYear()}-${(date.getMonth() + 1)
    .toString()
    .padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')} ${date
    .getHours()
    .toString()
    .padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}:${date
    .getSeconds()
    .toString()
    .padStart(2, '0')}.${ms}`;
  info.timestamp = timestamp;
  return info;
})();

// Common format with custom timestamp
const format = winston.format.combine(
  customTimestampFormat,
  winston.format.printf(
    (info) => `${info.timestamp} [${info.level}]: ${info.message}`
  )
);

// Console-specific format with colorization
const consoleFormat = winston.format.combine(
  winston.format.colorize({
    all: false,
    message: true,
    level: true
  }),
  format // Reuse the common format which includes the custom timestamp
);

const transports = [
  new winston.transports.Console({
    format: consoleFormat // Use colorized format for console
  }),
  new winston.transports.File({
    filename: 'logs/error.log',
    level: 'error',
    format: format // Use common format for file
  }),
  new winston.transports.File({
    filename: 'logs/all.log',
    format: format // Use common format for file
  })
];

/**
 * Logger instance configured with console and file transports.
 * - Console output is colorized for readability.
 * - File output is split between 'error.log' for error level messages and 'all.log' for all messages.
 * - Custom timestamp format ensures milliseconds are always three digits.
 */
const Logger = winston.createLogger({
  level: level(),
  levels,
  format,
  transports
});

export default Logger;
