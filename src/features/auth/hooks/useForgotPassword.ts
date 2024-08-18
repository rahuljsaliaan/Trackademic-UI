import { useMutation } from '@tanstack/react-query';
import { forgotPassword } from '@/features/auth';
import { useNavigate } from 'react-router-dom';
import { MutationKeys, AppRoute } from '@/types/enum.types';

export const useForgotPassword= () => {
  const navigate = useNavigate();

  const { mutate, status } = useMutation({
    mutationKey: [MutationKeys.ForgotPassword],
    mutationFn: forgotPassword,
    onSuccess: () => {
      navigate(AppRoute.ResetPassword);
    }
  });
  if (status === 'error') {
    console.error('error');
  }

  return { mutate, status };
};
