import { useMutation } from '@tanstack/react-query';
import { login } from '@/features/auth/services/api';
import { LoginDTO } from 'trackademic-schema-toolkit/dist';
import { useNavigate } from 'react-router-dom';
import { QueryKeys, UserRoleRouteMap } from '@/types/enum.types';

function useLogin() {
  const navigate = useNavigate();

  const { mutate, status } = useMutation({
    mutationKey: [QueryKeys.CurrentUser],
    mutationFn: ({ email, password }: LoginDTO) => login({ email, password }),
    onSuccess: (data) => {
      navigate(UserRoleRouteMap[data.role]);
    }
  });
  if (status === 'error') {
    console.error('error');
  }

  return { mutate, status };
}

export default useLogin;
