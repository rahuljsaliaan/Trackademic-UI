import ForgotPassword from '@/pages/auth/ForgotPassword';
import GlobalStyle from '@/styles/GlobalStyle';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <main className="">
        <ForgotPassword />
      </main>
    </>
  );
}
