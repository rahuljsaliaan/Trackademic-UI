import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { AppRoute } from '@/types/enum.types';
import { useRefreshToken } from '@/features/auth';

interface PersistLoginProps {}

export const PersistLogin: React.FC<PersistLoginProps> = () => {
  const navigate = useNavigate();

  const { status } = useRefreshToken();

  if (status === 'error') {
    navigate(`/${AppRoute.Login}`);
  }

  return <>{status === 'pending' ? 'loading' : <Outlet />}</>;
};
