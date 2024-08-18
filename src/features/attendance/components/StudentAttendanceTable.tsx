import Table from '@/components/table/Table';
import React from 'react';
import { useGetStudentAttendance } from '@/features/attendance';
import { ISubjectDocument } from 'trackademic-schema-toolkit';

interface IStudentAttendanceTableProps {
  semester: number;
}

export const StudentAttendanceTable: React.FC<IStudentAttendanceTableProps> = ({
  semester
}) => {
  const { attendanceData } = useGetStudentAttendance({ semester});

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
    : attendanceData.map((data, index) => {
        return [
          `0${index + 1}`,
          `${(data.subject as ISubjectDocument).name}`,
          `${data.attendanceSummary.totalAttendanceRecords}`,
          `${data.attendanceSummary.totalPresent}`,
          `${data.attendanceSummary.totalAbsent}`,
          `${data.attendanceSummary.averageStatus}`
        ];
      });

  return <Table columns={columns} rows={rows} />;
};
