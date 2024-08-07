import Header from '@/layouts/Header';
import SectionHeader from '@/components/dashboard/SectionHeader';
import InputSelectWithLabel from '@/components/formElements/inputs/InputSelectWithLabel';
import Table from '@/components/table/Table';
import Footer from '@/components/dashboard/Footer';
import { useQueryParams } from '@/hooks/useQueryParams';
import { ChangeEvent,useState } from 'react';
import StudentAttendanceSummary from '@/features/attendance/components/StudentAttendanceSummary';
import { APIQueryParamV1, IBatchDocument } from 'trackademic-schema-toolkit';
import { useNavigate } from 'react-router-dom';
import { createSemester } from '@/utils/helper';
import { useGetStudentAttendance } from '@/features/attendance/hooks/useGetStudentAttendance';
import { useGetCurrentUser } from '@/features/users/hooks/useGetCurrentUser';

export default function StudentAttendance() {
  const query = useQueryParams();
  const navigate = useNavigate();
  const { user } = useGetCurrentUser();

  const [semester, setSemester] = useState(
    (user?.studentDetails?.batch as IBatchDocument).semester
  );
  const { attendanceData } = useGetStudentAttendance(semester);

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>)=> {
    setSemester(parseInt(event.target.value));
    query.set(APIQueryParamV1.Semester, event.target.value);
    navigate({ search: query.toString() });
  };

  const columns = [
    { name: 'Sl. No', width: '10%' },
    { name: 'Subject', width: '50%' },
    { name: 'H', width: '10%' },
    { name: 'P', width: '10%' },
    { name: 'A', width: '10%' },
    { name: '%', width: '10%' }
  ];

  const rows = !attendanceData
    ? []
    : attendanceData.results.map((data, index) => {
        return [
          `0${index + 1}`,
          `${data.subject.name}`,
          '50',
          `${data.totalPresent}`,
          `${data.totalAbsent}`,
          `${data.averageStatus * 100}`
        ];
      });

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
          <Table columns={columns} rows={rows} />
          <StudentAttendanceSummary />
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
