import { useQuery } from '@tanstack/react-query';
import { getRefreshToken } from '@/features/auth/services/api';

const useRefreshToken = () => {
  const { status } = useQuery({
    queryKey: ['refresh-token'],
    queryFn: getRefreshToken
  });

  if (status === 'error') {
    console.log('error');
  }

  return { status };
};

export default useRefreshToken;
