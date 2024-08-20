import { APIResourceV1, IBatchDocument } from 'trackademic-schema-toolkit';
import axiosService from '@/services/api';

export const getAllBatches = async ({
  programmeId
}: {
  programmeId?: string;
}): Promise<IBatchDocument[]> => {
  const response = await axiosService.get(
    `${APIResourceV1.Programme}/${programmeId}/${APIResourceV1.Batch}`
  );
  return response.data;
};
