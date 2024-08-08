import Table from '@/components/table/Table';
import React from 'react';
import {  useGetAttendanceStats } from '@/features/attendance/hooks/useGetFacultyAttendance';
import { ISubjectDocument } from 'trackademic-schema-toolkit/dist';
import StatisticsCard from '@/components/dashboard/StatisticsCard';

const AttendanceStats: React.FC = () => {
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
    : attendanceStatsData.results.map((data, index) => [
        `${index + 1}`,
        `${(data.subject as ISubjectDocument).shortName}`,
        `${data.totalAttendanceRecords}`,
        `${data.totalApproved}`,
        `${data.totalNotApproved}`,
        `${data.averageStatus * 100}`
      ]);

  return (
    <>
      <Table columns={AttendanceColumns} rows={AttendanceRows} />
      <div className="statistics-card-container">
        <StatisticsCard label="Subjects" data={attendanceStatsData?.results.length ?? 0} variant="normal" />
        <StatisticsCard label="Average" data={(attendanceStatsData?.overallAverageStatus ?? 0) * 100} variant="normal" />
        <StatisticsCard label="NotApproved" data={`1`} variant="warning" />
      </div>
    </>
  );
};

export default AttendanceStats;
