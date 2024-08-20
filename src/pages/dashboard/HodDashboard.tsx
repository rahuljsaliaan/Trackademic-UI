import Quote from '@/components/card/Quote';
import SectionHeader from '@/components/dashboard/SectionHeader';
import {AttendanceApprovalCarousel} from '@/features/attendance/components/AttendanceApprovalCarousel';
import PageLayout from '@/layouts/PageLayout';
import { AppRoute } from '@/types/enum.types';
import { ClassTable } from '@/features/enrollment';
import Table from '@/components/table/Table';

const columns = [
  { name: 'Sl. No', width: '15%' },
  { name: 'Event', width: '50%' },
  { name: 'Date', width: '35%' }
];

const rows = [
  ['01', 'Sports Meet', 'August 15, 2024'],
  ['02', 'Cultural Fest 2024', 'September 5, 2024'],
  ['03', 'Joshiana', 'September 20, 2024'],
  ['04', 'Tiara', 'December 10, 2024']
];

export default function HodDashboard() {
  return (
    <PageLayout>
      <Quote
        heading="Quote of the Day"
        quote="A good teacher can inspire hope, ignite the imagination, and instill a love of learning."
        author="Brad Henry"
      />
      <div className="dashboard-attendance-section">
        <SectionHeader
          title="Approve or Deny?"
          tagline="Your Call on Attendance Changes"
          showButton={false}
        />
        <AttendanceApprovalCarousel />
      </div>
      <div className="dashboard-examinations-section">
        <SectionHeader
          title="Class Central"
          tagline="All the details at your fingertips"
          navigationLink={AppRoute.AttendanceHistory}
        />
        <ClassTable />
      </div>
      <div className="dashboard-announcements-section">
        <SectionHeader
          buttonText="Add"
          title="Announcements"
          tagline="Hot News & Cool Updates"
        />
      </div>
      <div className="dashboard-calendar-section">
        <SectionHeader
          title="Events & Calendar"
          tagline="Discover What's Coming Up Around You!"
        />
        <Table columns={columns} rows={rows} />
      </div>
    </PageLayout>
  );
}
