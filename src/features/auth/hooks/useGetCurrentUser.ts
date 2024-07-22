import { useQuery } from '@tanstack/react-query';
import { getCurrentUser } from '@/features/auth/services/api';

export const useGetCurrentUser = () => {
  const { data, status } = useQuery({
    queryKey: ['current-user'],
    queryFn: getCurrentUser
  });

  if (status === 'error') {
    console.log('error');
  }

  return { data, status };
};
