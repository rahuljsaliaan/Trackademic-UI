import {
  APIResourceV1,
  IStudentAttendanceSummary
} from 'trackademic-schema-toolkit';
import axiosService from '@/services/api';

export const getStudentAttendance = async (
  semester: number
): Promise<IStudentAttendanceSummary> => {
  const response = await axiosService.get(
    `/${APIResourceV1.Attendance}/${APIResourceV1.StudentAttendanceSummary}?semester=${semester}`
  );
  return response.data;
};
