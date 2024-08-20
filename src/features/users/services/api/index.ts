import { IUserDocument, APIResourceV1 } from 'trackademic-schema-toolkit';
import axiosService from '@/services/api';

export const getCurrentUser = async (): Promise<IUserDocument> => {
  const response = await axiosService.get(
    `${APIResourceV1.User}/${APIResourceV1.CurrentUser}`
  );
  return response.data;
};

export const getUser = async ({
  userId
}: {
  userId?: string;
}): Promise<IUserDocument> => {
  const response = await axiosService.get(`${APIResourceV1.User}/${userId}`);
  return response.data;
};
