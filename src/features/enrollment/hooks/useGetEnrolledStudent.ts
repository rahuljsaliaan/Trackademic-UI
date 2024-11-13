import { useQuery } from '@tanstack/react-query';
import { QueryKeys } from '@/types/enum.types';
import { getEnrolledStudentsDetails } from '@/features/enrollment';

export const useGetEnrolledStudent = ({
  batchId,
  subjectId
}: {
  batchId: string | null;
  subjectId: string | null;
}) => {
  // Determine if query should be enabled based on the presence of batchId and subjectId

  const { data: enrolledStudents, status } = useQuery({
    queryKey: [QueryKeys.EnrollmentStudent, batchId, subjectId],
    queryFn: () => getEnrolledStudentsDetails({ batchId, subjectId }),
    enabled: !!batchId && !!subjectId
  });

  if (status === 'error') {
    console.error('Error fetching enrolled students details');
  }

  return { enrolledStudents, status };
};
