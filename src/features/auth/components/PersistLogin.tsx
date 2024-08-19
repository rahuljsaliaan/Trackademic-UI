import React from 'react';
import { Outlet } from 'react-router-dom';
import { useRefreshToken } from '@/features/auth';

interface PersistLoginProps {}

export const PersistLogin: React.FC<PersistLoginProps> = () => {
  const { status } = useRefreshToken();

  return <>{status === 'pending' ? 'loading' : <Outlet />}</>;
};
