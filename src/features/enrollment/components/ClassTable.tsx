import React from 'react';
import Table from '@/components/table/Table';

export const ClassTable: React.FC = () => {
//   const { attendanceStatsData, status } = useGetAttendanceStats();

  const AttendanceColumns = [
    { name: 'Sl.No', width: '15%' },
    { name: 'Class', width: '50%' },
    { name: 'Section', width: '15%' },
    { name: 'Semester', width: '20%' }
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
