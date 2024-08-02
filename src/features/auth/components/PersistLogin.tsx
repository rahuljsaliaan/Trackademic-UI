import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { AppRoutes } from '@/types/enum.types';
import useRefreshToken from '@/features/auth/hooks/useVerifyRefreshToken';

interface PersistLoginProps {}

const PersistLogin: React.FC<PersistLoginProps> = () => {
  const navigate = useNavigate();

  const { status } = useRefreshToken();

  if (status === 'error') {
    navigate(`/${AppRoutes.Login}`);
  }

  return <>{status === 'pending' ? 'loading' : <Outlet />}</>;
};

export default PersistLogin;
