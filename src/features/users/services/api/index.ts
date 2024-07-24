import { IUserDocument } from 'trackademic-schema-toolkit';
import axiosService from '@/services/api';

export const getCurrentUser = async (): Promise<IUserDocument> => {
  const response = await axiosService.get('user/current-user');
  return response.data;
};
