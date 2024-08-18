import {
  APIResourceV1,
  APIQueryParamV1,
  IEnrolledStudentDetails,
  IEnrollmentDocument
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

export const getAttendanceStats = async ({batchId,subjectId}:{batchId:string,subjectId:string}): Promise<IEnrolledStudentDetails[]> => {
  const response = await axiosService.get(
    `${APIResourceV1.Batch}/${batchId}/${APIResourceV1.Subject}/${subjectId}/${APIResourceV1.Enrollment}/${APIResourceV1.AllEnrolledStudents}`
  );
  return response.data;
};
