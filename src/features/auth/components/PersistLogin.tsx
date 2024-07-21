import React from 'react';
import useRefreshToken from '@/features/auth/hooks/useVerifyRefreshToken';

interface PersistLoginProps {
  children: React.ReactNode;
}

const PersistLogin: React.FC<PersistLoginProps> = ({ children }) => {
  const { status } = useRefreshToken();

  return <>{status === 'pending' ? 'loading' : <>{children}</>}</>;
};

export default PersistLogin;
