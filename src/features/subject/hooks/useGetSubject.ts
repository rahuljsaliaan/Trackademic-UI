import { useQueryParams } from '@/hooks/useQueryParams';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { APIQueryParamV1 } from 'trackademic-schema-toolkit';

const useGetSubject = () => {
const query = useQueryParams();
const navigate = useNavigate();

  
  let subject = query.get(APIQueryParamV1.subject);

  if (!subject) {

    query.set(APIQueryParamV1.Day, subject);
    navigate({ search: query.toString() });
  }

  return day;
}

export default useGetSubject
