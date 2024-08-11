import { format } from 'date-fns';
import React from 'react';
import {
  IFacultyScheduleDetails,
  ScheduleDay
} from 'trackademic-schema-toolkit';
import { useGetFacultySchedule } from '@/features/schedule';
import { AppRoute, DateFormat } from '@/types/enum.types';
import dateIcon from '@/assets/icons/dateIcon.svg';
import labelIcon from '@/assets/icons/venueIcon.svg';
import CarouselCard from '@/components/card/CarouselCard';

interface IFacultyScheduleCarouselProps {
  day: ScheduleDay;
}

export const FacultyScheduleCarousel: React.FC<
  IFacultyScheduleCarouselProps
> = ({ day }) => {
  const { facultySchedule, status } = useGetFacultySchedule(day);

  if (!facultySchedule || status === 'pending') {
    return <div>Loading...</div>;
  }

  const contentData = facultySchedule.map((data: IFacultyScheduleDetails) => ({
    heading: data.timeSlot.subject.name,
    paragraph: data.timeSlot.note ? data.timeSlot.note : '',
    dateIconSrc: dateIcon,
    labelIconSrc: labelIcon,
    date: format(new Date(), DateFormat.Default),
    time: `${data.timeSlot.startTime} - ${data.timeSlot.endTime}`,
    label: `${data.semester} Sem ${data.timeSlot.programme.shortName}-${data.timeSlot.batch.section}`,
    subLabel: ` ${data.timeSlot.batch.block}-${data.timeSlot.batch.roomNumber}`,
    buttonText: 'Take Attendance',
    isButtonVisible: true
  }));

  return (
    <CarouselCard
      contentData={contentData}
      navigationLink={AppRoute.AddAttendance}
    />
  );
};
