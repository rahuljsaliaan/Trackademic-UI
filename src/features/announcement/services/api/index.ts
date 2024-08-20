import {
  APIResourceV1,
  IAnnouncementDocument
} from 'trackademic-schema-toolkit';
import axiosService from '@/services/api';

export const getAnnouncements = async (): Promise<IAnnouncementDocument[]> => {
  const response = await axiosService.get(APIResourceV1.Announcement);
  return response.data;
};

export const addAnnouncement = async ({
  programmeId,
  batchId
}: {
  programmeId: string;
  batchId: string;
}): Promise<IAnnouncementDocument> => {
  const response = await axiosService.post(
    `${APIResourceV1.Programme}/${programmeId}/${APIResourceV1.Batch}/${batchId}/${APIResourceV1.Announcement}`
  );
  return response.data;
};
