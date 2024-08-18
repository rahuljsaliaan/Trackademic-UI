import { useQueryParams } from '@/hooks/useQueryParams';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { APIQueryParamV1 } from 'trackademic-schema-toolkit';

export const useGetSemester = (initialSemester: number = 1) => {
  const query = useQueryParams();
  const navigate = useNavigate();

  // Initialize state to keep track of the current semester
  const [semester, setSemester] = useState<number | null>(() => {
    const querySemester = parseInt(query.get(APIQueryParamV1.Semester) ?? '');
    return isNaN(querySemester) ? initialSemester : querySemester;
  });

  useEffect(() => {
    if (semester !== initialSemester && initialSemester !== null) {
      setSemester(initialSemester);
      query.set(APIQueryParamV1.Semester, initialSemester.toString());
      navigate({ search: query.toString() });
    } else if (
      semester !== parseInt(query.get(APIQueryParamV1.Semester) ?? '')
    ) {
      query.set(APIQueryParamV1.Semester, semester?.toString() ?? '');
      navigate({ search: query.toString() });
    }
  }, [initialSemester, semester, navigate, query]);

  return semester;
};
