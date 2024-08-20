import toast from 'react-hot-toast';
import { CreateAttendanceDTO } from 'trackademic-schema-toolkit';
import { useMutation, useQueryClient } from '@tanstack/react-query';
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
      toast.success('Attendance added successfully');
      queryClient.setQueryData([QueryKeys.Attendance, data.id], data);
    },
    onError: (error) => {
      toast.error(
        `${error.message ? error.message : 'Failed to add attendance'}`
      );
    }
  });

  return { attendanceData, status, addAttendanceMutate };
};
