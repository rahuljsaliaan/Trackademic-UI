// import ForgotPassword from '@/pages/auth/ForgotPassword';
import GlobalStyle from '@/styles/GlobalStyle';
import StudentDashboard from '@/pages/dashboard/StudentDashboard';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <main className="">
        <StudentDashboard />
      </main>
    </>
  );
}
