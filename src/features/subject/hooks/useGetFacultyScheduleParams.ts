import { useQueryParams } from '@/hooks/useQueryParams';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { APIQueryParamV1 } from 'trackademic-schema-toolkit';

export const useGetFacultyScheduleParams = () => {
  const query = useQueryParams();
  const navigate = useNavigate();

  const facultySchedule = query.get(APIQueryParamV1.FacultySchedule);

  useEffect(() => {
    if (facultySchedule) {
      query.set(APIQueryParamV1.FacultySchedule, facultySchedule);
      navigate({ search: query.toString() });
    }
  }, [facultySchedule]);

  console.log(facultySchedule, '🪲🪲');

  return facultySchedule;
};
