import { useQuery } from '@tanstack/react-query';
import { getCurrentUser } from '@/features/users';
import { QueryKeys } from '@/types/enum.types';

export const useGetCurrentUser = () => {
  const { data: user, status } = useQuery({
    queryKey: [QueryKeys.CurrentUser],
    queryFn: getCurrentUser
  });

  return { user, status };
};
