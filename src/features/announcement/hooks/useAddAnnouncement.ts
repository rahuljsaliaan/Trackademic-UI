import toast from 'react-hot-toast';
import { useMutation } from '@tanstack/react-query';
import { AppRoute, MutationKeys } from '@/types/enum.types';
import { addAnnouncement } from '@/features/announcement';
import { useNavigate } from 'react-router-dom';

export const useAddAnnouncement = ({
  navigationLink
}: {
  navigationLink: AppRoute;
}) => {
  const navigate = useNavigate();

  const {
    data: announcementData,
    mutate,
    status
  } = useMutation({
    mutationKey: [MutationKeys.Announcement],
    mutationFn: ({
      programmeId,
      batchId,
      announcementSubject,
      announcementContent
    }: {
      programmeId: string;
      batchId: string;
      announcementSubject: string;
      announcementContent: string;
    }) =>
      addAnnouncement({
        programmeId,
        batchId,
        announcementSubject,
        announcementContent
      }),
    onSuccess: () => {
      navigate(navigationLink, { replace: true });
      toast.success(`Announcement done successfully`);
    },
    onError: (error) => {
      toast.error(
        `${error.message ? error.message : 'Failed to add Announcements'}`
      );
    }
  });

  return { announcementData, mutate, status };
};
