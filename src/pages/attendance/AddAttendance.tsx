import SectionHeader from '@/components/dashboard/SectionHeader';
import { MarkAttendanceCard } from '@/features/attendance';
import InputWithoutLabel from '@/components/formElements/inputs/InputWithoutLabel';
import Button from '@/components/formElements/buttons/Button';
import PageLayout from '@/layouts/PageLayout';
import { useGetScheduleDay } from '@/features/schedule/hooks/useGetScheduleDay';
import { useGetFacultyScheduleParams } from '@/features/subject/hooks/useGetFacultyScheduleParams';
import SubjectScheduleCard from '@/features/schedule/components/SubjectScheduleCard';

// import { useGetEnrolledStudent } from '@/features/enrollment';
// import { useGetFacultySchedule } from '@/features/schedule';

export default function AddAttendance() {
  const day = useGetScheduleDay();
  const facultyScheduleId = useGetFacultyScheduleParams();

  // const { enrolledStudents } = useGetEnrolledStudent(facultySchedule.);
  return (
    <PageLayout>
      <div className="dashboard-attendance-section">
        <SectionHeader
          title="Record Attendance"
          tagline="Effortless Attendance Tracking"
          showButton={false}
        />
        {day && facultyScheduleId && (
          <SubjectScheduleCard
            day={day}
            facultyScheduleId={facultyScheduleId}
          />
        )}
      </div>
      <div className="take-attendance-container">
        <div className="take-attendance-header-container">
          <InputWithoutLabel id="" type="text" placeholder="Search" />
          <div className="take-attendance-header-sub-container">
            <Button text="All Present" width="auto" />
            <button className="take-attendance-header-btn">
              <img src="src/assets/icons/filterIcon.svg" />
            </button>
            <button className="take-attendance-header-btn">
              <img src="src/assets/icons/sortIcon.svg" />
            </button>
          </div>
        </div>
        <hr className="take-attendance-hr" />
        <MarkAttendanceCard status="absent" />
      </div>
    </PageLayout>
  );
}
