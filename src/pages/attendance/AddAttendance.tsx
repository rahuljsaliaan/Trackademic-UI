import { useState } from 'react';
import SectionHeader from '@/components/dashboard/SectionHeader';
import ContentCard from '@/components/card/ContentCard';
import { MarkAttendanceCard } from '@/features/attendance';
import InputWithoutLabel from '@/components/formElements/inputs/InputWithoutLabel';
import Button from '@/components/formElements/buttons/Button';
import PageLayout from '@/layouts/PageLayout';
import StatisticsCard from '@/components/dashboard/StatisticsCard';
import Popup from '@/components/popup/Popup'; // Import the Popup component

interface Student {
  id: number;
  status: 'normal' | 'warning' | 'absent';
  photoUrl: string;
}

export default function AddAttendance() {
  const [students, setStudents] = useState<Student[]>([
    { id: 1, status: 'normal', photoUrl: '/src/assets/images/profile.png' },
    { id: 2, status: 'normal', photoUrl: '/src/assets/images/profile.png' },
    { id: 3, status: 'normal', photoUrl: '/src/assets/images/profile.png' }
  ]);

  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleAllPresent = () => {
    setStudents((prevStudents) =>
      prevStudents.map((student) => ({ ...student, status: 'normal' }))
    );
  };

  const toggleStudentStatus = (id: number) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === id
          ? {
              ...student,
              status: student.status === 'normal' ? 'absent' : 'normal'
            }
          : student
      )
    );
  };

  const handleSubmit = () => {
    setIsPopupVisible(true);
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

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
          margin="0"
        />
      </div>
      <div className="take-attendance-container">
        <div className="take-attendance-header-container">
          <InputWithoutLabel id="" type="text" placeholder="Search" />
          <div className="take-attendance-header-sub-container">
            <Button
              text="All Present"
              width="auto"
              onClick={handleAllPresent}
            />
          </div>
        </div>
        <hr className="take-attendance-hr" />
        {students.map((student) => (
          <MarkAttendanceCard
            key={student.id}
            status={student.status}
            photoUrl={student.photoUrl}
            onClick={() => toggleStudentStatus(student.id)}
          />
        ))}
        <div className="take-attendance-statistics-card-container">
          <StatisticsCard label="Present" data="04" variant="normal" />
          <StatisticsCard label="Absent" data="06" variant="warning" />
        </div>
        <div className="take-attendance-submit-button-container">
          <Button text="Submit" width="100%" onClick={handleSubmit} />
        </div>
      </div>
      <Popup
        isVisible={isPopupVisible}
        onClose={handleClosePopup}
        isTextBoxEnabled={true}
      />
    </PageLayout>
  );
}
