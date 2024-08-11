import { useNavigate } from 'react-router-dom';
import { APIQueryParamV1, IBatchDocument } from 'trackademic-schema-toolkit';
import Quote from '@/components/card/Quote';
import SectionHeader from '@/components/dashboard/SectionHeader';
import StatisticsCard from '@/components/dashboard/StatisticsCard';
import CarouselCard from '@/components/card/CarouselCard';
import Table from '@/components/table/Table';
import { StudentAttendanceSummary } from '@/features/attendance';
import { useGetCurrentUser } from '@/features/users';
import { useQueryParams } from '@/hooks/useQueryParams';
import PageLayout from '@/layouts/PageLayout';
import { AppRoute } from '@/types/enum.types';

export default function StudentDashboard() {
  const { user } = useGetCurrentUser();
  const query = useQueryParams();
  const navigate = useNavigate();

  let semester = parseInt(query.get(APIQueryParamV1.Semester) ?? '');

  if (!semester) {
    semester = (user?.studentDetails?.batch as IBatchDocument).semester;
    query.set(APIQueryParamV1.Semester, semester.toString());
    navigate({ search: query.toString() });
  }

  const contentData = [
    {
      heading: 'New Library Books Available',
      paragraph:
        'Check out the latest arrivals in the library. A wide range of new books ,across various genres are now available.',
      dateIconSrc: 'src/assets/icons/dateIcon.svg',
      labelIconSrc: 'src/assets/icons/authorIcon.svg',
      date: '01-08-2024',
      time: '03:05 PM',
      label: 'Felcy Dsouza',
      subLabel: 'Librarian'
    },
    {
      heading: '4th SEE Time Table Released',
      paragraph:
        'Check out the Time Table for the 4th Semester End Examination. Be prepared for the exam.',
      dateIconSrc: 'src/assets/icons/dateIcon.svg',
      labelIconSrc: 'src/assets/icons/authorIcon.svg',
      date: '02-08-2024',
      time: '03:05 PM',
      label: 'Hareesh B',
      subLabel: 'HOD-MCA'
    }
  ];

  const columns = [
    { name: 'Sl. No', width: '15%' },
    { name: 'Event', width: '50%' },
    { name: 'Date', width: '35%' }
  ];

  const rows = [
    ['01', 'Sports Meet', 'August 15, 2024'],
    ['02', 'Cultural Fest 2024', 'October 5, 2024'],
    ['03', 'Joshiana', 'September 20, 2024'],
    ['04', 'Tiara', 'December 10, 2024']
  ];

  return (
    <PageLayout>
      <Quote
        heading="Quote of the Day"
        quote="Education is the passport to the future, for tomorrow belongs to those who prepare for it today."
        author="Franklin D. Roosevelt"
      />
      <div className="dashboard-attendance-section">
        <SectionHeader
          title="Attendance"
          tagline="Where Every Day Counts!"
          navigationLink={AppRoute.AttendanceStudent}
        />
        <StudentAttendanceSummary
          studentId={user?.id as string}
          semester={semester}
        />
      </div>
      <div className="dashboard-examinations-section">
        <SectionHeader title="Examinations" tagline="Track Your Triumphs!" />
        {/* <BarChart /> */}
        <div className="statistics-card-container">
          <StatisticsCard label="Semester" data="04" variant="normal" />
          <StatisticsCard label="Subjects" data="06" variant="normal" />
          <StatisticsCard label="SGPA" data="6.9" variant="normal" />
          <StatisticsCard label="CGPA" data="7.6" variant="normal" />
        </div>
      </div>
      <div className="dashboard-announcements-section">
        <SectionHeader
          title="Announcements"
          tagline="Hot News & Cool Updates"
        />
        <CarouselCard contentData={contentData} />
      </div>
      <div className="dashboard-calendar-section">
        <SectionHeader
          title="Events & Calendar"
          tagline="Discover What's Coming Up Around You!"
        />
        <Table columns={columns} rows={rows} />
      </div>
    </PageLayout>
  );
}
