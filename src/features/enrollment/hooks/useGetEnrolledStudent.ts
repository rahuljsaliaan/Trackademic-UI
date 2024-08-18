import { useQuery } from '@tanstack/react-query';
import { QueryKeys } from '@/types/enum.types';
import { getEnrolledStudentsDetails } from '@/features/enrollment';

export const useGetEnrolledStudent = ({
  batchId,
  subjectId
}: {
  batchId: string;
  subjectId: string;
}) => {
  const { data: enrolledStudents, status } = useQuery({
    queryKey: [QueryKeys.EnrollmentStudent, batchId, subjectId],
    queryFn: () => getEnrolledStudentsDetails({ batchId, subjectId })
  });

  if (status === 'error') {
    console.error('error');
  }

  return { enrolledStudents, status };
};
