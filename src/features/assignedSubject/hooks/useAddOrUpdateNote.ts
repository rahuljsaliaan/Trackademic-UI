import { useMutation, useQueryClient } from '@tanstack/react-query';
import { QueryKeys, MutationKeys } from '@/types/enum.types';
import { addOrUpdateNote as addOrUpdateNoteService } from '@/features/assignedSubject';

export const useAddOrUpdateNote = () => {
  const queryClient = useQueryClient();

  const {
    data: attendanceData,
    status,
    mutate: addOrUpdateNote
  } = useMutation({
    mutationKey: [MutationKeys.AddOrUpdateNote],
    mutationFn: ({
      note,
      assignedSubjectId
    }: {
      note: string;
      assignedSubjectId: string;
    }) =>
      addOrUpdateNoteService({
        note,
        assignedSubjectId
      }),
    onSuccess: (data) => {
      queryClient.setQueryData([QueryKeys.AssignedSubject, data.id], data);
    }
  });

  if (status === 'error') {
    console.error('error');
  }

  return { attendanceData, status, addOrUpdateNote };
};
