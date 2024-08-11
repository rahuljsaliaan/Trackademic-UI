import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import { APIQueryParamV1, ScheduleDay } from 'trackademic-schema-toolkit';
import Quote from '@/components/card/Quote';
import SectionHeader from '@/components/dashboard/SectionHeader';
import { FacultyActiveSubjectTable } from '@/features/subject';
import { AttendanceStats } from '@/features/attendance';
import { useQueryParams } from '@/hooks/useQueryParams';
import { FacultyScheduleCarousel } from '@/features/schedule';
import PageLayout from '@/layouts/PageLayout';

// import StudentAttendanceSummary from '@/features/attendance/components/StudentAttendanceSummary';

export default function FacultyDashboard() {
  const query = useQueryParams();
  const navigate = useNavigate();

  let day: ScheduleDay = query.get(APIQueryParamV1.Day) as ScheduleDay;

  if (!day) {
    day = format(new Date(), 'EEEE').toLocaleLowerCase() as ScheduleDay;
    query.set(APIQueryParamV1.Day, day);
    navigate({ search: query.toString() });
  }

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
        <FacultyScheduleCarousel day={day} />
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
