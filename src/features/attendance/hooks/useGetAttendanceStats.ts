import { useQuery } from '@tanstack/react-query';
import { QueryKeys } from '@/types/enum.types';
import { getAttendanceStats } from '@/features/attendance';

export const useGetAttendanceStats = () => {
  const { data: attendanceStatsData, status } = useQuery({
    queryKey: [QueryKeys.AttendanceStats],
    queryFn: () => getAttendanceStats()
  });

  return { attendanceStatsData, status };
};
