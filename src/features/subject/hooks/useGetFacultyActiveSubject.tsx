import { useQuery } from '@tanstack/react-query';
import { QueryKeys } from '@/types/enum.types';
import { getFacultyActiveSubjects } from '@/features/subject';

export const useGetFacultyActiveSubjects = () => {
  const { data: assignedSubjectsData, status } = useQuery({
    queryKey: [QueryKeys.FacultyActiveSubjects],
    queryFn: getFacultyActiveSubjects
  });

  if (status === 'error') {
    console.error('error');
  }

  return { assignedSubjectsData, status };
};
