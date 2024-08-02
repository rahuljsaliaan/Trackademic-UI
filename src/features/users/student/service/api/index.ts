import { IAttendanceDocument } from 'trackademic-schema-toolkit';
import axiosService from '@/services/api';

export const getStudentAttendance = async (): Promise<IAttendanceDocument> => {
  const response = await axiosService.get('/attendance/student-attendance-summary');
  return response.data;
};
