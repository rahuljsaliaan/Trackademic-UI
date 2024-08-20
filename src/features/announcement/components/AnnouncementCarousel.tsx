import React from 'react';
import CarouselCard from '@/components/card/CarouselCard';
import SectionHeader from '@/components/dashboard/SectionHeader';
import { useGetAnnouncements } from '@/features/announcement';
import { IUserDocument } from 'trackademic-schema-toolkit';

interface IAnnouncementCarouselProps {
  // props definition
}

const AnnouncementCarousel: React.FC<IAnnouncementCarouselProps> = () => {
  const { announcementData, status } = useGetAnnouncements();

  if (status === 'pending') {
    return <div>Loading...</div>;
  }

  const contentData = announcementData?.map((announcement) => ({
    heading: announcement.announcementSubject,
    paragraph: announcement.announcementContent,
    dateIconSrc: 'src/assets/icons/dateIcon.svg',
    labelIconSrc: 'src/assets/icons/authorIcon.svg',
    date: announcement.createdAt,
    time: announcement.createdAt,
    label: (announcement.announcer as IUserDocument).name,
    subLabel: (announcement.announcer as IUserDocument).role
  }));

  return (
    <div className="dashboard-announcements-section">
      <SectionHeader title="Announcements" tagline="Hot News & Cool Updates" />
      <CarouselCard contentData={contentData} />
    </div>
  );
};

export default AnnouncementCarousel;
