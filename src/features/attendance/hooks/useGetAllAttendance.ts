import { useQuery } from '@tanstack/react-query';
import { QueryKeys } from '@/types/enum.types';
import { IAttendanceDocument } from 'trackademic-schema-toolkit';
import { getAllAttendance } from '@/features/attendance';

export const useGetAllAttendance = ({
  approved,
  attendanceId
}: {
  approved?: boolean;
  attendanceId?: string;
}) => {
  const { data: allAttendances, status } = useQuery({
    queryKey: [QueryKeys.AllAttendance, attendanceId],
    queryFn: () => getAllAttendance(approved)
  });

  const allAttendancesFiltered =
    allAttendances?.filter(
      (data: IAttendanceDocument) => !attendanceId || (data.id as unknown as string) === attendanceId
    ) ?? [];

  return { allAttendances: allAttendancesFiltered, status };
};
