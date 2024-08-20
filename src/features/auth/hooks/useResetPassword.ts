import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { ResetPasswordDTO } from 'trackademic-schema-toolkit';
import { resetPassword } from '@/features/auth';
import { AppRoute, MutationKeys } from '@/types/enum.types';

export const useResetPassword = () => {
  const navigate = useNavigate();

  const { mutate, status } = useMutation({
    mutationKey: [MutationKeys.ResetPassword],
    mutationFn: ({
      email,
      verificationToken,
      password,
      _confirmPassword
    }: ResetPasswordDTO) =>
      resetPassword({ email, verificationToken, password, _confirmPassword }),
    onSuccess: () => {
      navigate(AppRoute.Login);
    },
    onError: () => {
      toast.error('An error occurred. Please try again.');
    }
  });

  return { mutate, status };
};
