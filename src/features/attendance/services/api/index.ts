import {
  APIResourceV1,
  APIQueryParamV1,
  IEnrollmentDocument,
  IAttendanceDocument,
  IAttendanceStats,
  CreateAttendanceDTO,
  IAbsentRecords
} from 'trackademic-schema-toolkit';
import axiosService from '@/services/api';

export const getStudentAttendance = async ({
  semester
}: {
  studentId?: string;
  semester: number;
}): Promise<IEnrollmentDocument[]> => {
  const response = await axiosService.get(
    // TODO: Also need to pass the student id
    `${APIResourceV1.Enrollment}?${APIQueryParamV1.Semester}=${semester}`
  );
  return response.data;
};

export const getAttendanceStats = async (): Promise<IAttendanceStats> => {
  const response = await axiosService.get(
    `${APIResourceV1.Attendance}/${APIResourceV1.AttendanceStats}`
  );
  return response.data;
};

export const addStudentsAttendance = async ({
  batchId,
  subjectId,
  studentAttendanceRecords
}: {
  batchId: string;
  subjectId: string;
  studentAttendanceRecords: CreateAttendanceDTO;
}): Promise<IAttendanceDocument> => {
  const response = await axiosService.post(
    `${APIResourceV1.Batch}/${batchId}/${APIResourceV1.Subject}/${subjectId}/${APIResourceV1.Attendance}`,
    studentAttendanceRecords
  );

  return response.data;
};

export const getAbsentRecords = async ({
  subjectId,
  semester,
  year,
  month
}: {
  subjectId: string;
  semester: number;
  year: number;
  month: number;
}): Promise<IAbsentRecords> => {
  const response = await axiosService.get(
    `${APIResourceV1.Subject}/${subjectId}/${APIResourceV1.Attendance}/${APIResourceV1.AbsentRecords}?${APIQueryParamV1.Semester}=${semester}&${APIQueryParamV1.Month}=${month}&${APIQueryParamV1.Year}=${year}`
  );

  return response.data;
};
