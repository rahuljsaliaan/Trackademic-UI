import { useNavigate } from 'react-router-dom';
import SectionHeader from '@/components/dashboard/SectionHeader';
import InputSelectWithLabel from '@/components/formElements/inputs/InputSelectWithLabel';
import { useQueryParams } from '@/hooks/useQueryParams';
import { ChangeEvent, useState } from 'react';
import {
  StudentAttendanceSummary,
  StudentAttendanceTable
} from '@/features/attendance';
import { APIQueryParamV1, IBatchDocument } from 'trackademic-schema-toolkit';
import { createSemester } from '@/utils/helper';
import { useGetCurrentUser } from '@/features/users/hooks/useGetCurrentUser';
import PageLayout from '@/layouts/PageLayout';

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
    <PageLayout>
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
          <StudentAttendanceTable
            studentId={user?.id as string}
            semester={semester}
          />
        )}

        <StudentAttendanceSummary
          studentId={user?.id as string}
          semester={semester}
        />
      </div>
      <div className="attendance-absent-calender-container">
        <label className="attendance-absent-calender">Absentee Calendar</label>
        <InputSelectWithLabel
          label="Pick Your Subject"
          placeholder="Tap Here to Choose"
          options={options}
          // value={selectedValue}
          // onChange={handleSelectChange}
        />
        {/* Add calendar here */}
      </div>
    </PageLayout>
  );
}
