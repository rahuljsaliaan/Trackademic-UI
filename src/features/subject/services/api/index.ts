import {
  IAssignedSubjectDocument,
  APIResourceV1
} from 'trackademic-schema-toolkit';
import axiosService from '@/services/api';

export const getFacultyActiveSubjects = async (): Promise<
  IAssignedSubjectDocument[]
> => {
  const response = await axiosService.get(`/${APIResourceV1.AssignedSubject}`);
  return response.data;
};
