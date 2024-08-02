import { useQuery } from '@tanstack/react-query';
import { getRefreshToken } from '@/features/auth/services/api';
import { APIResourceV1 } from 'trackademic-schema-toolkit/dist';

const useRefreshToken = () => {
  const { status } = useQuery({
    queryKey: [APIResourceV1.RefreshToken],
    queryFn: getRefreshToken
  });

  if (status === 'error') {
    console.log('error');
  }

  return { status };
};

export default useRefreshToken;
