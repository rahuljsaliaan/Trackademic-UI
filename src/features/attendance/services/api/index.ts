import {
  APIResourceV1,
  IStudentAttendanceSummary,
  APIQueryParamV1,
  IAttendanceStats
} from 'trackademic-schema-toolkit';
import axiosService from '@/services/api';

export const getStudentAttendance = async ({
  studentId,
  semester
}: {
  studentId?: string;
  semester: number;
}): Promise<IStudentAttendanceSummary> => {
  const response = await axiosService.get(
    // TODO: Also need to pass the student id
    `${APIResourceV1.Student}/${studentId}/${APIResourceV1.Attendance}/${APIResourceV1.StudentAttendanceSummary}?${APIQueryParamV1.Semester}=${semester}`
  );
  return response.data;
};

export const getAttendanceStats = async (): Promise<IAttendanceStats> => {
  const response = await axiosService.get(
    `${APIResourceV1.Attendance}/${APIResourceV1.AttendanceStats}`
  );
  return response.data;
};
