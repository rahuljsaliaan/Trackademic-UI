import { useNavigate } from 'react-router-dom';
import { Calendar } from '@/components/shadcn/ui/calendar';
import {
  APIQueryParamV1,
  IBatchDocument,
  IEnrollmentDocument,
  ISubjectDocument
} from 'trackademic-schema-toolkit';

import SectionHeader from '@/components/dashboard/SectionHeader';
import InputSelectWithLabel from '@/components/formElements/inputs/InputSelectWithLabel';
import { useQueryParams } from '@/hooks/useQueryParams';
import { ChangeEvent, useEffect, useMemo, useState } from 'react';
import {
  StudentAttendanceSummary,
  StudentAttendanceTable,
  useGetStudentAttendance
} from '@/features/attendance';
import { createSemester } from '@/utils/helper';
import { useGetCurrentUser } from '@/features/users';
import PageLayout from '@/layouts/PageLayout';
import { useGetAbsentRecords } from '@/features/attendance';
import { getMonth, getYear } from 'date-fns';
import { useQueryClient } from '@tanstack/react-query';
import { QueryKeys } from '@/types/enum.types';

export default function StudentAttendance() {
  const query = useQueryParams();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { user } = useGetCurrentUser();

  const paramSemester = useMemo(() => {
    return query.has(APIQueryParamV1.Semester)
      ? parseInt(query.get(APIQueryParamV1.Semester) as string)
      : null;
  }, [query]);

  const paramSubject = useMemo(() => {
    return query.has(APIQueryParamV1.Subject)
      ? (query.get(APIQueryParamV1.Subject) as string)
      : null;
  }, [query]);

  const [semester, setSemester] = useState(
    (user?.studentDetails?.batch as IBatchDocument).semester
  );

  const [subject, setSubject] = useState<string>('');
  const year = getYear(new Date());
  const month = getMonth(new Date()) + 1;

  useEffect(() => {
    if (paramSemester) {
      setSemester(paramSemester);
    }
    if (paramSubject) {
      setSubject(paramSubject);
    }

    queryClient.removeQueries({ queryKey: [QueryKeys.AbsentRecords] });
  }, [queryClient, paramSemester, paramSubject]);

  const { attendanceData } = useGetStudentAttendance({ semester });
  const { absentRecordsData } = useGetAbsentRecords({
    semester,
    subjectId: subject,
    year,
    month
  });

  const allAbsentDate = absentRecordsData?.absentRecords?.map(
    (record) => new Date(record.date)
  );

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSemester(parseInt(event.target.value));
    query.set(APIQueryParamV1.Semester, event.target.value);
    navigate({ search: query.toString() });
  };

  const handleSubjectSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSubject(event.target.value);
    query.set(APIQueryParamV1.Subject, event.target.value);
    navigate({ search: query.toString() });
  };

  const options = createSemester(
    (user?.studentDetails?.batch as IBatchDocument).semester
  ).map((item) => {
    return { value: item, label: `Semester 0${item}` };
  });

  const subjectOptions = attendanceData?.map((data: IEnrollmentDocument) => {
    const subject = data.subject as ISubjectDocument;

    return {
      value: subject.id as string,
      label: subject.name as string
    };
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

        {user && <StudentAttendanceTable semester={semester} />}

        <StudentAttendanceSummary
          studentId={user?.id as string}
          semester={semester}
        />
      </div>
      <div className="attendance-absent-calender-container flex flex-col gap-3">
        <label className="attendance-absent-calender">Absentee Calendar</label>
        <InputSelectWithLabel
          label="Pick Your Subject"
          placeholder="Tap Here to Choose"
          options={subjectOptions ? subjectOptions : []}
          value={subject}
          onChange={handleSubjectSelectChange}
        />
        {/* Add calendar here */}
        <div className="flex justify-center">
          {/* TODO: Get month from the calendar */}
          <Calendar mode="multiple" selected={allAbsentDate} />
        </div>
      </div>
    </PageLayout>
  );
}
