import { format } from 'date-fns';
import React from 'react';
import {
  IAttendanceDocument,
  ISubjectDocument,
  IUserDocument,
  IBatchDocument,
  IProgrammeDocument,
  APIResourceV1
} from 'trackademic-schema-toolkit';
import { AppRoute, DateFormat } from '@/types/enum.types';
import dateIcon from '@/assets/icons/dateIcon.svg';
import labelIcon from '@/assets/icons/venueIcon.svg';
import CarouselCard from '@/components/card/CarouselCard';
import { useGetAllAttendance } from '@/features/attendance';
interface IAttendanceCarouselProps {}

export const AttendanceApprovalCarousel: React.FC<
  IAttendanceCarouselProps
> = () => {
  const { allAttendances, status } = useGetAllAttendance({ approved: false });

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
      isButtonVisible: true,
      id: data.id as unknown as string,
      day: day
    };

    return result;
  });

  return (
    <CarouselCard
      contentData={contentData}
      navigationLink={`${AppRoute.ApproveAttendance}?${APIResourceV1.Attendance}`}
    />
  );
};
