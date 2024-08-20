import { useMutation } from '@tanstack/react-query';
import { verifyRefreshToken } from '@/features/auth/services/api';
import { MutationKeys } from '@/types/enum.types';

export const useRefreshToken = () => {
  const { mutate, status } = useMutation({
    mutationKey: [MutationKeys.RefreshToken],
    mutationFn: verifyRefreshToken
  });

  return { mutate, status };
};
