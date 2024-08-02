import { useQuery } from '@tanstack/react-query';
import { getCurrentUser } from '@/features/users/services/api';
import { APIResourceV1 } from 'trackademic-schema-toolkit';

export const useGetCurrentUser = () => {
  const { data: user, status } = useQuery({
    queryKey: [APIResourceV1.CurrentUser],
    queryFn: getCurrentUser
  });

  if (status === 'error') {
    console.error('error');
  }

  return { user, status };
};
