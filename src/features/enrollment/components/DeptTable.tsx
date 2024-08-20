import React from 'react';
import { ISubjectDocument } from 'trackademic-schema-toolkit';
import Table from '@/components/table/Table';
import { useGetAttendanceStats } from '@/features/attendance';

export const ClassTable: React.FC = () => {
//   const { attendanceStatsData, status } = useGetAttendanceStats();

  const AttendanceColumns = [
    { name: 'Sl.No', width: '15%' },
    { name: 'Dept', width: '50%' },
    { name: 'Category', width: '15%' },
    { name: 'Students', width: '20%' }
  ];

//   if (!attendanceStatsData && status === 'pending') {
//     return <div>Loading...</div>;
//   }

//   const AttendanceRows = !attendanceStatsData
//     ? []
//     : attendanceStatsData?.results?.map((data, index) => [
//         `${index + 1}`,
//         `${(data.subject as ISubjectDocument).shortName}`,
//         `${data.totalAttendanceRecords}`,
//         `${data.totalApproved}`,
//         `${data.totalNotApproved}`,
//         `${Math.round(data.averageStatus).toFixed(2)}`
//       ]);

  return (
    <>
      <Table columns={AttendanceColumns} rows={[]} />
    </>
  );
};
