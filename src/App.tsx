import React from 'react';
import { Outlet } from 'react-router-dom';
import GlobalStyle from '@/styles/GlobalStyle';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <main className="">
        <Outlet />
      </main>
    </QueryClientProvider>
  );
};

export default App;
