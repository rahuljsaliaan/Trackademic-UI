import Header from '@/layouts/Header';
import SectionHeader from '@/components/dashboard/SectionHeader';
import InputSelectWithLabel from '@/components/formElements/inputs/InputSelectWithLabel';
import Footer from '@/components/dashboard/Footer';
import { useQueryParams } from '@/hooks/useQueryParams';
import { ChangeEvent, useState } from 'react';
import StudentAttendanceSummary from '@/features/attendance/components/StudentAttendanceSummary';
import { APIQueryParamV1, IBatchDocument } from 'trackademic-schema-toolkit';
import { useNavigate } from 'react-router-dom';
import { createSemester } from '@/utils/helper';
import { useGetCurrentUser } from '@/features/users/hooks/useGetCurrentUser';
import StudentAttendanceTable from '@/features/attendance/components/StudentAttendanceTable';

export default function StudentAttendance() {
  const query = useQueryParams();
  const navigate = useNavigate();
  const { user } = useGetCurrentUser();

  const [semester, setSemester] = useState(
    (user?.studentDetails?.batch as IBatchDocument).semester
  );

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSemester(parseInt(event.target.value));
    query.set(APIQueryParamV1.Semester, event.target.value);
    navigate({ search: query.toString() });
  };

  const options = createSemester(
    (user?.studentDetails?.batch as IBatchDocument).semester
  ).map((item) => {
    return { value: item, label: `Semester 0${item}` };
  });

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
        <div className="dashboard-attendance-section">
          <SectionHeader
            title="Attendance"
            tagline="Dive into Your Semester Stories!"
            showButton={false}
          />
          <InputSelectWithLabel
            label="Pick Your Semester"
            placeholder="Tap Here to Choose"
            options={options}
            value={semester}
            onChange={handleSelectChange}
          />

          {user && (
            <StudentAttendanceTable studentId={user?.id as string} semester={semester} />
          )}

          <StudentAttendanceSummary studentId={user?.id as string} semester={semester}/>
        </div>
        <div className="attendance-absent-calender-container">
          <label className="attendance-absent-calender">
            Absentee Calendar
          </label>
          <InputSelectWithLabel
            label="Pick Your Subject"
            placeholder="Tap Here to Choose"
            options={options}
            // value={selectedValue}
            // onChange={handleSelectChange}
          />
          {/* Add calendar here */}
        </div>
      </div>
      <Footer />
    </div>
  );
}
