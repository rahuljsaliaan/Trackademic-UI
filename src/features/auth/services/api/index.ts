import {
  APIResourceV1,
  IUserDocument,
  LoginDTO
} from 'trackademic-schema-toolkit';
import axiosService from '@/services/api';

export const getRefreshToken = async (): Promise<null> => {
  const response = await axiosService.get(`auth/${APIResourceV1.RefreshToken}`);
  return response.data as null;
};

export const login = async ({
  email,
  password
}: LoginDTO): Promise<IUserDocument> => {
  const response = await axiosService.post(`auth/${APIResourceV1.Login}`, {
    email,
    password
  });
  return response.data;
};
