import { useQuery } from '@tanstack/react-query';
import { getUser } from '@/features/users';
import { QueryKeys } from '@/types/enum.types';

export const useGetUser = ({ userId }: { userId?: string }) => {
  const { data: user, status } = useQuery({
    queryKey: [QueryKeys.User, userId],
    queryFn: () => getUser({ userId }),
    enabled: !!userId
  });

  return { user, status };
};
