import ForgotResetPassword from '@/pages/auth/ForgotResetPassword';
import GlobalStyle from '@/styles/GlobalStyle';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <main className="">
        <ForgotResetPassword />
      </main>
    </>
  );
}
