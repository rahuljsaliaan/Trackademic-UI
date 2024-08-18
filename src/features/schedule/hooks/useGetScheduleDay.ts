import { useEffect } from 'react';
import { useQueryParams } from '@/hooks/useQueryParams';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import { APIQueryParamV1, ScheduleDay } from 'trackademic-schema-toolkit';

export const useGetScheduleDay = () => {
  const query = useQueryParams();
  const navigate = useNavigate();
  let day = query.get(APIQueryParamV1.Day) as ScheduleDay;

  if (!day) {
    day = format(new Date(), 'EEEE').toLocaleLowerCase() as ScheduleDay;
    query.set(APIQueryParamV1.Day, day);
  }

  useEffect(() => {
    if (day) {
      query.set(APIQueryParamV1.Day, day);
      navigate({ search: query.toString() });
    }
  }, [day]);

  console.log('day', day);

  return day;
};
