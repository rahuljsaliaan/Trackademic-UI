import React from 'react';
import Table from '@/components/table/Table';
import { useGetCurrentUser } from '@/features/users';
import { useGetAllBatches } from '@/features/batch';
import { IProgrammeDocument } from 'trackademic-schema-toolkit';

export const ClassTable: React.FC = () => {
  TextTrackCueList;

  const { user } = useGetCurrentUser();
  const programmeId = (user?.programme as IProgrammeDocument)?.id as string;

  const { allBatches,status } = useGetAllBatches({ programmeId });

  const AttendanceColumns = [
    { name: 'Sl.No', width: '15%' },
    { name: 'Class', width: '50%' },
    { name: 'Section', width: '15%' },
    { name: 'Semester', width: '20%' }
  ];

    if (!allBatches && status === 'pending') {
      return <div>Loading...</div>;
    }

    const AttendanceRows = !allBatches
      ? []
      : allBatches?.map((data, index) => [
          `${index + 1}`,
          `${(data.programme as IProgrammeDocument).name}`,
          `${data.section}`,
          `${data.semester}`
        ]);

  return (
    <>
      <Table columns={AttendanceColumns} rows={AttendanceRows} />
    </>
  );
};
