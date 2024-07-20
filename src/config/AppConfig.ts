import { secondsToMilliseconds } from 'date-fns';

const AppConfig = {
  App: {
    IS_DEVELOPMENT: ['development', 'dev', 'local'].includes(
      <string>import.meta.env.VITE_ENV
    )
  },

  Api: {
    BASE_URL:
      <string>import.meta.env.VITE_API_BASE_URL ||
      'http://localhost:8000/api/v1/',
    REQUEST_TIMEOUT: secondsToMilliseconds(
      parseInt(<string>import.meta.env.VITE_API_REQUEST_TIMEOUT) || 10
    )
  }
};

export default AppConfig;
