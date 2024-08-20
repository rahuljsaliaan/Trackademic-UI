import {
  APIResourceV1,
  IUserDocument,
  LoginDTO,
  ResetPasswordDTO,
  IVerificationToken
} from 'trackademic-schema-toolkit';
import axiosService from '@/services/api';

export const verifyRefreshToken = async (): Promise<null> => {
  const response = await axiosService.post(
    `${APIResourceV1.Auth}/${APIResourceV1.RefreshToken}`
  );
  return response.data as null;
};

export const login = async ({
  email,
  password
}: LoginDTO): Promise<IUserDocument> => {
  const response = await axiosService.post(
    `${APIResourceV1.Auth}/${APIResourceV1.Login}`,
    {
      email,
      password
    }
  );
  return response.data;
};

export const logout = async (): Promise<null> => {
  const response = await axiosService.post(
    `${APIResourceV1.Auth}/${APIResourceV1.Logout}`
  );
  return response.data as null;
};

export const resetPassword = async ({
  email,
  password,
  _confirmPassword,
  verificationToken
}: ResetPasswordDTO): Promise<null> => {
  const response = await axiosService.patch(
    `${APIResourceV1.Auth}/${APIResourceV1.ResetPassword}`,
    {
      email,
      password,
      _confirmPassword,
      verificationToken
    }
  );

  return response.data;
};

export const forgotPassword = async ({
  email
}: {
  email: string;
}): Promise<null> => {
  const response = await axiosService.post(
    `${APIResourceV1.Auth}/${APIResourceV1.ForgotPassword}`,
    {
      email
    }
  );

  return response.data;
};

export const verifyOTP = async ({
  email,
  otp
}: {
  email: string;
  otp: string;
}): Promise<IVerificationToken> => {
  const response = await axiosService.post(
    `${APIResourceV1.Auth}/${APIResourceV1.VerifyOTP}`,
    {
      email,
      otp
    }
  );

  return response.data;
};
