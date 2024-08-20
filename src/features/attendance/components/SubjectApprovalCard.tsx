import { format } from 'date-fns';
import React from 'react';
import {
  IAttendanceDocument,
  ISubjectDocument,
  IUserDocument,
  IBatchDocument,
  IProgrammeDocument
} from 'trackademic-schema-toolkit';
import ContentCard from '@/components/card/ContentCard';
import { useGetAllAttendance } from '@/features/attendance';
import dateIcon from '@/assets/icons/dateIcon.svg';
import labelIcon from '@/assets/icons/venueIcon.svg';
import { DateFormat } from '@/types/enum.types';

interface ISubjectApprovalCard {
  attendanceId: string | null;
}

const SubjectApprovalCard: React.FC<ISubjectApprovalCard> = ({
  attendanceId
}) => {
  const { allAttendances, status } = useGetAllAttendance({
    approved: false,
    attendanceId: attendanceId as unknown as string
  });

  if (!allAttendances || status === 'pending') {
    return <div>Loading...</div>;
  }

  const contentData = allAttendances.map((data: IAttendanceDocument) => {
    const day = `${format(new Date(data.date), 'EEEE')[0].toLocaleLowerCase()}${format(new Date(data.date), 'EEEE').slice(1)}`;

    const result = {
      heading: (data.subject as ISubjectDocument).name,
      paragraph: `Requested By: ${(data.faculty as IUserDocument).name}`,
      dateIconSrc: dateIcon,
      labelIconSrc: labelIcon,
      date: format(new Date(data.date), DateFormat.Default),
      time: format(new Date(data.date), 'HH:mm:ss'),
      label: `${(data.batch as IBatchDocument).semester} Sem ${((data.batch as IBatchDocument).programme as IProgrammeDocument).shortName}-${(data.batch as IBatchDocument).section}`,
      subLabel: ` ${(data.batch as IBatchDocument).block}-${(data.batch as IBatchDocument).roomNumber}`,
      buttonText: 'View in Detail',
      isButtonVisible: false,
      id: data.id as unknown as string,
      day: day
    };

    return result;
  });
  return <ContentCard {...contentData[0]} />;
};

export default SubjectApprovalCard;
