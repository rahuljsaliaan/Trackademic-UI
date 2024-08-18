import ContentCard from '@/components/card/ContentCard';
import React from 'react';
import {
  IFacultyScheduleDetails,
  IFacultyScheduleDocument,
  ScheduleDay
} from 'trackademic-schema-toolkit';
import { useGetFacultySchedule } from '@/features/schedule/hooks/useGetFacultySchedule';
import dateIcon from '@/assets/icons/dateIcon.svg';
import labelIcon from '@/assets/icons/venueIcon.svg';
import { DateFormat } from '@/types/enum.types';
import { format } from 'date-fns';

interface ISubjectScheduleCardProps {
  day: ScheduleDay;
  facultyScheduleId: IFacultyScheduleDocument['id'] | null;
}

const SubjectScheduleCard: React.FC<ISubjectScheduleCardProps> = ({
  day,
  facultyScheduleId
}) => {
  const { facultySchedule, status } = useGetFacultySchedule(
    day,
    facultyScheduleId as string | null
  );

  if (status === 'pending') {
    return <div>Loading...</div>;
  }

  if (status === 'error' || !facultySchedule) {
    return <div>Error loading schedule.</div>;
  }

  const contentData = facultySchedule.map((data: IFacultyScheduleDetails) => ({
    heading: data.timeSlot.subject.name,
    paragraph: data.timeSlot.note || '',
    dateIconSrc: dateIcon,
    labelIconSrc: labelIcon,
    date: format(new Date(), DateFormat.Default),
    time: `${data.timeSlot.startTime} - ${data.timeSlot.endTime}`,
    label: `${data.semester} Sem ${data.timeSlot.programme.shortName}-${data.timeSlot.batch.section}`,
    subLabel: ` ${data.timeSlot.batch.block}-${data.timeSlot.batch.roomNumber}`,
    buttonText: 'Take Attendance',
    isButtonVisible: false,
    facultyScheduleId: data.id as string
  }));

  return <ContentCard {...contentData[0]} />;
};

export default SubjectScheduleCard;
