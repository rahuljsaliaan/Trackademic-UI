import { useQueryParams } from '@/hooks/useQueryParams';
import { useNavigate } from 'react-router-dom';
import { APIQueryParamV1 } from 'trackademic-schema-toolkit';

function useAddParams(params: APIQueryParamV1, value: string) {
  const query = useQueryParams();
  const navigate = useNavigate();
  query.set(params, value);
  navigate({ search: query.toString() });

  return { query };
}

export default useAddParams;
