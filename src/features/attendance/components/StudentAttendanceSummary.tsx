import React from 'react';
import BarChart from '@/components/chart/BarChart';
import { useGetStudentAttendance } from '@/features/attendance';
import StatisticsCard from '@/components/dashboard/StatisticsCard';
import { ISubjectDocument } from 'trackademic-schema-toolkit';

interface IStudentAttendanceSummaryProps {
  // props definition
  studentId?: string;
  semester: number;
}

export const StudentAttendanceSummary: React.FC<
  IStudentAttendanceSummaryProps
> = ({ semester }) => {
  const { attendanceData, status: attendanceStatus } = useGetStudentAttendance({
    semester
  });

  if (!attendanceData || attendanceStatus === 'pending') {
    return <div>Loading...</div>;
  }
  const data = attendanceData?.map((data) => ({
    label: (data.subject as ISubjectDocument).shortName,
    averagePercentage: data.attendanceSummary.averageStatus
  }));

  const filteredData = attendanceData.filter(
    (data) => data.attendanceSummary.totalAttendanceRecords !== 0
  );
  const overallAverage =
    filteredData.reduce((acc, data) => {
      return acc + data.attendanceSummary.averageStatus;
    }, 0) / filteredData.length;

  const shortageSubjectsCount = attendanceData?.filter(
    (data) =>
      data.attendanceSummary.totalAttendanceRecords > 0 &&
      data.attendanceSummary.averageStatus <
        (data.subject as ISubjectDocument).minAttendancePercentage
  ).length;

  return (
    <>
      <BarChart data={data} />
      <div className="statistics-card-container">
        <StatisticsCard label="Semester" data={semester} variant="normal" />
        <StatisticsCard label="Subjects" data={data.length} variant="normal" />
        <StatisticsCard
          label="Average"
          data={overallAverage}
          variant="normal"
        />
        <StatisticsCard
          label="Shortage"
          data={shortageSubjectsCount}
          variant={shortageSubjectsCount > 0 ? 'warning' : 'normal'}
        />
      </div>
    </>
  );
};
