import toast from 'react-hot-toast';
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
      toast.success('Note added successfully');
      queryClient.setQueryData([QueryKeys.AssignedSubject, data.id], data);
    },
    onError: (error) => {
      toast.error(`${error.message ? error.message : 'Failed to add note'}`);
    }
  });

  return { attendanceData, status, addOrUpdateNote };
};
