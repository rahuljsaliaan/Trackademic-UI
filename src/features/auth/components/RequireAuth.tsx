import React from 'react';
import { useGetCurrentUser } from '@/features/users/hooks/useGetCurrentUser';

interface RequireAuthProps {
  children: React.ReactNode;
}

const PersistLogin: React.FC<RequireAuthProps> = ({ children }) => {
  const { status } = useGetCurrentUser();

  return <>{status === 'pending' ? 'loading' : <>{children}</>}</>;
};

export default PersistLogin;
