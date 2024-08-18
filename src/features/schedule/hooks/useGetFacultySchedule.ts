import { useQuery } from '@tanstack/react-query';
import { QueryKeys } from '@/types/enum.types';
import { getFacultySchedule } from '@/features/schedule';

export const useGetFacultySchedule = (day: string) => {
  const { data: facultySchedule, status } = useQuery({
    queryKey: [QueryKeys.FacultySchedule],
    queryFn: () => getFacultySchedule(day)
  });

  if (status === 'error') {
    console.error('error');
  }

  return { facultySchedule, status };
};
