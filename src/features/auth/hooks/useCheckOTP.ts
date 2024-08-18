import { useQuery } from '@tanstack/react-query';
import { QueryKeys } from '@/types/enum.types';
import { checkOTP } from '@/feature/auth';

export const useGetEnrolledStudent = ({
  otp
}: {
  otp:string;
}) => {

  const { data: enrolledStudents, status } = useQuery({
    queryKey: [QueryKeys.CheckOTP],
    queryFn: () => checkOTP({otp}),
  });

  if (status === 'error') {
    console.error('Error fetching enrolled students details');
  }

  return { enrolledStudents, status };
};
