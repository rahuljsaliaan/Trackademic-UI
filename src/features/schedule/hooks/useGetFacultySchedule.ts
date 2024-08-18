import { useQuery } from '@tanstack/react-query';
import { QueryKeys } from '@/types/enum.types';
import { getFacultySchedule } from '@/features/schedule';
import { IFacultyScheduleDetails } from 'trackademic-schema-toolkit';

export const useGetFacultySchedule = (
  day: string,
  facultyScheduleId: string | null = null
) => {
  const { data: facultySchedule, status } = useQuery({
    queryKey: [QueryKeys.FacultySchedule, day],
    queryFn: () => getFacultySchedule(day)
  });

  if (status === 'error') {
    console.error('Error fetching faculty schedule');
  }

  // Filter data based on facultyScheduleId if provided
  const filteredSchedule =
    facultySchedule?.filter(
      (data: IFacultyScheduleDetails) =>
        !facultyScheduleId || data.id === facultyScheduleId
    ) ?? [];

  return { facultySchedule: filteredSchedule, status };
};
