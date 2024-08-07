import Header from '@/layouts/Header';
import Quote from '@/components/card/Quote';
import SectionHeader from '@/components/dashboard/SectionHeader';
import StatisticsCard from '@/components/dashboard/StatisticsCard';
import CarouselCard from '@/components/card/CarouselCard';
import ContentCard from '@/components/card/ContentCard';
import Table from '@/components/table/Table';
import Footer from '@/components/dashboard/Footer';
// import StudentAttendanceSummary from '@/features/attendance/components/StudentAttendanceSummary';

export default function LecturerDashboard() {
  const contentData = [
    <ContentCard
      heading="Data Structures and Algorithms"
      paragraph="Note: Remember to solve question no. 3 from the exercises in Chapter 01. And be prepared for the Quiz based on the given Exercise."
      dateIconSrc="src/assets/icons/dateIcon.svg"
      labelIconSrc="src/assets/icons/venueIcon.svg"
      date="01-08-2024"
      time="9:55 AM - 10:50 AM"
      label="4th Sem MCA-B"
      subLabel="AB1 - 402"
      buttonText="Take Attendance"
      isButtonVisible={true}
    />,
    <ContentCard
      heading="Data Structures and Algorithms"
      paragraph="Note: Remember to solve question no. 3 from the exercises in Chapter 01. And be prepared for the Quiz based on the given Exercise."
      dateIconSrc="src/assets/icons/dateIcon.svg"
      labelIconSrc="src/assets/icons/venueIcon.svg"
      date="01-08-2024"
      time="9:55 AM - 10:50 AM"
      label="4th Sem MCA-B"
      subLabel="AB1 - 402"
      buttonText="Take Attendance"
      isButtonVisible={true}
    />
  ];

  const Attendancecolumns = [
    { name: 'Sl. No', width: '15%' },
    { name: 'Subject', width: '30%' },
    { name: 'Scheduled', width: '15%' },
    { name: 'Taken', width: '15%' },
    { name: 'Missed', width: '15%' },
    { name: '%', width: '10%' }
  ];

  const Attendancerows = [
    ['01', 'CN', '25', '25', '00', '100'],
    ['02', 'Java', '25', '25', '00', '100'],
    ['03', 'DBMS', '25', '25', '00', '100'],
    ['04', 'Python', '25', '25', '00', '100']
  ];

  const ActiveSubjectColumns = [
    { name: 'Sl. No', width: '15%' },
    { name: 'Subject', width: '30%' },
    { name: 'Course Code', width: '25%' },
    { name: 'Batch', width: '15%' },
    { name: 'Sem', width: '15%' }
  ];

  const ActiveSubjectRows = [
    ['01', 'CN', '21MCA101', 'CSE A', '03'],
    ['02', 'Java', '21MCA102', 'MCA A', '05'],
    ['03', 'DBMS', '21MCA103', 'AIML C', '07'],
    ['04', 'Python', '21MCA104', 'MCA B', '01']
  ];
  return (
    <div className="dashboard">
      <div className="dashboard-contents">
        <Header
          profileSrc="src/assets/images/profile.png"
          greetingText="Namasthe!"
          bellIconSrc="src/assets/icons/notificationBell.svg"
          notificationDot={true}
          menuIconSrc="src/assets/icons/menu.svg"
          closeIconSrc="src/assets/icons/menuClose.svg"
        />
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
          <CarouselCard content={contentData} />
          {/* <StudentAttendanceSummary /> */}
        </div>
        <div className="dashboard-examinations-section">
          <SectionHeader
            title="Attendance"
            tagline="Where Every Tick Counts!"
          />
          <Table columns={Attendancecolumns} rows={Attendancerows} />
          <div className="statistics-card-container">
            <StatisticsCard label="Subjects" data="06" variant="normal" />
            <StatisticsCard label="Average" data="69" variant="normal" />
            <StatisticsCard label="Missed" data="11" variant="warning" />
          </div>
        </div>
        <div className="dashboard-calendar-section">
          <SectionHeader
            title="Active Subjects"
            tagline="Your Subject Lineup at a Glance!"
          />
          <Table columns={ActiveSubjectColumns} rows={ActiveSubjectRows} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
