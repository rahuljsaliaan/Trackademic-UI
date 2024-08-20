import { useState, useEffect, useMemo} from 'React';
import { useQueryParams } from '@/hooks/useQueryParams';

const useGetQueryParams = (paramName: string) => {
  const query = useQueryParams();

  const [param, setParam] = useState<string>();

  const id = useMemo(() => query.get(paramName), [query,paramName])

  useEffect(() => {
    if(id){
     setParam(id as string);
    }
  }, [id]);

  return  param
};

export { useGetQueryParams };
