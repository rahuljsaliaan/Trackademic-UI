import {
  APIResourceV1,
  IEnrolledStudentDetails
} from 'trackademic-schema-toolkit';
import axiosService from '@/services/api';

export const getEnrolledStudentsDetails = async ({
  batchId,
  subjectId
}: {
  batchId: string;
  subjectId: string;
}): Promise<IEnrolledStudentDetails[]> => {
  const response = await axiosService.get(
    `${APIResourceV1.Batch}/${batchId}/${APIResourceV1.Subject}/${subjectId}/${APIResourceV1.Enrollment}/${APIResourceV1.AllEnrolledStudents}`
  );
  return response.data;
};
