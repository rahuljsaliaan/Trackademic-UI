import Header from '@/layouts/Header';
import Quote from '@/components/card/Quote';
import SectionHeader from '@/components/dashboard/SectionHeader';
import CarouselCard from '@/components/card/CarouselCard';
import ContentCard from '@/components/card/ContentCard';
import Footer from '@/components/dashboard/Footer';
import FacultyActiveSubjectTable from '@/features/subject/components/FacultyActiveSubjectTable';
import AttendanceStats from '@/features/attendance/components/AttendanceStats';
// import StudentAttendanceSummary from '@/features/attendance/components/StudentAttendanceSummary';

export default function FacultyDashboard() {
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
          <AttendanceStats />
        </div>
        <div className="dashboard-calendar-section">
          <SectionHeader
            title="Active Subjects"
            tagline="Your Subject Lineup at a Glance!"
          />
          <FacultyActiveSubjectTable />
        </div>
      </div>
      <Footer />
    </div>
  );
}
