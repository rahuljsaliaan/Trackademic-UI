import { IUserDocument, LoginDTO } from 'trackademic-schema-toolkit';
import axiosService from '@/services/api';

export const getRefreshToken = async (): Promise<null> => {
  const response = await axiosService.get('auth/refresh-token');
  return response.data as null;
};

export const login = async ({
  email,
  password
}: LoginDTO): Promise<IUserDocument> => {
  const response = await axiosService.post('auth/login', { email, password });
  return response.data;
};
