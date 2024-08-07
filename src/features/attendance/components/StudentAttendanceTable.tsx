import Table from '@/components/table/Table';
import React from 'react';
import { useGetStudentAttendance } from '../hooks/useGetStudentAttendance';

interface IStudentAttendanceTableProps {
  studentId: string;
  semester: number;
}

const StudentAttendanceTable: React.FC<IStudentAttendanceTableProps> = ({
  studentId,
  semester
}) => {
  const { attendanceData } = useGetStudentAttendance({semester,studentId});

  const columns = [
    { name: 'Sl. No', width: '10%' },
    { name: 'Subject', width: '50%' },
    { name: 'H', width: '10%' },
    { name: 'P', width: '10%' },
    { name: 'A', width: '10%' },
    { name: '%', width: '10%' }
  ];

  const rows = !attendanceData
    ? []
    : attendanceData.results.map((data, index) => {
        return [
          `0${index + 1}`,
          `${data.subject.name}`,
          `${data.totalAttendanceRecords}`,
          `${data.totalPresent}`,
          `${data.totalAbsent}`,
          `${data.averageStatus * 100}`
        ];
      });

  return <Table columns={columns} rows={rows} />;
};

export default StudentAttendanceTable;
