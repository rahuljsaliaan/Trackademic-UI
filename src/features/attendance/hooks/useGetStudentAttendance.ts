import { useQuery } from '@tanstack/react-query';
import { QueryKeys } from '@/types/enum.types';
import { getStudentAttendance } from '../services/api';

export const useGetStudentAttendance = (semester: number) => {
  const { data: attendanceData, status } = useQuery({
    queryKey: [QueryKeys.StudentAttendance, semester],
    queryFn: () => getStudentAttendance(semester)
  });

  if (status === 'error') {
    console.error('error');
  }

  return { attendanceData, status };
};
