import SectionHeader from '@/components/dashboard/SectionHeader';
import ContentCard from '@/components/card/ContentCard';
import { MarkAttendanceCard } from '@/features/attendance';
import InputWithoutLabel from '@/components/formElements/inputs/InputWithoutLabel';
import Button from '@/components/formElements/buttons/Button';
import PageLayout from '@/layouts/PageLayout';
// import { useGetEnrolledStudent } from '@/features/enrollment';
// import { useGetFacultySchedule } from '@/features/schedule';

export default function AddAttendance() {
  // const { facultySchedule, status } = useGetFacultySchedule();

  // const { enrolledStudents } = useGetEnrolledStudent(facultySchedule.);
  return (
    <PageLayout>
      <div className="dashboard-attendance-section">
        <SectionHeader
          title="Record Attendance"
          tagline="Effortless Attendance Tracking"
          showButton={false}
        />
        <ContentCard
          heading="Data Structures and Algorithms"
          paragraph="Note: Remember to solve question no. 3 from the exercises in Chapter 01. And be prepared for the Quiz based on the given Exercise."
          dateIconSrc="src/assets/icons/dateIcon.svg"
          labelIconSrc="src/assets/icons/venueIcon.svg"
          date="01-08-2024"
          time="9:55 AM - 10:50 AM"
          label="4th Sem MCA-B"
          subLabel="AB1 - 402"
        />
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
