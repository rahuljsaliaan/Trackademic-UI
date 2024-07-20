import { Helmet } from 'react-helmet';
import ForgotResetPassword from '@/pages/auth/ForgotResetPassword';
import GlobalStyle from '@/styles/GlobalStyle';

export default function App() {
  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyle />
      <main className="">
        <ForgotResetPassword />
      </main>
    </>
  );
}
