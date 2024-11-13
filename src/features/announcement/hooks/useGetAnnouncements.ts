import { useQuery } from '@tanstack/react-query';
import { QueryKeys } from '@/types/enum.types';
import { getAnnouncements } from '@/features/announcement';

export const useGetAnnouncements = () => {
  const { data: announcementData, status } = useQuery({
    queryKey: [QueryKeys.Announcements],
    queryFn: () => getAnnouncements()
  });

  return { announcementData, status };
};
