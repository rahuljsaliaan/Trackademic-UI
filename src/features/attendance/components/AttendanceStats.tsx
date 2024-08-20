import React from 'react';
import { ISubjectDocument } from 'trackademic-schema-toolkit';
import Table from '@/components/table/Table';
import { useGetAttendanceStats } from '@/features/attendance';
import StatisticsCard from '@/components/dashboard/StatisticsCard';

export const AttendanceStats: React.FC = () => {
  const { attendanceStatsData, status } = useGetAttendanceStats();

  const AttendanceColumns = [
    { name: 'Sl. No', width: '10%' },
    { name: 'Subject', width: '30%' },
    { name: 'Scheduled', width: '15%' },
    { name: 'Approved', width: '15%' },
    { name: 'NotApproved', width: '20%' },
    { name: '%', width: '10%' }
  ];

  if (!attendanceStatsData && status === 'pending') {
    return <div>Loading...</div>;
  }

  const AttendanceRows = !attendanceStatsData
    ? []
    : attendanceStatsData?.results?.map((data, index) => [
        `${index + 1}`,
        `${(data.subject as ISubjectDocument).shortName}`,
        `${data.totalAttendanceRecords}`,
        `${data.totalApproved}`,
        `${data.totalNotApproved}`,
        `${Math.round(data.averageStatus).toFixed(2)}`
      ]);

  const totals = attendanceStatsData?.results?.reduce(
    (acc, data) => {
      acc.totalNotApproved += data.totalNotApproved;
      acc.totalRecords += data.totalAttendanceRecords;
      acc.totalApproved += data.totalApproved;
      return acc;
    },
    {
      totalNotApproved: 0,
      totalRecords: 0,
      totalApproved: 0,
      totalAverageStatus: 0
    }
  );

  return (
    <>
      <Table columns={AttendanceColumns} rows={AttendanceRows} />
      <div className="statistics-card-container">
        <StatisticsCard
          label="Subjects"
          data={attendanceStatsData?.results.length ?? 0}
          variant="normal"
        />
        <StatisticsCard
          label="Average"
          data={Math.round(attendanceStatsData?.overallAverageStatus ?? 0)}
          variant="normal"
        />
        <StatisticsCard
          label="NotApproved"
          data={totals?.totalNotApproved ?? 0}
          variant={(totals?.totalNotApproved ?? 0 > 0) ? 'warning' : 'normal'}
        />
      </div>
    </>
  );
};
