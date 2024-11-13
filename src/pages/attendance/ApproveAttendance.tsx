import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import {
  APIResourceV1,
  APIQueryParamV1,
  ScheduleDay
} from 'trackademic-schema-toolkit';
import { useGetQueryParams } from '@/hooks/useGetQueryParams';
import SectionHeader from '@/components/dashboard/SectionHeader';
import { MarkAttendanceCard } from '@/features/attendance';
import Button from '@/components/formElements/buttons/Button';
import PageLayout from '@/layouts/PageLayout';
import StatisticsCard from '@/components/dashboard/StatisticsCard';
import Popup from '@/components/popup/Popup'; // Import the Popup
import { useGetAttendance } from '@/features/attendance';
import { useApproveAttendance } from '@/features/attendance';
import SubjectApprovalCard from '@/features/attendance/components/SubjectApprovalCard';

export default function ApproveAttendance() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const attendanceId = useGetQueryParams(APIResourceV1.Attendance);
  const day = useGetQueryParams(APIQueryParamV1.Day) as ScheduleDay;
  const { attendance, status } = useGetAttendance({ attendanceId });
  const facultyScheduleId = attendance?.faculty;
  const { mutate } = useApproveAttendance();

  const handleSubmit = () => {
    setIsPopupVisible(true);
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

  const handleConfirmPopup = () => {
    if (attendanceId) {
      mutate({ attendanceId: attendanceId as unknown as string });
    }
  };

  if (!attendance || status === 'pending') {
    return <p>loading...</p>;
  }

  const totals = attendance?.attendanceRecords?.reduce(
    (counts, record) => {
      if (record.status === 'present') {
        counts.presentCount += 1;
      } else if (record.status === 'absent') {
        counts.absentCount += 1;
      }
      return counts;
    },
    { presentCount: 0, absentCount: 0 }
  );

  const presentCount = totals?.presentCount;
  const absentCount = totals?.absentCount;

  return (
    <PageLayout>
      <div className="dashboard-attendance-section">
        <SectionHeader
          title="Approve Attendance"
          tagline="Get the Full Picture Before You Approve"
          showButton={false}
        />
        {day && facultyScheduleId && (
          <SubjectApprovalCard attendanceId={attendanceId as string} />
        )}
      </div>
      <div className="take-attendance-container">
        <hr className="take-attendance-hr" />
        {attendance?.attendanceRecords?.length > 0 ? (
          attendance?.attendanceRecords.map((record) => (
            <MarkAttendanceCard
              key={record.id as string}
              status={record.status}
              photoUrl={''}
              name={record.student.name}
              usn={record.student.studentDetails?.registerNumber ?? ''}
              held={record.enrollment.attendanceSummary.totalAttendanceRecords}
              present={record.enrollment.attendanceSummary.totalPresent}
              percentage={record.enrollment.attendanceSummary.averageStatus}
            />
          ))
        ) : (
          <p>No students match the search criteria.</p>
        )}
        <div className="take-attendance-statistics-card-container">
          <StatisticsCard
            label="Present"
            data={presentCount}
            variant="normal"
          />
          <StatisticsCard label="Absent" data={absentCount} variant="warning" />
        </div>
        <div className="take-attendance-submit-button-container">
          <Button text="Approve" width="100%" onClick={handleSubmit} />
        </div>
      </div>
      <Popup
        isVisible={isPopupVisible}
        onClose={handleClosePopup}
        isTextBoxEnabled={false}
        onConfirm={handleConfirmPopup}
      />
    </PageLayout>
  );
}
