import toast from 'react-hot-toast';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { logout } from '@/features/auth/services/api';
import { useNavigate } from 'react-router-dom';
import { AppRoute, MutationKeys, QueryKeys } from '@/types/enum.types';

function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate, status } = useMutation({
    mutationKey: [MutationKeys.Logout],
    mutationFn: logout,
    onSuccess: () => {
      queryClient.removeQueries({ queryKey: [QueryKeys.CurrentUser] });
      navigate(`/${AppRoute.Login}`, { replace: true });
    },
    onError: () => {
      toast.error('Error logging out');
    }
  });

  return { mutate, status };
}

export default useLogout;
