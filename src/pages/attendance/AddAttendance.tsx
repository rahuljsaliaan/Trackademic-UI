import { useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AttendanceStatus } from 'trackademic-schema-toolkit';

import SectionHeader from '@/components/dashboard/SectionHeader';
import { MarkAttendanceCard, useAddAttendance } from '@/features/attendance';
import InputWithoutLabel from '@/components/formElements/inputs/InputWithoutLabel';
import Button from '@/components/formElements/buttons/Button';
import PageLayout from '@/layouts/PageLayout';
import { useGetScheduleDay } from '@/features/schedule/hooks/useGetScheduleDay';
import { useGetFacultyScheduleParams } from '@/features/subject/hooks/useGetFacultyScheduleParams';
import SubjectScheduleCard from '@/features/schedule/components/SubjectScheduleCard';
import StatisticsCard from '@/components/dashboard/StatisticsCard';
import Popup from '@/components/popup/Popup'; // Import the Popup component
import { useGetEnrolledStudent } from '@/features/enrollment';
import { useGetFacultySchedule } from '@/features/schedule';
import { RootColor } from '@/types/enum.types';
import { getDateFromTimeString } from '@/utils/helper';
import { useAddOrUpdateNote } from '@/features/assignedSubject/hooks/useAddOrUpdateNote';

interface Student {
  id: string;
  status: AttendanceStatus;
  photoUrl: string;
  name: string;
  usn: string;
  held: number;
  present: number;
  percentage: number;
}

export default function AddAttendance() {
  const day = useGetScheduleDay();
  const facultyScheduleId = useGetFacultyScheduleParams();
  const { facultySchedule } = useGetFacultySchedule(day, facultyScheduleId);
  const { addAttendanceMutate, status } = useAddAttendance();
  const { addOrUpdateNote } = useAddOrUpdateNote();
  const navigate = useNavigate();

  const batchId = facultySchedule[0]?.timeSlot.batch.id as string;
  const subjectId = facultySchedule[0]?.timeSlot.subject.id as string;

  const { enrolledStudents } = useGetEnrolledStudent({ batchId, subjectId });

  const [students, setStudents] = useState<Student[]>([]);
  const [note, setNote] = useState<string>('');

  useEffect(() => {
    if (enrolledStudents) {
      const students = enrolledStudents.map(({ studentDetails }) => ({
        id: studentDetails.id as string,
        status: AttendanceStatus.Present,
        photoUrl: '',
        name: studentDetails.name,
        usn: studentDetails.registerNumber,
        held: studentDetails.attendanceSummary.totalAttendanceRecords,
        present: studentDetails.attendanceSummary.totalPresent,
        percentage: studentDetails.attendanceSummary.averageStatus
      }));
      setStudents(students);
      setFilteredStudents(students);
    }
  }, [enrolledStudents]);

  useEffect(() => {
    if (status === 'success') {
      // TODO: redirect to the desired view page
      // addOrUpdateNote({
      //   assignedSubjectId: facultySchedule[0].timeSlot.assignedSubject
      //     .id as string,
      //   note
      // });
      // navigate(AppRoute.FacultyDashboard);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status, facultySchedule, addOrUpdateNote, navigate]);

  const [filteredStudents, setFilteredStudents] = useState<Student[]>(students);
  const [searchTerm, setSearchTerm] = useState('');
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const getAttendanceCount = useCallback(
    (status: AttendanceStatus): number => {
      return students.filter((student) => student.status === status).length;
    },
    [students]
  );

  const presentCount = useMemo(() => {
    return getAttendanceCount(AttendanceStatus.Present);
  }, [getAttendanceCount]);

  const absentCount = useMemo(() => {
    return getAttendanceCount(AttendanceStatus.Absent);
  }, [getAttendanceCount]);

  const handleAllPresentOrAbsent = (status: AttendanceStatus) => {
    const updatedStudents: Student[] = students.map((student) => ({
      ...student,
      status
    }));
    setStudents(updatedStudents);
    setFilteredStudents(updatedStudents);
  };

  const toggleStudentStatus = (id: string) => {
    const updatedStudents: Student[] = students.map((student) =>
      student.id === id
        ? {
            ...student,
            status:
              student.status === AttendanceStatus.Present
                ? AttendanceStatus.Absent
                : AttendanceStatus.Present
          }
        : student
    );
    setStudents(updatedStudents);
    setFilteredStudents((prevFiltered) =>
      prevFiltered.map((student) =>
        student.id === id
          ? {
              ...student,
              status:
                student.status === AttendanceStatus.Present
                  ? AttendanceStatus.Absent
                  : AttendanceStatus.Present
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

  const handleConfirmPopup = () => {
    addAttendanceMutate({
      batchId,
      subjectId,
      studentAttendanceRecords: {
        date: getDateFromTimeString(facultySchedule[0].timeSlot.startTime),
        attendanceRecords: students.reduce<
          Record<string, { status: AttendanceStatus }>
        >((acc, student) => {
          acc[student.id] = {
            status: student.status
          };
          return acc;
        }, {})
      }
    });
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNote(e.target.value);
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
              text={`
                All-${
                  presentCount === students.length
                    ? AttendanceStatus.Absent
                    : AttendanceStatus.Present
                }
                `}
              width="auto"
              color={`
                ${
                  presentCount === students.length
                    ? RootColor.WarningColor
                    : RootColor.AccentColor
                }
                `}
              onClick={() =>
                handleAllPresentOrAbsent(
                  presentCount === students.length
                    ? AttendanceStatus.Absent
                    : AttendanceStatus.Present
                )
              }
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
              held={student.held}
              present={student.present}
              percentage={student.percentage}
            />
          ))
        ) : (
          <p>No students match the search criteria.</p>
        )}
        <div className="take-attendance-statistics-card-container">
          <StatisticsCard
            label="Present"
            data={presentCount}
            variant="normal"
          />
          <StatisticsCard label="Absent" data={absentCount} variant="warning" />
        </div>
        <div className="take-attendance-submit-button-container">
          <Button text="Submit" width="100%" onClick={handleSubmit} />
        </div>
      </div>
      <Popup
        isVisible={isPopupVisible}
        onClose={handleClosePopup}
        isTextBoxEnabled={true}
        onConfirm={handleConfirmPopup}
        onTextChange={handleTextChange}
      />
    </PageLayout>
  );
}
