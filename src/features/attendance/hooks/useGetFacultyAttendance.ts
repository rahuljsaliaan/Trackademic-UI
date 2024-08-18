import { useQuery } from '@tanstack/react-query';
import { QueryKeys } from '@/types/enum.types';
import { getAttendanceStats } from '@/features/attendance';

export const useGetAttendanceStats = ({
  batchId,
  subjectId
}: {
  batchId: string;
  subjectId: string;
}) => {
  const { data: attendanceStatsData, status } = useQuery({
    queryKey: [QueryKeys.FacultyAttendance],
    queryFn: () => getAttendanceStats({ batchId, subjectId })
  });

  if (status === 'error') {
    console.error('error');
  }

  return { attendanceStatsData, status };
};
