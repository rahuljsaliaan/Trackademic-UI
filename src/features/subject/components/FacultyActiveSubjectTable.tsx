import {
  IAssignedSubjectDocument,
  IBatchDocument,
  IProgrammeDocument,
  ISubjectDocument
} from 'trackademic-schema-toolkit';
import React from 'react';
import Table from '@/components/table/Table';
import { useGetFacultyActiveSubjects } from '@/features/subject';

export const FacultyActiveSubjectTable: React.FC = () => {
  const { assignedSubjectsData, status } = useGetFacultyActiveSubjects();

  const ActiveSubjectColumns = [
    { name: 'Sl. No', width: '15%' },
    { name: 'Subject', width: '30%' },
    { name: 'Course Code', width: '25%' },
    { name: 'Batch', width: '15%' },
    { name: 'Sem', width: '15%' }
  ];

  const ActiveSubjectRows =
    assignedSubjectsData?.map(
      (assignedSubject: IAssignedSubjectDocument, index) => [
        (index + 1).toString(),
        (assignedSubject.subject as ISubjectDocument).shortName,
        (assignedSubject.subject as ISubjectDocument).subjectCode,
        (
          (assignedSubject.batch as IBatchDocument)
            .programme as IProgrammeDocument
        ).shortName +
          (assignedSubject.batch as IBatchDocument).section.toString(),
        (assignedSubject.batch as IBatchDocument).semester.toString()
      ]
    ) || [];

  if (!assignedSubjectsData && status === 'pending') {
    return <div>Loading...</div>;
  }

  return <Table columns={ActiveSubjectColumns} rows={ActiveSubjectRows} />;
};
