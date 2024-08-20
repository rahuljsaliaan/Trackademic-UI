import { useQuery } from '@tanstack/react-query';
import { QueryKeys } from '@/types/enum.types';
import { getAllBatches } from '@/features/batch';

export const useGetAllBatches = ({ programmeId }: { programmeId?: string }) => {
  const { data: allBatches, status } = useQuery({
    queryKey: [QueryKeys.AllBatches, programmeId],
    queryFn: () => getAllBatches({ programmeId }),
    enabled: !!programmeId
  });

  if (status === 'error') {
    console.error('error');
  }

  return { allBatches, status };
};
