import { useQuery } from '@tanstack/react-query';
import { getCurrentUser } from '@/features/users/services/api';
import { QueryKeys } from '@/types/enum.types';

export const useGetCurrentUser = () => {
  const { data: user, status } = useQuery({
    queryKey: [QueryKeys.CurrentUser],
    queryFn: getCurrentUser
  });

  if (status === 'error') {
    console.error('error');
  }

  return { user, status };
};
