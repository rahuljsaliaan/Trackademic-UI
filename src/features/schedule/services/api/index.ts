import {
  APIQueryParamV1,
  APIResourceV1,
  IFacultyScheduleDetails
} from 'trackademic-schema-toolkit';
import axiosService from '@/services/api';

export const getFacultySchedule = async (
  day: string
): Promise<IFacultyScheduleDetails[]> => {
  const response = await axiosService.get(
    `/${APIResourceV1.FacultySchedule}?${APIQueryParamV1.Day}=${day}`
  );
  return response.data;
};
