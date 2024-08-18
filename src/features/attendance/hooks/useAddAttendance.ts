import { useMutation, useQueryClient } from '@tanstack/react-query';
import { CreateAttendanceDTO } from 'trackademic-schema-toolkit';
import { QueryKeys, MutationKeys } from '@/types/enum.types';
import { addStudentsAttendance as addStudentsAttendanceService } from '@/features/attendance';

export const useAddAttendance = () => {
  const queryClient = useQueryClient();

  const {
    data: attendanceData,
    status,
    mutate: addAttendanceMutate
  } = useMutation({
    mutationKey: [MutationKeys.AddAttendance],
    mutationFn: ({
      batchId,
      subjectId,
      studentAttendanceRecords
    }: {
      batchId: string;
      subjectId: string;
      studentAttendanceRecords: CreateAttendanceDTO;
    }) =>
      addStudentsAttendanceService({
        batchId,
        subjectId,
        studentAttendanceRecords
      }),
    onSuccess: (data) => {
      queryClient.setQueryData([QueryKeys.Attendance, data.id], data);
    }
  });

  if (status === 'error') {
    console.error('error');
  }

  return { attendanceData, status, addAttendanceMutate };
};
