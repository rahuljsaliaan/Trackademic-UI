import React from 'react';
import { Outlet } from 'react-router-dom';
import GlobalStyle from '@/styles/GlobalStyle';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <main className="">
        <Outlet />
      </main>
    </>
  );
};

export default App;
