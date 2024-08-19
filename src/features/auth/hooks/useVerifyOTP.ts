import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { MutationKeys, QueryKeys, AppRoute } from '@/types/enum.types';
import { verifyOTP } from '@/features/auth';

export const useVerifyOTP = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const {
    data: verificationToken,
    status,
    mutate
  } = useMutation({
    mutationKey: [MutationKeys.VerifyOTP],
    mutationFn: ({ email, otp }: { email: string; otp: string }) =>
      verifyOTP({ email, otp }),
    onSuccess: (data, variables) => {
      queryClient.setQueryData([QueryKeys.VerificationToken], {
        email: variables.email,
        verificationToken: data.verificationToken
      });
      navigate(AppRoute.ResetPassword, {
        replace: true
      });
    },
    onError: () => {
      toast.error('An error occurred. Please try again.');
    }
  });

  return { verificationToken, status, mutate };
};
