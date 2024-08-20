import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useGetCurrentUser } from '@/features/users/hooks/useGetCurrentUser';
import { AppRoute } from '@/types/enum.types';

interface RequireAuthProps {
  children?: React.ReactNode;
}

export const RequireAuth: React.FC<RequireAuthProps> = () => {
  const navigate = useNavigate();

  const { status } = useGetCurrentUser();

  if (status === 'error') {
    navigate(`/${AppRoute.Login}`, { replace: true });
  }

  return <>{status === 'pending' ? 'loading' : <Outlet />}</>;
};
