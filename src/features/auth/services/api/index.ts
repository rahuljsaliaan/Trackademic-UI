import { IUserDocument } from '@trackademic/trackademic-schema-toolkit';
import axiosService from '@/services/api';

export const getRefreshToken = async (): Promise<null> => {
  const response = await axiosService.get('auth/refresh-token');
  return response.data as null;
};

export const getCurrentUser = async (): Promise<IUserDocument> => {
  const response = await axiosService.get('auth/current-user');
  return response.data;
};
