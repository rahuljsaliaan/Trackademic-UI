import { useQuery } from '@tanstack/react-query';
import { QueryKeys } from '@/types/enum.types';
import { getStudentAttendance } from '@/features/attendance/services/api';

export const useGetStudentAttendance = ({
  studentId,
  semester
}: {studentId?: string, semester: number}) => {
  const { data: attendanceData, status } = useQuery({
    queryKey: [QueryKeys.StudentAttendance, semester, studentId],
    queryFn: () => getStudentAttendance({ studentId, semester }),
    enabled: !!studentId && !!semester, 
  });

  if (status === 'error') {
    console.error('error');
  }

  return { attendanceData, status };
};
