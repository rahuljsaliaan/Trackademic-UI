import { useMutation } from '@tanstack/react-query';
import { resetPassword } from '@/features/auth';
import { useNavigate } from 'react-router-dom';
import { AppRoute, MutationKeys } from '@/types/enum.types';
import { ResetPasswordDTO } from 'trackademic-schema-toolkit';

export const useResetPassword = () => {
  const navigate = useNavigate();

  const { mutate, status } = useMutation({
    mutationKey: [MutationKeys.ResetPassword],
    mutationFn:({email,otp,password,_confirmPassword}:ResetPasswordDTO)=> resetPassword({email,otp,password,_confirmPassword}),
    onSuccess: () => {
      navigate(AppRoute.Login);
    }
  });
  if (status === 'error') {
    console.error('error');
  }

  return { mutate, status };
};
