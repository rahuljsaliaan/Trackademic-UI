import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { forgotPassword } from '@/features/auth';
import { MutationKeys } from '@/types/enum.types';

export const useForgotPassword = () => {
  const { mutate, status } = useMutation({
    mutationKey: [MutationKeys.ForgotPassword],
    mutationFn: ({ email }: { email: string }) => forgotPassword({ email }),
    onSuccess: () => {
      toast.success('OTP sent to your email. Please check your inbox.');
    }
  });
  if (status === 'error') {
    toast.error('An error occurred. Please try again.');
  }

  return { mutate, status };
};
