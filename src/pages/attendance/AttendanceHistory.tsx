import SectionHeader from '@/components/dashboard/SectionHeader';
// import InputSelectWithLabel from '@/components/formElements/inputs/InputSelectWithLabel';
import PageLayout from '@/layouts/PageLayout';
import { Calendar } from '@/components/shadcn/ui/calendar';
import React, { useState } from 'react';
import { AttendanceStats } from '@/features/attendance';
import { useGetFacultyActiveSubjects } from '@/features/subject';
import { APIResourceV1, ISubjectDocument } from 'trackademic-schema-toolkit';
import InputSelectWithLabel from '@/components/formElements/inputs/InputSelectWithLabel';
import { useQueryParams } from '@/hooks/useQueryParams';
import { useNavigate } from 'react-router-dom';

interface IAttendanceHistoryProps {
  // props definition
}

const AttendanceHistory: React.FC<IAttendanceHistoryProps> = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [selectedSubject, setSelectedSubject] = useState<string | undefined>(
    undefined
  );
  const query = useQueryParams();
  const navigate = useNavigate();

  const { assignedSubjectsData } = useGetFacultyActiveSubjects();

  const options =
    assignedSubjectsData?.map((assignedSubject) => ({
      value: (assignedSubject.subject as ISubjectDocument).id as string,
      label: (assignedSubject.subject as ISubjectDocument).name
    })) ?? [];

  const handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSubject(e.target.value);
    query.set(APIResourceV1.Subject, e.target.value);
    navigate({ search: query.toString() });
  };

  return (
    <PageLayout>
      <div className="dashboard-attendance-section">
        <SectionHeader
          title="Attendance History"
          tagline="Because We All Need a Second Look!"
          showButton={false}
        />
        <InputSelectWithLabel
          label="Pick your subject"
          placeholder="Tap Here to Choose"
          options={options}
          value={selectedSubject}
          onChange={handleOnChange}
        />
      </div>
      <div className="attendance-absent-calender-container flex justify-center">
        <Calendar
          mode="single"
          selected={date}
          onSelect={(date: unknown) => {
            if (date instanceof Date) {
              setDate(date as Date);
            }
          }}
        />
      </div>
      <div>
        <AttendanceStats />
      </div>
    </PageLayout>
  );
};

export default AttendanceHistory;
