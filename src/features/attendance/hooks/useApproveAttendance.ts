import toast from 'react-hot-toast';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { AppRoute, QueryKeys } from '@/types/enum.types';
import { MutationKeys } from '@/types/enum.types';
import { approveAttendance } from '@/features/attendance';

export const useApproveAttendance = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { data: approved, mutate } = useMutation({
    mutationKey: [MutationKeys.Approved],
    mutationFn: ({ attendanceId }: { attendanceId: string }) =>
      approveAttendance(attendanceId),
    onSuccess: () => {
      toast.success('Attendance approved successfully');

      navigate(`${AppRoute.DashboardHOD}`, { replace: true });
    },
    onError: (error) => {
      queryClient.removeQueries({queryKey: [QueryKeys.Attendance]})
      toast.error(
        `${error.message ? error.message : 'Failed to approve attendance'}`
      );
    }
  });

  return { approved, mutate };
};
