import React from 'react';
import Table from '@/components/table/Table';
import { useGetCurrentUser } from '@/features/users';
import { useGetAllBatches } from '@/features/batch';
import { IProgrammeDocument } from 'trackademic-schema-toolkit';

export const ClassTable: React.FC = () => {
  const AttendanceColumns = [
    { name: 'Sl.No', width: '15%' },
    { name: 'Dept', width: '50%' },
  ];

  const { user } = useGetCurrentUser();
  const programmeId = (user?.programme as IProgrammeDocument)?.id as string;

  const { allBatches, status } = useGetAllBatches({ programmeId });

  if (!allBatches && status === 'pending') {
    return <div>Loading...</div>;
  }

  const AttendanceRows = !allBatches
    ? []
    : allBatches?.map((data, index) => [
        `${index + 1}`,
        `${(data.programme as IProgrammeDocument).name}`,
      ]);

  return (
    <>
      <Table columns={AttendanceColumns} rows={AttendanceRows} />
    </>
  );
};
