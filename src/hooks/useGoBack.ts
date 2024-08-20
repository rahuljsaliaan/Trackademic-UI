import { useNavigate } from 'react-router-dom';

export const useGoBack = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // This will navigate back to the previous page
  };

  return goBack;
};
