import { APIResourceV1 } from 'trackademic-schema-toolkit';
import { useQuery } from '@tanstack/react-query';
import { getRefreshToken } from '@/features/auth';

export const useRefreshToken = () => {
  const { status } = useQuery({
    queryKey: [APIResourceV1.RefreshToken],
    queryFn: getRefreshToken
  });

  if (status === 'error') {
    console.error('error');
  }

  return { status };
};
