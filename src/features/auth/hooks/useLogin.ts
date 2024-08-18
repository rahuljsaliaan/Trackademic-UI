import { useMutation, useQueryClient } from '@tanstack/react-query';
import { LoginDTO } from 'trackademic-schema-toolkit';
import { login } from '@/features/auth';
import { useNavigate } from 'react-router-dom';
import { MutationKeys, QueryKeys, UserRoleRouteMap } from '@/types/enum.types';

export const useLogin = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate, status } = useMutation({
    mutationKey: [MutationKeys.Login],
    mutationFn: ({ email, password }: LoginDTO) => login({ email, password }),
    onSuccess: (data) => {
      queryClient.setQueryData([QueryKeys.CurrentUser], data);
      navigate(UserRoleRouteMap[data.role]);
    }
  });
  if (status === 'error') {
    console.error('error');
  }

  return { mutate, status };
};
