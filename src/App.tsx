import React from 'react';
import { Outlet } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import GlobalStyle from '@/styles/GlobalStyle';
import '@/styles/index.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3 // Set the maximum number of retries
    }
  }
});

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <main className="">
        <Outlet />
      </main>
      <ReactQueryDevtools initialIsOpen={false} />
      <Toaster position="top-center" reverseOrder={false} />
    </QueryClientProvider>
  );
};

export default App;
