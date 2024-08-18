import { useQuery } from '@tanstack/react-query';
import { QueryKeys } from '@/types/enum.types';
import { getStudentAttendance } from '@/features/attendance';

export const useGetStudentAttendance = ({
  semester
}: {
  semester: number;
}) => {
  const { data: attendanceData, status } = useQuery({
    queryKey: [QueryKeys.StudentAttendance, semester],
    queryFn: () => getStudentAttendance({semester }),
    enabled:!!semester
  });

  if (status === 'error') {
    console.error('error');
  }

  return { attendanceData, status };
};
