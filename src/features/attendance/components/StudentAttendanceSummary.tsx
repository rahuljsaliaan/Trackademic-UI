import React from 'react';
import BarChart from '@/components/chart/BarChart';
import { useGetStudentAttendance } from '@/features/attendance';
import StatisticsCard from '@/components/dashboard/StatisticsCard';

interface IStudentAttendanceSummaryProps {
  // props definition
  studentId?: string;
  semester: number;
}

export const StudentAttendanceSummary: React.FC<
  IStudentAttendanceSummaryProps
> = ({ studentId, semester }) => {
  const { attendanceData, status: attendanceStatus } = useGetStudentAttendance({
    semester,
    studentId
  });

  if (!attendanceData || attendanceStatus === 'pending') {
    return <div>Loading...</div>;
  }
  const data = attendanceData?.results.map((data) => ({
    label: data.subject.shortName,
    averagePercentage: data.averageStatus * 100
  }));

  const shortageSubjectsCount = attendanceData?.results.filter(
    (data) => data.totalAttendanceRecords > 0 && data.averageStatus * 100 < 80
  ).length;

  return (
    <>
      <BarChart data={data} />
      <div className="statistics-card-container">
        <StatisticsCard label="Semester" data={semester} variant="normal" />
        <StatisticsCard label="Subjects" data={data.length} variant="normal" />
        <StatisticsCard
          label="Average"
          data={Math.round(attendanceData.overallAverageStatus * 100)}
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
