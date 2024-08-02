import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useGetCurrentUser } from '@/features/users/hooks/useGetCurrentUser';

interface RequireAuthProps {
  children?: React.ReactNode;
}

const RequireAuth: React.FC<RequireAuthProps> = () => {
  const navigate = useNavigate();

  const { status } = useGetCurrentUser();

  if (status === 'error') {
    navigate(`/${AppRoutes.Login}`);
  }

  return <>{status === 'pending' ? 'loading' : <Outlet />}</>;
};

export default RequireAuth;
