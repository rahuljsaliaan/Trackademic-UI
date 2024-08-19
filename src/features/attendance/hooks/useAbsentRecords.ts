import { useQuery } from '@tanstack/react-query';
import { QueryKeys } from '@/types/enum.types';
import { getAbsentRecords } from '@/features/attendance';

export const useGetAbsentRecords = ({
  subjectId,
  semester,
  year,
  month
}: {
  subjectId: string;
  semester: number;
  year: number;
  month: number;
}) => {
  const { data: absentRecordsData, status } = useQuery({
    queryKey: [QueryKeys.AbsentRecords, semester],
    queryFn: () => getAbsentRecords({ subjectId, semester, year, month })
  });

  if (status === 'error') {
    console.error('error');
  }

  return { absentRecordsData, status };
};
