import SectionHeader from '@/components/dashboard/SectionHeader';
import { MarkAttendanceCard } from '@/features/attendance';
import InputWithoutLabel from '@/components/formElements/inputs/InputWithoutLabel';
import Button from '@/components/formElements/buttons/Button';
import PageLayout from '@/layouts/PageLayout';
import { useGetScheduleDay } from '@/features/schedule/hooks/useGetScheduleDay';
import { FacultyScheduleCarousel, useGetFacultySchedule } from '@/features/schedule';
// import { useGetEnrolledStudent } from '@/features/enrollment';
// import { useGetFacultySchedule } from '@/features/schedule';

export default function AddAttendance() {


  const day = useGetScheduleDay();
  
  const { facultySchedule, status } = useGetFacultySchedule(day);


    const contentData = facultySchedule.map((data: IFacultyScheduleDetails) => ({
    heading: data.timeSlot.subject.name,
    paragraph: data.timeSlot.note ? data.timeSlot.note : '',
    dateIconSrc: dateIcon,
    labelIconSrc: labelIcon,
    date: format(new Date(), DateFormat.Default),
    time: `${data.timeSlot.startTime} - ${data.timeSlot.endTime}`,
    label: `${data.semester} Sem ${data.timeSlot.programme.shortName}-${data.timeSlot.batch.section}`,
    subLabel: ` ${data.timeSlot.batch.block}-${data.timeSlot.batch.roomNumber}`,
    buttonText: 'Take Attendance',
    isButtonVisible: true,
    subjectId: data.timeSlot.subject.id as string,
  }));

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
        <FacultyScheduleCarousel day={day} />
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
