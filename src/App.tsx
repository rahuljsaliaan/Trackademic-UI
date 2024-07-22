import React from 'react';
import { Outlet } from 'react-router-dom';
// import ForgotPassword from '@/pages/auth/ForgotPassword';
import GlobalStyle from '@/styles/GlobalStyle';
import StudentDashboard from '@/pages/dashboard/StudentDashboard';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <main className="">
        <Outlet />
        <StudentDashboard />
      </main>
    </>
  );
};

export default App;
