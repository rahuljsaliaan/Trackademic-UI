import Quote from '@/components/card/Quote';
import SectionHeader from '@/components/dashboard/SectionHeader';
import { FacultyActiveSubjectTable } from '@/features/subject';
import { FacultyScheduleCarousel } from '@/features/schedule';
import PageLayout from '@/layouts/PageLayout';
import { useGetScheduleDay } from '@/features/schedule/hooks/useGetScheduleDay';
import { AttendanceStats } from '@/features/attendance';

// import StudentAttendanceSummary from '@/features/attendance/components/StudentAttendanceSummary';

export default function FacultyDashboard() {
  const day = useGetScheduleDay();

  return (
    <PageLayout>
      <Quote
        heading="Quote of the Day"
        quote="A good teacher can inspire hope, ignite the imagination, and instill a love of learning."
        author="Brad Henry"
      />
      <div className="dashboard-attendance-section">
        <SectionHeader
          title="Today's Journey"
          tagline="Get Ready to Rock the Day!"
        />
        {day && <FacultyScheduleCarousel day={day} />}

        {/* <StudentAttendanceSummary /> */}
      </div>
      <div className="dashboard-examinations-section">
        <SectionHeader title="Attendance" tagline="Where Every Tick Counts!" />
        <AttendanceStats />
      </div>
      <div className="dashboard-calendar-section">
        <SectionHeader
          title="Active Subjects"
          tagline="Your Subject Lineup at a Glance!"
        />
        <FacultyActiveSubjectTable />
      </div>
    </PageLayout>
  );
}
