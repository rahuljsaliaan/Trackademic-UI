import React from 'react';
import { APIQueryParamV1, IBatchDocument } from 'trackademic-schema-toolkit';
import BarChart from '@/components/chart/BarChart';
import { useGetStudentAttendance } from '@/features/attendance/hooks/useGetStudentAttendance';
import StatisticsCard from '@/components/dashboard/StatisticsCard';
import { useGetCurrentUser } from '@/features/users/hooks/useGetCurrentUser';
import { useQueryParams } from '@/hooks/useQueryParams';
import { useNavigate } from 'react-router-dom';

interface IStudentAttendanceSummaryProps {
  // props definition
}

const StudentAttendanceSummary: React.FC<
  IStudentAttendanceSummaryProps
> = () => {
  const { user } = useGetCurrentUser();
  const query = useQueryParams();
  const navigate = useNavigate();

  let semester = parseInt(query.get(APIQueryParamV1.Semester) ?? '');

  if (!semester) {
    semester = (user?.studentDetails?.batch as IBatchDocument).semester;
    query.set(APIQueryParamV1.Semester, semester.toString());
    navigate({ search: query.toString() });
  }

  const { attendanceData, status } = useGetStudentAttendance(semester);

  if (!attendanceData || status === 'pending') {
    return <div>Loading...</div>;
  }
  const data = attendanceData?.results.map((data) => ({
    label: data.subject.shortName,
    averagePercentage: data.averageStatus * 100
  }));

  const shortageSubjectsCount = data.filter(
    (attendanceData) => attendanceData.averagePercentage < 80
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
          variant={shortageSubjectsCount > 1 ? 'warning' : 'normal'}
        />
      </div>
    </>
  );
};

export default StudentAttendanceSummary;
