import { useQuery } from '@tanstack/react-query';
import { QueryKeys } from '@/types/enum.types';
import { getAttendance } from '@/features/attendance';

export const useGetAttendance = ({
  attendanceId
}: {
  attendanceId?: string;
}) => {
  const { data: attendance, status } = useQuery({
    queryKey: [QueryKeys.AllAttendance],
    queryFn: () => getAttendance(attendanceId),
    enabled: !!attendanceId
  });

  return { attendance, status };
};
