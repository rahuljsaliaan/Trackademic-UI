import { useQueryParams } from '@/hooks/useQueryParams';
import { format } from 'date-fns';
import { useEffect, useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { APIQueryParamV1, ScheduleDay } from 'trackademic-schema-toolkit';

export const useGetScheduleDay = () => {
  const query = useQueryParams();
  const navigate = useNavigate();
  const [day, setDay] = useState<ScheduleDay>();

  const queryString = useMemo(() => query.toString(), [query]);

  useEffect(() => {
    let dayParam = query.get(APIQueryParamV1.Day) as ScheduleDay;

    if (!dayParam) {
      dayParam = format(new Date(), 'EEEE').toLocaleLowerCase() as ScheduleDay;
      query.set(APIQueryParamV1.Day, dayParam);
    }

    setDay(dayParam);
    navigate({ search: query.toString() });
  }, [queryString, navigate]);

  return day!;
};
