import { useMutation } from '@tanstack/react-query';
import { logout } from '@/features/auth/services/api';
import { useNavigate } from 'react-router-dom';
import { AppRoute, MutationKeys } from '@/types/enum.types';

function useLogout() {
  const navigate = useNavigate();

  const { mutate, status } = useMutation({
    mutationKey: [MutationKeys.Logout],
    mutationFn: logout,
    onSuccess: () => {
      navigate(`/${AppRoute.Login}`);
    }
  });
  if (status === 'error') {
    console.error('error');
  }

  return { mutate, status };
}

export default useLogout;
