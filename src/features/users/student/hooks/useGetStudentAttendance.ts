import { useQuery } from '@tanstack/react-query';
import { QueryKeys } from '@/types/enum.types';
import { getStudentAttendance } from '../service/api';

export const useGetStudentAttendance = () => {

  const { data: attendanceData, status } = useQuery({
    queryKey: [QueryKeys.StudentAttendance],
    queryFn: getStudentAttendance
  });

  if (status === 'error') {
    console.error('error');
  }

  return { attendanceData, status };
};
