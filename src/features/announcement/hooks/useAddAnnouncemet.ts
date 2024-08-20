import toast from 'react-hot-toast';
import { useMutation } from '@tanstack/react-query';
import { MutationKeys } from '@/types/enum.types';
import { addAnnouncement } from '@/features/announcement';

export const useAddAnnouncement = () => {
  const { data: announcementData, mutate } = useMutation({
    mutationKey: [MutationKeys.Announcement],
    mutationFn: ({
      programmeId,
      batchId
    }: {
      programmeId: string;
      batchId: string;
    }) => addAnnouncement({ programmeId, batchId }),
    onSuccess: () => {
      toast.error(`Announcement done successfully`);
    },
    onError: (error) => {
      toast.error(`${error.message ? error.message : 'Failed to add Announcements'}`);
    }
  });

  return { announcementData, mutate };
};
