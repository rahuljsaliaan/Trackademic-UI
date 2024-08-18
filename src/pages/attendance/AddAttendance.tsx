import { useState } from 'react';
import SectionHeader from '@/components/dashboard/SectionHeader';
import { MarkAttendanceCard } from '@/features/attendance';
import InputWithoutLabel from '@/components/formElements/inputs/InputWithoutLabel';
import Button from '@/components/formElements/buttons/Button';
import PageLayout from '@/layouts/PageLayout';
import { useGetScheduleDay } from '@/features/schedule/hooks/useGetScheduleDay';
import { useGetFacultyScheduleParams } from '@/features/subject/hooks/useGetFacultyScheduleParams';
import SubjectScheduleCard from '@/features/schedule/components/SubjectScheduleCard';

import StatisticsCard from '@/components/dashboard/StatisticsCard';
import Popup from '@/components/popup/Popup'; // Import the Popup component

interface Student {
  id: number;
  status: 'normal' | 'warning' | 'absent';
  photoUrl: string;
  name: string;
  usn: string;
}

export default function AddAttendance() {
  const day = useGetScheduleDay();
  const facultyScheduleId = useGetFacultyScheduleParams();

  // const { enrolledStudents } = useGetEnrolledStudent(facultySchedule.);
  const [students, setStudents] = useState<Student[]>([
    {
      id: 1,
      status: 'normal',
      photoUrl: '/src/assets/images/profile.png',
      name: 'John Doe',
      usn: '4SO22MC001'
    },
    {
      id: 2,
      status: 'normal',
      photoUrl: '/src/assets/images/profile.png',
      name: 'Jane Smith',
      usn: '4SO22MC002'
    },
    {
      id: 3,
      status: 'normal',
      photoUrl: '/src/assets/images/profile.png',
      name: 'Alice Johnson',
      usn: '4SO22MC003'
    }
  ]);

  const [filteredStudents, setFilteredStudents] = useState<Student[]>(students);
  const [searchTerm, setSearchTerm] = useState('');
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleAllPresent = () => {
    const updatedStudents: Student[] = students.map((student) => ({
      ...student,
      status: 'normal'
    }));
    setStudents(updatedStudents);
    setFilteredStudents(updatedStudents);
  };

  const toggleStudentStatus = (id: number) => {
    const updatedStudents: Student[] = students.map((student) =>
      student.id === id
        ? {
            ...student,
            status: student.status === 'normal' ? 'absent' : 'normal'
          }
        : student
    );
    setStudents(updatedStudents);
    setFilteredStudents((prevFiltered) =>
      prevFiltered.map((student) =>
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

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    if (value === '') {
      setFilteredStudents(students);
    } else {
      const filtered = students.filter(
        (student) =>
          student.name.toLowerCase().includes(value) ||
          student.usn.toLowerCase().includes(value)
      );
      setFilteredStudents(filtered);
    }
  };

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
          <InputWithoutLabel
            id="search"
            type="text"
            placeholder="Search by Name or USN"
            value={searchTerm}
            onChange={handleSearch}
          />
          <div className="take-attendance-header-sub-container">
            <Button
              text="All Present"
              width="auto"
              onClick={handleAllPresent}
            />
          </div>
        </div>
        <hr className="take-attendance-hr" />
        {filteredStudents.length > 0 ? (
          filteredStudents.map((student) => (
            <MarkAttendanceCard
              key={student.id}
              status={student.status}
              photoUrl={student.photoUrl}
              onClick={() => toggleStudentStatus(student.id)}
              name={student.name}
              usn={student.usn}
            />
          ))
        ) : (
          <p>No students match the search criteria.</p>
        )}
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
